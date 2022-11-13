import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  let browserLanguage = navigator.language;
  let [language, setLanguage] = useState(
    browserLanguage === "cs" ? "cs" : "en"
  );

  return (
    <>
    <Router>
      <Navbar 
        setLanguage={setLanguage}
        language={language} />
        <h1>{browserLanguage}</h1>
      <Routes>
        <Route path='/' exact />
      </Routes>
    </Router>
    </>
  );
}

export default App;
