import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  // Axios instance with credentials set true for the session
  axios.defaults.withCredentials = true;
  const api = axios.create({
    withCredentials:true,
    baseURL: "http://localhost:5050",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
      try {
        // Posting data to the '/login' endpoint on your server
        const response = await api.post('/login', { user, pass });
        console.log(response.data); // Successfully logged in
      } catch (error) {
        console.error("An error occurred during the login process", error);
      }
  };

  const handleSessionCheck =  async (e) => {
    e.preventDefault();
      try {
        // Posting data to the '/login' endpoint on your server
        const response = await api.get('/');
        console.log(response.data); // Successfully logged in
      } catch (error) {
        console.error("An error occurred during the login process", error);
      }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
        <label>Username:</label>
        <input type='text' value={user} onChange={(e) => setUser(e.target.value)} />
        
        <label>Password:</label>
        <input type='password' value={pass} onChange={(e) => setPass(e.target.value)} />
        
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleSessionCheck}>Check Session</button>
      </form>
    </div>
  );
}

export default App;
