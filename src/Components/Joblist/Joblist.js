import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Joblist () {
    
    return (
        <React.Fragment>
            <Row>
                <Col xs={12}>
                    <Card.Title className='card-hm-title'>Hot Jobs: 500 new hot jobs and 1000+ more jobs | (Recent 100 Jobs)</Card.Title>
                </Col>
            </Row>  
            <Row xs={1} md={1} lg={2} xl={4} xxl={5} id="jb-wrapper" className="">             
                {Array.from({ length: 100 }).map((_, idx) => (
                    <CardGroup>
                        <Card>
                            <Card.Body>
                                <Card.Title><a href='/Adview'>Senior Executive - Talent Acquisition</a></Card.Title>
                                <Card.Text>Native Way (Pvt) Ltd</Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>                   
                ))}
            </Row>          
        </React.Fragment>
    );
}

export default Joblist;