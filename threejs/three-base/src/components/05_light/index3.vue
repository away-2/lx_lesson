<template>
    <canvas ref="canvasRef"></canvas>
</template>

<script setup>
import * as THREE from 'three'
import { ref, onMounted } from 'vue'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { RectAreaLightHelper } from 'three/addons/helpers/RectAreaLightHelper.js'

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
    const material = new THREE.MeshPhysicalMaterial({
        color: 0xffc0cb,
        transparent: true,
        opacity: 0.7
    })
    // 网格
    const mesh = new THREE.Mesh(box, material)
    scene.add(mesh)
    // 灯光
    // const light = new THREE.RectAreaLight(0xffffff, 5, 20, 10)
    // light.position.set(0, 10, 0)
    // light.rotation.x = THREE.MathUtils.degToRad(-90)  // -Math.PI / 2
    // scene.add(light)
    // const helper = new RectAreaLightHelper( light )
    // scene.add( helper )
    const spotLight = new THREE.SpotLight( 0xffffff )
    spotLight.position.set( 0, 30, 0 )
    scene.add( spotLight )
    const spotLightHelper = new THREE.SpotLightHelper( spotLight )
    scene.add( spotLightHelper )
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