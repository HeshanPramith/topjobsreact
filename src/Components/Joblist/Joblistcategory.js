import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row';

function Joblist () {

    return (
        <React.Fragment>
            <Row xs={1} md={1} lg={2} xl={2} xxl={4} id="jbvac-wrapper" className=""> 
                {Array.from({ length: 100 }).map((_, idx) => (
                    <CardGroup>
                        <Card className='green-jb'>
                            <Card.Body>
                                <Card.Title><a href='/Vacancybyfunctionalarea'>Software Architect / Associate Software Architect - Full Stack  </a></Card.Title>
                                <Card.Text className='cp-name'>Calcey Technologies (Pvt) Ltd</Card.Text>
                                <Card.Text className='jb-desc'>A Degree in Computer Science, Information Systems, Software Engineering or 3/4 Yrs exp</Card.Text>
                                <Card.Text className='od'>Opening Date - Tue Jan 17 2023</Card.Text>
                                <Card.Text className='cd'>Closing Date - Tue Jan 31 2023</Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>                   
                ))} 
            </Row>          
        </React.Fragment>
    );
}

export default Joblist;