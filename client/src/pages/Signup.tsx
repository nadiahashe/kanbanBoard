import { useState, FormEvent, ChangeEvent } from "react";
import Auth from '../utils/auth'; // Assuming Auth is a utility for authentication handling
import { signUp } from "../api/authAPI"; // Assuming you have a signup API

const Signup = () => {
  const [signupData, setSignupData] = useState({
    username: '',
    password: ''
  });

  // State to store error messages
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignupData({
      ...signupData,
      [name]: value
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validate if username or password is blank
    if (!signupData.username || !signupData.password) {
      setErrorMessage('Both username and password are required.');
      return;
    }

    try {
      const data = await signUp(signupData); // Calling signup API
      Auth.login(data.token); // Assuming Auth is for setting tokens after successful signup
      setErrorMessage(null); // Clear the error message if signup is successful
    } catch (err) {
      setErrorMessage('Failed to sign up. Please try again.'); // Set an error message on failure
      console.error('Failed to sign up', err);
    }
  };

  return (
    <div className='container'>
      <form className='form' onSubmit={handleSubmit}>
        <h1>Sign Up</h1>

        {/* conditionally render error message */}
        {errorMessage && <div className="error">{errorMessage}</div>}

        <label>Username</label>
        <input 
          type='text'
          name='username'
          value={signupData.username || ''}
          onChange={handleChange}
        />

        <label>Password</label>
        <input 
          type='password'
          name='password'
          value={signupData.password || ''}
          onChange={handleChange}
        />

        <button type='submit'>Create Account</button>
      </form>
    </div>
  );
};

export default Signup;
