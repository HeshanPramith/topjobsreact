import React, { useState } from 'react';
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Superadminheader from '../Common/Superadminheader';
// import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Collapse from 'react-bootstrap/Collapse';
import Pagination from 'react-bootstrap/Pagination';
import { Link } from 'react-router-dom';

function Tjtstmonial () {  

    useEffect(() => {
        document.body.classList.add('tjtstmonial','red','defhider')
        return () => {
          document.body.classList.remove('tjtstmonial','red','defhider')
        }
    }, [])

    const [open, setOpen] = useState(false);

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
                        <h1 className='suadmin-page-title'>Manage Testimonials</h1>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} className='mb-3'>
                        <Button size='sm' className='me-2 add-btn'><i className="fa-solid fa-square-plus"></i> Add New Record</Button>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Form className='filter-frm mb-3'>
                            <Row>
                                <Form.Group as={Col} xs={6} sm={6} className="mb-3" controlId="">
                                    <Form.Label>Search</Form.Label>
                                    <Form.Control type="text" placeholder="Code" size='sm' />
                                </Form.Group>
                                <Form.Group as={Col} xs={2} sm={1} className="mb-3" controlId="">
                                    <Form.Label>Records per page</Form.Label>
                                    <Form.Select defaultValue="Select" className=' me-2' size='sm'>
                                        <option>10</option>
                                        <option>20</option>
                                        <option>30</option>
                                        <option>40</option>
                                    </Form.Select>
                                </Form.Group>
                            </Row>
                            <Row className="justify-content-end mt-3">
                                <Col md="auto">
                                    <Button size='sm' variant="primary" type="submit" className='filter-btn search-btn'>
                                        <i className="fa-solid fa-magnifying-glass"></i> Search
                                    </Button>
                                    <Button size='sm' variant="danger" type="submit" className='filter-btn'>
                                        <i className="fa-solid fa-broom"></i> Clear
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
                <Form>
                    <Row>
                        <Col xs={12} className='mb-3'>
                            <Button size='sm' className='delete-btn'><i className="fa-solid fa-eye-slash"></i> Hide Checked</Button>
                        </Col>
                    </Row>
                    <Row className='h-100'>
                        <Col xs={12} className='prel'>
                            <div className='pagin-wrapper'>
                                <p>Showing 1 to 10 of 21 entries </p><Pagination size="sm">{items}</Pagination>
                            </div>              
                        </Col>
                        <Col xs={12} className='prel mt-3'>
                            <Table striped hover responsive className='appsearch-tbl'>
                                <thead>
                                    <tr>
                                        <th width="50px"><Form.Check type="checkbox" label="" /></th>
                                        <th width="50px">#</th>
                                        <th width="100px">Category</th>
                                        <th width="180px">Name</th>
                                        <th width="700px">Testimonial</th>
                                        <th width="180px">Testimonial Received Date</th>
                                        <th width="70px">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><Form.Check type="checkbox" label="" /></td>
                                        <td><Link to='/Superadmin/Tjtstmonial' onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}>1</Link></td>
                                        <td>Employer</td>
                                        <td>Not Given</td>
                                        <td>Thank you very much for the training provided it was a good refresher and helped us sort out some of the queries that we had. Thank you for your help in coordinating the same and a special thanks to support team for facilitating the session for us. Thank you for the support rendered by the topjobs team at all times.</td>
                                        <td>Not specified</td>
                                        <td>Shown</td>
                                    </tr>
                                    <tr>
                                        <td><Form.Check type="checkbox" label="" /></td>
                                        <td><Link to='/Superadmin/Tjtstmonial'>2</Link></td>
                                        <td>Employer</td>
                                        <td>Not Given</td>
                                        <td>You have been providing us with a world-class customer service, both for (company name withheld) and during my time at (company name withheld). Thank you for the excellent customer service and keep up the good work.</td>
                                        <td>Not specified</td>
                                        <td>Shown</td>
                                    </tr>
                                    <tr>
                                        <td><Form.Check type="checkbox" label="" /></td>
                                        <td><Link to='/Superadmin/Tjtstmonial'>3</Link></td>
                                        <td>Employer</td>
                                        <td>Not Given</td>
                                        <td>I have been flooded with responses & emails - too many in fact!</td>
                                        <td>Not specified</td>
                                        <td>Shown</td>
                                    </tr>
                                    <tr>
                                        <td><Form.Check type="checkbox" label="" /></td>
                                        <td><Link to='/Superadmin/Tjtstmonial'>4</Link></td>
                                        <td>Employer</td>
                                        <td>Not Given</td>
                                        <td>Your organization gave a very big contribution to fulfill our requirement. By advertising on topjobs we were able to recruit 21 tradesmen. I thank topjobs on behalf of my regiment</td>
                                        <td>Not specified</td>
                                        <td>Shown</td>
                                    </tr>
                                    <tr>
                                        <td><Form.Check type="checkbox" label="" /></td>
                                        <td><Link to='/Superadmin/Tjtstmonial'>5</Link></td>
                                        <td>Employer</td>
                                        <td>Vimal Perera</td>
                                        <td>Just a comment on the topjobs service, which I should not hesitate to say is hard to find - a service extended by ALL staff members of topjobs. I was personally following an issue a few days back when the passwords were not recognized; you were very helpful as we were so badly in need to get printouts of the jobseeker profiles in preparation for interviews with the foreign principals. I must be thankful to topjobs for creating a new era for foreign recruitment in Sri Lanka as recently I published a vacancy and there were many Sri Lankans already employed in the Middle East who applied. After we shortlisted we got our principals to interview and an applicant from Doha-Qatar was selected for post of Accounts Manager for a monthly salary of USD.5000/- Cheers.</td>
                                        <td>Not specified</td>
                                        <td>Shown</td>
                                    </tr>
                                </tbody>
                            </Table>               
                        </Col>                        
                    </Row>
                    <Collapse in={open}>
                        <div id="example-collapse-text">
                            <Form className='filter-frm mt-3 mb-3'>
                                <Row>
                                    <Col xs={12} className='mb-3'>
                                        <h1 className='suadmin-page-title'>Edit Selected Testimonials</h1>
                                    </Col>
                                </Row>
                                <Row>
                                    <Form.Group as={Col} xs={6} sm={6} md={3} className="mb-3" controlId="">
                                        <Form.Label>Testimonial Code</Form.Label>
                                        <Form.Control type="text" placeholder="1" size='sm' disabled />
                                    </Form.Group>
                                    <Form.Group as={Col} xs={6} sm={6} md={3} className="mb-3" controlId="">
                                        <Form.Label>Category <i>*</i></Form.Label>
                                        <Form.Select defaultValue="Select" className=' me-2' size='sm'>
                                            <option>Employer</option>
                                            <option>Job Seeker</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group as={Col} xs={6} sm={6} md={3} className="mb-3" controlId="">
                                        <Form.Label>Company Name <i>*</i></Form.Label>
                                        <Form.Control type="text" placeholder="Smart Quest Pvt Ltd" size='sm' />
                                    </Form.Group>
                                    <Form.Group as={Col} xs={6} sm={6} md={3} className="mb-3" controlId="">
                                        <Form.Label>Name <i>*</i></Form.Label>
                                        <Form.Control type="text" placeholder="Not Given" size='sm' />
                                    </Form.Group>
                                    <Form.Group as={Col} xs={6} sm={6} md={2} lg={1} className="mb-3" controlId="">
                                        <Form.Label>Name Withheld</Form.Label>
                                        <Form.Check
                                            type="switch"
                                            id="custom-switch"
                                            label=""
                                            size="md"
                                        />
                                    </Form.Group>
                                    <Form.Group as={Col} xs={6} sm={6} md={3} className="mb-3" controlId="">
                                        <Form.Label>Designation</Form.Label>
                                        <Form.Control type="text" placeholder="Human Resource Solutions" size='sm' />
                                    </Form.Group>
                                    <Form.Group as={Col} xs={6} sm={6} md={3} lg={2} className="mb-3" controlId="">
                                        <Form.Label>Designation Withheld</Form.Label>
                                        <Form.Check
                                            type="switch"
                                            id="custom-switch"
                                            label=""
                                            size="md"
                                        />
                                    </Form.Group>
                                    <Form.Group as={Col} xs={6} sm={6} md={3} className="mb-3" controlId="">
                                        <Form.Label>Location</Form.Label>
                                        <Form.Control type="text" placeholder="" size='sm' />
                                    </Form.Group>
                                    <Form.Group as={Col} xs={6} sm={6} md={3} className="mb-3" controlId="">
                                        <Form.Label>Profile Image</Form.Label>
                                        <Form.Control type="file" placeholder="" size='sm' />
                                    </Form.Group>
                                    <Form.Group as={Col} xs={12} sm={12} className="mb-3" controlId="">
                                        <Form.Label>Testimonial</Form.Label>
                                        <Form.Control as="textarea" rows={5} type="text" placeholder="Thank you very much for the training provided it was a good refresher and helped us sort out some of the queries that we had. Thank you for your help in coordinating the same and a special thanks to support team for facilitating the session for us. Thank you for the support rendered by the topjobs team at all times." size='sm' />
                                    </Form.Group>
                                    <Form.Group as={Col} xs={6} sm={3} className="mb-3" controlId="">
                                        <Form.Label>Testimonial Received Date</Form.Label>
                                        <Form.Control type="text" placeholder="" size='sm' disabled />
                                    </Form.Group>
                                    <Form.Group as={Col} xs={6} sm={4} md={2} className="mb-3" controlId="">
                                        <Form.Label>Status</Form.Label>
                                        <Form.Check type="radio" name="group111" aria-label="radio 1" label="Hide"/>
                                        <Form.Check type="radio" name="group111" aria-label="radio 3" label="Show"/>
                                    </Form.Group>
                                    <Form.Group as={Col} xs={6} sm={3} className="mb-3" controlId="">
                                        <Form.Label>Last Updated User</Form.Label>
                                        <Form.Control type="text" placeholder="SuperAdmin" size='sm' disabled />
                                    </Form.Group>
                                </Row>
                            </Form>
                            <Row>
                                <Col xs={12} className='mb-3'>
                                    <Button size='sm' className='me-2 add-btn'><i className="fa-regular fa-floppy-disk"></i> Update</Button>
                                </Col>
                            </Row>
                        </div>
                    </Collapse>
                </Form>
            </Container>
        </React.Fragment>
    );
}

export default Tjtstmonial;