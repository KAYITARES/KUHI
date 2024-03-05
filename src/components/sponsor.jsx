import { Button , Skeleton } from "antd";
import React from "react";
import sponsor from '../assets/sponsors/sponsors.json'
function Sponsors(){
    return (
        <>
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
   
   <div className="btn-sponsor">
        <Button className="btn-spo">VIEW ALL THE SPONSORS</Button>
    </div>
    </div>
        </>
    )
}
export default Sponsors