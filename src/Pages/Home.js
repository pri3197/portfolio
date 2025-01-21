import React from "react";
import { Link } from "react-router-dom";
import "../style/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="headerContainer">
        <h1>Priyanka Kishore Gala </h1>
        <p> Resume </p>
        <Link to="/projects">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;