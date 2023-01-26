import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Leftbanner from './Banners/Leftbanner';
import Rightbanner from './Banners/Right banner';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Table from 'react-bootstrap/Table';

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
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>                        
                        <a href='/Vacancybyfunctionalarea' type='button' size='sm' className='btn switchbutton'><i class="fa-solid fa-grip"></i> Grid View</a>
                        <a href='/Vacancybyfunctionalarealist' type='button' size='sm' className='btn switchbutton'><i class="fa-solid fa-bars"></i> List View</a>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={2} md={2} lg={2} xl={1} xxl={1} className='text-center'>
                        <Leftbanner/>
                    </Col>
                    <Col xs={12} sm={8} md={8} lg={8} xl={10} xxl={10}>
                    <Table responsive striped hover size="sm" className='jb-list-view'>
                        <thead>
                            <tr>
                                <th className='text-center first'>#</th>
                                <th>Job Ref No.</th>
                                <th>Position and Employer</th>
                                <th>Job Description</th>
                                <th>Opening Date</th>
                                <th>Closing Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.from({ length: 10 }).map((_, idx) => (
                                <>
                                <tr>
                                    <td className='text-center green'>1</td>
                                    <td><p>1047687</p></td>
                                    <td>
                                        <a href='/Adview'>Tech Lead - C++ </a>
                                        <p>Quess Corp Lanka Private Limited </p>
                                    </td>
                                    <td>
                                        <p>Minimum of 6 years experience in the software industry, including hands-on C++ software development, is required / Please refer to the vacancy</p>
                                    </td>
                                    <td><p>Thu Jan 26 2023</p></td>
                                    <td><p>Fri Feb 03 2023</p></td>
                                </tr>
                                <tr>
                                    <td className='text-center green'>2</td>
                                    <td><p>1047686</p></td>
                                    <td>
                                        <a href='/Adview'>Front-End Developer </a>
                                        <p>IITC Global</p>
                                    </td>
                                    <td>
                                        <p>Please refer the vacancy </p>
                                    </td>
                                    <td><p>Thu Jan 26 2023</p></td>
                                    <td><p>Thu Feb 09 2023</p></td>
                                </tr>
                                <tr>
                                    <td className='text-center green'>3</td>
                                    <td><p>1047683</p></td>
                                    <td>
                                        <a href='/Adview'>Full Stack Developer </a>
                                        <p>IITC Global</p>
                                    </td>
                                    <td>
                                        <p>Please refer the vacancy </p>
                                    </td>
                                    <td><p>Thu Jan 26 2023</p></td>
                                    <td><p>Fri Feb 03 2023</p></td>
                                </tr>
                                <tr>
                                    <td className='text-center green'>4</td>
                                    <td><p>1047659</p></td>
                                    <td>
                                        <a href='/Adview'>Junior Software Engineer - Cloud System </a>
                                        <p>IronOne Technologies</p>
                                    </td>
                                    <td>
                                        <p>Please refer the vacancy </p>
                                    </td>
                                    <td><p>Thu Jan 26 2023</p></td>
                                    <td><p>Fri Feb 03 2023</p></td>
                                </tr>
                                <tr>
                                    <td className='text-center yellow'>5</td>
                                    <td><p>1047636</p></td>
                                    <td>
                                        <a href='/Adview'>Quality Assurance Compliance Engineer / Trainee Quality Assurance / Compliance Engineer</a>
                                        <p>IronOne Technologies</p>
                                    </td>
                                    <td>
                                        <p>Hitachi Digital Payment Solutions Limited</p>
                                    </td>
                                    <td><p>Thu Jan 26 2023</p></td>
                                    <td><p>Fri Feb 03 2023</p></td>
                                </tr>
                                </>
                            ))} 
                        </tbody>
                        </Table>
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