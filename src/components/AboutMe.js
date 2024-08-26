

import Mine from "../images/Myphoto.jpg"
const AboutMe = ({textColor})=>{
    return(
        <div className="aboutMe">

            <div className="leftAboutMe">
                <div style={{background:textColor}} className="photoAboutMe">
                    <img alt="Me" src={Mine}/>
                </div>    
                               
            </div>
            <div className="rightAboutMe">
                <div className="contRightAbout">
                    <span style={{background:textColor}} className="shape"></span><span className="AboutTitle">About Me</span>
                </div>
                <div>
                    <p className="PforMe custom-scrollbar">I’m a UI/UX Designer who loves creating easy-to-use and visually appealing experiences. I’m skilled in user research, wireframing, and prototyping, with Figma as my main design tool. My background in front-end development helps me connect design and development smoothly. I’m a fast learner and excited to work with creative teams to build great user experiences. I focus on understanding what users need and applying design principles to make sure interfaces are both attractive and functional.
                        as a front-end developer.
                    </p>
                </div>
            </div>

             

        </div>
    )
}

export default AboutMe;