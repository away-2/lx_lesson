<template>
   <canvas ref="canvasRef"></canvas>
</template>

<script setup>
import * as THREE from 'three'
import { ref, onMounted } from 'vue'
import pic from './tx.jpg'
  
  const canvasRef = ref(null)
  
  onMounted(() => {
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.value,antialias: true })
    renderer.useLegacyLights = true 

    const camera = new THREE.PerspectiveCamera(45, 2, 0.1, 1000)
    camera.position.set(0, 10, 20)
    camera.lookAt(0, 0, 0)

    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0xffffff)

    const box = new THREE.BoxGeometry(5, 5, 5)

    const material = new THREE.MeshLambertMaterial({ color: 0xff0000 })
    const mesh = new THREE.Mesh(box, material)

    // 灯光
    const light = new THREE.SpotLight(0xffffff,5)
    light.position.set(20, 50, 5)
    light.castShadow = true

    const axes = new THREE.AxesHelper(10)
    light.sp
    light.add(axes)
    scene.add(light)

    // 阴影
    // const sphereGeo = new THREE.SphereGeometry(1, 32, 16)
    // const shadowGeo = new THREE.PlaneGeometry(1,1)
    // // 加载纹理
    // const loader = new THREE.TextureLoader()
    // const texture = loader.load(pic)

    // const shadowMat = new THREE.MeshBasicMaterial({ 
    //     map:texture, transparent: true, depthWrite: false 
    // })
    // const shadowMesh = new THREE.Mesh(shadowGeo,shadowMat )
    // shadowMesh.position.y = 0.001
    // shadowMesh.rotation.x = Math.PI * -0.5
    // const base = new THREE.Object3D()
    // base.add(shadowMesh)

    const planeGeometry = new THREE.PlaneGeometry(60, 60)
    const planeMat = new THREE.MeshLambertMaterial({ color: 0xffffff })
    const plane = new THREE.Mesh(planeGeometry, planeMat)
    plane.rotation.x = -90 * Math.PI / 180
    plane.position.set(15, 0, 0)
    scene.add(plane)

    // scene.add(base)
    renderer.shadowMap.enabled = true  // 渲染器开启阴影效果
    box.castShadow = true
    scene.add(mesh)
    const canvas = renderer.domElement
    renderer.setSize(canvas.clientWidth, canvas.clientHeight)
    renderer.render(scene, camera)


  })
</script>

<style lang="css" scoped>
canvas {
    display: block;
    width: 100vw;
    height: 100vh;
  }
</style>