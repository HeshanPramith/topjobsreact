import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Common/Header';
import Footer from './Components/Common/Footer';
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


function App() {

  return (
    <div className="App">
      <Header/>      
      <div id='main-cont'>
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
                        <Dropdown.Item eventKey="1">Jobseeker Login</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Jobseeker Sign Up</Dropdown.Item>
                    </DropdownType>
                ))}              
              </Col>
            </Row>
          </Container>          
        </div>
        <Router>
          <Routes>
            <Route path='/'  element={<Home/>}/>
            <Route path='/vacancybyfunctionalarea'  element={<Vacancybyfunctionalarea/>}/>
            <Route path='/Vacancybyfunctionalarealist'  element={<Vacancybyfunctionalarealist/>}/>
            <Route path='/Adview'  element={<Adview/>}/>
          </Routes>
        </Router>
      </div>      
      <Footer/>
    </div>
  );
}

export default App;
