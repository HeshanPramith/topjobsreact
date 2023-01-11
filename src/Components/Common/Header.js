import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Header () {
    const settings = {
        className: "top-banner",
        dots: false,
        infinite: true,
        fade: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: "linear",
    };
    return (
        <React.Fragment>
            <header>
                <Container fluid>
                    <Row className='row align-items-center'>
                        <Col className='col-auto'>
                            <a className="navbar-brand" href="/#">
                                <img src='images/tj.jpg' className='img-fluid' alt='logo'></img>
                            </a>
                        </Col>
                        <Col className='col-auto me-auto'>
                            <Navbar collapseOnSelect expand="lg" variant="dark">
                                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav className="me-auto">
                                        <Nav.Link href="#postyourvacancy">Post Your Vacancy</Nav.Link>
                                        <Nav.Link href="#topemp">Top Employers</Nav.Link>
                                        <Nav.Link href="#contactus">Contact Us</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                        </Col>
                        <Col className='col-auto me-auto'>
                        {[DropdownButton].map((DropdownType, idx) => (
                            <DropdownType
                                as={ButtonGroup}
                                key={idx}
                                id={`dropdown-button-drop-${idx}`}
                                size="sm"
                                variant="secondary"
                                title="Jobseeker"
                            >
                                <Dropdown.Item eventKey="1">Login</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Sign Up</Dropdown.Item>
                            </DropdownType>
                        ))}
                        </Col>
                        <Col className='col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 pe-0 px-0 pe-sm-0 px-sm-0 align-items-center'>
                            {/* <div className='top-banner align-items-center d-flex align-items-center justify-content-center'>
                                <img src='images/top_banner/BAN0000000722.gif' className='img-fluid' alt='banner'></img>
                            </div> */}
                            <Slider {...settings}>
                                <div>
                                    <div className='top-banner align-items-center d-flex align-items-center justify-content-center'>
                                        <img src='images/top_banner/BAN0000000722.gif' className='img-fluid' alt='banner'></img>
                                    </div>
                                </div>
                                <div>
                                    <div className='top-banner align-items-center d-flex align-items-center justify-content-center'>
                                        <img src='images/top_banner/BAN0000000565.gif' className='img-fluid' alt='banner'></img>
                                    </div>
                                </div>
                                <div>
                                    <div className='top-banner align-items-center d-flex align-items-center justify-content-center'>
                                        <img src='images/top_banner/BAN0000000681.gif' className='img-fluid' alt='banner'></img>
                                    </div>
                                </div>
                            </Slider>
                        </Col>
                    </Row>
                </Container>               
            </header>
        </React.Fragment>
    );
}

export default Header;