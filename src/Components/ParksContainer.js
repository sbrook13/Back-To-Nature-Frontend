import React from 'react';
import ParkCard from './ParkCard'
import ParkDetails from './ParkDetails'

class ParksContainer extends React.Component {

  state = {
    parks: [], 
    selectedPark: null,
  }

  componentDidMount(){
    fetch(`https://developer.nps.gov/api/v1/parks?api_key=${process.env.REACT_APP_NPS_API_KEY}&stateCode=CO,UT,WY,CA,NM,AZ,NV,ID,MT&limit=400`)
      .then(response => response.json())
      .then(results => {
        const parksWithPhotos = results.data.filter(park => park.images !== null)
        this.setState({parks: parksWithPhotos})
      })
  }

  selectPark = (park) => {
    this.setState({selectedPark: park})
  }

  showAll = () => {
    this.setState({selectedPark: null})
  }

  displayParkDetails = () => {
    const selectedPark = this.state.selectedPark
    return <ParkDetails
      park={selectedPark}
      showAll={this.showAll}
    />
  }

  showParkCards = () => {
    return (
      <div className="park-cards-container">
        {this.populateCards()}
      </div>
    )
  }

  populateCards = () => {
    return this.state.parks.map(park => {
      return (
        <ParkCard 
          park={park} 
          selectPark={this.selectPark} 
          showAll={this.showAll}/>
      )
    })
  }

  render() {
    return (
      <div className="parks-box">
        <h2>Get Back to Nature</h2>
        <div>
          {this.state.selectedPark ? this.displayParkDetails() : this.showParkCards()}
        </div>
        </div>
    )
  }  
}
export default ParksContainer