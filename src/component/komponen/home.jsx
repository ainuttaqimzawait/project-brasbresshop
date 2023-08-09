import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Image } from 'react-bootstrap';
// import Image from 'react-bootstrap/Image';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function Home() {
    return (
        <Carousel>
            <Carousel.Item>
                <Image src="joshua-woroniecki-qv3SGvQJFrs-unsplash.jpg" style={{ height: "500px", width: "100%" }} />;
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image src="./foto.jpg" style={{ height: "500px", width: "100%" }} fluid />;
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image src="joshua-woroniecki-qv3SGvQJFrs-unsplash.jpg" style={{ height: "500px", width: "100%" }} />;
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Home;