import React from 'react';
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
// import Collapse from 'react-bootstrap/Collapse';
import Superadminheader from '../Common/Superadminheader';
// import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Emailconfig () {  

    useEffect(() => {
        document.body.classList.add('releasenotes','red','defhider')
        return () => {
          document.body.classList.remove('releasenotes','red','defhider')
        }
    }, [])
    
    return (
        <React.Fragment>
            <Superadminheader/>
            <Container fluid className='h-100 mt-4'>
                <Row>
                    <Col xs={12} className='mb-3'>
                        <h1 className='suadmin-page-title'>Banner Ad Search</h1>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} className='mb-3'>
                        <Button size='sm' className='me-2 add-btn'><i className="fa-solid fa-square-plus"></i> New Banner Ad</Button>
                        <Button size='sm' className='me-2 add-btn'><i className="fa-solid fa-square-plus"></i> Default Banner Ad</Button>
                    </Col>
                </Row>
                <Row className='mb-3'>
                    <Col xs={12} sm={12} lg={12}> 
                        <Form>
                            <Table striped hover responsive>
                                <thead>
                                    <tr>
                                        <th><Form.Check type="checkbox" label="" /></th>
                                        <th>Release Version</th>
                                        <th>Release Date</th>
                                        <th>Publish</th>
                                        <th>Preview</th>
                                        <th>Edit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><Form.Check type="checkbox" label="" /></td>
                                        <td>2.9.5-3</td>
                                        <td>06/05/2016</td>
                                        <td><i className="fa-solid fa-circle-check"></i></td>
                                        <td><i className="fa-solid fa-eye"></i></td>
                                        <td><Link to='/Superadmin/Releasenotes'><i className="fa-regular fa-pen-to-square"></i></Link></td>
                                    </tr>
                                </tbody>
                            </Table> 
                            <Row>
                                <Col xs={12}>
                                    <Button type='submit' className='filter-btn delete-btn btn btn-primary btn-sm m-0 float-start'> <i className="fa-solid fa-trash-can"></i> Delete Version(s)</Button>
                                </Col>
                            </Row> 
                        </Form>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}

export default Emailconfig;