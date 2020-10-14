import React from 'react';

export default function ParksCard ({park}) {
  console.log(park)

  return (
    <div>
      <h2>{park.fullName}</h2>
    </div>
  )
}