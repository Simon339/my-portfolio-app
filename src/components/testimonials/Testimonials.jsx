import React from "react";
import "./testimonials.css";
import "../qualification/qualification.css"
import { Data } from "./Data";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';


const Testimonials = () => {
    return (
        <section className="testimonial section" id="testimonials">
            <h2 className="section__title">My clients Says</h2>
            <span className="section__subtitle">Testimonial</span>

            <div className="testimonial_container container">
            <Swiper className="testimonial_container"
            loop={true}
            grabCursor={true}
            spaceBetween={23}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
            modules={[Pagination]}
            >
                {Data.map(({id, image, title, description}) => {
                    return (
                        <SwiperSlide className="testimonial_card" key={id}>
                            <img src={image} alt="" className="testimonial_img" />

                            <h3 className="testimonial_name">{title}</h3>
                            <p className="testimonial_description">{description}</p>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;