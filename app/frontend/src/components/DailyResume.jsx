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
    totalEntrada = calculateTotal(todayBills);
    totalSaida = calculateTotal(todayEarnings);
    saldo = totalEntrada - totalSaida;
  }

  return (
    <div className="bg-white p-4 max-w-md mx-auto border rounded shadow">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <main>
          <div className="text-center mb-4">
            <h2 className="text-2xl font-semibold">Resumo Diário</h2>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Entrada</h2>
            <p className="font-semibold">
              Total da Entrada: R$
              {' '}
              {totalEntrada}
            </p>
            <ul>
              <li className="flex justify-between border-b py-2">
                <span>Data</span>
                <span>Descrição</span>
                <span>Valor</span>
              </li>
              {todayBills.map((bill) => (
                <li key={bill.id} className="flex justify-between py-2">
                  <span>{bill.date}</span>
                  <span>{bill.description}</span>
                  <span>{bill.value}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Saída</h2>
            <p className="font-semibold">
              Total da Saída: R$
              {' '}
              {totalSaida}
            </p>
            <ul>
              <li className="flex justify-between border-b py-2">
                <span>Data</span>
                <span>Descrição</span>
                <span>Valor</span>
              </li>
              {todayEarnings.map((earning) => (
                <li key={earning.id} className="flex justify-between py-2">
                  <span>{earning.date}</span>
                  <span>{earning.description}</span>
                  <span>
                    R$
                    {' '}
                    {earning.value.toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Saldo</h2>
            <p className="font-semibold">
              Saldo: R$
              {' '}
              {saldo.toFixed(2)}
            </p>
          </div>
        </main>
      )}
    </div>
  );
}

export default DailyResume;
