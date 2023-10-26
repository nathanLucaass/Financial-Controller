const getAllEarnings = async (idUser) => {
  const earnings = await fetch(`http://localhost:3001/earning/${idUser}`);
  const responseBody = await earnings.json();
  return responseBody;
};

const postEarning = async (date, description, value, user_id) => {
  const response = await fetch('http://localhost:3001/earning/new', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ date, description, value, user_id }),
  });
  

  const responseBody = await response.json();

  return responseBody;
};

export {getAllEarnings, postEarning};
