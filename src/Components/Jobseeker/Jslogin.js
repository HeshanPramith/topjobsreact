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
                    <Col xs={12} sm={12} md={5} lg={4} xl={4} xxl={4} className='prel seeker-left'>
                        <div className='d-flex align-items-center justify-content-center h-100'>
                            <div className='d-flex flex-column align-items-center justify-content-center'>
                                <div className='seeker-img'>
                                    <Link className="navbar-brand" to="/#">
                                        <img src='../images/tj.jpg' className='img-fluid' alt='logo'></img>
                                    </Link>
                                </div>
                                <h3>Welcome Back</h3>
                                <p>Don't have a topjobs account?</p>
                                <a href='/#' className='go-to-tj'>Sign Up Now! <i className="fa-solid fa-arrow-right-long"></i></a>
                            </div>
                        </div>                      
                    </Col>
                    <Col xs={12} sm={12} md={7} lg={8} xl={8} xxl={8} className=''>
                        <div className='d-flex align-items-center justify-content-center h-100'>
                            <div className='d-flex flex-column align-items-center justify-content-center text-center'>
                                <div className='seeker-login-bx'>
                                <Form className='js-login-form'>
                                    <h2>Jobseeker Login</h2>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>User Name</Form.Label>
                                    <Form.Control type="text" size='sm' placeholder='Jobseeker Name' />
                                    </Form.Group>
                                    <Form.Group className="" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" size='sm' placeholder='********' />
                                    <Link to="/Jobseeker/Jswelcome" className="btn btn-primary mt-3 seeker-log-button" variant="primary">Login <i className="fa-solid fa-arrow-right-long"></i></Link>
                                    </Form.Group>                    
                                    <div className='radio-grp'>
                                        <input type="radio" value="Rem" name="Rem" checked /> Remember my user name
                                    </div>
                                    <div className='radio-grp'>
                                        <input type="radio" value="Remnp" name="Remnp" /> Remember my user name & password
                                    </div>
                                    <div className='radio-grp'>
                                        <input type="radio" value="Dontrem" name="Dontrem" /> Do not remember me
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