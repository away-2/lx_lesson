<template>
  <canvas ref="canvasRef"></canvas>
</template>

<script setup>
import * as THREE from 'three'
import { ref, onMounted, render } from 'vue';

import pic from './tx.jpg';
const canvasRef = ref(null)

onMounted(() => {
  const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.value, antialias: true });
  // renderer.useLegacyLights = true
  // renderer.setClearColor(new THREE.Color(0xEEEEEE))
  renderer.shadowMap.enabled = true
  

  const scene = new THREE.Scene()
  // scene.background = new THREE.Color(0xffffff)
  const camera = new THREE.PerspectiveCamera(45, 2, 0.1, 1000)
  camera.position.set(-30, 60, 60)
  camera.lookAt(scene.position)


  const box = new THREE.BoxGeometry(6, 6, 6)
  const material = new THREE.MeshLambertMaterial({ color: 0xff0000 })
  const mesh = new THREE.Mesh(box, material)
  mesh.position.set(-6, 6, 3)
  mesh.castShadow = true
  scene.add(mesh)


  const light = new THREE.SpotLight(0xffffff, 5)
  light.position.set(-40, 50, 30)
  light.castShadow = true;
  const axes = new THREE.AxesHelper(10)
  scene.add(axes)
  scene.add(light)


  const planeGeometry = new THREE.PlaneGeometry(60, 30)
  const planeMat = new THREE.MeshLambertMaterial({ color: 0xffffff })
  const plane = new THREE.Mesh(planeGeometry, planeMat)
  plane.rotation.x = -90 * Math.PI / 180
  plane.position.set(15, 0, 0)
  plane.receiveShadow = true;
  scene.add(plane)

  // scene.add(base)
  
  const canvas = renderer.domElement
  renderer.setSize(canvas.clientWidth, canvas.clientHeight)
  renderer.render(scene, camera)
})

</script>

<style lang="css" scoped>
canvas{
  display: block;
  width: 100vw;
  height: 100vh;
}
</style>