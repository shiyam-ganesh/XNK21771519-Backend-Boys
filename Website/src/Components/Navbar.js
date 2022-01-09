import React from 'react'
import PropTypes from 'prop-types'

function Navbar(props) {

    // function modeToggle(){
    //     console.log("Toggle Mode");
    //     document.body.style.backgroundColor = "black";
    // }

    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{background:'linear-gradient(to right , violet , skyblue'}}>
        <div className="container-fluid">
            <a className="navbar-brand" href="/"><b>{props.sitename}</b></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                <a className="nav-link" href="/">{props.link1}</a>
                <a className="nav-link" href="/">{props.link2}</a>
            </div>
            <button style={{color:'white', marginLeft:'auto', border:'none', background:'none', fontSize:'1.2em'}} onClick={() => props.modeToggle()}><big>&#9728;</big></button>
            </div>
        </div>
        </nav>
        <h1 style={{color : props.mode==='light' ? 'black' : 'white', margin:'4vh 0 4vh 4vh'}}>Backend Boys , The Best, Ecofriendly Vehicle Suggestion for y'all</h1>
        <div>
            <h3 style={{color : props.mode==='light' ? 'black' : 'white', marginLeft:'6vw'}}>Go ahead and tell us about your needs</h3>
        </div>
        </>
    )
    
}

export default Navbar
