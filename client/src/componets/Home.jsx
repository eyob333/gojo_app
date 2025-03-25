import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js'
import { useEffect } from 'react'
import BestDeals from './home/BestDeals'
import './Home.css'



function Home(){

    useEffect( () => {


        // Canvas
        const canvas = document.querySelector('canvas.webgl')
        
        // Scene
        const scene = new THREE.Scene()
        
        // Loaders
        const dracoLoader = new DRACOLoader()
        dracoLoader.setDecoderPath('./draco/')
        const gltfLoader = new GLTFLoader()
        gltfLoader.setDRACOLoader(dracoLoader)
        
        
        // Material
        const Material = new THREE.MeshStandardMaterial({
            // metalness: 0.5,
            // roughness: 0.25,
            // envMapIntensity: 0.5,
            // color: '#858080'
        })
        
           
        let gear = null
        gltfLoader.load('./src/assets/models/model3/Shaded/base_basic_shaded.glb', (model) =>{
        
            gear = model.scene
            console.log(gear)

            // gear.scale.set(5, 5, 5)
        
            scene.add(gear)
        } , () =>{
            // console.log('loading model')
        })
        
        
        /**
         * Plane
         */
        const plane = new THREE.Mesh(
            new THREE.PlaneGeometry(10, 10, 10),
            new THREE.MeshPhysicalMaterial({ color: '#aaaaaa' })
        )
        plane.receiveShadow = true
        plane.position.x = - 4
        plane.position.y = - 3
        plane.position.z = - 4
        plane.lookAt(new THREE.Vector3(0, 0, 0))
        // scene.add(plane)
        
        /**
         * Lights
         */
        const directionalLight = new THREE.DirectionalLight('#ffffff', 7)
        directionalLight.position.set(6.25, 3, 4)
        directionalLight.castShadow = true
        directionalLight.shadow.mapSize.set(1024, 1024)
        directionalLight.shadow.camera.near = 0.1
        directionalLight.shadow.camera.far = 30
        directionalLight.shadow.normalBias = 0.05
        directionalLight.shadow.camera.top = 8
        directionalLight.shadow.camera.right = 8
        directionalLight.shadow.camera.bottom = -8
        directionalLight.shadow.camera.left = -8
        scene.add(directionalLight)
        
        /**
         * Sizes
         */
        const sizes = {
            width: window.innerWidth,
            height: window.innerHeight,
            pixelRatio: Math.min(window.devicePixelRatio, 2)
        }
        
        window.addEventListener('resize', () =>
        {
            // Update sizes
            sizes.width = window.innerWidth
            sizes.height = window.innerHeight
            sizes.pixelRatio = Math.min(window.devicePixelRatio, 2)
        
            // Update camera
            camera.aspect = sizes.width / sizes.height
            camera.updateProjectionMatrix()
        
            // Update renderer
            renderer.setSize(sizes.width, sizes.height)
            renderer.setPixelRatio(sizes.pixelRatio)
        })
        
        /**
         * Camera
         */
        // Base camera
        const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 0.1, 100)
        camera.position.set(0, 0, 3)
        scene.add(camera)
        
        scene.position.set(.7, -.7, 0)
        // Controls
        const controls = new OrbitControls(camera, canvas)
        // controls.target.set(2, 0, 0) 
        controls.enableDamping = true
        
        /**
         * Renderer
         */
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: true,
        })
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(sizes.pixelRatio)
        renderer.setClearColor('#ffffff', 0.)
        
        /**
         * Animate
         */
        const clock = new THREE.Clock()
        
        const tick = () =>
        {
            const elapsedTime = clock.getElapsedTime()
        
            // model update
            if ( gear)
                gear.rotation.y = elapsedTime * 0.04
        
            // Update controls
            controls.update()
        
            // Render
            renderer.render(scene, camera)
        
            // Call tick again on the next frame
            window.requestAnimationFrame(tick)
        }
        
        tick()
        
        })

    return <>
        <main> 
            <div id="main"> 
                <div className="main-heading">
                    <h1>Gojo Homes</h1>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
                </div>
                <hr/>
            </div>
            <canvas className="webgl">
            </canvas>
        </main>

        <div className='intro-one'>
            <div className='home-elements'>
                <div className='element-heading'>
                    <h1 className='element-title' >We brought every real Estae in one place</h1>                    
                </div>
            <div className='home-cards'>
                <div className='home-png'>
                    <div className='showcase-imgs' >
                        <img src="./src/assets/ayat_logo.daf534f7.webp" alt="" />
                        <img src="./src/assets/ovid-realestate-white.webp" alt="" />
                        <img src="./src/assets/dmc-img.webp" alt="" />
                        <img src="./src/assets/hand-made.png" alt="" />
                        <img src="./src/assets/NOAH-Logo.webp" alt="" />
                    </div> 
                </div>                 
            </div>
             
            </div>

            <div className='search'>
                <div  className='search-heading'>
                    <h1>Discover</h1>
                    <p>
                    quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequa
                    </p>                     
                </div>
                <input type="text" />              
            </div>
            

            <section id="shows">
                <BestDeals 
                        heading={"best offers"} 
                        details={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo"}
                        />
                <BestDeals
                        heading={"Top real estates"}
                        details={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"}
                     />
            </section>
            
        </div>
    </>  
}

export default Home