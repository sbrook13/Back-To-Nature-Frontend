import React from 'react';
import './App.css';
import ParksContainer from './Components/ParksContainer'
import TreeContainer from './Components/TreeContainer';

class App extends React.Component {
  
  state = {
    parks: []
  }

  componentDidMount(){
    fetch(`https://developer.nps.gov/api/v1/parks?api_key=${process.env.REACT_APP_NPS_API_KEY}`)
      .then(response => response.json())
      .then(results => this.setState({parks: results.data}))
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">Back to Nature</h1>
        <main className="main">
          <ParksContainer parks={this.state.parks} />
          <TreeContainer/>
        </main>
      </div>
    )
  }
}

export default App;
