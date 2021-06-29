import React, {useEffect, useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import styled from '@emotion/styled';
import {CarouselImg, CarouselImgSmall, Wrapper} from './Carousel.style';

const LayoutUI = ({imagesData}) => {
    var settings = {
        customPaging: function (i) {
            return (
                <a>
                    <CarouselImgSmall src={imagesData[i]} />
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
                    {imagesData?.map((img, key) => {
                        return (
                            <div key={key}>
                                <CarouselImg src={img}></CarouselImg>
                            </div>
                        );
                    })}
                </Slider>
            </div>
        </Wrapper>
    );
};

export default LayoutUI;
