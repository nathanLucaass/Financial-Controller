import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom'; 
import callLoginApi from '../services/loginAPI';
import UserInfoContext from '../context/UserInfoContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); 
  const history = useHistory(); 

  const {setUserId, setUserToken} = useContext(UserInfoContext);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await callLoginApi(email, password);
    console.log(response);
    if (response.message === 'User not found' || response.message === 'Invalid password') {
      console.log('error');
      setError(response.message);
    } else {
      setUserId(response.userId);
      setUserToken(response.token);

      history.push('/home');
    }
  };

  return (
    <div className='bg-red-500'>
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      <button type="submit">Login</button>
      <h3>{error}</h3>
      <a href="/register">Ainda não possuo cadastro</a>
    </form>
    </div>
  );
}

export default Login;