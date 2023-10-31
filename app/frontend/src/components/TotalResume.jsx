import React, { useContext } from "react";
import UserInfoContext from "../context/UserInfoContext";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

function TotalResume() {
  const { bills, earnings, isLoading } = useContext(UserInfoContext);

  const calculateTotal = (items) => {
    if (items && Array.isArray(items)) {
      return items.reduce((total, item) => total + item.value, 0);
    }
    return 0;
  };

  const totalEntrada = calculateTotal(earnings);
  const totalSaida = calculateTotal(bills);
  const saldo = totalEntrada - totalSaida;

  const data = [
    { name: "Entrada", value: totalEntrada },
    { name: "Saída", value: totalSaida },
  ];

  const COLORS = ["#00C49F", "#FF8042"];

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    payload,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    const xOffset = (x - cx) * -0.2;
    const yOffset = (y - cy) * -0.2;

    return (
      <text
        x={x + xOffset}
        y={y + yOffset}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`R$ ${payload.value.toFixed(2)}`}
      </text>
    );
  };

  const RADIAN = Math.PI / 180;

  return (
    <div className="bg-white p-4 mx-auto  border rounded shadow">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <main className="border-b py-2">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-semibold">Balanço Geral</h2>
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-semibold">
              Saldo: R$ {saldo.toFixed(2)}
            </h2>
          </div>
        </main>
      )}
      <ResponsiveContainer width={350} height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default TotalResume;
