import React, { useState } from 'react';
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Collapse from 'react-bootstrap/Collapse';
import Superadminheader from '../Common/Superadminheader';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Emailconfig () {  

    useEffect(() => {
        document.body.classList.add('releasenotes','red','defhider')
        return () => {
          document.body.classList.remove('releasenotes','red','defhider')
        }
    }, [])

    const [open, setOpen] = useState(false);

    const [startDate, setStartDate] = useState(new Date());
    
    return (
        <React.Fragment>
            <Superadminheader/>
            <Container fluid className='h-100 mt-4'>
                <Row>
                    <Col xs={12} className='mb-3'>
                        <h1 className='suadmin-page-title'>Release Notes</h1>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} className='mb-3'>
                        <Button onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open} size='sm' className='me-2 add-btn'><i className="fa-solid fa-square-plus"></i> Add New Version & Notes</Button>
                    </Col>
                    <Collapse in={open}>
                        <div id="example-collapse-text">
                            <Form className='filter-frm mb-3'>
                                <Row>
                                    <Form.Group as={Col} xs={6} sm={3} className="mb-3" controlId="">
                                        <Form.Label>Version No</Form.Label>
                                        <Form.Control type="text" placeholder="" size='sm' />
                                    </Form.Group>
                                    <Form.Group as={Col} xs={6} sm={3} className="mb-3" controlId="">
                                        <Form.Label>Version Date</Form.Label>
                                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className='form-control form-control-sm' />
                                    </Form.Group>
                                </Row>
                                <Row>
                                    <Col xs={12} className='mb-3'>
                                        
                                        <Form.Group as={Col} xs={6} sm={3} className="mb-3" controlId="">
                                            <Form.Label>Description</Form.Label>
                                        </Form.Group>
                                        <Editor
                                            wrapperClassName="wrapper-class"
                                            editorClassName="editor-class"
                                            toolbarClassName="toolbar-class"
                                        /> 
                                        
                                    </Col>
                                </Row>
                            </Form>
                            <Row>
                                <Col xs={12} className='mb-3'>
                                    <Button size='sm' className='me-2 add-btn'><i className="fa-solid fa-square-plus"></i> Save</Button>
                                    <Button size='sm' className='me-2 add-btn'><i className="fa-solid fa-square-plus"></i> Save & Close</Button>
                                </Col>
                            </Row>
                        </div>
                    </Collapse>
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
                                    <tr>
                                        <td><Form.Check type="checkbox" label="" /></td>
                                        <td>2.9.5-3</td>
                                        <td>06/05/2016</td>
                                        <td><i className="fa-solid fa-circle-check"></i></td>
                                        <td><i className="fa-solid fa-eye"></i></td>
                                        <td><Link to='/Superadmin/Releasenotes'><i className="fa-regular fa-pen-to-square"></i></Link></td>
                                    </tr>
                                    <tr>
                                        <td><Form.Check type="checkbox" label="" /></td>
                                        <td>2.9.5-3</td>
                                        <td>06/05/2016</td>
                                        <td><i className="fa-solid fa-circle-check"></i></td>
                                        <td><i className="fa-solid fa-eye"></i></td>
                                        <td><Link to='/Superadmin/Releasenotes'><i className="fa-regular fa-pen-to-square"></i></Link></td>
                                    </tr>
                                    <tr>
                                        <td><Form.Check type="checkbox" label="" /></td>
                                        <td>2.9.5-3</td>
                                        <td>06/05/2016</td>
                                        <td><i className="fa-solid fa-circle-check"></i></td>
                                        <td><i className="fa-solid fa-eye"></i></td>
                                        <td><Link to='/Superadmin/Releasenotes'><i className="fa-regular fa-pen-to-square"></i></Link></td>
                                    </tr><tr>
                                        <td><Form.Check type="checkbox" label="" /></td>
                                        <td>2.9.5-3</td>
                                        <td>06/05/2016</td>
                                        <td><i className="fa-solid fa-circle-check"></i></td>
                                        <td><i className="fa-solid fa-eye"></i></td>
                                        <td><Link to='/Superadmin/Releasenotes'><i className="fa-regular fa-pen-to-square"></i></Link></td>
                                    </tr>
                                    <tr>
                                        <td><Form.Check type="checkbox" label="" /></td>
                                        <td>2.9.5-3</td>
                                        <td>06/05/2016</td>
                                        <td><i className="fa-solid fa-circle-check"></i></td>
                                        <td><i className="fa-solid fa-eye"></i></td>
                                        <td><Link to='/Superadmin/Releasenotes'><i className="fa-regular fa-pen-to-square"></i></Link></td>
                                    </tr>
                                    <tr>
                                        <td><Form.Check type="checkbox" label="" /></td>
                                        <td>2.9.5-3</td>
                                        <td>06/05/2016</td>
                                        <td><i className="fa-solid fa-circle-check"></i></td>
                                        <td><i className="fa-solid fa-eye"></i></td>
                                        <td><Link to='/Superadmin/Releasenotes'><i className="fa-regular fa-pen-to-square"></i></Link></td>
                                    </tr>
                                    <tr>
                                        <td><Form.Check type="checkbox" label="" /></td>
                                        <td>2.9.5-3</td>
                                        <td>06/05/2016</td>
                                        <td><i className="fa-solid fa-circle-check"></i></td>
                                        <td><i className="fa-solid fa-eye"></i></td>
                                        <td><Link to='/Superadmin/Releasenotes'><i className="fa-regular fa-pen-to-square"></i></Link></td>
                                    </tr>
                                    <tr>
                                        <td><Form.Check type="checkbox" label="" /></td>
                                        <td>2.9.5-3</td>
                                        <td>06/05/2016</td>
                                        <td><i className="fa-solid fa-circle-check"></i></td>
                                        <td><i className="fa-solid fa-eye"></i></td>
                                        <td><Link to='/Superadmin/Releasenotes'><i className="fa-regular fa-pen-to-square"></i></Link></td>
                                    </tr>
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