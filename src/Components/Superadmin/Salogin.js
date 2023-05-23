import React from 'react';
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";

function Salogin () {  

    useEffect(() => {
        document.body.classList.add('supadmin-login','red')
        return () => {
          document.body.classList.remove('supadmin-login','red')
        }
    }, [])
    
    return (
        <React.Fragment>
            <Container fluid className='h-100'>
                <Row className='h-100'>
                    <Col xs={12} sm={12} md={6} lg={6} xl={8} xxl={8} className='prel p-0'>
                        <div className='admin-left d-flex align-content-between flex-wrap h-100'>
                            <video muted autoPlay loop width="100%">
                                <source autoPlay loop src="../sadmin_video.webm" type="video/webm" />
                                <source autoPlay loop src="../sadmin_video.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support videos.
                            </video>
                            <h1>topjobs <span>recruitment made easy</span></h1> 
                            <h3>Welcome to <span>topjobs</span></h3>
                            <div className='capion'>
                                <p><span>topjobs Sri Lanka Job Network</span>most popular online job site in Sri Lanka for jobs, careers, recruitment and employment with recruitment automation for employers.</p>
                            </div>   
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={4} xxl={4} className=''>
                        <div className='d-flex align-items-center justify-content-center h-100'>
                            <div className='d-flex flex-column align-items-center justify-content-center text-center'>
                                <div className='admin-login-bx'>
                                <Form className='js-login-form'>
                                    <h2>Superadmin Login</h2>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>User Name</Form.Label>
                                        <Form.Control type="text" size='sm' placeholder='SuperAdmin' />
                                    </Form.Group>
                                    <Form.Group className="" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" size='sm' placeholder='********' />
                                        <Link to="/Superadmin/Sawelcome" className="btn btn-primary mt-3 admin-log-button" variant="primary">Login <i className="fa-solid fa-arrow-right-long"></i></Link>
                                    </Form.Group>    
                                    <Form.Group as={Col} xs={12} className="mb-3" controlId="">
                                        <Form.Check type="radio" name="group111" aria-label="radio 1" label="Save my user name and password"/>
                                        <Form.Check type="radio" name="group111" aria-label="radio 2" label="Always ask for my user name and password"/>
                                    </Form.Group>
                                    <Link to="/Superadmin/Salogin" className='fgt-pass'>Forgot password?</Link>
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

export default Salogin;