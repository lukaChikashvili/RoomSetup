import React, { useState } from 'react'


const Header = ({ onTextureChange, onModelChange }) => {
    const [floor, setFloor] = useState(false);
    const [table, setTable] = useState(false);

  return (
    <div className='header'>
       <button onClick={() => {setFloor(!floor); setTable(false)}}>იატაკი</button>
       <button onClick={() => {setTable(!table); setFloor(false)}}>მაგიდა</button>
       
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


    </div>
  )
}

export default Header
