
import project1 from "../images/project12.png"
import project2 from "../images/project2.png";
import project3 from "../images/project3.png";
import project4 from "../images/project41.png";
import project5 from "../images/project5.png";
import project6 from "../images/project61.png";
import project7 from "../images/project7.png";
import project8 from "../images/project8.png";
import project9 from "../images/project9.png";

const Portfolio = ({textColor}) => {
    return (
        <>
<div style={{justifyContent:"center"}} className="contRightAbout">
                <span  style={{background:textColor}} className="shape"></span>
                <span style={{marginLeft:"-2%"}} className="AboutTitle"> Projects</span>
            </div>
        <div className="Portfolio">
            {/* <div className="divProject"> */}
            <div className="image-container">
                <img src={project1} className="hover-image" alt="Hover " />
                <div className="hover-text">
                    Go to see This Profile Template
                </div>
            </div>
            {/* </div> */}
            {/* <div className="divProject"> */}

            <div className="image-container">
                <img src={project2} className="hover-image" alt="Hover " />
                <div className="hover-text">
                Go to see a similar site Noon 
                </div>
            </div>            {/* </div>  */}
            {/* <div className="divProject"> */}
            <div className="image-container">
                <img src={project3} className="hover-image" alt="Hover " />
                <div className="hover-text">
                    Go to see test on js, html and css
                </div>
            </div>            {/* </div> <div> */}
            <div className="image-container">
                <img src={project4} className="hover-image" alt="Hover " />
                <div className="hover-text">
                    Go to see a simple ecommerce website
                </div>
            </div>            {/* </div> */}
            {/* <div className="divProject"> */}
            <div className="image-container">
                <img src={project5} className="hover-image" alt="Hover " />
                <div className="hover-text">
                    Go to see cars website
                </div>
            </div>            {/* </div> */}
            {/* <div className="divProject"> */}
            <div className="image-container">
                <img src={project6} className="hover-image" alt="Hover " />
                <div className="hover-text">
                    Go to see ResWeb Website it is For a Client 
                </div>
            </div>            {/* </div>  */}
            {/* <div className="divProject"> */}
            <div className="image-container">
                <img src={project7} className="hover-image" alt="Hover " />
                <div className="hover-text">
                    Go To See My Graduation Project
                </div>
            </div>            {/* </div>  */}
            {/* <div className="divProject"> */}
            <div className="image-container">
                <img src={project8} className="hover-image" alt="Hover " />
                <div className="hover-text">
                    Go to see a static dashboard
                </div>
            </div>            {/* </div>  */}
            {/* <div className="divProject"> */}
            <div className="image-container">
                <img src={project9} className="hover-image" alt="Hover " />
                <div className="hover-text">
                    Go to see crud app
                </div>
            </div>            {/* </div> */}



        </div>
        </>

    )
}

export default Portfolio;