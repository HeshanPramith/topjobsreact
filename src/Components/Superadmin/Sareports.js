import React, { useState } from 'react';
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import { Link } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import DatePicker from "react-datepicker";
// import { CChart } from '@coreui/react-chartjs';
import Superadminheader from '../Common/Superadminheader';

function Reports () {  

    useEffect(() => {
        document.body.classList.add('sareports','red','defhider')
        return () => {
          document.body.classList.remove('sareports','red','defhider')
        }
    }, [])

    const [startDate, setStartDate] = useState(new Date());    
    
    return (
        <React.Fragment>
            <Superadminheader/>
            <Container fluid className='h-100 mt-4'>
                <Row>
                    <Col xs={12} className='mb-3'>
                        <h1 className='suadmin-page-title'>Reports Home</h1>
                    </Col>
                </Row><Row>
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
                                    <Form.Label>Select Report</Form.Label>
                                    <Form.Select className='me-2' size='sm'>
                                        <optgroup label="Employer Reports">
                                            <option value="vr3">OR6. Expiring Customers</option>
                                            <option value="vr4">OR13. Companies not Advertised Recently</option>
                                            <option value="vr4">OR18 - Featured Employers Registered</option>
                                            <option value="vr4">OR21 - Agent Login Stats by Company</option>
                                            <option value="vr4">OR20 - Agent Login Stats</option>
                                        </optgroup>
                                        <optgroup label="Vacancy Reports">
                                            <option value="sr1">OR2 - Open Vacancy Count vs. View Count</option>
                                            <option value="sr1">OR8 - Vacancy Vs Applicant</option>
                                            <option value="sr1">OR17 - Top Ad Registered</option>
                                            <option value="sr1">OR22 - Top Ad Client Summary</option>
                                        </optgroup>                                        
                                        <optgroup label="Applicant Reports">
                                            <option value="vr1">OR7 - Apply Via Email</option>
                                            <option value="ar3">OR11 - Agent Applications - Open List</option>
                                            <option value="ar5">OR10 - Agent Vacancy Application Summary</option>
                                            <option value="ar6">OR1 - Applicant Count for Agents</option>
                                            <option value="ar6">OR14 - Applications for Apply Via Email Vacancies</option>
                                        </optgroup>
                                        <optgroup label="Statistic Reports">
                                            <option value="st1">OR3 - Institute Views</option>
                                            <option value="st2">OR5 - Incoming Views from Job Alerts</option>
                                            <option value="st3">OR12 - Banner Views</option>
                                            <option value="st4">OR16 - CSR CV Report</option>
                                        </optgroup>
                                        <optgroup label="Other Reports">
                                            <option value="st1">OR9 - Job Alert Subscription Vs Functional Area</option>
                                            <option value="st2">OR4 - Search Keyphrases</option>
                                            <option value="st3">OR15 - Functional Area Based Summary</option>
                                            <option value="st4">OR19 - Banners Registered</option>
                                        </optgroup>
                                    </Form.Select>
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
                        <h6>OR6 - Expiring Customers</h6>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Row>
                            <Col md="12">
                                <Table bordered responsive striped hover className='caption-top'>
                                    <caption>6 Agent(s) found between 18/04/2023 and 19/05/2023</caption>
                                    <thead>
                                        <tr>
                                            <th>Company</th>
                                            <th>Contact Person</th>
                                            <th>Contact No.</th>
                                            <th>Expiry Date</th>
                                            <th>Date Registered</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td width={170}>George Bernard (Pvt) Ltd</td>
                                            <td>Sean Horshington</td>
                                            <td>0117439231</td>
                                            <td>21/04/2023</td>
                                            <td>22/04/2022</td>
                                        </tr>
                                        <tr>
                                            <td width={170}>WNS Global Services (Pvt) Ltd</td>
                                            <td>Dr. Archana Arcot</td>
                                            <td>112695659</td>
                                            <td>30/04/2023</td>
                                            <td>01/05/2022</td>
                                        </tr>
                                        <tr>
                                            <td width={170}>Hayleys Group</td>
                                            <td>Jessica Stave</td>
                                            <td>0112 628 514</td>
                                            <td>21/04/2023</td>
                                            <td>22/04/2022</td>
                                        </tr>
                                        <tr>
                                            <td width={170}>Nestle Lanka PLC</td>
                                            <td>Kumara Galhenage</td>
                                            <td>2696304</td>
                                            <td>03/05/2023</td>
                                            <td>	04/05/2022</td>
                                        </tr>
                                        <tr>
                                            <td width={170}>Ceyline Group</td>
                                            <td>Sharon Walker</td>
                                            <td>4511097</td>
                                            <td>12/05/2023</td>
                                            <td>13/05/2022</td>
                                        </tr>
                                        <tr>
                                            <td width={170}>Soundmouse</td>
                                            <td>Buddhi Perera</td>
                                            <td>0115765566</td>
                                            <td>17/05/2023</td>
                                            <td>18/05/2022</td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td colSpan="5" className='text-center'><b>Total 6</b></td>
                                        </tr>
                                    </tfoot>
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
                </Row>
            </Container>
        </React.Fragment>
    );
}

export default Reports;