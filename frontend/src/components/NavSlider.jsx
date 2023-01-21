import React from "react";
// import Swiper from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

export const NavMenSlider = () => {
    return (
        <div className="slider-men-nav">
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <img src="https://media.finishline.com/s/finishline/921826_015?$Main$&layer0=[h=245&w=245&bg=rgb(237,237,237)]&h=245&w=245&fmt=webp" alt="" />
                    <a href="/">Nike Air Max</a>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://media.finishline.com/s/finishline/921826_015?$Main$&layer0=[h=245&w=245&bg=rgb(237,237,237)]&h=245&w=245&fmt=webp" alt="" />
                    <a href="/">Boots</a>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://media.finishline.com/s/finishline/921826_015?$Main$&layer0=[h=245&w=245&bg=rgb(237,237,237)]&h=245&w=245&fmt=webp" alt="" />
                    <a href="/">Shoes</a>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export const NavNewArrival = () => {
    return (
        <div>

        </div>
    )
}