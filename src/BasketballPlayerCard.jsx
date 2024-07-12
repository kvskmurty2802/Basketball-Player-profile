import React from 'react';
import './BasketballPlayerCard.css';

const BasketballPlayerCard = ({ name, image, position, stats }) => {
  return (
    <div className="player-card">
      <div className="player-image-container">
        <img src={image} alt={`${name}`} className="player-image" />
      </div>
      <div className="player-details">
        <h2 className="player-name">{name}</h2>
        <p className="player-position">{position}</p>
        <div className="player-stats">
          <div className="stat">
            <span className="stat-value">{stats.pointsPerGame}</span>
            <span className="stat-label">PPG</span>
          </div>
          <div className="stat">
            <span className="stat-value">{stats.assistsPerGame}</span>
            <span className="stat-label">APG</span>
          </div>
          <div className="stat">
            <span className="stat-value">{stats.reboundsPerGame}</span>
            <span className="stat-label">RPG</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketballPlayerCard;
