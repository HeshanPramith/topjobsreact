import React from 'react';
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Form } from 'react-bootstrap';
import Superadminheader from '../Common/Superadminheader';

function Userlist () {  

    useEffect(() => {
        document.body.classList.add('sauserlist','red','defhider')
        return () => {
          document.body.classList.remove('sauserlist','red','defhider')
        }
    }, [])
    
    
    return (
        <React.Fragment>
            <Superadminheader/>
            <Container fluid className='h-100 mt-4'>
                <Row>
                    <Col xs={12} className='mb-3'>
                        <h1 className='suadmin-page-title'>User List</h1>
                    </Col>
                </Row>
                <Row className='mb-3'>
                    <Col xs={12} sm={12}> 
                        <Tabs
                            defaultActiveKey="utl"
                            id="fill-tab-example"
                            className=""
                            >
                            <Tab eventKey="utl" title="User Type List">
                                <Row>
                                    <Col xs={12} className='mb-3'>
                                        <Link to='/Employer/Employer' className='me-2 add-btn btn btn-primary btn-sm'><i className="fa-solid fa-square-plus"></i> Add User Type</Link>
                                    </Col>
                                </Row>                                                                   
                                <Form className='user-block'>
                                    <Row> 
                                        <Col xs={12} sm={6} md={6} lg={4} xl={4} xxl={3} className='mb-3'>
                                            <div className='loop-user d-flex align-items-center'>
                                                <div className='delete'>
                                                    <Form.Check type="checkbox" label="" />
                                                </div>
                                                <div className='detail'>
                                                    <p><b>User Type</b>SuperAdmin</p>
                                                    <p><b>Description</b>DEFXXX</p>
                                                </div>
                                            </div>
                                        </Col>                                       
                                    </Row>
                                    <Row>
                                        <Col xs={12}>
                                            <Button type='submit' className='filter-btn delete-btn btn btn-primary btn-sm m-0'> <i className="fa-solid fa-trash-can"></i> Delete Selected Item</Button>
                                        </Col>
                                    </Row>
                                </Form>                                
                            </Tab>
                            <Tab eventKey="sul" title="System User List">
                                <Row>
                                    <Col xs={12} className='mb-3'>
                                        <Link to='/Employer/Employer' className='me-2 add-btn btn btn-primary btn-sm'><i className="fa-solid fa-square-plus"></i> Add System User</Link>
                                    </Col>
                                </Row>                                                                   
                                <Form className='user-block'>
                                    <Row> 
                                        <Col xs={12} sm={6} md={6} lg={4} xl={4} xxl={4} className='mb-3'>
                                            <div className='loop-user d-flex align-items-center'>
                                                <div className='delete'>
                                                    <Form.Check type="checkbox" label="" />
                                                </div>
                                                <div className='detail'>
                                                    <p><b>User Name</b>SuperAdmin</p>
                                                    <p><b>User Type</b>Super Admin</p>
                                                    <p><b>Email</b>sdb@genesiis.com</p>
                                                </div>
                                            </div>
                                        </Col>                                     
                                    </Row>
                                    <Row>
                                        <Col xs={12}>
                                            <Button type='submit' className='filter-btn delete-btn btn btn-primary btn-sm m-0'> <i className="fa-solid fa-trash-can"></i> Delete Selected Item</Button>
                                        </Col>
                                    </Row>
                                </Form> 
                            </Tab>
                            <Tab eventKey="eul" title="Employer User List">
                                <Table striped hover>
                                    <thead>
                                        <tr>
                                            <th>User Name</th>
                                            <th>User Type</th>
                                            <th>Organisation</th>
                                            <th>Company Group</th>
                                            <th>Email</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td colSpan={5} className='text-center'>No Data</td>
                                        </tr>                                        
                                    </tbody>
                                </Table>
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}

export default Userlist;