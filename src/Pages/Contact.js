import React from "react";
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
        <a href="https://linkedin.com/in/priyanka-gala-09a823a8" target="_blank" rel="noopener noreferrer">
                    <img src={iconLinkedin} alt="LinkedIn" style={{ paddingLeft: "25px", height: "5vh", width: "5vh" }} />
                </a>
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