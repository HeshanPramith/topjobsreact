import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Latestcat from './Latestcat/Latestcat';
import Jobcategory from './Jobcategory/Jobcategory';
import Joblist from './Joblist/Joblist';

function Home () {
    
    return (
        <React.Fragment>
            <Container fluid>
                <Row>
                    <Col xs={12}>
                        <Latestcat/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={5} md={4} lg={3} xl={3} xxl={3} className='ps-sm-0'>
                        <Jobcategory/>
                    </Col>
                    <Col xs={12} sm={7} md={8} lg={9} xl={9} xxl={9}>
                        <Joblist/>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}

export default Home;