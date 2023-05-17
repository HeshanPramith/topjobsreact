import React from 'react';
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Form, FormGroup } from 'react-bootstrap';
import Superadminheader from '../Common/Superadminheader';
import Pagination from 'react-bootstrap/Pagination';

function Userlist () {  

    useEffect(() => {
        document.body.classList.add('sapplicantloginmenu','red','defhider')
        return () => {
          document.body.classList.remove('sapplicantloginmenu','red','defhider')
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
            <Superadminheader/>
            <Container fluid className='h-100 mt-4'>
                <Row>
                    <Col xs={12} className='mb-3'>
                        <h1 className='suadmin-page-title'>Applicant Login Menus</h1>
                    </Col>
                </Row>
                <Row className='mb-3'>
                    <Col xs={12} sm={12}> 
                        <Tabs
                            defaultActiveKey="utl"
                            id="fill-tab-example"
                            className=""
                            >
                            <Tab eventKey="utl" title="Inactive Users">
                                <Row>
                                    <Col xs={12} className='mb-3'>
                                        <h5>Inactive Applicants</h5>
                                    </Col>
                                </Row>                                                                   
                                <Form className='user-block'>
                                    <Row className='align-items-center mb-2'>
                                        <Col xs={12} sm={12} md={3} lg={3} xl={2} xxl={2} className='prel'>     
                                            <Form.Label>No of records per page</Form.Label>                      
                                            <FormGroup className='f-group'>
                                                <Form.Select aria-label="Default select example">
                                                    <option value="1">10</option>
                                                    <option value="2">20</option>
                                                    <option value="3">30</option>
                                                    <option value="3">50</option>
                                                </Form.Select>
                                            </FormGroup>          
                                        </Col>
                                        <Col xs={12} sm={12} md={3} lg={3} xl={2} xxl={2} className='prel'>     
                                            <Form.Label>and show me</Form.Label>                      
                                            <FormGroup className='f-group'>
                                                <Form.Select aria-label="Default select example">
                                                    <option value="1">over 3 month(s) old</option>
                                                    <option value="2">over 2 month(s) old</option>
                                                    <option value="3">over 1 month(s) old</option>
                                                    <option value="3">All</option>
                                                </Form.Select>
                                            </FormGroup>          
                                        </Col>
                                        <Col xs={12} sm={12} md={3} lg={3} xl={2} xxl={2} className='prel'>   
                                            <Form.Label>&nbsp;</Form.Label>    
                                            <Button type='submit' className='filter-btn add-btn btn btn-primary btn-sm m-0'><i className="fa-solid fa-arrow-right"></i> Go</Button>         
                                        </Col>
                                    </Row> 
                                    <Row className='align-items-center mb-2'>
                                        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className='prel'>                           
                                            <div className='tb-leg'><i className="fa-solid fa-star c-green"></i> Records &#60; 1 month</div> 
                                            <div className='tb-leg'><i className="fa-solid fa-star c-red"></i> Records &#62; 3 months</div>  
                                            <div className='tb-leg'><i className="fa-solid fa-star c-blue2"></i> Records &#62; 3 months</div>
                                            <div className='tb-leg'><i className="fa-solid fa-star c-blue"></i> 2 months &#60; Records &#60; 3 months</div>          
                                        </Col>
                                    </Row>
                                    <Row className='align-items-center mb-2'>
                                        <Col xs={12} sm={12} md={12} lg={12} xl={126} xxl={12} className='prel'>
                                            1 - 20 of 2426 Applicants(s) in 122 page(s) <Pagination size="sm">{items}</Pagination>
                                        </Col>
                                    </Row>
                                    <Row> 
                                        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className='mb-3'>
                                            <Table striped hover responsive>
                                                <thead>
                                                    <tr>
                                                        <th><Form.Check type="checkbox" label="" /></th>
                                                        <th>User Name</th>
                                                        <th>Email Address</th>
                                                        <th>Date Registered</th>
                                                        <th>Record Age</th>
                                                        <th>Last Login(Inactive Since)</th>
                                                        <th>Inactive Period</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td><Form.Check type="checkbox" label="" /></td>
                                                        <td>saumya</td>
                                                        <td>saumya_kulasekara@yahoo.com</td>
                                                        <td>2006-04-10</td>
                                                        <td>6248</td>
                                                        <td>2006-04-10</td>
                                                        <td>6248</td>
                                                    </tr>
                                                    <tr>
                                                        <td><Form.Check type="checkbox" label="" /></td>
                                                        <td>anusaan</td>
                                                        <td>anusaan@hotmail.com</td>
                                                        <td>2006-04-10</td>
                                                        <td>6248</td>
                                                        <td>2006-04-11</td>
                                                        <td>6247</td>
                                                    </tr>  
                                                    <tr>
                                                        <td><Form.Check type="checkbox" label="" /></td>
                                                        <td>saumya</td>
                                                        <td>saumya_kulasekara@yahoo.com</td>
                                                        <td>2006-04-10</td>
                                                        <td>6248</td>
                                                        <td>2006-04-10</td>
                                                        <td>6248</td>
                                                    </tr>
                                                    <tr>
                                                        <td><Form.Check type="checkbox" label="" /></td>
                                                        <td>anusaan</td>
                                                        <td>anusaan@hotmail.com</td>
                                                        <td>2006-04-10</td>
                                                        <td>6248</td>
                                                        <td>2006-04-11</td>
                                                        <td>6247</td>
                                                    </tr>   
                                                    <tr>
                                                        <td><Form.Check type="checkbox" label="" /></td>
                                                        <td>saumya</td>
                                                        <td>saumya_kulasekara@yahoo.com</td>
                                                        <td>2006-04-10</td>
                                                        <td>6248</td>
                                                        <td>2006-04-10</td>
                                                        <td>6248</td>
                                                    </tr>
                                                    <tr>
                                                        <td><Form.Check type="checkbox" label="" /></td>
                                                        <td>anusaan</td>
                                                        <td>anusaan@hotmail.com</td>
                                                        <td>2006-04-10</td>
                                                        <td>6248</td>
                                                        <td>2006-04-11</td>
                                                        <td>6247</td>
                                                    </tr>                                            
                                                </tbody>
                                            </Table>
                                        </Col>                                       
                                    </Row>
                                    <Row>
                                        <Col xs={12}>
                                            <Button type='submit' className='filter-btn delete-btn btn btn-primary btn-sm m-0'> <i className="fa-solid fa-trash-can"></i> Delete Selected Item</Button>
                                        </Col>
                                    </Row>
                                </Form>                                
                            </Tab>
                            <Tab eventKey="sul" title="Secret Answers">
                                <Form className='user-block'>
                                    <Row className='align-items-center mb-2'>
                                        <Col xs={12} sm={12} md={3} lg={3} xl={2} xxl={2} className='prel'>     
                                            <Form.Label>User Name</Form.Label>                      
                                            <FormGroup className='f-group'>
                                                <Form.Control type="text" placeholder="Heshan"/>
                                            </FormGroup>          
                                        </Col>
                                        <Col xs={12} sm={12} md={3} lg={3} xl={2} xxl={2} className='prel'>   
                                            <Form.Label>&nbsp;</Form.Label>    
                                            <Button className='filter-btn add-btn btn btn-primary btn-sm m-0'><i className="fa-solid fa-magnifying-glass-arrow-right"></i> Show Secret Answer</Button>         
                                        </Col>
                                    </Row> 
                                    <Row className='align-items-center mb-2'>
                                        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className='prel'>
                                            <div className='sec-answ d-flex align-items-center justify-content-center flex-column'>
                                                {/* <h6>Secret Answer is</h6>      */}
                                                <span>Car</span>  
                                            </div>
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