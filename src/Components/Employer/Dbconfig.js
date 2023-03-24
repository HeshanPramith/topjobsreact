import React from 'react';
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Table from 'react-bootstrap/Table';
import { Form, FormGroup } from 'react-bootstrap';

function Dbconfig () {  

    useEffect(() => {
        document.body.classList.add('dbconfig','blue','defhider')
        return () => {
          document.body.classList.remove('dbconfig','blue','defhider')
        }
    }, [])
    
    
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
                            <h4>System Configuration</h4> 
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
                <Form>
                    <Row className='mb-3'>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}> 
                            <div className='sys-config-block'>
                                <h2 className='block-title'>Show Applicants On Main Menu</h2>
                                <h3>Do you want to display recent applicants on the main menu page?</h3>
                                <FormGroup className='f-group'>
                                    <Form.Check type="radio" name="group2" aria-label="radio 4" label="Yes"/>
                                    <Form.Check type="radio" name="group2" aria-label="radio 5" label="No"/>
                                </FormGroup>
                                <Button type='submit' className='filter-btn add-btn btn btn-primary btn-sm m-0'><i className="fa-regular fa-floppy-disk"></i> Save</Button>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}> 
                            <div className='sys-config-block'>
                                <h2 className='block-title'>Main Menu Vacancy Limit</h2>
                                <h3>How many number of vacancies (should be &#60; 25) to be displayed on the main menu page?</h3>
                                <FormGroup className='f-group'>
                                    <Form.Control type="text" placeholder="" className='w-50' />
                                </FormGroup>
                                <Button type='submit' className='filter-btn add-btn btn btn-primary btn-sm m-0'><i className="fa-regular fa-floppy-disk"></i> Save</Button>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}> 
                            <div className='sys-config-block'>
                                <h2 className='block-title'>Color Scheme</h2>
                                <h3>The Default color scheme for your back-office</h3>
                                <FormGroup className='f-group'>
                                    <Form.Check type="radio" name="group29" aria-label="radio 4" label=""/>
                                    <Form.Check type="radio" name="group29" aria-label="radio 5" label="../images/tj-sm.png"/>                                   
                                </FormGroup>
                                <Button type='submit' className='filter-btn add-btn btn btn-primary btn-sm m-0'><i className="fa-regular fa-floppy-disk"></i> Save</Button>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}> 
                            <div className='sys-config-block'>
                                <h2 className='block-title'>Default Apply Option</h2>
                                <h3>Default Apply Option for all applicants</h3>
                                <FormGroup className='f-group'>
                                    <Form.Check type="radio" name="group26" aria-label="radio 4" label="Online"/>
                                    <Form.Check type="radio" name="group26" aria-label="radio 5" label="Via Email"/>
                                    <Form.Check type="radio" name="group26" aria-label="radio 4" label="Walk-in Interviews"/>
                                    <Form.Check type="radio" name="group26" aria-label="radio 5" label="None"/>
                                </FormGroup>
                                <Button type='submit' className='filter-btn add-btn btn btn-primary btn-sm m-0'><i className="fa-regular fa-floppy-disk"></i> Save</Button>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}> 
                            <div className='sys-config-block'>
                                <h2 className='block-title'>Customized questions to be asked from applicants</h2>
                                <h3>The questions that have already been answered by applicants cannot be deleted or changed. Only 3 questions can be displayed to the applicant.</h3>
                                <div className='t-fl'>
                                    <Table striped hover responsive className='dbconfig-tbl'>
                                        <thead>
                                            <tr>
                                                <th width="80px">#</th>
                                                <th width="300px">Question</th>
                                                <th width="150px">Displaying ?</th>
                                                <th width="150px">Mandatory ?</th>
                                                <th width="100px">Order</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>(1)</td>
                                                <td>
                                                    <Form.Control as="textarea" type="text" placeholder="Type here" size='sm' rows={3} cols={60} />
                                                </td>
                                                <td>
                                                    <FormGroup>
                                                        <Form.Check type="radio" name="group265" aria-label="radio 4" label="Yes"/>
                                                        <Form.Check type="radio" name="group265" aria-label="radio 5" label="No"/>
                                                    </FormGroup>
                                                </td>
                                                <td>
                                                    <FormGroup>
                                                        <Form.Check type="radio" name="group266" aria-label="radio 4" label="Yes"/>
                                                        <Form.Check type="radio" name="group266" aria-label="radio 5" label="No"/>
                                                    </FormGroup>
                                                </td>
                                                <td>
                                                    <Form.Control type="text" placeholder=""/>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>(2)</td>
                                                <td>
                                                    <Form.Control as="textarea" type="text" placeholder="Type here" size='sm' rows={3} cols={60} />
                                                </td>
                                                <td>
                                                    <FormGroup>
                                                        <Form.Check type="radio" name="group265" aria-label="radio 4" label="Yes"/>
                                                        <Form.Check type="radio" name="group265" aria-label="radio 5" label="No"/>
                                                    </FormGroup>
                                                </td>
                                                <td>
                                                    <FormGroup>
                                                        <Form.Check type="radio" name="group266" aria-label="radio 4" label="Yes"/>
                                                        <Form.Check type="radio" name="group266" aria-label="radio 5" label="No"/>
                                                    </FormGroup>
                                                </td>
                                                <td>
                                                    <Form.Control type="text" placeholder=""/>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>(3)</td>
                                                <td>
                                                    <Form.Control as="textarea" type="text" placeholder="Type here" size='sm' rows={3} cols={60} />
                                                </td>
                                                <td>
                                                    <FormGroup>
                                                        <Form.Check type="radio" name="group265" aria-label="radio 4" label="Yes"/>
                                                        <Form.Check type="radio" name="group265" aria-label="radio 5" label="No"/>
                                                    </FormGroup>
                                                </td>
                                                <td>
                                                    <FormGroup>
                                                        <Form.Check type="radio" name="group266" aria-label="radio 4" label="Yes"/>
                                                        <Form.Check type="radio" name="group266" aria-label="radio 5" label="No"/>
                                                    </FormGroup>
                                                </td>
                                                <td>
                                                    <Form.Control type="text" placeholder=""/>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                                <Button type='submit' className='filter-btn delete-btn btn btn-primary btn-sm m-0 me-2'><i className="fa-solid fa-trash-can"></i> Delete Question</Button>
                                <Button type='submit' className='filter-btn add-btn btn btn-primary btn-sm m-0'><i className="fa-regular fa-floppy-disk"></i> Save Question</Button>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}> 
                            <div className='sys-config-block'>
                                <h2 className='block-title'>Default Country</h2>
                                <h3>This is the default country that will be automatically selected on an application form.</h3>
                                    <FormGroup className='f-group'>
                                        <Form.Select size='sm' className='w-50'>
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
                                    </FormGroup>
                                <Button type='submit' className='filter-btn add-btn btn btn-primary btn-sm m-0'><i className="fa-regular fa-floppy-disk"></i> Save</Button>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}> 
                            <div className='sys-config-block'>
                                <h2 className='block-title'>Default Location</h2>
                                <h3>This is the default branch/location that will be automatically selected on an application form.</h3>
                                <FormGroup className='f-group'>
                                    <Form.Control type="text" placeholder=""/>
                                </FormGroup>
                                <Button type='submit' className='filter-btn add-btn btn btn-primary btn-sm m-0'><i className="fa-regular fa-floppy-disk"></i> Save</Button>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}> 
                            <div className='sys-config-block'>
                                <h2 className='block-title'>Minimum Rank</h2>
                                <h3>This value indicates the minimum number of points an applicant should obtain in order to get matched for a vacancy. For example, if the value is 25, applicants who get 25 or more points will qualify for the particular vacancy.</h3>
                                <FormGroup className='f-group'>
                                    <Form.Select id="disabledSelect">
                                        <option>5</option>
                                        <option>10</option>
                                        <option>15</option>
                                        <option>20</option>
                                        <option>25</option>
                                        <option>30</option>
                                        <option>35</option>
                                        <option>40</option>
                                        <option>45</option>
                                        <option>50</option>
                                        <option>55</option>
                                    </Form.Select>
                                </FormGroup>
                                <Button type='submit' className='filter-btn add-btn btn btn-primary btn-sm m-0'><i className="fa-regular fa-floppy-disk"></i> Save</Button>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}> 
                            <div className='sys-config-block'>
                                <h2 className='block-title'>No of CV's uploaded</h2>
                                <h3>Number of cv's an applicant can upload for your company (All vacancies)</h3>
                                <FormGroup className='f-group'>
                                    <Form.Control type="text" placeholder=""/>
                                </FormGroup>
                                <Button type='submit' className='filter-btn add-btn btn btn-primary btn-sm m-0'><i className="fa-regular fa-floppy-disk"></i> Save</Button>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}> 
                            <div className='sys-config-block'>
                                <h2 className='block-title'>Show applicant history in applicant profile</h2>
                                <h3>This is to give authority to view applicant history in applicant profile</h3>
                                <FormGroup className='f-group'>
                                    <Form.Check type="radio" name="group126" aria-label="radio 4" label="Yes"/>
                                    <Form.Check type="radio" name="group126" aria-label="radio 5" label="No"/>
                                </FormGroup>
                                <Button type='submit' className='filter-btn add-btn btn btn-primary btn-sm m-0'><i className="fa-regular fa-floppy-disk"></i> Save</Button>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}> 
                            <div className='sys-config-block'>
                                <h2 className='block-title'>Show "Open List"</h2>
                                <h3>&nbsp;</h3>
                                <FormGroup className='f-group'>
                                    <Form.Check type="radio" name="group1126" aria-label="radio 4" label="Yes"/>
                                    <Form.Check type="radio" name="group1126" aria-label="radio 5" label="No"/>
                                </FormGroup>
                                <Button type='submit' className='filter-btn add-btn btn btn-primary btn-sm m-0'><i className="fa-regular fa-floppy-disk"></i> Save</Button>
                            </div>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </React.Fragment>
    );
}

export default Dbconfig;