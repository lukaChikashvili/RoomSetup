import React, { useState } from 'react'
import {  Html, OrbitControls, useGLTF } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import {  TextureLoader } from 'three'

const Main = ({textureSource, modelSource, sofaSource}) => {
  
    const tiles = useLoader(TextureLoader, textureSource);

    const model = useGLTF(modelSource);
    const sofa = useGLTF(sofaSource);

    const [modelSettings, setModelSettings] = useState({
      modelName: null,
      size: 1,
      xPosition: 0,
      yPosition: 0,
  });

  

  
  const handleMesh = (modelName) => {
    setModelSettings((prevSettings) => ({
        ...prevSettings,
        modelName: prevSettings.modelName === modelName ? prevSettings.modelName : modelName,
    }));
};


  const handleSize = (event) => {
    const newSize = parseFloat(event.target.value);
    if (!isNaN(newSize)) {
        setModelSettings({
            ...modelSettings,
            size: newSize,
        });
    }
};

const handlePosition = (axis, value) => {
  const newPosition = parseFloat(value);
  if (!isNaN(newPosition)) {
      setModelSettings({
          ...modelSettings,
          [`${axis}Position`]: newPosition,
      });
  }
};
 

  return (
    <>

    <OrbitControls makeDefault />



    

        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 2.5 } />
        <ambientLight intensity={ 0.5 } />
        
        
       
        <primitive object={model.scene} 
                   position-y = {-1}
                   onClick = {() => handleMesh('model')}
                   scale={modelSettings.modelName === 'model' ? modelSettings.size : 1}
                   position-x={modelSettings.modelName === 'model' ? modelSettings.xPosition : 0}
                   position-z={modelSettings.modelName === 'model' ? -modelSettings.yPosition : 0}
                   
                    />

        <primitive object={sofa.scene}
                   scale={modelSettings.modelName === 'sofa' ? modelSettings.size : 3}
                   position-x={modelSettings.modelName === 'sofa' ? modelSettings.xPosition : 0}
                   position-z={modelSettings.modelName === 'sofa' ? -modelSettings.yPosition : 3}
                   position-y = {-0.5}
                   onClick = {() => handleMesh('sofa')}
                   
                   />

        {modelSettings.modelName && <Html position={-2}>
             <div className='settings'>
                <p>პარამეტრები</p>
                <span onClick={() => handleMesh(modelSettings.modelName)}>X</span>
                <div className='label'>
                 <label>ზომა</label>
                 <input type='number' value = {modelSettings.size} onChange={handleSize}/>
                 </div>

                 <div className='label'>
                 <label>პოზიცია X: </label>
                 <input type='number'  value={modelSettings.xPosition} onChange={(e) => handlePosition('x', e.target.value)}/>
                 </div>

                 <div className='label'>
                 <label>პოზიცია Z: </label>
                 <input type='number' value={modelSettings.yPosition} onChange={(e) => handlePosition('y', e.target.value)}/>
                 </div>
             </div>
          </Html>}
         <mesh receiveShadow position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 15 }>
            <planeGeometry />
            <meshStandardMaterial  map = {tiles} />
           
        </mesh>
    </>
  )
}

export default Main
