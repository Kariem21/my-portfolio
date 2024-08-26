import Services from "../images/logoinCenterServices.png";
import photoService1 from "../images/webDesign.jpg";
import responsive from "../images/responsive.jpg";
import photoService2 from "../images/userEx.jpg";
import photoService3 from "../images/design.jpg";
import photoService4 from "../images/qualityapp.jpg";
import photoService5 from "../images/userResearch.jpg";

const MyServices = ({ textColor }) => {
  return (
    <div className="Services">
      <div className="contRightAbout">
        <span style={{ background: textColor }} className="shape"></span>
        <span style={{ marginLeft: "-10%" }} className="AboutTitle">
          My Services
        </span>
      </div>
      <div className="AllServices">
        <div className="ContainerGroupServices">
          <div className="oneService">
            <div style={{ background: textColor }} className="PhotoOneService">
              <img alt="service" src={photoService1}></img>
            </div>
            <div className="contentService">
              <h2> Web Design</h2>
              <p>
                Create stunning websites that look great and work well. We
                design websites that are not only attractive but also
                user-friendly, helping you make a strong impression online.
              </p>
            </div>
          </div>
          <div className="oneService">
            <div style={{ background: textColor }} className="PhotoOneService">
              <img alt="service" src={photoService2}></img>
            </div>
            <div className="contentService">
              <h2> Smooth User Experience</h2>
              <p>
                Make your website or app easy to use. We design interfaces that
                are simple to navigate, so your users can find what they need
                quickly and enjoy their experience.
              </p>
            </div>
          </div>
          <div className="oneService">
            <div style={{ background: textColor }} className="PhotoOneService">
              <img alt="service" src={photoService4}></img>
            </div>
            <div className="contentService">
              <h2> High Quality Apps</h2>
              <p>
                Develop apps that are reliable and perform well. We build
                high-quality applications that work smoothly and meet your
                needs, ensuring a great experience for your users.
              </p>
            </div>
          </div>
        </div>
        <div className="logoInServices">
          <img alt="Services" src={Services}></img>
        </div>
        <div className="ContainerGroupServices">
          <div className="oneService">
            <div style={{ background: textColor }} className="PhotoOneService">
              <img alt="service" src={responsive}></img>
            </div>
            <div className="contentService">
              <h2> Responsive Designs</h2>
              <p>
                Ensure your website looks good on any device. We create designs
                that adapt to different screen sizes, so your site is easy to
                use whether it's viewed on a computer, tablet, or phone.
              </p>
            </div>
          </div>
          <div className="oneService">
            <div style={{ background: textColor }} className="PhotoOneService">
              <img alt="service" src={photoService5}></img>
            </div>
            <div className="contentService">
              <h2> User Research</h2>
              <p>
                Learn about your users to create what they really want. We find
                out what users need and how they behave through surveys,
                interviews, and observations. This helps us design products that
                are easy to use and meet their needs.
              </p>
            </div>
          </div>
          <div className="oneService">
            <div style={{ background: textColor }} className="PhotoOneService">
              <img alt="service" src={photoService3}></img>
            </div>
            <div className="contentService">
              <h2> Beautiful Design</h2>
              <p>
                Make your brand stand out with eye-catching designs. We focus on
                creating visually appealing designs that are also practical,
                helping you attract and engage your audience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyServices;
