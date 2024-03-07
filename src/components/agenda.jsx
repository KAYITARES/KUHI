import Data from "../assets/agenda.json"
import React,{ useState } from "react"
import data from "../assets/agenda2.json"
import datasa from "../assets/agenda3.json"
import datasas from "../assets/agenda4.json"
import mou from "../assets/agenda5.json"





export default function Agend(){
  const [firstdata,setfirstdate]=useState(true)
  const [secanddata,setseconddata]=useState(false)
  const [thirddata,setthirddata]=useState(false)
  const [fuothdata,setfouthdata]=useState(false)
  const [moudata,setmou]=useState(false)
  const [handlehide,sethid]=useState(false)
  // const [hid,setdatahid]=useState(true)
   

  const Learmore =()=>{
    sethid(true)
  }
  const Hid=()=>{
    sethid(false)
  }
  const FirstApril = () =>{
    setfirstdate(true)
  } 
  
  const SecondApril=()=>{
    setseconddata(true)
    setfirstdate(false)

  }
  function ThirdApril(){
    setseconddata(false)
    setfirstdate(false)
    setthirddata(true)

  }
  function FouthApril(){
    setfouthdata(true)
    setseconddata(false)
    setfirstdate(false)
    setthirddata(false)

  }
  function Moun(){
    setmou(true)
    setfouthdata(false)
    setseconddata(false)
    setfirstdate(false)
    setthirddata(false)

  }

    return (
        <>
           <div className="agenda-page">
               <div className="agend-container">
                   <div className="agenda-nav">
                   <li onClick={FirstApril} className={firstdata === true ? "active":""}>
                        <h1>25 April</h1>
                        <p>Day 0 <span>TUESDAY</span></p>
                      </li>
                      <li onClick={SecondApril} className={secanddata === true ? "active":""}>
                        <h1>26 April</h1>
                        <p>Day 1 <span>WEDNESDAY</span></p>
                      </li>
                      <li onClick={ThirdApril} className={thirddata === true ? "active":""}>
                        <h1>27 April</h1>
                        <p>Day 2 <span>THURSDAY</span></p>
                      </li>
                      <li onClick={FouthApril} className={fuothdata === true ? "active":""}>
                        <h1>28 April</h1>
                        <p>Day 3 <span>FRIDAY</span></p>
                      </li>
                      <li onClick={Moun} className={moudata === true ? "active":""}>
                        <h1>MoU</h1>
                        <p>Signing</p>
                      </li>
                     
                   </div>
                   {firstdata && (
                    <div className="agenda-cards">
                    {Data.map((datas) =>(
                    <div className="cards">

                      
                        <div className="card-dist">
                        <div className="card">
                        <div className="firstdiv">
                       <h2>{datas.time}</h2>
                        <p><span>{datas.definition}</span>
                           <button onClick={Learmore}>{datas.firstbutton}</button>
                        </p>
                       </div>
                       <div className="secondiv">
                           <button onClick={Hid}>{datas.secondbutton}</button>
                        </div>
                        </div>
                        {handlehide && (
                            <div className="explanation">
                            <p>{datas.description}</p>
                         </div>
                        )}
                        
                        </div>
                       
                    </div>
                    ))}
                  </div>
                  )}


                  {secanddata && (
                      <div className="agenda-cards">
                      {data.map((datas) =>(
                      <div className="cards">
  
                        
                          <div className="card-dist">
                          <div className="card">
                          <div className="firstdiv">
                         <h2>{datas.time}</h2>
                          <p><span>{datas.definition}</span>
                             <button onClick={Learmore}>{datas.firstbutton}</button>
                          </p>
                         </div>
                         <div className="secondiv">
                             <button onClick={Hid}>{datas.secondbutton}</button>
                          </div>
                          </div>
                          {handlehide && (
                            <div className="explanation">
                            <p>{datas.description}</p>
                         </div>
                        )}
                          </div>
                         
                      </div>
                      ))}
                    </div>
                  )} 


                      {thirddata && (
                      <div className="agenda-cards">
                      {datasa.map((datas) =>(
                      <div className="cards">
  
                        
                          <div className="card-dist">
                          <div className="card">
                          <div className="firstdiv">
                         <h2>{datas.time}</h2>
                          <p><span>{datas.definition}</span>
                             <button onClick={Learmore}>{datas.firstbutton}</button>
                          </p>
                         </div>
                         <div className="secondiv">
                             <button onClick={Hid}>{datas.secondbutton}</button>
                          </div>
                          </div>
                          {handlehide && (
                            <div className="explanation">
                            <p>{datas.description}</p>
                         </div>
                        )}
                          </div>
                         
                      </div>
                      ))}
                    </div>
                  )}


                  {fuothdata && (
                      <div className="agenda-cards">
                      {datasas.map((datas) =>(
                      <div className="cards">
  
                        
                          <div className="card-dist">
                          <div className="card">
                          <div className="firstdiv">
                         <h2>{datas.time}</h2>
                          <p><span>{datas.definition}</span>
                             <button onClick={Learmore}>{datas.firstbutton}</button>
                          </p>
                         </div>
                         <div className="secondiv">
                             <button onClick={Hid}>{datas.secondbutton}</button>
                          </div>
                          </div>
                          {handlehide && (
                            <div className="explanation">
                            <p>{datas.description}</p>
                         </div>
                        )}
                          </div>
                         
                      </div>
                      ))}
                    </div>
                  )} 



                  {moudata && (
                           <div className="agenda-cards">
                           {mou.map((datas) =>(
                           <div className="cards">
       
                             
                               <div className="card-dist">
                               <div className="card">
                               <div className="firstdiv">
                              <h2>{datas.time}</h2>
                               <p><span>{datas.definition}</span>
                                  <button onClick={Learmore}>{datas.firstbutton}</button>
                               </p>
                              </div>
                              <div className="secondiv">
                                  <button onClick={Hid}>{datas.secondbutton}</button>
                               </div>
                               </div>
                               {handlehide && (
                                   <div className="explanation">
                                    <p>{datas.description}</p>
                                    </div>
                                   )}
                               </div>
                              
                           </div>
                           ))}
                         </div>
                  )} 
                   
                   
               </div>
           </div>
        </>
    )
}