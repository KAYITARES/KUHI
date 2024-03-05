import React from "react";
import NavBar from "../components/navbar";
import "../sass/main.scss";
import HomePage from "../components/homepage";
import Speakers from "../components/speakers";
import Sponsors from "../components/sponsor";
import Footer from "../components/footer";
import Agend from "../components/agenda"


function Welcome(){
    return (
        <>
            <NavBar/>
            <HomePage/>
            <Speakers/>
            <div className="agenda">
                <div className="heard">
                    <h1>Our Agenda</h1>
                </div>
                <Agend/>
            </div>
            <Sponsors/>
            <Footer/>
        </>
    )
}
export default Welcome