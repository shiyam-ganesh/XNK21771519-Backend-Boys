import React from 'react'
const Edata = require('../ElectricData.json');

console.log(Edata);

function Electric(props) {
    return (
        <>
        
        
        <div id="carouselExampleInterval" className={`carousel carousel-${props.mode ==='dark' ? 'dark' : 'light'} slide`}  data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
            <img src={Edata[0].ImageLink} className="d-block w-100" alt="..."></img>
            <div className="carousel-caption d-none d-md-block" style={{color: props.mode==='light' ? 'black' : 'white'}}>
                    <h5 style={{backgroundColor:'#ee82ee9c', color:'black'}}>{Edata[0].ModelName}</h5>
                    <p style={{backgroundColor:'#ee82ee9c', color:'black'}}>CO2 emission per km :  {Edata[0].emission}</p>
                    <p style={{backgroundColor:'#ee82ee9c', color:'black'}}>Car Type : Electric</p>
                </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
            <img src={Edata[1].ImageLink} className="d-block w-100" alt="..."></img>
            <div className="carousel-caption d-none d-md-block" style={{color: props.mode==='light' ? 'black' : 'white'}}>
                    <h5 style={{backgroundColor:'#ee82ee9c', color:'black'}}>{Edata[1].ModelName}</h5>
                    <p style={{backgroundColor:'#ee82ee9c', color:'black'}}>CO2 emission per km :  {Edata[1].emission}</p>
                    <p style={{backgroundColor:'#ee82ee9c', color:'black'}}>Car Type : Electric</p>
                </div>
            </div>
            <div className="carousel-item">
            <img src={Edata[2].ImageLink} className="d-block w-100" alt="..."></img>
            <div className="carousel-caption d-none d-md-block" style={{color: props.mode==='light' ? 'black' : 'white'}}>
                    <h5 style={{backgroundColor:'#ee82ee9c', color:'black'}}>{Edata[2].ModelName}</h5>
                    <p style={{backgroundColor:'#ee82ee9c', color:'black'}}>CO2 emission per km :  {Edata[2].emission}</p>
                    <p style={{backgroundColor:'#ee82ee9c', color:'black'}}>Car Type : Electric</p>
                </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
        
        
        
        
        
        
        </>
    )
}

export default Electric
