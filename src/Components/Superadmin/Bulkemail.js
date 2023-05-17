import React from 'react';
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
// import Table from 'react-bootstrap/Table';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Form } from 'react-bootstrap';
import Superadminheader from '../Common/Superadminheader';

function Userlist () {  

    useEffect(() => {
        document.body.classList.add('bulkemail','red','defhider')
        return () => {
          document.body.classList.remove('bulkemail','red','defhider')
        }
    }, [])
    
    
    return (
        <React.Fragment>
            <Superadminheader/>
            <Container fluid className='h-100 mt-4'>
                <Row>
                    <Col xs={12} className='mb-3'>
                        <h1 className='suadmin-page-title'>Bulk Email Home</h1>
                    </Col>
                </Row>
                <Row className='mb-3'>
                    <Col xs={12} sm={12}> 
                        <Tabs
                            defaultActiveKey="utl"
                            id="fill-tab-example"
                            className=""
                            >
                            <Tab eventKey="utl" title="Weekly Job Alert">
                                <Form className='user-block'>
                                    <Row>
                                        <Col xs={12} className='mb-3'>
                                            <h5>Weekly Job Alert</h5>
                                        </Col>
                                    </Row>
                                    <Row> 
                                        <Col xs={12} sm={6} md={6} lg={3} xl={3} xxl={3} className='mb-3'>
                                            <Form.Group>
                                                <Form.Label>Allow the Scheduler to send Job Alerts</Form.Label>
                                                <Form.Check
                                                    type="switch"
                                                    id="custom-switch"
                                                    label=""
                                                    size="md"
                                                />
                                            </Form.Group>
                                        </Col>  
                                        <Col xs={12} sm={6} md={6} lg={3} xl={3} xxl={3} className='mb-3'>
                                            <Form.Group>
                                                <Form.Label>Job Alert Subject <i>*</i></Form.Label>
                                                <Form.Control type="text" placeholder="Job Alert From topjobs.lk" size='sm' />
                                            </Form.Group>
                                        </Col> 
                                        <Col xs={12} sm={6} md={6} lg={3} xl={3} xxl={3} className='mb-3'>
                                            <Form.Group>
                                                <Form.Label>Job Alert From Address <i>*</i></Form.Label>
                                                <Form.Control type="text" placeholder="sdb@genesiis.com" size='sm' />
                                            </Form.Group>
                                        </Col> 
                                        <Col xs={12} sm={6} md={6} lg={3} xl={3} xxl={3} className='mb-3'>
                                            <Form.Group>
                                                <Form.Label>Job Alert From Display Name <i>*</i></Form.Label>
                                                <Form.Control type="text" placeholder="topjobs.lk" size='sm' />
                                            </Form.Group>
                                        </Col> 
                                        <Col xs={12} sm={6} md={6} lg={3} xl={3} xxl={3} className='mb-3'>
                                            <Form.Group>
                                                <Form.Label>Days to get vacancies submitted within <i>*</i></Form.Label>
                                                <Form.Control type="text" placeholder="7" size='sm' />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={12} sm={6} md={6} lg={6} xl={5} xxl={5} className='mb-3'>
                                            <Form.Group>
                                                <Form.Label>Job Alert From Display Name <i>*</i></Form.Label>
                                                <Form.Control as="textarea" rows={5} type="text" placeholder="These are the latest jobs which match job categories you have selected" size='sm' />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={12} sm={6} md={6} lg={6} xl={4} xxl={4} className='mb-3'>
                                            <Form.Group>
                                                <Form.Label>Job Alert Footer Message(Use P to separate paragraphs)</Form.Label>
                                                <Form.Control as="textarea" rows={5} type="text" placeholder="<b>Note</b><br>Please add this address <br><br> If you want to CHANGE the job categories, logon to your http://www.topjobs.lk topjobs account</a> and edit the job categories from (My Preferences) section." size='sm' />
                                            </Form.Group>
                                        </Col>                                     
                                    </Row>
                                    <Row>
                                        <Col xs={12}>
                                            <Button type='submit' className='filter-btn add-btn btn btn-primary btn-sm m-0 float-end'> <i className="fa-solid fa-floppy-disk"></i> Update Preferences</Button>
                                        </Col>
                                    </Row>
                                </Form>                                
                            </Tab>
                            <Tab eventKey="sul" title="Applicant Job Alert Flag">
                                <Form className='user-block'>
                                    <Row>
                                        <Col xs={12} className='mb-3'>
                                            <h5>Flag Job Alerts</h5>
                                        </Col>
                                    </Row>
                                    <Row> 
                                        <Col xs={12} sm={12} md={6}>
                                            <Row>
                                                <Col xs={12} sm={12} className='mb-3'>
                                                    <Form.Group controlId="">
                                                        <Form.Label>Upload a .csv file which contains a list of applicants whose Job Alert flag to be set to 'NOT SEND'</Form.Label>
                                                        <Form.Control type="file" placeholder='jpg/PNG/gif' size='sm'/>
                                                    </Form.Group>
                                                </Col>  
                                                <Col xs={12}>
                                                    <Button type='submit' className='filter-btn add-btn btn btn-primary btn-sm m-0 mb-4'><i className="fa-solid fa-wrench"></i> Set Job Alert Flag to NOT SEND</Button>
                                                </Col> 
                                            </Row>
                                        </Col>
                                        <Col xs={12} sm={12} md={6}>
                                            <Row>
                                                <Col xs={12} sm={12} className='mb-3'>
                                                    <Form.Group controlId="">
                                                        <Form.Label>Enter Applicant Email for whom you wish to set the Job Alert flag. (Email)</Form.Label>
                                                        <Form.Control type="text" placeholder='Email' size='sm'/>
                                                    </Form.Group>
                                                </Col>  
                                                <Col xs={12}>
                                                    <Button type='submit' className='filter-btn add-btn btn btn-primary btn-sm m-0'><i className="fa-solid fa-magnifying-glass"></i> Find Applicants</Button>
                                                </Col> 
                                            </Row>
                                        </Col>
                                    </Row>
                                </Form> 
                            </Tab>
                            <Tab eventKey="eul" title="topjobs Campus Student Expiry">
                            <Form className='user-block'>
                                    <Row>
                                        <Col xs={12} className='mb-3'>
                                            <h5>Weekly Job Alert</h5>
                                        </Col>
                                    </Row>
                                    <Row> 
                                        <Col xs={12} sm={6} md={6} lg={3} xl={3} xxl={3} className='mb-3'>
                                            <Form.Group>
                                                <Form.Label>Run topjobs Campus Student Expiry Process</Form.Label>
                                                <Form.Check
                                                    type="switch"
                                                    id="custom-switch"
                                                    label=""
                                                    size="md"
                                                />
                                            </Form.Group>
                                        </Col>                                   
                                    </Row>
                                    <Row>
                                        <Col xs={12}>
                                            <Button type='submit' className='filter-btn add-btn btn btn-primary btn-sm m-0 float-start'> <i className="fa-solid fa-floppy-disk"></i> Save</Button>
                                        </Col>
                                    </Row>
                                </Form> 
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}

export default Userlist;