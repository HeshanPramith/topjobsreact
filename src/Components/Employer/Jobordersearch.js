import React, { useState } from 'react';
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Collapse from 'react-bootstrap/Collapse';
import Pagination from 'react-bootstrap/Pagination';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select'

function Jobordersearch () {  

    useEffect(() => {
        document.body.classList.add('jobordersearch','blue','defhider')
        return () => {
          document.body.classList.remove('jobordersearch','blue','defhider')
        }
    }, [])

    const [open, setOpen] = useState(false);

    let active = 2;
    let items = [];
    for (let number = 1; number <= 5; number++) {
    items.push(
        <Pagination.Item key={number} active={number === active}>
        {number}
        </Pagination.Item>,
    );
    }

    const [startDate, setStartDate] = useState(new Date());
    const [startDate2, setStartDate2] = useState(new Date());

    const options = [
        { value: 'Accounting ', label: 'Accounting ' },
        { value: 'Employeristration ', label: 'Employeristration ' },
        { value: 'Advertising ', label: 'Advertising ' },
        { value: 'Agriculture/Plantation  ', label: 'Agriculture/Plantation  ' },
        { value: 'Analysis  ', label: 'Analysis  ' },
        { value: 'Apparel   ', label: 'Apparel   ' },
        { value: 'Architects  ', label: 'Architects  ' },
        { value: 'Arts & Crafts  ', label: 'Arts & Crafts  ' },
        { value: 'Auditing  ', label: 'Auditing  ' },
        { value: 'Banking & Finance  ', label: 'Banking & Finance  ' },
        { value: 'Beauty Care  ', label: 'Beauty Care  ' },
        { value: 'Brokering  ', label: 'Brokering  ' },
    ]
    
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
                            <h4>Vacancy Search</h4> 
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
                    <Col xs={12} className='mb-3'>
                        <Button size='sm' className='me-2 add-btn'><i className="fa-solid fa-square-plus"></i> View my hot jobs</Button>
                        <Button size='sm' className='add-btn'><i className="fa-solid fa-square-plus"></i> Add new vacancy</Button>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Form className='filter-frm mb-3'>
                            <Row>
                                <Form.Group as={Col} xs={6} sm={3} className="mb-3" controlId="">
                                    <Form.Label>Vacancy Code</Form.Label>
                                    <Form.Control type="number" placeholder="Vacancy Code" size='sm' />
                                </Form.Group>
                                <Form.Group as={Col} xs={6} sm={3} className="mb-3" controlId="">
                                    <Form.Label>Employer</Form.Label>
                                    <Form.Control type="text" placeholder="Employer" size='sm' />
                                </Form.Group>
                                <Form.Group as={Col} xs={6} sm={3} className="mb-3" controlId="">
                                    <Form.Label>Job Position</Form.Label>
                                    <Form.Control type="text" placeholder="Job Position" size='sm' />
                                </Form.Group>
                                <Form.Group as={Col} xs={6} sm={3} className="mb-3" controlId="">
                                    <Form.Label>Industry</Form.Label>
                                    <Form.Select defaultValue="Select" className='' size='sm'>
                                        <option>Select</option>
                                        <option>Agriculture</option>
                                        <option>Airline</option>
                                        <option>Apparel Industry</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group as={Col} xs={6} sm={3} className="mb-3" controlId="">
                                    <Form.Label>Job Location</Form.Label>
                                    <Form.Control type="text" placeholder="Job Location" size='sm' />
                                </Form.Group>
                                <Form.Group as={Col} xs={6} md="auto" className="mb-3" controlId="">
                                    <Form.Label>Opening Date : (dd/mm/yyyy)</Form.Label>
                                    <div className='d-rang-pick'>
                                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className='form-control form-control-sm' />
                                    </div>                                    
                                    <div className='d-rang-pick rpl'>
                                        <DatePicker selected={startDate2} onChange={(date) => setStartDate2(date)} className='form-control form-control-sm' />
                                    </div>                                    
                                </Form.Group>
                                <Form.Group as={Col} xs={12} sm={12} className="mb-3" controlId="">
                                    <Form.Label>Job Category</Form.Label>
                                    <Select options={options} isMulti />
                                </Form.Group>                                
                            </Row>
                            <Row>
                                <Col>
                                    <div class="divider">
                                        <span></span>
                                        <span>
                                            <Button size='sm' onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open} className='adv-btn mb-3'><i className="fa-solid fa-angle-down"></i> Advance Search <i className="fa-solid fa-angle-down"></i></Button>
                                        </span>
                                        <span></span>
                                    </div>                                    
                                    <Collapse in={open}>
                                        <div id="example-collapse-text">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                        terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                        labore wes anderson cred nesciunt sapiente ea proident.
                                        </div>
                                    </Collapse>
                                </Col>
                            </Row>
                            <Row className="justify-content-end mt-3">
                                <Col md="auto">
                                    <Button size='sm' variant="primary" type="submit" className='filter-btn search-btn'>
                                        Search
                                    </Button>
                                    <Button size='sm' variant="danger" type="submit" className='filter-btn'>
                                        Clear
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
                <Form>
                    <Row className='align-items-center mb-2'>
                        <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6} className='prel'>
                            <Form.Group as={Col} xs={12} md="auto" className="mb-3" controlId="">
                                <Form.Check type="radio" name="group1" aria-label="radio 1" label="Open Vacancies (588)"/>
                                <Form.Check type="radio" name="group1" aria-label="radio 2" label="Closed Vacancies (142)"/>
                                <Form.Check type="radio" name="group1" aria-label="radio 2" label="Archived Vacancies (2)"/>
                            </Form.Group>              
                        </Col>
                    </Row>
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
                                        <th>Vacancy Ref No/Code</th>
                                        <th>Job Position</th>
                                        <th>Employer</th>
                                        <th>Closing Date</th>
                                        <th>Applied List</th>
                                        <th>Short List</th>
                                        <th>Not Successfull List</th>
                                        <th>Temporarily List</th>
                                        <th>Open List</th>
                                        <th>Reports</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><Form.Check type="checkbox" label="" /></td>
                                        <td>1</td>
                                        <td>0000981402 <Link to='/Employer/Jobordersearch' className='ms-2'>Edit</Link> <Link to='/Employer/Jobordersearch' className='ms-2'>Reopen</Link></td>
                                        <td>Career Guidance Counselor</td>
                                        <td>Genesiis Software</td>
                                        <td>08/02/2023 </td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td><Link to='/Employer/Jobordersearch'>385</Link></td>
                                        <td><i className="fa-regular fa-file-pdf fs-4"></i></td>
                                    </tr> 
                                    <tr>
                                        <td><Form.Check type="checkbox" label="" /></td>
                                        <td>2</td>
                                        <td>0000981402 <Link to='/Employer/Jobordersearch' className='ms-2'>Edit</Link> <Link to='/Employer/Jobordersearch' className='ms-2'>Reopen</Link></td>
                                        <td>Career Guidance Counselor</td>
                                        <td>Genesiis Software</td>
                                        <td>08/02/2023 </td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td><Link to='/Employer/Jobordersearch'>385</Link></td>
                                        <td><i className="fa-regular fa-file-pdf fs-4"></i></td>
                                    </tr> 
                                    <tr>
                                        <td><Form.Check type="checkbox" label="" /></td>
                                        <td>3</td>
                                        <td>0000981402 <Link to='/Employer/Jobordersearch' className='ms-2'>Edit</Link> <Link to='/Employer/Jobordersearch' className='ms-2'>Reopen</Link></td>
                                        <td>Career Guidance Counselor</td>
                                        <td>Genesiis Software</td>
                                        <td>08/02/2023 </td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td><Link to='/Employer/Jobordersearch'>385</Link></td>
                                        <td><i className="fa-regular fa-file-pdf fs-4"></i></td>
                                    </tr> 
                                    <tr>
                                        <td><Form.Check type="checkbox" label="" /></td>
                                        <td>4</td>
                                        <td>0000981402 <Link to='/Employer/Jobordersearch' className='ms-2'>Edit</Link> <Link to='/Employer/Jobordersearch' className='ms-2'>Reopen</Link></td>
                                        <td>Career Guidance Counselor</td>
                                        <td>Genesiis Software</td>
                                        <td>08/02/2023 </td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td><Link to='/Employer/Jobordersearch'>385</Link></td>
                                        <td><i className="fa-regular fa-file-pdf fs-4"></i></td>
                                    </tr> 
                                    <tr>
                                        <td><Form.Check type="checkbox" label="" /></td>
                                        <td>5</td>
                                        <td>0000981402 <Link to='/Employer/Jobordersearch' className='ms-2'>Edit</Link> <Link to='/Employer/Jobordersearch' className='ms-2'>Reopen</Link></td>
                                        <td>Career Guidance Counselor</td>
                                        <td>Genesiis Software</td>
                                        <td>08/02/2023 </td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td><Link to='/Employer/Jobordersearch'>385</Link></td>
                                        <td><i className="fa-regular fa-file-pdf fs-4"></i></td>
                                    </tr> 
                                    <tr>
                                        <td><Form.Check type="checkbox" label="" /></td>
                                        <td>6</td>
                                        <td>0000981402 <Link to='/Employer/Jobordersearch' className='ms-2'>Edit</Link> <Link to='/Employer/Jobordersearch' className='ms-2'>Reopen</Link></td>
                                        <td>Career Guidance Counselor</td>
                                        <td>Genesiis Software</td>
                                        <td>08/02/2023 </td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td><Link to='/Employer/Jobordersearch'>385</Link></td>
                                        <td><i className="fa-regular fa-file-pdf fs-4"></i></td>
                                    </tr> 
                                    <tr>
                                        <td><Form.Check type="checkbox" label="" /></td>
                                        <td>7</td>
                                        <td>0000981402 <Link to='/Employer/Jobordersearch' className='ms-2'>Edit</Link> <Link to='/Employer/Jobordersearch' className='ms-2'>Reopen</Link></td>
                                        <td>Career Guidance Counselor</td>
                                        <td>Genesiis Software</td>
                                        <td>08/02/2023 </td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td><Link to='/Employer/Jobordersearch'>385</Link></td>
                                        <td><i className="fa-regular fa-file-pdf fs-4"></i></td>
                                    </tr> 
                                    <tr>
                                        <td><Form.Check type="checkbox" label="" /></td>
                                        <td>8</td>
                                        <td>0000981402 <Link to='/Employer/Jobordersearch' className='ms-2'>Edit</Link> <Link to='/Employer/Jobordersearch' className='ms-2'>Reopen</Link></td>
                                        <td>Career Guidance Counselor</td>
                                        <td>Genesiis Software</td>
                                        <td>08/02/2023 </td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td><Link to='/Employer/Jobordersearch'>385</Link></td>
                                        <td><i className="fa-regular fa-file-pdf fs-4"></i></td>
                                    </tr> 
                                    <tr>
                                        <td><Form.Check type="checkbox" label="" /></td>
                                        <td>9</td>
                                        <td>0000981402 <Link to='/Employer/Jobordersearch' className='ms-2'>Edit</Link> <Link to='/Employer/Jobordersearch' className='ms-2'>Reopen</Link></td>
                                        <td>Career Guidance Counselor</td>
                                        <td>Genesiis Software</td>
                                        <td>08/02/2023 </td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td><Link to='/Employer/Jobordersearch'>385</Link></td>
                                        <td><i className="fa-regular fa-file-pdf fs-4"></i></td>
                                    </tr> 
                                    <tr>
                                        <td><Form.Check type="checkbox" label="" /></td>
                                        <td>10</td>
                                        <td>0000981402 <Link to='/Employer/Jobordersearch' className='ms-2'>Edit</Link> <Link to='/Employer/Jobordersearch' className='ms-2'>Reopen</Link></td>
                                        <td>Career Guidance Counselor</td>
                                        <td>Genesiis Software</td>
                                        <td>08/02/2023 </td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td><Link to='/Employer/Jobordersearch'>385</Link></td>
                                        <td><i className="fa-regular fa-file-pdf fs-4"></i></td>
                                    </tr>                                    
                                </tbody>
                            </Table>               
                        </Col>                        
                    </Row>
                    <Row>
                        <Col xs={12} sm={6}>
                            <Button size='sm' variant="primary" type="submit" className='filter-btn search-btn ms-0'>
                                Check All
                            </Button>
                            <Button size='sm' variant="danger" type="submit" className='filter-btn'>
                                Clear All
                            </Button>
                        </Col>
                        <Col xs={12} sm={6}>
                            <Button size='sm' variant="warning" type="submit" className='filter-btn ms-1 f-r'>
                                Archive
                            </Button>
                            <Button size='sm' variant="danger" type="submit" className='filter-btn f-r'>
                                Delete Checked
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </React.Fragment>
    );
}

export default Jobordersearch;