import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Joblistcategory from './Joblist/Joblistcategory';
import Leftbanner from './Banners/Leftbanner';
import Rightbanner from './Banners/Right banner';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Header from './Common/Header';
import Footer from './Common/Footer';
import { Link } from "react-router-dom";

function Vacancybyfunctionalarea () {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <React.Fragment>
            <Header/>
            <Container fluid>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className='p-0 text-center'>
                        <div className="bg-dark text-white vacbytop">
                            <Card.Title>IT-Sware/DB/QA/Web/Graphics/GIS - 100+</Card.Title>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                            <Form className='search-form'>
                                <InputGroup className="">
                                    <Form.Control
                                        placeholder="Job title, keywords, or company"
                                        aria-label="Job title, keywords, or company"
                                        aria-describedby="basic-addon2"
                                        size="sm"
                                    />
                                    <Button variant="primary" type="submit" size="sm" id="button-addon2">
                                        Search
                                    </Button>
                                </InputGroup>
                            </Form>
                            <Button variant="primary" onClick={handleShow} size="sm" className='category-btn'>
                                Change Job Category
                            </Button>
                            <Offcanvas show={show} onHide={handleClose} placement="end" className="main-category-pop">
                                <Offcanvas.Header closeButton>
                                <Offcanvas.Title>Job Category</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <ul>
                                        <li><Link to='/vacancybyfunctionalarealist'>IT-Sware/DB/QA/Web/Graphics/GIS</Link></li>
                                        <li><Link to='/#'>IT-HWare/Networks/Systems</Link></li>
                                        <li><Link to='/#'>Accounting/Auditing/Finance</Link></li>
                                        <li><Link to='/#'>Banking/Insurance</Link></li>
                                        <li><Link to='/#'>Sales/Marketing/Merchandising</Link></li>
                                        <li><Link to='/#'>HR/Training</Link></li>
                                        <li><Link to='/#'>Corporate Management/Analysts</Link></li>
                                        <li><Link to='/#'>Office Employer/Secretary/Receptionist</Link></li>
                                        <li><Link to='/#'>Civil Eng/Interior Design/Architecture</Link></li>
                                        <li><Link to='/#'>IT-Telecoms</Link></li>
                                        <li><Link to='/#'>Customer Relations/Public Relations</Link></li>
                                        <li><Link to='/#'>Logistics/Warehouse/Transport</Link></li>
                                        <li><Link to='/#'>Eng-Mech/Auto/Elec</Link></li>
                                        <li><Link to='/#'>Manufacturing/Operations</Link></li>
                                        <li><Link to='/#'>Media/Advert/Communication</Link></li>
                                        <li><Link to='/#'>Hotels/Restaurants/Food</Link></li>
                                        <li><Link to='/#'>Hospitality/Tourism</Link></li>
                                        <li><Link to='/#'>Sports/Fitness/Recreation</Link></li>
                                        <li><Link to='/#'>Hospital/Nursing/Healthcare</Link></li>
                                        <li><Link to='/#'>Legal/Law</Link></li>
                                        <li><Link to='/#'>Supervision/Quality Control</Link></li>
                                        <li><Link to='/#'>Apparel/Clothing</Link></li>
                                        <li><Link to='/#'>Ticketing/Airline/Marine</Link></li>
                                        <li><Link to='/#'>Teaching/Academic/Library</Link></li>
                                        <li><Link to='/#'>R&D/Science/Research</Link></li>
                                        <li><Link to='/#'>Agriculture/Dairy/Environment</Link></li>
                                        <li><Link to='/#'>Security</Link></li>
                                        <li><Link to='/#'>Fashion/Design/Beauty</Link></li>
                                        <li><Link to='/#'>International Development</Link></li>
                                        <li><Link to='/#'>KPO/BPO</Link></li>
                                        <li><Link to='/#'>Imports/Exports</Link></li>
                                        <li><Link to='/#'>All Vacancies</Link></li>
                                    </ul>
                                </Offcanvas.Body>
                            </Offcanvas>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>                        
                        <Link to='/Vacancybyfunctionalarea' type='button' size='sm' className='btn switchbutton'><i className="fa-solid fa-grip"></i> Grid View</Link>
                        <Link to='/Vacancybyfunctionalarealist' type='button' size='sm' className='btn switchbutton'><i className="fa-solid fa-bars"></i> List View</Link>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={2} md={2} lg={2} xl={1} xxl={1} className='text-center'>
                        <Leftbanner/>
                    </Col>
                    <Col xs={12} sm={8} md={8} lg={8} xl={10} xxl={10}>
                        <Joblistcategory/>
                    </Col>
                    <Col xs={12} sm={2} md={2} lg={2} xl={1} xxl={1} className='text-center'>
                        <Rightbanner/>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </React.Fragment>
    );
}

export default Vacancybyfunctionalarea;