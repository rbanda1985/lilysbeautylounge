import React from 'react';
import './App.css';
import Home from './components/Home';
import Services from './components/Services';
import Gallery from './components/Gallery';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/services' element={<Services />} />
      <Route path='/gallery' element={<Gallery />} />
    </Routes>
  );
}

export default App;
