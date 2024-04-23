import React, { useState } from 'react'
import {  Html, OrbitControls, useGLTF } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { MeshStandardMaterial, TextureLoader } from 'three'

const Main = ({textureSource, modelSource}) => {
  
    const tiles = useLoader(TextureLoader, textureSource);

    const model = useGLTF(modelSource);

    const [setting, setSetting] = useState(false);
    const [size, setSize] = useState(1);
    const [xPosition, setXPosition] = useState(0);
    const [yPosition, setYPosition] = useState(0);

    const handleMesh = () => {
      setSetting(true);
    }

    const handleSize = (event) => {
      const newSize = parseFloat(event.target.value);
      if (!isNaN(newSize)) {
          setSize(newSize);
      }
  }

  const handlePosition = (event) => {
    const newSize = parseFloat(event.target.value);
      if (!isNaN(newSize)) {
          setXPosition(newSize);
      }

      if(newSize === 5 || newSize === -5) {
        setXPosition(0);
      }
  }

  const handleYPosition = (event) => {
    const newSize = parseFloat(event.target.value);
    if (!isNaN(newSize)) {
        setYPosition(newSize);
    }

    if(newSize === 5 || newSize === -5) {
      setYPosition(0);
    }
  }


  return (
    <>

    <OrbitControls makeDefault />



    

        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 2.5 } />
        <ambientLight intensity={ 0.5 } />
        
        
       
        <primitive object={model.scene} 
                   position-y = {-1}
                   onClick = {handleMesh}
                   scale = {size} 
                   position-x = {xPosition}
                   position-z = {-yPosition}
                    />

        {setting && <Html position={-2}>
             <div className='settings'>
                <p>პარამეტრები</p>
                <span onClick={() => setSetting(false)}>X</span>
                <div className='label'>
                 <label>ზომა</label>
                 <input type='number' value = {size} onChange={handleSize}/>
                 </div>

                 <div className='label'>
                 <label>პოზიცია X: </label>
                 <input type='number' value = {xPosition} onChange={handlePosition}/>
                 </div>

                 <div className='label'>
                 <label>პოზიცია Z: </label>
                 <input type='number' value = {yPosition} onChange={handleYPosition}/>
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
