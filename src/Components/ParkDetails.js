import React from 'react';

export default function ParksDetails ({park, showAll}) {
  
  const handleReturnClick = () => {
    showAll(park)
  }

  console.log(park)
  const showActivities = () => {
    return park.activities.map(activity => {
      return <li>{activity.name}</li>
    })
  }

  const showEntranceFees = () => {
    return park.entranceFees.map(fee => {
      if (fee.cost === "0.00"){
        return <li>{fee.title} - FREE!</li>
      }
      return <li>{fee.title} - ${fee.cost}</li>
    })
  }


  // const showImages = () = {
  //   {park}.images.map(image => {
  //     console.log(image)
  //   })
  // }

  return (
    <div className="detail-page">
      <button onClick={handleReturnClick} className="button">Back to All Parks</button>
      <div className="park-details">
        <section className="detail-header">
          <h3>{park.name}</h3>
          {park.images[1] ? <img className="detail-image" src={park.images[1].url} alt={park.images[1].altText} /> : null}
        </section>
        <a href={park.url}><button className="park-website button">Visit {park.name}'s' Website</button></a>
        <div className="description">
          <h4>Description</h4>
          <p>{park.description}</p>
        </div>
        <div className="directions">
          <h4>Directions</h4>
          <p>{park.description}</p>
        </div>
        <div className="entrance-fees">
          <h4>Entrance Fees</h4>
          <ul>{showEntranceFees()}</ul>
        </div>
        
        <div className="activities">
          <h4>Things to do:</h4>
          <ul>{showActivities()}</ul>
        </div>
        
      </div>
    </div>
  )
}