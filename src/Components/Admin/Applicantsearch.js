import React, { useState } from 'react';
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Collapse from 'react-bootstrap/Collapse';
import Pagination from 'react-bootstrap/Pagination';

function Applicantsearch () {  

    useEffect(() => {
        document.body.classList.add('applicantsearch','blue','defhider')
        return () => {
          document.body.classList.remove('applicantsearch','blue','defhider')
        }
    }, [])

    const [open, setOpen] = useState(false);

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
                            <h4>Applicant Search</h4> 
                            <small className='d-none d-sm-block'>Your last login was on 07 February 2023 at 04:27 PM</small>  
                            <div className='admin-nav'>
                                <Link to='/Admin/Welcome' title='Dashboard'><i className="fa-solid fa-house"></i></Link>
                                <Link to='/#' title='Help'><i className="fa-solid fa-circle-info"></i></Link>
                                <Link to='/#' title='FAQ'><i className="fa-solid fa-comment-dots"></i></Link>
                            </div>                        
                        </Col>
                        <Col className='col-2 col-sm-2 col-md-2 col-lg-1 text-left order-sm-last'>
                            <Link to='/Admin/Login' className='logout'><i className="fa-solid fa-arrow-right-from-bracket"></i></Link>                     
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
                        <Form className='filter-frm mb-3'>
                            <Row>
                                <Form.Group as={Col} xs={6} sm={3} className="mb-3" controlId="">
                                    <Form.Label>Applicant Code</Form.Label>
                                    <Form.Control type="text" placeholder="Code" size='sm' />
                                </Form.Group>
                                <Form.Group as={Col} xs={6} sm={3} className="mb-3" controlId="">
                                    <Form.Label>Applicant Name</Form.Label>
                                    <Form.Control type="text" placeholder="Name" size='sm' />
                                </Form.Group>
                                <Form.Group as={Col} xs={6} sm={3} className="mb-3" controlId="">
                                    <Form.Label>Applicant NIC</Form.Label>
                                    <Form.Control type="text" placeholder="NIC" size='sm' />
                                    <small>eg: 881526603V</small>
                                </Form.Group>
                                <Form.Group as={Col} xs={6} sm={3} className="mb-3" controlId="">
                                    <Form.Label>Age</Form.Label>
                                    <Form.Select defaultValue="Select" className='w-60' size='sm'>
                                        <option>Select</option>
                                        <option>Below</option>
                                        <option>Above</option>
                                        <option>Between</option>
                                    </Form.Select>
                                    <Form.Control type="text" placeholder="" className='w-40' size='sm' />
                                </Form.Group>
                                <Form.Group as={Col} xs={6} sm={3} className="mb-3" controlId="">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control type="text" placeholder="Address" size='sm' />
                                    <small>eg: Colombo Sri Lanka</small>
                                </Form.Group>
                                <Form.Group as={Col} xs={6} md="auto" className="mb-3" controlId="">
                                    <Form.Label>Gender</Form.Label>
                                    <Form.Check type="radio" name="group1" aria-label="radio 1" label="Male"/>
                                    <Form.Check type="radio" name="group1" aria-label="radio 2" label="Female"/>
                                    <Form.Check type="radio" name="group1" aria-label="radio 3" label="Both"/>
                                </Form.Group>
                                <Form.Group as={Col} xs={6} sm={3} className="mb-3" controlId="">
                                    <Form.Label>Salary Expected (Rs)</Form.Label>
                                    <Form.Select defaultValue="Select" className='w-40 me-2' size='sm'>
                                        <option>Select</option>
                                        <option>Less or Equal</option>
                                        <option>More or Equal</option>
                                        <option>Between</option>
                                    </Form.Select>
                                    <Form.Control type="text" placeholder="" className='w-60 me-0' size='sm' />
                                </Form.Group>                                
                            </Row>
                            <Row>
                                <Col>
                                    <div class="divider">
                                        <span></span>
                                        <span>
                                            <Button size='sm' onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open} className='adv-btn mb-3'><i className="fa-solid fa-angle-down"></i> Advance Search <i className="fa-solid fa-angle-down"></i></Button>
                                        </span>
                                        <span></span>
                                    </div>                                    
                                    <Collapse in={open}>
                                        <div id="example-collapse-text">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                        terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                        labore wes anderson cred nesciunt sapiente ea proident.
                                        </div>
                                    </Collapse>
                                </Col>
                            </Row>
                            <Row className="justify-content-end mt-3">
                                <Col md="auto">
                                    <Button size='sm' variant="primary" type="submit" className='filter-btn search-btn'>
                                        Search All
                                    </Button>
                                    <Button size='sm' variant="primary" type="submit" className='filter-btn search-btn'>
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
                <Form>
                    <Row className='align-items-center mb-2'>
                        <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6} className='prel'>
                            <Form.Group as={Col} xs={12} md="auto" className="mb-3" controlId="">
                                <Form.Check type="radio" name="group1" aria-label="radio 1" label="Applicant List (2425)"/>
                                <Form.Check type="radio" name="group1" aria-label="radio 2" label="Archived Applicants (0)"/>
                            </Form.Group>              
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6} className='prel'>                           
                            <div className='tb-leg'><i className="fa-solid fa-star c-yellow"></i> School Education</div> 
                            <div className='tb-leg'><i className="fa-solid fa-star c-green"></i> Higher Education</div>  
                            <div className='tb-leg'><i className="fa-solid fa-star c-red"></i> Experience</div>          
                        </Col>
                    </Row>
                    <Row className='h-100'>
                        <Col xs={12} className='prel'>
                            <div className='pagin-wrapper'>
                                <p> 1 - 20 of 2426 Applicants(s) in 122 page(s) </p><Pagination size="sm">{items}</Pagination>
                            </div>              
                        </Col>
                        <Col xs={12} className='prel mt-3'>
                            <Table striped hover responsive className='appsearch-tbl'>
                                <thead>
                                    <tr>
                                        <th><Form.Check type="checkbox" label="" /></th>
                                        <th>#</th>
                                        <th></th>
                                        <th>Code</th>
                                        <th>Tabs</th>
                                        <th>Name</th>
                                        <th>NIC</th>
                                        <th>Preferences (C|A)</th>
                                        <th>Age</th>
                                        <th>Address</th>
                                        <th>Contacts</th>
                                        <th>CV</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><Form.Check type="checkbox" label="" /></td>
                                        <td>1</td>
                                        <td><i className="fa-solid fa-person fs-6"></i></td>
                                        <td>0001459397</td>
                                        <td>
                                            <i className="fa-solid fa-star c-red me-1"></i>
                                            <i className="fa-solid fa-star c-green me-1"></i>
                                            <i className="fa-solid fa-star c-yellow"></i>
                                        </td>
                                        <td>MOHOMED AMJATH</td>
                                        <td>2002124040</td>
                                        <td>
                                            C: <br></br>
                                            A:
                                        </td>
                                        <td>20</td>
                                        <td>651/6 Kerakapokuna Negombo Road Mabola Wattala Gampaha Sri Lanka</td>
                                        <td>
                                            P: 0112698845 <br></br>
                                            M: 0718562458 <br></br>
                                            E: <i className="fa-solid fa-envelope"></i>
                                        </td>
                                        <td><i className="fa-regular fa-file-pdf fs-4"></i></td>
                                    </tr>
                                    <tr>
                                        <td><Form.Check type="checkbox" label="" /></td>
                                        <td>2</td>
                                        <td><i className="fa-solid fa-person-dress fs-6"></i></td>
                                        <td>0001459397</td>
                                        <td>
                                            <i className="fa-solid fa-star c-red me-1"></i>
                                            <i className="fa-solid fa-star c-green me-1"></i>
                                            <i className="fa-solid fa-star c-yellow"></i>
                                        </td>
                                        <td>MADHUSHI SUDASINGHA</td>
                                        <td>-</td>
                                        <td>
                                            C: <br></br>
                                            A:
                                        </td>
                                        <td>21</td>
                                        <td>No 113, Medagampitiya, Divulapitiya Gampaha Gampaha Sri Lanka</td>
                                        <td>
                                            P: 0112698845 <br></br>
                                            M: 0718562458 <br></br>
                                            E: <i className="fa-solid fa-envelope"></i>
                                        </td>
                                        <td><i className="fa-regular fa-file-pdf fs-4"></i></td>
                                    </tr>
                                </tbody>
                            </Table>               
                        </Col>                        
                    </Row>
                </Form>
            </Container>
        </React.Fragment>
    );
}

export default Applicantsearch;