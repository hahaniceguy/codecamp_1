import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from '@emotion/styled';
import {CarouselImg, CarouselImgSmall, Wrapper} from './Carousel.style';

const LayoutUI = () => {
    var settings = {
        customPaging: function (i) {
            return (
                <a>
                    <CarouselImgSmall src={`/g0${i + 1}.png`} />
                </a>
            );
        },
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow: true,
        autoplaySpeed: 3000,
        autoplay: true,
    };

    return (
        <Wrapper>
            <div>
                <Slider {...settings}>
                    <div>
                        <CarouselImg src="/g01.png"></CarouselImg>
                    </div>
                    <div>
                        <CarouselImg src="/g02.png"></CarouselImg>
                    </div>
                    <div>
                        <CarouselImg src="/g03.png"></CarouselImg>
                    </div>
                    <div>
                        <CarouselImg src="/g04.png"></CarouselImg>
                    </div>
                </Slider>
            </div>
        </Wrapper>
    );
};

export default LayoutUI;
