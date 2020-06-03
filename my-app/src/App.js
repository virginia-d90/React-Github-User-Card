import React from 'react';
import './App.css';
import axios from 'axios'


import UserCard from './components/UserCard'
import FollowCard from './components/FollowCard'

const followersArray = [
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'];

class App extends React.Component {
  state = {
    userData: [],
    followData: []
  };



  componentDidMount() {
    axios.get("https://api.github.com/users/virginia-d90")
      .then(res => {
        this.setState({
          userData: res.data
        })
      })
    followersArray.map(item => {
      axios.get(`https://api.github.com/users/${item}`)
        .then(res => {
          //console.log(res.data)
          this.setState({
            followData: [...this.state.followData,res.data]
          })
        })
    })
  }

  
 
  render(){
    return (
      <div className="App">
        <h1>Github User Card</h1>
        <UserCard userData={this.state.userData}/>
        <h2>Followers</h2>
        {
          this.state.followData.length === 0 && (<div> loading</div>)
        }
        <FollowCard followers={this.state.followData}  />
      </div>
    );
  }
}

export default App;
