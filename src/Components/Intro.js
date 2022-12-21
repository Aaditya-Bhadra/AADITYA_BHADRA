import React from 'react'
import './intro.css'
import Profile from '../Assets/20221110_193444.jpg'
function intro() {
  return (
    <>
      <div className="name">
        <img src={Profile} alt="" height={'200px'} width={'250px'}/>
            <h1>Hi 👋 I'm</h1>
            <div className='animation'>
            <h2 className='first'>Aaditya Bhadra</h2>
            <h2 className='second'>Frontend Developer</h2>
            <h2 className='third'>Specialised in React</h2>
          </div>
          </div>
      <div className="intro">

      </div>
    </>
  )
}

export default intro
