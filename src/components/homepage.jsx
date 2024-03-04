import React from "react";
import home from "../assets/KUHI.png";
import kuhi from "../assets/alight.jpg";
import gsma from "../assets/GSMA.jpg";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import Button from "@mui/material/Button";
import { Carousel } from "antd";
// import Lottie from 'lottie-react';
// import animation from '../assets/animations.json'
// import world from '../assets/world.json'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import worls from '../assets/worlds.json'
// import alight from '../assets/alight.json'

const contentStyle = {
  margin: 0,
  height: "auto",
  color: "#000",
  lineHeight: "19px",
  background: "#FFFF",
  padding: "50px 10px 50px",
};

function HomePage() {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  const backgroundImage = {
    backgroundImage: `linear-gradient(to bottom, rgba(253, 253, 253, 0.52), rgba(1, 1, 1, 0.73)), url("https://images.pexels.com/photos/1192662/pexels-photo-1192662.jpeg?auto=compress&cs=tinysrgb&w=600")`,
    // backgroundColor:'red',
    backgroundPosition: "50% 20%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    // height: "63vh",
    backgroundColor: "black",
  };
  return (
    <>
      <div className="home-container">
        <div className="home-page" style={backgroundImage}>
          <div className="home">
            <div className="translate">
              <img src={home} alt="rotate" />
            </div>
            <div className="dates">
              <div className="date">
                <div className="vis">
                  <h1 className="falls">28-30 APRIL</h1>
                  <CalendarMonthOutlinedIcon className="add" />
                </div>
              </div>
              <hr />

              <div className="victory">
                <div className="vis">
                  <h1 className="falls">
                    VICTORY FALLS IN RWANDA GORILLA HILLS
                  </h1>
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
          <Carousel afterChange={onChange} autoplay>
            <div>
              <div style={contentStyle} className="content">
                <h1 className="heads">BACKGROUND</h1>
                <div className="teso">
                  <div className="delay">
                    <img src={kuhi} alt="home" />
                    <div className="session">
                      <p>
                        {" "}
                        The Kubaka Ubushobozi Hifashishijwe Ikoranabuhanga
                        (KUHI) Consortium was brought together in 2020 by GSMA
                        Mobile for Humanitarian Innovation (M4H) and comprises
                        of World Vision, ALIGHT, Viamo, the United Nations
                        Capital Development Fund (UNCDF) and Inkomoko (hereafter
                        individually referred to as “party” or collectively as
                        “parties.”) Please refer to Annex I at the end of this
                        document for full descriptions of each member. The
                        consortium was formed to leverage the complementary
                        expertise of each agency to facilitate an environment
                        for refugees and host community in Rwanda which is
                        digitally and economically inclusive. The consortium
                        engages a network of government, private sector and
                        civil society stakeholders to utilize digital technology
                        and facilitate tangible progress towards socio-economic
                        inclusion for refugees and host communities in Rwanda.
                        The consortium is supported by the expertise of a
                        Strategic Advisory Group (SAG), which comprises of GSMA
                        and the United Nations High Commission for Refugees
                        (UNHCR), and other affiliate organizations in the
                        digital financial spectrum.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="check">
                  <h1>SESSION</h1>
                  <div className="session">
                    <div>
                      <div className="smart-container">
                        <div className="cont">
                          <ArrowForwardIosIcon className="icon" />
                          <p>digital skills and workspace</p>
                        </div>

                        <div className="cont">
                          <ArrowForwardIosIcon className="icon" />
                          <p>Broadband</p>
                        </div>
                        <div className="cont">
                          <ArrowForwardIosIcon className="icon" />
                          <p>setelites</p>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div>
                      <div className="smart-container">
                        <div className="cont">
                          <ArrowForwardIosIcon className="icon" />
                          <p>digital skills and workspace</p>
                        </div>

                        <div className="cont">
                          <ArrowForwardIosIcon className="icon" />
                          <p>Broadband</p>
                        </div>
                        <div className="cont">
                          <ArrowForwardIosIcon className="icon" />
                          <p>setelites</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="contained">
                  <Button
                    variant="contained"
                    disableElevation
                    className="btn-home"
                  >
                    EXPLORE WVR
                  </Button>
                </div>
              </div>
            </div>
            <div>
              <div style={contentStyle} className="content">
                <h1 className="heads">ALIGHT Rwanda</h1>
                <div className="teso">
                  <div className="delay">
                    <img src={gsma} alt="home" />
                    <div className="session">
                      <p>
                        {" "}
                        ALIGHT Rwanda is the one and only agency that works in
                        all refugee camps in Rwanda, serving mostly Congolese
                        and Burundian refugees. Alight exists to walk alongside
                        those who – by sheer circumstance – find themselves on
                        the long and arduous journey of displacement. Deeply
                        co-creating with communities and integrating
                        human-centered design into our work for almost 3 decades
                        in Rwanda, Alight understands the experiences of the
                        displaced persons and seeks to deliver services worthy
                        of their humanity. While Alight Rwanda works to ensure
                        that refugees’ basic needs are met, we also recognize
                        that in order to help displaced people fully regain a
                        life of dignity and fulfillment, we must think and act
                        beyond the status quo. This includes seeking partnership
                        with the private sector. Our partnership with MeshPower
                        has enabled Alight to pilot technologically driven
                        humanitarian assistance such as the provision of solar
                        streetlights, charging kiosks and energy saving stoves.
                        Our partnership with VIAMO has enabled us to reach
                        vulnerable displaced persons such as pregnant and
                        lactating mothers with using Interactive Voice Response
                        (IVR) systems.  {/*We also actively collaborate with leading
                        agencies like global telecommunications company MTN,
                        training agents who work with Rwanda’s refugee
                        communities on a daily basis. The Rwandan */}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="check">
                  <h1>SESSION</h1>
                  <div className="session">
                    <div>
                      <div className="smart-container">
                        <div className="cont">
                          <ArrowForwardIosIcon className="icon" />
                          <p>digital skills and workspace</p>
                        </div>

                        <div className="cont">
                          <ArrowForwardIosIcon className="icon" />
                          <p>Broadband</p>
                        </div>
                        <div className="cont">
                          <ArrowForwardIosIcon className="icon" />
                          <p>setelites</p>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div>
                      <div className="smart-container">
                        <div className="cont">
                          <ArrowForwardIosIcon className="icon" />
                          <p>smart devices</p>
                        </div>

                        <div className="cont">
                          <ArrowForwardIosIcon className="icon" />
                          <p>Broadband</p>
                        </div>
                        <div className="cont">
                          <ArrowForwardIosIcon className="icon" />
                          <p>setelites</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="contained">
                  <Button
                    variant="contained"
                    disableElevation
                    className="btn-home"
                  >
                    EXPLORE ALIGHT
                  </Button>
                </div>
              </div>
            </div>
            <div>
              <div style={contentStyle} className="content">
                <h1 className="heads">Modalities of Cooperation</h1>
                <div className="teso">
                  <div className="delay">
                    <img src={home} alt="home" />
                    <div className="session">
                      <p>
                        {" "}
                        Members agree to use their individual and joint
                        experiences on financial inclusion, digital development,
                        and work with vulnerable communities such as those
                        targeted herein to position and promote the experience
                        of the consortium. Primarily, members should promote and
                        advocate for joint initiatives and resource mobilization
                        where appropriate. However, where the opportunity
                        presented does not accommodate a consortium model, the
                        consortium member can notify other members of such.
                        Whenever possible, members may discuss possible areas of
                        collaboration even in a competitive bid that still
                        promotes consortium activities. Members agree that in
                        order to present a competitive bid, there will be
                        instances where individual agencies or part of the
                        consortium will be represented in a bidding process. In
                        such instances, individual agencies or partners who are
                        consortium members will inform the entire consortium. If
                        the member or members would like to cite the joint
                        experience of KUHI consortium in the bidding process,
                        consortium members must consent in writing.
                      </p>
                      <hr />
                    </div>
                  </div>
                </div>
                <div className="check">
                  <h1>SESSION</h1>
                  <div className="session">
                    <div>
                      <div className="smart-container">
                        <div className="cont">
                          <ArrowForwardIosIcon className="icon" />
                          <p>digital skills and workspace</p>
                        </div>

                        <div className="cont">
                          <ArrowForwardIosIcon className="icon" />
                          <p>Broadband</p>
                        </div>
                        <div className="cont">
                          <ArrowForwardIosIcon className="icon" />
                          <p>setelites</p>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div>
                      <div className="smart-container">
                        <div className="cont">
                          <ArrowForwardIosIcon className="icon" />
                          <p>smart devices</p>
                        </div>

                        <div className="cont">
                          <ArrowForwardIosIcon className="icon" />
                          <p>Broadband</p>
                        </div>
                        <div className="cont">
                          <ArrowForwardIosIcon className="icon" />
                          <p>setelites</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="contained">
                  <Button
                    variant="contained"
                    disableElevation
                    className="btn-home"
                  >
                    EXPLORE CONNECT
                  </Button>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}
export default HomePage;
