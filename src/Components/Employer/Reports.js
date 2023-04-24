import React, { useState } from 'react';
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import DatePicker from "react-datepicker";
import { CChart } from '@coreui/react-chartjs';

function Reports () {  

    useEffect(() => {
        document.body.classList.add('reports','blue','defhider')
        return () => {
          document.body.classList.remove('reports','blue','defhider')
        }
    }, [])

    const [startDate, setStartDate] = useState(new Date());    
    
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
                            <h4>Reports</h4> 
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
                    <Col xs={12} className='mt-0'>
                        <Alert variant='primary' className='p-2 text-center rounded-2'>
                            You need to have the security permissions to view each report. If you receive an 'Access Denied' error when clicking on a report, please request the Administrator to give you the necessary permissions
                        </Alert>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Form className='filter-frm mb-3'>
                            <Row>
                                <Form.Group as={Col} xs={6} sm={6} md={3} className="mb-3" controlId="">
                                    <Form.Label>Vacancy</Form.Label>
                                    <Form.Select className='me-2' size='sm'>
                                        <optgroup label="Vacancy Reports">
                                            <option value="vr3">VR3. Vacancy Age</option>
                                            <option value="vr4">VR4. Vacancy Application Summary</option>
                                        </optgroup>
                                        <optgroup label="Employer Reports">
                                            <option value="sr1">SR1. Monthly Summary</option>
                                        </optgroup>                                        
                                        <optgroup label="Applicant Reports">
                                            <option value="vr1">VR1. List Applicants for a Vacancy</option>
                                            <option value="ar3">AR3. Open Applications</option>
                                            <option value="ar5">AR5. Applicants By Job Category</option>
                                            <option value="ar6">AR6. Applications Via Email</option>
                                        </optgroup>
                                        <optgroup label="Statistic Reports">
                                            <option value="st1">ST1. Home Page Views</option>
                                            <option value="st2">ST2. Vacancy Views</option>
                                            <option value="st3">ST3. Company Entered Applicant Stats</option>
                                            <option value="st4">ST4. System Login Stats</option>
                                        </optgroup>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group as={Col} xs={6} sm={6} md={3} className="mb-3" controlId="">
                                    <Form.Label>Vacancy Code</Form.Label>
                                    <Form.Control type="text" placeholder="Vacancy Code" size='sm' />
                                    <small><Link to='/Employer/Reports' className='logout'>Get from list</Link></small>
                                </Form.Group>
                                <Form.Group as={Col} xs={6} sm={6} md={2} className="mb-3" controlId="">
                                    <Form.Label>Beginning Date</Form.Label>
                                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className='form-control form-control-sm' />
                                </Form.Group>
                                <Form.Group as={Col} xs={6} sm={6} md={2} className="mb-3" controlId="">
                                    <Form.Label>Ending Date</Form.Label>
                                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className='form-control form-control-sm' />
                                </Form.Group>                                
                            </Row>
                            <Row className="justify-content-end mt-3">
                                <Col md="auto">
                                    <Button size='sm' variant="primary" type="submit" className='filter-btn search-btn'>
                                        <i className="bi bi-eye me-2"></i>
                                        View Report
                                    </Button>
                                    <Button size='sm' variant="primary" type="submit" className='filter-btn delete-btn'>
                                        <i className="bi bi-eraser-fill me-2"></i>
                                        Clear Form
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <h6>VR3 - Vacancy Age</h6>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Row>
                            <Col md="12">
                                <Table bordered responsive striped hover className='caption-top'>
                                    <caption>Summary of the Vacancy</caption>
                                    <tbody>
                                        <tr>
                                            <td width={170}>Vacancy Code</td>
                                            <td>0000980811</td>
                                        </tr>
                                        <tr>
                                            <td>Vacancy/Job Position</td>
                                            <td>SENIOR SOFTWARE ENGINEER - Full Stack</td>
                                        </tr>
                                        <tr>
                                            <td>Submission Date</td>
                                            <td>2022-07-11</td>
                                        </tr>
                                        <tr>
                                            <td>Starting Date</td>
                                            <td>2022-07-23 </td>
                                        </tr>
                                        <tr>
                                            <td>Closing Date</td>
                                            <td>2022-07-25</td>
                                        </tr>
                                        <tr>
                                            <td>Total Applicants</td>
                                            <td>0</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                            <Col md="12">
                                <Table bordered responsive striped hover className='caption-top'>
                                    <caption>Summary of all Applicants</caption>
                                    <tbody>
                                        <tr>
                                            <td width={170}>Applied</td>
                                            <td className='text-end'>0</td>
                                            <td className='text-end'>0.00%</td>
                                        </tr>
                                        <tr>
                                            <td width={170}>Short Listed</td>
                                            <td className='text-end'>0</td>
                                            <td className='text-end'>0.00%</td>
                                        </tr>
                                        <tr>
                                            <td width={170}>Not Successfull</td>
                                            <td className='text-end'>0</td>
                                            <td className='text-end'>0.00%</td>
                                        </tr>
                                        <tr>
                                            <td width={170}>Temporarily List</td>
                                            <td className='text-end'>0</td>
                                            <td className='text-end'>0.00%</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                            <Col md="12">
                                <Table bordered responsive striped hover className='caption-top'>
                                    <caption>Summary of the Short Listed Applicants</caption>
                                    <tbody>
                                        <tr>
                                            <td width={170}>Not Interviewed</td>
                                            <td className='text-end'>0</td>
                                            <td className='text-end'>0.00%</td>
                                        </tr>
                                        <tr>
                                            <td width={170}>Offered the Job</td>
                                            <td className='text-end'>0</td>
                                            <td className='text-end'>0.00%</td>
                                        </tr>
                                        <tr>
                                            <td width={170}>Phone Interview</td>
                                            <td className='text-end'>0</td>
                                            <td className='text-end'>0.00%</td>
                                        </tr>
                                        <tr>
                                            <td width={170}>Exam</td>
                                            <td className='text-end'>0</td>
                                            <td className='text-end'>0.00%</td>
                                        </tr>
                                        <tr>
                                            <td width={170}>Second Interview</td>
                                            <td className='text-end'>0</td>
                                            <td className='text-end'>0.00%</td>
                                        </tr>
                                        <tr>
                                            <td width={170}>Final Interview</td>
                                            <td className='text-end'>0</td>
                                            <td className='text-end'>0.00%</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                            <Col md="12">
                                <Table bordered responsive striped hover className='caption-top'>
                                    <caption>Summary of the Not successful Applicants</caption>
                                    <tbody>
                                        <tr>
                                            <td width={170}>No Experience</td>
                                            <td className='text-end'>0</td>
                                            <td className='text-end'>0.00%</td>
                                        </tr>
                                        <tr>
                                            <td width={170}>Phone Interview Failed</td>
                                            <td className='text-end'>0</td>
                                            <td className='text-end'>0.00%</td>
                                        </tr>
                                        <tr>
                                            <td width={170}>Second Interview Failed</td>
                                            <td className='text-end'>0</td>
                                            <td className='text-end'>0.00%</td>
                                        </tr>
                                        <tr>
                                            <td width={170}>Exam Failed</td>
                                            <td className='text-end'>0</td>
                                            <td className='text-end'>0.00%</td>
                                        </tr>
                                        <tr>
                                            <td width={170}>Female</td>
                                            <td className='text-end'>0</td>
                                            <td className='text-end'>0.00%</td>
                                        </tr>
                                        <tr>
                                            <td width={170}>Overage</td>
                                            <td className='text-end'>0</td>
                                            <td className='text-end'>0.00%</td>
                                        </tr>
                                        <tr>
                                            <td width={170}>Outstation</td>
                                            <td className='text-end'>0</td>
                                            <td className='text-end'>0.00%</td>
                                        </tr>
                                        <tr>
                                            <td width={170}>Suitable - Keep for Later</td>
                                            <td className='text-end'>0</td>
                                            <td className='text-end'>0.00%</td>
                                        </tr>
                                        <tr>
                                            <td width={170}>High Salary</td>
                                            <td className='text-end'>0</td>
                                            <td className='text-end'>0.00%</td>
                                        </tr>
                                        <tr>
                                            <td width={170}>Overage</td>
                                            <td className='text-end'>0</td>
                                            <td className='text-end'>0.00%</td>
                                        </tr>
                                        <tr>
                                            <td width={170}>Poor Communication Skills</td>
                                            <td className='text-end'>0</td>
                                            <td className='text-end'>0.00%</td>
                                        </tr>
                                        <tr>
                                            <td width={170}>Not Interested</td>
                                            <td className='text-end'>0</td>
                                            <td className='text-end'>0.00%</td>
                                        </tr>
                                        <tr>
                                            <td width={170}>Not Contactable</td>
                                            <td className='text-end'>0</td>
                                            <td className='text-end'>0.00%</td>
                                        </tr>
                                        <tr>
                                            <td width={170}>Not Suitable</td>
                                            <td className='text-end'>0</td>
                                            <td className='text-end'>0.00%</td>
                                        </tr>
                                        <tr>
                                            <td width={170}>Unqualified</td>
                                            <td className='text-end'>0</td>
                                            <td className='text-end'>0.00%</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                        <Row className="justify-content-end">
                            <Col md="12">
                                <Button size='sm' variant="primary" type="submit" className='filter-btn add-btn m-0'>
                                    <i className="bi bi-printer-fill me-2"></i>
                                    Print
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6} className='mt-3 mt-md-0'>
                        <CChart type="polarArea"
                            data={{
                                labels: ['Vacancy', 'Applicants', 'Short Listed Applicants', 'Not successful Applicants'],
                                datasets: [
                                    {
                                        data: [11, 16, 7, 3],
                                        backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED'],
                                    },
                                ],
                            }}
                        />
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}

export default Reports;