import React, { useEffect, useState } from 'react';
import fire from './fire';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from "./Auth/Login"
import Logout from "./Auth/Logout"
import Header from "./Header";
import Home from "./Home";
import Play from "./Play";
import Footer from "./Footer";
import '../css/App.scss';
import '../App.css';

export default function App() {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);
  
  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }
  
  const clearError = () => {
    setEmailError('');
    setPasswordError('');
  }
  
  const handleLogin = () =>{
    clearError();
    fire 
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        switch(err.code){
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      })
  }
  
  const handleSignup = () =>{
    clearError();
    fire 
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err => {
        switch(err.code){
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      })
  }
  
  const handleLogout = () => {
    fire.auth().signOut();
  };
  
  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      }else{
        setUser("");
      }
    });
  };
  
  useEffect(() => {
    authListener();
  }, []);
  
  const [myPick, setMyPick] = useState("");
  const [housePick, setHousePick] = useState("");
  const [gameScore, setGameScore] = useState(0);

  function newHousePick() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = choices[Math.floor((Math.random()*3))];
    setHousePick(randomChoice);
  }

  useEffect(() => {
    newHousePick();
  },[setMyPick]);

  return (
    <Router>
    {user ? (
        <div className="wrapper">
          <Header score={gameScore} handleLogout={handleLogout}/>
          <Switch className="main">
            <Route path="/play">
              <Play mine={myPick} house={housePick} score={gameScore} setScore={setGameScore} setHousePick={newHousePick}/>
            </Route>
            <Route path="/">
              <Home setPick={setMyPick} />
            </Route>
          </Switch>
          <Footer />
        </div>
      
      ) : (
      <div className="App">
        <Login 
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
          handleSignup={handleSignup}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError={emailError}
          passwordError={passwordError}
        />
      </div>
    )}
    </Router>  
    
  )
}

