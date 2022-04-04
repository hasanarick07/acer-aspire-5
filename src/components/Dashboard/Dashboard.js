import React, { useEffect, useState } from "react";
import AreaChartData from "../Chart/AreaChart";
import BarChartData from "../Chart/BarChart";
import LineChartData from "../Chart/LineChart";
import PieChartData from "../Chart/PieChart";

const Dashboard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);
  return (
    <div className="grid grid-cols-2 gap-10">
      {<LineChartData data={data}></LineChartData>}
      {<AreaChartData data={data}></AreaChartData>}
      {<PieChartData data={data}></PieChartData>}
      {<BarChartData data={data}></BarChartData>}
    </div>
  );
};

export default Dashboard;
