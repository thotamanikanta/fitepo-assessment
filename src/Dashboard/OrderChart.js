import { alpha } from "@mui/system";
import React from "react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

const data = [
  { name: "Earning", value: 70, color: "#039092" },
  { name: "Pending", value: 30, color: alpha("#039092", "0.8") },
];

const OrderChart = () => {
  return (
    <ResponsiveContainer height={120}>
      <PieChart>
        <text
          x="50%"
          fontSize={16}
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#000"
        >
          1800
        </text>
        <Pie
          data={data}
          dataKey="value"
          cx={"50%"}
          cy={"50%"}
          innerRadius={40}
          outerRadius={60}
          fill="#8884d8"
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default OrderChart;
