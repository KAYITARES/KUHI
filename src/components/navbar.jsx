import React from "react";
import {Link } from 'react-router-dom';
import logos from '../assets/KUHI_Consortium_Logo-removebg-preview.png';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import Button from "@mui/material/Button";
// import SignUpPage from "../pages/signuppage";


function NavBar(){

    const[isMobile,setIsMobile] = useState(false)
    return (
        <>
            <nav>
            <div className="nav-container">
            <div className="navBar">
            <div className="logo">
           <img src={logos} alt="ii"/>
            </div>
            <ul className={isMobile?'openNav':'links'}
                    onClick={()=>setIsMobile(false)}>
<<<<<<< HEAD
                <li><Link className="link">The Summit<ArrowDropDownIcon className="ic"/>
                <div className="drop-down">
                <li><Link className="linka">ABOUT US</Link></li>
                <li>
                <li><Link className="linka" to="./sponsor">OUR SPONSOR</Link></li>
</li>


                <li><Link className="linka" to="./speaker">OUR SPEAKERS</Link></li>
                <li><Link className="linka">SUMMIT AGENDA</Link></li>
                </div>
                </Link></li>
                <li><Link to="/agenda" className="link">AGENDA</Link></li>
=======
                <li><Link className="link">The Summit</Link></li>
                <li><Link className="link" to="./speaker">OUR SPEAKERS</Link></li>
                <li><Link className="link">AGENDA</Link></li>
>>>>>>> f5a3d7b (changes)
                <li><Link className="link"  to="./sponsor">Sponsors</Link></li>
                <li><Link className="link">MEMBERS-MEDIA</Link></li>
            </ul>
            <Button
      variant="contained"
      disableElevation
      className="btn-nav"
      component={Link} 
      to="/signup" 
    >
      REGISTER NOW
    </Button>
            <div className="menu">
                <MenuIcon className="menu-icon" onClick = {()=>setIsMobile(!isMobile)} />
            </div>
            </div>
            </div>
            </nav>
        </>
    )
}
export default NavBar