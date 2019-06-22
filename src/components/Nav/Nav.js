import React from 'react'
import './style.css'



function Nav() {

    return (
        <div>
            <navbar className="navbarStyle">
                <ul>
                    <div className="list">
                        <li className="gameName">Clicky Game</li>

                        <li className="directions"> Click an image to begin!</li>

                        <li className="score">Score:  | Top Score: </li>
                    </div>
                </ul>
            </navbar>
        </div >
    )
}











export default Nav