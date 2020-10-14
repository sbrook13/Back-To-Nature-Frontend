import React from 'react';
import './App.css';
import ParksContainer from './Components/ParksContainer'

class App extends React.Component {
  
  state = {
    parks: []
  }

  componentDidMount(){
    fetch(`https://developer.nps.gov/api/v1/parks?api_key=${process.env.REACT_APP_NPS_API_KEY}`)
      .then(response => response.json())
      .then(results => this.setState({parks: results.data}))
      .then(console.log(this.state.parks))
  }

  render() {
    return (
      <div className="App">
        <h1>Back to Nature</h1>
        <ParksContainer parks={this.state.parks} />
      </div>
    )
  }
}

export default App;
