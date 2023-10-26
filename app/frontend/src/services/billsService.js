const getAllBills = async (idUser) => {
  const bills = await fetch(`http://localhost:3001/bill/${idUser}`);
  const responseBody = await bills.json();
  return responseBody;
};


const postBill = async (date, description, value, user_id) => {
  const response = await fetch('http://localhost:3001/bill/new', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ date, description, value, user_id }),
  });
  

  const responseBody = await response.json();

  return responseBody;
}
export {getAllBills, postBill};
