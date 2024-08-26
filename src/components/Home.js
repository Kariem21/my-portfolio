import { useState } from "react";
import AboutMe from "./AboutMe";
import LandingPage from "./LandingPage";
import MyServices from "./MyServices";
import Navbar from "./Navbar";
import Portfolio from "./Portfolio";

const Home = () => {
  const [buttonClicked, setButtonClicked] = useState(true);
  const [textColor, setTextColor] = useState("var(--main-color)");

  const handleButtonClick = () => {
    const newButtonClicked = !buttonClicked; // Toggle the buttonClicked value
    setButtonClicked(newButtonClicked); // Update the buttonClicked state

    // Set the textColor based on the updated buttonClicked value
    setTextColor(
      newButtonClicked ? "var(--main-color)" : "var(--second-color)"
    );
  };
  return (
    <div className="Home">
      <div className="HomeParts">
        <Navbar
          textColor={
            buttonClicked ? "var(--main-color)" : "var(--second-color)"
          }
          onButtonClick={handleButtonClick}
        />
        <LandingPage
          textColor={
            buttonClicked ? "var(--main-color)" : "var(--second-color)"
          }
        />
        <AboutMe
          textColor={
            buttonClicked ? "var(--main-color)" : "var(--second-color)"
          }
        />
        <MyServices
          textColor={
            buttonClicked ? "var(--main-color)" : "var(--second-color)"
          }
        />
        <Portfolio
          textColor={
            buttonClicked ? "var(--main-color)" : "var(--second-color)"
          }
        />
      </div>
    </div>
  );
};

export default Home;
