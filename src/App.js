import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  
  const [modeText,setTextMode]=useState('Enable dark mode');
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);

  const handleMode=()=>{
    if(mode==='light')
    {
      setMode('dark');
      setTextMode('Enable light mode');
      document.body.style.backgroundColor='#617588';
      showAlert("Dark mode has been enabled","success");
    }
    else 
    {
      setMode('light');
      setTextMode('Enable dark mode');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
    }

  }

  const showAlert=(message,type)=>{
    setAlert({
      message: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 2000);

  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutme="About " mode={mode} handleMode={handleMode} modetext={modeText} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About mode={mode}/>} />
            <Route path="/" element={<Textform title="Write your text below." mode={mode} showAlert={showAlert}/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App; 
