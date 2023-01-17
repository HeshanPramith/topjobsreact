import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Latestcat () {
    
    var settings = {
        className: "category-slider",
        dots: false,
        infinite: true,
        centerMode: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        //slidesToShow: 4,
        //slidesToScroll: 4,
        initialSlide: 0,
        variableWidth: true,
        focusOnSelect: false,
    };

    return (
        <React.Fragment>
            <h2 className='sub-title'>Popular Categorys</h2>
            <Slider {...settings}>
                <div>
                    <a href='/Vacancybyfunctionalarea'>IT-Sware/DB/QA/Web/Graphics/GIS</a>
                </div>
                <div>
                    <a href='/#'>IT-HWare/Networks/Systems</a>
                </div>
                <div>
                    <a href='/#'>Accounting/Auditing/Finance</a>
                </div>
                <div>
                    <a href='/#'>Banking/Insurance</a>
                </div>
                <div>
                    <a href='/#'>Sales/Marketing/Merchandising</a>
                </div>
                <div>
                    <a href='/#'>HR/Training</a>
                </div>
                <div>
                    <a href='/#'>Corporate Management/Analysts</a>
                </div>
                <div>
                    <a href='/#'>Office Admin/Secretary/Receptionist</a>
                </div>
                <div>
                    <a href='/#'>Civil Eng/Interior Design/Architecture</a>
                </div>
                <div>
                    <a href='/#'>IT-Telecoms</a>
                </div>
                <div>
                    <a href='/#'>Customer Relations/Public Relations</a>
                </div>
                <div>
                    <a href='/#'>Logistics/Warehouse/Transport</a>
                </div>
                <div>
                    <a href='/#'>Eng-Mech/Auto/Elec</a>
                </div>
                <div>
                    <a href='/#'>Manufacturing/Operations</a>
                </div>
                <div>
                    <a href='/#'>Media/Advert/Communication</a>
                </div>
            </Slider>
        </React.Fragment>
    );
}

export default Latestcat;