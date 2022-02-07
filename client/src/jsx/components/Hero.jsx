import React from 'react';
import { Link } from 'react-router-dom';
import { isMobileOnly } from 'react-device-detect';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import SwiperCore, { Autoplay, Navigation, Pagination, Thumbs } from 'swiper';
import heroImage from '../../assets/images/hero-image-pixabay.jpg';
import facebook from '../../assets/icons/facebook.svg';
import instagram from '../../assets/icons/instagram.svg';

SwiperCore.use([Autoplay, Pagination, Navigation, Thumbs]);

const Hero = () => {
    const arr = [heroImage, heroImage, heroImage];

    return (
        <section className='hero'>
            {isMobileOnly ?
                null :
                <div className='hero__social-media'>
                    <Link to={{ pathname: 'https://www.facebook.com/navrot.szycie' }} target='_blank'>
                        <img src={facebook} alt='facebook' />
                    </Link>
                    <Link to={{ pathname: 'https://www.instagram.com/navrot_szycie' }} target='_blank'>
                        <img src={instagram} alt='instagram' />
                    </Link>
                </div>
            }
            <Swiper
                pagination={true}
                style={{ '--swiper-pagination-color': '#fff' }}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                spaceBetween={3}
                navigation={true}
                className="mySwiper2">

                {arr.map(img => {
                    return (

                        <SwiperSlide>
                            <Link to='/'>
                                <img src={img}
                                    alt='image'
                                    className='hero__image' />
                            </Link>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            {/* <h1 className='hero__title'>Wyjątkowe rękodzieła najwyższej jakości</h1> */}
        </section>
    )
}

export default Hero