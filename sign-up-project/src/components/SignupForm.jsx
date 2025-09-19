import React, { useState } from 'react';
// import './SignupForm.css'; // Optional CSS file for styling

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [emailValid, setEmailValid] = useState(null);
  const [passwordValid, setPasswordValid] = useState(null);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(null);

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailValid(validateEmail(value));
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordValid(value.length >= 8);
    setConfirmPasswordValid(value === confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    setConfirmPasswordValid(password === value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (emailValid && passwordValid && confirmPasswordValid) {
      alert('Form submitted successfully');
    } else {
      alert("Can't submit the form");
    }
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <h2>Sign Up</h2>

      {/* Email Input */}
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          className={emailValid === false ? 'invalid' : emailValid ? 'valid' : ''}
          required
        />
        {emailValid === false && <small className="error">Enter a valid email address.</small>}
      </div>

      {/* Password Input */}
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          className={passwordValid === false ? 'invalid' : passwordValid ? 'valid' : ''}
          required
        />
        {passwordValid === false && <small className="error">Password must be at least 8 characters.</small>}
      </div>

      {/* Confirm Password Input */}
      <div className="form-group">
        <label>Confirm Password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          className={confirmPasswordValid === false ? 'invalid' : confirmPasswordValid ? 'valid' : ''}
          required
        />
        {confirmPasswordValid === false && <small className="error">Passwords do not match.</small>}
      </div>

      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupForm;
