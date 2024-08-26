import whatsap from "../images/whatsap.png";
import github from "../images/github.png";
import behance from "../images/behancel.svg";
import gmail from "../images/gmail.png";
import linkedin from "../images/linkedin.png";
import facebook from "../images/facebook.png";
// import landingPhoto from "../images/land.svg"
import landingPhoto from "../images/Nerd-pana.svg";
import React from "react";

// import "./PDF/CV19-8-2023.pdf";
// import { FaUserNinja } from "react-icons/fa";

const LandingPage = ({ textColor }) => {
  // const handleDownload = () => {
  //   // const pdfUrl = 'http://localhost:3003/src/components/CV.pdf';
  //   const pdfUrl = "https://flowcv.com/resume/sr797v0gbc";
  //   const link = document.createElement("a");
  //   link.href = pdfUrl;
  //   link.target = "_blank";
  //   // link.download = 'CV.pdf';
  //   link.click();
  // };

  return (
    <div>
      <div className="containerLefRight">
        <div className="leftLanding">
          <p style={{ background: textColor }} className="pForHello">
            Hello, i'm
          </p>
          <h1 className="h1ForName">Eng.Kariem</h1>
          <p className="pForJop">UI UX Designer</p>
          <div className="icons">
            
          <div className="divForIcon">
              <a
                target="_blank"
                href="https://www.behance.net/kariem_atef"
                rel="noreferrer"
              >
                <img className="img1" alt="behance" src={behance} />
              </a>
            </div>
            <div className="divForIcon">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/kariem-atef-b819171b9"
                rel="noreferrer"
              >
                <img className="img1" alt="linkedin" src={linkedin} />
              </a>
            </div>
            <div className="divForIcon">
              <a
                target="_blank"
                href="https://github.com/Kariem21"
                rel="noreferrer"
              >
                <img className="img1" alt="github" src={github} />
              </a>
            </div>
            <div className="divForIcon">
              <a
                target="_blank"
                href="https://www.facebook.com/profile.php?id=100004190234760&sk=about"
                rel="noreferrer"
              >
                <img className="img1" alt="facebook" src={facebook} />
              </a>
            </div>
            
            <div className="divForIcon">
              <a href="mailto:Kariem.Atef21@gmail.com">
                <img className="img1" alt="gmail" src={gmail} />
              </a>
            </div>
            <div className="divForIcon">
              <a target="_blank" href="01026249568" rel="noreferrer">
                <img className="img1" alt="whatsap" src={whatsap} />
              </a>
            </div>
          </div>
          <a  className="btn"  href="https://drive.google.com/file/d/1mMfHmAJOvtrl4rouOuDuqYud9iuyDPGT/view?usp=sharing" rel="noreferrer" target="_blank">MY CV</a>

          {/* <div>
            <button
              style={{ background: textColor }}
             
              onClick={handleDownload}
            >
              MY CV
            </button>
          </div> */}
        </div>
        <div className="rightLanding">
          <img style={{ background: textColor }} alt="pho" src={landingPhoto} />
          {/* <FaUserNinja style={{background:textColor}} /> */}
        </div>
      </div>
      {/* <div  className="divbtn">
                <button>.</button>
            </div> */}
    </div>
  );
};

export default LandingPage;
