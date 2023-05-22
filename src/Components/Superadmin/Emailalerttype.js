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
// import Collapse from 'react-bootstrap/Collapse';
// import Pagination from 'react-bootstrap/Pagination';
import { Link } from 'react-router-dom';
import Collapse from 'react-bootstrap/Collapse';

function Emailalerttype () {  

    useEffect(() => {
        document.body.classList.add('emailalerttype','red','defhider')
        return () => {
          document.body.classList.remove('emailalerttype','red','defhider')
        }
    }, [])

    const [open, setOpen] = useState(false);
    
    return (
        <React.Fragment>
            <Superadminheader/>
            <Container fluid className='h-100 mt-4'>
                <Row>
                    <Col xs={12} className='mb-3'>
                        <h1 className='suadmin-page-title'>Email Alert Types</h1>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} className='mb-3'>
                        <Button size='sm' className='me-2 add-btn'><i className="fa-solid fa-square-plus"></i> Add New</Button>
                    </Col>
                </Row>
                <Form>
                    <Row className='h-100'>
                        <Col xs={12} className='prel mt-1'>
                            <Table striped hover responsive className='appsearch-tbl'>
                                <thead>
                                    <tr>
                                        <th><Form.Check type="checkbox" label="" /></th>
                                        <th>Alert Code</th>
                                        <th>Email Alert</th>
                                        <th>Edit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><Form.Check type="checkbox" label="" /></td>
                                        <td><Link to='/Superadmin/Emailalerttype' onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}>AGT_JOB_EXP</Link></td>
                                        <td>topjobs Vacancy Expiry Alert</td>
                                        <td><Link to='/Superadmin/Emailalerttype' onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}><i className="fa-regular fa-pen-to-square"></i></Link></td>
                                    </tr>
                                    <tr>
                                        <td><Form.Check type="checkbox" label="" /></td>
                                        <td><Link to='/Superadmin/Emailalerttype'>JS_LOGIN_SUMMARY</Link></td>
                                        <td>topjobs: Jobseeker login summary</td>
                                        <td><Link to='/Superadmin/Emailalerttype'><i className="fa-regular fa-pen-to-square"></i></Link></td>
                                    </tr>
                                    <tr>
                                        <td><Form.Check type="checkbox" label="" /></td>
                                        <td><Link to='/Superadmin/Emailalerttype'>VAC_FEDBAK_SUMMARY</Link></td>
                                        <td>topjobs Vacancy Feedback Summary Alert</td>
                                        <td><Link to='/Superadmin/Emailalerttype'><i className="fa-regular fa-pen-to-square"></i></Link></td>
                                    </tr>
                                    <tr>
                                        <td><Form.Check type="checkbox" label="" /></td>
                                        <td><Link to='/Superadmin/Emailalerttype'>VAC_REOP_SUMMARY</Link></td>
                                        <td>Reopened and Hotjob Vacancy Email Alert.</td>
                                        <td><Link to='/Superadmin/Emailalerttype'><i className="fa-regular fa-pen-to-square"></i></Link></td>
                                    </tr>
                                    <tr>
                                        <td><Form.Check type="checkbox" label="" /></td>
                                        <td><Link to='/Superadmin/Emailalerttype'>IPG_ALERT</Link></td>
                                        <td>IPG Transaction Email Alert</td>
                                        <td><Link to='/Superadmin/Emailalerttype'><i className="fa-regular fa-pen-to-square"></i></Link></td>
                                    </tr>
                                    <tr>
                                        <td><Form.Check type="checkbox" label="" /></td>
                                        <td><Link to='/Superadmin/Emailalerttype'>AGT_JOB_END</Link></td>
                                        <td>topjobs Vacancy About to Expire Alert</td>
                                        <td><Link to='/Superadmin/Emailalerttype'><i className="fa-regular fa-pen-to-square"></i></Link></td>
                                    </tr>
                                </tbody>
                            </Table>               
                        </Col>                        
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <Button type='submit' className='filter-btn delete-btn btn btn-primary btn-sm m-0'> <i className="fa-solid fa-trash-can"></i> Delete Selected Item</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} className='mt-4'>
                            <Collapse in={open}>
                                <div id="example-collapse-text">
                                    <Form className='filter-frm mb-3'>
                                        <Row>
                                            <Col xs={12} className='mb-3'>
                                                <h1 className='suadmin-page-title'>Edit Email Alert Types</h1>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Form.Group as={Col} xs={6} sm={6} md={3} className="mb-3" controlId="">
                                                <Form.Label>Email Alert Code <i>*</i></Form.Label>
                                                <Form.Control type="text" placeholder="AGT_JOB_EXP" size='sm' disabled />
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={3} className="mb-3" controlId="">
                                                <Form.Label>Alert Name <i>*</i></Form.Label>
                                                <Form.Control type="text" placeholder="topjobs Vacancy Expiry Alert" size='sm' />
                                            </Form.Group>
                                            <Form.Group as={Col} xs={12} sm={12} className="mb-3" controlId="">
                                                <Form.Label>Description <i>*</i></Form.Label>
                                                <Form.Control as="textarea" rows={5} type="text" placeholder="This will be an alert sent to you after a vacancy expired. It will be sent to you along with the response to the vacancy " size='sm' />
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={4} md={2} className="mb-3" controlId="">
                                                <Form.Label>Is Notify</Form.Label>
                                                <Form.Check type="radio" name="group111" aria-label="radio 1" label="Yes"/>
                                                <Form.Check type="radio" name="group111" aria-label="radio 3" label="No"/>
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={4} className="mb-3" controlId="">
                                                <Form.Label>Email Subject <i>*</i></Form.Label>
                                                <Form.Control type="text" placeholder="topjobs: Vacancy Expiry Notice" size='sm' />
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={4} className="mb-3" controlId="">
                                                <Form.Label>From Address <i>*</i></Form.Label>
                                                <Form.Control type="email" placeholder="support@topjobs.lk" size='sm' />
                                            </Form.Group>
                                            <Form.Group as={Col} xs={12} sm={12} className="mb-3" controlId="">
                                                <Form.Label>Email Header</Form.Label>
                                                <Form.Control as="textarea" rows={5} type="text" placeholder="Dear Sir/Madam," size='sm' />
                                            </Form.Group>
                                            <Form.Group as={Col} xs={12} sm={12} className="mb-3" controlId="">
                                                <Form.Label>Email Body</Form.Label>
                                                <Form.Control as="textarea" rows={5} type="text" placeholder="Please contact our sales team/support team for any inquiries or clarifications.

Email : ads@topjobs.lk/support@topjobs.lk
Phone : 011 7765645" size='sm' />
                                            </Form.Group>
                                            <Form.Group as={Col} xs={12} sm={12} className="mb-3" controlId="">
                                                <Form.Label>Email Footer</Form.Label>
                                                <Form.Control as="textarea" rows={5} type="text" placeholder="Best Regards,

topjobs Team
www.topjobs.lk" size='sm' />
                                            </Form.Group>
                                        </Row>
                                        <Row>
                                            <Col xs={12} className='mb-3'>
                                                
                                                <Form.Group as={Col} xs={6} sm={3} className="mb-3" controlId="">
                                                    <Form.Label>Description</Form.Label>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </Form>
                                    <Row>
                                        <Col xs={12} className='mb-3'>
                                            <Button size='sm' className='me-2 add-btn'><i className="fa-regular fa-floppy-disk"></i> Update</Button>
                                        </Col>
                                    </Row>
                                </div>
                            </Collapse>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </React.Fragment>
    );
}

export default Emailalerttype;