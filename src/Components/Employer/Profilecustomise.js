import React from 'react';
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Pagination from 'react-bootstrap/Pagination';
import { Table } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

function Profilecustomise () {  

    useEffect(() => {
        document.body.classList.add('profilecustomise','blue','defhider')
        return () => {
          document.body.classList.remove('profilecustomise','blue','defhider')
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
                            <h4>Profile Customisation</h4> 
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
                                    <Accordion defaultActiveKey={['0']} alwaysOpen>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Personal Details</Accordion.Header>
                                            <Accordion.Body>
                                                <Table responsive striped hover borderless>
                                                    <thead>
                                                        <tr>
                                                            <th></th>
                                                            <th>PDF</th>
                                                            <th>EXCEL</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Address</td>
                                                            <td><Form.Check aria-label="option 1" /></td>
                                                            <td><Form.Check aria-label="option 1" /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Telephone</td>
                                                            <td><Form.Check aria-label="option 1" /></td>
                                                            <td><Form.Check aria-label="option 1" /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Mobile</td>
                                                            <td><Form.Check aria-label="option 1" /></td>
                                                            <td><Form.Check aria-label="option 1" /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Fax</td>
                                                            <td><Form.Check aria-label="option 1" /></td>
                                                            <td><Form.Check aria-label="option 1" /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Email</td>
                                                            <td><Form.Check aria-label="option 1" /></td>
                                                            <td><Form.Check aria-label="option 1" /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Web Site</td>
                                                            <td><Form.Check aria-label="option 1" /></td>
                                                            <td><Form.Check aria-label="option 1" /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>National Identity Card No.</td>
                                                            <td><Form.Check aria-label="option 1" /></td>
                                                            <td><Form.Check aria-label="option 1" /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Passport No.</td>
                                                            <td><Form.Check aria-label="option 1" /></td>
                                                            <td><Form.Check aria-label="option 1" /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Notice Period</td>
                                                            <td><Form.Check aria-label="option 1" /></td>
                                                            <td><Form.Check aria-label="option 1" /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Race</td>
                                                            <td><Form.Check aria-label="option 1" /></td>
                                                            <td><Form.Check aria-label="option 1" /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Religion</td>
                                                            <td><Form.Check aria-label="option 1" /></td>
                                                            <td><Form.Check aria-label="option 1" /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Expected Salary</td>
                                                            <td><Form.Check aria-label="option 1" /></td>
                                                            <td><Form.Check aria-label="option 1" /></td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>Experience</Accordion.Header>
                                            <Accordion.Body>
                                                <Table responsive striped hover borderless>
                                                    <thead>
                                                        <tr>
                                                            <th></th>
                                                            <th>PDF</th>
                                                            <th>EXCEL</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Organisation</td>
                                                            <td><Form.Check aria-label="option 1" /></td>
                                                            <td><Form.Check aria-label="option 1" /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Description</td>
                                                            <td><Form.Check aria-label="option 1" /></td>
                                                            <td><Form.Check aria-label="option 1" /></td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>Higher Education</Accordion.Header>
                                            <Accordion.Body>
                                                <Table responsive striped hover borderless>
                                                    <thead>
                                                        <tr>
                                                            <th></th>
                                                            <th>PDF</th>
                                                            <th>EXCEL</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Institute</td>
                                                            <td><Form.Check aria-label="option 1" /></td>
                                                            <td><Form.Check aria-label="option 1" /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Results</td>
                                                            <td><Form.Check aria-label="option 1" /></td>
                                                            <td><Form.Check aria-label="option 1" /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Qualification Description</td>
                                                            <td><Form.Check aria-label="option 1" /></td>
                                                            <td><Form.Check aria-label="option 1" /></td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header>School Education</Accordion.Header>
                                            <Accordion.Body>
                                                <Table responsive striped hover borderless>
                                                    <thead>
                                                        <tr>
                                                            <th></th>
                                                            <th>PDF</th>
                                                            <th>EXCEL</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>School/Institute</td>
                                                            <td><Form.Check aria-label="option 1" /></td>
                                                            <td><Form.Check aria-label="option 1" /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Description</td>
                                                            <td><Form.Check aria-label="option 1" /></td>
                                                            <td><Form.Check aria-label="option 1" /></td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="4">
                                            <Accordion.Header>Membership</Accordion.Header>
                                            <Accordion.Body>
                                                <Table responsive striped hover borderless>
                                                    <thead>
                                                        <tr>
                                                            <th></th>
                                                            <th>PDF</th>
                                                            <th>EXCEL</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Membership</td>
                                                            <td><Form.Check aria-label="option 1" /></td>
                                                            <td><Form.Check aria-label="option 1" /></td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="5">
                                            <Accordion.Header>Language</Accordion.Header>
                                            <Accordion.Body>
                                                <Table responsive striped hover borderless>
                                                    <thead>
                                                        <tr>
                                                            <th></th>
                                                            <th>PDF</th>
                                                            <th>EXCEL</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Language</td>
                                                            <td><Form.Check aria-label="option 1" /></td>
                                                            <td><Form.Check aria-label="option 1" /></td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="6">
                                            <Accordion.Header>Research</Accordion.Header>
                                            <Accordion.Body>
                                                <Table responsive striped hover borderless>
                                                    <thead>
                                                        <tr>
                                                            <th></th>
                                                            <th>PDF</th>
                                                            <th>EXCEL</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Research</td>
                                                            <td><Form.Check aria-label="option 1" /></td>
                                                            <td><Form.Check aria-label="option 1" /></td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="7">
                                            <Accordion.Header>Achievements</Accordion.Header>
                                            <Accordion.Body>
                                                <Table responsive striped hover borderless>
                                                    <thead>
                                                        <tr>
                                                            <th></th>
                                                            <th>PDF</th>
                                                            <th>EXCEL</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Achievements</td>
                                                            <td><Form.Check aria-label="option 1" /></td>
                                                            <td><Form.Check aria-label="option 1" /></td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="8">
                                            <Accordion.Header>Referee</Accordion.Header>
                                            <Accordion.Body>
                                                <Table responsive striped hover borderless>
                                                    <thead>
                                                        <tr>
                                                            <th></th>
                                                            <th>PDF</th>
                                                            <th>EXCEL</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Address</td>
                                                            <td><Form.Check aria-label="option 1" /></td>
                                                            <td><Form.Check aria-label="option 1" /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Telephone</td>
                                                            <td><Form.Check aria-label="option 1" /></td>
                                                            <td><Form.Check aria-label="option 1" /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Email</td>
                                                            <td><Form.Check aria-label="option 1" /></td>
                                                            <td><Form.Check aria-label="option 1" /></td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="9">
                                            <Accordion.Header>Family Information</Accordion.Header>
                                            <Accordion.Body>
                                                <Table responsive striped hover borderless>
                                                    <thead>
                                                        <tr>
                                                            <th></th>
                                                            <th>PDF</th>
                                                            <th>EXCEL</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Family Information</td>
                                                            <td><Form.Check aria-label="option 1" /></td>
                                                            <td><Form.Check aria-label="option 1" /></td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="10">
                                            <Accordion.Header>Job Preference</Accordion.Header>
                                            <Accordion.Body>
                                                <Table responsive striped hover borderless>
                                                    <thead>
                                                        <tr>
                                                            <th></th>
                                                            <th>PDF</th>
                                                            <th>EXCEL</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Job Preference</td>
                                                            <td><Form.Check aria-label="option 1" /></td>
                                                            <td><Form.Check aria-label="option 1" /></td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="11">
                                            <Accordion.Header>Job Location</Accordion.Header>
                                            <Accordion.Body>
                                                <Table responsive striped hover borderless>
                                                    <thead>
                                                        <tr>
                                                            <th></th>
                                                            <th>PDF</th>
                                                            <th>EXCEL</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Job Location</td>
                                                            <td><Form.Check aria-label="option 1" /></td>
                                                            <td><Form.Check aria-label="option 1" /></td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Col>                             
                            </Row>
                            <Row className="justify-content-end mt-3">
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

export default Profilecustomise;