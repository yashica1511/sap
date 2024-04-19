import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';
import Signin1 from './Signin1';
import Signin2 from './Signin2';
import { useNavigate } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signin1/>}/>
      <Route path='/signin2' element={<Signin2/>}/>
    </Routes>
    </BrowserRouter>
  );
}


export default App;

