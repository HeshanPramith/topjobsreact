import React from 'react';
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import Pagination from 'react-bootstrap/Pagination';

function Locationmap () {  

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
                            <h4>Employer Location on Google Maps</h4> 
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
                    <Col xs={12} sm={4} lg={3} xl={3} xxl={3}>
                        <div className='inf'>
                            <p>Use the Mark a new location link shown above to mark a location on the map, To mark a location please click on the preferred location on the map and then a red color icon will be placed on the point you have clicked on. To change the marked location drag-and-drop the marker to the new location. You can drag and move the map to view the other locations. By default the the location is focused to Colombo. Use the slider shown in the top-left to zoom in and out the map. You can save multiple locations where your company branches are located, but you can have one location marked as the primary location, where the applicants will see when they look for your company location.</p>
                        </div>
                    </Col>
                    <Col xs={12} sm={8} lg={9} xl={9} xxl={9}>                            
                        <Form>
                            <h5 className='fs-6'>Employer Locations</h5>
                            <Row>
                                <Col xs={12} className='mb-3'>
                                    <Button size='sm' className='me-2 add-btn'><i className="fa-solid fa-square-plus"></i> Mark a new location</Button>
                                    <Link to='/Employer/Employerlist' className='me-2 back-btn'><i className="fa-solid fa-arrow-left-long"></i> Back to List of Subsidiaries</Link>
                                </Col>
                            </Row>
                            <div className='no-data'>
                                <p>No locations have been marked yet</p>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}

export default Locationmap;