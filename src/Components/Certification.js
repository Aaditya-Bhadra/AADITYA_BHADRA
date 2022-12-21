import React from "react";
import './Certification.css'

const certificates = [
  {
    title: "Advance React",
    description:
      "In this course I covered how developers can use components and hooks in React to customize end-user experiences and all other features.",
    getImageSrc: require("../Assets/Certificates/Adv React.jpeg"),
  },
  {
    title: "React Basics",
    description:
      "In this course I covered fundamental concepts of React library.",
    getImageSrc: require("../Assets/Certificates/React Basics.jpeg"),
  },
  {
    title: "Version Control",
    description:
      "In this course I covered the strategies modern software developers use to collaborate and deploy Certificatess without causing code disruptions with GitHub.",
    getImageSrc: require("../Assets/Certificates/Version Control.jpeg"),
  },
  {
    title: "Principles of UI/UX Design",
    description:
      "This course introduced me to the basics of “Figma”, a tool commonly used for visual editing and graphic design",
    getImageSrc: require("../Assets/Certificates/UX UI.jpeg"),
  },
  {
    title: "HTML and CSS in depth",
    description:
      "I learn the core programming of HTML & advance features of CSS",
    getImageSrc: require("../Assets/Certificates/HTML & CSS.jpeg"),
  },
  {
    title: "Programming with JavaScript",
    description:
      "Every thing about JavaScript programming in ES5 & ES6 versions",
    getImageSrc: require("../Assets/Certificates/JavaScript.jpeg"),
  },
  {
    title: "Introduction to Front-End Development",
    description:
      "In this course I learned the responsibilities of a front-end developer ",
    getImageSrc: require("../Assets/Certificates/Intro to frontend.jpeg"),
  },
];

function Certification() {
  return (
    <>
      <div className="cert">
      <h1 as="h1" id="certificates-section">
        CERTIFICATES
      </h1>
      <div className="cource">
        {
        certificates.map((Certificate) => (
          <div className="elements" key={Certificate.title}>
          <img src={Certificate.getImageSrc} alt="" />
          <h1>{Certificate.title}</h1>
          <p>{Certificate.description}</p>
          </div>
          ))}
          </div>
      </div>
      </>
          );
        };

export default Certification;
