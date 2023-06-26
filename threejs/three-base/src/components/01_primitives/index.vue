<template>
   <canvas ref="canvasRef"></canvas>
</template>

<script setup>
import * as THREE from 'three'
import { onMounted, ref } from 'vue'
import myBox from './BoxGeometry.js'   // 引入正方体
import myCapsuleGeometry from './CapsuleGeometry.js'
import myCircleGeometry from './CircleGeometry.js'
import myConeGeometry from './ConeGeometry.js'
import myDodecahedronGeometry from './DodecahedronGeometry.js'
import myTorusKnotGeometry from './TorusKnotGeometry.js'

const canvasRef = ref(null)
const createMaterial = () => {
    const material = new THREE.MeshPhongMaterial()
    const hue = Math.floor(Math.random() * 100)/100
    const saturation = 1
    const luminance = 0.5
    material.color.setHSL(hue,saturation,luminance)
    return material
}

onMounted(() =>{
// 场景
const scene = new THREE.Scene()
scene.background = new THREE.Color(0xAAAAAA)
scene.fog = new THREE.FogExp2(0x000000, 0.001)

// 相机
const camera = new THREE.PerspectiveCamera(40, 2, 0.1, 1000)
camera.position.z = 120

// 渲染器
const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.value,antialias:true })

// 灯光
const light1 = new THREE.DirectionalLight(0xffffff, 1)
light1.position.set(-1, 2, 4)
scene.add(light1)
const light2 = new THREE.DirectionalLight(0xffffff, 1)
light2.position.set(1, -2, -4)
scene.add(light2)

// 图元
const primitivesArr = [ myBox,myCapsuleGeometry,myCircleGeometry,myConeGeometry,myDodecahedronGeometry,myTorusKnotGeometry ]

// 网格
const meshArr = []

// 材质
primitivesArr.forEach((item) =>{
    const material = createMaterial()
    const mesh = new THREE.Mesh(item, material)
    meshArr.push(mesh)
})

meshArr.forEach((mesh, index) =>{
    const row = Math.floor(index / 5)
    const col = index % 5
    mesh.position.x = (col - 2) * 15    // -2, -1, 0, 1, -2 
    mesh.position.y = (2 - row) * 15    
    scene.add(mesh)
})

renderer.render(scene,camera)

// 旋转
const rotate = (time) => {
    time = time * 0.001
    const canvas = renderer.domElement
    camera.aspect = canvas.clientWidth / canvas.clientHeight
    camera.updateProjectionMatrix()
    renderer.setSize(canvas.clientWidth, canvas.clientHeight, false)

    meshArr.map(mesh => {
        mesh.rotation.x = time
        mesh.rotation.y = time
    })
    renderer.render(scene,camera)
    requestAnimationFrame(rotate)
}
    requestAnimationFrame(rotate)
})

</script>

<style lang="css" scoped>
canvas{
    display: block;
    width: 100vw;
    height: 100vh;
    background-color: #fff;

}
</style>
