import React from "react";

import "../style/About.css";
import background_resume from '../media/background_Resume.png';
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
  style={{backgroundImage:`url(${background_resume})`}}> </div>
      <div className="aboutBottom">
      <h1> ABOUT ME</h1>
        <p style={{textAlign:"center"}}>
        Softwareentwickler mit mehr als 5 Jahren IT-Erfahrung. 
        Praktische Erfahrung mit Springboot-, Maven- und Restful Web Services-Technologien.<br/> 
        Aufbau sicherer, skalierbarer Finanzsysteme, Nutzung von Microservices und Cloud Computing. <br/>
        Kenntnisse in Java, Spring Framework, ReactJs, HTML, CSS3 und Javascript (ES6) sowie Grundlagen in Hibernate- und Oracle-Datenbankkonzepten.<br/>
        Ich habe meine Masterarbeit über ethische Compliance in Smart City-Datenplattformen abgeschlossen. <br/>
        Sprachen: Hindi, Englisch (C1), Deutsch (B2), Französisch (A1) <br/>
        Programmiersprachen: Java, Python, ReactJs, XML, HTML, CSS <br/>
        Datenbanken: SQL, Postgres, Oracle <br/>
        Frameworks: Spring MVC, Spring Boot, Hibernate, JPA <br/>
        Versionskontrolle: Git, Maven, Gitlab <br/>
        Betriebssystem: Windows, Linux <br/>
        Container/Cloud: Docker, AWS <br/>
       
       
        </p>
      </div>
    </div>
  );
}

export default About;