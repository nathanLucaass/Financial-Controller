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

  const totalEntrada = calculateTotal(bills);
  const totalSaida = calculateTotal(earnings);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString('pt-BR', options);
  };

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
              {bills.map((bill) => (
                <li key={bill.id} className="flex justify-between py-2">
                  <span>{formatDate(bill.date)}</span>
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
              {earnings.map((earning) => (
                <li key={earning.id} className="flex justify-between py-2">
                  <span>{formatDate(earning.date)}</span>
                  <span>{earning.description}</span>
                  <span>{earning.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </main>
      )}
    </div>
  );
}

export default DailyResume;
