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
import Superadminheader from '../Common/Superadminheader';

function Emailconfig () {  

    useEffect(() => {
        document.body.classList.add('saemailconfig','red','defhider')
        return () => {
          document.body.classList.remove('saemailconfig','red','defhider')
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
                        <h1 className='suadmin-page-title'>Email Configuration</h1>
                    </Col>
                </Row>
                <Row className='mb-3'>
                    <Col xs={12} sm={12} lg={5}> 
                        <Table striped hover responsive className='masterlist-tbl'>
                            <thead>
                                <tr>
                                    <th>Email Type</th>
                                    <th>Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan={2}>
                                        <b>Organisation</b>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Email sent to organisation after activation of an organisation</td>
                                    <td><Link to='/Superadmin/Email'><i className="fa-regular fa-pen-to-square"></i></Link></td>
                                </tr>
                                <tr>
                                    <td>Email Sent to organisation when the forgot password is recovered</td>
                                    <td><Link to='/Superadmin/Email'><i className="fa-regular fa-pen-to-square"></i></Link></td>
                                </tr>
                                <tr>
                                    <td>Email sent to admin after an orgaisation registration</td>
                                    <td><Link to='/Superadmin/Email'><i className="fa-regular fa-pen-to-square"></i></Link></td>
                                </tr>
                                <tr>
                                    <td>Email sent to organisation after a successful registration</td>
                                    <td><Link to='/Superadmin/Email'><i className="fa-regular fa-pen-to-square"></i></Link></td>
                                </tr>
                                <tr>
                                    <td>Agent Account Lockout email</td>
                                    <td><Link to='/Superadmin/Email'><i className="fa-regular fa-pen-to-square"></i></Link></td>
                                </tr>
                                <tr>
                                    <td>Email sent to organisation users, when they change their password after password is expired.</td>
                                    <td><Link to='/Superadmin/Email'><i className="fa-regular fa-pen-to-square"></i></Link></td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>
                                        <b>Applicant</b>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Email Sent to applicant when the forgot password is recovered</td>
                                    <td><Link to='/Superadmin/Email'><i className="fa-regular fa-pen-to-square"></i></Link></td>
                                </tr>
                                <tr>
                                    <td>Email sent to applicant with a successful registration</td>
                                    <td><Link to='/Superadmin/Email'><i className="fa-regular fa-pen-to-square"></i></Link></td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>
                                        <b>topjobs Campus</b>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Email Sent to applicant when an applicant is expired from topjobs Campus</td>
                                    <td><Link to='/Superadmin/Email'><i className="fa-regular fa-pen-to-square"></i></Link></td>
                                </tr>
                                <tr>
                                    <td>Email sent to Applicant when applicant joins topjobs Campus</td>
                                    <td><Link to='/Superadmin/Email'><i className="fa-regular fa-pen-to-square"></i></Link></td>
                                </tr>
                                <tr>
                                    <td>Email sent to course coordinator when applicant joins topjobs Campus</td>
                                    <td><Link to='/Superadmin/Email'><i className="fa-regular fa-pen-to-square"></i></Link></td>
                                </tr>
                                <tr>
                                    <td>Email sent to topjobs when applicant joins topjobs Campus</td>
                                    <td><Link to='/Superadmin/Email'><i className="fa-regular fa-pen-to-square"></i></Link></td>
                                </tr>
                                <tr>
                                    <td>Email Sent to applicant when an applicant registration is about to expire</td>
                                    <td><Link to='/Superadmin/Email'><i className="fa-regular fa-pen-to-square"></i></Link></td>
                                </tr>
                                <tr>
                                    <td>Email sent to Applicant on Cancellation of participation in topjobs Campus</td>
                                    <td><Link to='/Superadmin/Email'><i className="fa-regular fa-pen-to-square"></i></Link></td>
                                </tr>
                                <tr>
                                    <td>Email Sent to applicant when an applicant is Unverified from topjobs Campus</td>
                                    <td><Link to='/Superadmin/Email'><i className="fa-regular fa-pen-to-square"></i></Link></td>
                                </tr>
                                <tr>
                                    <td>Email Sent to applicant when topjobs Campus participation is verified by the course coordinator</td>
                                    <td><Link to='/Superadmin/Email'><i className="fa-regular fa-pen-to-square"></i></Link></td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>
                                        <b>Hot Job</b>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Email sent to DEFZZZ companies when their hot job expires</td>
                                    <td><Link to='/Superadmin/Email'><i className="fa-regular fa-pen-to-square"></i></Link></td>
                                </tr>
                                <tr>
                                    <td>Email sent to TopAd Companies when the the job extended</td>
                                    <td><Link to='/Superadmin/Email'><i className="fa-regular fa-pen-to-square"></i></Link></td>
                                </tr>
                                <tr>
                                    <td>Email sent to TopAd Companies when the the job is closed manually</td>
                                    <td><Link to='/Superadmin/Email'><i className="fa-regular fa-pen-to-square"></i></Link></td>
                                </tr>
                                <tr>
                                    <td>Email sent to DEFZZZ companies when their hot job starts</td>
                                    <td><Link to='/Superadmin/Email'><i className="fa-regular fa-pen-to-square"></i></Link></td>
                                </tr>
                                <tr>
                                    <td>Email sent to DEFZZZ companies when their reopened hot job expires</td>
                                    <td><Link to='/Superadmin/Email'><i className="fa-regular fa-pen-to-square"></i></Link></td>
                                </tr>
                            </tbody>
                        </Table>  
                    </Col>
                    <Col xs={12} sm={12} lg={7}> 
                        <h5 className='fs-6'>Configuration</h5>
                        <Form className='filter-frm mb-3'>
                            <Row>
                                <Form.Group as={Col} xs={12} sm={6} className="mb-3" controlId="">
                                    <Form.Label>Email Type</Form.Label>
                                    <Form.Control type="text" placeholder="Email sent to organisation after activation of an organisation" size='sm'/>
                                </Form.Group>
                                <Form.Group as={Col} xs={12} sm={6} className="mb-3" controlId="">
                                    <Form.Label>Email Subject <i>*</i></Form.Label>
                                    <Form.Control type="text" placeholder="Account activation on TopJobs" size='sm' />
                                </Form.Group>
                                <Form.Group as={Col} xs={12} sm={12} className="mb-3" controlId="">
                                    <Form.Label>Email Content <i>*</i></Form.Label>
                                    <Form.Control as="textarea" type="text" placeholder="Dear Sir/Madam
                                    Your organisation registration with the topjobs has been activated. You may use your topjobs Online Account ID and password to access all of topjobs services, from vacancy submission, to applicant registration, to search for suitable applicants, and more. Call us on 0117765645 to obtain your Account ID and password. Thank you for registering with topjobs." size='sm' rows={10} cols={60} />
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
                                    <Form.Label>CC</Form.Label>
                                    <Form.Control type="text" placeholder="sdb@genesiis.com" className='' size='sm' />
                                </Form.Group> 
                                <Form.Group as={Col} xs={6} sm={4} className="mb-3" controlId="">
                                    <Form.Label>BCC</Form.Label>
                                    <Form.Control type="text" placeholder="sdb@genesiis.com" className='' size='sm' />
                                </Form.Group> 
                                <Form.Group as={Col} xs={6} sm={4} className="mb-3" controlId="">
                                    <Form.Label>Return Address</Form.Label>
                                    <Form.Control type="text" placeholder="sdb@genesiis.com" className='' size='sm' />
                                </Form.Group>                                 
                            </Row>
                            <Row className="justify-content-end mt-3">
                                <Col md="auto">
                                    <Button size='sm' variant="primary" type="submit" className='filter-btn search-btn'>
                                        <i className="fa-solid fa-floppy-disk"></i> Update
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