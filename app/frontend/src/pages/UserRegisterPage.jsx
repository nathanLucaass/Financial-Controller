import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import userRegisterAPI from '../services/userRegisterAPI';

function UserRegisterPage() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    userRegisterAPI(userName, email, password);
    history.push('/');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-4 max-w-md mx-auto border rounded shadow">
        <form onSubmit={handleSubmit}>
          <div className="text-center mb-4">
            <h2 className="text-2xl font-semibold">User Registration</h2>
          </div>
          <label htmlFor="userName">
            User Name:
            <input
              type="text"
              id="userName"
              value={userName}
              onChange={(event) => setUserName(event.target.value)}
              className="block w-full mt-2 p-2 border rounded"
            />
          </label>
          <br />
          <label htmlFor="email">
            Email:
            <input
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="block w-full mt-2 p-2 border rounded"
            />
          </label>
          <br />
          <label htmlFor="password">
            Password:
            <input
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="block w-full mt-2 p-2 border rounded"
            />
          </label>
          <br />
          <button
            type="submit"
            className="block w-full bg-blue-500 text-white mt-4 p-2 rounded"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserRegisterPage;
