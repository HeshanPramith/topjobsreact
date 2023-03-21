import React from 'react';
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function Contentmanage () {  

    useEffect(() => {
        document.body.classList.add('contentmanage','blue','defhider')
        return () => {
          document.body.classList.remove('contentmanage','blue','defhider')
        }
    }, [])
    
    
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
                            <h4>Page Content Config</h4> 
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
                    <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={3}> 
                        <h5 className='fs-6'>Pages</h5>
                        <Table striped hover responsive className='contentmanage-tbl'>
                            <thead>
                                <tr>
                                    <th>Sequence</th>
                                    <th></th>
                                    <th>Page Name</th>  
                                    <th>Display</th>                                  
                                    <th></th>
                                    <th></th>                                    
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td><Link to='/Employer/Contentmanage'><i className="fa-regular fa-pen-to-square"></i></Link></td>
                                    <td>About Us</td>
                                    <td>No</td>
                                    <td><Link to='/Employer/Contentmanage'><i className="fa-solid fa-trash"></i></Link></td>
                                    <td><Link to='/Employer/Contentmanage'><i className="fa-solid fa-eye"></i></Link></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td><Link to='/Employer/Contentmanage'><i className="fa-regular fa-pen-to-square"></i></Link></td>
                                    <td>Contact Us</td>
                                    <td>No</td>
                                    <td><Link to='/Employer/Contentmanage'><i className="fa-solid fa-trash"></i></Link></td>
                                    <td><Link to='/Employer/Contentmanage'><i className="fa-solid fa-eye"></i></Link></td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td><Link to='/Employer/Contentmanage'><i className="fa-regular fa-pen-to-square"></i></Link></td>
                                    <td>Career</td>
                                    <td>No</td>
                                    <td><Link to='/Employer/Contentmanage'><i className="fa-solid fa-trash"></i></Link></td>
                                    <td><Link to='/Employer/Contentmanage'><i className="fa-solid fa-eye"></i></Link></td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td><Link to='/Employer/Contentmanage'><i className="fa-regular fa-pen-to-square"></i></Link></td>
                                    <td>Association</td>
                                    <td>No</td>
                                    <td><Link to='/Employer/Contentmanage'><i className="fa-solid fa-trash"></i></Link></td>
                                    <td><Link to='/Employer/Contentmanage'><i className="fa-solid fa-eye"></i></Link></td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td><Link to='/Employer/Contentmanage'><i className="fa-regular fa-pen-to-square"></i></Link></td>
                                    <td>Products</td>
                                    <td>No</td>
                                    <td><Link to='/Employer/Contentmanage'><i className="fa-solid fa-trash"></i></Link></td>
                                    <td><Link to='/Employer/Contentmanage'><i className="fa-solid fa-eye"></i></Link></td>
                                </tr>
                            </tbody>
                        </Table>  
                    </Col>
                    <Col xs={12} sm={12} md={8} lg={8} xl={8} xxl={9}> 
                        <h5 className='fs-6'>Edit Content</h5>
                        <Form className='filter-frm mb-3'>
                            <Row>
                                <Form.Group as={Col} xs={12} sm={6} md={6} lg={4} xl={4} xxl={3} className="mb-3" controlId="">
                                    <Form.Label>Page Name</Form.Label>
                                    <Form.Control type="text" placeholder="About Us" size='sm'/>
                                </Form.Group>
                                <Form.Group as={Col} xs={12} sm={6} md={6} lg={4} xl={4} xxl={3} className="mb-3" controlId="">
                                    <Form.Label>Sequence ID</Form.Label>
                                    <Form.Control type="number" placeholder="6" size='sm' />
                                </Form.Group>
                                <Form.Group as={Col} xs={6} sm={6} md={6} lg={4} xl={3} xxl={3} className="mb-3" controlId="">
                                    <Form.Label>Want to display On Web Site?</Form.Label>
                                    <Form.Check type="radio" name="group22" aria-label="radio 1" label="Yes"/>
                                    <Form.Check type="radio" name="group22" aria-label="radio 2" label="No"/>
                                </Form.Group>
                                <Form.Group as={Col} xs={6} sm={6} md={6} lg={5} xl={4} xxl={3} className="mb-3" controlId="">
                                    <Form.Label>To see the page preview click on this button</Form.Label>
                                    <Button size='sm' className='search-btn'>View Page</Button>
                                </Form.Group>  
                                <Form.Group as={Col} xs={12} sm={12} controlId="">
                                <Editor
                                    wrapperClassName="wrapper-class"
                                    editorClassName="editor-class"
                                    toolbarClassName="toolbar-class"
                                />                            
                                </Form.Group>
                                <Col xs={12} sm={12}>
                                    <div className='hint mt-3'>
                                        HINT: Use the icon <i className="fa-solid fa-paste"></i>  ("Paste from Word") from the HTML editor if pasting vacancy text from a Microsoft Word Document to overcome the inclusion of Microsoft 'SmartTags' into the vacancy. SmartTags can cause error messages to appear when the vacancy is opened in a internet browser.
                                    </div>
                                </Col>
                            </Row>
                            <Row className="justify-content-end mt-3">
                                <Col md="auto">
                                    <Button size='sm' variant="primary" type="submit" className='filter-btn search-btn'>
                                        Save & Update
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

export default Contentmanage;