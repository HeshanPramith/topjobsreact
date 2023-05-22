import React from 'react';
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Superadminheader from '../Common/Superadminheader';
// import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import Collapse from 'react-bootstrap/Collapse';
import Pagination from 'react-bootstrap/Pagination';
// import { Link } from 'react-router-dom';

function Lockedagents () {  

    useEffect(() => {
        document.body.classList.add('applicantsearch','red','defhider')
        return () => {
          document.body.classList.remove('applicantsearch','red','defhider')
        }
    }, [])

    //const [open, setOpen] = useState(false);

    let active = 2;
    let items = [];
    for (let number = 1; number <= 5; number++) {
    items.push(
        <Pagination.Item key={number} active={number === active}>
        {number}
        </Pagination.Item>,
    );
    }
    
    return (
        <React.Fragment>
            <Superadminheader/>
            <Container fluid className='h-100 mt-4'>
                <Row>
                    <Col xs={12} className='mb-3'>
                        <h1 className='suadmin-page-title'>Locked Agent Logins</h1>
                    </Col>
                </Row>
                <Form>
                    <Row className='h-100'>
                        <Col xs={12} className='prel mt-2'>
                            <Table striped hover responsive className='appsearch-tbl'>
                                <thead>
                                    <tr>
                                        <th className='text-center'>No locked users found !</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='text-center'>No locked users found !</td>
                                    </tr>
                                </tbody>
                            </Table>               
                        </Col>                        
                    </Row>
                </Form>
            </Container>
        </React.Fragment>
    );
}

export default Lockedagents;