import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import Alerts from './components/Alerts';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    setAlert({
      type: type,
      message: message
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <Router>
      <Navbar title="TextUtils" li="About" />
      <Alerts alert={alert} />
      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/" element={<Textform showAlert={showAlert} heading="Enter your text here" />} />
      </Routes>
    </Router>
  );
}

export default App;
