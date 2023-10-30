import { getAllEarnings } from "./earningsService"
import { getAllBills } from "./billsService"

const Last7DaysBalance = async (userId) => {
  const days = {};

  // Obtenha a data atual
  const unformattedToday = new Date();
  const today = new Date(
    unformattedToday.getFullYear(),
    unformattedToday.getMonth(),
    unformattedToday.getDate()
  );

  const bills = await getAllBills(userId);
  const earnings = await getAllEarnings(userId);
  for (let i = 0; i < 7; i++) {
    // Calcule a data para o dia atual - i
    const date = new Date(today);
    date.setDate(today.getDate() - i);

    // Formate a data no formato desejado (dd/mm/yyyy)
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;

    // Aqui você deve calcular o saldo para a data atual e atribuí-lo ao objeto days
    // Por enquanto, vou apenas definir a data formatada no objeto
    let balance = 0;
    const getBalance = () => {
      for (let i = 0; i < bills.length; i++) {
        if (bills[i].date === formattedDate) {
          balance -= bills[i].value;
        }
      }
      for (let i = 0; i < earnings.length; i++) {
        if (earnings[i].date === formattedDate) {
          balance += earnings[i].value;
        }
      }
    }
    getBalance();
    days[formattedDate] = balance;
  }

  return days;
};




Last7DaysBalance().then((result) => {
  console.log(result);
});


export { Last7DaysBalance} 
