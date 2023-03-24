import React from 'react';
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Adminheader from '../Common/Adminheader';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function Welcome () {  

    useEffect(() => {
        document.body.classList.add('agentmenu','blue','defhider')
        return () => {
          document.body.classList.remove('agentmenu','blue','defhider')
        }
    }, [])
    
    return (
        <React.Fragment>
            <Adminheader/>
            <Container fluid className='h-100'>
                <Row>
                    <Col xs={12} className='pt-3'>
                        <Alert variant='warning' className='p-2 text-center rounded-0'>
                            <b>topjobs Support Business Hours (Mon-Fri, 8.30am-5.00pm) Call (+94) 11 776 5645, (+94) 77 391 8922 Or Email to support@topjobs.lk</b>
                        </Alert>
                    </Col>
                </Row>
                <Row className='h-100'>
                    <Col xs={12} sm={12} md={8} lg={9} xl={9} xxl={10} className='prel'>
                        <Accordion className='p-0 admin-accor mb-3'>
                            <Accordion.Item eventKey="0" variant='warning'>
                                <Accordion.Header>Are you missing out on important emails? read more...</Accordion.Header>
                                <Accordion.Body>
                                    <p>topjobs automatically sends you useful emails such as the 'Monthly Vacancy Summary' report and notices of vacancy opening and closing and more. To unblock these emails from spam filters</p>
                                    <p><b>Step 1:</b> Open your Gmail or Yahoo Mail account. Click on "Spam" from the list of options on the left side of the page.</p>
                                    <p><b>Step 2:</b> Find a message from "topjobs". A typical subject would be (TOPJOBS.LK - RELEASE NOTES FOR VERSION 2.9.4) click on the message to open it.</p>
                                    <p><b>Step 3:</b> Click "Not Spam" at the top of the page or remove the SPAM label . The message will be automatically moved to your regular in-box and the address will be removed from the list of senders sent to the spam folder.</p>
                                    <p><b>Step 4:</b> Inform your company's IT department to permit/unblock the following email addresses from the corporate spam filter (if any). support@topjobs.lk, jobalerts@topjobs.lk</p>
                                    <p>Call us on (+94) 11 776 5645 or email us on support@topjobs.lk for any clarifications</p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>   
                        <Row>                            
                            <Col xs={12} sm={5} md={5} lg={4} xl={3}>
                                <Row>
                                    <Col xs={12} className='mb-3 admin-left-btn'>
                                        <div className='admin-left-btn-wrp'>
                                            <Button variant="primary" size='sm' className='mb-2'><i className="fa-solid fa-unlock-keyhole"></i> How to change your password</Button>
                                            <Button variant="primary" size='sm' className='mb-2'><i className="fa-solid fa-database"></i> Applicant - Fast Data Entry Form</Button>
                                            <Button variant="primary" size='sm' className=''><i className="fa-solid fa-circle-plus"></i> Add new Vacancy</Button>
                                        </div>
                                    </Col>
                                    <Col xs={12}>
                                        <div className='admin-tbl-wrap mb-3'>
                                            <Table striped hover responsive>
                                                <thead>
                                                    <tr>
                                                        <th>Your Recent Vacancies</th>
                                                        <th className='text-center'>AL</th>
                                                        <th className='text-center'>SL</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <p><a href='/#'>0000980811</a> - SENIOR SOFTWARE ENGINEER - Full Stack - <span>23/07/2022 - 25/07/2022</span></p>
                                                        </td>
                                                        <td className='text-center'><p><a href='/#'>0</a></p></td>
                                                        <td className='text-center'><p><a href='/#'>0</a></p></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <p><a href='/#'>0000980811</a> - SENIOR SOFTWARE ENGINEER - Full Stack - <span>23/07/2022 - 25/07/2022</span></p>
                                                        </td>
                                                        <td className='text-center'><p><a href='/#'>0</a></p></td>
                                                        <td className='text-center'><p><a href='/#'>0</a></p></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <p><a href='/#'>0000980811</a> - SENIOR SOFTWARE ENGINEER - Full Stack - <span>23/07/2022 - 25/07/2022</span></p>
                                                        </td>
                                                        <td className='text-center'><p><a href='/#'>0</a></p></td>
                                                        <td className='text-center'><p><a href='/#'>0</a></p></td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </Col>                                    
                                </Row>
                            </Col>
                            <Col xs={12} sm={7} md={7} lg={8} xl={9}>
                                <Row className='admin-dash-links'>
                                    <Col xs={6} sm={6} md={6} lg={4} xl={3} className='mb-3'>
                                        <Link to='/Employer/Applicantsearch' className='color-1'><i className="fa-solid fa-arrow-right-long"></i> Applicant</Link>
                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={4} xl={3} className='mb-3'>
                                        <Link to='/Employer/Jobordersearch' className='color-2'><i className="fa-solid fa-arrow-right-long"></i> Vacancy</Link>
                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={4} xl={3} className='mb-3'>
                                        <Link to='/Employer/Masterlist' className='color-3'><i className="fa-solid fa-arrow-right-long"></i> Master Data</Link>
                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={4} xl={3} className='mb-3'>
                                        <Link to='/Employer/Emailconfig' className='color-4'><i className="fa-solid fa-arrow-right-long"></i> Email Config</Link>
                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={4} xl={3} className='mb-3'>
                                        <Link to='/Employer/Agent' className='color-5'><i className="fa-solid fa-arrow-right-long"></i> Company</Link>
                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={4} xl={3} className='mb-3'>
                                        <Link to='/Employer/Employerlist' className='color-6'><i className="fa-solid fa-arrow-right-long"></i> Employer</Link>
                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={4} xl={3} className='mb-3'>
                                        <Link to='/Employer/Paymentlist' className='color-7'><i className="fa-solid fa-arrow-right-long"></i> Payments</Link>
                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={4} xl={3} className='mb-3'>
                                        <Link to='/Employer/Contentmanage' className='color-8'><i className="fa-solid fa-arrow-right-long"></i> Page Contant Config</Link>
                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={4} xl={3} className='mb-3'>
                                        <Link to='/Employer/Userlist' className='color-9'><i className="fa-solid fa-arrow-right-long"></i> User Login</Link>
                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={4} xl={3} className='mb-3'>
                                        <Link to='/Employer/Dbconfig' className='color-10'><i className="fa-solid fa-arrow-right-long"></i> System Configuration</Link>
                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={4} xl={3} className='mb-3'>
                                        <Link to='/Employer/Interviewschedule' className='color-11'><i className="fa-solid fa-arrow-right-long"></i> Shedule Interviews</Link>
                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={4} xl={3} className='mb-3'>
                                        <Link to='/#' className='color-12'><i className="fa-solid fa-arrow-right-long"></i> Tab Customization</Link>
                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={4} xl={3} className='mb-3'>
                                        <Link to='/#' className='color-13'><i className="fa-solid fa-arrow-right-long"></i> Reports</Link>
                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={4} xl={3} className='mb-3'>
                                        <Link to='/#' className='color-14'><i className="fa-solid fa-arrow-right-long"></i> Profile Customization</Link>
                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={4} xl={3} className='mb-3'>
                                        <Link to='/#' className='color-15'><i className="fa-solid fa-arrow-right-long"></i> Email Alert</Link>
                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={4} xl={3} className='mb-3'>
                                        <Link to='/#' className='color-16'><i className="fa-solid fa-arrow-right-long"></i> Campus Applicants</Link>
                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={4} xl={3} className='mb-3'>
                                        <Link to='/#' className='color-17'><i className="fa-solid fa-arrow-right-long"></i> Advertisement Templates</Link>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} sm={12} md={12} lg={6}>
                                        <div className='admin-tbl-wrap mb-3'>
                                            <Table striped hover responsive>
                                                <thead>
                                                    <tr>
                                                    <th>Interviews</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                    <td className='text-center'>No Interviews for Today</td>
                                                    </tr>
                                                </tbody>
                                            </Table>   
                                        </div>                             
                                    </Col>
                                    <Col xs={12} sm={12} md={12} lg={6}>
                                        <div className='admin-tbl-wrap mb-3'>
                                            <Table striped hover responsive>
                                                <thead>
                                                    <tr>
                                                        <th>Most Recent Applicants</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td><a href='/#'>0001459397</a> - Mohomed Amjath</td>
                                                    </tr>
                                                    <tr>
                                                        <td><a href='/#'>0001457847</a> - Madhushi Sudasingha</td>
                                                    </tr>
                                                    <tr>
                                                        <td><a href='/#'>0001448348</a> - Timothy Nelson</td>
                                                    </tr>
                                                    <tr>
                                                        <td><a href='/#'>0001425556</a> - Shambhavi Deshmukh</td>
                                                    </tr>
                                                    <tr>
                                                        <td><a href='/#'>0001418683</a> - Sumudu Chandimal Silva</td>
                                                    </tr>
                                                    <tr>
                                                        <td><a href='/#'>0001319052</a> - Athalage Don Isuru Nuwan Sameera</td>
                                                    </tr>
                                                    <tr>
                                                        <td><a href='/#'>0001256996</a> - Wijesinghe Arachchilage Wasana Sewwandi Rajapaksha</td>
                                                    </tr>
                                                    <tr>
                                                        <td><a href='/#'>0001218665</a> - waruni samudra de silva</td>
                                                    </tr>
                                                    <tr>
                                                        <td><a href='/#'>0001457847</a> - Madhushi Sudasingha</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>                  
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={3} xl={3} xxl={2} className='prel'>
                        <Card bg='success' text='light' className="mb-3 admin-d-card">
                            <Card.Body>
                                <Card.Title>Partner Programs</Card.Title>
                                <Card.Text>
                                    <a href='/#' className='text-white'><i className="fa-solid fa-link"></i> CSR CV's</a>
                                    <a href='/#' className='text-white'><i className="fa-solid fa-link"></i> NAITA topjobs Partnership</a>
                                </Card.Text>
                            </Card.Body>
                        </Card> 
                        <Card bg='warning' text='light' className="mb-3 admin-d-card text-dark">
                            <Card.Body>
                                <Card.Title>topjobs Resources</Card.Title>
                                <Card.Text>
                                    <a href='/#' className='text-dark'><i className="fa-solid fa-link"></i> Release Notes</a>
                                    <a href='/#' className='text-dark'><i className="fa-solid fa-link"></i> Terms & Conditions</a>
                                    <a href='/#' className='text-dark'><i className="fa-solid fa-link"></i> Help</a>
                                    <a href='/#' className='text-dark'><i className="fa-solid fa-link"></i> HR Resource</a>
                                    <a href='/#' className='text-dark'><i className="fa-solid fa-link"></i> FAQ</a>
                                </Card.Text>
                            </Card.Body>
                        </Card> 
                        <Card bg='danger' text='light' className="mb-3 admin-d-card">
                            <Card.Body>
                                <Card.Title>Additional Services</Card.Title>
                                <Card.Text>
                                    <a href='/#' className='text-white'><i className="fa-solid fa-link"></i> topjobs Banner</a>
                                </Card.Text>
                            </Card.Body>
                        </Card>                     
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}

export default Welcome;