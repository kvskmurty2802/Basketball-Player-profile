import React from 'react';
import BasketballPlayerCard from './BasketballPlayerCard';
import AdditionalContent from './AdditionalContent';
import './App.css';

const App = () => {
  const player = {
    name: "LeBron James",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-B2XKfk90BQBplsrZmx_wwtCCF71x74nBa10VatNvStQG4IRP87LPxI2DzVuuk5_LsnU',
    position: "Forward",
    stats: {
      pointsPerGame: 25.4,
      assistsPerGame: 7.1,
      reboundsPerGame: 10.5
    }
  };

  return (
    <div className="App">
      <div className="content-container">
        <BasketballPlayerCard 
          name={player.name}
          image={player.image}
          position={player.position}
          stats={player.stats}
        />
        <AdditionalContent />
      </div>
    </div>
  );
};

export default App;
