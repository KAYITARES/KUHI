import React, { useState } from "react";
import image1 from "../assets/gallery/image1.jpg";
import image2 from "../assets/gallery/image2.jpg";
import image3 from "../assets/gallery/image3.jpeg";
import image4 from "../assets/gallery/image4.jpeg";
import image5 from "../assets/gallery/image5.jpeg";
import image6 from "../assets/gallery/image6.jpeg";
import image7 from "../assets/gallery/image7.jpeg";
import image8 from "../assets/gallery/image8.jpeg";
import image9 from "../assets/gallery/image9.jpeg";
import image10 from "../assets/gallery/image10.jpeg";
import NavBar from "./navbar";
import { Image } from "antd";
import { Link } from "react-router-dom";

function MembersMedia() {
  const [organization, setOrganization] = useState("alight");

  const organizationImages = {
    alight: [
      { id: 1, imgSrc: image1 },
      { id: 2, imgSrc: image2 },
      { id: 3, imgSrc: image3 },
      { id: 4, imgSrc: image4 },
      { id: 5, imgSrc: image5 },
      { id: 6, imgSrc: image6 },
      { id: 7, imgSrc: image7 },
      { id: 8, imgSrc: image8 },
      { id: 9, imgSrc: image9 },
      { id: 10, imgSrc: image10 }
    ],
    kuhi: [
      { id: 5, imgSrc: image5 },
      { id: 6, imgSrc: image6 },
      { id: 7, imgSrc: image7 },
      { id: 8, imgSrc: image8 },
      { id: 9, imgSrc: image9 },
      { id: 10, imgSrc: image10 }
    ],
    "world vision": [
      { id: 1, imgSrc: image1 },
      { id: 2, imgSrc: image2 },
      { id: 3, imgSrc: image3 },
      { id: 4, imgSrc: image4 },
      { id: 5, imgSrc: image5 }
    ]
  };

  const organizationContent = {
    alight: `Alight is pioneering a new kind of humanitarian organization. Our purpose is to inspire and unleash abundance in every person by being the best at co-creating with displaced people. Together, we aim to unlock new pathways to redefine quality in the industry.`,
    kuhi: "Members will participate in activities such as formulation of the strategic focus of the KUHI Consortium, joint mobilization of resources towards digital financial inclusion, and building the capacity of members.  Members will also advocate for digital financial inclusion to Government and private sector actors for marginalized communities such as refugees, forcibly displaced persons (FDPs) and vulnerable host communities.",

    "world vision": "World Vision began assisting individuals in Rwanda in 1994, following the 1994 Genocide against the Tutsi. We provided aid and support to millions forced to leave their homes. In 2000, we began our long-term development programs targeting vulnerable children and their families."
  };
  const organizationHead = {
    alight: `ALIGHT `,
    kuhi: "KUHI",

    "world vision":"WORLD VISION"
  };

  const handleClick = (orgName) => {
    setOrganization(orgName);
  };

  return (
    <>
      <NavBar />
      <div className="media-container">
        <div className="madia-delay">
          <div className="medias">
            <div className="organize">
              <Link className="link" onClick={() => handleClick("alight")}>
                alight
              </Link>
              <Link className="link" onClick={() => handleClick("kuhi")}>
                kuhi
              </Link>
              <Link
                className="link"
                onClick={() => handleClick("world vision")}
              >
                world vision
              </Link>
            </div>
            <div className="photo-grid">
              <div className="sample">
                {organizationImages[organization] &&
                  organizationImages[organization].map((item, index) => (
                    <div className="gallery" key={index}>
                      <Image
                        src={item.imgSrc}
                        alt="gallery"
                        className="gallery-img"
                      />
                    </div>
                  ))}
              </div>
              <div className="content">
                <div className="group">
                <h1>{organizationHead[organization]}</h1>
                  <p
                    className="content"
                    style={{
                      color: "black",
                      zIndex: "9999",
                      width: "100%"
                    }}
                  >
                    {organizationContent[organization]}
                  </p>
                  <div className="visit">
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MembersMedia;
