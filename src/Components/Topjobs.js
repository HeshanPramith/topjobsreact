import React from 'react';
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Latestcat from './Latestcat/Latestcat';
import Joblist from './Joblist/Joblist';
import Searchjob from './Home/Searchjob';
import Leftbanner from './Banners/Leftbanner';
import Rightbanner from './Banners/Right banner';
import Header from './Common/Header';
import Footer from './Common/Footer';
import Adviewbanner from './Banners/Adviewbanner';

function Topjobs () {

    useEffect(() => {
        document.body.classList.add('welcome')
        return () => {
          document.body.classList.remove('welcome')
        }
    }, [])

    return (
        <React.Fragment>
            <Header/> 
            <div className='artview'></div>
            <Container fluid>
                <Row>
                    <Col xs={12} className='px-0'>
                        <Searchjob/>
                    </Col>
                </Row>
                <Row className='prelz mb-3 mt-4'>
                    <Col xs={12} className='text-center'>
                        <Latestcat/>
                    </Col>
                </Row>
                <Row className='prelz'>
                    <Col xs={12} sm={2} md={2} lg={2} xl={1} xxl={1} className='text-center'>
                        <Leftbanner/>
                    </Col>
                    <Col xs={12} sm={8} md={8} lg={8} xl={10} xxl={10}>
                        <Joblist/>
                        <Row>
                            <Col xs={12} sm={12} md={6} lg={96} xl={6} xxl={6} className='mb-2'>
                                <Adviewbanner/>
                            </Col>
                            <Col xs={12} sm={12} md={6} lg={96} xl={6} xxl={6} className='mb-2'>
                                <Adviewbanner/>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} sm={2} md={2} lg={2} xl={1} xxl={1} className='text-center'>
                        <Rightbanner/>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </React.Fragment>
    );
}

export default Topjobs;