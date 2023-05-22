import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ListGroup from 'react-bootstrap/ListGroup';

function Employerheader () {   
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <React.Fragment>
            <header id='admin-header' className='admin-header'>
                <Container fluid className=''>
                    <Row className='align-items-center justify-content-between'>
                        <Col className='col-auto col-sm-auto col-md-auto col-lg-auto text-left'>
                            <Button variant="primary" onClick={handleShow} className='sadmin-toggle-menu'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                                </svg>
                            </Button>
                            <Offcanvas show={show} onHide={handleClose}>
                                <Offcanvas.Header closeButton className='pb-0'>
                                    <Offcanvas.Title>Menu</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body className='pt-4'>
                                    <ListGroup defaultActiveKey="/Superadmin/Agentsearch">
                                        <ListGroup.Item action href="/Superadmin/Agentsearch"><Link to='/Superadmin/Agentsearch'>Company</Link></ListGroup.Item>
                                        <ListGroup.Item action href="/Superadmin/Email"><Link to='/Superadmin/Email'>Email Config</Link></ListGroup.Item>
                                        <ListGroup.Item action href="/Superadmin/Sysconfig"><Link to='/Superadmin/Sysconfig'>System Configuration</Link></ListGroup.Item>
                                        <ListGroup.Item action href="/Superadmin/Sauserlist"><Link to='/Superadmin/Sauserlist'>User Login</Link></ListGroup.Item>
                                        <ListGroup.Item action href="/Superadmin/Samasterlist"><Link to='/Superadmin/Samasterlist'>Master Data</Link></ListGroup.Item>
                                        <ListGroup.Item action href="/Superadmin/Applicantloginmenu"><Link to='/Superadmin/Applicantloginmenu'>Applicant Logins</Link></ListGroup.Item>
                                        <ListGroup.Item action href="/Superadmin/Sareports"><Link to='/Superadmin/Sareports'>Reports</Link></ListGroup.Item>
                                        <ListGroup.Item action href="/Superadmin/Bulkemail"><Link to='/Superadmin/Bulkemail'>Bulk Email</Link></ListGroup.Item>
                                        <ListGroup.Item action href="/Superadmin/Releasenotes"><Link to='/Superadmin/Releasenotes'>Release Notes</Link></ListGroup.Item>
                                        <ListGroup.Item action href="/Superadmin/Bannerad"><Link to='/Superadmin/Bannerad'>Manage Banners</Link></ListGroup.Item>
                                        <ListGroup.Item action href="/Superadmin/Extagentsearch"><Link to='/Superadmin/Extagentsearch'>External Agent</Link></ListGroup.Item>
                                        <ListGroup.Item action href="/Superadmin/Emailalerttype"><Link to='/Superadmin/Emailalerttype'>Email Alert Config</Link></ListGroup.Item>
                                        <ListGroup.Item action href="/Superadmin/Uploadcsrcv"><Link to='/Superadmin/Uploadcsrcv'>CSR CV</Link></ListGroup.Item>
                                        <ListGroup.Item action href="/Superadmin/Hrresourceadmin"><Link to='/Superadmin/Hrresourceadmin'>Hr Resources</Link></ListGroup.Item>
                                        <ListGroup.Item action href="/Superadmin/Lockedagents"><Link to='/Superadmin/Lockedagents'>Locked Agent Logins</Link></ListGroup.Item>
                                        <ListGroup.Item action href="/Superadmin/Tjtstmonial"><Link to='/Superadmin/Tjtstmonial'>Manage Testimonials</Link></ListGroup.Item>
                                    </ListGroup>
                                </Offcanvas.Body>
                            </Offcanvas>
                        </Col>
                        <Col className='col-8 col-sm-3 col-md-3 col-lg-2 text-left'>
                            <div className='admin-logo'>
                                <img src='../images/tj.jpg' className='img-fluid' alt='logo' height={37}></img> 
                            </div>                     
                        </Col>
                        <Col className='col-12 col-sm-5 col-md-5 col-lg-8 text-left order-last'>
                            <h4>Welcome - Superadmin</h4> 
                            <div className='admin-nav'>
                                <Link to='/Superadmin/Sawelcome'><i className="fa-solid fa-house"></i></Link>
                            </div>                        
                        </Col>
                        <Col className='col-2 col-sm-2 col-md-2 col-lg-1 text-left order-sm-last'>
                            <Link to='/Superadmin/Salogin' className='logout'><i className="fa-solid fa-arrow-right-from-bracket"></i></Link>                     
                        </Col>
                    </Row>
                </Container>               
            </header>
        </React.Fragment>
    );
}

export default Employerheader;