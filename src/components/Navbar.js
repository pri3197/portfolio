import React, {useState} from 'react'
import photo from '../media/IMG_E8052.JPG';
import {Link} from 'react-router-dom';
import '../style/Navbar.css'
import ReorderIcon from '@mui/icons-material/Reorder';
function Navbar() {
const[openLinks, setOpenLinks]=useState(false)

const toggleNavbar =()=>{
    setOpenLinks(!openLinks);
};

  return (
    <div className="navbar">
      <div className='leftSide' id={openLinks ?"open": "close"}>
        <img src={photo}/>
        <div className='hiddenLinks'>
        <Link to ="/portfolio"> Home </Link>
        <Link to ="/projects"> Projects </Link>
        <Link to ="/about"> About </Link>
        <Link to ="/contact"> Contact </Link>
        </div>
      </div>                        
      <div className='rightSide'>
        <Link to ="/portfolio"> Home </Link>
        <Link to ="/projects"> Projects </Link>
        <Link to ="/about"> About </Link>
        <Link to ="/contact"> Contact </Link>
        <button onClick={toggleNavbar}>
            <ReorderIcon />
        </button>
      </div>
    </div>
   
  )
}

export default Navbar
