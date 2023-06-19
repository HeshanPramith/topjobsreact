import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Adviewbanner from './Banners/Adviewbanner';
import Adviewbanner2 from './Banners/Adviewbanner2';
import Card from 'react-bootstrap/Card';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Badge from 'react-bootstrap/Badge';
import Collapse from 'react-bootstrap/Collapse';
import Form from 'react-bootstrap/Form';
import Header from './Common/Header';
import Footer from './Common/Footer';

function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 3000));
}

function Adview () {

    useEffect(() => {
        document.body.classList.add('Vacancybyfunctionalarealist')
        return () => {
          document.body.classList.remove('Vacancybyfunctionalarealist')
        }
    }, [])

    const [open, setOpen] = useState(false);

    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        if (isLoading) {
        simulateNetworkRequest().then(() => {
            setLoading(false);
        });
        }
    }, [isLoading]);
    const handleClick = () => setLoading(true);

    return (
        <React.Fragment>
            <Header/> 
            <Container fluid>
                <Row>
                    <Col xs={12} sm={12} md={4} lg={3} xl={3} xxl={3} className=''>
                        <Row>
                            <Col xs={12}>
                                <Card className='advttl mt-0'>
                                    <Card.Body>
                                        <Card.Title>Dialog Network Services (Pvt) Ltd </Card.Title>                                
                                        <Card.Title className='h4'>Job Ref No: 1041576</Card.Title>
                                        <Badge bg="success">Full Time</Badge>
                                        <Card.Text>Colombo, Sri Lanka</Card.Text>
                                        <Card.Text>Closing Date: 24/01/2023</Card.Text>
                                    </Card.Body>
                                </Card> 
                            </Col>
                            <Col xs={12}>
                                <Card className="bg-dark text-white cp-block mb-3">
                                    <Card.Img src="images/dialog_logo.png" alt="Card image" />
                                    <Card.Body>
                                        <Card.Title>Dialog</Card.Title>
                                        <Card.Text>Dialog Axiata PLC is Sri Lanka's Leading Quad-Play Connectivity Provider and #1 Network with the Fastest & Widest Coverage. Visit Our Site to Learn More.
                                        </Card.Text>
                                        <Card.Text>Last updated 3 mins ago</Card.Text>
                                    </Card.Body>                            
                                </Card> 
                            </Col>
                        </Row> 
                        <Row className='d-none d-sm-block'>
                            <Col xs={12}>
                                <Adviewbanner2/>
                            </Col>
                            <Col xs={12} className='my-2'>
                                <Adviewbanner/>
                            </Col>
                            <Col xs={12}>
                                <Adviewbanner/>
                            </Col>
                            <Col xs={12} className='my-2'>
                                <Adviewbanner2/>
                            </Col>
                            <Col xs={12}>
                                <Adviewbanner/>
                            </Col>
                        </Row>                      
                    </Col>
                    <Col xs={12} sm={12} md={8} lg={9} xl={9} xxl={9} className=''>     
                        <Row>
                            <Col xs={12} sm={12} md={6} lg={96} xl={6} xxl={6} className='mb-2'>
                                <Adviewbanner/>
                            </Col>
                            <Col xs={12} sm={12} md={6} lg={96} xl={6} xxl={6} className='mb-2'>
                                <Adviewbanner/>
                            </Col>
                        </Row>                                         
                        <ButtonToolbar className="align-items-center justify-content-between advbtngrp" aria-label="Toolbar with Button groups">
                            <ButtonGroup aria-label="First group">
                                <Button className='show-views' variant="secondary" size='sm' disabled={isLoading} onClick={!isLoading ? handleClick : null}>{isLoading ? 'Loading...' : 'Show Views (50)'}</Button>
                            </ButtonGroup>                            
                            <ButtonGroup aria-label="Last group">
                                <Button variant="secondary" size='sm' className='applybye-btn' onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}>Apply by email</Button>
                                <Button variant="secondary" size='sm' className='print-btn'>Print</Button>
                                <Button variant="secondary" size='sm' className='flag-btn'>Flag</Button>
                            </ButtonGroup>
                        </ButtonToolbar>
                        <ButtonToolbar className="align-items-center justify-content-between advbtngrp" aria-label="Toolbar with Button groups">
                            <ButtonGroup aria-label="First group">
                                <Button className='jb-nav' variant="secondary" size='sm' ><i className="fa-solid fa-arrow-left"></i></Button>
                            </ButtonGroup> 
                            <h5 className='addtitle-top'>Power Engineer - Northern Region</h5>
                            <ButtonGroup aria-label="Last group">
                                <Button className='jb-nav' variant="secondary" size='sm' ><i className="fa-solid fa-arrow-right"></i></Button>
                            </ButtonGroup>
                        </ButtonToolbar>
                        <div className='addview'>
                            <img src="images/1669cdsz.png" alt="" className='img-fluid'/>                            
                        </div> 
                        <Collapse in={open} className='addview-form'>
                            <div>
                                <Form className='row'>
                                    <Form.Group className="mb-3 col-12 col-sm-6 col-md-6 col-lg-4" controlId="formBasicName">
                                        <Form.Label>Your Name:</Form.Label>
                                        <Form.Control type="text" placeholder="" size='md'/>                                        
                                    </Form.Group>
                                    <Form.Group className="mb-3 col-12 col-sm-6 col-md-6 col-lg-4" controlId="formBasicNumber">
                                        <Form.Label>Contact No:</Form.Label>
                                        <Form.Control type="text" placeholder="" size='md'/>
                                    </Form.Group>
                                    <Form.Group className="mb-3 col-12 col-sm-6 col-md-6 col-lg-4" controlId="formBasicEmail">
                                        <Form.Label>Your Email:</Form.Label>
                                        <Form.Control type="email" placeholder="" size='md'/>
                                        <Form.Text className="text-muted">
                                            Please check your email address carefully.
                                        </Form.Text>
                                    </Form.Group>
                                    <Form.Group className="mb-3 col-12 col-sm-12 col-md-12 col-lg-6" controlId="formBasicMessage">
                                        <Form.Label>Message:</Form.Label>
                                        <Form.Control as="textarea" type="text" placeholder="" size='md' rows={5}/>
                                    </Form.Group>
                                    <Form.Group className="mb-3 col-12 col-sm-12 col-md-12 col-lg-6" controlId="formFile">
                                        <Form.Label>Attach Your CV:</Form.Label>
                                        <Form.Control type="file" size='sm'/>
                                        <Form.Text className="text-muted">
                                        Allowed types: .doc, .docx, .odt, .pdf, .rtf, .jpg, .jpeg, .gif, .png. Max size: 2.0MB
                                        </Form.Text>
                                    </Form.Group>
                                    <Form.Group className="mb-3 col-12 col-sm-12 col-md-12" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="I want to receive a copy of the application" />
                                    </Form.Group>
                                    <ButtonGroup className="col-12 col-sm-12 col-md-12">                                        
                                        <Button variant="warning" type="submit" size='sm'>Clear</Button>
                                        <Button variant="primary" type="submit" size='sm'>Send</Button>
                                    </ButtonGroup>
                                </Form>
                            </div>
                        </Collapse>
                        <ButtonToolbar className="align-items-center justify-content-between advbtngrp" aria-label="Toolbar with Button groups">
                            <ButtonGroup aria-label="First group"></ButtonGroup>                            
                            <ButtonGroup aria-label="Last group">
                                <Button variant="secondary" size='sm' className='applybye-btn' onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}>Apply by email</Button>
                                <Button variant="secondary" size='sm' className='print-btn'>Print</Button>
                                <Button variant="secondary" size='sm' className='flag-btn'>Flag</Button>
                            </ButtonGroup>
                        </ButtonToolbar>                      
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={3} xl={3} xxl={3} className='d-block d-sm-none'>
                        <Row>
                            <Col xs={12}>
                                <Adviewbanner/>
                            </Col>
                            <Col xs={12} className='my-2'>
                                <Adviewbanner/>
                            </Col>
                        </Row>                      
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </React.Fragment>
    );
}

export default Adview;