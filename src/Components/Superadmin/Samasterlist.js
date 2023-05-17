import React from 'react';
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Pagination from 'react-bootstrap/Pagination';
import InputGroup from 'react-bootstrap/InputGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import Superadminheader from '../Common/Superadminheader';

function Masterlist () {  

    useEffect(() => {
        document.body.classList.add('masterlist','red','defhider')
        return () => {
          document.body.classList.remove('masterlist','red','defhider')
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
            <Superadminheader/>
            <Container fluid className='h-100 mt-4'>
                <Row>
                    <Col xs={12} className='mb-3'>
                        <h1 className='suadmin-page-title'>Master Data Maintenance</h1>
                    </Col>
                </Row>
                <Row className='mb-3'>
                    <Col xs={12} sm={6} lg={3}> 
                        <div className='bx-1 bx-cmm'>
                            <p className='d-flex align-items-center'>Modification here will only affect TJ SuperAdmin master records.</p>
                            <ListGroup as="ol" numbered variant="flush">
                                <ListGroup.Item as="li"><Link to="/Superadmin/Samasterlist">Secret Question</Link></ListGroup.Item>
                                <ListGroup.Item as="li"><Link to="/Superadmin/Samasterlist">Interview Grade</Link></ListGroup.Item>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} lg={3}> 
                        <div className='bx-2 bx-cmm'>
                            <p className='d-flex align-items-center'>Any modifications made to the record, will modify the client?s records as well. All clients will have the entire list of records and will have the privilege to choose the suitable record for their organizational requirements.</p>
                            <ListGroup as="ol" numbered variant="flush">
                                <ListGroup.Item as="li"><Link to="/Superadmin/Samasterlist">Functional Area</Link></ListGroup.Item>
                                <ListGroup.Item as="li"><Link to="/Superadmin/Samasterlist">Country</Link></ListGroup.Item>
                                <ListGroup.Item as="li"><Link to="/Superadmin/Samasterlist">State/District</Link></ListGroup.Item>
                                <ListGroup.Item as="li"><Link to="/Superadmin/Samasterlist">Job Category</Link></ListGroup.Item>
                                <ListGroup.Item as="li"><Link to="/Superadmin/Samasterlist">Industry</Link></ListGroup.Item>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} lg={3}> 
                        <div className='bx-3 bx-cmm'>
                            <p className='d-flex align-items-center'>Only TJ administrator has the authorisation to amend these records. Any modifications made to these record, will modify the client?s records as well. Clients only can view these records.</p>
                            <ListGroup as="ol" numbered variant="flush">
                                <ListGroup.Item as="li"><Link to="/Superadmin/Samasterlist">City</Link></ListGroup.Item>
                                <ListGroup.Item as="li"><Link to="/Superadmin/Samasterlist">School Education</Link></ListGroup.Item>
                                <ListGroup.Item as="li"><Link to="/Superadmin/Samasterlist">Scheme</Link></ListGroup.Item>
                                <ListGroup.Item as="li"><Link to="/Superadmin/Samasterlist">Subject</Link></ListGroup.Item>
                                <ListGroup.Item as="li"><Link to="/Superadmin/Samasterlist">Qualification Level</Link></ListGroup.Item>
                                <ListGroup.Item as="li"><Link to="/Superadmin/Samasterlist">Qualification</Link></ListGroup.Item>
                                <ListGroup.Item as="li"><Link to="/Superadmin/Samasterlist">Qualification Sector</Link></ListGroup.Item>
                                <ListGroup.Item as="li"><Link to="/Superadmin/Samasterlist">Language</Link></ListGroup.Item>
                                <ListGroup.Item as="li"><Link to="/Superadmin/Samasterlist">Membership</Link></ListGroup.Item>
                                <ListGroup.Item as="li"><Link to="/Superadmin/Samasterlist">Research</Link></ListGroup.Item>
                                <ListGroup.Item as="li"><Link to="/Superadmin/Samasterlist">Institute Type</Link></ListGroup.Item>
                                <ListGroup.Item as="li"><Link to="/Superadmin/Samasterlist">Institute</Link></ListGroup.Item>
                                <ListGroup.Item as="li"><Link to="/Superadmin/Samasterlist">Faculty</Link></ListGroup.Item>
                                <ListGroup.Item as="li"><Link to="/Superadmin/Samasterlist">Course</Link></ListGroup.Item>
                                <ListGroup.Item as="li"><Link to="/Superadmin/Samasterlist">Courses in Institutes</Link></ListGroup.Item>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} lg={3}> 
                        <div className='bx-4 bx-cmm'>
                            <p className='d-flex align-items-center'>Only TJ administrator has the authorisation to amend these records. Any modifications made to these record, will modify the client?s records as well. Clients only can not view these records.</p>
                            <ListGroup as="ol" numbered variant="flush">
                                <ListGroup.Item as="li"><Link to="/Superadmin/Samasterlist">Legal Status</Link></ListGroup.Item>
                                <ListGroup.Item as="li"><Link to="/Superadmin/Samasterlist">Banner Page</Link></ListGroup.Item>
                            </ListGroup>
                        </div>
                    </Col>
                </Row>
                <Form>
                    <Row className='h-100'>
                        <Col xs={12} sm={12}>
                            <div className='mastertop'>
                                <h4 className='fs-6'>Banner Page</h4>
                                <p>This Table maintains the list of Banner pages.</p>
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
                                        <th>Description</th>
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