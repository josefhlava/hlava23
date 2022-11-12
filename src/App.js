import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  let languageStoredInLocalStorage = localStorage.getItem("language");
  let [language, setLanguage] = useState(
    languageStoredInLocalStorage ? languageStoredInLocalStorage : "Czech"
  );

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact />
      </Routes>
    </Router>
    </>
  );
}

export default App;
