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

  pictureClick = ( event ) => {

    const currentPlayer = event.target.alt;
    console.log( currentPlayer + " was clicked" )
    const playerAlreadyClicked =
      this.state.clickedPlayers.indexOf( currentPlayer ) > -1;
    console.log( playerAlreadyClicked )

    if ( playerAlreadyClicked ) {

      this.setState( {

        players: this.state.players.sort( function () {
          return 0.5 - Math.random();
        } ),

        score: 0,
        directions: "You lost!!",
      } )
    }
    else {
      this.setState( {
        score: this.state.score + 1,
        directions: "Good choice",
        clickedPlayers: [],
        players: this.state.players.sort( function ( a, b ) {
          return 0.5 - Math.random();
        } ),
        highScore: ( this.state.score > this.state.highScore )

      } )
    }
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
              pictureClick={this.pictureClick}
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
