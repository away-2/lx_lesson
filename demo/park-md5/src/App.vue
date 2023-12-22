<template>
  <div>
      <div @click.native="hanldeClick" class="upload_container">
          <input  name="请上传文件" type="file" ref="uploadRef"   @change="handleChange" :multiple="multiple" :accept="accept"/>
      </div>
      <div ref="uploadSubmit" @click="handleUpload()">上传</div>
      <div><span ref="uploadResultRef"></span></div>
      <div>md5Value:{{fileSparkMD5}}</div>
  </div>
</template>

<script setup>
import { ref,onMounted } from 'vue'
import { ElMessage, } from 'element-plus'
import SparkMD5 from 'spark-md5';
import { makePostRequest } from './axios.js';
defineProps({
    multiple:{
        type:Boolean,
        default:true
    },
    accept:{
        type:Array,
        default:[]
    }
})

const uploadRef = ref(); // input 的ref
const uploadResultRef = ref(null); //上传结果展示
const fileSparkMD5 = ref([]); // 文件MD5 唯一标识
const fileChuncks = ref([]); // 文件分片list
const chunckSize = ref(1*1024*1024); // 分片大小
const promiseArr = []; // 分片上传promise集合
const isUploadChuncks = ref([]); // 返回 [1,1,1,0,0,1] 格式数组(这里需要服务端返回的值是按照索引正序排列),标识对应下标上传状态 已上传：1 ，未上传：0
const uploadProgress = ref(0); // 上传进度
const uploadQuantity = ref(0); // 总上传数量

//检测文件是否上传过，
const checkFile = async (md5) => {
    const data = await makePostRequest('http://127.0.0.1:3000/checkChuncks', {md5});
    if (data.length === 0) {
        return false;
    }
    const {file_hash:fileHash,chunck_total_number:chunckTotal} = data[0]; // 文件的信息，hash值，分片总数，每条分片都是一致的内容
    if(fileHash === md5) {
        const allChunckStatusList = new Array(Number(chunckTotal)).fill(0); // 文件所有分片状态list,默认都填充为0（0: 未上传，1：已上传）
        const chunckNumberArr = data.map(item => item.chunck_number); // 遍历已上传的分片，获取已上传分片对应的索引 (chunck_number为每个文件分片的索引)
        chunckNumberArr.forEach((item,index) => {  // 遍历已上传分片的索引，将对应索引赋值为1，代表已上传的分片 （注意这里，服务端返回的值是按照索引正序排列）
            allChunckStatusList[item] = 1
        });
        isUploadChuncks.value = [...allChunckStatusList];
        return true; // 返回是否上传过，为下面的秒传，断点续传做铺垫
    }else {
        return false;
    }
}

