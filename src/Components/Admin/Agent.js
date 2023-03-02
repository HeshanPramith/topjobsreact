import React from 'react';
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

function Agent () {  

    useEffect(() => {
        document.body.classList.add('agent','blue','defhider')
        return () => {
          document.body.classList.remove('agent','blue','defhider')
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
                            <h4>Organisation / Employer Registration</h4> 
                            <small className='d-none d-sm-block'>Your last login was on 07 February 2023 at 04:27 PM</small>  
                            <div className='admin-nav'>
                                <Link to='/Admin/Welcome' title='Dashboard'><i className="fa-solid fa-house"></i></Link>
                                <Link to='/#' title='Help'><i className="fa-solid fa-circle-info"></i></Link>
                                <Link to='/#' title='FAQ'><i className="fa-solid fa-comment-dots"></i></Link>
                            </div>                        
                        </Col>
                        <Col className='col-2 col-sm-2 col-md-2 col-lg-1 text-left order-sm-last'>
                            <Link to='/Admin/Login' className='logout'><i className="fa-solid fa-arrow-right-from-bracket"></i></Link>                     
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
                    <Col xs={12} sm={12} lg={3} xl={3} xxl={2} className="h-100"> 
                        <div className='h-100 prel'>
                            <div className='agent-info'>                                
                                <div className='agent-logo'>
                                    <img src='../images/genesiis.png' className='img-fluid' alt='logo'></img> 
                                </div>
                                <h3>Ref No : 0000000001</h3>
                                <div className='agent-data'>
                                    <p>Genesiis Software Pvt Ltd</p>
                                    <p>Finco Group</p>
                                    <p><Link to='/Admin/Agent'>www.genesiis.com</Link></p>
                                </div>
                            </div>
                        </div>  
                    </Col>
                    <Col xs={12} sm={12} lg={9} xl={9} xxl={10}>                         
                        <Form>
                            <h5 className='fs-6'>General Information</h5>
                            <div className='filter-frm mb-3'>
                                <Row>
                                    <Form.Group as={Col} xs={12} sm={3} className="mb-3" controlId="">
                                        <Form.Label>Organisation <i>*</i></Form.Label>
                                        <Form.Control type="text" placeholder="Genesiis Software Pvt Ltd" size='sm'/>
                                    </Form.Group>
                                    <Form.Group as={Col} xs={12} sm={3} className="mb-3" controlId="">
                                        <Form.Label>Short Name <i>*</i></Form.Label>
                                        <Form.Control type="text" placeholder="Genesiis Software" size='sm' />
                                    </Form.Group>
                                    <Form.Group as={Col} xs={12} sm={3} className="mb-3" controlId="">
                                        <Form.Label>Company Group</Form.Label>
                                        <Form.Control type="text" placeholder="Finco Group" size='sm' />
                                    </Form.Group>
                                    <Form.Group as={Col} xs={6} sm={3} className="mb-3" controlId="">
                                        <Form.Label>Registration No <i>*</i></Form.Label>
                                        <Form.Control type="text" placeholder="1234567" size='sm' />
                                    </Form.Group>
                                    <Form.Group as={Col} xs={6} sm={3} className="mb-3" controlId="">
                                        <Form.Label>Industry <i>*</i></Form.Label>
                                        <Form.Select size='sm'>
                                            <option>Information Technology</option>
                                            <option>Agriculture</option>
                                            <option>Airline</option>
                                            <option>Apparel Industry</option>
                                            <option>Arts & Craft</option>
                                        </Form.Select>
                                    </Form.Group>    
                                    <Form.Group as={Col} xs={6} sm={3} className="mb-3" controlId="">
                                        <Form.Label>Year of Incorporation</Form.Label>
                                        <Form.Control type="number" placeholder="2001" size='sm' />
                                    </Form.Group> 
                                    <Form.Group as={Col} xs={6} sm={3} className="mb-3" controlId="">
                                        <Form.Label>Legal Status <i>*</i></Form.Label>
                                        <Form.Select size='sm'>
                                            <option>Private</option>
                                            <option>Other</option>
                                            <option>Association</option>
                                            <option>Government</option>
                                            <option>Public Quoted</option>
                                        </Form.Select>
                                    </Form.Group>  
                                    <Form.Group as={Col} xs={6} sm={3} className="mb-3" controlId="">
                                        <Form.Label>Company Size</Form.Label>
                                        <Form.Select size='sm'>
                                            <option>1 - 20</option>
                                            <option>21 - 50</option>
                                            <option>51 - 100</option>
                                            <option>101 - 200</option>
                                            <option>200 +</option>
                                        </Form.Select>
                                    </Form.Group> 
                                    <Form.Group as={Col} xs={12} sm={12} className="mb-3" controlId="">
                                        <Form.Label>Core Business <i>*</i></Form.Label>
                                        <Form.Control as="textarea" type="text" placeholder="Software Development" size='sm' rows={5} cols={60} />
                                        <small>20 of 250 character limit used</small>
                                    </Form.Group>                         
                                </Row>
                            </div>
                            <h5 className='fs-6'>General Contact Information</h5>
                            <div className='filter-frm mb-3'>
                                <Row>
                                    <Form.Group as={Col} xs={12} sm={3} className="mb-3" controlId="">
                                        <Form.Label>Address 1 <i>*</i></Form.Label>
                                        <Form.Control type="text" placeholder="NO 16" size='sm'/>
                                    </Form.Group>
                                    <Form.Group as={Col} xs={12} sm={3} className="mb-3" controlId="">
                                        <Form.Label>Address 2</Form.Label>
                                        <Form.Control type="text" placeholder="5th Lane" size='sm'/>
                                    </Form.Group>
                                    <Form.Group as={Col} xs={12} sm={3} className="mb-3" controlId="">
                                        <Form.Label>Address 3 <i>*</i></Form.Label>
                                        <Form.Control type="text" placeholder="Colombo 3" size='sm'/>
                                    </Form.Group>
                                    <Form.Group as={Col} xs={12} sm={3} className="mb-3" controlId="">
                                        <Form.Label>Zip / Postal Code</Form.Label>
                                        <Form.Control type="text" placeholder='Zip / Postal Code' size='sm'/>
                                    </Form.Group>
                                    <Form.Group as={Col} xs={6} sm={3} className="mb-3" controlId="">
                                        <Form.Label>Country <i>*</i></Form.Label>
                                        <Form.Select size='sm'>
                                            <option placeholder="AF">Afghanistan</option>
                                            <option placeholder="AX">Aland Islands</option>
                                            <option placeholder="AL">Albania</option>
                                            <option placeholder="DZ">Algeria</option>
                                            <option placeholder="AS">American Samoa</option>
                                            <option placeholder="AD">Andorra</option>
                                            <option placeholder="AO">Angola</option>
                                            <option placeholder="AI">Anguilla</option>
                                            <option placeholder="AQ">Antarctica</option>
                                            <option placeholder="AG">Antigua and Barbuda</option>
                                            <option placeholder="AR">Argentina</option>
                                            <option placeholder="AM">Armenia</option>
                                            <option placeholder="AW">Aruba</option>
                                            <option placeholder="AU">Australia</option>
                                            <option placeholder="AT">Austria</option>
                                            <option placeholder="AZ">Azerbaijan</option>
                                            <option placeholder="BS">Bahamas</option>
                                            <option placeholder="BH">Bahrain</option>
                                            <option placeholder="BD">Bangladesh</option>
                                            <option placeholder="BB">Barbados</option>
                                            <option placeholder="BY">Belarus</option>
                                            <option placeholder="BE">Belgium</option>
                                            <option placeholder="BZ">Belize</option>
                                            <option placeholder="BJ">Benin</option>
                                            <option placeholder="BM">Bermuda</option>
                                            <option placeholder="BT">Bhutan</option>
                                            <option placeholder="BO">Bolivia</option>
                                            <option placeholder="BQ">Bonaire, Sint Eustatius and Saba</option>
                                            <option placeholder="BA">Bosnia and Herzegovina</option>
                                            <option placeholder="BW">Botswana</option>
                                            <option placeholder="BV">Bouvet Island</option>
                                            <option placeholder="BR">Brazil</option>
                                            <option placeholder="IO">British Indian Ocean Territory</option>
                                            <option placeholder="BN">Brunei Darussalam</option>
                                            <option placeholder="BG">Bulgaria</option>
                                            <option placeholder="BF">Burkina Faso</option>
                                            <option placeholder="BI">Burundi</option>
                                            <option placeholder="KH">Cambodia</option>
                                            <option placeholder="CM">Cameroon</option>
                                            <option placeholder="CA">Canada</option>
                                            <option placeholder="CV">Cape Verde</option>
                                            <option placeholder="KY">Cayman Islands</option>
                                            <option placeholder="CF">Central African Republic</option>
                                            <option placeholder="TD">Chad</option>
                                            <option placeholder="CL">Chile</option>
                                            <option placeholder="CN">China</option>
                                            <option placeholder="CX">Christmas Island</option>
                                            <option placeholder="CC">Cocos (Keeling) Islands</option>
                                            <option placeholder="CO">Colombia</option>
                                            <option placeholder="KM">Comoros</option>
                                            <option placeholder="CG">Congo</option>
                                            <option placeholder="CD">Congo, Democratic Republic of the Congo</option>
                                            <option placeholder="CK">Cook Islands</option>
                                            <option placeholder="CR">Costa Rica</option>
                                            <option placeholder="CI">Cote D'Ivoire</option>
                                            <option placeholder="HR">Croatia</option>
                                            <option placeholder="CU">Cuba</option>
                                            <option placeholder="CW">Curacao</option>
                                            <option placeholder="CY">Cyprus</option>
                                            <option placeholder="CZ">Czech Republic</option>
                                            <option placeholder="DK">Denmark</option>
                                            <option placeholder="DJ">Djibouti</option>
                                            <option placeholder="DM">Dominica</option>
                                            <option placeholder="DO">Dominican Republic</option>
                                            <option placeholder="EC">Ecuador</option>
                                            <option placeholder="EG">Egypt</option>
                                            <option placeholder="SV">El Salvador</option>
                                            <option placeholder="GQ">Equatorial Guinea</option>
                                            <option placeholder="ER">Eritrea</option>
                                            <option placeholder="EE">Estonia</option>
                                            <option placeholder="ET">Ethiopia</option>
                                            <option placeholder="FK">Falkland Islands (Malvinas)</option>
                                            <option placeholder="FO">Faroe Islands</option>
                                            <option placeholder="FJ">Fiji</option>
                                            <option placeholder="FI">Finland</option>
                                            <option placeholder="FR">France</option>
                                            <option placeholder="GF">French Guiana</option>
                                            <option placeholder="PF">French Polynesia</option>
                                            <option placeholder="TF">French Southern Territories</option>
                                            <option placeholder="GA">Gabon</option>
                                            <option placeholder="GM">Gambia</option>
                                            <option placeholder="GE">Georgia</option>
                                            <option placeholder="DE">Germany</option>
                                            <option placeholder="GH">Ghana</option>
                                            <option placeholder="GI">Gibraltar</option>
                                            <option placeholder="GR">Greece</option>
                                            <option placeholder="GL">Greenland</option>
                                            <option placeholder="GD">Grenada</option>
                                            <option placeholder="GP">Guadeloupe</option>
                                            <option placeholder="GU">Guam</option>
                                            <option placeholder="GT">Guatemala</option>
                                            <option placeholder="GG">Guernsey</option>
                                            <option placeholder="GN">Guinea</option>
                                            <option placeholder="GW">Guinea-Bissau</option>
                                            <option placeholder="GY">Guyana</option>
                                            <option placeholder="HT">Haiti</option>
                                            <option placeholder="HM">Heard Island and Mcdonald Islands</option>
                                            <option placeholder="VA">Holy See (Vatican City State)</option>
                                            <option placeholder="HN">Honduras</option>
                                            <option placeholder="HK">Hong Kong</option>
                                            <option placeholder="HU">Hungary</option>
                                            <option placeholder="IS">Iceland</option>
                                            <option placeholder="IN">India</option>
                                            <option placeholder="ID">Indonesia</option>
                                            <option placeholder="IR">Iran, Islamic Republic of</option>
                                            <option placeholder="IQ">Iraq</option>
                                            <option placeholder="IE">Ireland</option>
                                            <option placeholder="IM">Isle of Man</option>
                                            <option placeholder="IL">Israel</option>
                                            <option placeholder="IT">Italy</option>
                                            <option placeholder="JM">Jamaica</option>
                                            <option placeholder="JP">Japan</option>
                                            <option placeholder="JE">Jersey</option>
                                            <option placeholder="JO">Jordan</option>
                                            <option placeholder="KZ">Kazakhstan</option>
                                            <option placeholder="KE">Kenya</option>
                                            <option placeholder="KI">Kiribati</option>
                                            <option placeholder="KP">Korea, Democratic People's Republic of</option>
                                            <option placeholder="KR">Korea, Republic of</option>
                                            <option placeholder="XK">Kosovo</option>
                                            <option placeholder="KW">Kuwait</option>
                                            <option placeholder="KG">Kyrgyzstan</option>
                                            <option placeholder="LA">Lao People's Democratic Republic</option>
                                            <option placeholder="LV">Latvia</option>
                                            <option placeholder="LB">Lebanon</option>
                                            <option placeholder="LS">Lesotho</option>
                                            <option placeholder="LR">Liberia</option>
                                            <option placeholder="LY">Libyan Arab Jamahiriya</option>
                                            <option placeholder="LI">Liechtenstein</option>
                                            <option placeholder="LT">Lithuania</option>
                                            <option placeholder="LU">Luxembourg</option>
                                            <option placeholder="MO">Macao</option>
                                            <option placeholder="MK">Macedonia, the Former Yugoslav Republic of</option>
                                            <option placeholder="MG">Madagascar</option>
                                            <option placeholder="MW">Malawi</option>
                                            <option placeholder="MY">Malaysia</option>
                                            <option placeholder="MV">Maldives</option>
                                            <option placeholder="ML">Mali</option>
                                            <option placeholder="MT">Malta</option>
                                            <option placeholder="MH">Marshall Islands</option>
                                            <option placeholder="MQ">Martinique</option>
                                            <option placeholder="MR">Mauritania</option>
                                            <option placeholder="MU">Mauritius</option>
                                            <option placeholder="YT">Mayotte</option>
                                            <option placeholder="MX">Mexico</option>
                                            <option placeholder="FM">Micronesia, Federated States of</option>
                                            <option placeholder="MD">Moldova, Republic of</option>
                                            <option placeholder="MC">Monaco</option>
                                            <option placeholder="MN">Mongolia</option>
                                            <option placeholder="ME">Montenegro</option>
                                            <option placeholder="MS">Montserrat</option>
                                            <option placeholder="MA">Morocco</option>
                                            <option placeholder="MZ">Mozambique</option>
                                            <option placeholder="MM">Myanmar</option>
                                            <option placeholder="NA">Namibia</option>
                                            <option placeholder="NR">Nauru</option>
                                            <option placeholder="NP">Nepal</option>
                                            <option placeholder="NL">Netherlands</option>
                                            <option placeholder="AN">Netherlands Antilles</option>
                                            <option placeholder="NC">New Caledonia</option>
                                            <option placeholder="NZ">New Zealand</option>
                                            <option placeholder="NI">Nicaragua</option>
                                            <option placeholder="NE">Niger</option>
                                            <option placeholder="NG">Nigeria</option>
                                            <option placeholder="NU">Niue</option>
                                            <option placeholder="NF">Norfolk Island</option>
                                            <option placeholder="MP">Northern Mariana Islands</option>
                                            <option placeholder="NO">Norway</option>
                                            <option placeholder="OM">Oman</option>
                                            <option placeholder="PK">Pakistan</option>
                                            <option placeholder="PW">Palau</option>
                                            <option placeholder="PS">Palestinian Territory, Occupied</option>
                                            <option placeholder="PA">Panama</option>
                                            <option placeholder="PG">Papua New Guinea</option>
                                            <option placeholder="PY">Paraguay</option>
                                            <option placeholder="PE">Peru</option>
                                            <option placeholder="PH">Philippines</option>
                                            <option placeholder="PN">Pitcairn</option>
                                            <option placeholder="PL">Poland</option>
                                            <option placeholder="PT">Portugal</option>
                                            <option placeholder="PR">Puerto Rico</option>
                                            <option placeholder="QA">Qatar</option>
                                            <option placeholder="RE">Reunion</option>
                                            <option placeholder="RO">Romania</option>
                                            <option placeholder="RU">Russian Federation</option>
                                            <option placeholder="RW">Rwanda</option>
                                            <option placeholder="BL">Saint Barthelemy</option>
                                            <option placeholder="SH">Saint Helena</option>
                                            <option placeholder="KN">Saint Kitts and Nevis</option>
                                            <option placeholder="LC">Saint Lucia</option>
                                            <option placeholder="MF">Saint Martin</option>
                                            <option placeholder="PM">Saint Pierre and Miquelon</option>
                                            <option placeholder="VC">Saint Vincent and the Grenadines</option>
                                            <option placeholder="WS">Samoa</option>
                                            <option placeholder="SM">San Marino</option>
                                            <option placeholder="ST">Sao Tome and Principe</option>
                                            <option placeholder="SA">Saudi Arabia</option>
                                            <option placeholder="SN">Senegal</option>
                                            <option placeholder="RS">Serbia</option>
                                            <option placeholder="CS">Serbia and Montenegro</option>
                                            <option placeholder="SC">Seychelles</option>
                                            <option placeholder="SL">Sierra Leone</option>
                                            <option placeholder="SG">Singapore</option>
                                            <option placeholder="SX">Sint Maarten</option>
                                            <option placeholder="SK">Slovakia</option>
                                            <option placeholder="SI">Slovenia</option>
                                            <option placeholder="SB">Solomon Islands</option>
                                            <option placeholder="SO">Somalia</option>
                                            <option placeholder="ZA">South Africa</option>
                                            <option placeholder="GS">South Georgia and the South Sandwich Islands</option>
                                            <option placeholder="SS">South Sudan</option>
                                            <option placeholder="ES">Spain</option>
                                            <option placeholder="LK">Sri Lanka</option>
                                            <option placeholder="SD">Sudan</option>
                                            <option placeholder="SR">Suriname</option>
                                            <option placeholder="SJ">Svalbard and Jan Mayen</option>
                                            <option placeholder="SZ">Swaziland</option>
                                            <option placeholder="SE">Sweden</option>
                                            <option placeholder="CH">Switzerland</option>
                                            <option placeholder="SY">Syrian Arab Republic</option>
                                            <option placeholder="TW">Taiwan, Province of China</option>
                                            <option placeholder="TJ">Tajikistan</option>
                                            <option placeholder="TZ">Tanzania, United Republic of</option>
                                            <option placeholder="TH">Thailand</option>
                                            <option placeholder="TL">Timor-Leste</option>
                                            <option placeholder="TG">Togo</option>
                                            <option placeholder="TK">Tokelau</option>
                                            <option placeholder="TO">Tonga</option>
                                            <option placeholder="TT">Trinidad and Tobago</option>
                                            <option placeholder="TN">Tunisia</option>
                                            <option placeholder="TR">Turkey</option>
                                            <option placeholder="TM">Turkmenistan</option>
                                            <option placeholder="TC">Turks and Caicos Islands</option>
                                            <option placeholder="TV">Tuvalu</option>
                                            <option placeholder="UG">Uganda</option>
                                            <option placeholder="UA">Ukraine</option>
                                            <option placeholder="AE">United Arab Emirates</option>
                                            <option placeholder="GB">United Kingdom</option>
                                            <option placeholder="US">United States</option>
                                            <option placeholder="UM">United States Minor Outlying Islands</option>
                                            <option placeholder="UY">Uruguay</option>
                                            <option placeholder="UZ">Uzbekistan</option>
                                            <option placeholder="VU">Vanuatu</option>
                                            <option placeholder="VE">Venezuela</option>
                                            <option placeholder="VN">Viet Nam</option>
                                            <option placeholder="VG">Virgin Islands, British</option>
                                            <option placeholder="VI">Virgin Islands, U.s.</option>
                                            <option placeholder="WF">Wallis and Futuna</option>
                                            <option placeholder="EH">Western Sahara</option>
                                            <option placeholder="YE">Yemen</option>
                                            <option placeholder="ZM">Zambia</option>
                                            <option placeholder="ZW">Zimbabwe</option>
                                        </Form.Select>
                                    </Form.Group> 
                                    <Form.Group as={Col} xs={6} sm={3} className="mb-3" controlId="">
                                        <Form.Label>State / Province <i>*</i></Form.Label>
                                        <Form.Select size='sm'>
                                            <option>Ampara</option>
                                            <option>Anuradhapura</option>
                                            <option>Badulla</option>
                                            <option>Batticaloa</option>
                                            <option>Colombo</option>
                                            <option>Galle</option>
                                            <option>Gampaha</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group as={Col} xs={12} sm={2} className="mb-3" controlId="">
                                        <Form.Label>Phone <i>*</i></Form.Label>
                                        <Form.Control type="number" placeholder='7765600' size='sm'/>
                                    </Form.Group>
                                    <Form.Group as={Col} xs={12} sm={2} className="mb-3" controlId="">
                                        <Form.Label>Fax</Form.Label>
                                        <Form.Control type="number" placeholder='4765897' size='sm'/>
                                    </Form.Group>
                                    <Form.Group as={Col} xs={12} sm={2} className="mb-3" controlId="">
                                        <Form.Label>Email <i>*</i></Form.Label>
                                        <Form.Control type="email" placeholder='sdb@genesiis.com' size='sm'/>
                                    </Form.Group>
                                    <Form.Group as={Col} xs={12} sm={12} className="mb-3" controlId="">
                                        <Form.Label>Employer Location in Google Maps</Form.Label>
                                        <a href='https://goo.gl/maps/MAjUajB59XoeHWay8' rel='noreferrer' target='_blank' className='g-map'><i className="fa-solid fa-map-location-dot"></i>Google Map</a>
                                        <Link to='/Admin/Agent' className='g-map-edit'><i className="fa-solid fa-pen-to-square"></i> Edit</Link>
                                    </Form.Group>
                                </Row>
                            </div>
                            <h5 className='fs-6'>General Contact Information</h5>
                            <div className='filter-frm mb-3'>
                                <Row>
                                    <Col xs={12}>
                                        <Form>
                                            <Table striped hover responsive className='agent-tbl'>
                                                <thead>
                                                    <tr>
                                                        <th>Contact Person <i>*</i></th>
                                                        <th>Designation <i>*</i></th>
                                                        <th>Phone <i>*</i></th>
                                                        <th>Mobile</th>
                                                        <th>Fax</th>
                                                        <th>Email <i>*</i></th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <Form.Control type="text" placeholder="Name" />
                                                        </td>
                                                        <td>
                                                            <Form.Control type="text" placeholder="Designation" />
                                                        </td>
                                                        <td>
                                                            <Form.Control type="text" placeholder="12345678" />
                                                        </td>
                                                        <td>
                                                            <Form.Control type="text" placeholder="12345678" />
                                                        </td>
                                                        <td>
                                                            <Form.Control type="text" placeholder="12345678" />
                                                        </td>
                                                        <td>
                                                            <Form.Control type="email" placeholder="test@genesiis.com" />
                                                        </td>
                                                        <td>
                                                            <Link to='/Admin/Agent'><i className="fa-solid fa-circle-plus"></i></Link>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Senaka Weerasooria</td>
                                                        <td>CEO</td>
                                                        <td>4765400</td>
                                                        <td>4765400</td>
                                                        <td>4765400</td>
                                                        <td>sdb@genesiis.com</td>
                                                        <td><Link to='/Admin/Agent'><i className="fa-regular fa-pen-to-square"></i></Link></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Dilan Silva</td>
                                                        <td>Senior Customer R E      </td>
                                                        <td>(+94) 117 765 645</td>
                                                        <td>(+94) 773 918 922</td>
                                                        <td>4765400</td>
                                                        <td>sdb@genesiis.com</td>
                                                        <td><Link to='/Admin/Agent'><i className="fa-regular fa-pen-to-square"></i></Link></td>
                                                    </tr>
                                                </tbody>                                            
                                            </Table>
                                        </Form>
                                    </Col>
                                </Row>
                            </div>
                            <h5 className='fs-6'>Other Information</h5>
                            <div className='filter-frm mb-3'>
                                <Row>
                                    <Form.Group as={Col} xs={12} sm={3} className="mb-3" controlId="">
                                        <Form.Label>Web Site</Form.Label>
                                        <Form.Control type="text" placeholder='www.genesiis.com' size='sm'/>
                                    </Form.Group>
                                    <Form.Group as={Col} xs={12} sm={5} className="mb-3" controlId="">
                                        <Form.Label>Company Logo</Form.Label>
                                        <Form.Control type="file" placeholder='jpg/PNG/gif' size='sm'/>
                                        <small>Your logo dimensions should be 110 x 50 pixels , and size should be less than 100 kb</small>
                                    </Form.Group>
                                    <Form.Group as={Col} xs={12} sm={4} className="mb-3" controlId="">
                                        <Form.Label>Your url will be * http://www.topjobs.lk/genesiis</Form.Label>
                                        <Form.Control type="text" placeholder='www.genesiis.com' size='sm'/>
                                        <small>If you want to change your url, Please inform topjobs Admin</small>
                                    </Form.Group>
                                    <Form.Group as={Col} xs={12} sm={12} className="mb-3" controlId="">
                                        <Form.Label>Remarks</Form.Label>
                                        <Form.Control as="textarea" type="text" placeholder="A leading software firm in sri lanka" size='sm' rows={5} cols={60} />
                                        <small>46 of 250 character limit used</small>
                                    </Form.Group>
                                </Row>
                            </div>
                            <Row className="justify-content-end mt-3">
                                <Col md="auto">
                                    <Button size='sm' variant="primary" type="submit" className='filter-btn search-btn'>
                                        Update
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

export default Agent;