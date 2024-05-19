import React, { useState } from 'react'


const Header = ({ onTextureChange, onModelChange, onSofaChange }) => {
    const [floor, setFloor] = useState(false);
    const [table, setTable] = useState(false);
    const [sofa, setSofa] = useState(false);

  return (
    <div className='header'>
       <button onClick={() => {setFloor(!floor); setTable(false); setSofa(false)}}>იატაკი</button>
       <button onClick={() => {setTable(!table); setFloor(false); setSofa(false)}}>მაგიდა</button>
       <button onClick={() => {setSofa(!sofa); setFloor(false); setTable(false)}}>ტახტი</button>
       
  {floor && 

       <div className='textures'>
         <img src = {'./floor1.jpg'}  onClick={() => onTextureChange('./floor1.jpg')}/>
         <img src = {'./floor2.jpg'}  onClick={() => onTextureChange('./floor2.jpg')}/>
         <img src = {'./floor3.jpg'}  onClick={() => onTextureChange('./floor3.jpg')}/>
         <img src = {'./floor4.jpg'}  onClick={() => onTextureChange('./floor4.jpg')}/>
         <img src = {'./floor5.webp'}  onClick={() => onTextureChange('./floor5.webp')}/>
        
       </div>
}
{table && 

<div className='tables'>
  <img src = {'./table1.png'}  onClick={() => onModelChange('./table.glb')}/>
  <img src = {'./table2.png'}  onClick={() => onModelChange('./Desk.glb')} />
  <img src = {'./table3.png'}  onClick={() => onModelChange('./Desk2.glb')} />
 
</div>
}

{
  sofa && 
  <div className='tables'>
    <img src = "./sofa1.png" onClick={() => onSofaChange('./sofa.glb')} />
    <img src = "./sofa2.png" onClick={() => onSofaChange('./sofa2.glb')} />
    </div>
}


    </div>
  )
}

export default Header
