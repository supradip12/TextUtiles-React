import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";
 

function App() {
  const [mode, setmode] = useState('light'); // Whether dark mode is inable or not

  const [alert, setalert] = useState(null);


  const showAlert = (message,type)=>{
      setalert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setalert(null)
      }, 2000);
  }
  
  const removeBodyclssses = ()=>{
     document.body.classList.remove('bg-light');
     document.body.classList.remove('bg-dark');
     document.body.classList.remove('bg-warning');
     document.body.classList.remove('bg-danger');
     document.body.classList.remove('bg-success');
  }
  const toogleMode = (cls)=>{
    removeBodyclssses();
    console.log(cls);
    document.body.classList.add('bg-'+cls);
    if(mode === 'light'){
      setmode('dark');
      document.body.style.background = '#042743';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enable","success");


      // document.title = 'TextUtiles - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtiles  is Amazing';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'TextUtiles  loda';
      // }, 1500);
      
    }

    else{
      setmode('light');
      document.body.style.background = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enable","Success");
      // document.title = 'TextUtiles - Light Mode'
    }
  }
  
  
 
  return (  
    <>     
    {/* <Router> */}


    <Navbar title="TEXTUTILS" mode= {mode} toggleMode={toogleMode}/>
    <Alert alert={alert}/>

   
    <div className="container my-3">

    {/* <Switch> */}
          {/* <Route exact path="/about">
            <About />
          </Route>          
          <Route exact path="/"> */}
            <Textform showAlert={showAlert} heading="Try -TextUtiles Word Counter,Character Counter,Remove ExtraSpaces" mode={mode}/>            
          {/* </Route>
    </Switch> */}
    

    {/* <About mode={mode}/> */}
    </div>
    {/* </Router> */}
    
    </>
  );
}

export default App;
