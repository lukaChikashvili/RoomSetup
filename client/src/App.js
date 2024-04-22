import { Canvas } from '@react-three/fiber';
import Main from './components/Main';
import Header from './components/Header';
import { useState } from 'react';

function App() {

  const [selectedTexture, setSelectedTexture] = useState('./floor1.jpg');
  return (
    <div className="App">
     <Header onTextureChange={setSelectedTexture} />
       <Canvas>
          <Main textureSource={selectedTexture} />
       </Canvas>
    </div>
  );
}

export default App;
