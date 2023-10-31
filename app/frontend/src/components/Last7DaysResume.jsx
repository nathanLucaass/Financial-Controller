import React, { useContext, useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import UserInfoContext from "../context/UserInfoContext";
import { Last7DaysBalance } from "../services/Last7DaysBallance";

const Example = () => {
  const { userId } = useContext(UserInfoContext);
  const [lest7DaysBalance, setLest7DaysBalance] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await Last7DaysBalance(userId);
      console.log(response);
      setLest7DaysBalance(response);
    };
    fetchData();
  }, [setLest7DaysBalance]);
  console.log(lest7DaysBalance);

  const dataTotal = Object.entries(lest7DaysBalance).map(([date, value]) => ({
    name: date,
    total: value,
  }));
  console.log(dataTotal);

  return (
    <div className="bg-white p-4 mx-auto border rounded shadow">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-semibold">Resumo dos últimos sete dias</h2>
      </div>
      <ResponsiveContainer width={800} height={300}>
        <BarChart
          data={dataTotal}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="total" stackId="a" fill="#3B82F6" />
          <ReferenceLine y={0} stroke="black"/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Example;
