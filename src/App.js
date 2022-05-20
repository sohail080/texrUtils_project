import About from './About';
import { useState } from 'react';
import Alerts from './Alerts';
import './App.css';
import Navbar from './Navbar';
import Textform from './Textform';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";



function App() {

  const [mode, setMode] = useState('light');

  function toggleMode() {
    if (mode==='light') {
      setMode('dark');
      document.body.style.backgroundColor='#143b5e';
      showAlert("Dark mood has been enabled","success ");
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mood has been enabled","success");

    }
    
  }

  const [alert, setAlert] = useState(null);
  function showAlert(message, type) {
    setAlert(
      {
        msg:message,
        type:type
      }
    );
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
  <Router>
  <Navbar mode={mode} toggleMode={toggleMode}/>
  <Alerts alert={alert}/>
  <Routes>
          <Route path="/about" element={ <About first="First Collapse" second="Second Collapse" third="Third Collapse" mode={mode}/>}/>
         
          <Route path="/" element={ <Textform heading="Enter Text below" mode={mode} showAlert={showAlert}/>}/>
           
  </Routes>

  </Router>   
    </>
  );
}

export default App;
