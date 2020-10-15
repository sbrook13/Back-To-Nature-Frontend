import React from 'react';

export default function ParksDetails ({park, showAll}) {
  
  const handleReturnClick = () => {
    showAll(park)
  }

  console.log(park)
  const showActivities = () => {
    return park.activities.map(activity => {
      return <p className="activity-item">{activity.name}</p>
    })
  }

  const showEntranceFees = () => {
    return park.entranceFees.map(fee => {
      if (fee.cost === "0.00"){
        return <p>{fee.title} - FREE!</p>
      }
      return <p>{fee.title} - ${fee.cost}</p>
    })
  }

  return (
    <div className="detail-page">
      <button onClick={handleReturnClick} className="button">Back to All Parks</button>
      <div className="park-details">
        <section className="detail-header">
          <h2>{park.fullName}</h2>
          <h2>{park.states}</h2>
          {park.images[0] ? <img className="detail-image" src={park.images[0].url} alt={park.images[0].altText} /> : null}
        </section>
        <a href={park.url}><button className="park-website button" target='_blank'>Visit {park.name} Website</button></a>
        <a href={'https://www.google.com/maps/@'+park.latitude+','+park.longitude+',8z'} target='_blank'><button>Locate on Google Maps</button></a>
        <div className="description">
          <h4>Description</h4>
          <p>{park.description}</p>
        </div>
        <div className="entrance-fees">
          <h4>Entrance Fees</h4>
          {showEntranceFees()}
        </div>
        <div className="detail-columns">
          <div className="directions">
            <h4>Directions</h4>
            <p>{park.description}</p>
          </div>
          <div className="weather">
            <h4>Weather</h4>
            <p>{park.weatherInfo}</p>
          </div>
          <div className="activities">
            <h4>Things to Do</h4>
            {showActivities()}
          </div>
        </div>
        <button onClick={handleReturnClick} className="back-button">Back to All Parks</button>
      </div>
    </div>
  )
}