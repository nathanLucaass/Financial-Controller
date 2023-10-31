import React, { useContext, useEffect, useState } from "react";
import { getAllBills, postBill } from "../services/billsService";
import UserInfoContext from "../context/UserInfoContext";
import SideBar from "../components/SideBar";

function BillsPage() {
  const [unformattedDate, setUnformattedDate] = useState("");
  const [description, setDescription] = useState("");
  const [valueString, setValueString] = useState("");
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
    const [year, month, day] = date.split("-");
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
    <div className="flex relative bg-slate-100">
      <SideBar className="fixed h-full" />
      <div className="shadow-lg mx-10 text-center p-4 bg-white rounded-lg">
        <h1 className="text-3xl text-blue-500 font-medium rounded-t-lg py-3">
          Nova Saída
        </h1>
        <form>
          <div className="mb-4">
            <label htmlFor="date-input" className="block text-lg font-semibold text-blue-500">
              Data:
            </label>
            <input
              id="date-input"
              className="w-full px-4 py-3 border shadow rounded-b-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="date"
              value={unformattedDate}
              onChange={handleDateChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="description-input" className="block text-lg font-semibold text-blue-500">
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

          <div className="mb-4">
            <label htmlFor="value-input" className="block text-lg font-semibold text-blue-500">
              Valor:
            </label>
            <input
              id="value-input"
              className="w-full px-4 py-3 border shadow rounded-b-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="number"
              value={valueString}
              onChange={handleValueChange}
            />
          </div>

          <button
            className="bg-blue-500 text-white px-4 text-xl py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            style={{ height: "50px" }}
            type="submit"
            onClick={handleSubmit}
          >
            Enviar
          </button>
        </form>
      </div>
      <div className="mt-3 mx-auto border rounded-md shadow-2xl bg-white w-4/6 h-4/5 text-center flex">
        <div className="flex-1">
          <h2 className="text-3xl mt-3 p-1 font-semibold mb-3 text-blue-500 pt ">
            Saídas
          </h2>
          {isLoadingBills ? (
            <div className="text-center mt-3">
              <h2 className="text-xl font-semibold">Carregando...</h2>
            </div>
          ) : (
            <div>
              <div className="relative overflow-x-auto text-center sm:rounded-lg mt-3 pb-4">
                <table className="w-full font text-xl text-gray-500 dark:text-gray-400">
                  <thead className="bg-blue-500 text-white">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Data
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Descrição
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Valor
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {bills.map((bill) => (
                      <tr key={bill.id} className="bg-white border-b border-blue-500">
                        <td className="px-6 py-4 text-gray-900 whitespace-nowrap">
                          {bill.date}
                        </td>
                        <td className="px-6 py-4 text-gray-900 whitespace-nowrap">
                          {bill.description}
                        </td>
                        <td className="px-6 py-4 text-gray-900 whitespace-nowrap">
                          R$ {bill.value.toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="p-4 rounded-lg">
                  <h1 className="text-right text-3xl">
                    <span className="border shadow-2xl border-blue-500 p-1 bg-blue-500 text-white rounded-l-md">
                      Total:
                    </span>
                    <span className="border shadow-2xl border-blue-500 p-1 rounded-r-md">
                      R$: {totalBills.toFixed(2)}
                    </span>
                  </h1>
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
