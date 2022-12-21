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
            <a href="https://www.linkedin.com/in/aaditya-bhadra-b35546258" target={"_blank"} rel={"noreferrer"}><SlSocialLinkedin className='icons' size={32} color='white'/></a>
            <a href="\"><BsGithub className='icons' size={32} color='white'/></a>
            <a href="/Resume" className='Nav-Items'>Resume</a>
            <a href="/Certifications" className='Nav-Items'>Certificate</a>

            <a href="/" className='Nav-Items'>Home</a>
          </div>
          </div>
      </nav>
      </>
  )
}

export default Navbar
