import React, { useContext } from 'react';
import UserInfoContext from '../context/UserInfoContext';

function DailyResume() {
  const { bills, earnings, isLoading } = useContext(UserInfoContext);

  const calculateTotal = (items) => {
    if (items && Array.isArray(items)) {
      return items.reduce((total, item) => total + item.value, 0);
    }
    return 0;
  };

  function formatDateToDDMMYYYY(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }

  const liveDate = new Date();
  const formattedDate = formatDateToDDMMYYYY(liveDate);

  let todayBills = [];
  let todayEarnings = [];
  let totalEntrada = 0;
  let totalSaida = 0;
  let saldo = 0;

  if (!isLoading) {
    todayBills = bills.filter((bill) => bill.date === formattedDate);
    todayEarnings = earnings.filter((earning) => earning.date === formattedDate);
    totalEntrada = calculateTotal(todayEarnings);
    totalSaida = calculateTotal(todayBills);
    saldo = totalEntrada - totalSaida;
  }

  return (
    <div className="bg-white mx-auto w-96 border rounded-t-lg shadow">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <main>
          <div className="text-center rounded-t-lg bg-blue-500 text-white p-0 mb-4">
            <h2 className="text-2xl font-semibold ">Resumo Diário</h2>
          </div>
          <div className='p-4'>
            <h2 className="text-2xl mb-2 font-semibold">Entrada</h2>
            <p className="font-semibold text-lg text-center">
              Total da Entrada: R$
              {' '}
              <span className='text-green-500'>
              {totalEntrada.toFixed(2)}
              </span>
            </p>
            <ul>
              <li className="flex justify-between border-b border-blue-500 bg py-2">
                <span>Data</span>
                <span>Descrição</span>
                <span>Valor</span>
              </li>
              {todayBills.map((bill) => (
                <li key={bill.id} className="flex justify-between py-2">
                  <span>{bill.date}</span>
                  <span>{bill.description}</span>
                  <span>{bill.value.toFixed(2)}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4 p-4 ">
            <h2 className="text-2xl mb-2 font-semibold">Saída</h2>
            <p className="font-semibold text-lg text-center">
              Total da Saída: R$
              {' '}
              <span className='text-red-500'>
              {totalSaida.toFixed(2)}
              </span>
            </p>
            <ul>
              <li className="flex justify-between border-b border-blue-500 py-2">
                <span>Data</span>
                <span>Descrição</span>
                <span>Valor</span>
              </li>
              {todayEarnings.map((earning) => (
                <li key={earning.id} className="flex justify-between py-2">
                  <span>{earning.date}</span>
                  <span>{earning.description}</span>
                  <span className='text-red'>
                    R$
                    {' '}
                    {earning.value.toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4 rounded-l p-4">
            <p className="text-lg font-semibold border border-blue-500 w-3/5 rounded-l">
              <span className='bg-blue-500 p-1 text-white rounded-l'>
              Saldo:
              </span>
              {' '}
              R$ {saldo.toFixed(2)}
            </p>
          </div>
        </main>
      )}
    </div>
  );
}

export default DailyResume;
