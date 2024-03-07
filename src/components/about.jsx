import React from "react";
// import CountUp from "react-countup/build/CountUp";
import CountUp from "react-countup";
import check from "../assets/KUHI_Consortium_Logo-removebg-preview.png";
import img from "../assets/img.png";

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
                    <div className="count-one" style={{ fontSize: "30px",fontWeight:"800",color:"rgb(19, 105, 105)" }}>
                     <CountUp 
                     start={0}end={5600} duration={5}/>
                     <p>Sessions</p>
                     </div>
                     <div className="count-two"  style={{ fontSize: "30px",fontWeight:"800",color:"rgb(19, 105, 105)"}}>
                     <CountUp 
                     start={0}end={14300} duration={5}/>
                     <p>Speakers</p>
                     </div>
                     <div className="count-three"  style={{ fontSize: "30px",fontWeight:"800" ,color:"rgb(19, 105, 105)"}}>
                     <CountUp 
                     start={0}end={123432} duration={5}/>
                     <p>Delegates</p>
                     </div>
                     </div>
                     <div className="stat-count-one">
                    <div className="count-one" style={{ fontSize: "30px",fontWeight:"800",color:"rgb(19, 105, 105)" }}>
                     <CountUp 
                     start={0}end={203} duration={5}/>
                     <p>Countries Represented</p>
                     </div>
                     <div className="count-two"  style={{ fontSize: "30px",fontWeight:"800" ,color:"rgb(19, 105, 105)"}}>
                     <CountUp 
                     start={0}end={349} duration={5}/>
                     <p>C-Suite Executives</p>
                     </div>
                     <div className="count-three"  style={{ fontSize: "30px",fontWeight:"800",color:"rgb(19, 105, 105)"}}>
                     <CountUp 
                     start={0}end={1920} duration={5}/>
                     <p>Head of States & Ministers</p>
                     </div>
                     </div>
                     <div className="stat-count-one">
                    <div className="count-one" style={{ fontSize: "30px" ,fontWeight:"800",color:"rgb(19, 105, 105)"}}>
                     <CountUp 
                     start={0}end={1000} duration={5}/>
                     <p>Sponsors & Exhibitors</p>
                     </div>
                     <div className="count-two"  style={{ fontSize: "30px" ,fontWeight:"800",color:"rgb(19, 105, 105)"}}>
                     <CountUp 
                     start={0}end={1400} duration={5}/>
                     <p>Media Representatives</p>
                     </div>
                     <div className="count-three"  style={{ fontSize:"30px",fontWeight:"800" ,color:"rgb(19, 105, 105)"}}>
                     <CountUp 
                     start={0}end={1600} duration={5}/>
                     <p>Mayors/Governors</p>
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
                    <h2>Who will Attend?</h2>
                    <div className="tree-cont-divi">
                        <div className="tree-cont-divi-one">
                            <div className="tree-cont-divi-one-line">
                            <p>Heads of State and Government</p>
                                <i class='bx bx-check'></i>
                            </div>
                            <div className="tree-cont-divi-one-line">
                            <p>First Ladies</p>
                                <i class='bx bx-check'></i>
                            </div>
                            <div className="tree-cont-divi-one-line">
                            <p>Ministers in ICT, Finance, Trade & Industry and Health</p>
                                <i class='bx bx-check'></i>
                            </div>
                            <div className="tree-cont-divi-one-line">
                            <p>Fintech companies</p>
                                <i class='bx bx-check'></i>
                            </div>
                            <div className="tree-cont-divi-one-line">
                            <p>Block chain experts</p>
                                <i class='bx bx-check'></i>
                            </div>
                            <div className="tree-cont-divi-one-line">
                            <p>Digital health service providers</p>
                                <i class='bx bx-check'></i>
                            </div>
                            <div className="tree-cont-divi-one-line">
                            <p>Artificial Intelligence firms & experts</p>
                                <i class='bx bx-check'></i>
                            </div>
                            <div className="tree-cont-divi-one-line">
                            <p>ICT Private Sector service providers</p>
                                <i class='bx bx-check'></i>
                            </div>
                            <div className="tree-cont-divi-one-line">
                            <p>Telecom& Utilities Regulators</p>
                                <i class='bx bx-check'></i>
                            </div>

                        </div>
                        <div className="tree-cont-divi-two">
                            <img src={check} alt="" /> 
                        </div>
                        <div className="tree-cont-divi-three">
                            <div className="tree-cont-divi-right">
                            <i class='bx bx-check'></i>
                                <p>International & Multilateral organizations</p>
                            </div>
                            <div className="tree-cont-divi-right">
                            <i class='bx bx-check'></i>
                                <p>Africa’s business influencers</p>
                            </div>
                            <div className="tree-cont-divi-right">
                            <i class='bx bx-check'></i>
                                <p>Investment banks & Venture capitalists</p>
                            </div>
                            <div className="tree-cont-divi-right">
                            <i class='bx bx-check'></i>
                                <p>Private equity fund managers</p>
                            </div>
                            <div className="tree-cont-divi-right">
                            <i class='bx bx-check'></i>
                                <p>Start ups</p>
                            </div>
                            <div className="tree-cont-divi-right">
                            <i class='bx bx-check'></i>
                                <p>Women & Girls in ICT champions</p>
                            </div>
                            <div className="tree-cont-divi-right">
                            <i class='bx bx-check'></i>
                                <p>Tech innovators</p>
                            </div>
                            <div className="tree-cont-divi-right">
                            <i class='bx bx-check'></i>
                                <p>Academia, Consultants &leading digitals leaders</p>
                            </div>
                            <div className="tree-cont-divi-right">
                            <i class='bx bx-check'></i>
                                <p>Non-governmental organizations</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-four">
                <div className="about-four-cont">
                    <h2>Why Attend?</h2>
                    <div className="about-four-cont-divi">
                        <div className="about-four-divi-one">
                            <div className="four-divi-one">
                                <p>
                                Be part of Africa’s leading forum on digital transformation.
                                </p>
                                <i class='bx bx-chevron-left'></i>
                            </div>
                            <div className="four-divi-one">
                                <p>
                                Build relationships to ensure your business participates in Africa’s single digital market.
                                </p>
                                <i class='bx bx-chevron-left'></i>
                            </div>
                            <div className="four-divi-one">
                                <p>
                                Learn about emerging technologies in Africa and how your business can benefit.
                                </p>
                                <i class='bx bx-chevron-left'></i>
                            </div>
                            <div className="four-divi-one">
                                <p>
                                Build relationships with digital health experts for your health policies.
                                </p>
                                <i class='bx bx-chevron-left'></i>
                            </div>
                            <div className="four-divi-one">
                                <p>
                                Catch up on Artificial Intelligence in Africa & what it means to you & your company.
                                </p>
                                <i class='bx bx-chevron-left'></i>
                            </div>
                            <div className="four-divi-one">
                                <p>
                                Learn from leading experts with relevant presentations that will impact your business today.
                                </p>
                                <i class='bx bx-chevron-left'></i>
                            </div>
                        </div>
                        <div className="about-four-divi-two">
                            <img src={img} alt="" />
                        </div>
                        <div className="about-four-divi-three">
                        <div className="four-divi-three">
                        <i class='bx bx-chevron-right'></i>
                                <p>
                                Participate in engaging debate on crypto currency & Africa.
                                </p>
                                
                            </div>
                            <div className="four-divi-three">
                            <i class='bx bx-chevron-right'></i>
                                <p>
                                Discover what’s new and what’s working in FinTech in Africa.
                                </p>
                               
                            </div>
                            <div className="four-divi-three">
                            <i class='bx bx-chevron-right'></i>
                                <p>
                                Support the Women and Girls in STEM through participation & contribution toward the Smart Girls initiative.
                                </p>
                                
                            </div>
                            <div className="four-divi-three">
                            <i class='bx bx-chevron-right'></i>
                                <p>
                                Build relationships with digital health experts for your health policies.
                                </p>
                                
                            </div>
                            <div className="four-divi-three">
                            <i class='bx bx-chevron-right'></i>
                                <p>
                                Broaden your reach and deepen your impact through collaborations in Africa, shaping the digital landscape.
                                </p>
                                
                            </div>
                            <div className="four-divi-three">
                            <i class='bx bx-chevron-right'></i>
                                <p>
                                Get insight into country specific SMART AFRICA flagship projects in the Member states and how your company can be a key player.
                                </p>
                                
                            </div>
                            <div className="four-divi-three">
                            <i class='bx bx-chevron-right'></i>
                                <p>
                                Interact and network with key decision makers and deal makers.
                                </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="aboout-five">
                <div className="about-five-cont">
                <h2>Book a Stand</h2>
                    <div className="about-five-cont-divi">
                    <div className="five-cont-divi-p">
                        <p>
                        Showcase your brand at the summit to a global audience 
                        of decision makers. Book an exhibition space:</p>
                    </div>
                    <div className="five-cont-divi-card">
                        <div className="five-cont-divi-card-one"> 
                        <div className="card-left">
                        <p>100sqm Pavilion</p>
                        </div>
                        <div className="card-right">
                        <p>$100,000</p>
                        </div>
                        </div>
                        <div className="five-cont-divi-card-one"> 
                        <div className="card-left">
                        <p>50sqm Executive exhibition</p>
                        </div>
                        <div className="card-right">
                        <p>$50,000</p>
                        </div>
                        </div>
                        <div className="five-cont-divi-card-one"> 
                        <div className="card-left">
                        <p>18sqm </p>
                        </div>
                        <div className="card-right">
                        <p>$20,000</p>
                        </div>
                        </div>
                        <div className="five-cont-divi-card-one"> 
                        <div className="card-left">
                        <p>9sqm </p>
                        </div>
                        <div className="card-right">
                        <p>$10,000</p>
                        </div>
                        </div>
                        <div className="five-cont-divi-card-one"> 
                        <div className="card-left">
                        <p>2sqm Start-up Lane </p>
                        </div>
                        <div className="card-right">
                        <p>$3,000</p>
                        </div>
                        </div>
                    </div>
                    <div className="five-cont-divi-pp">
                        <p>*Please contact our team for bespoke spaces</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default About