import React from 'react';
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Superadminheader from '../Common/Superadminheader';
// import { Link } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import Collapse from 'react-bootstrap/Collapse';
import Pagination from 'react-bootstrap/Pagination';
import { Link } from 'react-router-dom';

function Applicantsearch () {  

    useEffect(() => {
        document.body.classList.add('applicantsearch','red','defhider')
        return () => {
          document.body.classList.remove('applicantsearch','red','defhider')
        }
    }, [])

    //const [open, setOpen] = useState(false);

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
            <Superadminheader/>
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
                        <Button size='sm' className='me-2 add-btn'><i className="fa-solid fa-square-plus"></i> Add New Organisation</Button>
                        <Button size='sm' className='add-btn'><i className="fa-solid fa-square-plus"></i> Add New Organisation In Quick Mode</Button>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Form className='filter-frm mb-3'>
                            <Row>
                                <Form.Group as={Col} xs={6} sm={2} className="mb-3" controlId="">
                                    <Form.Label>Organisation</Form.Label>
                                    <Form.Control type="text" placeholder="Code" size='sm' />
                                </Form.Group>
                                <Form.Group as={Col} xs={6} sm={4} className="mb-3" controlId="">
                                    <Form.Label>&nbsp;</Form.Label>
                                    <Form.Control type="text" placeholder="Description" size='sm' />
                                </Form.Group>
                                <Form.Group as={Col} xs={6} sm={3} className="mb-3" controlId="">
                                    <Form.Label>Location</Form.Label>
                                    <Form.Control type="text" placeholder="" size='sm' />
                                </Form.Group>
                                <Form.Group as={Col} xs={6} sm={3} className="mb-3" controlId="">
                                    <Form.Label>Status</Form.Label>
                                    <Form.Check type="radio" name="group11" aria-label="radio 1" label="Active"/>
                                    <Form.Check type="radio" name="group11" aria-label="radio 2" label="InActive"/>
                                    <Form.Check type="radio" name="group11" aria-label="radio 3" label="Pending"/>
                                    <Form.Check type="radio" name="group11" aria-label="radio 4" label="All"/>
                                </Form.Group>
                                <Form.Group as={Col} xs={4} sm={2} className="mb-3" controlId="">
                                    <Form.Label>Expiry Month</Form.Label>
                                    <Form.Select defaultValue="Select" className=' me-2' size='sm'>
                                        <option>Jan</option>
                                        <option>Feb</option>
                                        <option>Mar</option>
                                        <option>Apr</option>
                                    </Form.Select>
                                </Form.Group>  
                                <Form.Group as={Col} xs={6} sm={2} className="mb-3" controlId="">
                                    <Form.Label>Type</Form.Label>
                                    <Form.Check type="radio" name="group111" aria-label="radio 1" label="Single"/>
                                    <Form.Check type="radio" name="group111" aria-label="radio 3" label="Multiple"/>
                                    <Form.Check type="radio" name="group111" aria-label="radio 4" label="All"/>
                                </Form.Group> 
                                <Form.Group as={Col} xs={4} sm={2} className="mb-3" controlId="">
                                    <Form.Label>Industry</Form.Label>
                                    <Form.Select defaultValue="Select" className=' me-2' size='sm'>
                                        <option>Any</option>
                                        <option>Agriculture</option>
                                        <option>Airline</option>
                                        <option>Apparel Industry</option>
                                    </Form.Select>
                                </Form.Group>  
                                <Form.Group as={Col} xs={4} sm={2} className="mb-3" controlId="">
                                    <Form.Label>Legal Status</Form.Label>
                                    <Form.Select defaultValue="Select" className=' me-2' size='sm'>
                                        <option>Any</option>
                                        <option>Association</option>
                                        <option>Government</option>
                                        <option>NGO/INGO</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group as={Col} xs={2} sm={1} className="mb-3" controlId="">
                                    <Form.Label>Records per page</Form.Label>
                                    <Form.Select defaultValue="Select" className=' me-2' size='sm'>
                                        <option>10</option>
                                        <option>20</option>
                                        <option>30</option>
                                        <option>40</option>
                                    </Form.Select>
                                </Form.Group>
                            </Row>
                            <Row className="justify-content-end mt-3">
                                <Col md="auto">
                                    <Button size='sm' variant="primary" type="submit" className='filter-btn search-btn'>
                                        <i className="fa-solid fa-magnifying-glass"></i> Search
                                    </Button>
                                    <Button size='sm' variant="danger" type="submit" className='filter-btn'>
                                        <i className="fa-solid fa-broom"></i> Clear
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
                <Form>
                    <Row className='align-items-center mb-2'>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className='prel'>                           
                            <div className='tb-leg'><i className="fa-solid fa-star c-green"></i> Active</div> 
                            <div className='tb-leg'><i className="fa-solid fa-star c-red"></i> Inactive</div>  
                            <div className='tb-leg'><i className="fa-solid fa-star c-yellow"></i> Pending</div>          
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
                                        <th>Organisation</th>
                                        <th>Contact Details</th>
                                        <th>Exp Date</th>
                                        <th>Web</th>
                                        <th>Page</th>
                                        <th>Rating</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><Form.Check type="checkbox" label="" /></td>
                                        <td>1</td>
                                        <td><i className="fa-solid fa-star c-green me-1"></i></td>
                                        <td>0000000001</td>
                                        <td>Genesiis Software Pvt Ltd </td>
                                        <td>Senaka Weerasooria</td>
                                        <td>
                                            C: 4765400<br></br>
                                            E: sdb@genesiis.com 
                                        </td>
                                        <td>06/06/2024</td>
                                        <td>www.genesiis.com</td>
                                        <td>5 Star</td>
                                        <td>
                                            <Link to='/Superadmin/Sawelcome'><i className="fa-solid fa-money-bill-1"></i></Link>
                                            <Link to='/Superadmin/Sawelcome'><i className="fa-solid fa-upload"></i></Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><Form.Check type="checkbox" label="" /></td>
                                        <td>1</td>
                                        <td><i className="fa-solid fa-star c-green me-1"></i></td>
                                        <td>0000000001</td>
                                        <td>Genesiis Software Pvt Ltd </td>
                                        <td>Senaka Weerasooria</td>
                                        <td>
                                            C: 4765400<br></br>
                                            E: sdb@genesiis.com 
                                        </td>
                                        <td>06/06/2024</td>
                                        <td>www.genesiis.com</td>
                                        <td>5 Star</td>
                                        <td>
                                            <Link to='/Superadmin/Sawelcome'><i className="fa-solid fa-money-bill-1"></i></Link>
                                            <Link to='/Superadmin/Sawelcome'><i className="fa-solid fa-upload"></i></Link>
                                        </td>
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