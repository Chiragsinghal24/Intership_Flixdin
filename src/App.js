// import React, { Component } from 'react';
import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Home from "./components/home/home"
import Auth from './components/intro/Auth.jsx';
import LoginForm from './components/intro/Login.jsx';
import RegisterForm from './components/intro/Register.jsx';
import Phonenoform from './components/intro/Phoneno.jsx';
import Numberverificationform from './components/intro/Numberverification.jsx';
import Domainselectionform from './components/intro/Selectdomain.jsx';
import Skillselectionform from './components/intro/Otherskills';
import TermsForm from './components/intro/T&c';
import Birthdayform from './components/intro/Birthday';
import Thanks from './components/intro/Thanks';

function App() {
  return (
    <div className="App bg-[#FFFADD]">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Auth><LoginForm /></Auth>} />
            <Route path="register" element={<Auth><RegisterForm /></Auth>} />
            <Route path="phone" element={<Auth><Phonenoform /></Auth>} />
            <Route path="verification" element={<Auth><Numberverificationform /></Auth>} />
            <Route path="domain" element={<Auth><Domainselectionform /></Auth>} />
            <Route path="terms" element={<Auth><TermsForm /></Auth>} />
            <Route path="skills" element={<Auth><Skillselectionform /></Auth>} />
            <Route path="birthday" element={<Auth><Birthdayform /></Auth>} />
            <Route path="thanks" element={<Thanks />} />
            <Route path = "/home" element = {<Home/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
