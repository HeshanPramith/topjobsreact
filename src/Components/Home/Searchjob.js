import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Searchjob () {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <React.Fragment>
            <Container fluid>
                <Row>
                    <Col xs={12} className='px-0 text-center'>
                        <div className='main-search'>
                            <h1>Recruitment Made Easy</h1>
                            <Form className='search-form'>
                                <InputGroup className="mb-2">
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
                                Job Category
                            </Button>
                            <Offcanvas show={show} onHide={handleClose} placement="end" className="main-category-pop">
                                <Offcanvas.Header closeButton>
                                <Offcanvas.Title>Job Category</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <ul>
                                        <li><a href='/#'>IT-Sware/DB/QA/Web/Graphics/GIS</a></li>
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
                            <Col xs={12}>
                                
                            </Col>
                        </div>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}

export default Searchjob;