import React from 'react';
import { NewRoomForm } from './NewRoomForm.js';
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



export const House = (props) => {
    const { house, updateHouse } = props;

    const deleteRoom = (roomId) => {
        const updatedHouse = {
            ...house,
            rooms: house.rooms.filter((x) => x._id !== roomId)
        };
        updateHouse(updatedHouse);
    }

    const addNewRoom = (room) => updateHouse({ ...house, rooms: [...house.rooms, room] });

    const rooms = () => (
        <ul>
            {house.rooms.map((room, index) => (
                <li className="m-2" key = {index}>
                    <label> {`${room.name} Area: ${room.area}`} </label>
                    <Button variant="danger" className="m-2" onClick={(e) => deleteRoom(room._id)}>Delete</Button>
                </li>
            ))}
        </ul>
    );

    return (
        <div className='app'>
        <Container>
        <Row>
            <Col className="m-2">
            <h1 className="m-2">{house.name}</h1>
            {
                rooms({ rooms, houseId: house._id, deleteRoom})
            }
            <NewRoomForm addNewRoom={addNewRoom}/>

        </Col>
        </Row>
      </Container>
      </div>
    );
    
};