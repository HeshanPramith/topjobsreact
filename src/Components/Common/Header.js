import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import Topbanner from '../Banners/Topbanner';
import ListGroup from 'react-bootstrap/ListGroup';

function Header () {    

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <React.Fragment>
            <header>
                <Container fluid>
                    <Row className='row align-items-center'>
                        <Col className='col-5 col-sm-5 col-md-6 col-lg-6 text-left'>
                            <a className="navbar-brand" href="/#">
                                <img src='images/tj.jpg' className='img-fluid d-none d-md-block' alt='logo'></img>
                                <img src='images/tj-sm.png' className='img-fluid d-block d-md-none' alt='logo'></img>
                            </a>  
                            <Button variant="primary" onClick={handleShow} size="sm" className='menu-btn'>
                                <i class="fa-solid fa-bars"></i> <span className='d-none d-sm-block'>Menu</span>
                            </Button>
                            <Offcanvas show={show} onHide={handleClose} placement="start" className='menu-offcanvas'>
                                <Offcanvas.Header closeButton>
                                <Offcanvas.Title>Main Menu</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Row>
                                        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                                            <ListGroup>
                                                <ListGroup.Item><a href='/#'>Post Your Vacancy</a></ListGroup.Item>
                                                <ListGroup.Item><a href='/#'>Top Employers</a></ListGroup.Item>
                                                <ListGroup.Item><a href='/#'>Contact Us</a></ListGroup.Item>
                                            </ListGroup>
                                        </Col>
                                        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                                            <ListGroup>
                                                <ListGroup.Item><a href='/#'>Banner promotions</a></ListGroup.Item>
                                                <ListGroup.Item><a href='/#'>T & C</a></ListGroup.Item>
                                                <ListGroup.Item><a href='/#'>Privacy Policy</a></ListGroup.Item>
                                                <ListGroup.Item><a href='/#'>Security Policy</a></ListGroup.Item>
                                                <ListGroup.Item><a href='/#'>FAQ</a></ListGroup.Item>
                                                <ListGroup.Item><a href='/#'>Media Room</a></ListGroup.Item>
                                                <ListGroup.Item><a href='/#'>Partners</a></ListGroup.Item>
                                                <ListGroup.Item><a href='/#'>LMI</a></ListGroup.Item>
                                                <ListGroup.Item><a href='/#'>Sitemap</a></ListGroup.Item>
                                                <ListGroup.Item><a href='/#'>RSS</a></ListGroup.Item>
                                            </ListGroup>
                                        </Col>
                                    </Row>
                                </Offcanvas.Body>
                            </Offcanvas>                           
                        </Col>                       
                        <Col className='col-7 col-sm-7 col-md-6 col-lg-6 align-items-center justify-content-center pe-0 px-0 pe-sm-0 px-sm-0'>                            
                            <Topbanner/>
                        </Col>
                    </Row>
                </Container>               
            </header>
        </React.Fragment>
    );
}

export default Header;