import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Leftbanner() {

    const settings2 = {
        className: "left-banner",
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

  const settings = {
    className: "left-banner",
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
        <div className='d-block d-sm-none'>
            <Slider {...settings2}>
                <div>
                    <div className='d-flex align-items-center justify-content-end tpbanner'>
                        <img src='images/left_banner/mobile/bannerinfom2.png' className='img-fluid' alt='banner'></img>
                    </div>
                </div>
                <div>
                    <div className='d-flex align-items-center justify-content-end tpbanner'>
                        <img src='images/left_banner/mobile/bannerinfom4.png' className='img-fluid' alt='banner'></img>
                    </div>
                </div>
                <div>
                    <div className='d-flex align-items-center justify-content-end tpbanner'>
                        <img src='images/left_banner/mobile/bannerinfom.png' className='img-fluid' alt='banner'></img>
                    </div>
                </div>
            </Slider>
        </div>
        <div className='d-none d-sm-block'>
            <Slider {...settings}>
                <div>
                    <div className='d-flex align-items-center justify-content-end tpbanner'>
                        <img src='images/left_banner/160x600d.jpg' className='img-fluid' alt='banner'></img>
                    </div>
                </div>
                <div>
                    <div className='d-flex align-items-center justify-content-end tpbanner'>
                        <img src='images/left_banner/bannerinfo.png' className='img-fluid' alt='banner'></img>
                    </div>
                </div>
            </Slider>
        </div>
    </div>
  );
}

export default Leftbanner;