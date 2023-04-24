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
import { Editor } from "react-draft-wysiwyg";

function Advertisementtemplate () {  

    useEffect(() => {
        document.body.classList.add('advertisementtemplate','blue','defhider')
        return () => {
          document.body.classList.remove('advertisementtemplate','blue','defhider')
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
                            <h4>Vacancy Advertisement Templates</h4> 
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
                    <Col xs={12} className='mt-0'>
                        <Alert variant='primary' className='p-2 text-center rounded-2'>
                            Templates can be selected when adding a vacancy from Advertisement page
                        </Alert>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} className='mb-3'>
                        <Button size='sm' className='me-2 add-btn'><i className="fa-solid fa-square-plus"></i>Create New Template</Button>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Form>
                            <Table striped hover responsive>
                                <thead>
                                    <tr>
                                        <th width={50}>#</th>
                                        <th>Template</th>
                                        <th width={50}></th>
                                        <th width={50}></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Grey Template</td>
                                        <td><Link to='/Employer/Advertisementtemplate'><i className="bi bi-pencil-fill"></i></Link></td>
                                        <td><Link to='/Employer/Advertisementtemplate'><i className="bi bi-trash3-fill"></i></Link></td>
                                    </tr> 
                                    <tr>
                                        <td>2</td>
                                        <td>General Ad Template</td>
                                        <td><Link to='/Employer/Advertisementtemplate'><i className="bi bi-pencil-fill"></i></Link></td>
                                        <td><Link to='/Employer/Advertisementtemplate'><i className="bi bi-trash3-fill"></i></Link></td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Colored Simple Template</td>
                                        <td><Link to='/Employer/Advertisementtemplate'><i className="bi bi-pencil-fill"></i></Link></td>
                                        <td><Link to='/Employer/Advertisementtemplate'><i className="bi bi-trash3-fill"></i></Link></td>
                                    </tr>                                                                      
                                </tbody>
                            </Table>  
                        </Form>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}> 
                        <h5 className='fs-6'>Edit Content</h5>
                        <Form className='filter-frm mb-3'>
                            <Row>
                                <Form.Group as={Col} xs={12} sm={6} md={6} lg={4} xl={4} xxl={3} className="mb-3" controlId="">
                                    <Form.Label>Template Name</Form.Label>
                                    <Form.Control type="text" placeholder="Grey Template" size='sm'/>
                                </Form.Group> 
                                <Form.Group as={Col} xs={12} sm={12} controlId="">
                                <Editor
                                    wrapperClassName="wrapper-class"
                                    editorClassName="editor-class"
                                    toolbarClassName="toolbar-class"
                                />                            
                                </Form.Group>
                            </Row>
                            <Row className="justify-content-end mt-3">
                                <Col md="auto">
                                    <Button size='sm' variant="primary" type="submit" className='filter-btn search-btn'>
                                        <i className="bi bi-save2-fill me-2"></i>
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

export default Advertisementtemplate;