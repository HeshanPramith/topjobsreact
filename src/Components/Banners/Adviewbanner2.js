import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Topbanner() {

  const settings = {
    className: "top-banner",
    dots: false,
    infinite: true,
    fade: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    swipeToSlide: true,
  };

  return (
    <div id='main-banner'>
        <Slider {...settings}>
        <div>
            <div className='d-flex align-items-center justify-content-center tpbanner'>
                <img src='images/adview_banner_slot_left/banner-1-400x400.jpg' className='img-fluid' alt='banner'></img>
            </div>
        </div>
        <div>
            <div className='d-flex align-items-center justify-content-center tpbanner'>
                <img src='images/adview_banner_slot_left/banner-2-400x400.jpg' className='img-fluid' alt='banner'></img>
            </div>
        </div>
        </Slider>
    </div>
  );
}

export default Topbanner;
