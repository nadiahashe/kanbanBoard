import { useState, FormEvent, ChangeEvent } from "react";
import Auth from '../utils/auth';
import { login } from "../api/authAPI";

const Login = () => {
  // State for login data
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });
  
  // State for error message
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const data = await login(loginData);
      Auth.login(data.token); // Redirects on successful login
      setErrorMessage(null); // Clear any existing error messages on success
    } catch (err) {
      setErrorMessage('Login failed: Invalid username or password'); // Set error message
    }
  };

  return (
    <div className='container'>
      <form className='form' onSubmit={handleSubmit}>
        <h1>Login</h1>

        {/* Conditionally render error message */}
        {errorMessage && <div className="error">{errorMessage}</div>}

        <label>Username</label>
        <input 
          type='text'
          name='username'
          value={loginData.username || ''}
          onChange={handleChange}
        />
        
        <label>Password</label>
        <input 
          type='password'
          name='password'
          value={loginData.password || ''}
          onChange={handleChange}
        />
        
        <button type='submit'>Submit Form</button>
      </form>
    </div>
  );
};

export default Login;
