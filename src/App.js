import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Vacancybyfunctionalarea from './Components/Vacancybyfunctionalarea';
import Vacancybyfunctionalarealist from './Components/Vacancybyfunctionalarealist';
import Adview from './Components/Adview';
import Login from './Components/Employer/Login';
import Welcome from './Components/Employer/Welcome';
import Applicantsearch from './Components/Employer/Applicantsearch';
import Masterlist from './Components/Employer/Masterlist';
import Emailconfig from './Components/Employer/Emailconfig';
import Jobordersearch from './Components/Employer/Jobordersearch';
import Agent from './Components/Employer/Agent';
import Employerlist from './Components/Employer/Employerlist';
import Locationmap from './Components/Employer/Locationmap';
import Employer from './Components/Employer/Employer';
import Paymentlist from './Components/Employer/Paymentlist';
import Contentmanage from './Components/Employer/Contentmanage';
import Userlist from './Components/Employer/Userlist';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

function App() {

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [fullscreen] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);

  return (
    <div className="App">   
      <ToastContainer position="top-center" containerPosition="fixed">
        <Toast show={showA} onClose={toggleShowA} delay={5000} autohide bg='primary'>
          <Toast.Header>
            <strong className="me-auto">topjobs alert!</strong>
          </Toast.Header>
          <Toast.Body className='text-white'>topjobs will be temporarily out of service between 9 PM to 9.15 PM for maintenance.</Toast.Body>
        </Toast>        
      </ToastContainer>
      <div id='main-cont' className='main-cont'>
        <div className='loginblock'>
          <Container fluid>
            <Row>
              <Col xs={12} sm={12}>              
                {[DropdownButton].map((DropdownType, idx) => (
                    <DropdownType
                        as={ButtonGroup}
                        key={idx}
                        id={`dropdown-button-drop-${idx}`}
                        size="sm"
                        variant="secondary"
                        title="Jobseeker"
                        className='jbseeker-block'
                    >
                        <Dropdown.Item eventKey="1" onClick={handleShow}>Jobseeker Login</Dropdown.Item>
                        <Dropdown.Item eventKey="2" onClick={handleShow2}>Jobseeker Sign Up</Dropdown.Item>
                    </DropdownType>
                ))}              
              </Col>
            </Row>
          </Container>          
        </div>
        <BrowserRouter>          
            <Routes>
              <Route exact path='/'  element={<Home/>}/>
              <Route exact path='/vacancybyfunctionalarea'  element={<Vacancybyfunctionalarea/>}/>
              <Route exact path='/Vacancybyfunctionalarealist'  element={<Vacancybyfunctionalarealist/>}/>
              <Route exact path='/Adview'  element={<Adview/>}/>
              <Route exact path='/Employer/Login'  element={<Login/>}/>
              <Route exact path='/Employer/Welcome'  element={<Welcome/>}/>
              <Route exact path='/Employer/Applicantsearch'  element={<Applicantsearch/>}/>
              <Route exact path='/Employer/Jobordersearch'  element={<Jobordersearch/>}/>
              <Route exact path='/Employer/Masterlist'  element={<Masterlist/>}/>
              <Route exact path='/Employer/Emailconfig'  element={<Emailconfig/>}/>
              <Route exact path='/Employer/Agent'  element={<Agent/>}/>
              <Route exact path='/Employer/Employerlist'  element={<Employerlist/>}/>
              <Route exact path='/Employer/Locationmap'  element={<Locationmap/>}/>
              <Route exact path='/Employer/Employer'  element={<Employer/>}/>
              <Route exact path='/Employer/Paymentlist'  element={<Paymentlist/>}/>
              <Route exact path='/Employer/Contentmanage'  element={<Contentmanage/>}/>
              <Route exact path='/Employer/Userlist'  element={<Userlist/>}/>
            </Routes>          
        </BrowserRouter>
      </div>      
      
      <Modal show={show} fullscreen={fullscreen} onHide={handleClose} className='js-login'>
        <Modal.Header closeButton>
          <Modal.Title className='text-center'>&nbsp;</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container fluid className='h-100'>
            <Row className='h-100'>
              <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} className='prel'>
                <div className='d-flex align-items-center justify-content-center h-100'>
                  <div className='login-box login-box d-flex flex-column align-items-center justify-content-center'>
                      <div className='jslog-wrp'>
                        <img src='images/tj.jpg' className='img-fluid jslog-img' alt='logo'></img>
                      </div>
                      <h3>Welcome Back</h3>
                      <p>Don't have a topjobs account?</p>
                      <a href='/#'>Sign Up Now! <i className="fa-solid fa-arrow-right-long"></i></a>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} className='prel'>
                <div className='js-login-form-inner d-flex align-items-center justify-content-center h-100'>
                  <Form className='js-login-form'>
                    <h2>Login</h2>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>User Name</Form.Label>
                      <Form.Control type="text" size='sm' />
                    </Form.Group>
                    <Form.Group className="" controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" size='sm' />
                      <Button variant="primary" size="sm" className='mt-3'>Login <i className="fa-solid fa-arrow-right-long"></i></Button>
                    </Form.Group>                    
                    <div className='radio-grp'>
                      <input type="radio" value="Male" name="gender" /> Remember my user name
                    </div>
                    <div className='radio-grp'>
                      <input type="radio" value="Female" name="gender" /> Remember my user name & password
                    </div>
                    <div className='radio-grp'>
                      <input type="radio" value="Other" name="gender" /> Do not remember me
                    </div>
                    <a href='/#' className='fgt-pass'>Forgot password?</a>
                  </Form>
                </div>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>

      <Modal show={show2} fullscreen={fullscreen} onHide={handleClose2} className='js-signup'>
        <Modal.Header closeButton>
          <Modal.Title className='text-center'>&nbsp;</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container fluid className='h-100'>
            <Row className='h-100'>
              <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} className='prel'>
                <div className='d-flex align-items-center justify-content-center h-100'>
                  <div className='signup-box login-box d-flex flex-column align-items-center justify-content-center'>
                      <div className='jslog-wrp'>
                        <img src='images/tj.jpg' className='img-fluid jslog-img' alt='logo'></img>
                      </div>
                      <h3>Welcome Back</h3>
                      <p>Please fill in the information below to create an account with topjobs. Once your account has been created, you can login at any time and use your own Workspace in the system. From this workspace, you can apply for jobs, build up your employment profile, upload your CV, search for vacancies, see your list of applied jobs, and most importantly be given feedback on the progress of your vacancy applications.</p>
                      <p>Please try to use strong credentials (User ID and Password). Strong credentials should have a minimum of 6 characters, with a mix of upper/lower case letters and numbers. We encourage you to use your email address as your user name. If you don't have an email address, get one easily from Yahoo</p>
                      <a href='/#'>Login <i className="fa-solid fa-arrow-right-long"></i></a>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} className='prel'>
                <div className='js-signup-form-inner d-flex align-items-center justify-content-center h-100'>
                  <Form className='js-signup-form'>
                    <h2>Sign Up!</h2>
                    <Row>
                      <Form.Group className="mb-3 col-6 col-sm-4" controlId="exampleForm.ControlInput1">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control type="text" size='sm' />
                      </Form.Group>
                      <Form.Group className="mb-3 col-6 col-sm-4" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" size='sm' />                        
                      </Form.Group>
                      <Form.Group className="mb-3 col-6 col-sm-4" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" size='sm' />                        
                      </Form.Group>
                      <Form.Group className="mb-3 col-6" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" size='sm' />                        
                      </Form.Group>
                      <Form.Group className="mb-3 col-6" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Email Password</Form.Label>
                        <Form.Control type="email" size='sm' />                        
                      </Form.Group>
                    </Row>
                    <Row>
                      <Col className='col-12'>
                        <p>Your email address will be used by the employer to contact you. You will also receive job alerts and newsletters on this email address.</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col className='col-12'>
                        <p>If you forget your password</p>
                      </Col>
                    </Row>
                    <Row>
                      <Form.Group className="mb-3 col-6" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Secret Question</Form.Label>
                        <Form.Select size='sm'>
                          <option>Select a Question</option>
                          <option>What is your all-time favorite sports team?</option>
                          <option>What is your favorite pastime?</option>
                          <option>What is your name?</option>
                          <option>What is your system generated username?</option>
                          <option>What make was your first car or bike?</option>
                          <option>What was the name of your first school?</option>
                          <option>What was your high school mascot?</option>
                          <option>Where did you first meet your spouse?</option>
                        </Form.Select>                     
                      </Form.Group>
                      <Form.Group className="mb-3 col-6" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Secret Answer</Form.Label>
                        <Form.Control type="text" size='sm' />                        
                      </Form.Group>
                    </Row>
                    <Row>
                      <Col className='col-12'>
                        <Button variant="primary" size="sm" className='mt-3'>Sign Up <i className="fa-solid fa-arrow-right-long"></i></Button>
                      </Col>
                    </Row>
                    <Row>
                      <Col className='col-12 text-center'>
                        <span className='sepe'><b>OR</b></span>
                      </Col>
                    </Row>
                    <Row>
                      <Col className='col-12 mt-4 text-center'>
                        <Button variant="primary" size="sm" className='cm-btn google'><i className="fa-brands fa-google"></i> Connect with Google</Button>
                        <Button variant="primary" size="sm" className='cm-btn facebook'><i className="fa-brands fa-facebook-f"></i> Connect with Faceook</Button>
                        <Button variant="primary" size="sm" className='cm-btn microsoft'><i className="fa-brands fa-microsoft"></i> Connect with Microsoft</Button>
                        <Button variant="primary" size="sm" className='cm-btn apple'><i className="fa-brands fa-apple"></i> Connect with Apple</Button>
                      </Col>
                    </Row>
                  </Form>
                </div>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default App;
