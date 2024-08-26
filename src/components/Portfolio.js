import project1 from "../images/project12.png";
import project2 from "../images/project2.png";
import project3 from "../images/project3.png";
import project4 from "../images/project41.png";
import project5 from "../images/project5.png";
import project6 from "../images/project61.png";
import project7 from "../images/project7.png";
import project8 from "../images/project8.png";
import project9 from "../images/project9.png";
import project10 from "../images/project10.png";
import project11 from "../images/project11.png";

const Portfolio = ({ textColor }) => {
  return (
    <>
      <div style={{ justifyContent: "center" }} className="contRightAbout">
        <span style={{ background: textColor }} className="shape"></span>
        <span style={{ marginLeft: "-2%" }} className="AboutTitle">
          {" "}
          Projects
        </span>
      </div>
      <div className="Portfolio">
        {/* <div className="divProject"> */}
        <div className="image-container">
          <img src={project7} className="hover-image" alt="Hover " />

          <a
            href="https://drive.google.com/file/d/1wyfMZSENx3zih81JOOML_y2OYImXTRcZ/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="hover-text"
          >
            {" "}
            My Graduation Project
          </a>
        </div>
        <div className="image-container">
          <img src={project6} className="hover-image" alt="Hover " />

          <a
            href="https://resweb.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="hover-text"
          >
            {" "}
            ResWeb Website
          </a>
        </div>
        <div className="image-container">
          <img src={project11} className="hover-image" alt="Hover " />

          <a
            href="https://brightway-frontend.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="hover-text"
          >
            {" "}
            BrightWay
          </a>
        </div>
        <div className="image-container">
          <img src={project1} className="hover-image" alt="Hover " />

          <a
            href="https://kariem21.github.io/Main-Project/"
            target="_blank"
            rel="noreferrer"
            className="hover-text"
          >
            Profile Template
          </a>
        </div>
        {/* </div> */}
        {/* <div className="divProject"> */}




        {/* <div className="image-container">
          <img src={project2} className="hover-image" alt="Hover " />

          <a
            href="https://kariem-ecommerce-app.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="hover-text"
          >
            similar To Noon
          </a>
        </div>{" "} */}



        
        {/* </div>  */}
        {/* <div className="divProject"> */}
        {/* <div className="image-container">
          <img src={project3} className="hover-image" alt="Hover " />
          <div className="hover-text">Go to see test on js, html and css</div>
        </div>{" "} */}
        {/* </div> <div> */}


       {/*  <div className="image-container">
          <img src={project4} className="hover-image" alt="Hover " />

          <a
            href="https://simple-ecommerce-kariem.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="hover-text"
          >
            Products Details
          </a>
        </div>{" "} */}
        {/* </div> */}



        {/* <div className="divProject"> */}
        {/* <div className="image-container">
                <img src={project5} className="hover-image" alt="Hover " />
                <div className="hover-text">
                    Go to see cars website
                </div>
            </div>             */}
        {/* <div className="divProject"> */}
        {/* </div>  */}
        {/* <div className="divProject"> */}
        {/* </div>  */}
        {/* <div className="divProject"> */}
        {/* <div className="image-container">
          <img src={project8} className="hover-image" alt="Hover " />
          <div className="hover-text">Go to see a static dashboard</div>
        </div>{" "} */}
        {/* </div>  */}
        {/* <div className="divProject"> */}
        {/* <div className="image-container">
          <img src={project9} className="hover-image" alt="Hover " />

          <a
            href="https://github.com/Kariem21/CRUD-App"
            target="_blank"
            rel="noreferrer"
            className="hover-text"
          >
            crud app
          </a>
        </div>
        <div className="image-container">
          <img src={project10} className="hover-image" alt="Hover " />

          <a
            href="https://convert-currency-blue.vercel.app/"
            className="hover-text"
            target="_blank"
            rel="noreferrer"
          >
            Curruncy Converter
          </a>
        </div> */}
        {/* </div> */}
      </div>
    </>
  );
};

export default Portfolio;
