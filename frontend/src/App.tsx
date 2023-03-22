import React from 'react';
import data from './schools.json'
import './App.css';

const teams = data['teams'];

function Welcome(){
  return(
    <h1>Welcome to MARCH MADNESS</h1>
  );
}


class Team extends React.Component{
  render() {

    const oneTeam = this.props;
    // <{name: string; city:string;}>

    return(
      <div>
        <br />
        <h4>{oneTeam.school}</h4>
        <p>Mascot: {oneTeam.name}</p>
        <p>Location: {oneTeam.city}, {oneTeam.state}</p>
        <br />
      </div>
    );
  }
}

function TeamList() {
  return(
    <div>
      {teams.map(oneTeam => <Team {...oneTeam}/>)}
    </div>
  )
}

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Welcome/>
        
        <TeamList/>
      </header>
    </div>
    
  );
}

export default App;
