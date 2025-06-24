import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import{
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  const[mode,setMode] = useState(`light`)  //check dark is enable or not
  const[alert,setAlert] = useState(null)

  const showAlert=(message,type) =>{  //function that show alert msg
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{  //set time to disable the alert msg 
       setAlert(null);
    },1500);
  
  }
  const toggleMode = () =>{
    if(mode === `light`){
      setMode(`dark`);
      document.body.style.backgroundColor=`#042743`;
      document.body.style.color=`white`;
      showAlert("Dark mode has been enable!","success")
    }
    else{
      setMode (`light`);   //setMode is Function
      document.body.style.backgroundColor = `white`; 
      document.body.style.color = `black`;
      showAlert("Light mode has been Enable","success")
    }
  };

return (
  <>
    <Router>
      <Navbar title="Textutils" aboutText="About Textutils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
      {/* /usrs --> component 1
          /user/home -->component 2 */}
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={
            <TextForm showAlert={showAlert} heading="Try TextUtils-Word Counter,Charater Counter,Remove Extra Spaces"
              textColor="#b615c4d1" mode={mode} />}
          />
        </Routes>
      </div>
    </Router>
  </>
);
}

export default App;
