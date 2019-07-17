import React, { Component } from 'react'
import './style.css'



class Nav extends Component {
    render() {
        return (
            <div>
                <nav className="navbarStyle">
                    <ul>
                        <div className="list">
                            <li className="gameName">Clicky Game</li>

                            <li className="directions">  {this.props.directions}</li>

                            <li className="score">Score: {this.props.score}</li>
                            <li className="high-score"> High Score: {this.props.highScore}</li>
                        </div>
                    </ul>
                </nav>
            </div >
        )
    }
}



export default Nav