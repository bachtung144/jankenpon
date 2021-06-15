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
    var check =0;
    fire 
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err => {
        switch(err.code){
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            check++;
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            check++;
            setPasswordError(err.message);
            break;
        }
      });
    if(check == 0){
      fire.firestore().collection('scores').doc(email).set({
      Email: email,
      Score: check
    }); 
    }
    check=0;
  }
  
  const handleLogout = () => {
    // setscoreMax(0);
    setGameScore(0);
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
  const [scoreMax, setscoreMax] = useState(0); 
  
  function newHousePick() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = choices[Math.floor((Math.random()*3))];
    setHousePick(randomChoice);
  }
  const saveScore = (C) => {
    let max ;
    fire.firestore().collection('scores').doc(user.email).get().then((doc) => {
      max = doc.data();
      setscoreMax(max.Score)
    });
    let maxScore = Number(scoreMax)
    let cusScore = Number(C)
    
    console.log("Customer: ", cusScore, "maxScore :", maxScore);
    if(cusScore > maxScore){
    fire.firestore().collection('scores').doc(user.email).set({
      Email: user.email,
      Score: C
    }); 
    }
  }
  useEffect(() => {
    newHousePick();
  },[setMyPick]);
  
  var [scores, setScores] = useState([{}])
  
  useEffect(() => {
    const fetchData = fire.firestore().collection('scores')
    .onSnapshot(snapshot => {
        let List = []
        let ListRank = []
        snapshot.forEach(doc =>
          List.push(doc.data()),
        )
        List.sort(function(a, b){return b.Score - a.Score});
        for (var i =0; i<List.length; i++ ) {
          if(i<5){
          ListRank[i] = Object.assign({}, List[i],{id: i});
          }
        }
        setScores(ListRank)
    })

    return () => {
      fetchData()
    }
  }, [])
  return (
    <Router>
    {user ? (
        <div className="wrapper">
          <Header score={gameScore} handleLogout={handleLogout} email = {user.email} rank = {scores} saveScore={saveScore} scoreMax={scoreMax}/>
        
          <Switch className="main">
            <Route path="/play">
              <Play mine={myPick} house={housePick} score={gameScore} setScore={setGameScore} setHousePick={newHousePick} saveScore={saveScore} />
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

