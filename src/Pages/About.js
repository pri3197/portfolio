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
        Software Engineer having more than 5 years of IT experience. 
        Hands-on experience Springboot, Maven, and Restful Web Services technologies like SOAP and Restful Web Services. Having a knowledge of Java, Spring Framework, ReactJs, HTML, CSS3, & Javascript (ES6) in addition to having basics in Hibernate and Oracle database concepts.
        I have completed my Masters Thesis in Ethical Compliance in Smart City data platforms. 
        <br/>Sprachen: Hindi, Englisch (C1), Deutsch (B2), Französisch (A1)  <br/>
        Programmiersprachen: Java, Python, ReactJs, XML, HTML, CSS  <br/>
        Datenbanken: SQL, Postgres, Oracle  <br/>
        Frameworks: Spring MVC, Spring Boot, Hibernate, JPA  <br/>
        Versionskontrolle: Git, Maven, Gitlab  <br/>
        Operating System: Windows, Linux  <br/>
        Container/Cloud: Docker, AWS <br/>
       
       
        </p>
      </div>
    </div>
  );
}

export default About;