import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import Latestcat from './Latestcat/Latestcat';
//import Joblist from './Joblist/Joblist';
//import Searchjob from './Home/Searchjob';
//import Leftbanner from './Banners/Leftbanner';
//import Rightbanner from './Banners/Right banner';
import Jsheader from '../Common/Jsheader';
import Footer from '../Common/Footer';

function Home () {

    return (
        <React.Fragment>
            <Jsheader/> 
            <Container fluid>
                <Row>
                    <Col xs={12}>
                        Jobseeker
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </React.Fragment>
    );
}

export default Home;