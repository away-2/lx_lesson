import { SphereGeometry, MeshPhongMaterial, Mesh, Object3D, PointLight } from 'three'
// 创建球体
const sphere = new SphereGeometry(1, 16, 16)

// 创建单元
const sunMaterial = new MeshPhongMaterial({ emissive: 0xFFFF00 })
const sunMesh = new Mesh(sphere, sunMaterial) 
sunMesh.scale.set(4,4,4)

// 地球单元
const earthMaterial = new MeshPhongMaterial({ emissive: 0x112244, color: 0x2233FF })
const earthMesh = new Mesh(sphere, earthMaterial)

// 月球单元
const moonMaterial = new MeshPhongMaterial({ emissive: 0x222222, color: 0x888888 })
const moonMesh = new Mesh(sphere, moonMaterial)
moonMesh.scale.set(0.5,0.5,0.5)

// 创建 3D空间,容纳月球
const moonOribit = new Object3D()
moonOribit.add(moonMesh)
moonOribit.position.x = 2

// 创建 3D空间,容纳地球
const earthOribit = new Object3D()
earthOribit.add(earthMesh)
earthOribit.add(moonOribit)
earthOribit.position.x = 10

// 创建 3D空间,容纳太阳
const sunOribit = new Object3D()
sunOribit.add(sunMesh)
sunOribit.add(earthOribit)

// 光源
const pointLight = new PointLight(0xFFFFFF, 3)


export {
    sunOribit,
    earthOribit,
    moonOribit,
    pointLight
}