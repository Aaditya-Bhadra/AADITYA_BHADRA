import React from 'react'
import './resume.css'
import { MdOutlineEmail } from "react-icons/md";
import { BsHouseDoor, BsTelephone, BsStar, BsGithub } from "react-icons/bs";
import { AiFillCaretRight } from "react-icons/ai";
import { TfiHandPointRight } from "react-icons/tfi";
import { BsCloudDownload } from "react-icons/bs";
function resume() {
  return (
    <>
      {/* <a href="/" className='Nav-Items'>back</a> */}
      <div className='box'>
        <div className='heading'>
          <h1>RESUME</h1>
        </div>
        <div className='container'>
          <div className="innerbox innerbox-1">
            <h2>Aaditya Bhadra</h2>
            <p><BsHouseDoor size={26} style={{ margin: "10px 15px 0px 15px" }} /><strong>Jabalpur,Madhya Pradesh, India</strong></p>
            <p><MdOutlineEmail size={26} style={{ margin: "10px 15px 0px 15px" }} /><strong>Email : aaditya.official03@gmail.com, aadityabhadra03@gmail.com</strong></p>
            <p><BsTelephone size={26} style={{ margin: "10px 15px 0px 15px" }} /> <strong> Mobile No. - 9826862317, 9424462317 </strong></p>
            <p><BsGithub size={26} style={{ margin: "10px 15px 0px 15px" }} /> <strong> GitHub ID : </strong></p>
          </div>
          <div className="innerbox innerbox-2">
            <div className='sum'>
              <h2>Summary</h2>
              <p>I am curious person who is willing to learn and try new things, my objective is to develop new skills and improve myself.
              </p>
            </div>

            <div className="skill">
              <h2>Skills</h2>
              <div className="skillList">
              <p><AiFillCaretRight style={{margin:"3px 5px 0px 0px"}}/>ReactJS</p>
              <p><AiFillCaretRight style={{margin:"3px 5px 0px 0px"}}/>JavaScript</p>
              <p><AiFillCaretRight style={{margin:"3px 5px 0px 0px"}}/>HTML5</p>
              <p><AiFillCaretRight style={{margin:"3px 5px 0px 0px"}}/>CSS</p>
              <p><AiFillCaretRight style={{margin:"3px 5px 0px 0px"}}/>Mongodb</p>
              <p><AiFillCaretRight style={{margin:"3px 5px 0px 0px"}}/>Github</p>
              </div>
            </div>

            <div className="education">
              <h2>Education</h2>
              <div className="inst inst-1">
              <h3><BsStar style={{margin:"0px 5px 0px 0px"}}/>MCNUJC,Bhopal</h3>
                <p><strong>Postgraduate Diploma in Computer Application in Computer Software and Media
                  Applications</strong></p>
                <p>71.13%</p>
                <p>Dec 2020 - Jan 2022</p>
              </div>
              <div className="inst inst-2">
              <h3><BsStar style={{margin:"0px 5px 0px 0px"}}/> Rani Durgavati Vishwavidyalaya, Jabalpur</h3>
                <p><strong>Bachelor of Science in Physics, Mathematics and Computer Science</strong></p>
                <p>63.67%</p>
                <p>Jul 2017 - Jun 2020</p>
              </div>
              <div className="inst inst-3">
              <h3><BsStar style={{margin:"0px 5px 0px 0px"}}/> Central Board of Secondary Education</h3>
                <p><strong>Higher Secondary School in Computer Science, Mathematics, Physics & Chemistry</strong></p>
                <p>74.00%</p>
                <p>Apr 2016 - Mar 2017</p>
              </div>
            </div>

            <div className="certi">
              <h2>Licenses & Certifications</h2>
              <div className="certiList">
                <div className="courcera">
                  <a href="https://www.coursera.org/account/accomplishments/certificate/RDZR62EP4CMX" target={"_blank"} rel={"noreferrer"}><TfiHandPointRight  style={{margin:"0px 10px 0 0"}} /><strong>Advanced React</strong>-Coursera</a>
                </div>
                <div className="courcera">
                  <a href="https://www.coursera.org/account/accomplishments/certificate/MH55KC2QCJEN" target={"_blank"} rel={"noreferrer"}><TfiHandPointRight style={{margin:"0px 10px 0 0"}} /><strong>React Basics</strong>-Coursera</a>
                </div>
                <div className="courcera">
                  <a href="https://www.coursera.org/account/accomplishments/certificate/SJ2NNK7NQ659" target={"_blank"} rel={"noreferrer"}><TfiHandPointRight style={{margin:"0px 10px 0 0"}} /><strong>Principles of UX/UI Design</strong>-Coursera</a>
                </div>
                <div className="courcera">
                  <a href="https://www.coursera.org/account/accomplishments/certificate/ND462NQB7JBE" target={"_blank"} rel={"noreferrer"}><TfiHandPointRight style={{margin:"0px 10px 0 0"}} /><strong>Programming with JavaScript</strong>-Coursera</a>
                </div>
                <div className="courcera">
                  <a href="https://www.coursera.org/account/accomplishments/certificate/UC89UW9YDUU7" target={"_blank"} rel={"noreferrer"}><TfiHandPointRight style={{margin:"0px 10px 0 0"}} /><strong>Version Control</strong>-Coursera</a>
                </div>
                <div className="courcera">
                  <a href="https://www.coursera.org/account/accomplishments/certificate/6QM2KYW8RP7H" target={"_blank"} rel={"noreferrer"}><TfiHandPointRight style={{margin:"0px 10px 0 0"}} /><strong>HTML and CSS in depth</strong>-Coursera</a>
                </div>
                <div className="courcera">
                 <a href="https://www.coursera.org/account/accomplishments/certificate/FSV6WB4ABUS5" target={"_blank"} rel={"noreferrer"}><TfiHandPointRight style={{margin:"0px 10px 0 0"}} /><strong>Introduction to Front-End Development</strong>-Coursera</a>
                </div>
              </div>
                <a href="https://drive.google.com/file/d/1PrWliKQq4XMHrUHd5hxF6310EXv2eVMj/view?usp=share_link" className='loadL'><BsCloudDownload style={{padding:"0 15px 0 0"}}/>Download</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default resume
