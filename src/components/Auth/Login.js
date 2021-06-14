import React from 'react';

const Login = (props) => {
  
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;
  
  return(
    <section className="login">
      <div className="loginContainer">
      <h2>ROCK PAPER SCISSORS</h2>
      <label className="text-left">User Name</label>
      <input type="text" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)} name=""/>
      <p className="errorMsg">{emailError}</p>
      <label className="text-left">Password</label>
      <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} name=""/>
      <p className="errorMsg">{passwordError}</p>
      
      <div className="btnContainer">
        {hasAccount ? (
          <>
            <button className="btn-login" onClick={handleLogin}>Signin</button>
            <p> Don't have an account? 
            <span onClick={() => setHasAccount(!hasAccount) }>Signup</span></p>
          </>
        ) : (
          <>
            <button className="btn-login" onClick={handleSignup}>Signup</button>
            <p> Have an account? 
            <span onClick={() => setHasAccount(!hasAccount) }>Signin</span></p>
          </>
        )}
      </div>
      </div>
    </section>
  );
}

export default Login;