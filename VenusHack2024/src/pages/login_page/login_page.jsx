import React, { useState } from 'react';
import './login_page.css';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSignUp, setShowSignUp] = useState(false); // State to control the visibility of the sign-up form

  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');

  const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Login with:', email, password);
  };

  const handleSignUpSubmit = (event) => {
      event.preventDefault();
      console.log('Sign up with:', signUpEmail, signUpPassword);
      setShowSignUp(false); // Hide sign-up form after submission
  };

  const toggleSignUp = () => {
    setShowSignUp(!showSignUp);
  };

  return (
    <div className="login-container">
      <div className="login-image">
      </div>
      <div className="login-form">
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
          <button type="button" onClick={toggleSignUp} className="signup-button">Sign Up</button>
        </form>
        {showSignUp && (
          <div className="signup-modal">
            <form onSubmit={handleSignUpSubmit}>
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
