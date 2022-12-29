import React from 'react'
import './intro.css'
import Profile from '../Assets/cutted (1).png'
function intro() {
  return (
    <>
      <div className="name">
        <img src={Profile} alt="" />
        <h1>Hi 👋 I'm</h1>
        <div className='animation'>
          <h2 className='first'>Aaditya Bhadra</h2>
          <h2 className='second'>Frontend Developer</h2>
          <h2 className='third'>Specialised in React</h2>
        </div>
      </div>
      <div className="para">
        <p>
          I'm a Computer Science graduate regularly upskilling myself to be the best coder and use my skills to upgrade every piece of code. <br />
          In my journey, I noticed how deep our web servers are, continually growing and adding new features, which inspired me to become a Web developer, having developed my skills in JavaScript, CSS, HTML and learning ReactJs and JavaScript libraries. <br />
          As a Frontend Developer and UI/UX Designer, I specialize in developing responsive and interactive Web Applications using ReactJs with Material-UI, CSS3, React styled components for designing responsive and interactive Web Applications. I see myself as a Senior Web Developer with one of the best companies where I will use my skills. Currently I'm looking for working opportunity to give a great start. <br />
          When I am not coding I usually enjoy cooking in my free time and traveling to discover new places.
        </p>
      </div>
      <div className="intro">

      </div>
    </>
  )
}

export default intro
