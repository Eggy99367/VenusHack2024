import React, { useState } from 'react';

import './login_page.css'

export const LoginPage = () =>{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Login with:', email, password);
  };
  return (
    <div className="login-container">
      <div className="login-image">
        <img src="assets/brandywine.jpg" alt="Login" />
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
        </form>
      </div>
    </div>
  );
};

export default LoginPage

