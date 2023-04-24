import React from 'react';
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Pagination from 'react-bootstrap/Pagination';

function Agentemailalert () {  

    useEffect(() => {
        document.body.classList.add('agentemailalert','blue','defhider')
        return () => {
          document.body.classList.remove('agentemailalert','blue','defhider')
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
                            <h4>Email Alerts & Reports</h4> 
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
                <Row>
                    <Col xs={12}>
                        <Form className='mb-3'>
                            <Row>
                                <Col xs={12}>
                                    <Table striped hover responsive>
                                        <thead>
                                            <tr>
                                                <th>Email Alert</th>
                                                <th>Notify</th>
                                                <th>Send To</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>topjobs Vacancy Expiry Alert</td>
                                                <td>
                                                    <Form.Check type="radio" aria-label="radio 1" label="Yes" name="group1" />
                                                    <Form.Check type="radio" aria-label="radio 1" label="No" name="group1" />
                                                </td>
                                                <td><Form.Control className='form-control-sm' type="email" placeholder="sdb@genesiis.com" /></td>
                                            </tr>
                                            <tr>
                                                <td>topjobs: Jobseeker login summary</td>
                                                <td>
                                                    <Form.Check type="radio" aria-label="radio 1" label="Yes" name="group2" />
                                                    <Form.Check type="radio" aria-label="radio 1" label="No" name="group2" />
                                                </td>
                                                <td><Form.Control className='form-control-sm' type="email" placeholder="sdb@genesiis.com" /></td>
                                            </tr>
                                            <tr>
                                                <td>topjobs Vacancy Feedback Summary Alert</td>
                                                <td>
                                                    <Form.Check type="radio" aria-label="radio 1" label="Yes" name="group3" />
                                                    <Form.Check type="radio" aria-label="radio 1" label="No" name="group3" />
                                                </td>
                                                <td><Form.Control className='form-control-sm' type="email" placeholder="sdb@genesiis.com" /></td>
                                            </tr>
                                            <tr>
                                                <td>Reopened and Hotjob Vacancy Email Alert.</td>
                                                <td>
                                                    <Form.Check type="radio" aria-label="radio 1" label="Yes" name="group4" />
                                                    <Form.Check type="radio" aria-label="radio 1" label="No" name="group4" />
                                                </td>
                                                <td><Form.Control className='form-control-sm' type="email" placeholder="sdb@genesiis.com" /></td>
                                            </tr>
                                            <tr>
                                                <td>IPG Transaction Email Alert</td>
                                                <td>
                                                    <Form.Check type="radio" aria-label="radio 1" label="Yes" name="group5" />
                                                    <Form.Check type="radio" aria-label="radio 1" label="No" name="group5" />
                                                </td>
                                                <td><Form.Control className='form-control-sm' type="email" placeholder="sdb@genesiis.com" /></td>
                                            </tr>
                                            <tr>
                                                <td>topjobs Vacancy Open Alert</td>
                                                <td>
                                                    <Form.Check type="radio" aria-label="radio 1" label="Yes" name="group6" />
                                                    <Form.Check type="radio" aria-label="radio 1" label="No" name="group6" />
                                                </td>
                                                <td><Form.Control className='form-control-sm' type="email" placeholder="sdb@genesiis.com" /></td>
                                            </tr>
                                            <tr>
                                                <td>topjobs Vacancy extend Alert</td>
                                                <td>
                                                    <Form.Check type="radio" aria-label="radio 1" label="Yes" name="group7" />
                                                    <Form.Check type="radio" aria-label="radio 1" label="No" name="group7" />
                                                </td>
                                                <td><Form.Control className='form-control-sm' type="email" placeholder="sdb@genesiis.com" /></td>
                                            </tr>
                                            <tr>
                                                <td>topjobs Vacancy manual closing Alert</td>
                                                <td>
                                                    <Form.Check type="radio" aria-label="radio 1" label="Yes" name="group8" />
                                                    <Form.Check type="radio" aria-label="radio 1" label="No" name="group8" />
                                                </td>
                                                <td><Form.Control className='form-control-sm' type="email" placeholder="sdb@genesiis.com" /></td>
                                            </tr>
                                            <tr>
                                                <td>topjobs Monthly Summary</td>
                                                <td>
                                                    <Form.Check type="radio" aria-label="radio 1" label="Yes" name="group9" />
                                                    <Form.Check type="radio" aria-label="radio 1" label="No" name="group9" />
                                                </td>
                                                <td><Form.Control className='form-control-sm' type="email" placeholder="sdb@genesiis.com" /></td>
                                            </tr>
                                        </tbody>
                                    </Table>                                   
                                </Col>                             
                            </Row>
                            <Row className="justify-content-end">
                                <Col md="auto">
                                    <Button size='sm' variant="primary" type="submit" className='filter-btn search-btn'>
                                        <i className="bi bi-save2-fill me-2"></i>
                                        Save
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

export default Agentemailalert;