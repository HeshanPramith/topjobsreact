import React from 'react';
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Table from 'react-bootstrap/Table';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Form } from 'react-bootstrap';

function Userlist () {  

    useEffect(() => {
        document.body.classList.add('userlist','blue','defhider')
        return () => {
          document.body.classList.remove('userlist','blue','defhider')
        }
    }, [])
    
    
    return (
        <React.Fragment>
            <header id='admin-header' className='admin-header'>
                <Container fluid className=''>
                    <Row className='row align-items-center'>
                        <Col className='col-10 col-sm-3 col-md-3 col-lg-2 text-left'>
                            <div className='admin-logo'>
                                <img src='../images/genesiis.png' className='img-fluid' alt='logo'></img> 
                            </div>                     
                        </Col>
                        <Col className='col-12 col-sm-7 col-md-7 col-lg-9 text-left order-last'>
                            <h4>User List</h4> 
                            <small className='d-none d-sm-block'>Your last login was on 07 February 2023 at 04:27 PM</small>  
                            <div className='admin-nav'>
                                <Link to='/Employer/Welcome' title='Dashboard'><i className="fa-solid fa-house"></i></Link>
                                <Link to='/#' title='Help'><i className="fa-solid fa-circle-info"></i></Link>
                                <Link to='/#' title='FAQ'><i className="fa-solid fa-comment-dots"></i></Link>
                            </div>                        
                        </Col>
                        <Col className='col-2 col-sm-2 col-md-2 col-lg-1 text-left order-sm-last'>
                            <Link to='/Employer/Login' className='logout'><i className="fa-solid fa-arrow-right-from-bracket"></i></Link>                     
                        </Col>
                    </Row>
                </Container>               
            </header>
            <Container fluid className='h-100'>
                <Row>
                    <Col xs={12} className='mt-3'>
                        <Alert variant='warning' className='p-2 text-center rounded-0'>
                            <b>topjobs Support Business Hours (Mon-Fri, 8.30am-5.00pm) Call (+94) 11 776 5645, (+94) 77 391 8922 Or Email to support@topjobs.lk</b>
                        </Alert>
                    </Col>
                </Row>
                <Row className='mb-3'>
                    <Col xs={12} sm={12}> 
                        <Tabs
                            defaultActiveKey="utl"
                            id="fill-tab-example"
                            className=""
                            >
                            <Tab eventKey="utl" title="User Type List">
                                <Row>
                                    <Col xs={12} className='mb-3'>
                                        <Link to='/Employer/Employer' className='me-2 add-btn btn btn-primary btn-sm'><i className="fa-solid fa-square-plus"></i> Add User Type</Link>
                                    </Col>
                                </Row>                                                                   
                                <Form className='user-block'>
                                    <Row> 
                                        <Col xs={12} sm={6} md={6} lg={4} xl={4} xxl={3} className='mb-3'>
                                            <div className='loop-user d-flex align-items-center'>
                                                <div className='delete'>
                                                    <Form.Check type="checkbox" label="" />
                                                </div>
                                                <div className='detail'>
                                                    <p><b>User Type</b>genesiis</p>
                                                    <p><b>Description</b>0000000001</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xs={12} sm={6} md={6} lg={4} xl={4} xxl={3} className='mb-3'>
                                            <div className='loop-user d-flex align-items-center'>
                                                <div className='delete'>
                                                    <Form.Check type="checkbox" label="" />
                                                </div>
                                                <div className='detail'>
                                                    <p><b>User Type</b>HR Officer</p>
                                                    <p><b>Description</b>0000000001</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xs={12} sm={6} md={6} lg={4} xl={4} xxl={3} className='mb-3'>
                                            <div className='loop-user d-flex align-items-center'>
                                                <div className='delete'>
                                                    <Form.Check type="checkbox" label="" />
                                                </div>
                                                <div className='detail'>
                                                    <p><b>User Type</b>HR</p>
                                                    <p><b>Description</b>0000000001</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xs={12} sm={6} md={6} lg={4} xl={4} xxl={3} className='mb-3'>
                                            <div className='loop-user d-flex align-items-center'>
                                                <div className='delete'>
                                                    <Form.Check type="checkbox" label="" />
                                                </div>
                                                <div className='detail'>
                                                    <p><b>User Type</b>SuperAdmin</p>
                                                    <p><b>Description</b>0000000001</p>
                                                </div>
                                            </div>
                                        </Col>                                        
                                    </Row>
                                    <Row>
                                        <Col xs={12}>
                                            <Button type='submit' className='filter-btn delete-btn btn btn-primary btn-sm m-0'> <i className="fa-solid fa-trash-can"></i> Delete Selected Item</Button>
                                        </Col>
                                    </Row>
                                </Form>                                
                            </Tab>
                            <Tab eventKey="sul" title="System User List">
                                <Row>
                                    <Col xs={12} className='mb-3'>
                                        <Link to='/Employer/Employer' className='me-2 add-btn btn btn-primary btn-sm'><i className="fa-solid fa-square-plus"></i> Add System User</Link>
                                    </Col>
                                </Row>                                                                   
                                <Form className='user-block'>
                                    <Row> 
                                        <Col xs={12} sm={6} md={6} lg={4} xl={4} xxl={4} className='mb-3'>
                                            <div className='loop-user d-flex align-items-center'>
                                                <div className='delete'>
                                                    <Form.Check type="checkbox" label="" />
                                                </div>
                                                <div className='detail'>
                                                    <p><b>User Name</b>gencso</p>
                                                    <p><b>User Type</b>genesiis</p>
                                                    <p><b>Email</b>sdb@genesiis.com</p>
                                                </div>
                                            </div>
                                        </Col>  
                                        <Col xs={12} sm={6} md={6} lg={4} xl={4} xxl={4} className='mb-3'>
                                            <div className='loop-user d-flex align-items-center'>
                                                <div className='delete'>
                                                    <Form.Check type="checkbox" label="" />
                                                </div>
                                                <div className='detail'>
                                                    <p><b>User Name</b>genesiis</p>
                                                    <p><b>User Type</b>SA</p>
                                                    <p><b>Email</b>sdb@genesiis.com</p>
                                                </div>
                                            </div>
                                        </Col> 
                                        <Col xs={12} sm={6} md={6} lg={4} xl={4} xxl={4} className='mb-3'>
                                            <div className='loop-user d-flex align-items-center'>
                                                <div className='delete'>
                                                    <Form.Check type="checkbox" label="" />
                                                </div>
                                                <div className='detail'>
                                                    <p><b>User Name</b>hemal</p>
                                                    <p><b>User Type</b>HR User</p>
                                                    <p><b>Email</b>sdb@genesiis.com</p>
                                                </div>
                                            </div>
                                        </Col>  
                                        <Col xs={12} sm={6} md={6} lg={4} xl={4} xxl={4} className='mb-3'>
                                            <div className='loop-user d-flex align-items-center'>
                                                <div className='delete'>
                                                    <Form.Check type="checkbox" label="" />
                                                </div>
                                                <div className='detail'>
                                                    <p><b>User Name</b>senaka</p>
                                                    <p><b>User Type</b>HR Officer</p>
                                                    <p><b>Email</b>sdb@genesiis.com</p>
                                                </div>
                                            </div>
                                        </Col>  
                                        <Col xs={12} sm={6} md={6} lg={4} xl={4} xxl={4} className='mb-3'>
                                            <div className='loop-user d-flex align-items-center'>
                                                <div className='delete'>
                                                    <Form.Check type="checkbox" label="" />
                                                </div>
                                                <div className='detail'>
                                                    <p><b>User Name</b>test</p>
                                                    <p><b>User Type</b>genesiis</p>
                                                    <p><b>Email</b>tharindu@genesiis.com</p>
                                                </div>
                                            </div>
                                        </Col>                                       
                                    </Row>
                                    <Row>
                                        <Col xs={12}>
                                            <Button type='submit' className='filter-btn delete-btn btn btn-primary btn-sm m-0'> <i className="fa-solid fa-trash-can"></i> Delete Selected Item</Button>
                                        </Col>
                                    </Row>
                                </Form> 
                            </Tab>
                            <Tab eventKey="eul" title="Employer User List">
                                <Table striped hover>
                                    <thead>
                                        <tr>
                                            <th>User Name</th>
                                            <th>User Type</th>
                                            <th>Organisation</th>
                                            <th>Company Group</th>
                                            <th>Email</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>topjobstat</td>
                                            <td>SuperAdmin</td>
                                            <td>topjobs.lk</td>
                                            <td>Genesiis Software</td>
                                            <td>sdb@genesiis.com</td>
                                        </tr>                                        
                                    </tbody>
                                </Table>
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}

export default Userlist;