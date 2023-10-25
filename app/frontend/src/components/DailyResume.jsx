import React, { useContext } from 'react';
import UserInfoContext from '../context/UserInfoContext';

function DailyResume() {
  const { bills, earnings, isLoading } = useContext(UserInfoContext);

  const calculateTotal = (items) => {
    return items.reduce((total, item) => total + item.value, 0);
  };

  const totalEntrada = calculateTotal(bills);
  const totalSaida = calculateTotal(earnings);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString('pt-BR', options);
  };

  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <main>
          <div>
            <h2>Entrada</h2>
            <p>Total da Entrada: R$ {totalEntrada}</p>
            <ul>
              <li>
                <span>Data</span>
                <span>Descrição</span>
                <span>Valor</span>
              </li>
              {bills.map((bill) => (
                <li key={bill.id}>
                  <span>{formatDate(bill.date)}</span>
                  <span>{bill.description}</span>
                  <span>{bill.value}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Saída</h2>
            <p>Total da Saída: R$ {totalSaida}</p>
            <ul>
              <li>
                <span>Data</span>
                <span>Descrição</span>
                <span>Valor</span>
              </li>
              {earnings.map((earning) => (
                <li key={earning.id}>
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
