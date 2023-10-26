const getAllEarnings = async (idUser) => {
  const earnings = await fetch(`http://localhost:3001/earning/${idUser}`);
  const responseBody = await earnings.json();
  return responseBody;
};

export default getAllEarnings;
