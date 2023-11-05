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
    <div className="bg-white mx-auto rounded-t-lg shadow">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
            <div className="">
              <h2 className="text-2xl font-semibold rounded-t-lg text-center text-white bg-blue-500">Balanço Geral</h2><main >
            <div className="text-center mb-4">
            </div>
            <div className="p-2 rounded">
              <h2 className="text-lg font-semibold border border-blue-500 w-3/5 rounded-l">
                <span className="bg-blue-500 p-1 text-white rounded-l">
                Saldo:
                </span>
                {' '}
                 R$ {saldo.toFixed(2)}
              </h2>
            </div>
          </main>
          </div>
      )}
      <div className="p-4">
      <ResponsiveContainer className="mt-3 border-t border-blue-500 py-2" width={350} height={300}>
        <PieChart className="mt-2">
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
    </div>
  );
}

export default TotalResume;
