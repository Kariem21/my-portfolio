import AboutMe from "./AboutMe";
import LandingPage from "./LandingPage";
import MyServices from "./MyServices";
import Navbar from "./Navbar";
import Portfolio from "./Portfolio";



const Home = ()=>{
    return(
        <div className="Home">
            <div className="HomeParts">
            <Navbar/>
            <LandingPage/>
            <AboutMe/>
            <MyServices/>
            <Portfolio/>
            </div>
            
            
             

        </div>
    )
}

export default Home;