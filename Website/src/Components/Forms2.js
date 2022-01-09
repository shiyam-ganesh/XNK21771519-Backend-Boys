import React from 'react'

function Forms2(props) {
    return (
        <>
         <div style={{marginTop:'4vh'}}>
            <label htmlFor="commute" className="form-label"><h4 style={{color: props.mode==='light' ? 'white' : 'white'}}>Enter the Daily Commute Distance</h4></label>
            <input id="commute" class="form-control" type="text" placeholder="Type here" aria-label="default input example"></input>

        </div>
        

        <button  style={{margin:'4vh 40% 3vh 40%', background:'violet', border:'none', outline:'none', borderRadius:'0.3em', padding:'0.5em'}}>Look for Vehicles</button>

        
        </>
    )
}

export default Forms2
