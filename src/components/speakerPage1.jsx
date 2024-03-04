import React from "react";
// import { Spin } from 'antd';
import { Skeleton } from 'antd';
// import heads from '../assets/logo.jpeg'
import { Image } from "antd";
import records from '../assets/speakers/speaker.json'
import Footer from "./footer";



function Speakers(){

 
return (
    <>
        <article>
      <div className="head-container">
      <div className="head-delay">
        <div className="head">
          <div className="head-text">
            <h1>OUR SPEAKERS</h1>
            <p>Get ready to be inspired by Countries leaders, Tech CEOs and future-shaping innovators at Transform Africa Summit, Victoria Falls.</p>
          </div>
          <div className="head-image">
            {/* <img src={heads} alt="head"/> */}
          </div>
        </div>
      </div>

      </div>

        
        <div className="heads">
        <h1>OUR SPEAKERS</h1>
        <h3>Stay tuned for more Speakers to come</h3>
        </div>
       
          <div className="delay">
          <div className="articles">

{records ? (records.map((blogx) => (
  <div className="container" key={records._id}>
  <div className="image" data-aos="zoom-in">
  <Image width = {'100%'} height={'100%'} src= {blogx.newsImage}/>
 
  <div className="name">
        <h3>{blogx.name}</h3>
    </div>
  </div>

  <div className="text">
  <p className='short'>{blogx.title}</p>
  <p className='short'>{blogx.description}</p>
  </div>
        <div className="decription">

        </div>
        </div>
    
))): (
<Skeleton active/>
)}

    
    </div>

          </div>
     
          
               
                
                
        
            
            
        </article>
        <Footer/>
    </>
)
}

export default Speakers


