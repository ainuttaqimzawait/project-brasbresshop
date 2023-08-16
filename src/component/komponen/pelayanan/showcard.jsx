// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';


function Showcard() {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide style={{ height: "200px", width: "200px", backgroundColor: "green" }}>Slide 1</SwiperSlide>
            <SwiperSlide style={{ height: "200px", width: "200px", backgroundColor: "green" }}>Slide 2</SwiperSlide>
            <SwiperSlide style={{ height: "200px", width: "200px", backgroundColor: "green" }}>Slide 3</SwiperSlide>
            <SwiperSlide style={{ height: "200px", width: "200px", backgroundColor: "green" }}>Slide 4</SwiperSlide>
            <SwiperSlide style={{ height: "200px", width: "200px", backgroundColor: "green" }}>Slide 5</SwiperSlide>
            <SwiperSlide style={{ height: "200px", width: "200px", backgroundColor: "green" }}>Slide 6</SwiperSlide>
        </Swiper>
    );
};
export default Showcard;