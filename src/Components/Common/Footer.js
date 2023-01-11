import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer () {
    
    return (
        <React.Fragment>
            <footer>
                <Container fluid>
                    <Row>
                        <Col xs={12}>
                            <p>Copyright © 2006-2023 Genesiis Software (Pvt) Ltd, All Rights Reserved.</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </React.Fragment>
    );
}

export default Footer;