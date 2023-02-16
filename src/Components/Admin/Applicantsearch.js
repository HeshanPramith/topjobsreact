import React, { useState } from 'react';
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Adminheader from '../Common/Adminheader';
import Alert from 'react-bootstrap/Alert';
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Collapse from 'react-bootstrap/Collapse';

function Applicantsearch () {  

    useEffect(() => {
        document.body.classList.add('applicantsearch','blue','defhider')
        return () => {
          document.body.classList.remove('applicantsearch','blue','defhider')
        }
    }, [])

    const [open, setOpen] = useState(false);
    
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
                            <h4>Applicant Search</h4> 
                            <small className='d-none d-sm-block'>Your last login was on 07 February 2023 at 04:27 PM</small>  
                            <div className='admin-nav'>
                                <a href='/Admin/Welcome' title='Dashboard'><i className="fa-solid fa-house"></i></a>
                                <a href='/#' title='Help'><i className="fa-solid fa-circle-info"></i></a>
                                <a href='/#' title='FAQ'><i className="fa-solid fa-comment-dots"></i></a>
                            </div>                        
                        </Col>
                        <Col className='col-2 col-sm-2 col-md-2 col-lg-1 text-left order-sm-last'>
                            <a href='/Admin/Login' className='logout'><i className="fa-solid fa-arrow-right-from-bracket"></i></a>                     
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
                    <Col xs={12} className='mb-3'>
                        <Button size='sm' className='me-2 add-btn'><i className="fa-solid fa-square-plus"></i> Fast Data Entry Form</Button>
                        <Button size='sm' className='add-btn'><i className="fa-solid fa-square-plus"></i> Detail Data Entry Form</Button>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Form className='filter-frm'>
                            <Row>
                                <Form.Group as={Col} xs={6} sm={3} className="mb-3" controlId="">
                                    <Form.Label>Applicant Code</Form.Label>
                                    <Form.Control type="text" placeholder="Code" />
                                </Form.Group>
                                <Form.Group as={Col} xs={6} sm={3} className="mb-3" controlId="">
                                    <Form.Label>Applicant Name</Form.Label>
                                    <Form.Control type="text" placeholder="Name" />
                                </Form.Group>
                                <Form.Group as={Col} xs={6} sm={3} className="mb-3" controlId="">
                                    <Form.Label>Applicant NIC</Form.Label>
                                    <Form.Control type="text" placeholder="NIC" />
                                    <small>eg: 881526603V</small>
                                </Form.Group>
                                <Form.Group as={Col} xs={6} sm={3} className="mb-3" controlId="">
                                    <Form.Label>Age</Form.Label>
                                    <Form.Select defaultValue="Select" className='w-60'>
                                        <option>Select</option>
                                        <option>Below</option>
                                        <option>Above</option>
                                        <option>Between</option>
                                    </Form.Select>
                                    <Form.Control type="text" placeholder="" className='w-40' />
                                </Form.Group>
                                <Form.Group as={Col} xs={6} sm={3} className="mb-3" controlId="">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control type="text" placeholder="Address" />
                                    <small>eg: Colombo Sri Lanka</small>
                                </Form.Group>
                                <Form.Group as={Col} xs={6} sm={3} className="mb-3" controlId="">
                                    <Form.Label>Gender</Form.Label>
                                    <Form.Check type="radio" name="group1" aria-label="radio 1" label="Male"/>
                                    <Form.Check type="radio" name="group1" aria-label="radio 2" label="Female"/>
                                    <Form.Check type="radio" name="group1" aria-label="radio 3" label="Both"/>
                                </Form.Group>
                                <Form.Group as={Col} xs={6} sm={3} className="mb-3" controlId="">
                                    <Form.Label>Salary Expected (Rs)</Form.Label>
                                    <Form.Select defaultValue="Select" className='w-40 me-2'>
                                        <option>Select</option>
                                        <option>Less or Equal</option>
                                        <option>More or Equal</option>
                                        <option>Between</option>
                                    </Form.Select>
                                    <Form.Control type="text" placeholder="" className='w-60 me-0' />
                                </Form.Group>                                
                            </Row>
                            <Row>
                                <Col>
                                    <Button
                                        onClick={() => setOpen(!open)}
                                        aria-controls="example-collapse-text"
                                        aria-expanded={open}
                                    >
                                        click
                                    </Button>
                                    <Collapse in={open}>
                                        <div id="example-collapse-text">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                        terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                        labore wes anderson cred nesciunt sapiente ea proident.
                                        </div>
                                    </Collapse>
                                </Col>
                            </Row>
                            <Row className="justify-content-end">
                                <Col className='pull-right'>
                                    <Button size='sm' variant="primary" type="submit" className='filter-btn'>
                                        Search All
                                    </Button>
                                    <Button size='sm' variant="primary" type="submit" className='filter-btn'>
                                        Search in Open-list
                                    </Button>
                                    <Button size='sm' variant="danger" type="submit" className='filter-btn'>
                                        Clear
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
                <Row className='h-100'>
                    <Col xs={12} sm={12} md={8} lg={9} xl={9} xxl={10} className='prel'>
                        011              
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={3} xl={3} xxl={2} className='prel'>
                        123               
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}

export default Applicantsearch;