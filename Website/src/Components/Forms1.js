import React from 'react'
import DisplayFootprint from './DisplayFootprint';
// import {React, useState} from 'react'



function Forms1(props) {

    // let [cf, setCf] = useState(0);


    // function calculateCF(){
    //     let mileage = parseInt(document.querySelector("#mileage").value);
    //     let commute = parseInt(document.querySelector("#commute").value);
    //     let fuelType = document.querySelector("#fuelType").value;
    //     console.log(mileage);
    //     console.log(commute);
    //     console.log(fuelType);
    //     let CF=0;

    //     if(fuelType === 'Petrol'){
    //         CF = (commute/mileage)*2.38*260; // 5 days a week for a year
    //     }else{
    //         CF = (commute/mileage)*2.63*260; // 5 days a week for a year
    //     }
    //     console.log(CF);
        
    // }


    return (
        <>
            <div style={{marginTop:'4vh'}}>
            <label htmlFor="mileage" className="form-label"><h4 style={{color: props.mode==='light' ? 'white' : 'white'}}>Enter the Mileage</h4></label>
            <input id="mileage" className="form-control" type="text" placeholder="Type here" aria-label="default input example"></input>

            </div>

            
            <div style={{marginTop:'4vh'}}>
            <label htmlFor="commute" className="form-label"><h4 style={{color: props.mode==='light' ? 'white' : 'white'}}>Enter the Daily Commute Distance</h4></label>
            <input id="commute" className="form-control" type="text" placeholder="Type here" aria-label="default input example"></input>

            </div>

            <div style={{marginTop:'4vh'}}>
                <label for="exampleDataList" className="form-label"><h4 style={{color: props.mode==='light' ? 'white' : 'white'}}>Choose Fuel Type</h4></label>
                <input className="form-control" list="datalistOptions" id="fuelType" placeholder="Fuel Type"></input>
                <datalist id="datalistOptions">
                <option value="Petrol"></option>
                <option value="Diesel"></option>
                </datalist>
            </div>
            

            <button  style={{margin:'4vh 40% 3vh 40%', background:'violet', border:'none', outline:'none', borderRadius:'0.3em', padding:'0.5em'}} onClick={() => props.displayCarbonFootprint()}>Calculate Carbon Footprint</button>

        
        </>
    )
}

export default Forms1
