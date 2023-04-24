import React, { useState } from 'react';
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';
// import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import DatePicker from "react-datepicker";
// import Collapse from 'react-bootstrap/Collapse';
import Pagination from 'react-bootstrap/Pagination';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

function Interviewschedule () {  

    useEffect(() => {
        document.body.classList.add('interviewschedule','blue','defhider')
        return () => {
          document.body.classList.remove('interviewschedule','blue','defhider')
        }
    }, [])

    //const [open, setOpen] = useState(false);
    const [startDate, setStartDate] = useState(new Date());

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
            <header id='admin-header' className='admin-header'>
                <Container fluid className=''>
                    <Row className='row align-items-center'>
                        <Col className='col-10 col-sm-3 col-md-3 col-lg-2 text-left'>
                            <div className='admin-logo'>
                                <img src='../images/genesiis.png' className='img-fluid' alt='logo'></img> 
                            </div>                     
                        </Col>
                        <Col className='col-12 col-sm-7 col-md-7 col-lg-9 text-left order-last'>
                            <h4>Schedule Interviews</h4> 
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
                    <Col xs={12}>
                        <Form className='filter-frm mb-3'>
                            <Row>
                                <Form.Group as={Col} xs={6} sm={3} className="mb-3" controlId="">
                                    <Form.Label>Vacancy</Form.Label>
                                    <Form.Select defaultValue="Select" className='me-2' size='sm'>
                                        <option>0000980811 - Senior Software Engineer</option>
                                        <option>0000777155 - BA</option>
                                        <option>0004585548 - Graphic Designer</option>
                                        <option>0000854885 - System Administrator</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group as={Col} xs={6} sm={3} className="mb-3" controlId="">
                                    <Form.Label>Applicant Name</Form.Label>
                                    <Form.Select defaultValue="Select" className='me-2' size='sm'>
                                        <option>Heshan</option>
                                        <option>Ravindra</option>
                                        <option>Dasun</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group as={Col} xs={6} sm={3} className="mb-3" controlId="">
                                    <Form.Label>Interview Type</Form.Label>
                                    <Form.Select defaultValue="Select" className='me-2' size='sm'>
                                        <option>Phone Interview</option>
                                        <option>Second Interview</option>
                                        <option>Final Interview</option>
                                        <option>Exam</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group as={Col} xs={6} sm={3} className="mb-3" controlId="">
                                    <Form.Label>Schedule Date</Form.Label>
                                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className='form-control form-control-sm' />
                                </Form.Group>
                                <Form.Group as={Col} xs={6} sm={3} className="mb-3" controlId="">
                                    <Form.Label>Shedule Time</Form.Label>
                                    <Form.Control type="text" placeholder="HH" className='w-25 d-inline-block' size='sm'/>
                                    <Form.Control type="text" placeholder="MM" className='w-25 d-inline-block mx-2' size='sm'/>
                                    <Form.Select defaultValue="Select" className='w-25 d-inline-block' size='sm'>
                                        <option>AM</option>
                                        <option>PM</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group as={Col} xs={6} sm={6} className="mb-3" controlId="">
                                    <Form.Label>Remarks</Form.Label>
                                    <Form.Control type="text" as="textarea" placeholder="" size='sm' rows={5} />
                                    <small>0 of 250 character limit used</small>
                                </Form.Group>                               
                            </Row>
                            <Row className="justify-content-end mt-3">
                                <Col md="auto">
                                    <Button size='sm' variant="primary" type="submit" className='filter-btn search-btn float-left'>
                                        <i className="bi bi-cloud-arrow-up-fill me-2"></i>
                                        Upload Interview Form
                                    </Button>
                                    <Button size='sm' variant="primary" type="submit" className='filter-btn search-btn'>
                                        <i className="bi bi-save2-fill me-2"></i>
                                        Save
                                    </Button>
                                    <Button size='sm' variant="primary" type="submit" className='filter-btn search-btn'>
                                        <i className="bi bi-save2-fill me-2"></i>
                                        Save & Send Email
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                        <Row className="justify-content-end mt-3 mb-3">
                            <Col xs="12">
                                <Button size='sm' variant="primary" type="submit" className='filter-btn search-btn'>
                                    <i className="bi bi-plus-square-fill me-2"></i>
                                    New Shedule
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Form>
                    <Row className='align-items-center mb-2'>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className='prel'>                           
                            <div className='tb-leg'><i className="fa-solid fa-star c-green"></i> Sent</div>  
                            <div className='tb-leg'><i className="fa-solid fa-star c-red"></i> Not Sent</div>          
                        </Col>
                    </Row>
                    <Row className='h-100'>
                        <Col xs={12} className='mt-3'>
                        <FullCalendar
                            plugins={[dayGridPlugin]}
                            initialView='dayGridMonth'
                            weekends={false}
                            events={[
                                { title: 'Event 1', date: '2023-04-21' },
                                { title: 'Event 2', date: '2023-04-25' }
                            ]}
                        />              
                        </Col>                        
                    </Row>
                </Form>
            </Container>
        </React.Fragment>
    );
}

export default Interviewschedule;