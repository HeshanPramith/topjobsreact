import React from 'react';
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";

function Jslogin () {  

    useEffect(() => {
        document.body.classList.add('emp-login','blue')
        return () => {
          document.body.classList.remove('emp-login','blue')
        }
    }, [])

    return (
        <React.Fragment>
            <Container fluid className='h-100'>
                <Row className='h-100'>
                    <Col xs={12} sm={12} md={6} lg={6} xl={8} xxl={8} className='prel p-0'>
                        <div className='seeker-left d-flex align-content-between flex-wrap h-100'>
                            <video muted autoPlay loop width="100%">
                                <source autoPlay loop src="../seeker_video.webm" type="video/webm" />
                                <source autoPlay loop src="../seeker_video.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support videos.
                            </video>
                            <h1>topjobs <span>recruitment made easy</span></h1> 
                            <div className='capion'>
                                <p><span>topjobs Sri Lanka Job Network</span>most popular online job site in Sri Lanka for jobs, careers, recruitment and employment with recruitment automation for employers.</p>
                                <p>Business Hours (Mon-Fri, 8.30am-5.00pm) Call (+94) 11 776 5645, (+94) 77 391 8922 Or Email to support@topjobs.lk</p>
                            </div>   
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={4} xxl={4} className=''>
                        <div className='d-flex align-items-center justify-content-center h-100'>
                            <div className='d-flex flex-column align-items-center justify-content-center text-center h-100'>
                                <div className='seeker-login-bx h-100 d-flex align-items-center'>
                                <Form className='js-login-form'>
                                    <h2><span>topjobs</span> Jobseeker Login</h2>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>User Name</Form.Label>
                                        <Form.Control type="text" size='sm' placeholder='Heshan' />
                                    </Form.Group>
                                    <Form.Group className="" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" size='sm' placeholder='********' />
                                        <Link to="/Jobseeker/Jswelcome" className="btn btn-primary mt-3 seeker-log-button" variant="primary">Login <i className="fa-solid fa-arrow-right-long"></i></Link>
                                    </Form.Group>  
                                    <Form.Group as={Col} xs={12} className="mb-3" controlId="">
                                        <Form.Check type="radio" name="group111" aria-label="radio 1" label="Remember my user name"/>
                                        <Form.Check type="radio" name="group111" aria-label="radio 2" label="Remember my user name & password"/>
                                        <Form.Check type="radio" name="group111" aria-label="radio 3" label="Do not remember me"/>
                                    </Form.Group>                  
                                    <Link to="/Jobseeker/Jslogin" className='fgt-pass'>Forgot password?</Link>
                                    <div className="divider div-transparent"><span>OR</span></div>
                                    <p>Don't have a topjobs account?</p>
                                    <Link to="/Jobseeker/Jssignup" className="btn btn-primary mt-3 mb-0 seeker-sup-button" variant="primary">Sign Up Now <i className="fa-solid fa-arrow-right-long"></i></Link>
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

export default Jslogin;