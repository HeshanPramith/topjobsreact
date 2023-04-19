import React from 'react';
import { Link } from "react-router-dom";
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
            <h2 className='sub-title'>Popular Categories</h2>
            <Slider {...settings}>
                <div>
                    <Link to='/vacancybyfunctionalarealist'>IT-Sware/DB/QA/Web/Graphics/GIS</Link>
                </div>
                <div>
                    <Link to='/#'>IT-HWare/Networks/Systems</Link>
                </div>
                <div>
                    <Link to='/#'>Accounting/Auditing/Finance</Link>
                </div>
                <div>
                    <Link to='/#'>Banking/Insurance</Link>
                </div>
                <div>
                    <Link to='/#'>Sales/Marketing/Merchandising</Link>
                </div>
                <div>
                    <Link to='/#'>HR/Training</Link>
                </div>
                <div>
                    <Link to='/#'>Corporate Management/Analysts</Link>
                </div>
                <div>
                    <Link to='/#'>Office Employer/Secretary/Receptionist</Link>
                </div>
                <div>
                    <Link to='/#'>Civil Eng/Interior Design/Architecture</Link>
                </div>
                <div>
                    <Link to='/#'>IT-Telecoms</Link>
                </div>
                <div>
                    <Link to='/#'>Customer Relations/Public Relations</Link>
                </div>
                <div>
                    <Link to='/#'>Logistics/Warehouse/Transport</Link>
                </div>
                <div>
                    <Link to='/#'>Eng-Mech/Auto/Elec</Link>
                </div>
                <div>
                    <Link to='/#'>Manufacturing/Operations</Link>
                </div>
                <div>
                    <Link to='/#'>Media/Advert/Communication</Link>
                </div>
            </Slider>
        </React.Fragment>
    );
}

export default Latestcat;