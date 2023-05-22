import React from 'react';
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Superadminheader from '../Common/Superadminheader';
// import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import Collapse from 'react-bootstrap/Collapse';
import Pagination from 'react-bootstrap/Pagination';
import { Link } from 'react-router-dom';

function Hrresourceadmin () {  

    useEffect(() => {
        document.body.classList.add('hrresourceadmin','red','defhider')
        return () => {
          document.body.classList.remove('hrresourceadmin','red','defhider')
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
            <Container fluid className='h-100 mt-4'>
                <Row>
                    <Col xs={12} className='mb-3'>
                        <h1 className='suadmin-page-title'>HR Resources</h1>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Form className='filter-frm mb-3'>
                            <Row>
                                <Form.Group as={Col} xs={6} sm={4} className="mb-3" controlId="">
                                    <Form.Label>Title <i>*</i></Form.Label>
                                    <Form.Control type="text" placeholder="Name" size='sm' />
                                </Form.Group>
                                <Form.Group as={Col} xs={6} sm={4} className="mb-3" controlId="">
                                    <Form.Label>Link Web or File</Form.Label>
                                    <Form.Check type="radio" name="group111" aria-label="radio 1" label="File"/>
                                    <Form.Check type="radio" name="group111" aria-label="radio 3" label="Web"/>
                                </Form.Group>
                                <Form.Group as={Col} xs={12} sm={12} className="mb-3" controlId="">
                                    <Form.Label>Description <i>*</i></Form.Label>
                                    <Form.Control as="textarea" rows={5} type="text" placeholder="" size='sm' />
                                </Form.Group>
                                <Form.Group as={Col} xs={6} sm={4} className="mb-3" controlId="">
                                    <Form.Label>URL/Uploading File <i>*</i></Form.Label>
                                    <Form.Control type="file" placeholder="" size='sm' />
                                </Form.Group>
                                <Form.Group as={Col} xs={6} sm={4} className="mb-3" controlId="">
                                    <Form.Label>Author</Form.Label>
                                    <Form.Control type="text" placeholder="" size='sm' />
                                </Form.Group>
                                <Form.Group as={Col} xs={6} sm={4} className="mb-3" controlId="">
                                    <Form.Label>Show</Form.Label>
                                    <Form.Check
                                        type="switch"
                                        id="custom-switch"
                                        label=""
                                        size="md"
                                    />
                                </Form.Group>
                            </Row>
                            <Row className="justify-content-end mt-3">
                                <Col md="auto">
                                    <Button size='sm' variant="primary" type="submit" className='filter-btn search-btn'>
                                        <i className="fa-regular fa-floppy-disk"></i> Save
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
                    <Row className='h-100'>
                        <Col xs={12} className='prel mt-3'>
                            <Table striped hover responsive className='appsearch-tbl'>
                                <thead>
                                    <tr>
                                        <th width="50px"><Form.Check type="checkbox" label="" /></th>
                                        <th width="100px">Article No</th>
                                        <th>Title</th>
                                        <th>Description</th>
                                        <th width="130px">Posted Date</th>
                                        <th width="80px">Is Shown</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><Form.Check type="checkbox" label="" /></td>
                                        <td><Link to='/Superadmin/Hrresourceadmin'>1</Link></td>
                                        <td>
                                            <Link to='/Superadmin/Hrresourceadmin'>I will define how HR and CEOs can deliver value - Dave Ulrich (pdf/743kb)</Link><br></br>
                                            Dinesh Weerakkody/Daily Mirror
                                        </td>
                                        <td>An interview with Professor Dave Ulrich on how HR can deliver value to a business</td>
                                        <td>04/12/2008 07:38 PM</td>
                                        <td>Yes</td>
                                    </tr>
                                    <tr>
                                        <td><Form.Check type="checkbox" label="" /></td>
                                        <td><Link to='/Superadmin/Hrresourceadmin'>2</Link></td>
                                        <td>
                                            <Link to='/Superadmin/Hrresourceadmin'>Professor Ulrich is far removed from reality (jpg/938kb)</Link><br></br>
                                            Chithral Amarasiri/Daily Mirror
                                        </td>
                                        <td>A discussion of the practicality of executing the HR Strategic Partner Concept of Prof. Dave Ulrich</td>
                                        <td>04/12/2008 07:38 PM</td>
                                        <td>Yes</td>
                                    </tr>
                                    <tr>
                                        <td><Form.Check type="checkbox" label="" /></td>
                                        <td><Link to='/Superadmin/Hrresourceadmin'>3</Link></td>
                                        <td>
                                            <Link to='/Superadmin/Hrresourceadmin'>Institute of Personnel Management Certificate Courses in Human Resource Management</Link><br></br>
                                            IPM
                                        </td>
                                        <td>Strengthen your successful career with certificate courses in HR. IPM's, Foundation, Certificate and National Diploma Courses are designed to accommodate students with different educational qualifications and career aspirations. Closing date 31st January 2008.</td>
                                        <td>04/12/2008 07:38 PM</td>
                                        <td>Yes</td>
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
            </Container>
        </React.Fragment>
    );
}

export default Hrresourceadmin;