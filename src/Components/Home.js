import React from 'react'
import Navbar from './Navbar'
import Intro from './Intro'
import Project from './Project'
import Certification from  './Certification'
import './Home.css'
const Home = () => {
  return (
    <div>
      <Navbar/> 
      <Intro/>
      <Project/>
      <Certification/>
    </div>
  )
}

export default Home
