import Data from "../assets/agenda.json"
import React,{ useState } from "react"





export default function Agend(){
  const [firstdata,setfirstdate]=useState(true)
//   const [secanddata,setseconddata]=useState(false)
   
  const FirstApril = () =>{
    setfirstdate(true)
  } 
  
//   const SecondApril=()=>{
//     setseconddata(true)
//     setfirstdate(false)

//   }
  function ThirdApril(){

  }
  function FouthApril(){

  }
  function Moun(){

  }

    return (
        <>
           <div className="agenda-page">
                  <h4>Our Agenda</h4>
               <div className="agend-container">
                   <div className="agenda-nav">
                      <li onClick={FirstApril} id="active">
                        <h1>25 April</h1>
                        <p>Day 0 <span>TUESDAY</span></p>
                      </li>
                      <li >
                        <h1>26 April</h1>
                        <p>Day 1 <span>WEDNESDAY</span></p>
                      </li>
                      <li onClick={ThirdApril()}>
                        <h1>27 April</h1>
                        <p>Day 2 <span>THURSDAY</span></p>
                      </li>
                      <li onClick={FouthApril()}>
                        <h1>28 April</h1>
                        <p>Day 3 <span>FRIDAY</span></p>
                      </li>
                      <li onClick={Moun()}>
                        <h1>MoU</h1>
                        <p>Signing</p>
                      </li>
                     
                   </div>
                   
                    <div className="agenda-cards">
                    {Data.map((datas) =>(
                    <div className="cards">

                      {firstdata && (
                        <div className="card-dist">
                        <div className="card">
                        <div className="firstdiv">
                       <h2>{datas.time}</h2>
                        <p><span>{datas.definition}</span>
                           <button>{datas.firstbutton}</button>
                        </p>
                       </div>
                       <div className="secondiv">
                           <button>{datas.secondbutton}</button>
                        </div>
                        </div>
                        <div className="explanation">
                           <p>{datas.description}</p>
                        </div>
                        </div>
                      )}  
                    </div>
                    ))}
                  </div>
                   
                   
               </div>
           </div>
        </>
    )
}