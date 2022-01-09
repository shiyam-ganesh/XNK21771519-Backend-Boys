import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import {React, useState} from 'react'
// import Calculator from './Components/Calculator';
import Forms1 from './Components/Forms1';
import Userowns from './Components/Userowns';
import Forms2 from './Components/Forms2';
import Suggestions from './Components/Suggestions';
const data = require('./data.json');


function App() {

  const [mode, setMode] = useState("light");
  let [cf, setCf] = useState(0);
  let [cfText, setCfText] = useState("hidden");
  let [suggestions, setSuggestions] = useState("hidden");
  let [commute,setCommute] = useState(0);
  let [cleaner, setCleaner] = useState(data);
  const [form1, setForm1] = useState("visible");
  const [form2, setForm2] = useState("hidden");
  const [form3, setForm3] = useState("hidden");

  let results = [...cleaner];
  // const [form4, setForm4] = useState("hidden")
  // const [form3, setForm3] = useState("hidden");
  console.log(data)

  function modeToggle(){
    if(mode === 'light'){
      console.log("Toggle Mode");
      document.body.style.backgroundColor = "black";
      setMode("dark");
    }else{
      document.body.style.backgroundColor = "white";
      setMode("light");
    }
  }

  function clicked(res){
    if(res==="yes"){
        // document.querySelector("#--form1").style.visibilty="hidden";
        console.log("Yes");
        setForm2("visible");
        setForm1("hidden");
        // return(<Forms mode={props.mode}/>)
        
      }else{
        console.log("No");
        setForm3("visible");
        setForm1("hidden");
    }

  }

  // let mileage = 0;
  // let commute = 0;
  let com = 0;
  let fuelType ='';

  function displayCarbonFootprint(){
    console.log("Hello World");
    let mileage = parseInt(document.querySelector("#mileage").value);
    com = parseInt(document.querySelector("#commute").value);
    setCommute(com);
    fuelType = document.querySelector("#fuelType").value;
    console.log(mileage);
    console.log(commute);
    console.log(fuelType);
    let CF=0;
    
    if(fuelType === 'Petrol'){
      CF = (com/mileage)*2.38*260; // 5 days a week for a year
      setCf(CF.toFixed(2));
    }else{
      CF = (com/mileage)*2.63*260; // 5 days a week for a year
      setCf(CF.toFixed(2));
    }
    console.log(cf);
    
    setCfText("visible");
    
    
    
  }
  
  function showSuggestions(){
    results = [];
    setForm1("hidden");
    setForm2("hidden");
    setForm3("hidden");
    setCfText("hidden");
    setSuggestions("visible");
    let carTypes = document.querySelectorAll("input[type=radio]");
    let carType='';
    for(let j of carTypes){
      if(j.checked){
        carType = j.value;
        break;
      }
    }
    console.log(carType, cf);
    // console.log(commute)
    // cleaner.filter((i) => {
    //   ((i.Mileage/commute)*(i.FuelType==="Petrol" ? 2.38 : 2.63)*260<cf && i.CarType === carType);
      
    // })
    for(let i=0; i<data.length; i++){
      let myCf = (cleaner[i].Mileage/com)*(cleaner[i].FuelType==="Petrol" ? 2.38 : 2.63)*260;
      console.log(myCf, cleaner[i].CarType, carType);
      
      if(myCf<cf  && cleaner[i].CarType === carType){
        // console.log(i);
        setCleaner(cleaner.splice(i,1));
        results.push(i);
      }
    }
    // console.log(cleaner[0], cleaner[1], cleaner[2]);
    console.log("Results : ",results);
   

  }



  return (
    <>
      <Navbar sitename="BackendBoys" link1="link1" link2="link2" mode={mode} modeToggle={modeToggle}/>
      {/* <Calculator/> */}
    <div id="--form1" style={{visibility:form1}}>
      <div className='container'>
        <Userowns mode={mode} clicked={clicked}/>

      </div>
    </div>

     <div id="--form2" style={{visibility:form2, transform:'translateY(-20vh)'}}>
      <div className='container'>
        <Forms1 mode={mode} displayCarbonFootprint={displayCarbonFootprint} />
      </div>

     </div>

     <div id="--form3" style={{visibility:form3, transform:'translateY(-60vh)'}}>
      <div className='container'>
        <Forms2 mode={mode} header="Enter the Daily Commute Distance"/>
        
      </div>

     </div>

     <div className="container" id="cfdisplay" style={{visibility:cfText, transform:'translateY(-50vh)'}}>
       <h2 style={{color: mode==='dark' ? 'white' : 'black'}}>Your Carbon Footprint is estimated to be around {cf} Kg/year</h2>
       <div className="container my-1" style={{transform:'translate(20vw,2vw)'}}>
         <h5 style={{color: mode==='dark' ? 'white' : 'black'}}>Pick a Car Type</h5>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Sedan" checked="checked"></input>
          <label className="form-check-label" htmlFor="inlineRadio1" style={{color: mode==='dark' ? 'white' : 'black'}}>Sedan</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="SUV"></input>
          <label className="form-check-label" htmlFor="inlineRadio2" style={{color: mode==='dark' ? 'white' : 'black'}}>SUV</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="Hatchback"></input>
          <label className="form-check-label" htmlFor="inlineRadio3" style={{color: mode==='dark' ? 'white' : 'black'}}>Hatchback</label>
        </div>
       </div>
      <br></br>
       <button className="btn btn-success my-5" style={{marginLeft:"35%"}} onClick={showSuggestions}>Show car suggestions</button>
     </div>

     <div className="container" style={{visibility:suggestions, transform:'translateY(-125vh)'}}>
       <h2 style={{color: mode==='dark' ? 'white' : 'black', marginBottom:'5vh'}}>Our Ecofriendly Car Suggestions</h2>
       
       <Suggestions mode={mode} results={results}/>
     </div>


    
    
    
    
    
    </>
  );
}

export default App;
