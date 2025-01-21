import React from "react";
import { Link } from "react-router-dom";
import "../style/Contact.css";
import iconLinkedin from '../media/linkedin.png';
import contact from '../media/contact.png';
function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
      
      ><img src ={contact} style={{height:"100%", width:"100%"}}/></div>
      <div className="rightSide">
        <h1> Contact </h1>
        <Link to="">   <img src={iconLinkedin} style={{paddingLeft:"25px",height: "5vh", width:"5vh"}}/>
     </Link>
        <form id="contact-form" method="POST" style={{alignContent:"center", fontSize:"30px"}}>
          <label htmlFor="name" >Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text"  />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;