//文件上传function
const handleUpload = async () => {
    const fileInput = uploadRef.value;
    const file = fileInput.files[0];
    // 未选择文件
    if (!file) {
        ElMessage({message:'请选择文件',type:'warning'});
        return
    } 
    //循环计算文件MD5，多文件上传时候
    const fileArr = fileInput.files;
    for(let i = 0; i < fileArr.length; i++){
        const data = await getFileMD5(fileArr[i]);
        fileSparkMD5.value.push({md5Value:data,fileKey:fileArr[i].name});
        sliceFile(fileArr[i]);
    }
    //检测文件是否已上传过
    const {md5Value} = fileSparkMD5.value[0];  // 这里已单文件做示例，默认取第一个文件
    const isFlag = await checkFile(md5Value); //是否上传过
    if(isFlag) {
        const hasEmptyChunk = isUploadChuncks.value.findIndex(item => item === 0); //在所有的分片状态中找到未上传的分片，如果没有表示已完整上传
        //上传过,并且已经完整上传，直接提示上传成功（秒传）
        if(hasEmptyChunk === -1) {
            ElMessage({message:'上传成功',type:'success'});
            return;
        }else {
            //上传缺失的分片文件,注意这里的索引,就是文件上传的序号
            for(let k = 0; k < isUploadChuncks.value.length; k++) {
                if(isUploadChuncks.value[k] !== 1) {
                    const {md5Value,fileKey} = fileSparkMD5.value[0]; //单文件处理，多文件需要遍历匹配对应的文件
                    let data = new FormData();
                    data.append('totalNumber',fileChuncks.value.length); // 分片总数
                    data.append("chunkSize",chunckSize.value); // 分片大小
                    data.append("chunckNumber",k); // 分片序号
                    data.append('md5',md5Value); // 文件唯一标识
                    data.append('name',fileKey); // 文件名称
                    data.append('file',new File([fileChuncks.value[k].fileChuncks],fileKey)) //分片文件
                    httpRequest(data,k,fileChuncks.value.length);
                }
            }
        }
    }else {
        //未上传，执行完整上传逻辑
        fileChuncks.value.forEach((e, i)=>{
            const {md5Value,fileKey} = fileSparkMD5.value.find(item => item.fileKey === e.fileName);
            let data = new FormData();
            data.append('totalNumber',fileChuncks.value.length);
            data.append("chunkSize",chunckSize.value);
            data.append("chunckNumber",i);
            data.append('md5',md5Value); //文件唯一标识
            data.append('name',fileKey);
            data.append('file',new File([e.fileChuncks],fileKey))
            httpRequest(data,i,fileChuncks.value.length);
        })
    }
    let uploadResult = uploadResultRef.value;
    Promise.all(promiseArr).then((e)=>{
        uploadResult.innerHTML = '上传成功';
        // pormise all 机制，所有上传完毕，执行正常回调，开启合并文件操作
        mergeFile(fileSparkMD5.value,fileChuncks.value.length);
    }).catch(e=>{
        ElMessage({message:'文件未上传完整，请继续上传',type:'error'});
        uploadResult.innerHTML = '上传失败';
    })
}

//file：文件内容，nowChunck:当前切片的排序，totalChunck:总的切片数量
const httpRequest = (file,nowChunck,totalChunck) => {
    const curPormise = new Promise((resolve,reject)=>{
        let uploadResult = uploadResultRef.value;
        let xhr = new XMLHttpRequest();
        // 当上传完成时调用
        xhr.onload = function() {
            if (xhr.status === 200) {
                // uploadResult.innerHTML = '上传成功'+ xhr.responseText;
                //大文件上传进度
                uploadQuantity.value ++;
                // 注意这里，因为是分片，所以进度除以总数就是当前上传的进度
                uploadProgress.value = uploadQuantity.value / totalChunck * 100;
                uploadResult.innerHTML='上传进度：' + uploadProgress.value + '%';
                return resolve(nowChunck)
            }
        }
        xhr.onerror = function(e) {
            return reject(e)
        }
        // 发送请求
        xhr.open('POST', 'http://127.0.0.1:3000/upload', true);
        xhr.send(file);
    })
    // 将所有请求推入pormise集合中
    promiseArr.push(curPormise);
}

//获取文件MD5，注意这里谷歌浏览器有最大文件限制当文件大于2G时浏览器无法读取文件
const getFileMD5 = (file) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.onload = (e) =>{
            const fileMd5 = SparkMD5.ArrayBuffer.hash(e.target.result)
            resolve(fileMd5)
        }
        fileReader.onerror = (e) =>{
            reject('文件读取失败',e)
        }
        fileReader.readAsArrayBuffer(file);
    })
}

//文件切片
const sliceFile = (file) => {
    //文件分片之后的集合
    const chuncks = [];
    let start = 0 ;
    let end;
    while(start < file.size) {
        end = Math.min(start + chunckSize.value,file.size);
        //slice 截取文件字节
        chuncks.push({fileChuncks:file.slice(start,end),fileName:file.name}); 
        start = end;
    }
    fileChuncks.value = [...chuncks];
}

//合并文件
const mergeFile = async (fileInfo,chunckTotal) => {
    const { md5Value,fileKey }  = fileInfo[0];
    const params = {
        totalNumber:chunckTotal,
        md5:md5Value,
        name:fileKey
    }
    const response = await makePostRequest('http://127.0.0.1:3000/merge', params);
    ElMessage({message:'上传成功',type:'success'});
}

</script>

<style scoped>

</style>
