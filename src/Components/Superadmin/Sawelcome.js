import React from 'react';
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Superadminheader from '../Common/Superadminheader';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { CChartLine } from '@coreui/react-chartjs';
import { CChartBar } from '@coreui/react-chartjs';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { Gear } from 'react-bootstrap-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Table from 'react-bootstrap/Table';
import { faBell, faBuilding, faClipboard, faComments, faDatabase, faEnvelope, faEnvelopesBulk, faFileLines, faFilePdf, faGears, faPanorama, faPeopleArrows, faUserCheck, faUserLock, faUserShield, faUsersBetweenLines } from '@fortawesome/free-solid-svg-icons';
// import { Link } from "react-router-dom";

function Sawelcome () {  

    useEffect(() => {
        document.body.classList.add('suadagentmenu','red','defhider')
        return () => {
          document.body.classList.remove('suadagentmenu','red','defhider')
        }
    }, [])

    const chartlabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug" , "Sep", "Oct", "Nov", "Dec", "23"];
    const chartlabels2 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug" , "Sep", "Oct", "Nov", "Dec", "23"];

    const chartdata = {
        labels: chartlabels,
        datasets: [
            {
                label: "Visitors",
                backgroundColor: "#FFFFFF",
                borderColor: "#c2b0e6",
                data: [1000, 1600, 800, 300, 1800, 1200, 1000, 1000, 1000, 1000, 1000, 1000],
            },
        ],
    };

    const chartdata2 = {
        labels: chartlabels2,
        datasets: [
            {
                label: "Jobs",
                backgroundColor: "#add9ff",
                borderColor: "#c2b0e6",
                data: [800, 900, 800, 700, 1000, 800, 900, 800, 700, 1000, 900, 800],
            },
        ],
    };
    
    return (
        <React.Fragment>
            <Superadminheader/>
            <Container fluid className='h-100'>
                <Row className='pt-3'>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className='prel'>
                        <Row>
                            <Col xs={12}>
                                <h5>Superadmin Dashboard</h5>
                                <p>Welcome back, We've missed you. 👋</p>
                            </Col>
                        </Row>
                        <Row>                            
                            <Col xs={12} sm={6} md={6} lg={6} xl={4} className='mb-sm-2 mb-md-2 mb-lg-4 mb-xl-0 d-flex align-items-stretch'>
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
                                        
                                        <h6>Total Visitors </h6>
                                        <h4>1,800</h4>
                                        <CChartLine 
                                            height={73}
                                            data={chartdata} 
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
                                                        ticks: { color: '#c2b0e6', beginAtZero: true }
                                                    },
                                                    y: {
                                                        grid: {
                                                        display: false
                                                        },
                                                        ticks: { 
                                                            color: '#c2b0e6', 
                                                            beginAtZero: true,
                                                            stepSize: 1000,
                                                        }
                                                    }
                                                }
                                            }}
                                        />
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} sm={6} md={6} lg={6} xl={4} className='mb-sm-2 mb-md-2 mb-lg-4 mb-xl-0 my-3 my-sm-0 d-flex align-items-stretch'>
                                <div className='blocker-2 common p-3'>
                                    <div className='blocker-2-inner'>
                                        <Dropdown as={ButtonGroup}>
                                            <Button variant="success"><Gear /></Button>
                                            <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Export</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Reset</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Week/Month/Year</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        
                                        <h6>Total Jobs </h6>
                                        <h4>100,0000 +</h4>
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
                                                            stepSize: 100,
                                                        }
                                                    }
                                                }
                                            }}
                                        />
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={12} xl={4} xxl={4} className='sadmin-group-top  mt-sm-3 mt-md-3 mt-lg-0 align-items-stretch'>
                                
                                        <Card bg='light' text='dark' className="h-100">
                                            <Card.Title>topAD - Inactive Companies</Card.Title>
                                            <Card.Body>
                                                <Table responsive borderless hover>
                                                    <thead>
                                                        <tr>
                                                            <th>#</th>
                                                            <th>Company</th>
                                                            <th>Contact Number</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>1</td>
                                                            <td>WSO2</td>
                                                            <td>0715864522</td>
                                                        </tr>
                                                        <tr>
                                                            <td>2</td>
                                                            <td>Dialog</td>
                                                            <td>0715864522</td>
                                                        </tr>
                                                        <tr>
                                                            <td>3</td>
                                                            <td>Sysco Labs</td>
                                                            <td>0715864522</td>
                                                        </tr>
                                                        <tr>
                                                            <td>4</td>
                                                            <td>SLT - Mobitel</td>
                                                            <td>0715864522</td>
                                                        </tr>
                                                        <tr>
                                                            <td>5</td>
                                                            <td>Virtusa</td>
                                                            <td>0715864522</td>
                                                        </tr>
                                                        <tr>
                                                            <td>6</td>
                                                            <td>IBM</td>
                                                            <td>0715864522</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </Card.Body>
                                        </Card> 
                                    
                            </Col>
                        </Row>                  
                    </Col>
                </Row>

                <Row className='mt-4'>
                    <Col xs={12}>
                        <h5>Superadmin Modules</h5>
                    </Col>
                </Row>

                <Row className='h-100'>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className='prel'>
                        <Row className='admin-dash-links'>
                            <div className="d-flex align-content-stretch flex-wrap justify-content-center justify-content-xl-start mb-3">
                                <Link to='/Superadmin/Agentsearch' className='color-1'><FontAwesomeIcon icon={faBuilding} /> <b>Company</b></Link>
                                <Link to='/Superadmin/Email' className='color-2'><FontAwesomeIcon icon={faEnvelope} /> <b>Email Config</b></Link>
                                <Link to='/Superadmin/Sysconfig' className='color-3'><FontAwesomeIcon icon={faGears} /> <b>System Configuration</b></Link>
                                <Link to='/Superadmin/Sauserlist' className='color-4'><FontAwesomeIcon icon={faUserCheck} /> <b>User Login</b></Link>
                                <Link to='/Superadmin/Samasterlist' className='color-5'><FontAwesomeIcon icon={faDatabase} /> <b>Master Data</b></Link>
                                <Link to='/Superadmin/Applicantloginmenu' className='color-6'><FontAwesomeIcon icon={faUserShield} /> <b>Applicant Logins</b></Link>
                                <Link to='/Superadmin/Sareports' className='color-7'><FontAwesomeIcon icon={faFileLines} /> <b>Reports</b></Link>
                                <Link to='/Superadmin/Bulkemail' className='color-8'><FontAwesomeIcon icon={faEnvelopesBulk} /> <b>Bulk Email</b></Link>
                                <Link to='/Superadmin/Releasenotes' className='color-9'><FontAwesomeIcon icon={faClipboard} /> <b>Release Notes</b></Link>
                                <Link to='/Superadmin/Bannerad' className='color-10'><FontAwesomeIcon icon={faPanorama} /> <b>Manage Banners</b></Link>
                                <Link to='/Superadmin/Extagentsearch' className='color-11'><FontAwesomeIcon icon={faPeopleArrows} /> <b>External Agent</b></Link>
                                <Link to='/Superadmin/Emailalerttype' className='color-12'><FontAwesomeIcon icon={faBell} />  <b>Email Alert Config</b></Link>
                                <Link to='/Superadmin/Uploadcsrcv' className='color-13'><FontAwesomeIcon icon={faFilePdf} /> <b>CSR CV</b></Link>
                                <Link to='/Superadmin/Hrresourceadmin' className='color-14'><FontAwesomeIcon icon={faUsersBetweenLines} /> <b>HR Resources</b></Link>
                                <Link to='/Superadmin/Lockedagents' className='color-15'><FontAwesomeIcon icon={faUserLock} /> <b>Locked Agent Logins</b></Link>
                                <Link to='/Superadmin/Tjtstmonial' className='color-17'><FontAwesomeIcon icon={faComments} /> <b>Manage Testimonials</b></Link>
                            </div>
                        </Row>                 
                    </Col>
                </Row> 

                <Row className='pt-3 g-4' xs={1} md={2}>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className='prel g-4'>
                        <Row className='row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 row-cols-xl-2 row-cols-xxl-2 g-4 sadmin-group-top'>
                            <Col>
                                <Card bg='light' text='dark' className="h-100">
                                    <Card.Title>Recent Company</Card.Title>
                                    <Card.Body>
                                        <Table responsive borderless hover>
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Name</th>
                                                    <th>Contact Person</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>GENESIIS</td>
                                                    <td>Senaka Weerasooria</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>Finco Technologies</td>
                                                    <td>User Details</td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>WSO2</td>
                                                    <td>User Details</td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td>Sysco Labs</td>
                                                    <td>User Details</td>
                                                </tr>
                                                <tr>
                                                    <td>5</td>
                                                    <td>DIalog</td>
                                                    <td>User Details</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Card.Body>
                                </Card> 
                            </Col>
                            <Col>
                                <Card bg='light' text='dark' className="h-100">
                                    <Card.Title>Most Used Category</Card.Title>
                                    <Card.Body>
                                        <Table responsive borderless hover>
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Category</th>
                                                    <th className='text-end'>Jobs</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>IT-Sware/DB/QA/Web/Graphics/GIS</td>
                                                    <td className='text-end'>1300</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>IT-HWare/Networks/Systems</td>
                                                    <td className='text-end'>450</td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>Accounting/Auditing/Finance</td>
                                                    <td className='text-end'>200</td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td>Banking/Insurance</td>
                                                    <td className='text-end'>50</td>
                                                </tr>
                                                <tr>
                                                    <td>5</td>
                                                    <td>Sales/Marketing/Merchandising</td>
                                                    <td className='text-end'>20</td>
                                                </tr>
                                            </tbody>
                                        </Table>
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
                                        <Link to='/Superadmin/Sawelcome' className='text-white'>CSR CV's</Link>
                                        <Link to='/Superadmin/Sawelcome' className='text-white'>NAITA topjobs Partnership</Link>
                                    </Card.Text>
                                </Card.Body>
                            </Card> 
                            <Card bg='warning' text='dark' className="mb-3 scard admin-d-card text-light mx-sm-3 rounded-3">
                                <Card.Title>topjobs Resources</Card.Title>
                                <Card.Body>
                                    <Card.Text>
                                        <Link to='/Superadmin/Sawelcome' className='text-dark'>Release Notes</Link>
                                        <Link to='/Superadmin/Sawelcome' className='text-dark'>Terms & Conditions</Link>
                                        <Link to='/Superadmin/Sawelcome' className='text-dark'>Help</Link>
                                        <Link to='/Superadmin/Sawelcome' className='text-dark'>HR Resource</Link>
                                        <Link to='/Superadmin/Sawelcome' className='text-dark'>FAQ</Link>
                                    </Card.Text>
                                </Card.Body>
                            </Card> 
                            <Card bg='danger' text='light' className="mb-3 scard admin-d-card rounded-3 text-light">
                                <Card.Title>Additional Services</Card.Title>
                                <Card.Body>
                                    <Card.Text>
                                        <Link to='/Superadmin/Sawelcome' className='text-white'>topjobs Banner</Link>
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

export default Sawelcome;