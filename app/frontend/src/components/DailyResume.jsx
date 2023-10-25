import React from 'react';
import UserInfoContext from '../context/UserInfoContext';
import { useHistory } from 'react-router-dom'; 
import { useContext } from 'react';

function DailyResume() {
  const { bills, setBills, isLoading } = useContext(UserInfoContext);

  // Função para formatar a data
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString('pt-BR', options);
  };

  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h2>Daily Resume</h2>
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
      )}
    </div>
  );
}

export default DailyResume;
