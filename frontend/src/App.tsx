import React from 'react';
import data from './schools.json'
import './App.css';

const teams = data['teams'];

function Welcome(){
  return(
    <h1>MARCH MADNESS</h1>
  );
}


class Team extends React.Component  <{name: string; school: string; city: string; state: string}> {
 
  render() {

    const oneTeam = this.props;
    

    return(
      <div className="Space">
        <div className="Card">
          <br />
          <h4>{oneTeam.school}</h4>
          <p>Mascot: {oneTeam.name}</p>
          <p>Location: {oneTeam.city}, {oneTeam.state}</p>
          <br />
        </div>
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
