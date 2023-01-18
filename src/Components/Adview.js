import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Adviewbanner from './Banners/Adviewbanner';
import Card from 'react-bootstrap/Card';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Badge from 'react-bootstrap/Badge';

function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 3000));
}

function Adview () {

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
            <Container fluid>
                <Row>
                    <Col xs={12} sm={12} md={4} lg={3} xl={3} xxl={3} className='pt-3'>
                        <Card className='advttl mt-0'>
                            <Card.Body>
                                <Card.Title>Dialog Network Services (Pvt) Ltd </Card.Title>                                
                                <Card.Title className='h4'>Job Ref No: 1041576</Card.Title>
                                <Badge bg="success">Full Time</Badge>
                                <Card.Text>Colombo, Sri Lanka</Card.Text>
                                <Card.Text>Closing Date: 24/01/2023</Card.Text>
                            </Card.Body>
                        </Card> 
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
                    <Col xs={12} sm={12} md={8} lg={9} xl={9} xxl={9} className='pt-3'>                                               
                        <ButtonToolbar className="align-items-center justify-content-between advbtngrp" aria-label="Toolbar with Button groups">
                            <ButtonGroup aria-label="First group">
                                <Button className='show-views' variant="secondary" size='sm' disabled={isLoading} onClick={!isLoading ? handleClick : null}>{isLoading ? 'Loading...' : 'Show Views (50)'}</Button>
                            </ButtonGroup>                            
                            <ButtonGroup aria-label="Last group">
                                <Button variant="secondary" size='sm' className='applybye-btn'>Apply by email</Button>
                                <Button variant="secondary" size='sm' className='print-btn'>Print</Button>
                                <Button variant="secondary" size='sm' className='flag-btn'>Flag</Button>
                            </ButtonGroup>
                        </ButtonToolbar>
                        <ButtonToolbar className="align-items-center justify-content-between advbtngrp" aria-label="Toolbar with Button groups">
                            <ButtonGroup aria-label="First group">
                                <Button className='jb-nav' variant="secondary" size='sm' ><i class="fa-solid fa-arrow-left"></i></Button>
                            </ButtonGroup> 
                            <h5 className='addtitle-top'>Power Engineer - Northern Region</h5>
                            <ButtonGroup aria-label="Last group">
                                <Button className='jb-nav' variant="secondary" size='sm' ><i class="fa-solid fa-arrow-right"></i></Button>
                            </ButtonGroup>
                        </ButtonToolbar>
                        <div className='addview'>
                            <img src="images/1669cdsz.png" alt="" className='img-fluid'/>
                        </div>
                        <div className='addview'>
                            <Adviewbanner/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}

export default Adview;