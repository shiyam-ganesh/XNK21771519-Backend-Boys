import {React, useState} from 'react'
import Electric from './Electric';

const data = require('../data.json');

function Suggestions(props) {
    return (
        <>
            <div id="carousel-2" className={`carousel carousel-${props.mode ==='light' ? 'dark' : 'light'} slide`} data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2" style={{color: props.mode==='light' ? 'black' : 'white'}}></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3" style={{color: props.mode==='light' ? 'black' : 'white'}}></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                <img src={props.results[0].ImageURL} className="d-block w-100" alt="..."></img>
                <div className="carousel-caption d-none d-md-block" style={{color: props.mode==='light' ? 'black' : 'white'}}>
                    <h5 style={{backgroundColor:'#ee82ee9c'}}>{props.results[0].ModelName}</h5>
                    <p style={{backgroundColor:'#ee82ee9c'}}>Mileage : {props.results[0].Mileage}</p>
                    <p style={{backgroundColor:'#ee82ee9c'}}>Car Type : {props.results[0].CarType}</p>
                </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                <img src={props.results[1].ImageURL} className="d-block w-100" alt="..."></img>
                <div className="carousel-caption d-none d-md-block" style={{color: props.mode==='light' ? 'black' : 'white'}}>
                    <h5 style={{backgroundColor:'#ee82ee9c'}}>{props.results[1].ModelName}</h5>
                    <p style={{backgroundColor:'#ee82ee9c'}}>Mileage : {props.results[1].Mileage}</p>
                    <p style={{backgroundColor:'#ee82ee9c'}}>Car Type : {props.results[0].CarType}</p>
                </div>
                </div>
                <div className="carousel-item">
                <img src={props.results[2].ImageURL} className="d-block w-100" alt="..."></img>
                <div className="carousel-caption d-none d-md-block" style={{color: props.mode==='light' ? 'black' : 'white'}}>
                    <h5 style={{backgroundColor:'#ee82ee9c'}}>{props.results[2].ModelName}</h5>
                    <p style={{backgroundColor:'#ee82ee9c'}}>Mileage : {props.results[2].Mileage}</p>
                    <p style={{backgroundColor:'#ee82ee9c'}}>Car Type : {props.results[0].CarType}</p>
                </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev" style={{color: props.mode==='light' ? 'black' : 'white'}}>
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next" style={{color: props.mode==='light' ? 'black' : 'white'}}>
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>

            <br></br>
            <br></br>
            <h4 style={{color: props.mode==='light' ? 'black' : 'white'}}>BackendBoys suggests YOU to choose an electric vehicle</h4>
            <br></br>
            <br></br>
            <br></br>

            <Electric mode={props.mode}/>

            
        </>
    )
}

export default Suggestions
