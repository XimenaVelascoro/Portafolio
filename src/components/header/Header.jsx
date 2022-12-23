import React from 'react'
import './header.css'
import ME from '../../assets/ME.png'


const Header = () => {
  return (
    <div className='container header/container'>
      <h5>Hola soy </h5>
      <h1>Laura Ximena Velasco Rocha</h1>
      <h5 className='text-light'></h5>

        <div className="me">
          <img src={ME}alt="me" className='foto1' />
        </div>

    </div>
  )
}

export default Header