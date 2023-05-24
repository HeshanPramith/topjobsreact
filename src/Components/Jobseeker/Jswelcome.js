import React from 'react';
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import Jsheader from '../Common/Jsheader';
import Footer from '../Common/Footer';
import ListGroup from 'react-bootstrap/ListGroup';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Jswelcome () {

    useEffect(() => {
        document.body.classList.add('seeker-welcome')
        return () => {
          document.body.classList.remove('seeker-welcome')
        }
    }, [])

    const percentage = 65;

    return (
        <React.Fragment>
            <Jsheader/> 
            <Container fluid>
                <Row>
                    <Col xs={12}>
                        <h5>Hello and Welcome to topjobs</h5>
                        <p>Welcome back, We've missed you. 👋</p>
                    </Col>
                </Row>
                <Row className='sadmin-group-top'>
                    <Col xs={12} sm={6} md={6} lg={4} xl={4} xxl={2} className='mb-4'>
                        <Card bg='danger' text='dark' className="h-100 prof">
                            <Card.Title>Profile Complete Progress</Card.Title>
                            <Card.Body className='d-flex flex-column align-items-center justify-content-center'>
                                <div className='pro-pic'>
                                    <img src='../images/pro-pic.jpg' className='img-fluid' alt='logo'></img>
                                </div>
                                <div className='profile-cuz h-100 d-flex flex-column align-items-center justify-content-center'>
                                    <h5>65%</h5>
                                    <CircularProgressbar value={percentage} />
                                </div>
                                <Link to='/Jobseeker/Applicantsingleform' className='cmp-prof'>Complete Your Profile</Link>
                            </Card.Body>
                        </Card>  
                    </Col> 
                    <Col xs={12} sm={6} md={6} lg={8} xl={8} xxl={5} className='mb-4'>
                        <Card bg='primary' text='dark' className="h-100">
                            <Card.Title>Hello!</Card.Title>
                            <Card.Body>
                                <div className='glassbx h-100'>
                                    <h5>topjobs is the leading jobs and recruitment website in Sri Lanka. topjobs will help you to apply for the latest vacancies and find a great job with an employer of your choice.</h5>
                                    <h5>These pages are your private jobseeker 'workspace'. Use the workspace to list and browse job vacancies, list the jobs applied for, manage application profiles and manage job preferences.</h5>
                                    <h5><Link to='/Jobseeker/Applicantsingleform'>Edit</Link> My Common Profile. When applying for a job you may customise the application form (profile) for each employer. Your Common Profile is the 'basis' for customised profiles. You can edit the Common Profile at any time and changes will be seen by employers to whom you have applied. By using a Common Profile you avoid entering the same information for every job application. Profiles are used ONLY for online applications and are sent 'straight-through' to the employer. Email applications do not use the profile.</h5>
                                </div>
                            </Card.Body>
                        </Card> 
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={3} className='mb-4'>
                        <Card text='dark' className="h-100">
                            <Card.Title>Applied Jobs</Card.Title>
                            <Card.Body>
                                <Table responsive borderless hover>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Title</th>
                                            <th>Company</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>SSE - JAVA</td>
                                            <td>GENESIIS</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>SSE</td>
                                            <td>Dialog</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>ATL</td>
                                            <td>Sysco Labs</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>SE</td>
                                            <td>Softlogic</td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>SSE</td>
                                            <td>Virtusa</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card> 
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={2} className='mb-4'>
                        <Card text='dark' className="h-100">
                            <Card.Title>topjobs News</Card.Title>
                            <Card.Body>
                                <ListGroup as="ol" numbered>
                                    <ListGroup.Item action href="#link1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec risus diam. Suspendisse sodales, ante sit amet gravida luctus, ipsum lacus elementum metus</ListGroup.Item>
                                    <ListGroup.Item action href="#link2">Suspendisse sodales, ante sit amet gravida luctus,</ListGroup.Item>
                                    <ListGroup.Item action href="#link3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec risus diam. Suspendisse sodales, ante sit amet gravida luctus, ipsum lacus elementum metus</ListGroup.Item>
                                    <ListGroup.Item action href="#link1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec risus diam. Suspendisse sodales, ante sit amet gravida luctus, ipsum lacus elementum metus</ListGroup.Item>
                                    <ListGroup.Item action href="#link2">Suspendisse sodales, ante sit amet gravida luctus,</ListGroup.Item>
                                    <ListGroup.Item action href="#link3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec risus diam. Suspendisse sodales, ante sit amet gravida luctus, ipsum lacus elementum metus</ListGroup.Item>
                                    <ListGroup.Item action href="#link1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec risus diam. Suspendisse sodales, ante sit amet gravida luctus, ipsum lacus elementum metus</ListGroup.Item>
                                    <ListGroup.Item action href="#link2">Suspendisse sodales, ante sit amet gravida luctus,</ListGroup.Item>
                                    <ListGroup.Item action href="#link3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec risus diam. Suspendisse sodales, ante sit amet gravida luctus, ipsum lacus elementum metus</ListGroup.Item>
                                    <ListGroup.Item action href="#link1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec risus diam. Suspendisse sodales, ante sit amet gravida luctus, ipsum lacus elementum metus</ListGroup.Item>
                                    <ListGroup.Item action href="#link2">Suspendisse sodales, ante sit amet gravida luctus,</ListGroup.Item>
                                    <ListGroup.Item action href="#link3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec risus diam. Suspendisse sodales, ante sit amet gravida luctus, ipsum lacus elementum metus</ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>  
                    </Col> 
                </Row>
                <Row className='h-100 mb-3'>
                    <Card as={Col} xs={12} sm={6} md={6} lg={3} xl={3} xxl={3} bg='success' text='light' className="mb-3 scard admin-d-card rounded-3 text-light">
                        <Card.Title>My Jobs <span>Information on jobs, submitted applications and companies you are watching.</span></Card.Title>
                        <Card.Body>
                            <Card.Text>
                                <Link to='/Jobseeker/Jswelcome' className='text-white'>My Applications</Link>
                                <Link to='/Jobseeker/Jswelcome' className='text-white'>Flagged Jobs</Link>
                                <Link to='/Jobseeker/Jswelcome' className='text-white'>Preferred Companies</Link>
                                <Link to='/Jobseeker/Jswelcome' className='text-white'>Recent Jobs</Link>
                            </Card.Text>
                        </Card.Body>
                    </Card> 
                    <Card as={Col} xs={12} sm={6} md={6} lg={3} xl={3} xxl={3} bg='warning' text='dark' className="mb-3 scard admin-d-card text-light rounded-3">
                        <Card.Title>My Profiles <span>Manage your CV, photograph, etc. View/Edit your login details.</span></Card.Title>
                        <Card.Body>
                            <Card.Text>
                                <Link to='/Jobseeker/Jswelcome' className='text-dark'>My CV/Document(s)</Link>
                                <Link to='/Jobseeker/Applicantsingleform' className='text-dark'>Common Profile</Link>
                                <Link to='/Jobseeker/Jswelcome' className='text-dark'>Profile Submitted to Employers</Link>
                                <Link to='/Jobseeker/Jswelcome' className='text-dark'>My Login Details</Link>
                            </Card.Text>
                        </Card.Body>
                    </Card> 
                    <Card as={Col} xs={12} sm={6} md={6} lg={3} xl={3} xxl={3} bg='danger' text='light' className="mb-3 scard admin-d-card rounded-3 text-light">
                        <Card.Title>My Preferences <span>Choose how job information is delivered; configure your account</span></Card.Title>
                        <Card.Body>
                            <Card.Text>
                                <Link to='/Jobseeker/Jswelcome' className='text-white'>Job Alerts</Link>
                            </Card.Text>
                        </Card.Body>
                    </Card> 
                    <Card as={Col} xs={12} sm={6} md={6} lg={3} xl={3} xxl={3} bg='primary' text='light' className="mb-3 scard admin-d-card rounded-3 text-light">
                        <Card.Title>topjobs Helpdesk <span>(+94) 11 776 5645, (+94) 77 391 8922 (8:30 a.m.- 5:00 p.m. weekdays)</span></Card.Title>
                        <Card.Body>
                            <Card.Text>
                                <Link to='/Jobseeker/Jswelcome' className='text-white'>(+94) 11 776 5645</Link>
                                <Link to='/Jobseeker/Jswelcome' className='text-white'>(+94) 77 391 8922</Link>
                                <Link to='/Jobseeker/Jswelcome' className='text-white'>support@topjobs.lk</Link>
                            </Card.Text>
                        </Card.Body>
                    </Card>  
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} className='mb-3'>
                        <h6>What is topjobs</h6>
                        <video controls width="100%">
                            <source src="../seeker_video.webm" type="video/webm" />
                            <source src="../seeker_video.mp4" type="video/mp4" />
                            Sorry, your browser doesn't support videos.
                        </video>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </React.Fragment>
    );
}

export default Jswelcome;