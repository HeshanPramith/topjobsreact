import React from 'react';
import { useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function Home () {

    useEffect(() => {
        document.body.classList.add('mainhome')
        return () => {
          document.body.classList.remove('mainhome')
        }
    }, [])

    return (
        <React.Fragment>
            <div className='preloader d-flex flex-column align-items-center justify-content-center text-center'>
                <div className='hm-vid-wrap'>
                    <video muted autoPlay loop width="100%" className='hm-vid'>
                        <source autoPlay loop src="../home_video.webm" type="video/webm" />
                        <source autoPlay loop src="../home_video.mp4" type="video/mp4" />
                        Sorry, your browser doesn't support videos.
                    </video>
                </div>
                
                <div className='main-search-wrap main-search-wrap d-flex flex-column align-items-center justify-content-center'>
                    <p className='welcmtxt'>Welcome to</p>
                    <h1 className='logotxt'>topjobs</h1>
                    <div className='main-search'>
                        <h1>Recruitment Made Easy</h1>
                        <Form className='search-form'>
                            <InputGroup className="mb-2">
                                <Form.Control
                                    placeholder="Job title, keywords, or company"
                                    aria-label="Job title, keywords, or company"
                                    aria-describedby="basic-addon2"
                                    size="lg"
                                />
                                <Button variant="primary" type="submit" size="lg" id="button-addon2">
                                    <Link to='/vacancybyfunctionalarealist'>Quick Search</Link>
                                </Button>
                            </InputGroup>
                        </Form><br></br>
                        <span>OR</span><br></br>
                        <Link className='gotobtn' to='/Topjobs'>Go To Job Page</Link>
                    </div>
                </div>
                <div className='infogr-para'>
                    <p><b>topjobs Sri Lanka Job Network</b>most popular online job site in Sri Lanka for jobs, careers, recruitment and employment with recruitment automation for employers.</p>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Home;