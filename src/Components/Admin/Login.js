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
                    <Col xs={12} sm={12} md={5} lg={4} xl={4} xxl={4} className='prel admin-left'>
                        <div className='d-flex align-items-center justify-content-center h-100'>
                            <div className='d-flex flex-column align-items-center justify-content-center'>
                                <div className='admin-img'>
                                    <img src='../images/0000000001.png' className='img-fluid jslog-img' alt='logo'></img>
                                </div>
                                <h3>Welcome to Genesiis</h3>
                                <p className='text-center'>Business Hours (Mon-Fri, 8.30am-5.00pm) Call (+94) 11 776 5645, (+94) 77 391 8922 Or Email to support@topjobs.lk</p>
                                <a href='/#' className='go-to-tj'>Go to topjobs</a>
                            </div>
                        </div>                      
                    </Col>
                    <Col xs={12} sm={12} md={7} lg={8} xl={8} xxl={8} className=''>
                        <div className='d-flex align-items-center justify-content-center h-100'>
                            <div className='d-flex flex-column align-items-center justify-content-center text-center'>
                                <div className='admin-login-bx'>
                                <Form className='js-login-form'>
                                    <h2>Login</h2>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>User Name</Form.Label>
                                    <Form.Control type="text" size='sm' placeholder='gencso' />
                                    </Form.Group>
                                    <Form.Group className="" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" size='sm' placeholder='********' />
                                    <Link to="/Admin/Welcome" className="btn btn-primary mt-3 admin-log-button" variant="primary">Login <i className="fa-solid fa-arrow-right-long"></i></Link>
                                    </Form.Group>                    
                                    <div className='radio-grp'>
                                    <input type="radio" value="Male" name="gender" checked /> Save my user name and password
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