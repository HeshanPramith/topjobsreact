import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Topjobs from './Components/Topjobs';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@coreui/chartjs/dist/css/coreui-chartjs.css";
import Vacancybyfunctionalarea from './Components/Vacancybyfunctionalarea';
import Vacancybyfunctionalarealist from './Components/Vacancybyfunctionalarealist';
import Adview from './Components/Adview';
import Adviewtopad from './Components/Adviewtopad';
import Login from './Components/Employer/Login';
import Jssignup from './Components/Jobseeker/Jssignup';
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
import Dbconfig from './Components/Employer/Dbconfig';
import Interviewschedule from './Components/Employer/Interviewschedule';
import Tabcutomise from './Components/Employer/Tabcutomise';
import Reports from './Components/Employer/Reports';
import Profilecustomise from './Components/Employer/Profilecustomise';
import Agentemailalert from './Components/Employer/Agentemailalert';
import Advertisementtemplate from './Components/Employer/Advertisementtemplate';
import Jslogin from './Components/Jobseeker/Jslogin';
import Jswelcome from './Components/Jobseeker/Jswelcome';
import Applicantsingleform from './Components/Jobseeker/Applicantsingleform';
import Salogin from './Components/Superadmin/Salogin';
import Sawelcome from './Components/Superadmin/Sawelcome';
import Agentsearch from './Components/Superadmin/Agentsearch';
import Email from './Components/Superadmin/Email';
import Sysconfig from './Components/Superadmin/Sysconfig';
import Sauserlist from './Components/Superadmin/Sauserlist';
import Samasterlist from './Components/Superadmin/Samasterlist';
import Applicantloginmenu from './Components/Superadmin/Applicantloginmenu';
import Sareports from './Components/Superadmin/Sareports';
import Bulkemail from './Components/Superadmin/Bulkemail';
import Releasenotes from './Components/Superadmin/Releasenotes';
import Bannerad from './Components/Superadmin/Bannerad';
import Extagentsearch from './Components/Superadmin/Extagentsearch';
import Emailalerttype from './Components/Superadmin/Emailalerttype';
import Uploadcsrcv from './Components/Superadmin/Uploadcsrcv';
import Hrresourceadmin from './Components/Superadmin/Hrresourceadmin';
import Lockedagents from './Components/Superadmin/Lockedagents';
import Tjtstmonial from './Components/Superadmin/Tjtstmonial';

const App = () => {

  return (
    <div className="App">
      <div id='main-cont' className='main-cont'>
          
        <BrowserRouter>          
            <Routes>
              <Route exact path='/'  element={<Home/>}/>
              <Route exact path='/Topjobs'  element={<Topjobs/>}/>
              <Route exact path='/Jobseeker/Jssignup'  element={<Jssignup/>}/>
              <Route exact path='/vacancybyfunctionalarea'  element={<Vacancybyfunctionalarea/>}/>
              <Route exact path='/Vacancybyfunctionalarealist'  element={<Vacancybyfunctionalarealist/>}/>
              <Route exact path='/Adviewtopad'  element={<Adviewtopad/>}/>
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
              <Route exact path='/Employer/Dbconfig'  element={<Dbconfig/>}/>
              <Route exact path='/Employer/Interviewschedule'  element={<Interviewschedule/>}/>
              <Route exact path='/Jobseeker/Jslogin'  element={<Jslogin/>}/>
              <Route exact path='/Jobseeker/Jswelcome'  element={<Jswelcome/>}/>
              <Route exact path='/Jobseeker/Applicantsingleform'  element={<Applicantsingleform/>}/>
              <Route exact path='/Employer/Tabcutomise'  element={<Tabcutomise/>}/>
              <Route exact path='/Employer/Reports'  element={<Reports/>}/>
              <Route exact path='/Employer/Profilecustomise'  element={<Profilecustomise/>}/>
              <Route exact path='/Employer/Agentemailalert'  element={<Agentemailalert/>}/>
              <Route exact path='/Employer/Advertisementtemplate'  element={<Advertisementtemplate/>}/>
              <Route exact path='/Superadmin/Salogin'  element={<Salogin/>}/>
              <Route exact path='/Superadmin/Sawelcome'  element={<Sawelcome/>}/>
              <Route exact path='/Superadmin/Agentsearch'  element={<Agentsearch/>}/>
              <Route exact path='/Superadmin/Email'  element={<Email/>}/>
              <Route exact path='/Superadmin/Sysconfig'  element={<Sysconfig/>}/>
              <Route exact path='/Superadmin/Sauserlist'  element={<Sauserlist/>}/>
              <Route exact path='/Superadmin/Samasterlist'  element={<Samasterlist/>}/>
              <Route exact path='/Superadmin/Applicantloginmenu'  element={<Applicantloginmenu/>}/>
              <Route exact path='/Superadmin/Sareports'  element={<Sareports/>}/>
              <Route exact path='/Superadmin/Bulkemail'  element={<Bulkemail/>}/>
              <Route exact path='/Superadmin/Releasenotes'  element={<Releasenotes/>}/>
              <Route exact path='/Superadmin/Bannerad'  element={<Bannerad/>}/>
              <Route exact path='/Superadmin/Extagentsearch'  element={<Extagentsearch/>}/>
              <Route exact path='/Superadmin/Emailalerttype'  element={<Emailalerttype/>}/>
              <Route exact path='/Superadmin/Uploadcsrcv'  element={<Uploadcsrcv/>}/>
              <Route exact path='/Superadmin/Hrresourceadmin'  element={<Hrresourceadmin/>}/>
              <Route exact path='/Superadmin/Lockedagents'  element={<Lockedagents/>}/>
              <Route exact path='/Superadmin/Tjtstmonial'  element={<Tjtstmonial/>}/>
            </Routes>          
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
