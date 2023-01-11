import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';

function Jobcategory () {
    
    return (
        <React.Fragment>
            <div id='home-category'>
                <Form>
                    <InputGroup className="mb-2">
                        <Form.Control
                            placeholder="Search by keywords"
                            aria-label="Search by keywords"
                            aria-describedby="basic-addon2"
                            size="sm"
                        />
                        <Button variant="primary" type="submit" size="sm" id="button-addon2">
                            Search
                        </Button>
                    </InputGroup>
                </Form>
                <ListGroup variant="flush">
                    {Array.from({ length: 20 }).map((_, idx) => (
                        <>
                        <ListGroup.Item as="li" className="">
                            <div className="me-auto">
                                <div><a href='/#'>IT-Sware/DB/QA/Web/ Graphics/GIS</a></div>
                            </div>
                            <Badge bg="primary" pill> 100 </Badge>
                        </ListGroup.Item><ListGroup.Item as="li" className="">
                            <div className="me-auto">
                                <div><a href='/#'>IT-HWare/Networks/Systems</a></div>
                            </div>
                            <Badge bg="primary" pill> 15 </Badge>
                        </ListGroup.Item><ListGroup.Item as="li" className="">
                            <div className="me-auto">
                                <div><a href='/#'>Accounting/Auditing/Finance</a></div>
                            </div>
                            <Badge bg="primary" pill> 80 </Badge>
                        </ListGroup.Item></>
                    ))}
                </ListGroup> 
            </div>          
        </React.Fragment>
    );
}

export default Jobcategory;