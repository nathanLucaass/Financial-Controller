import React, { useContext, useEffect, useState } from "react";
import UserInfoContext from "../context/UserInfoContext";
import SideBar from "../components/SideBar";
import { getAllEarnings, postEarning } from "../services/earningsService";

function EarningsPage() {
  const [unformattedDate, setUnformattedDate] = useState("");
  const [description, setDescription] = useState("");
  const [valueString, setValueString] = useState(0);
  const [totalEarnings, setTotalEarnings] = useState(0);

  const { userId } = useContext(UserInfoContext);
  const { setIsLoading, earnings, setEarnings } = useContext(UserInfoContext);
  const [isLoadingBills, setIsLoadingBills] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    async function fetchData() {
      const responseBills = await getAllEarnings(userId);
      setEarnings(responseBills);
      setIsLoadingBills(false);
      setIsLoading(false);
    }

    fetchData();
  }, [setEarnings]);

  const getTotalEarnings = () => {
    const total = earnings.reduce((acc, curr) => acc + curr.value, 0);
    setTotalEarnings(total);
  };

  useEffect(() => {
    getTotalEarnings();
  }, [earnings]);

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
    const response = await postEarning(date, description, value, user_id);
    console.log(response);
    setIsLoadingBills(true);
    const responseBills = await getAllEarnings(userId);
    setEarnings(responseBills);
    setIsLoadingBills(false);
  };

  return (
    <div className="flex relative bg-slate-100">
      <SideBar className="fixed h-full" />
      <div className="bg-white p-4 mx-auto border rounded shadow text-center flex">
        <div className="flex-1">
          <h2 className="text-3xl font-semibold mb-5">Entrada</h2>
          {isLoadingBills ? (
            <div className="text-center mt-4">
              <h2 className="text-xl font-semibold">Carregando...</h2>
            </div>
          ) : (
            <div>
              <h1 className="text-right text-3xl">
                Entradas Totais: R${totalEarnings}
              </h1>
              <h1 className="text-3xl mb-3">Nova Entrada</h1>
              <form className="flex">
                <label
                  htmlFor="date-input"
                  className="block text-lg font-semibold mr-4"
                >
                  Data:
                  <input
                    id="date-input"
                    className="ml-2 p-2 border rounded"
                    type="date"
                    value={unformattedDate}
                    onChange={handleDateChange}
                  />
                </label>

                <label
                  htmlFor="description-input"
                  className="block text-lg font-semibold mr-4"
                >
                  Descrição:
                  <input
                    id="description-input"
                    className="ml-2 p-2 border rounded"
                    type="text"
                    value={description}
                    onChange={handleDescriptionChange}
                  />
                </label>

                <label
                  htmlFor="value-input"
                  className="block text-lg font-semibold mr-4"
                >
                  Valor:
                  <input
                    id="value-input"
                    className="ml-2 p-2 border rounded"
                    type="number"
                    value={valueString}
                    onChange={handleValueChange}
                  />
                </label>

                <button
                  className="ml-4 bg-blue-500 text-white p-2 rounded"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Enviar
                </button>
              </form>

              <table className="w-full mt-4">
                <thead>
                  <tr>
                    <th className="p-2 border font-semibold">Date</th>
                    <th className="p-2 border font-semibold">Description</th>
                    <th className="p-2 border font-semibold">Value</th>
                  </tr>
                </thead>
                <tbody>
                  {earnings.map((earning) => (
                    <tr key={earning.id}>
                      <td className="p-2 border">{earning.date}</td>
                      <td className="p-2 border">{earning.description}</td>
                      <td className="p-2 border">
                        R$ {earning.value.toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default EarningsPage;
