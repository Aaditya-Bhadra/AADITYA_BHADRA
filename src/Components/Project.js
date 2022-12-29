import React from "react";
import './project.css'

const projects = [
  {
    title: "Weather App",
    description:
      "Want to know your area weather consdition I have a app which provide Weather data of the city searched in it. This app is built with using HTML, CSS, JavaScript and fetching API data in ReactJS library",
    getImageSrc: require("../Assets/projects/Weather.JPG"),
    links : "https://github.com/Aaditya-Bhadra/Weather-App",
  },
  {
    title: "Tic Tac Toe",
    description:
      "Getting bored, challenge your friend for a move. A Tic Tac Toe game to enjoy with your friends. This app is built with using HTML, CSS & JavaScript in ReactJS library",
    getImageSrc: require("../Assets/projects/TicToe.png"),
    links : "https://github.com/Aaditya-Bhadra/Tic-Tac-Toe_Game"
  }
];

function Certification() {
  return (
    <>
      <div className="proj">
      <h1 as="h1" id="certificates-section">
        PERSONAL PROJECTS
      </h1>
      <div className="work">
        {
        projects.map((project) => (
          <div className="elementsP" key={project.title}>
          <img src={project.getImageSrc} alt="" />
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <a href={project.links}>Code is here</a>
          </div>
          ))}
          </div>
      </div>
      </>
          );
        };

export default Certification;
