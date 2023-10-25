import React, { useState } from 'react';
import userRegisterAPI from '../services/userRegisterAPI';

function UserRegisterPage() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    userRegisterAPI(userName, email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        User Name:
        <input type="text" value={userName} onChange={(event) => setUserName(event.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </label>
      <button type="submit">Register</button>
    </form>
  );
}

export default UserRegisterPage;
