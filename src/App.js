import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import Alert from './components/Alert';
import About from './components/About';

import {   // from react router dom
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('dark'); //  Whether dark mode is enable or not 

  const [alert, setAlert] = useState(null);

  const showAlert= (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
    
  } 

  const toggleMode =() =>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor ='rgb(14, 38, 72)';
      showAlert(" Dark mode has been Enabled","success");
    }
    else{
      setMode ('light');
      document.body.style.backgroundColor = 'white';
      showAlert(" Dark mode has been Disabled","success");
    }
  }

  return (
    <> 
    <Router>
       <Navbar title="TextUtils" aboutText="About us" content={mode=== "light" ? "Enable Dark Mode" : "Disable Dark mode" } mode={mode} toggleMode={toggleMode}/>  
       <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
          <Route exact path="/about" element={<About />}>
          </Route>
          <Route exact path="/" element={<TextForm mode={mode}  heading="Enter the text to analyze below  "/> }>
          </Route>
      </Routes>  
      </div> 
      </Router>
    </>
  );
}

export default App;
