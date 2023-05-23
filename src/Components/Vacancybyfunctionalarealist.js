import React, { useState } from 'react';
import { useEffect } from 'react';
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
import Header from './Common/Header';
import Footer from './Common/Footer';
import { Link } from "react-router-dom";

function Vacancybyfunctionalarea () {

    useEffect(() => {
        document.body.classList.add('Vacancybyfunctionalarealist')
        return () => {
          document.body.classList.remove('Vacancybyfunctionalarealist')
        }
    }, [])

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <React.Fragment>
            <Header className="innerheader"/>
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
                            <tr>
                                <td className='text-center green'>1</td>
                                <td><p>1047687</p></td>
                                <td>
                                    <Link to='/Adview'>Tech Lead - C++ </Link>
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
                                    <Link to='/Adview'>Front-End Developer </Link>
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
                                    <Link to='/Adview'>Full Stack Developer </Link>
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
                                    <Link to='/Adview'>Junior Software Engineer - Cloud System </Link>
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
                                    <Link to='/Adview'>Quality Assurance Compliance Engineer / Trainee Quality Assurance / Compliance Engineer</Link>
                                    <p>IronOne Technologies</p>
                                </td>
                                <td>
                                    <p>Hitachi Digital Payment Solutions Limited</p>
                                </td>
                                <td><p>Thu Jan 26 2023</p></td>
                                <td><p>Fri Feb 03 2023</p></td>
                            </tr>   
                            <tr>
                                <td className='text-center green'>1</td>
                                <td><p>1047687</p></td>
                                <td>
                                    <Link to='/Adview'>Tech Lead - C++ </Link>
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
                                    <Link to='/Adview'>Front-End Developer </Link>
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
                                    <Link to='/Adview'>Full Stack Developer </Link>
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
                                    <Link to='/Adview'>Junior Software Engineer - Cloud System </Link>
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
                                    <Link to='/Adview'>Quality Assurance Compliance Engineer / Trainee Quality Assurance / Compliance Engineer</Link>
                                    <p>IronOne Technologies</p>
                                </td>
                                <td>
                                    <p>Hitachi Digital Payment Solutions Limited</p>
                                </td>
                                <td><p>Thu Jan 26 2023</p></td>
                                <td><p>Fri Feb 03 2023</p></td>
                            </tr> 
                            <tr>
                                <td className='text-center green'>1</td>
                                <td><p>1047687</p></td>
                                <td>
                                    <Link to='/Adview'>Tech Lead - C++ </Link>
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
                                    <Link to='/Adview'>Front-End Developer </Link>
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
                                    <Link to='/Adview'>Full Stack Developer </Link>
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
                                    <Link to='/Adview'>Junior Software Engineer - Cloud System </Link>
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
                                    <Link to='/Adview'>Quality Assurance Compliance Engineer / Trainee Quality Assurance / Compliance Engineer</Link>
                                    <p>IronOne Technologies</p>
                                </td>
                                <td>
                                    <p>Hitachi Digital Payment Solutions Limited</p>
                                </td>
                                <td><p>Thu Jan 26 2023</p></td>
                                <td><p>Fri Feb 03 2023</p></td>
                            </tr> 
                            <tr>
                                <td className='text-center green'>1</td>
                                <td><p>1047687</p></td>
                                <td>
                                    <Link to='/Adview'>Tech Lead - C++ </Link>
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
                                    <Link to='/Adview'>Front-End Developer </Link>
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
                                    <Link to='/Adview'>Full Stack Developer </Link>
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
                                    <Link to='/Adview'>Junior Software Engineer - Cloud System </Link>
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
                                    <Link to='/Adview'>Quality Assurance Compliance Engineer / Trainee Quality Assurance / Compliance Engineer</Link>
                                    <p>IronOne Technologies</p>
                                </td>
                                <td>
                                    <p>Hitachi Digital Payment Solutions Limited</p>
                                </td>
                                <td><p>Thu Jan 26 2023</p></td>
                                <td><p>Fri Feb 03 2023</p></td>
                            </tr> 
                            <tr>
                                <td className='text-center green'>1</td>
                                <td><p>1047687</p></td>
                                <td>
                                    <Link to='/Adview'>Tech Lead - C++ </Link>
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
                                    <Link to='/Adview'>Front-End Developer </Link>
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
                                    <Link to='/Adview'>Full Stack Developer </Link>
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
                                    <Link to='/Adview'>Junior Software Engineer - Cloud System </Link>
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
                                    <Link to='/Adview'>Quality Assurance Compliance Engineer / Trainee Quality Assurance / Compliance Engineer</Link>
                                    <p>IronOne Technologies</p>
                                </td>
                                <td>
                                    <p>Hitachi Digital Payment Solutions Limited</p>
                                </td>
                                <td><p>Thu Jan 26 2023</p></td>
                                <td><p>Fri Feb 03 2023</p></td>
                            </tr>                              
                        </tbody>
                        </Table>
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