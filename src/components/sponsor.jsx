import { Button } from "antd";
import React from "react";

function Sponsors(){
    return (
        <>
    <div className="sponsor-container">
    {/* <h1>OUR SPONSORS</h1> */}
    <div className="container-delay">

 
    <div className="sponsors">
        <div className="sponsor">
        <h3>GSMA</h3>
        <div className="image">
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/28/GSMA-Logo-Red_2022.jpg" alt="irembo"/>
        </div>

        </div>
        <div className="sponsor">
        <h3>GSMA</h3>
        <div className="image">
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/25/Viamo_Logo.png" alt="irembo"/>
        </div>

        </div>
        <div className="sponsor">
        <h3>GSMA</h3>
        <div className="image">
        <img src="https://www.inkomoko.com/wp-content/uploads/2022/08/WEB-LOGO-01.png" alt="irembo"/>
        </div>

        </div>
     
       
        <div className="sponsor">
        <h3>GSMA</h3>
        <div className="image">
        <img src="https://phosphor.utils.elfsightcdn.com/?url=https%3A%2F%2Fmedia.licdn.com%2Fdms%2Fimage%2FD4D0BAQE2AvifAJFktA%2Fcompany-logo_400_400%2F0%2F1688402274170%2Funcdf_logo%3Fe%3D1717027200%26v%3Dbeta%26t%3DaEOuPVzjkh5BM7rb1nbXyo2a2VPqeXPUPorQp-i_cO8" alt="irembo"/>
        </div>

        </div>
        <div className="sponsor">
        <h3>GSMA</h3>
        <div className="image">
        <img src="data:image/png;base64,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" alt="irembo"/>
        </div>

        </div>
    </div>
   
    </div>
    <div className="btn-sponsor">
        <Button className="btn-spo">VIEW ALL THE SPONSORS</Button>
    </div>
    </div>
        </>
    )
}
export default Sponsors