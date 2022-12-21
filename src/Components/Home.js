import React from 'react'
import Navbar from './Navbar'
import Intro from './Intro'
import Certification from  './Certification'
import Resume from './resume/Resume'
import './Home.css'
const Home = () => {
  return (
    <div>
      <Navbar/> 
      <Intro/>
      <Certification/> 
      <Resume/>
    </div>
  )
}

export default Home
