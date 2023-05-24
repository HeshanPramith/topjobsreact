import React, { useState } from 'react';
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
// import Table from 'react-bootstrap/Table';
import { Form, FormGroup } from 'react-bootstrap';
import Superadminheader from '../Common/Superadminheader';
import InputGroup from 'react-bootstrap/InputGroup';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';

function Dbconfig () {  

    useEffect(() => {
        document.body.classList.add('sysconfig','red','defhider')
        return () => {
          document.body.classList.remove('sysconfig','red','defhider')
        }
    }, [])
    
    const [startDate, setStartDate] = useState(new Date());
    const [startDate2, setStartDate2] = useState(new Date());
    
    return (
        <React.Fragment>
            <Superadminheader/>
            <Container fluid className='h-100 mt-4'>
                <Row>
                    <Col xs={12} className='mb-3'>
                        <h1 className='suadmin-page-title'>System Configuration</h1>
                    </Col>
                </Row>
                <Form>
                    <Row className='mb-3'>
                        <Col xs={12} sm={12} md={6} lg={6} xl={4} xxl={4}> 
                            <div className='sys-config-block'>
                                <h2 className='block-title'>No of other info questions</h2>
                                <h3>No of questions an employer can ask from an applicant</h3>
                                <FormGroup className='f-group'>
                                    <Form.Control type="text" placeholder="3"/>
                                </FormGroup>
                                <Button type='submit' className='filter-btn add-btn btn btn-primary btn-sm m-0'><i className="fa-regular fa-floppy-disk"></i> Save</Button>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={4} xxl={3}> 
                            <div className='sys-config-block'>
                                <h2 className='block-title'>No of customized questions</h2>
                                <h3>Number of customized questions per vacancy</h3>
                                <FormGroup className='f-group'>
                                    <Form.Control type="text" placeholder="5" />
                                </FormGroup>
                                <Button type='submit' className='filter-btn add-btn btn btn-primary btn-sm m-0'><i className="fa-regular fa-floppy-disk"></i> Save</Button>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={4} xxl={5}> 
                            <div className='sys-config-block'>
                                <h2 className='block-title'>CV upload path</h2>
                                <h3>This is the location or the path to the folder where the uploaded cvs of applicants are saved</h3>
                                <FormGroup className='f-group'>
                                    <Form.Control type="text" placeholder="D:\sdb\ctxdeploy\cv.war" />                                       
                                </FormGroup>
                                <Button type='submit' className='filter-btn add-btn btn btn-primary btn-sm m-0'><i className="fa-regular fa-floppy-disk"></i> Save</Button>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={4} xxl={3}> 
                            <div className='sys-config-block'>
                                <h2 className='block-title'>Log file path</h2>
                                <h3>Path to the log file</h3>
                                <FormGroup className='f-group'>
                                    <Form.Control type="text" placeholder="D:\sdb\log" />
                                </FormGroup>
                                <Button type='submit' className='filter-btn add-btn btn btn-primary btn-sm m-0'><i className="fa-regular fa-floppy-disk"></i> Save</Button>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={4} xxl={3}> 
                            <div className='sys-config-block'>
                                <h2 className='block-title'>No of hot jobs displayed on home page</h2>
                                <h3>No of hot jobs to be displayed on the home page</h3>
                                <FormGroup className='f-group'>
                                    <Form.Control type="text" placeholder="100" />
                                </FormGroup>
                                <Button type='submit' className='filter-btn add-btn btn btn-primary btn-sm m-0'><i className="fa-regular fa-floppy-disk"></i> Save</Button>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={4} xxl={3}> 
                            <div className='sys-config-block'>
                                <h2 className='block-title'>The period to display a hot job on home page</h2>
                                <h3>Hot job display period (in days)</h3>
                                <FormGroup className='f-group'>
                                    <Form.Control type="text" placeholder="60" />
                                </FormGroup>
                                <Button type='submit' className='filter-btn add-btn btn btn-primary btn-sm m-0'><i className="fa-regular fa-floppy-disk"></i> Save</Button>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={4} xxl={3}> 
                            <div className='sys-config-block'>
                                <h2 className='block-title'>No of organisations to be displayed on home page</h2>
                                <h3>No of Featured Employers to be displayed on the home page</h3>
                                <FormGroup className='f-group'>
                                    <Form.Control type="text" placeholder="200" />
                                </FormGroup>
                                <Button type='submit' className='filter-btn add-btn btn btn-primary btn-sm m-0'><i className="fa-regular fa-floppy-disk"></i> Save</Button>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={4} xxl={3}> 
                            <div className='sys-config-block'>
                                <h2 className='block-title'>No of recent jobs displayed on home page</h2>
                                <h3>No of recent jobs to be displayed on the home page</h3>
                                <FormGroup className='f-group'>
                                    <Form.Control type="text" placeholder="175" />
                                </FormGroup>
                                <Button type='submit' className='filter-btn add-btn btn btn-primary btn-sm m-0'><i className="fa-regular fa-floppy-disk"></i> Save</Button>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={4} xxl={6}> 
                            <div className='sys-config-block'>
                                <h2 className='block-title'>Default Country</h2>
                                <h3>This is the dafualt country that will be automatically selected when a page with a country field is loaded. eg: agent registration</h3>
                                    <FormGroup className='f-group'>
                                        <Form.Select className='w-50'>
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
                        <Col xs={12} sm={12} md={6} lg={6} xl={4} xxl={3}> 
                            <div className='sys-config-block'>
                                <h2 className='block-title'>Email addresses to which the error reports are sent</h2>
                                <h3>Email address to send the exceptions</h3>
                                <FormGroup className='f-group'>
                                    <Form.Control type="text" placeholder="sdb@genesiis.com"/>
                                </FormGroup>
                                <Button type='submit' className='filter-btn add-btn btn btn-primary btn-sm m-0'><i className="fa-regular fa-floppy-disk"></i> Save</Button>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={4} xxl={4}> 
                            <div className='sys-config-block'>
                                <h2 className='block-title'>Space allocated for each applicant to upload their common documents</h2>
                                <h3>The limit of the folder size where the common CV's are uploaded</h3>
                                <InputGroup size='sm' className='f-group'>
                                    <Form.Control type="text" placeholder="10"/>
                                    <InputGroup.Text id="basic-addon1">MB</InputGroup.Text>
                                </InputGroup>
                                <Button type='submit' className='filter-btn add-btn btn btn-primary btn-sm m-0'><i className="fa-regular fa-floppy-disk"></i> Save</Button>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}> 
                            <div className='sys-config-block'>
                                <h2 className='block-title'>Maintenance Message - Site maintenance period</h2>
                                <h3>Maintenance Message</h3>
                                <FormGroup size='sm' className='f-group'>
                                    <Form.Control as="textarea" type="text" rows={7} placeholder="topjobs will be temporarily out of service between 9 PM to 9.15 PM for maintenance. 
"/>
                                </FormGroup>
                                <Row>
                                    <Col sm={6}>
                                        <h3>Message Display Period From:</h3>
                                        <Row>
                                            <Col xs={6} sm={6} md={3}>
                                                <FormGroup className='f-group'>
                                                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className='form-control form-control-sm' />
                                                </FormGroup>
                                            </Col>
                                            <Col xs={6} sm={6} md={3}>
                                                <InputGroup size='sm' className='f-group'>
                                                    <Form.Control type="text" placeholder="10"/>
                                                    <InputGroup.Text id="basic-addon1">HH</InputGroup.Text>
                                                </InputGroup>
                                            </Col>
                                            <Col xs={6} sm={6} md={3}>
                                                <InputGroup size='sm' className='f-group'>
                                                    <Form.Control type="text" placeholder="10"/>
                                                    <InputGroup.Text id="basic-addon1">MM</InputGroup.Text>
                                                </InputGroup>
                                            </Col>
                                            <Col xs={6} sm={6} md={3}>
                                                <FormGroup className='f-group'>
                                                    <Form.Select aria-label="Default select example">
                                                        <option value="1">AM</option>
                                                        <option value="2">PM</option>
                                                    </Form.Select>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col sm={6}>
                                        <h3>To:</h3>
                                        <Row>
                                            <Col xs={6} sm={6} md={3}>
                                                <FormGroup className='f-group'>
                                                    <DatePicker selected={startDate2} onChange={(date) => setStartDate2(date)} className='form-control form-control-sm' />
                                                </FormGroup>
                                            </Col>
                                            <Col xs={6} sm={6} md={3}>
                                                <InputGroup size='sm' className='f-group'>
                                                    <Form.Control type="text" placeholder="10"/>
                                                    <InputGroup.Text id="basic-addon1">HH</InputGroup.Text>
                                                </InputGroup>
                                            </Col>
                                            <Col xs={6} sm={6} md={3}>
                                                <InputGroup size='sm' className='f-group'>
                                                    <Form.Control type="text" placeholder="10"/>
                                                    <InputGroup.Text id="basic-addon1">MM</InputGroup.Text>
                                                </InputGroup>
                                            </Col>
                                            <Col xs={6} sm={6} md={3}>
                                                <FormGroup className='f-group'>
                                                    <Form.Select aria-label="Default select example">
                                                        <option value="1">AM</option>
                                                        <option value="2">PM</option>
                                                    </Form.Select>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Button type='submit' className='filter-btn add-btn btn btn-primary btn-sm m-0'><i className="fa-regular fa-floppy-disk"></i> Save</Button>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}> 
                            <div className='sys-config-block'>
                                <h2 className='block-title'>SMS Blacklist - Assign invalid characters with substitutes. (VALUE1 is used for blacklist agent codes, VALUE2 is used for bad words and VALUE3 is used for special characters)</h2>
                                <div className="clearfix"></div>
                                <Row>
                                    <Col xs={12} sm={6} md={4} lg={4} xl={4} xxl={4}>
                                        <h3>Bad Words</h3>
                                        <FormGroup className='f-group'>
                                            <Form.Control type="text" placeholder=""/>
                                        </FormGroup>
                                        <small><Link to='/Superadmin/Sysconfig'>Character List</Link></small>
                                    </Col>
                                    <Col xs={12} sm={6} md={4} lg={4} xl={4} xxl={4}>
                                        <h3>Invalid Characters</h3>
                                        <FormGroup className='f-group'>
                                            <Form.Control type="text" placeholder="<=*;&=N;'= ;•=*;–= ;‘= ;= ;"/>
                                        </FormGroup>
                                    </Col>
                                    <Col xs={12} sm={6} md={4} lg={4} xl={4} xxl={4}>
                                        <h3>Black listed Agents</h3>
                                        <FormGroup className='f-group'>
                                            <Form.Control type="text" placeholder=""/>
                                        </FormGroup>
                                        <small><Link to='/Superadmin/Sysconfig'>Agent List</Link></small>
                                    </Col>
                                </Row>
                                <Button type='submit' className='filter-btn add-btn btn btn-primary btn-sm m-0'><i className="fa-regular fa-floppy-disk"></i> Save</Button>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}> 
                            <div className='sys-config-block'>
                                <h2 className='block-title'>Unsupported Characters - Assign unsupported characters with substitutes.(VALUE1 used for Image Names, VALUE2 used for Strings)</h2>
                                <div className="clearfix"></div>
                                <Row>
                                    <Col xs={12} sm={6}>
                                        <h3>For Image Name</h3>
                                        <FormGroup className='f-group'>
                                            <Form.Control type="text" placeholder="—=a;–=s;'=w;_=c;¯=m;-=o;"/>
                                        </FormGroup>
                                        <small><Link to='/Superadmin/Sysconfig'>Character List</Link></small>
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <h3>For Input Stings</h3>
                                        <FormGroup className='f-group'>
                                            <Form.Control type="text" placeholder="<=*;•= ;= ;'= ;/= ;\= ;?= ;&= ;:= ;-= ;‘= ;·= ;"/>
                                        </FormGroup>
                                        <small><Link to='/Superadmin/Sysconfig'>Character List</Link></small>
                                    </Col>
                                </Row>
                                <Button type='submit' className='filter-btn add-btn btn btn-primary btn-sm m-0'><i className="fa-regular fa-floppy-disk"></i> Save</Button>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}> 
                            <div className='sys-config-block'>
                                <h2 className='block-title'>Temp attachment upload path</h2>
                                <h3>This is the location where you save your common profile pdf file temporarily</h3>
                                <FormGroup className='f-group'>
                                    <Form.Control type="text" placeholder="D:\sdb\temp_attach\tattach.war"/>
                                </FormGroup>
                                <Button type='submit' className='filter-btn add-btn btn btn-primary btn-sm m-0'><i className="fa-regular fa-floppy-disk"></i> Save</Button>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={2}> 
                            <div className='sys-config-block'>
                                <h2 className='block-title'>FA Block Size</h2>
                                <h3>Pagination Block Size</h3>
                                <FormGroup className='f-group'>
                                    <Form.Control type="text" placeholder="800"/>
                                </FormGroup>
                                <Button type='submit' className='filter-btn add-btn btn btn-primary btn-sm m-0'><i className="fa-regular fa-floppy-disk"></i> Save</Button>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={6}> 
                            <div className='sys-config-block'>
                                <h2 className='block-title'>TopAd Names</h2>
                                <h3>Name and Number</h3>
                                <FormGroup className='f-group'>
                                    <Form.Control type="text" placeholder="Nirthika 076 910 8926;Silmiya 076 910 8691;Madushani 076 910 8766;Shamal 076 250 2859;Danushka 076 893 8443"/>
                                </FormGroup>
                                <Button type='submit' className='filter-btn add-btn btn btn-primary btn-sm m-0'><i className="fa-regular fa-floppy-disk"></i> Save</Button>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}> 
                            <div className='sys-config-block'>
                                <h2 className='block-title'>Vacancy Caching</h2>
                                <div className="clearfix"></div>
                                <Row>
                                    <Col xs={12} sm={3} md={2}>
                                        <h3>Cache Type</h3>
                                        <FormGroup className='f-group'>
                                            <Form.Select aria-label="Default select example">
                                                <option value="1">PLP</option>
                                                <option value="2">GRID</option>
                                                <option value="3">RECENT100</option>
                                                <option value="3">LIST</option>
                                            </Form.Select>
                                        </FormGroup>
                                    </Col>
                                    <Col xs={12} sm={3} md={2}>
                                        <h3>ON/OFF</h3>
                                        <FormGroup className='f-group'>
                                            <Form.Select aria-label="Default select example">
                                                <option value="1">ON</option>
                                                <option value="3">OFF</option>
                                            </Form.Select>
                                        </FormGroup>
                                    </Col>
                                    <Col xs={12} sm={3} md={2}>
                                        <h3>Threshold</h3>
                                        <FormGroup className='f-group'>
                                            <Form.Control type="text" placeholder="15"/>
                                        </FormGroup>
                                    </Col>
                                    <Col xs={12} sm={3} md={2}>
                                        <h3>Delay (in ms)</h3>
                                        <FormGroup className='f-group'>
                                            <Form.Control type="text" placeholder="0"/>
                                        </FormGroup>
                                    </Col>
                                    <Col xs={12} sm={3} md={2}>
                                        <h3>Max Count</h3>
                                        <FormGroup className='f-group'>
                                            <Form.Control type="text" placeholder="5"/>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Button type='submit' className='filter-btn add-btn btn btn-primary btn-sm m-0'><i className="fa-regular fa-floppy-disk"></i> Save</Button>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}> 
                            <div className='sys-config-block'>
                                <h2 className='block-title'>Default Ad View - Which advertisement-view (STANDALONE or LEGACY) is to load by default</h2>
                                <div className="clearfix"></div>
                                <Row>
                                    <Col xs={12} sm={3} md={2}>
                                        <h3>Selected Ad View</h3>
                                        <FormGroup className='f-group'>
                                            <Form.Select aria-label="Default select example" disabled>
                                                <option value="1">STANDALONE</option>
                                            </Form.Select>
                                        </FormGroup>
                                    </Col>
                                    <Col xs={12} sm={3} md={2}>
                                        <h3>Selected Ad View Priority</h3>
                                        <FormGroup className='f-group'>
                                            <Form.Select aria-label="Default select example" disabled>
                                                <option value="1">SYSTEM</option>
                                            </Form.Select>
                                        </FormGroup>
                                    </Col>
                                    <Col xs={12} sm={3} md={2}>
                                        <h3>Select View</h3>
                                        <FormGroup className='f-group'>
                                            <Form.Select aria-label="Default select example">
                                                <option value="1">Select View</option>
                                                <option value="1">APV</option>
                                                <option value="1">STANDALONE</option>
                                            </Form.Select>
                                        </FormGroup>
                                    </Col>
                                    <Col xs={12} sm={3} md={2}>
                                        <h3>Select Config</h3>
                                        <FormGroup className='f-group'>
                                            <Form.Select aria-label="Default select example">
                                                <option value="1">Select Config</option>
                                                <option value="1">SYSTEM</option>
                                                <option value="1">USER</option>
                                            </Form.Select>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Button type='submit' className='filter-btn add-btn btn btn-primary btn-sm m-0'><i className="fa-regular fa-floppy-disk"></i> Save</Button>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}> 
                            <div className='sys-config-block'>
                                <h2 className='block-title'>Default Vacancy (VBFA) View</h2>
                                <h3>VALUE1: Specifies the vacancy view to show by default (LIST = list view; GRID = grid view). VALUE2: Specifies whether user-setting or system-setting gets priority (SYSTEM = system-setting; USER = user-setting)</h3>
                                <Row>
                                    <Col xs={12} sm={3} md={2}>
                                        <h3>System Preference</h3>
                                        <FormGroup className='f-group'>
                                            <Form.Select aria-label="Default select example">
                                                <option value="1">LIST</option>
                                                <option value="1">GRID</option>
                                            </Form.Select>
                                        </FormGroup>
                                    </Col>
                                    <Col xs={12} sm={3} md={2}>
                                        <h3>Priority</h3>
                                        <FormGroup className='f-group'>
                                            <Form.Select aria-label="Default select example">
                                                <option value="1">System preference</option>
                                                <option value="1">User preference</option>
                                            </Form.Select>
                                        </FormGroup>
                                    </Col>
                                </Row>
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