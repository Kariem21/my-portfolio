

import Services from "../images/logoinCenterServices.png"
import photoService1 from "../images/service1.png";
import responsive from "../images/responsive.png";
import photoService2 from "../images/service2.jpg";
import photoService3 from "../images/service3.jpg";
import photoService4 from "../images/service4.jpg";
import photoService5 from "../images/service5.jpg";




const MyServices = ({textColor}) => {
    return (
        <div className="Services">

            <div className="contRightAbout">
                <span style={{background:textColor}} className="shape"></span>
                <span style={{marginLeft:"-10%"}} className="AboutTitle">My Services</span>
            </div>
            <div className="AllServices">
                <div className="ContainerGroupServices">
                    <div className="oneService">
                        <div style={{background:textColor}} className="PhotoOneService">
                            <img alt="service" src={photoService1}></img>
                        </div>
                        <div className="contentService">
                            <h2> Web Design</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Sit, praesentium reprehenderit, voluptas saepe illum porro
                                maiores alias tempore similique reiciendis quia voluptates? Minus officia</p>
                        </div>

                    </div>
                    <div className="oneService">
                    <div  style={{background:textColor}} className="PhotoOneService">
                        <img alt="service" src={photoService2}></img>
                        </div>
                        <div  className="contentService">
                            <h2> Smooth User Experience</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Sit, praesentium reprehenderit, voluptas saepe illum porro
                                maiores alias tempore similique reiciendis quia voluptates? Minus officia</p>
                        </div>

                    </div>
                    <div className="oneService">
                        <div style={{background:textColor}} className="PhotoOneService">
                            <img alt="service" src={photoService4}></img>
                        </div>
                        <div className="contentService">
                            <h2> High Quality Apps</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Sit, praesentium reprehenderit, voluptas saepe illum porro
                                maiores alias tempore similique reiciendis quia voluptates? Minus officia</p>
                        </div>

                    </div>
                </div>
                <div className="logoInServices">
                    <img alt="Services" src={Services}></img>
                </div>
                <div className="ContainerGroupServices">
                    <div className="oneService">
                        <div style={{background:textColor}} className="PhotoOneService">
                            <img alt="service" src={responsive}></img>
                        </div>
                        <div className="contentService">
                            <h2> Responsive Designs</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Sit, praesentium reprehenderit, voluptas saepe illum porro
                                maiores alias tempore similique reiciendis quia voluptates? Minus officia</p>
                        </div>

                    </div>
                    <div className="oneService">
                    <div style={{background:textColor}} className="PhotoOneService">
                        <img alt="service" src={photoService5}></img>
                        </div>
                        <div className="contentService">
                            <h2> Web Development</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Sit, praesentium reprehenderit, voluptas saepe illum porro
                                maiores alias tempore similique reiciendis quia voluptates? Minus officia</p>
                        </div>

                    </div>
                    <div className="oneService">
                    <div style={{background:textColor}} className="PhotoOneService">
                        <img alt="service" src={photoService3}></img>
                        </div>
                        <div className="contentService">
                            <h2> Beautiful Design</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Sit, praesentium reprehenderit, voluptas saepe illum porro
                                maiores alias tempore similique reiciendis quia voluptates? Minus officia</p>
                        </div>

                    </div>
                    
                </div>

            </div>



        </div>
    )
}

export default MyServices;