const getAllBills = async (idUser) => {
  const bills = await fetch(`http://localhost:3001/bill/${idUser}`);
  const responseBody = await bills.json();
  return responseBody;
};

export default getAllBills;