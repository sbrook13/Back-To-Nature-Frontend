import React from 'react';

export default function ParksCard ({park, selectPark}) {
  
  const handleCardClick = () => {
    selectPark(park)
  }

  return (
    <div className="park-card" onClick={handleCardClick}>
      <h3>{park.name}</h3>
      {park.images[0] ? <img className="card-image" src={park.images[0].url} alt={park.images[0].altText} /> : null}
    </div>
  )
}