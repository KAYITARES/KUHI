import React, { useState } from "react";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import alight from '../assets/logo.jpeg'
import Button from "@mui/material/Button";
import UNCDF from "../assets/UNCDF.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function HomePage() {
  const backgroundImage = {
    backgroundImage: `linear-gradient(to bottom, rgba(253, 253, 253, 0.52), rgba(1, 1, 1, 0.73)), url("https://images.pexels.com/photos/1192662/pexels-photo-1192662.jpeg?")`,
    backgroundPosition: "50% 35%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "59vh",
    backgroundColor: "black",
  };

  const [currentContent, setCurrentContent] = useState(1);

  const toggleNextContent = () => {
    setCurrentContent((prevContent) => {
      if (prevContent === 3) {
        return 1;
      } else {
        return prevContent + 1;
      }
    });
  };

  const togglePreviousContent = () => {
    setCurrentContent((prevContent) => {
      if (prevContent === 1) {
        return 3;
      } else {
        return prevContent - 1;
      }
    });
  };

  return (
    <>
      <div className="home-container">
        <div className="home-page" style={backgroundImage}>
          <div className="home">
            <div className="dates">
              <h1 className="head">
                Digital Financial Inclusion Community of Practice Launch
              </h1>
              <div className="date">
                <div className="vis">
                  <div className="april">
                    <div className="month">
                      <div className="dat">14-24</div>
                    </div>
                    <div className="day">
                      <div className="mon">APRIL</div>
                    </div>
                  </div>
                  <CalendarMonthOutlinedIcon className="add" />
                </div>
              </div>
              <hr />
              <div className="victory">
                <div className="vis">
                  <h1 className="falls">Kigali Convention Center-Kigali</h1>
                  <AddLocationAltIcon className="add" />
                </div>
              </div>
              <Button variant="contained" disableElevation className="btn-home">
                REGISTRATION
              </Button>
            </div>
          </div>
        </div>
        <div className="features">
          {currentContent === 1 && (
            <div className="contents">
              <div className="contents-logo">
                <img
                  src="https://pbs.twimg.com/profile_images/1565213074583420933/ISBmxPrW_400x400.jpg"
                  alt="home"
                />
              </div>
              <div className="contents-container">
                <h1>Inkomoko</h1>
                <p>
                  works with micro and small entrepreneurs across Africa,
                  including refugees. By offering business advisory, access to
                  finance, and market linkages, we support entrepreneurs to
                  create thriving communities. Inkomoko started in Rwanda in
                  2012 and now has offices in Kenya, Ethiopia, and South Sudan
                  working with more than 10,000 entrepreneurs a year in Rwanda.
                  Our vision is an Africa with thriving communities where young
                  people and refugees are engaged, communities have access to
                  relevant innovations for self-determination, and where African
                  solutions are unleashed to solve African problems. We have
                  provided business advisory and access to finance for thousands
                  of entrepreneurs across East Africa. As the largest investor
                  in refugee businesses, we have disbursed more than $13M in
                  capital. This affordable finance for Inkomoko entrepreneurs
                  helps them grow their businesses, create jobs, and improve
                  their livelihoods. As we look forward, Inkomoko is developing
                  new ways to engage communities to thrive. Creating meaningful
                  market linkages, expanding to secondary cities, and advocating
                  for economic inclusion, Inkomoko has added these
                  community-based approaches to our enterprise development work.
                  By 2030, Inkomoko will be in 8 countries, serving more than
                  half a million small businesses, creating a positive impact
                  for more than 7 million people across the Continent.
                </p>
                <h1 className="session-title">SESSION</h1>
                <div className="session">
                  <div className="smart-container">
                    <div className="cont">
                      <ArrowForwardIosIcon className="icon" />
                      <p>digital skills</p>
                    </div>
                    <div className="cont">
                      <ArrowForwardIosIcon className="icon" />
                      <p>Broadband</p>
                    </div>
                    <div className="cont">
                      <ArrowForwardIosIcon className="icon" />
                      <p>satellites</p>
                    </div>
                  </div>
                  <div className="smart-container">
                    <div className="cont">
                      <ArrowForwardIosIcon className="icon" />
                      <p>digital skills</p>
                    </div>
                    <div className="cont">
                      <ArrowForwardIosIcon className="icon" />
                      <p>Broadband</p>
                    </div>
                    <div className="cont">
                      <ArrowForwardIosIcon className="icon" />
                      <p>satellites</p>
                    </div>
                  </div>
                </div>
                <Button className="btn-nav">REGISTER NOW</Button>
                <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "20px",
        }}
      >
        <Button onClick={togglePreviousContent} className="next">Previous</Button>
        <Button onClick={toggleNextContent} className="next">Next</Button>
      </div>
              </div>
            </div>
          )}

          {currentContent === 2 && (
            <div className="contents">
              <div className="contents-logo">
                <img src={UNCDF} alt="home" />
              </div>
              <div className="contents-container">
                <h1>UNCDF </h1>
                <p>
                  UNCDF has been present in Rwanda since 1981, promoting
                  community empowerment through infrastructure development and
                  service delivery. Today, UNCDF offers “last mile” finance
                  models that unlock public and private resources, especially at
                  the domestic level, to reduce poverty and support local
                  economic development. Through UNCDF's Inclusive Digital
                  Economies practice, UNCDF partnered with Comic Relief and
                  Jersey Overseas Aid to launch the ‘Rwanda: Expanding Financial
                  Access & Digital and Financial Literacy’ (REFAD) programme in
                  2019 to expand access to finance and improve digital and
                  financial capability for vulnerable populations. The REFAD
                  Programme has made significant strides in catalyzing Rwanda's
                  digital finance ecosystem to reach digitally and financially
                  underserved target populations such as refugees, youth, and
                  women, as indicated in a case study publication released in
                  2022. Through a multi-stakeholder approach, UNCDF will
                  facilitate the provision of technical assistance and capacity
                  building to foster innovation and develop solutions to shape
                  the future of the fintech landscape in Rwanda.
                </p>
                <h1 className="session-title">SESSION</h1>
                <div className="session">
                  <div className="smart-container">
                    <div className="cont">
                      <ArrowForwardIosIcon className="icon" />
                      <p>digital skills</p>
                    </div>
                    <div className="cont">
                      <ArrowForwardIosIcon className="icon" />
                      <p>Broadband</p>
                    </div>
                    <div className="cont">
                      <ArrowForwardIosIcon className="icon" />
                      <p>satellites</p>
                    </div>
                  </div>
                  <div className="smart-container">
                    <div className="cont">
                      <ArrowForwardIosIcon className="icon" />
                      <p>digital skills</p>
                    </div>
                    <div className="cont">
                      <ArrowForwardIosIcon className="icon" />
                      <p>Broadband</p>
                    </div>
                    <div className="cont">
                      <ArrowForwardIosIcon className="icon" />
                      <p>satellites</p>
                    </div>
                  </div>
                </div>
                <Button className="btn-nav">REGISTER NOW</Button>
                <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "20px",
        }}
      >
        <Button onClick={togglePreviousContent} className="next">Previous</Button>
        <Button onClick={toggleNextContent} className="next">Next</Button>
      </div>
              </div>
            </div>
          )}

          {currentContent === 3 && (
            <div className="contents">
              <div className="contents-logo">
                <img src={alight} alt="home" />
              </div>
              <div className="contents-container">
                <h1>alight </h1>
                <p>
                  is the one and only agency that works in all refugee camps in
                  Rwanda, serving mostly Congolese and Burundian refugees.
                  Alight exists to walk alongside those who – by sheer
                  circumstance – find themselves on the long and arduous journey
                  of displacement. Deeply co-creating with communities and
                  integrating human-centered design into our work for almost 3
                  decades in Rwanda, Alight understands the experiences of the
                  displaced persons and seeks to deliver services worthy of
                  their humanity. While Alight Rwanda works to ensure that
                  refugees’ basic needs are met, we also recognize that in order
                  to help displaced people fully regain a life of dignity and
                  fulfillment, we must think and act beyond the status quo. This
                  includes seeking partnership with the private sector. Our
                  partnership with MeshPower has enabled Alight to pilot
                  technologically driven humanitarian assistance such as the
                  provision of solar streetlights, charging kiosks and energy
                  saving stoves. Our partnership with VIAMO has enabled us to
                  reach vulnerable displaced persons such as pregnant and
                  lactating mothers with using Interactive Voice Response (IVR)
                  systems. We also actively collaborate with leading agencies
                  like global telecommunications company MTN, training agents
                  who work with Rwanda’s refugee communities on a daily basis.
                  The Rwandan people and government, with their dedication to
                  economic growth, stability, and building world class systems
                  and solutions, provide an ideal environment for innovation. In
                  Rwanda, we’ve collected more than 600,000 ratings of our
                  services and over 200,000 ideas for how to do better.
                </p>
                <h1 className="session-title">SESSION</h1>
                <div className="session">
                  <div className="smart-container">
                    <div className="cont">
                      <ArrowForwardIosIcon className="icon" />
                      <p>digital skills</p>
                    </div>
                    <div className="cont">
                      <ArrowForwardIosIcon className="icon" />
                      <p>Broadband</p>
                    </div>
                    <div className="cont">
                      <ArrowForwardIosIcon className="icon" />
                      <p>satellites</p>
                    </div>
                  </div>
                  <div className="smart-container">
                    <div className="cont">
                      <ArrowForwardIosIcon className="icon" />
                      <p>digital skills</p>
                    </div>
                    <div className="cont">
                      <ArrowForwardIosIcon className="icon" />
                      <p>Broadband</p>
                    </div>
                    <div className="cont">
                      <ArrowForwardIosIcon className="icon" />
                      <p>satellites</p>
                    </div>
                  </div>
                </div>
                <Button className="btn-nav">REGISTER NOW</Button>

                <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "20px",
        }}
      >
        <Button onClick={togglePreviousContent} className="next">Previous</Button>
        <Button onClick={toggleNextContent} className="next">Next</Button>
      </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
    </>
  );
}
export default HomePage;
