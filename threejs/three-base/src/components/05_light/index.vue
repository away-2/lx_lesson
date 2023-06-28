<template>
    <canvas ref="canvasRef"></canvas>
</template>

<script setup>
import * as THREE from 'three'
import { ref, onMounted } from 'vue'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

const canvasRef = ref(null)

onMounted(() =>{
    // 场景
    const scene = new THREE.Scene()
    const axes = new THREE.AxesHelper(100)
    scene.add(axes)
    // 镜头
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.set(20, 20, 50)
    // 渲染器
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.value, antialias: true})
    // 镜头控制器
    const controls = new OrbitControls(camera,renderer.domElement)
    controls.addEventListener('change', () => {
        renderer.render(scene,camera)
    })
    // 物体
    const box = new THREE.BoxGeometry(10, 10, 10)
    // 材质
    const material = new THREE.MeshPhongMaterial({
        color: 0xffc0cb,
        transparent: true,
        opacity: 0.7
    })
    // 网格
    const mesh = new THREE.Mesh(box, material)
    scene.add(mesh)
    // 灯光
    const light = new THREE.DirectionalLight(0xffffff, 1)
    light.position.set(20, 20, 0)
    light.target = mesh  // (0, 0, 0)
    const dirLightHelper = new THREE.DirectionalLightHelper(light, 4)
    scene.add(light, dirLightHelper)
    
    const light2 = new THREE.DirectionalLight(0xffffff, 1)
    light2.position.set(0, -20, 10)
    light2.target = mesh  // (0, 0, 0)
    const dirLightHelper2 = new THREE.DirectionalLightHelper(light2, 4)
    scene.add(light2, dirLightHelper2)
    
    // 渲染
    renderer.setSize(renderer.domElement.clientWidth, renderer.domElement.clientHeight)
    // renderer.setClearColor()
    renderer.render(scene,camera)

})
</script>

<style lang="css" scoped>
canvas {
    width: 100vw;
    height: 100vh;
  }
</style>