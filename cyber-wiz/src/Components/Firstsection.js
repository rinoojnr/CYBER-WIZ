import React from 'react'
import './Firstsection.css'
import cover from './Constants/Group 3.png'


const Firstsection = () => {
  return (
        <div className='main-section'>
            <div className='cover'>
                <div className='img'>
                     <img id='cover' src={cover} alt='loading'/>
                </div>
            <div className='text'>
                 One Stop Solution For <br/>Open Source
            </div>
           
            </div>
            <div className='footer'>
            

</div>
        </div>

  )
}

export default Firstsection
