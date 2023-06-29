<template>
    <canvas ref="canvasRef"></canvas>
</template>

<script setup>
import * as THREE from 'three'
import { ref, onMounted } from 'vue'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader'
import liveL from './imgs(1)/living/4_l.jpg'
import liveR from './imgs(1)/living/4_r.jpg'
import liveU from './imgs(1)/living/4_u.jpg'
import liveB from './imgs(1)/living/4_b.jpg'
import liveF from './imgs(1)/living/4_f.jpg'
import liveD from './imgs(1)/living/4_d.jpg'


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
    // const geometry = new THREE.BoxGeometry(10, 10, 10)
    // const arr = [liveL, liveR, liveU, liveD, liveB, liveF]
    // const boxMaterial = []
    // arr.forEach(item =>{
    //     let texture = new THREE.TextureLoader().load(item)
    //     if(item === liveU || item === liveD ){
    //         texture.rotation = Math.PI
    //         texture.center = new THREE.Vector2(0.5, 0.5)
    //     }
    //     let material = new THREE.MeshBasicMaterial({
    //         map: texture,
    //         side: THREE.BackSide   // 背面可见
    //     })
    //     boxMaterial.push(material)
    // })

    // const mesh = new THREE.Mesh(geometry, boxMaterial)
    // scene.add(mesh)

    // 球
    const geometry = new THREE.SphereGeometry(5, 32, 32)
    const loader = new RGBELoader()
    loader.load('src/components/03_house/imgs(1)/hdr/Living.hdr',(texture) =>{
        const material = new THREE.MeshBasicMaterial({ map: texture })
        const mesh = new THREE.Mesh(geometry, material)
        mesh.geometry.scale(1, 1, -1)  // 背面可见
        scene.add(mesh)
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