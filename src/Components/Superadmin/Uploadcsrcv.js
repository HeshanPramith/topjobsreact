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

function Uploadcsrcv () {  

    useEffect(() => {
        document.body.classList.add('uploadcsrcv','red','defhider')
        return () => {
          document.body.classList.remove('uploadcsrcv','red','defhider')
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
                        <h1 className='suadmin-page-title'>CSR CV</h1>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Form className='filter-frm mb-3'>
                            <Row>
                                <Form.Group as={Col} xs={6} sm={4} className="mb-3" controlId="">
                                    <Form.Label>Disable Type <i>*</i></Form.Label>
                                    <Form.Select defaultValue="Select" className=' me-2' size='sm'>
                                        <option>Select Disability</option>
                                        <option>Disability in Seeing</option>
                                        <option>Disability in Hearing/Speaking</option>
                                        <option>Mental Disability</option>
                                        <option>Disability in Legs</option>
                                        <option>Disability in Hands</option>
                                        <option>Other Physical Disability</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group as={Col} xs={6} sm={4} className="mb-3" controlId="">
                                    <Form.Label>Job Category <i>*</i></Form.Label>
                                    <Form.Select defaultValue="Select" className=' me-2' size='sm'>
                                        <option>Select Job Category</option>
                                        <option>Any</option>
                                        <option>Accounting/Auditing/Finance</option>
                                        <option>Agriculture/Dairy/Environment</option>
                                        <option>Apparel/Clothing</option>
                                        <option>Banking/Insurance</option>
                                        <option>Civil Eng/Interior Design/Architecture</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group as={Col} xs={6} sm={4} className="mb-3" controlId="">
                                    <Form.Label>Name <i>*</i></Form.Label>
                                    <Form.Control type="text" placeholder="Name" size='sm' />
                                </Form.Group>
                                <Form.Group as={Col} xs={12} sm={12} className="mb-3" controlId="">
                                    <Form.Label>Remark</Form.Label>
                                    <Form.Control as="textarea" rows={5} type="text" placeholder="" size='sm' />
                                </Form.Group>
                                <Form.Group as={Col} xs={6} sm={6} className="mb-3" controlId="">
                                    <Form.Label>CV <i>*</i></Form.Label>
                                    <Form.Control type="file" placeholder="" size='sm' />
                                    <small>CV & Photo sizes should be lower than 2MB</small>
                                </Form.Group>
                                <Form.Group as={Col} xs={6} sm={6} className="mb-3" controlId="">
                                    <Form.Label>Photo</Form.Label>
                                    <Form.Control type="file" placeholder="" size='sm' />
                                </Form.Group>
                            </Row>
                            <Row className="justify-content-end mt-3">
                                <Col md="auto">
                                    <Button size='sm' variant="primary" type="submit" className='filter-btn search-btn'>
                                        <i className="fa-regular fa-floppy-disk"></i> Upload
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
                                        <th>Code</th>
                                        <th>Name</th>
                                        <th>Disability</th>
                                        <th>Remarks</th>
                                        <th>Job Category</th>
                                        <th>CV</th>
                                        <th>Photo</th>
                                        <th>Uploaded Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><Form.Check type="checkbox" label="" /></td>
                                        <td>0000000007</td>
                                        <td>T.M. Dinusha Tharangani Tennakoon</td>
                                        <td>Disability in Hearing/Speaking</td>
                                        <td>Female, 24 Years, GCE AL, Computer Course. English Course</td>
                                        <td>Any</td>
                                        <td><Link to='/Superadmin/Uploadcsrcv'><i className="fa-solid fa-file-pdf"></i></Link></td>
                                        <td><Link to='/Superadmin/Uploadcsrcv'><i className="fa-solid fa-eye"></i></Link></td>
                                        <td>03/04/2009 05:28 PM</td>
                                    </tr>
                                    <tr>
                                        <td><Form.Check type="checkbox" label="" /></td>
                                        <td>0000000006</td>
                                        <td>Mr. Nirosh Maduranga</td>
                                        <td>Disability in Hearing/Speaking</td>
                                        <td>Male, 18 Years, GCE OL 2008.</td>
                                        <td>Any</td>
                                        <td><Link to='/Superadmin/Uploadcsrcv'><i className="fa-solid fa-file-pdf"></i></Link></td>
                                        <td><Link to='/Superadmin/Uploadcsrcv'><i className="fa-solid fa-eye"></i></Link></td>
                                        <td>03/04/2009 05:23 PM</td>
                                    </tr>
                                    <tr>
                                        <td><Form.Check type="checkbox" label="" /></td>
                                        <td>0000000005</td>
                                        <td>M.M.H. Priyanandana</td>
                                        <td>Disability in Hearing/Speaking</td>
                                        <td>Female, 22 Years, Advance Diploma in IT, A Course in English Language, Business Management Course.</td>
                                        <td>Any</td>
                                        <td><Link to='/Superadmin/Uploadcsrcv'><i className="fa-solid fa-file-pdf"></i></Link></td>
                                        <td><Link to='/Superadmin/Uploadcsrcv'><i className="fa-solid fa-eye"></i></Link></td>
                                        <td>03/04/2009 05:23 PM</td>
                                    </tr>
                                    <tr>
                                        <td><Form.Check type="checkbox" label="" /></td>
                                        <td>0000000004</td>
                                        <td>Kumudu Dhansinghe</td>
                                        <td>Disability in Seeing</td>
                                        <td>Female, 26Years, BA (Uni of Peradeniya), Computer Knowledge</td>
                                        <td>Any</td>
                                        <td><Link to='/Superadmin/Uploadcsrcv'><i className="fa-solid fa-file-pdf"></i></Link></td>
                                        <td><Link to='/Superadmin/Uploadcsrcv'><i className="fa-solid fa-eye"></i></Link></td>
                                        <td>03/04/2009 05:23 PM</td>
                                    </tr>
                                    <tr>
                                        <td><Form.Check type="checkbox" label="" /></td>
                                        <td>0000000003</td>
                                        <td>Sandima Lakmali</td>
                                        <td>Disability in Seeing</td>
                                        <td>Female, 30Years, Panadura</td>
                                        <td>Any</td>
                                        <td><Link to='/Superadmin/Uploadcsrcv'><i className="fa-solid fa-file-pdf"></i></Link></td>
                                        <td><Link to='/Superadmin/Uploadcsrcv'><i className="fa-solid fa-eye"></i></Link></td>
                                        <td>03/04/2009 05:23 PM</td>
                                    </tr>
                                    <tr>
                                        <td><Form.Check type="checkbox" label="" /></td>
                                        <td>0000000002</td>
                                        <td>Athula Senadheera</td>
                                        <td>Disability in Seeing</td>
                                        <td>Male, 26Years, BA (Uni of Peradeniya), Computer Knowledge, Typing, Music/Dancing</td>
                                        <td>Any</td>
                                        <td><Link to='/Superadmin/Uploadcsrcv'><i className="fa-solid fa-file-pdf"></i></Link></td>
                                        <td><Link to='/Superadmin/Uploadcsrcv'><i className="fa-solid fa-eye"></i></Link></td>
                                        <td>03/04/2009 05:23 PM</td>
                                    </tr>
                                    <tr>
                                        <td><Form.Check type="checkbox" label="" /></td>
                                        <td>0000000001</td>
                                        <td>Mihiri Chandima Kodilaraarachchi</td>
                                        <td>Disability in Hearing/Speaking</td>
                                        <td>Female, 32Years, Computer Knowledge, skills in sewing, cookery, drawing , cake structures</td>
                                        <td>Any</td>
                                        <td><Link to='/Superadmin/Uploadcsrcv'><i className="fa-solid fa-file-pdf"></i></Link></td>
                                        <td><Link to='/Superadmin/Uploadcsrcv'><i className="fa-solid fa-eye"></i></Link></td>
                                        <td>03/04/2009 05:23 PM</td>
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

export default Uploadcsrcv;