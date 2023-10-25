const userRegisterAPI = async (username, email, password) => {
  const response = await fetch('http://localhost:3001/user/new', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, email, password }),
  });

  const responseBody = await response.json();

  return responseBody;
};

export default userRegisterAPI;