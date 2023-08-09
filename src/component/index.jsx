import About from "./komponen/about";
import Home from "./komponen/home";
import Navigation from "./komponen/navbar";
import "./style.css"

const Componen = () => {
    return (
        <div>
            <Navigation />
            <Home />
            <About />
        </div>
    )
};
export default Componen;