import React from 'react';
import ParkCard from './ParkCard'

export default function ParksContainer ({parks}) {

  const showParkCard = () => {
    return parks.map(park => {
      return <ParkCard park={park}/>
    })
  }

  return (
    <div className="parks-box">
      <h2>Get Back to Nature</h2>
      <div className="park-cards-container">
        {showParkCard()}
      </div>
      </div>
    )
}