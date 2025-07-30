import React, { useState, useEffect } from 'react';
import Home from './Home';
import HashLoader from 'react-spinners/BeatLoader';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutSection from './About_section';
import GreenovationChatPot from './GreenovationChatPot';


const App = () => {
  const [Looding, setLooding] = useState(false);
  
  useEffect(() => {
    setLooding(true);
    setTimeout(() => setLooding(false), 3000);
  }, []);
  
return (
  <React.StrictMode>
    <BrowserRouter>
      {/* ✅ ChatBot component */}
      <GreenovationChatPot showMessage={true} />

      {Looding ? (
        <div className='preloder'>
          <HashLoader color="black" size={50} />
        </div>
      ) : (
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutSection />} />
        </Routes>
      )}
    </BrowserRouter>
  </React.StrictMode>
);
}

export default App;