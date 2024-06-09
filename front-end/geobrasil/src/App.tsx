import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Noticias from './pages/Noticias';
import Login from './pages/Login';
import SignUpForm from './components/Login/SignUp';
import PrivateRoute from './components/PrivateRoute'; 

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/noticias" element={
          <PrivateRoute>
            <Noticias />
          </PrivateRoute>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUpForm />} />
      </Routes>
    </Router>
  );
}

export default App;
