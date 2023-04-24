import React from 'react';
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Pagination from 'react-bootstrap/Pagination';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function Interviewschedule () {  

    useEffect(() => {
        document.body.classList.add('interviewschedule','blue','defhider')
        return () => {
          document.body.classList.remove('interviewschedule','blue','defhider')
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
            <header id='admin-header' className='admin-header'>
                <Container fluid className=''>
                    <Row className='row align-items-center'>
                        <Col className='col-10 col-sm-3 col-md-3 col-lg-2 text-left'>
                            <div className='admin-logo'>
                                <img src='../images/genesiis.png' className='img-fluid' alt='logo'></img> 
                            </div>                     
                        </Col>
                        <Col className='col-12 col-sm-7 col-md-7 col-lg-9 text-left order-last'>
                            <h4>Tab Customization</h4> 
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
                        <Form className='mb-3'>
                            <Row>
                                <Col xs={12}>
                                    <Tabs defaultActiveKey="tab-custom" id="uncontrolled-tab-example" className="mb-3">
                                        <Tab eventKey="tab-custom" title="Tab Customization">
                                            <Table striped hover responsive>
                                                <thead>
                                                    <tr>
                                                        <th width="50px">#</th>
                                                        <th>Vacancy Tabs</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <Form.Check aria-label="option 1" />
                                                        </td>
                                                        <td>Language</td>
                                                    </tr>
                                                    <tr>
                                                        <td><Form.Check aria-label="option 1" /></td>
                                                        <td>Membership</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <Form.Check aria-label="option 1" />
                                                        </td>
                                                        <td>Research</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <Form.Check aria-label="option 1" />
                                                        </td>
                                                        <td>Nationality</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <Form.Check aria-label="option 1" />
                                                        </td>
                                                        <td>Applicant Residence</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Tab>
                                        <Tab eventKey="agent-rank" title="Agent Rank">
                                            <Table striped hover responsive>
                                                <thead>
                                                    <tr>
                                                        <th width={50}>#</th>
                                                        <th>Matching Criteria</th>
                                                        <th>Points Allocated</th>
                                                        <th>Bonus Points</th>
                                                        <th width={250}>Points for Added Advantages</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Job Category/ Industry</td>
                                                        <td width={150}><Form.Control type="text" className='form-control-sm' placeholder="" /></td>
                                                        <td width={150}><Form.Control type="text" className='form-control-sm' placeholder="" /></td>
                                                        <td width={250}><Form.Control type="text" className='form-control-sm' placeholder="" /></td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>Employment Status</td>
                                                        <td width={150}><Form.Control type="text" className='form-control-sm' placeholder="" /></td>
                                                        <td width={150}><Form.Control type="text" className='form-control-sm' placeholder="" /></td>
                                                        <td width={250}><Form.Control type="text" className='form-control-sm' placeholder="" /></td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td>Salary Expectations</td>
                                                        <td width={150}><Form.Control type="text" className='form-control-sm' placeholder="" /></td>
                                                        <td width={150}><Form.Control type="text" className='form-control-sm' placeholder="" /></td>
                                                        <td width={250}><Form.Control type="text" className='form-control-sm' placeholder="" /></td>
                                                    </tr>
                                                    <tr>
                                                        <td>4</td>
                                                        <td>Preferred Job Location of the Applicant</td>
                                                        <td width={150}><Form.Control type="text" className='form-control-sm' placeholder="" /></td>
                                                        <td width={150}><Form.Control type="text" className='form-control-sm' placeholder="" /></td>
                                                        <td width={250}><Form.Control type="text" className='form-control-sm' placeholder="" /></td>
                                                    </tr>
                                                    <tr>
                                                        <td>5</td>
                                                        <td>Gender</td>
                                                        <td width={150}><Form.Control type="text" className='form-control-sm' placeholder="" /></td>
                                                        <td width={150}><Form.Control type="text" className='form-control-sm' placeholder="" /></td>
                                                        <td width={250}><Form.Control type="text" className='form-control-sm' placeholder="" /></td>
                                                    </tr>
                                                    <tr>
                                                        <td>5</td>
                                                        <td>Age</td>
                                                        <td width={150}><Form.Control type="text" className='form-control-sm' placeholder="" /></td>
                                                        <td width={150}><Form.Control type="text" className='form-control-sm' placeholder="" /></td>
                                                        <td width={250}><Form.Control type="text" className='form-control-sm' placeholder="" /></td>
                                                    </tr>
                                                    <tr>
                                                        <td>5</td>
                                                        <td>Marital Status</td>
                                                        <td width={150}><Form.Control type="text" className='form-control-sm' placeholder="" /></td>
                                                        <td width={150}><Form.Control type="text" className='form-control-sm' placeholder="" /></td>
                                                        <td width={250}><Form.Control type="text" className='form-control-sm' placeholder="" /></td>
                                                    </tr>
                                                    <tr>
                                                        <td>5</td>
                                                        <td>School Education</td>
                                                        <td width={150}><Form.Control type="text" className='form-control-sm' placeholder="" /></td>
                                                        <td width={150}><Form.Control type="text" className='form-control-sm' placeholder="" /></td>
                                                        <td width={250}><Form.Control type="text" className='form-control-sm' placeholder="" /></td>
                                                    </tr>
                                                    <tr>
                                                        <td>5</td>
                                                        <td>Higher Education</td>
                                                        <td width={150}><Form.Control type="text" className='form-control-sm' placeholder="" /></td>
                                                        <td width={150}><Form.Control type="text" className='form-control-sm' placeholder="" /></td>
                                                        <td width={250}><Form.Control type="text" className='form-control-sm' placeholder="" /></td>
                                                    </tr>
                                                    <tr>
                                                        <td>5</td>
                                                        <td>Professional Experience</td>
                                                        <td width={150}><Form.Control type="text" className='form-control-sm' placeholder="" /></td>
                                                        <td width={150}><Form.Control type="text" className='form-control-sm' placeholder="" /></td>
                                                        <td width={250}><Form.Control type="text" className='form-control-sm' placeholder="" /></td>
                                                    </tr>
                                                    <tr>
                                                        <td>5</td>
                                                        <td>Permanent Residential Address</td>
                                                        <td width={150}><Form.Control type="text" className='form-control-sm' placeholder="" /></td>
                                                        <td width={150}><Form.Control type="text" className='form-control-sm' placeholder="" /></td>
                                                        <td width={250}><Form.Control type="text" className='form-control-sm' placeholder="" /></td>
                                                    </tr>
                                                    <tr>
                                                        <td>5</td>
                                                        <td>Keyword</td>
                                                        <td width={150}><Form.Control type="text" className='form-control-sm' placeholder="" /></td>
                                                        <td width={150}><Form.Control type="text" className='form-control-sm' placeholder="" /></td>
                                                        <td width={250}><Form.Control type="text" className='form-control-sm' placeholder="" /></td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td><b>Total Points</b></td>
                                                        <td><b>0</b></td>
                                                        <td><b>0</b></td>
                                                        <td><b>0</b></td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Tab>
                                    </Tabs>                                    
                                </Col>                             
                            </Row>
                            <Row className="justify-content-end mt-3">
                                <Col md="auto">
                                    <Button size='sm' variant="primary" type="submit" className='filter-btn search-btn'>
                                        <i class="bi bi-save2-fill me-2"></i>
                                        Save Tabs
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

export default Interviewschedule;