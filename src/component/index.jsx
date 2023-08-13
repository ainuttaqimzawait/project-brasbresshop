import Footer from "./footer";
import About from "./komponen/about";
import Home from "./komponen/home";
import Location from "./komponen/location";
import Navigation from "./komponen/navbar";
import "./style.css"

const Componen = () => {
    return (
        <div>
            <Navigation />
            <Home />
            <About />
            <Location />
            <Footer />
        </div>
    )
};
export default Componen;