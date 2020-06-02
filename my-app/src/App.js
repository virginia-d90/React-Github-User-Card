import React from 'react';
import './App.css';
import axios from 'axios'


import UserCard from './components/UserCard'

class App extends React.Component {
  state = {
    userData: []
  };

  componentDidMount() {
    axios.get("https://api.github.com/users/virginia-d90")
      .then(res => {
        this.setState({
          userData: res.data
        })
      })
  }

 
  render(){
    return (
      <div className="App">
        <h1>Github User Card</h1>
        <UserCard userData={this.state.userData}/>
      </div>
    );
  }
}

export default App;
