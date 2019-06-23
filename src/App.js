import React, { Component } from "react";
import Nav from './components/Nav/Nav'
import Header from './components/Header'
import Main from './components/Main'
import './App.css';
import Footer from './components/Footer/Footer'
import players from "./players.json"
import PlayerCard from './components/PlayerCard/PlayerCard';



class App extends Component {
  state = {
    players,
    clickedPlayers: [],
    score: 0,
    highScore: 0,
    directions: "Click an image to begin"
  }

  handleClick( e ) {
    e.preventDefault();
    const currentPlayer = e.target.alt;
    console.log( currentPlayer + " was clicked" )
  }




  render() {
    return (
      <div className="App">
        <Nav score={this.state.score}
          directions={this.state.directions}
          highScore={this.state.highScore}
        />

        <Header />
        <Main />
        <div className="pictures">
          {this.state.players.map( player => (
            <PlayerCard
              handleClick={this.handleClick}
              id={player.id}
              key={player.id}
              name={player.name}
              image={player.image}

              position={player.position}
            />
          ) )}
        </div>

        <Footer />

      </div>
    );
  }
}


export default App;
