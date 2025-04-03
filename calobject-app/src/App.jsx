import {Route, Routes, Link} from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import React from "react";
import HomePage from './components/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import LogInForm from './components/LoginForm';
import SignUpForm from './components/SignupForm';
import NotFound from './components/NotFound';
import CalorieCalculator from './components/CalorieCalculator';
import MealDetails from './components/MealDetails';



function App() {
    const[isLoggedIn, setIsLoggedIn] = useState(false);

    //Recive user data from local storage
    const storedData = JSON.parse(localStorage.getItem("user"));

    //Get only username from local storage 
    const username = storedData ? storedData.username : "User";

    //check local storage on first load
    useEffect(() => {
      if(storedData){
        setIsLoggedIn(true)
      }
    }, []);
    
    
    //Remove user from local storage when log out
    function onLogout(){
      localStorage.removeItem("user");
      setIsLoggedIn(false);
      window.location.href = '/';
    }

    return (
      <>
        <Header username={username} isLoggedIn={isLoggedIn} onLogout={onLogout}/>
        <Routes>
          <Route path='/' element = {<HomePage/>} />
          <Route path='/signup' element = {<SignUpForm isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path='/login' element = {<LogInForm isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path='/calobject' element = {<CalorieCalculator/>} />
          <Route path='*' element = {<NotFound/>} />
        </Routes>
        <Footer />
        
      </>
    )
}

export default App

