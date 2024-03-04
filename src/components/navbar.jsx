import React from "react";
import {Link } from 'react-router-dom';
import logos from '../assets/KUHI_Consortium_Logo-removebg-preview.png';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import Button from "@mui/material/Button";


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
                <li><Link className="link"  to="./sponsor">Sponsors</Link></li>
                <li><Link className="link">Practical-Information<ArrowDropDownIcon className="ic"/>
                <div className="drop-down">
                <li><Link className="linka">VISA INFORMATION</Link></li>
                <li><Link className="linka">TAS 2023 OFFICIAL PITCTURE</Link></li>
                <li><Link className="linka">HOTEL</Link></li>
                </div>
                </Link></li>
                
            </ul>
            <Button variant="contained" disableElevation className="btn-nav">
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