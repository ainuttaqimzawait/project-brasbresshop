import About from "./komponen/about";
import Footer from "./komponen/footer";
import Home from "./komponen/home";
import Location from "./komponen/location";
import Navigation from "./komponen/navbar";
import Showcard from "./komponen/pelayanan/showcard";
// import Testimony from "./komponen/testimony";
import "./style.css"

const Componen = () => {
    return (
        <div>
            <Navigation />
            <Home />
            <About />
            {/* <Testimony /> */}
            <Showcard />
            <Location />
            <Footer />
        </div>
    )
};
export default Componen;