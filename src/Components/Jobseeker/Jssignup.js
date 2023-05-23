import React from 'react';
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";

function Jssignup () {  

    useEffect(() => {
        document.body.classList.add('seeker-signup','emp-login','blue')
        return () => {
          document.body.classList.remove('seeker-signup','emp-login','blue')
        }
    }, [])

    return (
        <React.Fragment>
            <Container fluid className='h-100'>
                <Row className='h-100'>
                    <Col xs={12} sm={12} md={6} lg={6} xl={7} xxl={7} className='prel p-0'>
                        <div className='seeker-left d-flex align-content-between flex-wrap h-100'>
                            <video muted autoPlay loop width="100%">
                                <source autoPlay loop src="../seeker_video.webm" type="video/webm" />
                                <source autoPlay loop src="../seeker_video.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support videos.
                            </video>
                            <h1>topjobs <span>recruitment made easy</span></h1> 
                            <div className='cap-wrapper'>
                                <div className='capion d-none d-lg-block'>
                                    <p>Please fill in the information below to create an account with topjobs. Once your account has been created, you can login at any time and use your own Workspace in the system. From this workspace, you can apply for jobs, build up your employment profile, upload your CV, search for vacancies, see your list of applied jobs, and most importantly be given feedback on the progress of your vacancy applications.</p>
                                </div>
                                <div className='capion d-none d-lg-block'>
                                    <p>Please try to use strong credentials (User ID and Password). Strong credentials should have a minimum of 6 characters, with a mix of upper/lower case letters and numbers. We encourage you to use your email address as your user name. If you don't have an email address, get one easily from <Link to="/Jobseeker/Jssignup">Yahoo</Link></p>
                                </div> 
                                <div className='capion'>
                                    <p><Link to="/Jobseeker/Jssignup">Click here</Link> to see an online demo on 'How to create a topjobs account'</p>
                                </div>   
                                <div className='capion'>
                                    <p><span>topjobs Sri Lanka Job Network</span>most popular online job site in Sri Lanka for jobs, careers, recruitment and employment with recruitment automation for employers.</p>
                                    <p>Business Hours (Mon-Fri, 8.30am-5.00pm) Call (+94) 11 776 5645, (+94) 77 391 8922 Or Email to support@topjobs.lk</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={5} xxl={5} className=''>
                        <div className='d-flex align-items-center justify-content-center h-100'>
                            <div className='d-flex flex-column align-items-center justify-content-center text-center h-100'>
                                <div className='seeker-login-bx h-100 d-flex align-items-center'>
                                <Form className='js-login-form'>
                                    <h2><span>topjobs</span> Jobseeker Signup</h2>
                                    <Row>
                                        <Form.Group as={Col} xs={12} sm={12} md={12} lg={12} className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>User Name <i>*</i></Form.Label>
                                            <Form.Control type="text" size='sm' placeholder='Heshan' />
                                            <small><Link to="/Jobseeker/Jssignup">Check User Name</Link> (hint: use your email address)</small>
                                        </Form.Group>
                                        <Form.Group as={Col} xs={12} sm={6} md={6} lg={6} className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Password <i>*</i></Form.Label>
                                            <Form.Control type="password" size='sm' placeholder='********' />
                                            <small>Minimum 6 characters</small>
                                        </Form.Group>
                                        <Form.Group as={Col} xs={12} sm={6} md={6} lg={6} className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Confirm Password <i>*</i></Form.Label>
                                            <Form.Control type="password" size='sm' placeholder='********' />
                                        </Form.Group>
                                        <Form.Group as={Col} xs={12} sm={6} md={6} lg={6} className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Email <i>*</i></Form.Label>
                                            <Form.Control type="email" size='sm' placeholder='email' />
                                            <small>Don't have email? Try <Link to="/Jobseeker/Jssignup">Yahoo</Link></small>
                                        </Form.Group>
                                        <Form.Group as={Col} xs={12} sm={6} md={6} lg={6} className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Confirm Email <i>*</i></Form.Label>
                                            <Form.Control type="email" size='sm' placeholder='email' />
                                        </Form.Group>
                                        <Form.Group as={Col} xs={12} sm={6} md={6} lg={6} className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Secret Question <i>*</i></Form.Label>
                                            <Form.Select defaultValue="Select" className=' me-2' size='sm'>
                                                <option>Select a Question »</option>
                                                <option>What is your all-time favorite sports team?</option>
                                                <option>What is your favorite pastime?</option>
                                                <option>What is your name?</option>
                                                <option>What is your system generated username?</option>
                                                <option>What make was your first car or bike?</option>
                                                <option>What was the name of your first school?</option>
                                                <option>Mar</option>
                                                <option>What was your high school mascot?</option>
                                                <option>Where did you first meet your spouse?</option>
                                            </Form.Select>
                                            <small>If you forget your password</small>
                                        </Form.Group>
                                        <Form.Group as={Col} xs={12} sm={6} md={6} lg={6} className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Secret Answer <i>*</i></Form.Label>
                                            <Form.Control type="text" size='sm' placeholder='Secret Answer' />
                                        </Form.Group>   
                                        <Col xs={12}>                      
                                            <Link to="/Jobseeker/Jswelcome" className="btn btn-primary mt-3 mb-0 seeker-sup-button" variant="primary">Create Account <i className="fa-solid fa-arrow-right-long"></i></Link>
                                        </Col>
                                        <Col xs={12} className='mt-3'>    
                                        <Form.Label>By clicking on this button we assume you accept the Terms and Conditions of this site</Form.Label>
                                        </Col>
                                    </Row>
                                </Form>
                                </div>
                            </div>
                        </div>   
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}

export default Jssignup;