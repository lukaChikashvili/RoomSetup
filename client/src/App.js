import { Canvas } from '@react-three/fiber';
import Main from './components/Main';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
     <Header />
       <Canvas>
          <Main />
       </Canvas>
    </div>
  );
}

export default App;
