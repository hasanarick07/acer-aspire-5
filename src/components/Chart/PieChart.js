import React from "react";
import { Pie, PieChart } from "recharts";

const PieChartData = ({ data }) => {
  const { investment, revenue } = data;
  return (
    <div className="bg-violet-100 p-2">
      <h1>Investment Vs Revenue</h1>
      <PieChart
        width={330}
        height={250}
        margin={{ top: 5, right: 0, left: 20, bottom: 5 }}
      >
        <Pie
          data={data}
          dataKey="investment"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={50}
          fill="#8884d8"
        />
        <Pie
          data={data}
          dataKey="revenue"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#82ca9d"
          label
        />
      </PieChart>
    </div>
  );
};

export default PieChartData;
