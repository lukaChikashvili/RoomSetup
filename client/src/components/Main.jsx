import React, { useState } from 'react'
import {  Html, OrbitControls, useGLTF } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'

const Main = ({textureSource, modelSource}) => {
  
    const tiles = useLoader(TextureLoader, textureSource);

    const model = useGLTF(modelSource);

    const [setting, setSetting] = useState(false);
    const [size, setSize] = useState(1);


    const handleMesh = () => {
      setSetting(!setting);
    }

    const handleSize = (event) => {
      const newSize = parseFloat(event.target.value);
      if (!isNaN(newSize)) {
          setSize(newSize);
      }
  }




  return (
    <>

    <OrbitControls makeDefault />



    

        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 2.5 } />
        <ambientLight intensity={ 0.5 } />
        
        
       
        <primitive object={model.scene} position-y = {-1} onClick = {handleMesh} scale = {size} />
        {setting && <Html position={-2}>
             <div className='settings'>
                <p>პარამეტრები</p>
                <div className='label'>
                 <label>ზომა</label>
                 <input type='number' value = {size} onChange={handleSize}/>
                 </div>
             </div>
          </Html>}
         <mesh receiveShadow position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial  map = {tiles} />
           
        </mesh>
    </>
  )
}

export default Main
