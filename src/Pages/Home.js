import React from "react";
import { Link } from "react-router-dom";
import "../style/Home.css";
import { useState } from "react";
import background_resume from '../media/image.png';

function Home() {
 
  const [showItems1, setShowItems1] = useState(false);
  const [showItems2, setShowItems2] = useState(false);
  const [showItems3, setShowItems3] = useState(false);
  
  return (
  <div className="home"  style={{backgroundImage:`url(${background_resume})`}}  >
    <h1>Priyanka Kishore Gala </h1>
    <h2> Resume </h2>
     <div className="headerContainer" >
     
        <p 
         onMouseEnter={() => setShowItems1(true)}
         onClick={()=>setShowItems1(false)}
         style={{ cursor: "pointer"}}>Full Stack Developer, Data Machine Intelligence, München, März 2023 – August 2024 </p>
        <ol style={{fontSize:"25px"}}>
       

        {showItems1 && ( <>
          <li>Entwicklung von Anwendungen in Java 17, Typescript- und ReactJs-Anwendungen</li>
          <li>Bereitstellen von Anwendungen in AWS mit Docker Container </li>
          <li>Leitung der Entwicklung einer Microservices-Architektur, was die Skalierbarkeit und Wartung verbesserte</li>
          <li>Zusammenarbeit mit funktionsübergreifenden Teams zur Entwicklung einer Simulation</li>
        </>)}
        
        </ol>
       
       <p
       onMouseEnter={() => setShowItems2(true)}
       onClick={()=>setShowItems2(false)}
       style={{ cursor: "pointer"}}>Werkstudent Backend Developer und Support, Decadis AG, Koblenz, Januar 2022 – Februar 2023 </p>
       <ol style={{fontSize:"25px"}}>
       {showItems2 && ( <>
        <li>Aufbau und Wartung von Backend-Systemen mit Java 11 zur Sicherstellung robuster API-Dienste</li>
        <li>Entwicklung von Datenbankschemata und Schreiben effizienter SQL-Abfragen.</li>
        <li>Gearbeitet als 2nd-level Support </li>
        </>
       )}
       </ol>

       <p
       onMouseEnter={() => setShowItems3(true)}
       onClick={()=>setShowItems3(false)}
       style={{ cursor: "pointer"}}>Operations Executive, Infosys Ltd, Bangalore, Indien, Oktober 2017 – März 2021 </p>
       <ol style={{fontSize:"25px"}}>
       {showItems3 && ( <>
        <li>Anwendungsentwicklung mit Fokus auf Java, JSF, Angular und Javascript. </li>
        <li>Optimierte Vorlagen für Kundenbenachrichtigungen in der SFMC-Plattform, um die Kommunikationseffizienz zu steigern. </li>
       </>
       )}
       </ol>

      

  
       <p>Master in Web and Data Science, Universität Koblenz und Landau, Oktober 2020 – Januar 2025</p>
       <ul style={{fontSize:"25px"}}>
       <li>Master Arbeit: Ethical Compliance in Smart City Data Platforms </li></ul>
       <p>Bachelor of Science in Informationstechnologie, Universität Mumbai, Mumbai, Indien, 2014 – 2017 </p>
       <ul style={{fontSize:"25px"}}>
       <li>Bachelor Projekt: Blind Man Rescue Project using Arduino Uno </li></ul>
       <p>Führung & Freiwillige Erfahrung</p>
       <ol style={{fontSize:"25px"}}>
       <li> Internationaler Vertreter im Student Parliament, Universität Koblenz (2022-2023) </li>
       <li>Komiteeleiter von Voice of Youth, Infosys Ltd (2017-2021)   </li>
       <li> Leiter des International Events Committee</li>
     
       </ol>
      
      
    
     </div>
  
     <Link to="/projects">
          <button> Go To Projects </button>
        </Link>
  </div>
  );
}

export default Home;