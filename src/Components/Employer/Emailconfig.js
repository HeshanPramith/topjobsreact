import React from 'react';
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Pagination from 'react-bootstrap/Pagination';

function Emailconfig () {  

    useEffect(() => {
        document.body.classList.add('emailconfig','blue','defhider')
        return () => {
          document.body.classList.remove('emailconfig','blue','defhider')
        }
    }, [])

    let active = 2;
    let items = [];
    for (let number = 1; number <= 5; number++) {
    items.push(
        <Pagination.Item key={number} active={number === active}>
        {number}
        </Pagination.Item>,
    );
    }
    
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
                            <h4>Email Configuration</h4> 
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
                    <Col xs={12} sm={12} lg={3}> 
                        <Table striped hover responsive className='masterlist-tbl'>
                            <thead>
                                <tr>
                                    <th>Email Type</th>
                                    <th>Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Email sent to admin when an applicant has applied for a job</td>
                                    <td><Link to='/Employer/Emailconfig'><i className="fa-regular fa-pen-to-square"></i></Link></td>
                                </tr>
                                <tr>
                                    <td>Email sent to applicant when the applicant has applied for a job</td>
                                    <td><Link to='/Employer/Emailconfig'><i className="fa-regular fa-pen-to-square"></i></Link></td>
                                </tr>
                                <tr>
                                    <td>Email sent to applicant when offered the job</td>
                                    <td><Link to='/Employer/Emailconfig'><i className="fa-regular fa-pen-to-square"></i></Link></td>
                                </tr>
                                <tr>
                                    <td>Email sent to applicant when he is rejected</td>
                                    <td><Link to='/Employer/Emailconfig'><i className="fa-regular fa-pen-to-square"></i></Link></td>
                                </tr>
                                <tr>
                                    <td>Email sent to applicant when an interview is scheduled</td>
                                    <td><Link to='/Employer/Emailconfig'><i className="fa-regular fa-pen-to-square"></i></Link></td>
                                </tr>
                            </tbody>
                        </Table>  
                    </Col>
                    <Col xs={12} sm={12} lg={9}> 
                        <h5 className='fs-6'>Configuration</h5>
                        <Form className='filter-frm mb-3'>
                            <Row>
                                <Form.Group as={Col} xs={12} sm={6} className="mb-3" controlId="">
                                    <Form.Label>Email Type</Form.Label>
                                    <Form.Control type="text" placeholder="Email sent to admin when an applicant has applied for a job" size='sm'/>
                                </Form.Group>
                                <Form.Group as={Col} xs={12} sm={6} className="mb-3" controlId="">
                                    <Form.Label>Email Subject <i>*</i></Form.Label>
                                    <Form.Control type="text" placeholder="Job Application" size='sm' />
                                </Form.Group>
                                <Form.Group as={Col} xs={12} sm={12} className="mb-3" controlId="">
                                    <Form.Label>Email Content <i>*</i></Form.Label>
                                    <Form.Control as="textarea" type="text" placeholder="Type here" size='sm' rows={5} cols={60} />
                                </Form.Group>
                                <Form.Group as={Col} xs={6} sm={4} className="mb-3" controlId="">
                                    <Form.Label>Do you want this email to be sent?</Form.Label>
                                    <Form.Check type="radio" name="group1" aria-label="radio 1" label="Yes"/>
                                    <Form.Check type="radio" name="group1" aria-label="radio 2" label="No"/>
                                </Form.Group>
                                <Form.Group as={Col} xs={6} sm={4} className="mb-3" controlId="">
                                    <Form.Label>From Address <i>*</i></Form.Label>
                                    <Form.Control type="text" placeholder="sdb@genesiis.com" className='' size='sm' />
                                    <small>Multiple addresses must be separated by a semi colon (;)</small>
                                </Form.Group> 
                                <Form.Group as={Col} xs={6} sm={4} className="mb-3" controlId="">
                                    <Form.Label>To Address <i>*</i></Form.Label>
                                    <Form.Control type="text" placeholder="sdb@genesiis.com" className='' size='sm' />
                                    <small>Multiple addresses must be separated by a semi colon (;)</small>
                                </Form.Group>                                
                            </Row>
                            <Row className="justify-content-end mt-3">
                                <Col md="auto">
                                    <Button size='sm' variant="primary" type="submit" className='filter-btn search-btn'>
                                        Update
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}

export default Emailconfig;