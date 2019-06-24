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

  pictureClick = event => {

    const currentPlayer = event.target.alt;
    console.log( currentPlayer + " was clicked" )
    const playerAlreadyClicked =
      this.state.clickedPlayers.indexOf( currentPlayer ) > -1;
    if ( playerAlreadyClicked ) {
      this.setState( {
        players: this.state.players.sort( function ( a, b ) {
          return 0.5 - Math.random();
        } ),

        directions: "Sorry! Try Again...",
        highScore: ( this.state.score > this.state.highScore ) ? this.state.score : this.state.highScore,
        clickedPlayers: [],
        score: 0
      } )
    }
    else {
      this.setState(
        {
          players: this.state.players.sort( function ( a, b ) {
            return 0.5 - Math.random();
          } ),
          clickedPlayers: this.state.clickedPlayers.concat(
            currentPlayer
          ),
          directions: "Good job",
          score: this.state.score + 1
        },
        //if you get all 12 fish corrent you get a congrats message and the game resets        
        () => {
          if ( this.state.score === 18 ) {
            // alert("You guessed correctly!");
            this.setState( {
              car: this.state.players.sort( function ( a, b ) {
                return 0.5 - Math.random();
              } ),
              directions: "Nice Job! You Win...!",
              highScore: ( this.state.score > this.state.highScore ) ? this.state.score : this.state.highScore,
              clickedPlayers: [],
              score: 0
            } );
          }
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
