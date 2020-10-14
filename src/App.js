import React from 'react';
import './App.css';
import ParksContainer from './Components/ParksContainer'
import TreeContainer from './Components/TreeContainer';


class App extends React.Component {
  

  render() {
    return (
      <div className="App">
        <h1 className="Header">Back to Nature</h1>
        <main className="main">
          <ParksContainer />
          <TreeContainer/>
        </main>
      </div>
    )
  }
}

export default App;
