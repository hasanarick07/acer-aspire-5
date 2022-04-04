import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const BarChartData = ({ data }) => {
  const { month, investment, revenue } = data;
  return (
    <div className="bg-violet-100 p-2">
      <h1>Investment Vs Revenue</h1>
      <BarChart
        width={330}
        height={250}
        data={data}
        margin={{ top: 5, right: 0, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="investment" fill="#8884d8" />
        <Bar dataKey="revenue" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default BarChartData;
