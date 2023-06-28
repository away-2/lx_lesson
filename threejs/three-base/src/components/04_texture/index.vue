<template>
    <canvas ref="canvasRef"></canvas>
</template>

<script setup>
import * as THREE from 'three'
import { ref, onMounted } from 'vue'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
// import earthPic from './img/earth.jpeg'
import pic1 from './img/1.png'
import pic2 from './img/2.png'
import pic3 from './img/3.png'
import pic4 from './img/4.png'
import pic5 from './img/5.png'
import pic6 from './img/6.png'

const canvasRef = ref(null)

onMounted(() =>{
    // 场景
    const scene = new THREE.Scene()
    // 镜头
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.lookAt(0, 0, 0)
    camera.position.set(10, 10, 50)
    // 渲染器
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.value, antialias:true })
    // 镜头控制器
    const controls = new OrbitControls(camera,renderer.domElement)
    controls.addEventListener('change', () => {
        // console.log(camera.position);
        renderer.render(scene,camera)
    })
    // 物体
    const box = new THREE.BoxGeometry(10, 10, 10)
        // 加载皮肤
    const texLoader = new THREE.TextureLoader()
    const picArr = [pic1, pic6, pic2, pic5, pic3, pic4 ]
    const materialArr = []  // 一组材质
    picArr.forEach(src =>{
        materialArr.push(new THREE.MeshBasicMaterial({ 
            color: 0xffffff,
            map: texLoader.load(src)
        }))
    })

    // const texture = texLoader.load()
    // // 材质
    // const material = new THREE.MeshBasicMaterial({
    //     color: 0xffffff,
    //     transparent: true, // 允许设置透明度
    //     opacity: 0.5,
    //     map: texture
    // })
    const mesh = new THREE.Mesh(box,materialArr)
    scene.add(mesh)
    // 坐标系
    // const axes = new THREE.AxesHelper(100)
    // scene.add(axes) 
    // 渲染效果
    const canvas = renderer.domElement
    renderer.setSize(canvas.clientWidth,canvas.clientHeight)
    renderer.setClearColor(0xfff1f1, 1)
    renderer.render(scene,camera)
   
    // const rotate = (time) =>{
    //     time = time * 0.001
    //     mesh.rotation.x = time
    //     mesh.rotation.y = time
    //     renderer.render(scene,camera)
    //     requestAnimationFrame(rotate)

    // }
    // requestAnimationFrame(rotate)
    
})
</script>

<style lang="css" scoped>
canvas {
    width: 100vw;
    height: 100vh;
  }
</style>