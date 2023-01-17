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

function Vacancybyfunctionalarea () {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <React.Fragment>
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
                                        <li><a href='/vacancybyfunctionalarea'>IT-Sware/DB/QA/Web/Graphics/GIS</a></li>
                                        <li><a href='/#'>IT-HWare/Networks/Systems</a></li>
                                        <li><a href='/#'>Accounting/Auditing/Finance</a></li>
                                        <li><a href='/#'>Banking/Insurance</a></li>
                                        <li><a href='/#'>Sales/Marketing/Merchandising</a></li>
                                        <li><a href='/#'>HR/Training</a></li>
                                        <li><a href='/#'>Corporate Management/Analysts</a></li>
                                        <li><a href='/#'>Office Admin/Secretary/Receptionist</a></li>
                                        <li><a href='/#'>Civil Eng/Interior Design/Architecture</a></li>
                                        <li><a href='/#'>IT-Telecoms</a></li>
                                        <li><a href='/#'>Customer Relations/Public Relations</a></li>
                                        <li><a href='/#'>Logistics/Warehouse/Transport</a></li>
                                        <li><a href='/#'>Eng-Mech/Auto/Elec</a></li>
                                        <li><a href='/#'>Manufacturing/Operations</a></li>
                                        <li><a href='/#'>Media/Advert/Communication</a></li>
                                        <li><a href='/#'>Hotels/Restaurants/Food</a></li>
                                        <li><a href='/#'>Hospitality/Tourism</a></li>
                                        <li><a href='/#'>Sports/Fitness/Recreation</a></li>
                                        <li><a href='/#'>Hospital/Nursing/Healthcare</a></li>
                                        <li><a href='/#'>Legal/Law</a></li>
                                        <li><a href='/#'>Supervision/Quality Control</a></li>
                                        <li><a href='/#'>Apparel/Clothing</a></li>
                                        <li><a href='/#'>Ticketing/Airline/Marine</a></li>
                                        <li><a href='/#'>Teaching/Academic/Library</a></li>
                                        <li><a href='/#'>R&D/Science/Research</a></li>
                                        <li><a href='/#'>Agriculture/Dairy/Environment</a></li>
                                        <li><a href='/#'>Security</a></li>
                                        <li><a href='/#'>Fashion/Design/Beauty</a></li>
                                        <li><a href='/#'>International Development</a></li>
                                        <li><a href='/#'>KPO/BPO</a></li>
                                        <li><a href='/#'>Imports/Exports</a></li>
                                        <li><a href='/#'>All Vacancies</a></li>
                                    </ul>
                                </Offcanvas.Body>
                            </Offcanvas>
                        </div>
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
        </React.Fragment>
    );
}

export default Vacancybyfunctionalarea;