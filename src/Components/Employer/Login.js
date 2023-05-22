import React from 'react';
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";

function Login () {  

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
                        <div className='admin-left d-flex align-content-between flex-wrap h-100'>
                            <video muted autoPlay loop width="100%">
                                <source autoPlay loop src="../emp_video.webm" type="video/webm" />
                                <source autoPlay loop src="../emp_video.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support videos.
                            </video>
                            <h1>topjobs <span>recruitment made easy</span></h1> 
                            <h3>Welcome to <span>GENESIIS</span></h3>
                            <div className='capion'>
                                <p><span>Welcome to GENESIIS</span>Business Hours (Mon-Fri, 8.30am-5.00pm) Call (+94) 11 776 5645, (+94) 77 391 8922 Or Email to support@topjobs.lk</p>
                            </div>   
                        </div>
                    </Col>
                    
                    <Col xs={12} sm={12} md={6} lg={6} xl={4} xxl={4} className=''>
                        <div className='d-flex align-items-center justify-content-center h-100'>
                            <div className='d-flex flex-column align-items-center justify-content-center text-center'>
                                <div className='admin-login-bx'>
                                <Form className='js-login-form'>
                                    <h2>Admin Login</h2>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>User Name</Form.Label>
                                    <Form.Control type="text" size='sm' placeholder='gencso' />
                                    </Form.Group>
                                    <Form.Group className="" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" size='sm' placeholder='********' />
                                    <Link to="/Employer/Welcome" className="btn btn-primary mt-3 admin-log-button" variant="primary">Login <i className="fa-solid fa-arrow-right-long"></i></Link>
                                    </Form.Group>                    
                                    <div className='radio-grp'>
                                    <input type="radio" value="Male" name="gender" /> Save my user name and password
                                    </div>
                                    <div className='radio-grp'>
                                    <input type="radio" value="Female" name="gender" /> Always ask for my user name and password
                                    </div>
                                    <a href='/#' className='fgt-pass'>Forgot password?</a>
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

export default Login;