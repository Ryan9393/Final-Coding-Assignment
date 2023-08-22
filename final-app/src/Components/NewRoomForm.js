import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const NewRoomForm = (props) => {
    const [name, setName] = useState('');
    const [area, setArea] = useState(undefined);

    const handleAreaInput = (e) => {
        const int = parseInt(e.target.value, 10);
        setArea(int >= 0 ? int : '');
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (name && area) {
            props.addNewRoom({name, area, _id: Math.random().toString().slice(2) });
            setName('');
            setArea('');
        } else {
            console.log('invalid input');
        }
    }

    return (
        <Container>
            <Row>
                <Col>
        <div>
            <h4>Add a new room</h4>
            <Form onSubmit={onSubmit} className="">
                <Form.Control className="mb-3"
                    type= 'text'
                    placeholder= 'name'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <Form.Control className="mb-3"
                    type= 'text'
                    placeholder = 'area'
                    onChange={handleAreaInput}
                    value={area}
                />
                <Button variant="primary" type='submit'> Add Room</Button>
            </Form>
        </div>
        </Col>

        </Row>
      </Container>
    )
};