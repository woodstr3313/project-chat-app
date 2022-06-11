import React from 'react'
import { ListGroup } from 'react-bootstrap';

function Sidebar() {
  const rooms =['First room', 'Second room', 'Third room'];
  return (
    <>
      <h2>Available rooms</h2>
      <ListGroup>
        {rooms.map((room, idx) => (
          <ListGroup.Item key={idx}>{room}</ListGroup.Item>
        ))}
      </ListGroup>
      <h2>Members</h2>
      
    </>   
  );
}

export default Sidebar;