import React from 'react'
import Forms1 from './Forms1';

function Userowns(props) {

    // function clicked(res){
    //     if(res==="yes"){
    //         document.querySelector("#--form1").style.visibilty="hidden";
    //         console.log("Yes");
    //         return(<Forms mode={props.mode}/>)
    //     }else{
    //         console.log("No");
    //     }

    // }

    return (
        <>
        
            <div>
                <h4 style={{color:'white', margin:'0 38% 5vh 38%'}}>Do you own a car ?</h4>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
                    <button className="btn btn-success" onClick={() => props.clicked("yes")}>Yes</button>
                    <button className="btn btn-danger" onClick={() => props.clicked("no")}>No</button>
                </div>
            </div>
            

        
        
        
        </>
    )
}

export default Userowns
