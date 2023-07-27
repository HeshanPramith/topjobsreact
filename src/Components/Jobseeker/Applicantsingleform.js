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
import { useTranslation } from 'react-i18next';

function Applicantsingleform () {

    useEffect(() => {
        document.body.classList.add('seeker-welcome', 'applicantsingleform')
        return () => {
          document.body.classList.remove('seeker-welcome', 'applicantsingleform')
        }
    }, [])

    const percentage = 65;

    const { t } = useTranslation();

    return (
        <React.Fragment>
            <Jsheader/> 
            <Container fluid>
                <Row>
                    <Col xs={12}>
                        <h5>Welcome to topjobs</h5>
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
                            <Card.Title>{t('topjobs.inf')}</Card.Title>
                            <Card.Body className='d-flex flex-column align-items-start justify-content-center'>
                                <div className='infs'><i className="fa-solid fa-circle-check green"></i> {t('topjobs.okic')}</div>
                                <div className='infs'><i className="fa-solid fa-circle-xmark red"></i> {t('topjobs.incic')}</div>
                                <div className='infs'><i className="fa-solid fa-circle-info black"></i> {t('topjobs.tt')}</div>
                                <div className='infs'><i className="fa-solid fa-star-of-life red"></i> {t('topjobs.mbe')}</div>
                                <div className='infs'><i className="fa-solid fa-star-of-life purple"></i> {t('topjobs.notm')}</div>
                                <AnchorLink href='#cp' className='text-white edtbtn'><i className="fa-solid fa-arrow-down"></i> {t('topjobs.adinf')}</AnchorLink >
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
                                <Button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">{t('topjobs.pdetails')} <i className="fa-solid fa-circle-check green"></i></Button>
                                <Button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Professional Experience <i className="fa-solid fa-circle-xmark red"></i></Button>
                                <Button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Higher Education <i className="fa-solid fa-circle-xmark red"></i></Button>
                                <Button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">School Education <i className="fa-solid fa-circle-xmark red"></i></Button>
                                <Button className="nav-link" id="v-pills-2-tab" data-bs-toggle="pill" data-bs-target="#v-pills-2" type="button" role="tab" aria-controls="v-pills-2" aria-selected="false">Membership <i className="fa-solid fa-circle-xmark red"></i></Button>
                                <Button className="nav-link" id="v-pills-3-tab" data-bs-toggle="pill" data-bs-target="#v-pills-3" type="button" role="tab" aria-controls="v-pills-3" aria-selected="false">Language Proficiency <i className="fa-solid fa-circle-xmark red"></i></Button>
                                <Button className="nav-link" id="v-pills-4-tab" data-bs-toggle="pill" data-bs-target="#v-pills-4" type="button" role="tab" aria-controls="v-pills-4" aria-selected="false">Research <i className="fa-solid fa-circle-xmark red"></i></Button>
                                <Button className="nav-link" id="v-pills-5-tab" data-bs-toggle="pill" data-bs-target="#v-pills-5" type="button" role="tab" aria-controls="v-pills-5" aria-selected="false">Achievements <i className="fa-solid fa-circle-xmark red"></i></Button>
                                <Button className="nav-link" id="v-pills-6-tab" data-bs-toggle="pill" data-bs-target="#v-pills-6" type="button" role="tab" aria-controls="v-pills-6" aria-selected="false">Referees <i className="fa-solid fa-circle-xmark red"></i></Button>
                                <Button className="nav-link" id="v-pills-7-tab" data-bs-toggle="pill" data-bs-target="#v-pills-7" type="button" role="tab" aria-controls="v-pills-7" aria-selected="false">Family Information <i className="fa-solid fa-circle-xmark red"></i></Button>
                                <Button className="nav-link" id="v-pills-8-tab" data-bs-toggle="pill" data-bs-target="#v-pills-8" type="button" role="tab" aria-controls="v-pills-8" aria-selected="false">Job Preference <i className="fa-solid fa-circle-xmark red"></i></Button>
                                <Button className="nav-link" id="v-pills-9-tab" data-bs-toggle="pill" data-bs-target="#v-pills-9" type="button" role="tab" aria-controls="v-pills-9" aria-selected="false">Preferred Job Location <i className="fa-solid fa-circle-xmark red"></i></Button>
                                <Button className="nav-link" id="v-pills-10-tab" data-bs-toggle="pill" data-bs-target="#v-pills-10" type="button" role="tab" aria-controls="v-pills-10" aria-selected="false">Uploaded CVs / Certificates <i className="fa-solid fa-circle-xmark red"></i></Button>
                            </Nav>
                            <div className="tab-content h-100" id="v-pills-tabContent">
                                <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" >
                                    <h6>{t('topjobs.pdetails')}</h6>
                                    <Form>
                                        <Row>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={2} className="mb-3" controlId="">
                                                <Form.Label>{t('topjobs.ttl')} <i>*</i></Form.Label>
                                                <Form.Select defaultValue="Select" size='sm'>
                                                    <option>Mr.</option>
                                                    <option>Ms.</option>
                                                    <option>Mrs.</option>
                                                    <option>Dr.</option>
                                                </Form.Select>
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={2} className="mb-3" controlId="">
                                                <Form.Label>{t('topjobs.initials')}</Form.Label>
                                                <Form.Control type="text" placeholder="U.A" size='sm' />
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>{t('topjobs.fname')} <i>*</i></Form.Label>
                                                <Form.Control type="text" placeholder="Pramith" size='sm' />
                                                <small>eg: De Silva</small>
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>{t('topjobs.lname')}</Form.Label>
                                                <Form.Control type="text" placeholder="Heshan" size='sm' />
                                                <small>eg: Rohan David</small>
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>{t('topjobs.dob')} <i>*</i></Form.Label>
                                                <Form.Control type="date" placeholder="" size='sm' />
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>{t('topjobs.nationality')}</Form.Label>
                                                <Form.Select defaultValue="Select" size='sm'>
                                                    <option>Sri Lankan</option>
                                                    <option>Afganistan</option>
                                                    <option>Albanian</option>
                                                    <option>Australian</option>
                                                </Form.Select>
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>{t('topjobs.gender')} <i>*</i></Form.Label>
                                                <Form.Check type="radio" name="group1" aria-label="radio 1" label={t('topjobs.female')}/>
                                                <Form.Check type="radio" name="group1" aria-label="radio 2" label={t('topjobs.male')}/>
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>{t('topjobs.maritals')}</Form.Label>
                                                <Form.Check type="radio" name="group1" aria-label="radio 1" label={t('topjobs.single')}/>
                                                <Form.Check type="radio" name="group1" aria-label="radio 2" label={t('topjobs.married')}/>
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>{t('topjobs.address')} <i>*</i></Form.Label>
                                                <Form.Control type="text" placeholder="" size='sm' />
                                                <small>eg: 124, Perera Avenue</small>
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>&nbsp;</Form.Label>
                                                <Form.Control type="text" placeholder="" size='sm' />
                                                <small>eg: Havelock Town</small>
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>&nbsp;</Form.Label>
                                                <Form.Control type="text" placeholder="" size='sm' />
                                                <small>eg: Colombo 05</small>
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>{t('topjobs.nic')}</Form.Label>
                                                <Form.Control type="text" placeholder="897112663v" size='sm' />
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>{t('topjobs.passport')}</Form.Label>
                                                <Form.Control type="text" placeholder="897112663v" size='sm' />
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>{t('topjobs.country')} <i>*</i></Form.Label>
                                                <Form.Select defaultValue="Select" size='sm'>
                                                    <option>Sri Lanka</option>
                                                    <option>Afganistan</option>
                                                    <option>Albanian</option>
                                                    <option>Australia</option>
                                                </Form.Select>
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>{t('topjobs.ds')} <i>*</i></Form.Label>
                                                <Form.Select defaultValue="Select" size='sm'>
                                                    <option>Colombo</option>
                                                    <option>Anuradhapura</option>
                                                    <option>Ampara</option>
                                                    <option>Badulla</option>
                                                </Form.Select>
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>{t('topjobs.dc')} <i>*</i></Form.Label>
                                                <Form.Select defaultValue="Select" size='sm'>
                                                    <option>Battaramulla</option>
                                                    <option>Rajagiriya</option>
                                                    <option>Borella</option>
                                                    <option>Malabe</option>
                                                </Form.Select>
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>{t('topjobs.mobile')} <i>*</i></Form.Label>
                                                <Form.Control type="text" placeholder="0774372661" size='sm' />
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>{t('topjobs.telephone')}</Form.Label>
                                                <Form.Control type="text" placeholder="0112970900" size='sm' />
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>{t('topjobs.notice')}</Form.Label>
                                                <Form.Select defaultValue="Select" size='sm'>
                                                    <option>4 Weeks</option>
                                                    <option>Immediately</option>
                                                    <option>1 Week</option>
                                                    <option>2 Weeks</option>
                                                    <option>3 Weeks</option>
                                                </Form.Select>
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>{t('topjobs.salary')}</Form.Label>
                                                <Form.Control type="text" placeholder="" size='sm' />
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>{t('topjobs.social')}</Form.Label>
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
                                    <h6>School Education</h6>
                                    <Form>
                                        <Row>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>Qualification <i>*</i></Form.Label>
                                                <Form.Select defaultValue="Select" size='sm'>
                                                    <option>Select Educaion Level</option>
                                                    <option>G.C.E A/L</option>
                                                    <option>G.C.E O/L</option>
                                                </Form.Select>
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>Scheme <i>*</i></Form.Label>
                                                <Form.Select defaultValue="Select" size='sm'>
                                                    <option>No Scheme</option>
                                                </Form.Select>
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>Results <i>*</i></Form.Label>
                                                <Form.Select defaultValue="Select" size='sm'>
                                                    <option>No Subjects</option>
                                                </Form.Select>
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>Grade</Form.Label>
                                                <Form.Select defaultValue="Select" size='sm'>
                                                    <option>Higher Distinction</option>
                                                    <option>Distinction</option>
                                                    <option>Credit Pass</option>
                                                    <option>Simple Pass</option>
                                                    <option>Fail</option>
                                                </Form.Select>
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>School/Institute <i className='purple'>*</i></Form.Label>
                                                <Form.Control type="text" placeholder="" size='sm' />
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>Achieved On <i className='purple'>*</i></Form.Label>
                                                <Form.Select defaultValue="Select" size='sm'>
                                                    <option>Month</option>
                                                    <option>Jan</option>
                                                    <option>Feb</option>
                                                    <option>Mar</option>
                                                    <option>Apr</option>
                                                </Form.Select>
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>&nbsp;</Form.Label>
                                                <Form.Control type="text" placeholder="" size='sm' />
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>Medium</Form.Label>
                                                <Form.Select defaultValue="Select" size='sm'>
                                                    <option>Sinhala</option>
                                                    <option>English</option>
                                                    <option>Tamil</option>
                                                    <option>Freanch</option>
                                                    <option>Hindi</option>
                                                </Form.Select>
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>Country <i className='purple'>*</i></Form.Label>
                                                <Form.Select defaultValue="Select" size='sm'>
                                                    <option>Sri Lanka</option>
                                                    <option>Afganistan</option>
                                                    <option>Albania</option>
                                                    <option>Brazil</option>
                                                    <option>Cambodia</option>
                                                </Form.Select>
                                            </Form.Group>
                                            <Form.Group as={Col} xs={12} sm={12} md={12} lg={12} xl={12} className="mb-3" controlId="">
                                                <Form.Label>Description <i className='purple'>*</i></Form.Label>
                                                <Form.Control as="textarea" rows={6} type="text" placeholder="" size='sm' />
                                                <small>ex: AL Marks - 278</small>
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
                                                            <th>Education Level</th>
                                                            <th>Scheme</th>
                                                            <th>Achieved On</th>
                                                            <th width="80px"></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><Form.Check type="checkbox" label="" /></td>
                                                            <td>G.C.E A/L </td>
                                                            <td> </td>
                                                            <td> </td>
                                                            <td>
                                                                <Link to='/Jobseeker/Applicantsingleform'><i className="fa-solid fa-pen-to-square"></i></Link>
                                                                <Link to='/Jobseeker/Applicantsingleform'><i className="fa-solid fa-trash-can"></i></Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><Form.Check type="checkbox" label="" /></td>
                                                            <td>G.C.E A/L </td>
                                                            <td> </td>
                                                            <td> </td>
                                                            <td>
                                                                <Link to='/Jobseeker/Applicantsingleform'><i className="fa-solid fa-pen-to-square"></i></Link>
                                                                <Link to='/Jobseeker/Applicantsingleform'><i className="fa-solid fa-trash-can"></i></Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><Form.Check type="checkbox" label="" /></td>
                                                            <td>G.C.E A/L </td>
                                                            <td> </td>
                                                            <td> </td>
                                                            <td>
                                                                <Link to='/Jobseeker/Applicantsingleform'><i className="fa-solid fa-pen-to-square"></i></Link>
                                                                <Link to='/Jobseeker/Applicantsingleform'><i className="fa-solid fa-trash-can"></i></Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><Form.Check type="checkbox" label="" /></td>
                                                            <td>G.C.E A/L </td>
                                                            <td> </td>
                                                            <td> </td>
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
                                <div className="tab-pane fade" id="v-pills-2" role="tabpanel" aria-labelledby="v-pills-2-tab" >
                                    <h6>Membership</h6>
                                    <Form>
                                        <Row>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>Membership <i>*</i></Form.Label>
                                                <Form.Select defaultValue="Select" size='sm'>
                                                    <option>Select Membershipl</option>
                                                    <option>Membership 1</option>
                                                    <option>Membership 2</option>
                                                </Form.Select>
                                                <small>ex: If not listed, inform to support@topjobs.lk</small>
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>Country <i>*</i></Form.Label>
                                                <Form.Select defaultValue="Select" size='sm'>
                                                    <option>Select Country</option>
                                                </Form.Select>
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>Results <i>*</i></Form.Label>
                                                <Form.Select defaultValue="Select" size='sm'>
                                                    <option>No Subjects</option>
                                                </Form.Select>
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>Year Obtained <i className='purple'>*</i></Form.Label>
                                                <Form.Control type="text" placeholder="" size='sm' />
                                            </Form.Group>
                                            <Form.Group as={Col} xs={12} sm={12} md={12} lg={12} xl={12} className="mb-3" controlId="">
                                                <Form.Label>Description <i className='purple'>*</i></Form.Label>
                                                <Form.Control as="textarea" rows={6} type="text" placeholder="" size='sm' />
                                                <small>ex: Fellow, Institution of Engineers, Sri Lanka</small>
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
                                                            <th>Membership</th>
                                                            <th>Country</th>
                                                            <th>Year Obtained</th>
                                                            <th width="80px"></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><Form.Check type="checkbox" label="" /></td>
                                                            <td>ACS - Australian Computer Society</td>
                                                            <td>Sri Lanka</td>
                                                            <td> </td>
                                                            <td>
                                                                <Link to='/Jobseeker/Applicantsingleform'><i className="fa-solid fa-pen-to-square"></i></Link>
                                                                <Link to='/Jobseeker/Applicantsingleform'><i className="fa-solid fa-trash-can"></i></Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><Form.Check type="checkbox" label="" /></td>
                                                            <td>ACS - Australian Computer Society</td>
                                                            <td>Sri Lanka</td>
                                                            <td> </td>
                                                            <td>
                                                                <Link to='/Jobseeker/Applicantsingleform'><i className="fa-solid fa-pen-to-square"></i></Link>
                                                                <Link to='/Jobseeker/Applicantsingleform'><i className="fa-solid fa-trash-can"></i></Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><Form.Check type="checkbox" label="" /></td>
                                                            <td>ACS - Australian Computer Society</td>
                                                            <td>Sri Lanka</td>
                                                            <td> </td>
                                                            <td>
                                                                <Link to='/Jobseeker/Applicantsingleform'><i className="fa-solid fa-pen-to-square"></i></Link>
                                                                <Link to='/Jobseeker/Applicantsingleform'><i className="fa-solid fa-trash-can"></i></Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><Form.Check type="checkbox" label="" /></td>
                                                            <td>ACS - Australian Computer Society</td>
                                                            <td>Sri Lanka</td>
                                                            <td> </td>
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
                                <div className="tab-pane fade" id="v-pills-3" role="tabpanel" aria-labelledby="v-pills-3-tab" >
                                    <h6>Language Proficiency</h6>
                                    <Form>
                                        <Row>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>Language </Form.Label>
                                                <Form.Select defaultValue="Select" size='sm'>
                                                    <option>Select Language</option>
                                                    <option>Arabic</option>
                                                    <option>Dutch</option>
                                                    <option>French</option>
                                                    <option>German</option>
                                                </Form.Select>
                                                <small>ex: If not listed, inform to support@topjobs.lk</small>
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>Spoken</Form.Label>
                                                <Form.Select defaultValue="Select" size='sm'>
                                                    <option>Select</option>
                                                </Form.Select>
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>Reading</Form.Label>
                                                <Form.Select defaultValue="Select" size='sm'>
                                                    <option>Select</option>
                                                </Form.Select>
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>Writing</Form.Label>
                                                <Form.Select defaultValue="Select" size='sm'>
                                                    <option>Select</option>
                                                </Form.Select>
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
                                                            <th>Langauge</th>
                                                            <th>Spoken</th>
                                                            <th>Reading</th>
                                                            <th>Writing</th>
                                                            <th width="80px"></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><Form.Check type="checkbox" label="" /></td>
                                                            <td>English</td>
                                                            <td>Excellent</td>
                                                            <td>Excellent</td>
                                                            <td>Excellent</td>
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
                                <div className="tab-pane fade" id="v-pills-4" role="tabpanel" aria-labelledby="v-pills-4-tab" >
                                    <h6>Research</h6>
                                    <Form>
                                        <Row>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>Research Area <i>*</i></Form.Label>
                                                <Form.Select defaultValue="Select" size='sm'>
                                                    <option>Select Research</option>
                                                </Form.Select>
                                                <small>ex: If not listed, inform to support@topjobs.lk</small>
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>Commenced Date</Form.Label>
                                                <Form.Select defaultValue="Select" size='sm'>
                                                    <option>Select</option>
                                                </Form.Select>
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>Year</Form.Label>
                                                <Form.Control type="text" placeholder="" size='sm' />
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>Complete Date</Form.Label>
                                                <Form.Select defaultValue="Select" size='sm'>
                                                    <option>Select</option>
                                                </Form.Select>
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>Year</Form.Label>
                                                <Form.Control type="text" placeholder="" size='sm' />
                                            </Form.Group>
                                            <Form.Group as={Col} xs={12} sm={12} md={12} lg={12} xl={12} className="mb-3" controlId="">
                                                <Form.Label>Description <i>*</i></Form.Label>
                                                <Form.Control as="textarea" rows={6} type="text" placeholder="" size='sm' />
                                                <small>ex: Fellow, Institution of Engineers, Sri Lanka</small>
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
                                                            <th>Langauge</th>
                                                            <th>Spoken</th>
                                                            <th>Reading</th>
                                                            <th>Writing</th>
                                                            <th width="80px"></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><Form.Check type="checkbox" label="" /></td>
                                                            <td>English</td>
                                                            <td>Excellent</td>
                                                            <td>Excellent</td>
                                                            <td>Excellent</td>
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
                                <div className="tab-pane fade" id="v-pills-5" role="tabpanel" aria-labelledby="v-pills-5-tab" >
                                    <h6>Achievements</h6>
                                    <Form>
                                        <Row>
                                            <Form.Group as={Col} xs={12} sm={12} md={12} lg={12} xl={12} className="mb-3" controlId="">
                                                <Form.Label>Achievements</Form.Label>
                                                <Form.Control as="textarea" rows={6} type="text" placeholder="" size='sm' />
                                                <small>ex: Interest - Sports, music, dancing and a Dog lover</small>
                                            </Form.Group>
                                            <Col xs={12}>
                                                <Button size='sm' variant="primary" type="submit" className='filter-btn search-btn'>
                                                    <i className="fa-regular fa-floppy-disk"></i> Save
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Form>
                                </div>
                                <div className="tab-pane fade" id="v-pills-6" role="tabpanel" aria-labelledby="v-pills-6-tab" >
                                    <h6>Referees</h6>
                                    <Form>
                                        <Row>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>Name <i>*</i></Form.Label>
                                                <Form.Control type="text" placeholder="" size='sm' />
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>Relationship <i>*</i></Form.Label>
                                                <Form.Control type="text" placeholder="" size='sm' />
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>Designation <i>*</i></Form.Label>
                                                <Form.Control type="text" placeholder="" size='sm' />
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>Phone <i>*</i></Form.Label>
                                                <Form.Control type="text" placeholder="" size='sm' />
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>Email <i className='purple'>*</i></Form.Label>
                                                <Form.Control type="text" placeholder="" size='sm' />
                                            </Form.Group>
                                            <Form.Group as={Col} xs={12} sm={12} md={12} lg={12} xl={12} className="mb-3" controlId="">
                                                <Form.Label>Address <i className='purple'>*</i></Form.Label>
                                                <Form.Control as="textarea" rows={6} type="text" placeholder="" size='sm' />
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
                                                            <th>Name</th>
                                                            <th>Phone</th>
                                                            <th width="80px"></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><Form.Check type="checkbox" label="" /></td>
                                                            <td>Channa</td>
                                                            <td>0715738301</td>
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
                                <div className="tab-pane fade" id="v-pills-7" role="tabpanel" aria-labelledby="v-pills-7-tab" >
                                    <h6>Family Information</h6>
                                    <Form>
                                        <Row>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>Name <i>*</i></Form.Label>
                                                <Form.Control type="text" placeholder="" size='sm' />
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>Relationship <i>*</i></Form.Label>
                                                <Form.Control type="text" placeholder="" size='sm' />
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>Date of Birth <i>*</i></Form.Label>
                                                <Form.Control type="date" placeholder="" size='sm' />
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>Gender</Form.Label>
                                                <Form.Check type="radio" name="group1" aria-label="radio 1" label="Male"/>
                                                <Form.Check type="radio" name="group1" aria-label="radio 2" label="Female"/>
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>Designation <i>*</i></Form.Label>
                                                <Form.Control type="text" placeholder="" size='sm' />
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>Organisation/School <i className='purple'>*</i></Form.Label>
                                                <Form.Control type="text" placeholder="" size='sm' />
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>Is e/she a Dependant of yours?</Form.Label>
                                                <Form.Check type="radio" name="group12" aria-label="radio 1" label="Yes"/>
                                                <Form.Check type="radio" name="group12" aria-label="radio 2" label="No"/>
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>Is he/she an employee of My Common Profile ?</Form.Label>
                                                <Form.Check type="radio" name="group14" aria-label="radio 1" label="Yes"/>
                                                <Form.Check type="radio" name="group14" aria-label="radio 2" label="No"/>
                                            </Form.Group>
                                            <Form.Group as={Col} xs={12} sm={12} md={12} lg={12} xl={12} className="mb-3" controlId="">
                                                <Form.Label>Remark</Form.Label>
                                                <Form.Control as="textarea" rows={6} type="text" placeholder="" size='sm' />
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
                                                            <th>Name</th>
                                                            <th>Relationship</th>
                                                            <th>Designation</th>
                                                            <th>Organisation</th>
                                                            <th width="80px"></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><Form.Check type="checkbox" label="" /></td>
                                                            <td>Somasiri</td>
                                                            <td>Father</td>
                                                            <td>Manager</td>
                                                            <td></td>
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
                                <div className="tab-pane fade" id="v-pills-8" role="tabpanel" aria-labelledby="v-pills-8-tab" >
                                    <h6>Job Preference</h6>
                                    <Form>
                                        <Row>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>Job Category <i>*</i></Form.Label>
                                                <Form.Select defaultValue="Select" size='sm'>
                                                    <option>Select Category</option>
                                                </Form.Select>
                                                <small>ex: If not listed, inform to support@topjobs.lk</small>
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>Industry <i>*</i></Form.Label>
                                                <Form.Select defaultValue="Select" size='sm'>
                                                    <option>Select Industry</option>
                                                </Form.Select>
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>Preference <i>*</i></Form.Label>
                                                <Form.Select defaultValue="Select" size='sm'>
                                                    <option>Select Preference</option>
                                                </Form.Select>
                                            </Form.Group>
                                            <Form.Group as={Col} xs={12} sm={12} md={12} lg={12} xl={12} className="mb-3" controlId="">
                                                <Form.Label>Remark <i className='purple'>*</i></Form.Label>
                                                <Form.Control as="textarea" rows={6} type="text" placeholder="" size='sm' />
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
                                                            <th>Job Category</th>
                                                            <th>Industry</th>
                                                            <th>Preference</th>
                                                            <th width="80px"></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><Form.Check type="checkbox" label="" /></td>
                                                            <td>Administration</td>
                                                            <td>Unspecified</td>
                                                            <td>1</td>
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
                                <div className="tab-pane fade" id="v-pills-9" role="tabpanel" aria-labelledby="v-pills-9-tab" >
                                    <h6>Preferred Job Location</h6>
                                    <Form>
                                        <Row>
                                            <Form.Group as={Col} xs={12} className="mb-3" controlId="">
                                                <Table responsive borderless striped hover>
                                                    <thead>
                                                        <tr>
                                                            <th width="20%">Location</th>
                                                            <th width="20%"></th>
                                                            <th width="20%"></th>
                                                            <th width="20%"></th>
                                                            <th width="20%"></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><Form.Check type="checkbox" label="" /> Afganistan, Afganistan</td>
                                                            <td><Form.Check type="checkbox" label="" /> Albania (Any location)</td>
                                                            <td><Form.Check type="checkbox" label="" /> Algeria (Any location)</td>
                                                            <td><Form.Check type="checkbox" label="" /> Algeria (Any location)</td>
                                                            <td><Form.Check type="checkbox" label="" /> Algeria (Any location)</td>
                                                        </tr>
                                                        <tr>
                                                            <td><Form.Check type="checkbox" label="" /> Afganistan, Afganistan</td>
                                                            <td><Form.Check type="checkbox" label="" /> Albania (Any location)</td>
                                                            <td><Form.Check type="checkbox" label="" /> Algeria (Any location)</td>
                                                            <td><Form.Check type="checkbox" label="" /> Algeria (Any location)</td>
                                                            <td><Form.Check type="checkbox" label="" /> Algeria (Any location)</td>
                                                        </tr>
                                                        <tr>
                                                            <td><Form.Check type="checkbox" label="" /> Afganistan, Afganistan</td>
                                                            <td><Form.Check type="checkbox" label="" /> Albania (Any location)</td>
                                                            <td><Form.Check type="checkbox" label="" /> Algeria (Any location)</td>
                                                            <td><Form.Check type="checkbox" label="" /> Algeria (Any location)</td>
                                                            <td><Form.Check type="checkbox" label="" /> Algeria (Any location)</td>
                                                        </tr>
                                                        <tr>
                                                            <td><Form.Check type="checkbox" label="" /> Afganistan, Afganistan</td>
                                                            <td><Form.Check type="checkbox" label="" /> Albania (Any location)</td>
                                                            <td><Form.Check type="checkbox" label="" /> Algeria (Any location)</td>
                                                            <td><Form.Check type="checkbox" label="" /> Algeria (Any location)</td>
                                                            <td><Form.Check type="checkbox" label="" /> Algeria (Any location)</td>
                                                        </tr>
                                                        <tr>
                                                            <td><Form.Check type="checkbox" label="" /> Afganistan, Afganistan</td>
                                                            <td><Form.Check type="checkbox" label="" /> Albania (Any location)</td>
                                                            <td><Form.Check type="checkbox" label="" /> Algeria (Any location)</td>
                                                            <td><Form.Check type="checkbox" label="" /> Algeria (Any location)</td>
                                                            <td><Form.Check type="checkbox" label="" /> Algeria (Any location)</td>
                                                        </tr>
                                                        <tr>
                                                            <td><Form.Check type="checkbox" label="" /> Afganistan, Afganistan</td>
                                                            <td><Form.Check type="checkbox" label="" /> Albania (Any location)</td>
                                                            <td><Form.Check type="checkbox" label="" /> Algeria (Any location)</td>
                                                            <td><Form.Check type="checkbox" label="" /> Algeria (Any location)</td>
                                                            <td><Form.Check type="checkbox" label="" /> Algeria (Any location)</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
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
                                                            <th>Preferred Location</th>
                                                            <th width="80px"></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><Form.Check type="checkbox" label="" /></td>
                                                            <td>Any where in Sri Lanka</td>
                                                            <td>
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
                                <div className="tab-pane fade" id="v-pills-10" role="tabpanel" aria-labelledby="v-pills-10-tab" >
                                    <h6>Uploaded CVs / Certificates</h6>
                                    <Form>
                                        <Row>
                                            <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} className="mb-3" controlId="">
                                                <Form.Label>CV/Documents <i>*</i></Form.Label>
                                                <Form.Control type="file" placeholder="" size='sm' />
                                            </Form.Group><Col xs={12}>
                                                <Button size='sm' variant="primary" type="submit" className='filter-btn search-btn mt-4'>
                                                    <i className="fa-solid fa-circle-plus"></i> Add To List
                                                </Button>
                                            </Col>
                                            <Col xs={12} className='mt-4'>
                                                <Table responsive borderless striped hover>
                                                    <thead>
                                                        <tr>
                                                            <th width="60px"><Form.Check type="checkbox" label="" /></th>
                                                            <th>Document Availability</th>
                                                            <th>Document Type</th>
                                                            <th>View</th>
                                                            <th width="80px"></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><Form.Check type="checkbox" label="" /></td>
                                                            <td>Common</td>
                                                            <td>CV <Link to='/Jobseeker/Applicantsingleform'>Change</Link></td>
                                                            <td>View</td>
                                                            <td>
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