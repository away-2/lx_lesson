// 二分插入
// 数组有序
 /***二分法查找
* params 要查找的数组
 * destNum 要找到的数值
 */
function findNums(params,destNum) {

    let mid=Math.ceil(params.length/2)
   
    if(params[mid]==destNum)
    return true;
   
    let start=0;
    let end=params.length-1;
    while(start!=mid){
         if(params[start]==destNum
           ||params[end]==destNum)
         return true;
        console.log('start',start,mid)
        console.log('end',end,mid)
       start++;
       end--;
    }
    console.log('没有找到')
     return false
   
   }