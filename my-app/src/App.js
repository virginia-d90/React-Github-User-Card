import React from 'react';
import './App.css';
import axios from 'axios'

class App extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
    axios.get("https://api.github.com/users/virginia-d90")
      .then(res => console.log(res))
  }
  render(){
    return (
      <div className="App">
        <h1>Github User Card</h1>
      </div>
    );
  }
}

export default App;
