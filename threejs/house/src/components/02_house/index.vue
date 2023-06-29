<template>
    <canvas ref="canvasRef"></canvas>
</template>

<script setup>
import * as THREE from 'three'
import { ref, onMounted } from 'vue'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

const canvasRef = ref(null)

onMounted(() =>{
    const scene = new THREE.Scene()
    const axes = new THREE.AxesHelper(100)
    scene.add(axes)
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.set(0, 0, 100) 
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.value, antialias: true })
    // 控制器
    const controls = new OrbitControls( camera, renderer.domElement )
    controls.addEventListener('change', () =>{
        renderer.render(scene, camera)
    })
    // controls.update()

    // 灯光
    const light = new THREE.AmbientLight(0xfffffff, 1)
    scene.add(light)
    // 物体
    // const box = new THREE.BoxGeometry(10, 10, 10)
     // 物体
  const textureLoader = new THREE.TextureLoader()
  textureLoader.load('https://threejsfundamentals.org/threejs/resources/images/equirectangularmaps/tears_of_steel_bridge_2k.jpg', (texture) => {
    const crt = new THREE.WebGLCubeRenderTarget(texture.image.height)
    crt.fromEquirectangularTexture(renderer, texture)
    scene.background = crt.texture
  })

    // 渲染
    renderer.setClearColor(0xcccccc)
    renderer.setSize(renderer.domElement.clientWidth, renderer.domElement.clientHeight)
    renderer.render(scene,camera )

})

const handleSize = (bgTexture) => {
    console.log(bgTexture);
    const imgAspect = bgTexture.image[0].width / bgTexture.image[0].height
    const canvasAspect = window.innerWidth / window.innerHeight
    const resAspect = imgAspect / canvasAspect

    bgTexture.offset.x = resAspect > 1 ? (1 - 1 / resAspect) / 2 : 0
    bgTexture.repeat.x = resAspect > 1 ? 1 / resAspect : 1

    bgTexture.offset.y = resAspect > 1 ? 0 : (1 - resAspect) / 2
    bgTexture.repeat.y = resAspect > 1 ? 1 : resAspect 
    

}
</script>

<style lang="css" scoped>
canvas{
    width: 100vw;
    height: 100vh;
}
</style>