import React, { useState } from 'react'


const Header = ({ onTextureChange }) => {
    const [floor, setFloor] = useState(false);

  return (
    <div className='header'>
       <button onClick={() => setFloor(!floor)}>იატაკი</button>
       <button>კედელი</button>
       
  {floor && 

       <div className='textures'>
         <img src = {'./floor1.jpg'}  onClick={() => onTextureChange('./floor1.jpg')}/>
         <img src = {'./floor2.jpg'}  onClick={() => onTextureChange('./floor2.jpg')}/>
         <img src = {'./floor3.jpg'}  onClick={() => onTextureChange('./floor3.jpg')}/>
       </div>
}
    </div>
  )
}

export default Header
