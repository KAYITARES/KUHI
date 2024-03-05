import React from "react";
// import CountUp from "react-countup/build/CountUp";
import CountUp from "react-countup";

const About=()=>{
    return(
        <>
        <div className="about-container">
            <div className="about-one">
                <div className="about-text">
                    <h2>About the KUI2024</h2>
                    <p>Following five successful editions, the sixth Summit will take place<br/>
                     at the Victoria Falls in Rwanda.</p>
                </div>
            </div>
            <div className="about-two">
                <div className="about-two-cont">
                    <div className="two-cont-left">
                    <h2>Alight Rwanda Statistics for the past four(4) editions</h2>
                        <div className="two-cont-left-stat">
                            <div className="stat-count-one">
                    <div className="count-one" style={{ fontSize: "23px" }}>
                     <CountUp 
                     start={0}end={560000} duration={5}/>
                     <p>Speakers</p>
                     </div>
                     <div className="count-two"  style={{ fontSize: "23px" }}>
                     <CountUp 
                     start={0}end={143000} duration={5}/>
                     <p>Sessions</p>
                     </div>
                     <div className="count-three"  style={{ fontSize: "23px" }}>
                     <CountUp 
                     start={0}end={45000} duration={5}/>
                     <p>Delegates</p>
                     </div>
                     </div>
                     <div className="stat-count-one">
                    <div className="count-one" style={{ fontSize: "23px" }}>
                     <CountUp 
                     start={0}end={203050} duration={5}/>
                     <p>Speakers</p>
                     </div>
                     <div className="count-two"  style={{ fontSize: "23px" }}>
                     <CountUp 
                     start={0}end={349592} duration={5}/>
                     <p>Sessions</p>
                     </div>
                     <div className="count-three"  style={{ fontSize: "23px" }}>
                     <CountUp 
                     start={0}end={192093} duration={5}/>
                     <p>Delegates</p>
                     </div>
                     </div>
                     <div className="stat-count-one">
                    <div className="count-one" style={{ fontSize: "23px" }}>
                     <CountUp 
                     start={0}end={1000} duration={5}/>
                     <p>Speakers</p>
                     </div>
                     <div className="count-two"  style={{ fontSize: "23px" }}>
                     <CountUp 
                     start={0}end={10000} duration={5}/>
                     <p>Sessions</p>
                     </div>
                     <div className="count-three"  style={{ fontSize: "23px" }}>
                     <CountUp 
                     start={0}end={16000} duration={5}/>
                     <p>Delegates</p>
                     </div>
                     </div>
                     </div>
                     </div>
                     <div className="two-cont-center">
                        <p>
                      The Transform Africa Summit is Africa’s leading annual forum bringing together
                      global and regional leaders from government, business and international 
                      organizations to collaborate on new ways of shaping, accelerating and 
                      sustaining Africa’s on-going digital revolution. 
                      Following five successful editions, the sixth Summit 
                      will take place at the Victoria Falls in Zimbabwe.Running under
                      the theme “Connect, Innovate and Transform”, Transform Africa
                        </p>
                     </div>
                     <div className="two-cont-right">
                        <p>Summit aims to enable Member States to become more competitive, agile, open and 
                            innovative smart economies. It is an opportunity for meaningful engagements
                            on how governments can attract large-scale investments and enable 
                            fast growth and exports as well as for the private sector to thrive
                            in an innovation and ICT-driven entrepreneurship ecosystem, hence 
                            transform African nations into smart societies. </p>
                     </div>
                </div>
            </div>
            <div className="about-three">
                <div className="tree-cont">
                    
                </div>
            </div>
            <div className="about-four"></div>
        </div>
        </>
    )
}
export default About