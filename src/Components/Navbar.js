import React from 'react'
import './Navbar.css'
import { SlSocialLinkedin } from "react-icons/sl";
import { BsGithub } from "react-icons/bs";
function Navbar() {
  return (
    <>
      <nav className='Nav'>
        <div>
          <div className='icons'>
            <a href="https://www.linkedin.com/in/aaditya-bhadra/" target={"_blank"} rel={"noreferrer"}><SlSocialLinkedin className='icons' size={32} color='white'/></a>
            <a href="https://github.com/Aaditya-Bhadra"><BsGithub className='icons' size={32} color='white'/></a>
            <a href="/Resume" className='Nav-Items res'>Resume</a>
            <a href="/Certifications" className='Nav-Items cer'>Certificate</a>
          </div>
          </div>
      </nav>
      </>
  )
}

export default Navbar
