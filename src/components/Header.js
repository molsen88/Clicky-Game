import React from 'react'

const Header = () => {
    return (
        <div style={jumbotron}>
            <h1 style={headerFont}>Clicky Game</h1>
            <h2 style={instructions}>Click an image to earn points, but don't
            click any more than once</h2>

        </div>
    )
}
const jumbotron = {
    backgroundColor: 'white',
    height: '200px',
    padding: '180px 20px',
    paddingBottom: '140px'
}
const headerFont = {
    fontSize: '40px',
    color: 'Black',
    textAlign: 'center',
    fontFamily: 'B612 Mono, monospace'
}
const instructions = {
    color: 'black',
    fontSize: '30px',
    textAlign: 'center',
    fontFamily: 'B612 Mono, monospace'
}

export default Header
