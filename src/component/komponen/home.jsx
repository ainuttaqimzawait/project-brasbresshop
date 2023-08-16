import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Image } from 'react-bootstrap';
// import Image from 'react-bootstrap/Image';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function Home() {
    return (
        <div className="home">
            <Carousel>
                <Carousel.Item>
                    <Image src="barber1.jpg" style={{ height: "100vh", width: "100%" }} />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image src="barber2.webp" style={{ height: "100vh", width: "100%" }} fluid />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image src="barber3.webp" style={{ height: "100vh", width: "100%" }} />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="contactHome">
                <div className="footerHome">
                    <div className="contact-home">
                        <img
                            src="logo-wa.png" alt=""
                            height="25px"
                            width="25px"
                        />
                        <p>08123456789</p>
                    </div>
                    <div className="alamat-home">
                        <img
                            src="gps-logo.png" alt=""
                            height="25px"
                            width="25px"
                        />
                        <p>Jepang RT 01/10, Jepang, Kec. Mejobo, Kabupaten Kudus, Jawa Tengah 59381</p>
                    </div>
                    <div className="time-home">
                        <img
                            src="logo-jam.png" alt=""
                            height="25px"
                            width="25px"
                        />
                        <p>Jepang RT 01/10, Jepang, Kec. Mejobo, Kabupaten Kudus, Jawa Tengah 59381</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;