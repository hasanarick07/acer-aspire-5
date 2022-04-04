import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const LineChartData = ({ data }) => {
  console.log(data);
  const [month, sell] = data;
  return (
    <div className="bg-violet-100 p-1">
      <h1>Month Vs Sell</h1>
      <LineChart
        width={530}
        height={250}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="sell" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default LineChartData;
