import React from 'react';
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Adminheader from '../Common/Adminheader';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Alert from 'react-bootstrap/Alert';
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { CChartBar, CChartLine } from '@coreui/react-chartjs';
import { Gear } from 'react-bootstrap-icons';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import ListGroup from 'react-bootstrap/ListGroup';

function Welcome () {  

    useEffect(() => {
        document.body.classList.add('agentmenu','blue','defhider')
        return () => {
          document.body.classList.remove('agentmenu','blue','defhider')
        }
    }, [])

    const chartlabels2 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug" , "Sep", "Oct", "Nov", "Dec", "23"];

    const chartdata2 = {
        labels: chartlabels2,
        datasets: [
            {
                label: "Applicants",
                backgroundColor: "#add9ff",
                borderColor: "#c2b0e6",
                data: [20, 5, 15, 1, 33, 6, 9, 50, 20, 12, 8, 10],
            },
        ],
    };
    
    return (
        <React.Fragment>
            <Adminheader/>
            <Container fluid className='h-100'>
                <Row>
                    <Col xs={12} className='pt-3'>
                        <Alert variant='info' className='p-2 text-center rounded-0'>
                            <b>topjobs Support Business Hours (Mon-Fri, 8.30am-5.00pm) Call (+94) 11 776 5645, (+94) 77 391 8922 Or Email to support@topjobs.lk</b>
                        </Alert>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12}>
                        <Accordion className='p-0 admin-accor mb-3 rounded-3'>
                            <Accordion.Item eventKey="0" variant='warning' className='rounded-3'>
                                <Accordion.Header className='rounded-3'>Are you missing out on important emails? read more...</Accordion.Header>
                                <Accordion.Body>
                                    <p>topjobs automatically sends you useful emails such as the 'Monthly Vacancy Summary' report and notices of vacancy opening and closing and more. To unblock these emails from spam filters</p>
                                    <p><b>Step 1:</b> Open your Gmail or Yahoo Mail account. Click on "Spam" from the list of options on the left side of the page.</p>
                                    <p><b>Step 2:</b> Find a message from "topjobs". A typical subject would be (TOPJOBS.LK - RELEASE NOTES FOR VERSION 2.9.4) click on the message to open it.</p>
                                    <p><b>Step 3:</b> Click "Not Spam" at the top of the page or remove the SPAM label . The message will be automatically moved to your regular in-box and the address will be removed from the list of senders sent to the spam folder.</p>
                                    <p><b>Step 4:</b> Inform your company's IT department to permit/unblock the following email addresses from the corporate spam filter (if any). support@topjobs.lk, jobalerts@topjobs.lk</p>
                                    <p>Call us on (+94) 11 776 5645 or email us on support@topjobs.lk for any clarifications</p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12}>
                        <h5>Dashboard</h5>
                        <p>Welcome back, We've missed you. 👋</p>
                    </Col>
                </Row>

                <Row className='mb-2 mb-sm-4'>       
                    <Col xs={12} sm={12} md={4} lg={4} xl={3} xxl={3} className='mb-3 mb-md-4 mb-lg-1 mb-xl-0 d-flex align-items-stretch'>
                        <div className='blocker-3 common p-3 d-flex align-items-start text-start'>
                            <div className='blocker-3-inner'>
                                <h6>Quick Links </h6>
                                <h4>GENESIIS</h4>
                                <ListGroup variant="flush">
                                    <ListGroup.Item><Link to='/Employer/Applicantsearch'><i className="fa-solid fa-unlock-keyhole"></i> How to change your password</Link></ListGroup.Item>
                                    <ListGroup.Item><Link to='/Employer/Applicantsearch'><i className="fa-solid fa-database"></i> Applicant - Fast Data Entry Form</Link></ListGroup.Item>
                                    <ListGroup.Item><Link to='/Employer/Applicantsearch'><i className="fa-solid fa-circle-plus"></i> Add new Vacancy</Link></ListGroup.Item>
                                </ListGroup>
                            </div>
                        </div>
                    </Col>                     
                    <Col xs={12} sm={12} md={8} lg={4} xl={5} className='mb-sm-3 mb-md-4 mb-lg-1 mb-xl-0 d-flex align-items-stretch'>
                        <div className='blocker-1 common p-3'>
                            <div className='blocker-1-inner'>
                                <Dropdown as={ButtonGroup}>
                                    <Button variant="success"><Gear /></Button>
                                    <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Export</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Reset</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Week/Month</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                
                                <h6>Data Set 1 </h6>
                                <h4>70 Applied - Accounting</h4>
                                
                                <CChartLine 
                                    height={73}
                                    data={{
                                        labels: [
                                        'IT/HW',
                                        'IT/SW',
                                        'Accounting',
                                        'HR',
                                        '2023',
                                        ],
                                        datasets: [
                                        {
                                            label: 'Applied',
                                            backgroundColor: 'rgba(220, 220, 220, 0.2)',
                                            borderColor: 'rgba(220, 220, 220, 1)',
                                            pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                                            pointBorderColor: '#fff',
                                            pointHighlightFill: '#fff',
                                            pointHighlightStroke: 'rgba(220, 220, 220, 1)',
                                            data: [50, 66, 70, 44],
                                        }
                                        ],
                                    }}
                                    options={{
                                        plugins: {
                                            title: {
                                            display: false,
                                            text: "Visitors"
                                            },
                                            legend: {
                                                display: false
                                            },
                                            tooltip: {
                                                display: false
                                            },
                                        },
                                        animations: {
                                            tension: {
                                            duration: 500,
                                            easing: 'easeInQuad',
                                            from: 1,
                                            to: 0,
                                            loop: false
                                            }
                                        },
                                        responsive: true,
                                        scales: {
                                            // x: {
                                            //     display: false
                                            // },
                                            // y: {
                                            //     display: false
                                            // },
                                            x: {
                                                grid: {
                                                display: false
                                                },
                                                ticks: { color: '#add9ff', beginAtZero: true }
                                            },
                                            y: {
                                                grid: {
                                                display: false
                                                },
                                                ticks: { 
                                                    color: '#add9ff', 
                                                    beginAtZero: true,
                                                    stepSize: 0,
                                                }
                                            }
                                        }
                                    }}
                                />
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={4} xl={4} className='mb-sm-2 mb-md-2 mb-lg-1 mb-xl-0 my-3 my-sm-0 d-flex align-items-stretch'>
                        <div className='blocker-2 common p-3'>
                            <div className='blocker-2-inner'>
                                <Dropdown as={ButtonGroup}>
                                    <Button variant="success"><Gear /></Button>
                                    <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Export</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Change Category - All</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Week/Month/Year</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                
                                <h6>Total Applicants - All </h6>
                                <h4>53</h4>
                                <CChartBar
                                    height={73}
                                    data={chartdata2} 
                                    options={{
                                        plugins: {
                                            title: {
                                            display: false,
                                            text: "Visitors"
                                            },
                                            legend: {
                                                display: false
                                            },
                                            tooltip: {
                                                display: false
                                            },
                                        },
                                        animations: {
                                            tension: {
                                            duration: 3000,
                                            easing: 'linear',
                                            from: 1,
                                            to: 0,
                                            loop: true
                                            }
                                        },
                                        responsive: true,
                                        scales: {
                                            // x: {
                                            //     display: false
                                            // },
                                            // y: {
                                            //     display: false
                                            // },
                                            x: {
                                                grid: {
                                                display: false
                                                },
                                                ticks: { color: '#add9ff', beginAtZero: true }
                                            },
                                            y: {
                                                grid: {
                                                display: false
                                                },
                                                ticks: { 
                                                    color: '#add9ff', 
                                                    beginAtZero: true,
                                                    stepSize: 0,
                                                }
                                            }
                                        }
                                    }}
                                />
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12}>
                        <h5>Modules</h5>
                    </Col>
                </Row>

                <Row className='h-100'>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className='prel'>
                        <Row className='admin-dash-links'>
                            <div className="d-flex align-content-stretch flex-wrap justify-content-center justify-content-xl-start mb-3">
                                <Link to='/Employer/Applicantsearch' className='color-1'><i className="fa-solid fa-arrow-right-long"></i> <b>Applicant</b></Link>
                                <Link to='/Employer/Jobordersearch' className='color-2'><i className="fa-solid fa-arrow-right-long"></i> <b>Vacancy</b></Link>
                                <Link to='/Employer/Masterlist' className='color-3'><i className="fa-solid fa-arrow-right-long"></i> <b>Master Data</b></Link>
                                <Link to='/Employer/Emailconfig' className='color-4'><i className="fa-solid fa-arrow-right-long"></i> <b>Email Config</b></Link>
                                <Link to='/Employer/Agent' className='color-5'><i className="fa-solid fa-arrow-right-long"></i> <b>Company</b></Link>
                                <Link to='/Employer/Employerlist' className='color-6'><i className="fa-solid fa-arrow-right-long"></i> <b>Employer</b></Link>
                                <Link to='/Employer/Paymentlist' className='color-7'><i className="fa-solid fa-arrow-right-long"></i> <b>Payments</b></Link>
                                <Link to='/Employer/Contentmanage' className='color-8'><i className="fa-solid fa-arrow-right-long"></i> <b>Page Contant Config</b></Link>
                                <Link to='/Employer/Userlist' className='color-9'><i className="fa-solid fa-arrow-right-long"></i> <b>User Login</b></Link>
                                <Link to='/Employer/Dbconfig' className='color-10'><i className="fa-solid fa-arrow-right-long"></i> <b>System Configuration</b></Link>
                                <Link to='/Employer/Interviewschedule' className='color-11'><i className="fa-solid fa-arrow-right-long"></i> <b>Shedule Interviews</b></Link>
                                <Link to='/Employer/Tabcutomise' className='color-12'><i className="fa-solid fa-arrow-right-long"></i> <b>Tab Customization</b></Link>
                                <Link to='/Employer/Reports' className='color-13'><i className="fa-solid fa-arrow-right-long"></i> <b>Reports</b></Link>
                                <Link to='/Employer/Profilecustomise' className='color-14'><i className="fa-solid fa-arrow-right-long"></i> <b>Profile Customization</b></Link>
                                <Link to='/Employer/Agentemailalert' className='color-15'><i className="fa-solid fa-arrow-right-long"></i> <b>Email Alert</b></Link>
                                <Link to='/Employer/Advertisementtemplate' className='color-17'><i className="fa-solid fa-arrow-right-long"></i> <b>Advertisement Templates</b></Link>
                            </div>
                        </Row>                 
                    </Col>
                </Row>                 
                
                <Row className='pt-3 g-4' xs={1} md={2}>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className='prel g-4'>
                        <Row className='row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-3 row-cols-xl-3 row-cols-xxl-3 g-4 mb-3'>
                            <Col lg={12} xl={5} xxl={5}>
                                <Card bg='light' text='dark'>
                                    <Card.Title>Recent Vacancies</Card.Title>
                                    <Card.Body>
                                        <div className='admin-tbl-wrap'>
                                            <Table striped hover responsive>
                                                <thead>
                                                    <tr>
                                                        <th>Your Recent Vacancies</th>
                                                        <th className='text-center'>AL</th>
                                                        <th className='text-center'>SL</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <p><a href='/#'>0000980811</a> - SENIOR SOFTWARE ENGINEER - Full Stack - <span>23/07/2022 - 25/07/2022</span></p>
                                                        </td>
                                                        <td className='text-center'><p><a href='/#'>0</a></p></td>
                                                        <td className='text-center'><p><a href='/#'>0</a></p></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <p><a href='/#'>0000980811</a> - SENIOR SOFTWARE ENGINEER - Full Stack - <span>23/07/2022 - 25/07/2022</span></p>
                                                        </td>
                                                        <td className='text-center'><p><a href='/#'>0</a></p></td>
                                                        <td className='text-center'><p><a href='/#'>0</a></p></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <p><a href='/#'>0000980811</a> - SENIOR SOFTWARE ENGINEER - Full Stack - <span>23/07/2022 - 25/07/2022</span></p>
                                                        </td>
                                                        <td className='text-center'><p><a href='/#'>0</a></p></td>
                                                        <td className='text-center'><p><a href='/#'>0</a></p></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <p><a href='/#'>0000980811</a> - SENIOR SOFTWARE ENGINEER - Full Stack - <span>23/07/2022 - 25/07/2022</span></p>
                                                        </td>
                                                        <td className='text-center'><p><a href='/#'>0</a></p></td>
                                                        <td className='text-center'><p><a href='/#'>0</a></p></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <p><a href='/#'>0000980811</a> - SENIOR SOFTWARE ENGINEER - Full Stack - <span>23/07/2022 - 25/07/2022</span></p>
                                                        </td>
                                                        <td className='text-center'><p><a href='/#'>0</a></p></td>
                                                        <td className='text-center'><p><a href='/#'>0</a></p></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <p><a href='/#'>0000980811</a> - SENIOR SOFTWARE ENGINEER - Full Stack - <span>23/07/2022 - 25/07/2022</span></p>
                                                        </td>
                                                        <td className='text-center'><p><a href='/#'>0</a></p></td>
                                                        <td className='text-center'><p><a href='/#'>0</a></p></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <p><a href='/#'>0000980811</a> - SENIOR SOFTWARE ENGINEER - Full Stack - <span>23/07/2022 - 25/07/2022</span></p>
                                                        </td>
                                                        <td className='text-center'><p><a href='/#'>0</a></p></td>
                                                        <td className='text-center'><p><a href='/#'>0</a></p></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <p><a href='/#'>0000980811</a> - SENIOR SOFTWARE ENGINEER - Full Stack - <span>23/07/2022 - 25/07/2022</span></p>
                                                        </td>
                                                        <td className='text-center'><p><a href='/#'>0</a></p></td>
                                                        <td className='text-center'><p><a href='/#'>0</a></p></td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </Card.Body>
                                </Card> 
                            </Col>                            
                            <Col lg={6} xl={4} xxl={4}>
                                <Card bg='light' text='dark' className="h-100">
                                    <Card.Title>Recent Jobs</Card.Title>
                                    <Card.Body>
                                        <div className='admin-tbl-wrap mb-3'>
                                            <Table striped hover responsive>
                                                <thead>
                                                    <tr>
                                                        <th>Most Recent Applicants</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td><a href='/#'>0001459397</a> - Mohomed Amjath</td>
                                                    </tr>
                                                    <tr>
                                                        <td><a href='/#'>0001457847</a> - Madhushi Sudasingha</td>
                                                    </tr>
                                                    <tr>
                                                        <td><a href='/#'>0001448348</a> - Timothy Nelson</td>
                                                    </tr>
                                                    <tr>
                                                        <td><a href='/#'>0001425556</a> - Shambhavi Deshmukh</td>
                                                    </tr>
                                                    <tr>
                                                        <td><a href='/#'>0001418683</a> - Sumudu Chandimal Silva</td>
                                                    </tr>
                                                    <tr>
                                                        <td><a href='/#'>0001319052</a> - Athalage Don Isuru Nuwan Sameera</td>
                                                    </tr>
                                                    <tr>
                                                        <td><a href='/#'>0001256996</a> - Wijesinghe Arachchilage Wasana Sewwandi Rajapaksha</td>
                                                    </tr>
                                                    <tr>
                                                        <td><a href='/#'>0001218665</a> - waruni samudra de silva</td>
                                                    </tr>
                                                    <tr>
                                                        <td><a href='/#'>0001457847</a> - Madhushi Sudasingha</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </Card.Body>
                                </Card> 
                            </Col>
                            <Col lg={6} xl={3} xxl={3}>
                                <Card bg='light' text='dark' className="h-100">
                                    <Card.Title>Interviews</Card.Title>
                                    <Card.Body>
                                        <div className='admin-tbl-wrap mb-3'>
                                            <Table striped hover responsive>
                                                <thead>
                                                    <tr>
                                                    <th>Interviews</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                    <td className='text-center'>No Interviews for Today</td>
                                                    </tr>
                                                </tbody>
                                            </Table>   
                                        </div>    
                                    </Card.Body>
                                </Card> 
                            </Col>
                        </Row>                  
                    </Col>
                </Row>
                <Row className='pt-3 g-4' xs={1} md={2}>
                    <Col xs={12} sm={12} md={12} lg={12} xl={10} xxl={9} className='prel g-4'>
                        <CardGroup>
                            <Card bg='success' text='light' className="mb-3 scard admin-d-card rounded-3 text-light">
                                <Card.Title>Partner Programs</Card.Title>
                                <Card.Body>
                                    <Card.Text>
                                        <Link to='/Employer/Welcome' className='text-white'>CSR CV's</Link>
                                        <Link to='/Employer/Welcome' className='text-white'>NAITA topjobs Partnership</Link>
                                    </Card.Text>
                                </Card.Body>
                            </Card> 
                            <Card bg='warning' text='dark' className="mb-3 scard admin-d-card text-light mx-sm-3 rounded-3">
                                <Card.Title>topjobs Resources</Card.Title>
                                <Card.Body>
                                    <Card.Text>
                                        <Link to='/Employer/Welcome' className='text-dark'>Release Notes</Link>
                                        <Link to='/Employer/Welcome' className='text-dark'>Terms & Conditions</Link>
                                        <Link to='/Employer/Welcome' className='text-dark'>Help</Link>
                                        <Link to='/Employer/Welcome' className='text-dark'>HR Resource</Link>
                                        <Link to='/Employer/Welcome' className='text-dark'>FAQ</Link>
                                    </Card.Text>
                                </Card.Body>
                            </Card> 
                            <Card bg='danger' text='light' className="mb-3 scard admin-d-card rounded-3 text-light">
                                <Card.Title>Additional Services</Card.Title>
                                <Card.Body>
                                    <Card.Text>
                                        <Link to='/Employer/Welcome' className='text-white'>topjobs Banner</Link>
                                    </Card.Text>
                                </Card.Body>
                            </Card>   
                        </CardGroup>                  
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}

export default Welcome;