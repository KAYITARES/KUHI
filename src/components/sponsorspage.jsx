import React from "react";
import Footer from "./footer";
import { Skeleton } from "antd";
import sponsor from '../assets/sponsors/sponsors.json'
import NavBar from "./navbar";

function SponsorsPage(){
    return(
        <>
        <NavBar/>
          <div className="head-container">
      <div className="head-delay">
        <div className="head">
          <div className="head-text">
            <h1>OUR SPONSORS</h1>
            <p>#ALIGHT RWANDA sponsors and partners.</p>
          </div>
          <div className="head-image">
            {/* <img src={heads} alt="head"/> */}
          </div>
        </div>
      </div>

      </div>
      <div className="sponsor-container">
    {/* <h1>OUR SPONSORS</h1> */}
    <div className="container-delay">

 
    <div className="sponsors">
    {sponsor ? (sponsor.map((sponsorx)=>(
        <div className="sponsor">
        <h3>{sponsorx.name}</h3>
        <div className="image">
        <img src={sponsorx.newsImage} alt="irembo" style={{objectFit:"cover"}}/>
        </div>

        </div>
    ))):(
        <Skeleton/>
    )}
      
    </div>
   
    </div>
    </div>
<Footer/>
        </>
    )
}
export default SponsorsPage