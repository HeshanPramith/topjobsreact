import React, { useState } from 'react';
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Pagination from 'react-bootstrap/Pagination';
import Modal from 'react-bootstrap/Modal';

function Employerlist () {  

    useEffect(() => {
        document.body.classList.add('employerlist','blue','defhider')
        return () => {
          document.body.classList.remove('employerlist','blue','defhider')
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

    const [lgShow, setLgShow] = useState(false);

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
                            <h4>List of Subsidiaries</h4> 
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
                <Row className='mb-3'>
                    <Col xs={12} sm={12} lg={3} xl={3} xxl={2} className="h-100"> 
                        <div className='h-100 prel'>
                            <div className='agent-info'>                                
                                <div className='agent-logo'>
                                    <img src='../images/genesiis.png' className='img-fluid' alt='logo'></img> 
                                </div>
                                <h3>Ref No : 0000000001</h3>
                                <div className='agent-data'>
                                    <p>Genesiis Software Pvt Ltd</p>
                                    <p>Finco Group</p>
                                    <p><Link to='/Employer/Agent'>www.genesiis.com</Link></p>
                                </div>
                            </div>
                        </div>  
                    </Col>
                    <Col xs={12} sm={12} lg={9} xl={9} xxl={10}>    
                        
                        <h5 className='fs-6'>Subsidiaries</h5>
                        <Row>
                            <Col xs={12} className='mb-3'>
                                <Link to='/Employer/Employer' className='me-2 add-btn btn btn-primary btn-sm'><i className="fa-solid fa-square-plus"></i> Add New Sub Company</Link>
                            </Col>
                        </Row>
                        <div className='filter-frm mb-3'>                                
                            <Row>
                                <Col xs={12}>
                                    <Form>
                                        <Table striped hover responsive className='employerlist-tbl'>
                                            <thead>
                                                <tr>
                                                    <th><Form.Check type="checkbox" label="" /></th>
                                                    <th>Employer Code</th>
                                                    <th>Organisation Name</th>
                                                    <th>Industry</th>
                                                    <th>Contact Person</th>
                                                    <th>Contact Details</th>
                                                    <th>Locations</th>
                                                    <th>Payment</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><Form.Check type="checkbox" label="" /></td>
                                                    <td><Link to='/Employer/Employerlist'>0000000569</Link></td>
                                                    <td>topjobs.lk</td>
                                                    <td>Education</td>
                                                    <td>Mr. Senaka Weerasooria, CEO</td>
                                                    <td>
                                                        T : 0115884452 <br />
                                                        M : 0718554875 <br />
                                                        E : sdb@genesiis.com
                                                    </td>
                                                    <td>
                                                        <Link to='/Employer/Locationmap'><i className="fa-solid fa-circle-plus"></i></Link>
                                                        <Link to='/Employer/Locationmap'><i className="fa-solid fa-map-location-dot"></i></Link>
                                                    </td>
                                                    <td>
                                                        <Link to='/Employer/Paymentlist'><i className="fa-solid fa-money-bill-1"></i></Link>
                                                        <Link to='/Employer/Employerlist'><i className="fa-solid fa-cloud-arrow-up" onClick={() => setLgShow(true)}></i></Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><Form.Check type="checkbox" label="" /></td>
                                                    <td><Link to='/Employer/Employerlist'>0000000569</Link></td>
                                                    <td>GENESIIS</td>
                                                    <td>Education</td>
                                                    <td>Mr. Senaka Weerasooria, CEO</td>
                                                    <td>
                                                        T : 0115884452 <br />
                                                        M : 0718554875 <br />
                                                        E : sdb@genesiis.com
                                                    </td>
                                                    <td>
                                                        <Link to='/Employer/Locationmap'><i className="fa-solid fa-circle-plus"></i></Link>
                                                        <Link to='/Employer/Locationmap'><i className="fa-solid fa-map-location-dot"></i></Link>
                                                    </td>
                                                    <td>
                                                        <Link to='/Employer/Paymentlist'><i className="fa-solid fa-money-bill-1"></i></Link>
                                                        <Link to='/Employer/Employerlist'><i className="fa-solid fa-cloud-arrow-up" onClick={() => setLgShow(true)}></i></Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><Form.Check type="checkbox" label="" /></td>
                                                    <td><Link to='/Employer/Employerlist'>0000000569</Link></td>
                                                    <td>topjobs.lk</td>
                                                    <td>Education</td>
                                                    <td>Mr. Senaka Weerasooria, CEO</td>
                                                    <td>
                                                        T : 0115884452 <br />
                                                        M : 0718554875 <br />
                                                        E : sdb@genesiis.com
                                                    </td>
                                                    <td>
                                                        <Link to='/Employer/Locationmap'><i className="fa-solid fa-circle-plus"></i></Link>
                                                        <Link to='/Employer/Locationmap'><i className="fa-solid fa-map-location-dot"></i></Link>
                                                    </td>
                                                    <td>
                                                        <Link to='/Employer/Paymentlist'><i className="fa-solid fa-money-bill-1"></i></Link>
                                                        <Link to='/Employer/Employerlist'><i className="fa-solid fa-cloud-arrow-up" onClick={() => setLgShow(true)}></i></Link>
                                                    </td>
                                                </tr>
                                            </tbody>                                            
                                        </Table>
                                    </Form>
                                </Col>
                            </Row>
                        </div>
                        <Row className="justify-content-end mt-3">
                            <Col md="auto">
                                <Button size='sm' variant="primary" type="submit" className='filter-btn delete-btn'>
                                    Delete Checked
                                </Button>
                            </Col>
                        </Row>
                        
                    </Col>
                </Row>
            </Container>

            <Modal size="md" show={lgShow} onHide={() => setLgShow(false)} aria-labelledby="example-modal-sizes-title-lg" centered>
                <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg" className='fs-6'>
                    Upload Small Logo (0000000569 - topjobs.lk)
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Label>Document Path <i>*</i></Form.Label>
                    <Form.Control type="file" placeholder='jpg/PNG/gif' size='sm'/>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setLgShow(false)} className='filter-btn delete-btn'>Close</Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    );
}

export default Employerlist;