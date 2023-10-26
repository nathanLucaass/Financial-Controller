const callLoginAPI = async (email, password) => {
  const response = await fetch('http://localhost:3001/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  const responseBody = await response.json();

  return responseBody;
};

export default callLoginAPI;
