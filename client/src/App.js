import { Canvas } from '@react-three/fiber';
import Main from './components/Main';
import Header from './components/Header';
import { useState } from 'react';

function App() {

  const [selectedTexture, setSelectedTexture] = useState('./floor1.jpg');
  const [selectedTable, setSelectedTable] = useState('./table.glb');
  const [selectedSofa, setSelectedSofa] = useState('./sofa.glb');
  return (
    <div className="App">
     <Header onTextureChange={setSelectedTexture} onModelChange={setSelectedTable} onSofaChange={setSelectedSofa}/>
       <Canvas>
          <Main textureSource={selectedTexture} modelSource={selectedTable} sofaSource={selectedSofa}/>
       </Canvas>
    </div>
  );
}

export default App;
