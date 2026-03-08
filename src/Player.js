// src/Player.js
import React from 'react';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

const Player = ({
  name = "Unknown Player",
  team = "No Team",
  nationality = "Unknown",
  jerseyNumber = 0,
  age = 0,
  imageUrl = "https://via.placeholder.com/286x180?text=No+Image"
}) => {
  return (
    <Card 
      style={{ 
        width: '18rem', 
        margin: '1rem auto',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        borderRadius: '12px',
        overflow: 'hidden'
      }}
    >
      <Card.Img 
        variant="top" 
        src={imageUrl} 
        style={{ 
          height: '220px', 
          objectFit: 'cover' 
        }} 
        alt={`${name} - ${team}`}
      />
      <Card.Body style={{ background: 'linear-gradient(135deg, #f8f9fa, #e9ecef)' }}>
        <Card.Title style={{ fontWeight: 'bold', fontSize: '1.4rem' }}>
          {name}
        </Card.Title>
        <Card.Text style={{ color: '#555' }}>
          <strong>Team:</strong> {team}<br />
          <strong>Nationality:</strong> {nationality}<br />
          <strong>Jersey #:</strong> {jerseyNumber}<br />
          <strong>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

// PropTypes (optional but good practice)
Player.propTypes = {
  name: PropTypes.string,
  team: PropTypes.string,
  nationality: PropTypes.string,
  jerseyNumber: PropTypes.number,
  age: PropTypes.number,
  imageUrl: PropTypes.string,
};

// Default props (already handled in destructuring, but shown for clarity)
Player.defaultProps = {
  name: "Unknown Player",
  team: "No Team",
  nationality: "Unknown",
  jerseyNumber: 0,
  age: 0,
  imageUrl: "https://via.placeholder.com/286x180?text=No+Image"
};

export default Player;