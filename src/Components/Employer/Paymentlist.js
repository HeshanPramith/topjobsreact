import React, { useState } from 'react';
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Pagination from 'react-bootstrap/Pagination';
import Modal from 'react-bootstrap/Modal';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Paymentlist () {  

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

    const [lgShow, setLgShow] = useState(false);

    const [startDate, setStartDate] = useState(new Date());
    const [startDatefrm, setStartDatefrm] = useState(new Date());
    const [startDateuntil, setStartDateuntil] = useState(new Date());
    const [startDatevef, setStartDatevef] = useState(new Date());

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
                            <h4>Payments</h4> 
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
                    <Col xs={12} sm={12} lg={12} xl={12} xxl={12}>    
                        
                        <h5 className='fs-6'>Organisation Registration Payments</h5>
                        <Row>
                            <Col xs={12} className='mb-3'>
                                <Link to='/Employer/Paymentlist' className='me-2 add-btn btn btn-primary btn-sm' onClick={() => setLgShow(true)}><i className="fa-solid fa-square-plus"></i> New Payment</Link>
                            </Col>
                        </Row>
                        <div className='filter-frm mb-5'>                                
                            <Row>
                                <Col xs={12}>
                                    <Form>
                                        <Table striped hover responsive className='payment-tbl'>
                                            <thead>
                                                <tr>
                                                    <th></th>
                                                    <th>Payment Date</th>
                                                    <th>Payment Type</th>
                                                    <th>Valid Period</th>
                                                    <th>Verified Date</th>
                                                    <th>Receipt No</th>
                                                    <th className='text-end'></th>
                                                    <th className='text-end'>Total Payments</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><Link to='/Employer/Paymentlist'><i className="fa-regular fa-pen-to-square" onClick={() => setLgShow(true)}></i></Link></td>
                                                    <td>31/12/2020</td>
                                                    <td>Cheque</td>
                                                    <td className='jb-old'>From: 01/01/2021 <br />
                                                    To: 31/12/2022</td>
                                                    <td>31/12/2020</td>
                                                    <td></td>
                                                    <td className='text-end'>Gross:<br /> Discount:<br /> Net:</td>
                                                    <td className='text-end'>86,250.00<br /> 0.00<br /> 86,250.00</td>
                                                </tr>
                                                <tr>
                                                    <td><Link to='/Employer/Paymentlist'><i className="fa-regular fa-pen-to-square"></i></Link></td>
                                                    <td>31/12/2020</td>
                                                    <td>Cheque</td>
                                                    <td className='jb-old'>From: 01/01/2021 <br />
                                                    To: 31/12/2022</td>
                                                    <td>31/12/2020</td>
                                                    <td></td>
                                                    <td className='text-end'>Gross:<br /> Discount:<br /> Net:</td>
                                                    <td className='text-end'>86,250.00<br /> 0.00<br /> 86,250.00</td>
                                                </tr>
                                                <tr>
                                                    <td><Link to='/Employer/Paymentlist'><i className="fa-regular fa-pen-to-square"></i></Link></td>
                                                    <td>31/12/2020</td>
                                                    <td>Cheque</td>
                                                    <td className='jb-old'>From: 01/01/2021 <br />
                                                    To: 31/12/2022</td>
                                                    <td>31/12/2020</td>
                                                    <td></td>
                                                    <td className='text-end'>Gross:<br /> Discount:<br /> Net:</td>
                                                    <td className='text-end'>86,250.00<br /> 0.00<br /> 86,250.00</td>
                                                </tr>
                                                <tr>
                                                    <td><Link to='/Employer/Paymentlist'><i className="fa-regular fa-pen-to-square"></i></Link></td>
                                                    <td>31/12/2020</td>
                                                    <td>Cheque</td>
                                                    <td className='jb-old'>From: 01/01/2021 <br />
                                                    To: 31/12/2022</td>
                                                    <td>31/12/2020</td>
                                                    <td></td>
                                                    <td className='text-end'>Gross:<br /> Discount:<br /> Net:</td>
                                                    <td className='text-end'>86,250.00<br /> 0.00<br /> 86,250.00</td>
                                                </tr>
                                                <tr>
                                                    <td><Link to='/Employer/Paymentlist'><i className="fa-regular fa-pen-to-square"></i></Link></td>
                                                    <td>31/12/2020</td>
                                                    <td>Cheque</td>
                                                    <td className='jb-old'>From: 01/01/2021 <br />
                                                    To: 31/12/2022</td>
                                                    <td>31/12/2020</td>
                                                    <td></td>
                                                    <td className='text-end'>Gross:<br /> Discount:<br /> Net:</td>
                                                    <td className='text-end'>86,250.00<br /> 0.00<br /> 86,250.00</td>
                                                </tr>
                                                <tr>
                                                    <td><Link to='/Employer/Paymentlist'><i className="fa-regular fa-pen-to-square"></i></Link></td>
                                                    <td>31/12/2020</td>
                                                    <td>Cheque</td>
                                                    <td className='jb-old'>From: 01/01/2021 <br />
                                                    To: 31/12/2022</td>
                                                    <td>31/12/2020</td>
                                                    <td></td>
                                                    <td className='text-end'>Gross:<br /> Discount:<br /> Net:</td>
                                                    <td className='text-end'>86,250.00<br /> 0.00<br /> 86,250.00</td>
                                                </tr>
                                                <tr>
                                                    <td><Link to='/Employer/Paymentlist'><i className="fa-regular fa-pen-to-square"></i></Link></td>
                                                    <td>31/12/2020</td>
                                                    <td>Cheque</td>
                                                    <td className='jb-old'>From: 01/01/2021 <br />
                                                    To: 31/12/2022</td>
                                                    <td>31/12/2020</td>
                                                    <td></td>
                                                    <td className='text-end'>Gross:<br /> Discount:<br /> Net:</td>
                                                    <td className='text-end'>86,250.00<br /> 0.00<br /> 86,250.00</td>
                                                </tr>
                                                <tr>
                                                    <td><Link to='/Employer/Paymentlist'><i className="fa-regular fa-pen-to-square"></i></Link></td>
                                                    <td>31/12/2020</td>
                                                    <td>Cheque</td>
                                                    <td className='jb-old'>From: 01/01/2021 <br />
                                                    To: 31/12/2022</td>
                                                    <td>31/12/2020</td>
                                                    <td></td>
                                                    <td className='text-end'>Gross:<br /> Discount:<br /> Net:</td>
                                                    <td className='text-end'>86,250.00<br /> 0.00<br /> 86,250.00</td>
                                                </tr>
                                                <tr>
                                                    <td><Link to='/Employer/Paymentlist'><i className="fa-regular fa-pen-to-square"></i></Link></td>
                                                    <td>31/12/2020</td>
                                                    <td>Cheque</td>
                                                    <td className='jb-old'>From: 01/01/2021 <br />
                                                    To: 31/12/2022</td>
                                                    <td>31/12/2020</td>
                                                    <td></td>
                                                    <td className='text-end'>Gross:<br /> Discount:<br /> Net:</td>
                                                    <td className='text-end'>86,250.00<br /> 0.00<br /> 86,250.00</td>
                                                </tr>
                                                <tr>
                                                    <td><Link to='/Employer/Paymentlist'><i className="fa-regular fa-pen-to-square"></i></Link></td>
                                                    <td>31/12/2020</td>
                                                    <td>Cheque</td>
                                                    <td className='jb-old'>From: 01/01/2021 <br />
                                                    To: 31/12/2022</td>
                                                    <td>31/12/2020</td>
                                                    <td></td>
                                                    <td className='text-end'>Gross:<br /> Discount:<br /> Net:</td>
                                                    <td className='text-end'>86,250.00<br /> 0.00<br /> 86,250.00</td>
                                                </tr>
                                            </tbody>                                            
                                        </Table>
                                    </Form>
                                </Col>
                            </Row>
                        </div>
                        <Row className="justify-content-end mt-3">
                            <Col xs={12}>
                                <div className='payment-total'><p>Total = 728,753.00</p></div>
                            </Col>
                        </Row>
                        
                    </Col>
                </Row>
            </Container>

            <Modal size="md" show={lgShow} onHide={() => setLgShow(false)} aria-labelledby="example-modal-sizes-title-lg" centered scrollable>
                <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg" className='fs-6'>
                Agent Registration - Genesiis Software Pvt Ltd
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row className='mb-3'>
                        <Col xs={12} sm={6}>
                            <Form.Label>Registration Fee</Form.Label>
                            <Form.Control type="text" placeholder='4800.00' size='sm'/>
                        </Col>
                        <Col xs={12} sm={6}>
                            <Form.Label>Payment Date</Form.Label>
                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className='form-control form-control-sm' />
                        </Col>
                    </Row> 
                    <Row className='mb-3'>
                        <Col xs={12} sm={6}>
                            <Form.Label>Valid From</Form.Label>
                            <DatePicker selected={startDatefrm} onChange={(date) => setStartDatefrm(date)} className='form-control form-control-sm' />
                        </Col>
                        <Col xs={12} sm={6}>
                            <Form.Label>Valid Until</Form.Label>
                            <DatePicker selected={startDateuntil} onChange={(date) => setStartDateuntil(date)} className='form-control form-control-sm' />
                        </Col>
                    </Row>   
                    <Row className='mb-3'>
                        <Col xs={12} sm={6}>
                            <Form.Label>Payment Type</Form.Label>
                            <Form.Select defaultValue="Select" size='sm'>
                                <option>Select</option>
                                <option>Cash</option>
                                <option>Cheque</option>
                                <option>Credit Card</option>
                            </Form.Select>
                        </Col>
                        <Col xs={12} sm={6}>
                            <Form.Label>Gross Total</Form.Label>
                            <Form.Control type="text" placeholder='4800.00' size='sm' disabled/>
                        </Col>
                    </Row> 
                    <Row className='mb-3'>
                        <Col xs={12} sm={6}>
                            <Form.Label>Discount</Form.Label>
                            <Form.Check type="radio" name="group1" aria-label="radio 1" label="By Percentage"/>
                            <Form.Check type="radio" name="group1" aria-label="radio 2" label="By Value" selected/>
                        </Col>
                        <Col xs={12} sm={6}>
                            <Form.Label>&nbsp;</Form.Label>
                            <Form.Control type="text" placeholder='' size='sm'/>
                        </Col>
                    </Row>   
                    <Row className='mb-3'>
                        <Col xs={12} sm={6}>
                            <Form.Label>Discount Amount</Form.Label>
                            <Form.Control type="text" placeholder='4800.00' size='sm' disabled/>
                        </Col>
                        <Col xs={12} sm={6}>
                            <Form.Label>Net Total</Form.Label>
                            <Form.Control type="text" placeholder='4800.00' size='sm' disabled/>
                        </Col>
                    </Row>    
                    <Row className='mb-3'>
                        <Col xs={12} sm={6}>
                            <Form.Label>Receipt/Cheque No</Form.Label>
                            <Form.Control type="text" placeholder='' size='sm'/>
                        </Col>
                        <Col xs={12} sm={6}>
                            <Form.Label>Payment Verfied</Form.Label>
                            <Form.Check type="radio" name="group2" aria-label="radio 4" label="Yes"/>
                            <Form.Check type="radio" name="group2" aria-label="radio 5" label="No" selected/>
                        </Col>
                    </Row>
                    <Row className='mb-3'>
                        <Col xs={12} sm={6}>
                            <Form.Label>Payment Verfied Date</Form.Label>
                            <DatePicker selected={startDatevef} onChange={(date) => setStartDatevef(date)} className='form-control form-control-sm' /> 
                        </Col>
                    </Row>  
                    <Row className='mb-3'>
                        <Col xs={12} sm={12}>
                            <Form.Label>Remark</Form.Label>
                            <Form.Control as="textarea" rows={3} type="text" placeholder='' size='sm'/>
                        </Col>
                    </Row>                     
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setLgShow(false)} className='filter-btn add-btn'>Save</Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    );
}

export default Paymentlist;