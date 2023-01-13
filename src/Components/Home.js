import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Latestcat from './Latestcat/Latestcat';
import Joblist from './Joblist/Joblist';
import Searchjob from './Home/Searchjob';
import Leftbanner from './Banners/Leftbanner';
import Rightbanner from './Banners/Right banner';

function Home () {

    return (
        <React.Fragment>
            <Container fluid>
                <Row>
                    <Col xs={12} className='px-0'>
                        <Searchjob/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} className='text-center mt-minus'>
                        <Latestcat/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={2} md={2} lg={2} xl={1} xxl={1} className='text-center'>
                        <Leftbanner/>
                    </Col>
                    <Col xs={12} sm={8} md={8} lg={8} xl={10} xxl={10}>
                        <Joblist/>
                    </Col>
                    <Col xs={12} sm={2} md={2} lg={2} xl={1} xxl={1} className='text-center'>
                        <Rightbanner/>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}

export default Home;