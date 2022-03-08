import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { isMobileOnly } from 'react-device-detect';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import SwiperCore, { Autoplay, Navigation, Pagination, Thumbs } from 'swiper';
import facebook from '../../assets/icons/facebook.svg';
import instagram from '../../assets/icons/instagram.svg';

SwiperCore.use([Autoplay, Pagination, Navigation, Thumbs]);

const Hero = () => {
    const [heroImages, setHeroImages] = useState(null);
    const [isImageLoading, setIsImageLoading] = useState(true);

    useEffect(() => {
        loadData();
    }, [])

    const loadData = async () => {
        const response = await fetch('http://localhost:5000/hero');
        const data = await response.json();
        setHeroImages(data);
    }

    const handleOnLoad = () => {
        setIsImageLoading(false);
    }

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
            <div className='hero__image'
                style={{ display: isImageLoading ? 'block' : 'none' }}></div>
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

                {heroImages ? heroImages.map(hero => {
                    return (
                        <SwiperSlide key={hero._id}>
                            <a href={`${hero.link}`}>

                                <img src={`http://localhost:5000/hero/image/${hero.image}`}
                                    alt='image'
                                    className='hero__image'
                                    style={{ display: isImageLoading ? 'none' : 'block' }}
                                    onLoad={handleOnLoad} />
                            </a>
                        </SwiperSlide>
                    )
                }) : null}
            </Swiper>
        </section>
    )
}

export default Hero