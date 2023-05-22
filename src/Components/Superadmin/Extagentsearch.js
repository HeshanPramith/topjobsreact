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

function Extagentsearch () {  

    useEffect(() => {
        document.body.classList.add('extagentsearch','red','defhider')
        return () => {
          document.body.classList.remove('extagentsearch','red','defhider')
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
                        <h1 className='suadmin-page-title'>External Agent Search</h1>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Form className='filter-frm mb-3'>
                            <Row>
                                <Form.Group as={Col} xs={12} sm={3} className="mb-3" controlId="">
                                    <Form.Label>Company Name</Form.Label>
                                    <Form.Control type="text" placeholder="Company Name" size='sm' />
                                </Form.Group>
                                <Form.Group as={Col} xs={12} sm={3} className="mb-3" controlId="">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" placeholder="Username" size='sm' />
                                </Form.Group>
                                <Form.Group as={Col} xs={6} sm={1} className="mb-3" controlId="">
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
                                        <th>External Agent Code</th>
                                        <th>Company</th>
                                        <th>Registered Date</th>
                                        <th>Username</th>
                                        <th>Secret Answer</th>
                                        <th>Email</th>
                                        <th>Contact Det</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><Form.Check type="checkbox" label="" /></td>
                                        <td>1</td>
                                        <td>EXT0000000129</td>
                                        <td>Australia Gateway</td>
                                        <td>24/04/2023</td>
                                        <td>Australia Gateway</td>
                                        <td></td>
                                        <td>nirudaka.v@gmail.com</td>
                                        <td>hi</td>
                                    </tr>
                                    <tr>
                                        <td><Form.Check type="checkbox" label="" /></td>
                                        <td>2</td>
                                        <td>EXT0000000128</td>
                                        <td>ABCDE45</td>
                                        <td>29/11/2022</td>
                                        <td>TEST16767656</td>
                                        <td></td>
                                        <td>chaminda@genesiis.com</td>
                                        <td>test</td>
                                    </tr>
                                    <tr>
                                        <td><Form.Check type="checkbox" label="" /></td>
                                        <td>3</td>
                                        <td>EXT0000000127</td>
                                        <td>ABCDE0</td>
                                        <td>25/11/2022</td>
                                        <td>TEST15656565</td>
                                        <td></td>
                                        <td>chaminda@genesiis.com</td>
                                        <td>232323323</td>
                                    </tr>
                                    <tr>
                                        <td><Form.Check type="checkbox" label="" /></td>
                                        <td>4</td>
                                        <td>EXT0000000126</td>
                                        <td>ABCDE67</td>
                                        <td>25/11/2022</td>
                                        <td>TEST1676767</td>
                                        <td></td>
                                        <td>support@topjobs.lk</td>
                                        <td>23232323</td>
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

export default Extagentsearch;