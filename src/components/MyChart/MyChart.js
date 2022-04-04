import React from "react";
import { BarChart,Tooltip, Bar, Legend, CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import './MyChart.css'

const MyChart = () => {
  const data = [
    {
      month: "Mar",
      investment: 100000,
      sell: 241,
      revenue: 10401,
    },
    {
      month: "Apr",
      investment: 200000,
      sell: 423,
      revenue: 24500,
    },
    {
      month: "May",
      investment: 500000,
      sell: 726,
      revenue: 67010,
    },
    {
      month: "Jun",
      investment: 500000,
      sell: 529,
      revenue: 40405,
    },
    {
      month: "Jul",
      investment: 600000,
      sell: 601,
      revenue: 50900,
    },
    {
      month: "Aug",
      investment: 700000,
      sell: 670,
      revenue: 61000,
    },
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${label} : ${payload[0].value}`}</p>
         
        </div>
      );
    }
  };

  return (
    <div>
      <div className="chart-container">
        <div className="line-chart1">
          <h1 className="header-chart">Investment VS Revenue</h1>
          <LineChart width={500} height={400} data={data}>
            <Line dataKey={"revenue"}></Line>
            <Line dataKey={"investment"}></Line>
            <XAxis dataKey={"month"}></XAxis>
            <YAxis dataKey={""}></YAxis>
          </LineChart>
        </div>
        <div className="line-chart2">
          <h1 className="header-chart">Investment VS Revenue</h1>
          <BarChart
            width={700}
            height={500}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3  3"></CartesianGrid>
            <XAxis dataKey={"month"}></XAxis>
            <YAxis dataKey={"investment"}></YAxis>
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar dataKey="investment" barSize={20} fill="#8884d8" />
            <Bar dataKey="revenue" barSize={20} fill="#00FF00" />
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default MyChart;
