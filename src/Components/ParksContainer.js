import React from 'react';
import ParkCard from './ParkCard'

export default function ParksContainer ({parks}) {

  const showParkCard = () => {
    return parks.map(park => {
      return <ParkCard park={park}/>
    })
  }

  return (
    showParkCard()
  )
}