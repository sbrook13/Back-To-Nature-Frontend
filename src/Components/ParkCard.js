import React from 'react';

export default function ParksCard ({park}) {

  return (
    <div className="park-card">
      <h3>{park.fullName}</h3>
      {park.images[0] ? <img src={park.images[0].url} alt={park.images[0].altText} /> : null}
    </div>
  )
}