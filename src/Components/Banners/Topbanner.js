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
  };

  return (
    <div id='main-banner'>
        <Slider {...settings}>
        <div>
            <div className='d-flex align-items-center justify-content-end tpbanner'>
                <img src='images/top_banner/BAN0000000500.jpg' className='img-fluid' alt='banner'></img>
            </div>
        </div>
        <div>
            <div className='d-flex align-items-center justify-content-end tpbanner'>
                <img src='images/top_banner/BAN0000000508.png' className='img-fluid' alt='banner'></img>
            </div>
        </div>
        <div>
            <div className='d-flex align-items-center justify-content-end tpbanner'>
                <img src='images/top_banner/BAN0000000565.gif' className='img-fluid' alt='banner'></img>
            </div>
        </div>
        <div>
            <div className='d-flex align-items-center justify-content-end tpbanner'>
                <img src='images/top_banner/BAN0000000722.gif' className='img-fluid' alt='banner'></img>
            </div>
        </div>
        </Slider>
    </div>
  );
}

export default Topbanner;
