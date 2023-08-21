

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
                    <p className="PforMe custom-scrollbar">I am a recent graduate from Helwan University's
                        Faculty of Computer Science, specializing in front-end
                        development with a focus on designing and coding
                        with React. <br />
                        Passionate about creating visually appealing and userfriendly interfaces, I am excited to embark on a career
                        as a front-end developer, bringing designs to life and
                        enhancing user experiences.
                        With a solid foundation in computer science
                        principles, I am equipped to tackle complex challenges
                        and optimize performance to deliver high-quality web
                        solutions.<br /><br />
                        Constantly seeking opportunities for growth and
                        staying up-to-date with the latest industry trends, I am
                        dedicated to continuous learning and honing my skills
                        as a front-end developer.
                    </p>
                </div>
            </div>

             

        </div>
    )
}

export default AboutMe;