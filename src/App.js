import React, {useState} from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   //Link
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
        setAlert({
          msg: message,
          type: type
        })
        setTimeout(() => {
            setAlert(null);
        }, 2500)
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
    setMode('Dark')
    document.body.style.backgroundColor = '#dc4b4b';
    showAlert("Dark mode has been enabled","success");
    //document.title ="TextUtils - Dark Mode";
    // setInterval(() => {
    //   document.title ="TextUtils is Amazing";
    // }, 2000)
                                                           //for Attracting 
    // setInterval(() => {
    //   document.title =" Install TextUtils Now ";
    // }, 1500)
    }
  
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
      //document.title ="TextUtils - Light Mode";

    }
  }
  return (
    <>  
    <Navbar title ="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my.3">
    <TextForm showAlert={showAlert}heading="Try TextUtils - word counter, character counter, speak, download Text"/>
    </div>
     </>
  );
}

export default App;
