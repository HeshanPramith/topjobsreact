import React from 'react';
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Jsheader from '../Common/Jsheader';
import Footer from '../Common/Footer';
// import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Nav from 'react-bootstrap/Nav';
import AnchorLink from "react-anchor-link-smooth-scroll";

function Applicantsingleform () {

    useEffect(() => {
        document.body.classList.add('seeker-welcome', 'applicantsingleform')
        return () => {
          document.body.classList.remove('seeker-welcome', 'applicantsingleform')
        }
    }, [])

    const percentage = 65;

    return (
        <React.Fragment>
            <Jsheader/> 
            <Container fluid>
                <Row>
                    <Col xs={12}>
                        <h5>Hello and Welcome to topjobs</h5>
                        <p>Welcome back, We've missed you. 👋</p>
                    </Col>
                </Row>
                <Row className='sadmin-group-top'>
                    <Col xs={12} sm={6} md={4} lg={3} xl={3} xxl={3} className='mb-4'>
                        <Card bg='danger' text='dark' className="h-100 prof">
                            <Card.Title>Profile Complete Progress</Card.Title>
                            <Card.Body className='d-flex flex-column align-items-center justify-content-center'>
                                <div className='pro-pic'>
                                    <img src='../images/pro-pic.jpg' className='img-fluid' alt='logo'></img>
                                </div>
                                <div className='profile-cuz h-100 d-flex flex-column align-items-center justify-content-center'>
                                    <h5>65%</h5>
                                    <CircularProgressbar value={percentage} />
                                </div>
                            </Card.Body>
                        </Card>  
                    </Col> 
                    <Col xs={12} sm={6} md={12} lg={4} xl={4} xxl={4} className='mb-4 d-none d-lg-block'>
                        <Card bg='warning' text='dark' className="h-100 scard admin-d-card">
                            <Card.Title>Quick Links</Card.Title>
                            <Card.Body>
                                <Link to='/Jobseeker/Applicantsingleform' className='text-white'>Profile</Link>
                                <Link to='/Jobseeker/Applicantsingleform' className='text-white'>CV/Documents</Link>
                                <Link to='/Jobseeker/Applicantsingleform' className='text-white'>View My Profile</Link>
                                <Link to='/Jobseeker/Applicantsingleform' className='text-white'>Download My Profile</Link>
                                <Link to='/Jobseeker/Applicantsingleform' className='text-white'>Upload My CV/Documents</Link>
                            </Card.Body>
                        </Card> 
                    </Col>
                    <Col xs={12} sm={6} md={8} lg={5} xl={5} xxl={5} className='mb-4'>
                        <Card bg='primary' text='dark' className="h-100 info">
                            <Card.Title>Information</Card.Title>
                            <Card.Body className='d-flex flex-column align-items-start justify-content-center'>
                                <div className='infs'><i className="fa-solid fa-circle-check green"></i> OK - Information completed</div>
                                <div className='infs'><i className="fa-solid fa-circle-xmark red"></i> Incomplete - More information needed (based on what each employer want to see)</div>
                                <div className='infs'><i className="fa-solid fa-circle-info black"></i> Tool Tips</div>
                                <div className='infs'><i className="fa-solid fa-star-of-life red"></i> Must be entered</div>
                                <div className='infs'><i className="fa-solid fa-star-of-life purple"></i> Not mandatory but required to have a complete application</div>
                                <AnchorLink href='#cp' className='text-white edtbtn'><i className="fa-solid fa-arrow-down"></i> Add/Update Your Informations</AnchorLink >
                            </Card.Body>
                            <Card.Footer className="text-muted">Profile Last Updated : 2 days ago</Card.Footer>
                        </Card>
                    </Col>
                </Row>
                <Row id='cp' className='mb-5'>
                    <Col xs={12} className='mb-5'>
                        <h6 className='mb-2'>Your Information</h6>
                        <div className="d-flex align-items-start h-100 tabview">
                            <Nav className="nav flex-column nav-pills h-100" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                <Button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Personal Details <i className="fa-solid fa-circle-check green"></i></Button>
                                <Button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Professional Experience <i className="fa-solid fa-circle-xmark red"></i></Button>
                                <Button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Higher Education <i className="fa-solid fa-circle-xmark red"></i></Button>
                                <Button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">School Education <i className="fa-solid fa-circle-xmark red"></i></Button>
                                <Button className="nav-link" id="v-pills-2" data-bs-toggle="pill" data-bs-target="#v-pills-2" type="button" role="tab" aria-controls="v-pills-2" aria-selected="false">Membership <i className="fa-solid fa-circle-xmark red"></i></Button>
                                <Button className="nav-link" id="v-pills-3" data-bs-toggle="pill" data-bs-target="#v-pills-3" type="button" role="tab" aria-controls="v-pills-3" aria-selected="false">Language Proficiency <i className="fa-solid fa-circle-xmark red"></i></Button>
                                <Button className="nav-link" id="v-pills-4" data-bs-toggle="pill" data-bs-target="#v-pills-4" type="button" role="tab" aria-controls="v-pills-4" aria-selected="false">Research <i className="fa-solid fa-circle-xmark red"></i></Button>
                                <Button className="nav-link" id="v-pills-5" data-bs-toggle="pill" data-bs-target="#v-pills-5" type="button" role="tab" aria-controls="v-pills-5" aria-selected="false">Achievements <i className="fa-solid fa-circle-xmark red"></i></Button>
                                <Button className="nav-link" id="v-pills-6" data-bs-toggle="pill" data-bs-target="#v-pills-6" type="button" role="tab" aria-controls="v-pills-6" aria-selected="false">Referees <i className="fa-solid fa-circle-xmark red"></i></Button>
                                <Button className="nav-link" id="v-pills-7" data-bs-toggle="pill" data-bs-target="#v-pills-7" type="button" role="tab" aria-controls="v-pills-7" aria-selected="false">Family Information <i className="fa-solid fa-circle-xmark red"></i></Button>
                                <Button className="nav-link" id="v-pills-8" data-bs-toggle="pill" data-bs-target="#v-pills-8" type="button" role="tab" aria-controls="v-pills-8" aria-selected="false">Job Preference <i className="fa-solid fa-circle-xmark red"></i></Button>
                                <Button className="nav-link" id="v-pills-9" data-bs-toggle="pill" data-bs-target="#v-pills-9" type="button" role="tab" aria-controls="v-pills-9" aria-selected="false">Preferred Job Location <i className="fa-solid fa-circle-xmark red"></i></Button>
                                <Button className="nav-link" id="v-pills-10" data-bs-toggle="pill" data-bs-target="#v-pills-10" type="button" role="tab" aria-controls="v-pills-10" aria-selected="false">Uploaded CVs / Certificates <i className="fa-solid fa-circle-xmark red"></i></Button>
                            </Nav>
                            <div className="tab-content h-100" id="v-pills-tabContent">
                                <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" >
                                    <h6>Personal Details</h6>
                                    <Form>
                                        <Row>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>Title <i>*</i></Form.Label>
                                                <Form.Select defaultValue="Select" size='sm'>
                                                    <option>Mr.</option>
                                                    <option>Ms.</option>
                                                    <option>Mrs.</option>
                                                    <option>Dr.</option>
                                                </Form.Select>
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>Last Name <i>*</i></Form.Label>
                                                <Form.Control type="text" placeholder="Pramith" size='sm' />
                                                <small>eg: De Silva</small>
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>Other Name <i>*</i></Form.Label>
                                                <Form.Control type="text" placeholder="Heshan" size='sm' />
                                                <small>eg: Rohan David</small>
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>Initials <i>*</i></Form.Label>
                                                <Form.Control type="text" placeholder="U.A" size='sm' />
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>Date of Birth <i>*</i></Form.Label>
                                                <Form.Control type="date" placeholder="" size='sm' />
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>Nationality</Form.Label>
                                                <Form.Select defaultValue="Select" size='sm'>
                                                    <option>Sri Lankan</option>
                                                    <option>Afganistan</option>
                                                    <option>Albanian</option>
                                                    <option>Australian</option>
                                                </Form.Select>
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>Gender <i>*</i></Form.Label>
                                                <Form.Check type="radio" name="group1" aria-label="radio 1" label="Male"/>
                                                <Form.Check type="radio" name="group1" aria-label="radio 2" label="Female"/>
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>Marital Status</Form.Label>
                                                <Form.Check type="radio" name="group1" aria-label="radio 1" label="Single"/>
                                                <Form.Check type="radio" name="group1" aria-label="radio 2" label="Married"/>
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>Address <i>*</i></Form.Label>
                                                <Form.Control type="text" placeholder="Battaramulla" size='sm' />
                                                <small>eg: 124, Perera Avenue</small>
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>&nbsp;</Form.Label>
                                                <Form.Control type="text" placeholder="Havelock Town" size='sm' />
                                                <small>eg: Havelock Town</small>
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>&nbsp;</Form.Label>
                                                <Form.Control type="text" placeholder="Colombo 05" size='sm' />
                                                <small>eg: Colombo 05</small>
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>NIC No.</Form.Label>
                                                <Form.Control type="text" placeholder="897112663v" size='sm' />
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>Passport No.</Form.Label>
                                                <Form.Control type="text" placeholder="897112663v" size='sm' />
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>Country <i>*</i></Form.Label>
                                                <Form.Select defaultValue="Select" size='sm'>
                                                    <option>Sri Lanka</option>
                                                    <option>Afganistan</option>
                                                    <option>Albanian</option>
                                                    <option>Australia</option>
                                                </Form.Select>
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>District/State <i>*</i></Form.Label>
                                                <Form.Select defaultValue="Select" size='sm'>
                                                    <option>Colombo</option>
                                                    <option>Anuradhapura</option>
                                                    <option>Ampara</option>
                                                    <option>Badulla</option>
                                                </Form.Select>
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>Division/City <i>*</i></Form.Label>
                                                <Form.Select defaultValue="Select" size='sm'>
                                                    <option>Battaramulla</option>
                                                    <option>Rajagiriya</option>
                                                    <option>Borella</option>
                                                    <option>Malabe</option>
                                                </Form.Select>
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>Telephone <i>*</i></Form.Label>
                                                <Form.Control type="text" placeholder="0112970900" size='sm' />
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>Mobile</Form.Label>
                                                <Form.Control type="text" placeholder="0774372661" size='sm' />
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>Notice Period</Form.Label>
                                                <Form.Select defaultValue="Select" size='sm'>
                                                    <option>4 Weeks</option>
                                                    <option>Immediately</option>
                                                    <option>1 Week</option>
                                                    <option>2 Weeks</option>
                                                    <option>3 Weeks</option>
                                                </Form.Select>
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>Expected Salary (Rs) <i>*</i></Form.Label>
                                                <Form.Control type="text" placeholder="" size='sm' />
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>Social Network ID</Form.Label>
                                                <Form.Control type="text" placeholder="" size='sm' />
                                            </Form.Group>
                                            <Col xs={12}>
                                                <Button size='sm' variant="primary" type="submit" className='filter-btn search-btn'>
                                                    <i className="fa-regular fa-floppy-disk"></i> Save
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Form>
                                </div>
                                <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" >
                                    <h6>Professional Experience</h6>
                                    <Form>
                                        <Row>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>Industry <i>*</i></Form.Label>
                                                <Form.Select defaultValue="Select" size='sm'>
                                                    <option>Agriculture</option>
                                                    <option>Airline</option>
                                                    <option>Automotive</option>
                                                    <option>Beauty Culture</option>
                                                </Form.Select>
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>Organisation <i>*</i></Form.Label>
                                                <Form.Control type="text" placeholder="" size='sm' />
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>Job Category <i>*</i></Form.Label>
                                                <Form.Select defaultValue="Select" size='sm'>
                                                    <option>Accounting</option>
                                                    <option>Administration</option>
                                                    <option>Advertising</option>
                                                    <option>Auditing</option>
                                                </Form.Select>
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>Designation <i>*</i></Form.Label>
                                                <Form.Control type="text" placeholder="" size='sm' />
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>Commenced Date <i className='purple'>*</i></Form.Label>
                                                <Form.Select defaultValue="Select" size='sm'>
                                                    <option>Month</option>
                                                    <option>Jan</option>
                                                    <option>Feb</option>
                                                    <option>Mar</option>
                                                </Form.Select>
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>&nbsp;</Form.Label>
                                                <Form.Control type="text" placeholder="" size='sm' />
                                                <small>Year</small>
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>Completion Date <i className='purple'>*</i></Form.Label>
                                                <Form.Select defaultValue="Select" size='sm'>
                                                    <option>Month</option>
                                                    <option>Jan</option>
                                                    <option>Feb</option>
                                                    <option>Mar</option>
                                                </Form.Select>
                                                <small>(If you are still working fill the current date)</small>
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>&nbsp;</Form.Label>
                                                <Form.Control type="text" placeholder="" size='sm' />
                                                <small>Year</small>
                                            </Form.Group>
                                            <Form.Group as={Col} xs={12} sm={12} md={12} lg={12} xl={12} className="mb-3" controlId="">
                                                <Form.Label>Job Description <i className='purple'>*</i></Form.Label>
                                                <Form.Control as="textarea" rows={6} type="text" placeholder="" size='sm' />
                                                <small>ex: Southern Province Rural Development Project, Sri Lanka</small>
                                            </Form.Group>
                                            <Col xs={12}>
                                                <Button size='sm' variant="primary" type="submit" className='filter-btn search-btn mt-4'>
                                                    <i className="fa-solid fa-circle-plus"></i> Add To List
                                                </Button>
                                            </Col>
                                            <Col xs={12} className='mt-4'>
                                                <Table responsive borderless striped hover>
                                                    <thead>
                                                        <tr>
                                                            <th width="60px"><Form.Check type="checkbox" label="" /></th>
                                                            <th>Organisation</th>
                                                            <th>Designation</th>
                                                            <th>From</th>
                                                            <th>To</th>
                                                            <th width="80px"></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><Form.Check type="checkbox" label="" /></td>
                                                            <td>Genesiis Software</td>
                                                            <td>QA Engineer</td>
                                                            <td>November, 2016</td>
                                                            <td>November, 2020</td>
                                                            <td>
                                                                <Link to='/Jobseeker/Applicantsingleform'><i className="fa-solid fa-pen-to-square"></i></Link>
                                                                <Link to='/Jobseeker/Applicantsingleform'><i className="fa-solid fa-trash-can"></i></Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><Form.Check type="checkbox" label="" /></td>
                                                            <td>Genesiis Software</td>
                                                            <td>QA Engineer</td>
                                                            <td>November, 2016</td>
                                                            <td>November, 2020</td>
                                                            <td>
                                                                <Link to='/Jobseeker/Applicantsingleform'><i className="fa-solid fa-pen-to-square"></i></Link>
                                                                <Link to='/Jobseeker/Applicantsingleform'><i className="fa-solid fa-trash-can"></i></Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><Form.Check type="checkbox" label="" /></td>
                                                            <td>Genesiis Software</td>
                                                            <td>QA Engineer</td>
                                                            <td>November, 2016</td>
                                                            <td>November, 2020</td>
                                                            <td>
                                                                <Link to='/Jobseeker/Applicantsingleform'><i className="fa-solid fa-pen-to-square"></i></Link>
                                                                <Link to='/Jobseeker/Applicantsingleform'><i className="fa-solid fa-trash-can"></i></Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><Form.Check type="checkbox" label="" /></td>
                                                            <td>Genesiis Software</td>
                                                            <td>QA Engineer</td>
                                                            <td>November, 2016</td>
                                                            <td>November, 2020</td>
                                                            <td>
                                                                <Link to='/Jobseeker/Applicantsingleform'><i className="fa-solid fa-pen-to-square"></i></Link>
                                                                <Link to='/Jobseeker/Applicantsingleform'><i className="fa-solid fa-trash-can"></i></Link>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </Col>
                                            <Col xs={12}>
                                                <Button size='sm' variant="primary" type="submit" className='filter-btn search-btn delete-btn del-sel'>
                                                    <i className="fa-solid fa-trash-can"></i> Delete Selected
                                                </Button>
                                                <Button size='sm' variant="primary" type="submit" className='filter-btn search-btn'>
                                                    <i className="fa-regular fa-floppy-disk"></i> Save
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Form>
                                </div>
                                <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" >
                                    <h6>Higher Education</h6>
                                    <Form>
                                        <Row>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>Institute of Study <i className='purple'>*</i></Form.Label>
                                                <Form.Control type="text" placeholder="" size='sm' />
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>Affiliated Institute <i className='purple'>*</i></Form.Label>
                                                <Form.Control type="text" placeholder="" size='sm' />
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>What is your award? <i>*</i></Form.Label>
                                                <Form.Select defaultValue="Select" size='sm'>
                                                    <option>Higher National Diploma</option>
                                                    <option>Diploma</option>
                                                    <option>Degree</option>
                                                    <option>Masters</option>
                                                    <option>Certificate</option>
                                                </Form.Select>
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>Qualification/ Title <i>*</i></Form.Label>
                                                <Form.Select defaultValue="Select" size='sm'>
                                                    <option>Other</option>
                                                </Form.Select>
                                                <small>Not listed? email: support@topjobs.lk</small>
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>Area of Study <i>*</i></Form.Label>
                                                <Form.Select defaultValue="Select" size='sm'>
                                                    <option>Accounting</option>
                                                    <option>Administration</option>
                                                    <option>Anatomy</option>
                                                    <option>Art</option>
                                                    <option>Automobile</option>
                                                </Form.Select>
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>Commenced Date <i className='purple'>*</i></Form.Label>
                                                <Form.Select defaultValue="Select" size='sm'>
                                                    <option>Month</option>
                                                    <option>Jan</option>
                                                    <option>Feb</option>
                                                    <option>Mar</option>
                                                    <option>Apr</option>
                                                </Form.Select>
                                                <small>Year</small>
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>&nbsp;</Form.Label>
                                                <Form.Control type="text" placeholder="" size='sm' />
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>Completion Date <i className='purple'>*</i></Form.Label>
                                                <Form.Select defaultValue="Select" size='sm'>
                                                    <option>Month</option>
                                                    <option>Jan</option>
                                                    <option>Feb</option>
                                                    <option>Mar</option>
                                                    <option>Apr</option>
                                                </Form.Select>
                                                <small>Year</small>
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>&nbsp;</Form.Label>
                                                <Form.Control type="text" placeholder="" size='sm' />
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>Student ID <i className='purple'>*</i></Form.Label>
                                                <Form.Control type="text" placeholder="" size='sm' />
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>Result <i className='purple'>*</i></Form.Label>
                                                <Form.Control type="text" placeholder="" size='sm' />
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>Course taught in</Form.Label>
                                                <Form.Select defaultValue="Select" size='sm'>
                                                    <option>English</option>
                                                    <option>Sinhala</option>
                                                    <option>Tamil</option>
                                                    <option>French</option>
                                                    <option>German</option>
                                                </Form.Select>
                                                <small>Year</small>
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>Country <i className='purple'>*</i></Form.Label>
                                                <Form.Select defaultValue="Select" size='sm'>
                                                    <option>Sri Lanka</option>
                                                    <option>Afganistan</option>
                                                    <option>Albania</option>
                                                    <option>Baharain</option>
                                                    <option>Peru</option>
                                                </Form.Select>
                                                <small>Year</small>
                                            </Form.Group>
                                            <Form.Group as={Col} xs={12} sm={12} md={12} lg={12} xl={12} className="mb-3" controlId="">
                                                <Form.Label>Description <i className='purple'>*</i></Form.Label>
                                                <Form.Control as="textarea" rows={6} type="text" placeholder="" size='sm' />
                                                <small>ex: Industrial training/ internship, Academic achievements such as prizes etc, Key areas of the course</small>
                                            </Form.Group>
                                            <Col xs={12}>
                                                <Button size='sm' variant="primary" type="submit" className='filter-btn search-btn mt-4'>
                                                    <i className="fa-solid fa-circle-plus"></i> Add To List
                                                </Button>
                                            </Col>
                                            <Col xs={12} className='mt-4'>
                                                <Table responsive borderless striped hover>
                                                    <thead>
                                                        <tr>
                                                            <th width="60px"><Form.Check type="checkbox" label="" /></th>
                                                            <th>Qualification/Award</th>
                                                            <th>Qualification/ Title</th>
                                                            <th>Area of Study</th>
                                                            <th>Completed On</th>
                                                            <th>Institute</th>
                                                            <th width="80px"></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><Form.Check type="checkbox" label="" /></td>
                                                            <td>Degree </td>
                                                            <td>Bsc Bachelor of Food Science & Nutrition</td>
                                                            <td>Agriculture</td>
                                                            <td>May, 2018</td>
                                                            <td>IDM</td>
                                                            <td>
                                                                <Link to='/Jobseeker/Applicantsingleform'><i className="fa-solid fa-pen-to-square"></i></Link>
                                                                <Link to='/Jobseeker/Applicantsingleform'><i className="fa-solid fa-trash-can"></i></Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><Form.Check type="checkbox" label="" /></td>
                                                            <td>Degree </td>
                                                            <td>Bsc Bachelor of Food Science & Nutrition</td>
                                                            <td>Agriculture</td>
                                                            <td>May, 2018</td>
                                                            <td>IDM</td>
                                                            <td>
                                                                <Link to='/Jobseeker/Applicantsingleform'><i className="fa-solid fa-pen-to-square"></i></Link>
                                                                <Link to='/Jobseeker/Applicantsingleform'><i className="fa-solid fa-trash-can"></i></Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><Form.Check type="checkbox" label="" /></td>
                                                            <td>Degree </td>
                                                            <td>Bsc Bachelor of Food Science & Nutrition</td>
                                                            <td>Agriculture</td>
                                                            <td>May, 2018</td>
                                                            <td>IDM</td>
                                                            <td>
                                                                <Link to='/Jobseeker/Applicantsingleform'><i className="fa-solid fa-pen-to-square"></i></Link>
                                                                <Link to='/Jobseeker/Applicantsingleform'><i className="fa-solid fa-trash-can"></i></Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><Form.Check type="checkbox" label="" /></td>
                                                            <td>Degree </td>
                                                            <td>Bsc Bachelor of Food Science & Nutrition</td>
                                                            <td>Agriculture</td>
                                                            <td>May, 2018</td>
                                                            <td>IDM</td>
                                                            <td>
                                                                <Link to='/Jobseeker/Applicantsingleform'><i className="fa-solid fa-pen-to-square"></i></Link>
                                                                <Link to='/Jobseeker/Applicantsingleform'><i className="fa-solid fa-trash-can"></i></Link>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </Col>
                                            <Col xs={12}>
                                                <Button size='sm' variant="primary" type="submit" className='filter-btn search-btn delete-btn del-sel'>
                                                    <i className="fa-solid fa-trash-can"></i> Delete Selected
                                                </Button>
                                                <Button size='sm' variant="primary" type="submit" className='filter-btn search-btn'>
                                                    <i className="fa-regular fa-floppy-disk"></i> Save
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Form>
                                </div>
                                <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" >
                                    
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12}>
                        <Button size='sm' variant="primary" type="submit" className='filter-btn search-btn mt-4'>
                            <i className="fa-regular fa-floppy-disk"></i> Save All
                        </Button>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </React.Fragment>
    );
}

export default Applicantsingleform;