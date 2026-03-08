// src/PlayersList.js
import React from 'react';
import { players } from './players';
import Player from './Player';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PlayersList = () => {
  return (
    <div style={{ 
      padding: '2rem', 
      backgroundColor: '#f8f9fa', 
      minHeight: '100vh' 
    }}>
      <h1 style={{ 
        textAlign: 'center', 
        marginBottom: '2.5rem', 
        color: '#1a3c34',
        fontWeight: 'bold'
      }}>
        FIFA Player Cards
      </h1>

      <Row xs={1} sm={2} md={3} lg={4} className="g-4 justify-content-center">
        {players.map((player, index) => (
          <Col key={index}>
            {/* Two ways to pass props – both are valid */}
            {/* Option 1: spread operator (cleaner) */}
            <Player {...player} />

            {/* Option 2: explicit props (more verbose) */}
            {/* <Player 
              name={player.name}
              team={player.team}
              nationality={player.nationality}
              jerseyNumber={player.jerseyNumber}
              age={player.age}
              imageUrl={player.imageUrl}
            /> */}
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PlayersList;