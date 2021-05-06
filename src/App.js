import React, { Component } from 'react';
import User from "./User"
import axios from 'axios';
import './App.css';


class App extends Component {

  state = {
    identity: []
  }

  
  getUser = () => {
    axios.get('https://randomuser.me/api/?results=9')
    .then(response => {
      this.setState({
        identity: response.data.results
      })
    })
    }
    
    render() {
    const userJSX = this.state.identity.map(users => {
      return <p><User data={users} /></p>
    })

    return (
      <div className="App">
        {userJSX}
        <button onClick={this.getUser}>Charger des utilisateurs</button>
      </div>
    );
  }
}

export default App;