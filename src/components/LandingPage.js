

import whatsap from "../images/whatsap.png";
import github from "../images/github.png";
import gmail from "../images/gmail.png";
import linkedin from "../images/linkedin.png";
import facebook from "../images/facebook.png";
import landingPhoto from "../images/land.svg";
// import "./PDF/CV19-8-2023.pdf";


const LandingPage = ()=>{

    const handleDownload = () => {
        const pdfUrl = './PDF/CV19-8-2023.pdf';
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'CV19-8-2023.pdf';
        link.click();
      };
      
    return(
        <div>
            <div className="containerLefRight">
            <div className="leftLanding">
                <p className="pForHello">Hello, i'm</p>
                <h1 className="h1ForName">Eng.Kariem</h1>
                <p className="pForJop">Frontend Developer</p>
                <div className="icons">
                    <div className="divForIcon">
                        <img className="img1" alt="github" src={github}/>
                    </div>
                    <div className="divForIcon">
                        <img className="img1" alt="facebook"src={facebook}/>
                    </div>
                    <div className="divForIcon">
                        <img className="img1" alt="linkedin"src={linkedin}/>
                    </div > 
                    <div className="divForIcon">
                        <img className="img1" alt="gmail"src={gmail}/>
                    </div>
                    <div className="divForIcon">
                        <img className="img1" alt="whatsap"src={whatsap}/>
                    </div>


                    </div>
                    <div>
                        {/* <a href="CV19-8-2023.pdf" download="CV19-8-2023.pdf" target="_blank"> */}
                            <button className="btn" onClick={handleDownload}>Download CV</button>
                        {/* </a> */}
                    </div>

            </div>
            <div className="rightLanding">
                <img alt="pho" src={landingPhoto}/>

            </div>
            </div>
            <div className="divbtn">
                <button>.</button>
            </div>
            
             

        </div>
    )
}

export default LandingPage;