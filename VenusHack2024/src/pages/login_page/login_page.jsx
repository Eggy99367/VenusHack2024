import React, { useState } from 'react';
import './login_page.css';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSignUp, setShowSignUp] = useState(false);
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Retrieve user data from localStorage
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
    if (email === storedEmail && password === storedPassword) {
      setLoggedIn(true);
      setErrorMessage('');
      console.log('Login successful');
      location.replace('/brandywine')
    } else {
      setErrorMessage('Invalid email or password');
    }
  };

  const handleSignUpSubmit = (event) => {
    event.preventDefault();
    console.log('Sign up with:', signUpEmail, signUpPassword);
    setShowSignUp(false);
    // Store user data in localStorage
    localStorage.setItem('email', signUpEmail);
    localStorage.setItem('password', signUpPassword);
  };

  const toggleSignUp = () => {
    setShowSignUp(!showSignUp);
  };

  const handleLogout = () => {
    // Clear stored user data on logout
    // localStorage.removeItem('email');
    // localStorage.removeItem('password');
    setLoggedIn(false);
  };

  return (
    <div className="login-container">
      <div className="login-image"> </div>
      <div className="login-form">
        {!loggedIn ? (
          <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Login</button>
            <button type="button" onClick={toggleSignUp} className="signup-button">
              Sign Up
            </button>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </form>
        ) : (
          <div>
            <h2>You are logged in!</h2>
            <button type="button" onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}
        {showSignUp && (
          <div className="signup-modal">
            <form onSubmit={handleSignUpSubmit}>
            <img src={"../../../assets/large_logo.png"} />
              <h2>Sign Up</h2>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  value={signUpEmail}
                  onChange={(e) => setSignUpEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input
                  type="password"
                  value={signUpPassword}
                  onChange={(e) => setSignUpPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit">Register</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;