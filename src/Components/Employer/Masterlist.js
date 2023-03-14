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
import InputGroup from 'react-bootstrap/InputGroup';
import ListGroup from 'react-bootstrap/ListGroup';

function Masterlist () {  

    useEffect(() => {
        document.body.classList.add('masterlist','blue','defhider')
        return () => {
          document.body.classList.remove('masterlist','blue','defhider')
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
                            <h4>Master Data Maintenance</h4> 
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
                    <Col xs={12} sm={6} lg={4}> 
                        <div className='bx-1 bx-cmm'>
                            <p>You can customise these areas by adding new records. You have the total authorisation to change records according to your requirement and preference.</p>
                            <ListGroup as="ol" numbered variant="flush">
                                <ListGroup.Item as="li"><Link to="/Employer/Masterlist">Job Category - Company Preference</Link></ListGroup.Item>
                                <ListGroup.Item as="li"><Link to="/Employer/Masterlist">Branch/Job Location</Link></ListGroup.Item>
                                <ListGroup.Item as="li"><Link to="/Employer/Masterlist">Interview Status</Link></ListGroup.Item>
                                <ListGroup.Item as="li"><Link to="/Employer/Masterlist">Specific Question Type</Link></ListGroup.Item>
                                <ListGroup.Item as="li"><Link to="/Employer/Masterlist">Specific Question</Link></ListGroup.Item>
                                <ListGroup.Item as="li"><Link to="/Employer/Masterlist">Common Question Type</Link></ListGroup.Item>
                                <ListGroup.Item as="li"><Link to="/Employer/Masterlist">Common Question</Link></ListGroup.Item>
                                <ListGroup.Item as="li"><Link to="/Employer/Masterlist">Secret Question</Link></ListGroup.Item>
                                <ListGroup.Item as="li"><Link to="/Employer/Masterlist">Interview Grade</Link></ListGroup.Item>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} lg={4}> 
                        <div className='bx-2 bx-cmm'>
                            <p>Records can be added by selecting from the default set of records. If you need to add more or change records contact topjobs support team.</p>
                            <ListGroup as="ol" numbered variant="flush">
                                <ListGroup.Item as="li"><Link to="/Employer/Masterlist">Functional Area</Link></ListGroup.Item>
                                <ListGroup.Item as="li"><Link to="/Employer/Masterlist">Country</Link></ListGroup.Item>
                                <ListGroup.Item as="li"><Link to="/Employer/Masterlist">State/District</Link></ListGroup.Item>
                                <ListGroup.Item as="li"><Link to="/Employer/Masterlist">Job Category</Link></ListGroup.Item>
                                <ListGroup.Item as="li"><Link to="/Employer/Masterlist">Industry</Link></ListGroup.Item>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} lg={4}> 
                        <div className='bx-3 bx-cmm'>
                            <p>To avoid data manipulation and duplication only topjobs administrator has the authorisation for these fields. Please contact topjobs support team for more details.</p>
                            <ListGroup as="ol" numbered variant="flush">
                                <ListGroup.Item as="li"><Link to="/Employer/Masterlist">City</Link></ListGroup.Item>
                                <ListGroup.Item as="li"><Link to="/Employer/Masterlist">School Education</Link></ListGroup.Item>
                                <ListGroup.Item as="li"><Link to="/Employer/Masterlist">Scheme</Link></ListGroup.Item>
                                <ListGroup.Item as="li"><Link to="/Employer/Masterlist">Subject</Link></ListGroup.Item>
                                <ListGroup.Item as="li"><Link to="/Employer/Masterlist">Qualification Level</Link></ListGroup.Item>
                                <ListGroup.Item as="li"><Link to="/Employer/Masterlist">Qualification</Link></ListGroup.Item>
                                <ListGroup.Item as="li"><Link to="/Employer/Masterlist">Qualification Sector</Link></ListGroup.Item>
                                <ListGroup.Item as="li"><Link to="/Employer/Masterlist">Language</Link></ListGroup.Item>
                                <ListGroup.Item as="li"><Link to="/Employer/Masterlist">Membership</Link></ListGroup.Item>
                                <ListGroup.Item as="li"><Link to="/Employer/Masterlist">Research</Link></ListGroup.Item>
                                <ListGroup.Item as="li"><Link to="/Employer/Masterlist">Institute Type</Link></ListGroup.Item>
                                <ListGroup.Item as="li"><Link to="/Employer/Masterlist">Institute</Link></ListGroup.Item>
                                <ListGroup.Item as="li"><Link to="/Employer/Masterlist">Faculty</Link></ListGroup.Item>
                                <ListGroup.Item as="li"><Link to="/Employer/Masterlist">Course</Link></ListGroup.Item>
                                <ListGroup.Item as="li"><Link to="/Employer/Masterlist">Courses in Institutes</Link></ListGroup.Item>
                            </ListGroup>
                        </div>
                    </Col>
                </Row>
                <Form>
                    <Row className='h-100'>
                        <Col xs={12} sm={12}>
                            <div className='mastertop'>
                                <h4 className='fs-6'>Job Category - Company Preference</h4>
                                <p>This Table maintains the list of Job Categories which can be customized by the company as their preferences.</p>
                                <InputGroup className="mb-3 w-40" size='sm'>
                                    <Form.Control
                                    placeholder=""
                                    aria-label=""
                                    aria-describedby="basic-addon2"
                                    />
                                    <Button variant="outline-secondary" id="button-addon2" className='search-btn'>
                                    Search
                                    </Button>
                                </InputGroup>
                            </div>
                        </Col>
                        <Col xs={12} className='prel mb-4'>
                            <div className='pagin-wrapper'>
                                <p> 1 - 20 of 2426 Applicants(s) in 122 page(s) </p><Pagination size="sm">{items}</Pagination>
                            </div>              
                        </Col>
                        <Col xs={12} sm={6}>
                            <Button size='sm' variant="danger" type="submit" className='filter-btn me-2 ms-0'>
                                Delete Checked
                            </Button>
                            <Button size='sm' variant="primary" type="submit" className='filter-btn search-btn ms-0'>
                                Add New Record
                            </Button>
                        </Col> 
                        <Col xs={12} sm={6}>
                        <Form.Select size='sm' aria-label="Default select example" className='w-40 f-r'>
                            <option>No of records per page</option>
                            <option value="1">20</option>
                            <option value="2">30</option>
                            <option value="3">40</option>
                        </Form.Select>
                        </Col>
                        <Col xs={12} className='prel mt-3'>
                            <Table striped hover responsive className='masterlist-tbl'>
                                <thead>
                                    <tr>
                                        <th><i className="fa-solid fa-trash-can"></i></th>
                                        <th>#</th>
                                        <th>Edit</th>
                                        <th>Job Category</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><Form.Check type="checkbox" label="" /></td>
                                        <td>1</td>
                                        <td><Link to='/Employer/Masterlist'><i className="fa-regular fa-pen-to-square"></i></Link></td>
                                        <td>Accounting</td>
                                    </tr>
                                    <tr>
                                        <td><Form.Check type="checkbox" label="" /></td>
                                        <td>2</td>
                                        <td><Link to='/Employer/Masterlist'><i className="fa-regular fa-pen-to-square"></i></Link></td>
                                        <td>Employeristration</td>
                                    </tr>
                                    <tr>
                                        <td><Form.Check type="checkbox" label="" /></td>
                                        <td>3</td>
                                        <td><Link to='/Employer/Masterlist'><i className="fa-regular fa-pen-to-square"></i></Link></td>
                                        <td>Advertising</td>
                                    </tr>
                                    <tr>
                                        <td><Form.Check type="checkbox" label="" /></td>
                                        <td>4</td>
                                        <td><Link to='/Employer/Masterlist'><i className="fa-regular fa-pen-to-square"></i></Link></td>
                                        <td>Agriculture/Plantation</td>
                                    </tr>
                                    <tr>
                                        <td><Form.Check type="checkbox" label="" /></td>
                                        <td>5</td>
                                        <td><Link to='/Employer/Masterlist'><i className="fa-regular fa-pen-to-square"></i></Link></td>
                                        <td>Analysis</td>
                                    </tr>
                                    <tr>
                                        <td><Form.Check type="checkbox" label="" /></td>
                                        <td>6</td>
                                        <td><Link to='/Employer/Masterlist'><i className="fa-regular fa-pen-to-square"></i></Link></td>
                                        <td>Architects</td>
                                    </tr>
                                </tbody>
                            </Table>               
                        </Col> 
                        <Col xs={12} sm={12}>
                            <Button size='sm' variant="danger" type="submit" className='filter-btn me-2 ms-0'>
                                Delete Checked
                            </Button>
                            <Button size='sm' variant="primary" type="submit" className='filter-btn search-btn ms-0'>
                                Add New Record
                            </Button>
                        </Col>                       
                    </Row>
                </Form>
            </Container>
        </React.Fragment>
    );
}

export default Masterlist;