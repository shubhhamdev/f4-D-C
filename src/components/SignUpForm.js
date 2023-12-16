import React, { useState } from 'react';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState();
  const [isPasswordValid, setIsPasswordValid] = useState();
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState();

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(email));
  };

  const validatePassword = () => {
    setIsPasswordValid(password.length >= 8);
  };

  const validateConfirmPassword = () => {
    setIsConfirmPasswordValid(confirmPassword === password && confirmPassword!=="");
  };

  const handleSubmit = () => {
  

    if (isEmailValid && isPasswordValid && isConfirmPasswordValid) {
      alert('Form submitted successfully');
    } else {
      alert('Can\'t submit the form');
    }
  };

  return (
    <div className='formContainer'>
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onBlur={validateEmail}
        style={{ border: isPasswordValid ? '1px solid green' : '1px solid red' }}
      />
      {!isEmailValid && <div style={{ color: 'red' }}>Invalid email format</div>}

      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onBlur={validatePassword}
        style={{ border: isEmailValid ? '1px solid green' : '1px solid red' }}
      />
      {!isPasswordValid && 
        <div style={{ color: 'red' }}>Password must be at least 8 characters long</div>
      }

      <label>Confirm Password:</label>
      <input
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        onBlur={validateConfirmPassword}
        style={{
          border: isConfirmPasswordValid ? '1px solid green' : '1px solid red',
        }}
      />
      {!isConfirmPasswordValid && (
        <div style={{ color: 'red' }}>Passwords do not match</div>
      )}

      <button onClick={handleSubmit}>Sign Up</button>
    </div>
  );
};

export default SignUpForm;