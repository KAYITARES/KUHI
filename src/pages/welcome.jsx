import React from "react";
import NavBar from "../components/navbar";
import "../sass/main.scss";
import HomePage from "../components/homepage";
import Speakers from "../components/speakers";
import Sponsors from "../components/sponsor";
import Footer from "../components/footer";


function Welcome(){
    return (
        <>
            <NavBar/>
            <HomePage/>
            <Speakers/>
            <Sponsors/>
            <Footer/>
        </>
    )
}
export default Welcome