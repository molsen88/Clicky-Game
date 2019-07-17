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
    // highScore: 0,
    directions: "Click an image to begin",
    playerAlreadyClicked: true
  }

  pictureClick = event => {

    const currentPlayer = event.target.alt;
    console.log( currentPlayer + " was clicked" )
    // this.state.clickedPlayers.push( currentPlayer )
    let playerAlreadyClicked =
      this.state.clickedPlayers.indexOf( currentPlayer ) > -1;
    this.state.clickedPlayers.push( currentPlayer )


    console.log( playerAlreadyClicked, this.state.clickedPlayers )


    if ( playerAlreadyClicked ) {


      this.setState( {

        players: this.state.players.sort( function () {
          return 0.5 - Math.random();
        } ),
        score: 0,
        directions: "You lost!!",
        playerAlreadyClicked: true,
        highScore: ( this.state.score )
      } )
      this.setState( {
        clickedPlayers: [],
        highScore: ( this.state.score )
      } )

    }

    else {
      this.setState( {
        score: this.state.score + 1,
        playerAlreadyClicked: true,
        directions: "Good choice",

        players: this.state.players.sort( function ( a, b ) {
          return 0.5 - Math.random();

        } ),


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
            />
          ) )}
        </div>

        <Footer />

      </div>
    );
  }
}


export default App;
