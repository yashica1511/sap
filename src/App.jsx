import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Signin1 from './Signin1';
import { useNavigate } from 'react-router-dom';
import MainPage from './Mainpage';
function App() {
  return (
    <div>
      <MainPage />
      <Signin1 />
    </div>
  );
}

export default App;

