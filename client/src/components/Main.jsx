import React from 'react'
import { Html, OrbitControls } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'

const Main = () => {
  
    const tiles = useLoader(TextureLoader, './floor1.jpg');





  return (
    <>

    <OrbitControls makeDefault />



    

        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 4.5 } />
        <ambientLight intensity={ 1.5 } />

        


         <mesh receiveShadow position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial  map = {tiles} />
        </mesh>
    </>
  )
}

export default Main
