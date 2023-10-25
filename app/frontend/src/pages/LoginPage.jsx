import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import callLoginApi from '../services/loginAPI';
import UserInfoContext from '../context/UserInfoContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const { setUserId, setUserToken } = useContext(UserInfoContext);

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
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-4 max-w-md mx-auto border rounded shadow">
        <form onSubmit={handleSubmit}>
          <div className="text-center mb-4">
            <img src="https://i.ibb.co/0FVRL61/Financial.png" width={100} className="mx-auto" alt="Logo" />
          </div>
          <label htmlFor="email-input">
            Email:
            <input id="email-input" className="block w-full mt-2 p-2 border rounded" type="email" value={email} onChange={handleEmailChange} />
          </label>
          <br />
          <label htmlFor="password-input">
            Password:
            <input id="password-input" className="block w-full mt-2 p-2 border rounded" type="password" value={password} onChange={handlePasswordChange} />
          </label>
          <br />
          <button className="block w-full bg-blue-500 text-white mt-4 p-2 rounded" type="submit">
            Login
          </button>
          <h3 className="text-red-500 mt-2 text-center">{error}</h3>
          <a className="mt-2 block text-blue-500 text-center" href="/register">
            Ainda não possuo cadastro
          </a>
        </form>
      </div>
    </div>
  );
}

export default Login;
