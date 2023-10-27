import React, { useContext, useEffect, useState } from 'react';
import { getAllBills, postBill } from '../services/billsService';
import UserInfoContext from '../context/UserInfoContext';
import SideBar from '../components/SideBar';

function BillsPage() {
  const [unformattedDate, setUnformattedDate] = useState('');
  const [description, setDescription] = useState('');
  const [valueString, setValueString] = useState(0);
  const [totalBills, setTotalBills] = useState(0);

  const { userId } = useContext(UserInfoContext);
  const { setIsLoading, setBills, bills } = useContext(UserInfoContext);
  const [isLoadingBills, setIsLoadingBills] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    async function fetchData() {
      const responseBills = await getAllBills(userId);
      setBills(responseBills);
      setIsLoadingBills(false);
      setIsLoading(false);
    }
    getTotalBills();
    fetchData();
  }, [setBills]);

  const getTotalBills = () => {
    const total = bills.reduce((acc, curr) => acc + curr.value, 0);
    setTotalBills(total);
  };

  const handleDateChange = (event) => {
    setUnformattedDate(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const handleValueChange = (event) => {
    setValueString(event.target.value);
  };

  const formatDateToDDMMYYYY = (date) => {
    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year}`;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const date = formatDateToDDMMYYYY(unformattedDate);
    const user_id = userId;
    const value = Number(valueString);
    const response = await postBill(date, description, value, user_id);
    console.log(response);
    setIsLoadingBills(true);
    const responseBills = await getAllBills(userId);
    setBills(responseBills);
    setIsLoadingBills(false);
  };

  return (
    <div className='flex relative bg-slate-100'>
      <SideBar className='fixed h-full'/>
    <div className="bg-white mt-3 mx-auto border rounded-md shadow-2xl text-center flex">  
      <div className="flex-1 rounded">
        <h2 className="text-3xl p-1 font-semibold mb-5 bg-blue-500 pt text-white shadow rounded-t-md ">Saida</h2>
        {isLoadingBills ? (
          <div className="text-center mt-4">
            <h2 className="text-xl font-semibold">Carregando...</h2>
          </div>
        ) : (
          <div className='p-4'>
            <div className='p-4 rounded-lg'>
              <h1 className='text-right text-3xl'>
                <span className='border border-blue-500 p-1 bg-blue-500 text-white rounded-l-md'> Total:</span>
                <span className='border border-blue-500 p-1 rounded-r-md'>
                  R$:{totalBills.toFixed(2)}
                </span>
              </h1>
            </div> 
            <div>
                <div className='shadow-lg rounded'>
                <h1 className='text-3xl text-blue-500 font-medium rounded-t '>Nova Saida</h1>
                <form className="p-4 bg-white rounded-lg flex space-x-4">
  <div className="flex-1">
  <label htmlFor="date-input" className="block rounded-t-lg bg-blue-500 text-lg font-semibold text-white">      Data:
    </label>
    <input
      id="date-input"
      className="w-full px-4 py-3 border shadow rounded-b-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      type="date"
      value={unformattedDate}
      onChange={handleDateChange}
    />
  </div>
  
  <div className="flex-1">
    <label htmlFor="description-input" className="block rounded-t-lg bg-blue-500 text-lg font-semibold text-white">
      Descrição:
    </label>
    <input
      id="description-input"
      className="w-full px-4 py-3 border shadow rounded-b-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      type="text"
      value={description}
      onChange={handleDescriptionChange}
    />
  </div>
  
  <div className="flex-1">
    <label htmlFor="value-input" className="block rounded-t-lg bg-blue-500 text-lg font-semibold text-white">
      Valor:
    </label>
    <input
      id="value-input"
      className="w-full px-4 py-3 shadow border rounded-b-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      type="number"
      value={valueString}
      onChange={handleValueChange}
    />
  </div>
  
  <button
    className="bg-blue-500 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
    type="submit"
    onClick={handleSubmit}
  >
    Enviar
  </button>
</form>

                </div>
                <div className="relative overflow-x-auto shadow-xl sm:rounded-lg mt-5 pb-4">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-white uppercase bg-blue-500 ">
                    <tr>
                      <th scope="col" className="px-6 py-3">Date</th>
                      <th scope="col" className="px-6 py-3">Descrição</th>
                      <th scope="col" className="px-6 py-3">Valor</th>
                    </tr>
                  </thead>
                  <tbody className='text-2xl'>
                    {bills.map((bill) => (
                      <tr key={bill.id} className="bg-white border-b border-blue-500">
                        <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">{bill.date}</td>
                        <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">{bill.description}</td>
                        <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">R$ {bill.value.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                </div>
              </div>
          </div>
        )}
      </div>
    </div>
    </div>
  );
}

export default BillsPage;
