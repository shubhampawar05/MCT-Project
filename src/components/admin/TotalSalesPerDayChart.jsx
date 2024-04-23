import React, { useEffect, useState, useContext, useRef } from "react";
import Chart from "chart.js/auto";
import myContext from "../../context/myContext";

const TotalSalesPerDayChart = () => {
  const context = useContext(myContext);
  const { getAllOrder } = context;
  const [totalSalesPerDay, setTotalSalesPerDay] = useState({});
  const totalSalesPerDayChartRef = useRef(null);

  useEffect(() => {
    const calculateTotalSalesPerDay = () => {
      const tempTotalSalesPerDay = {};
      getAllOrder.forEach((order) => {
        const date = order.date.split(" ")[0];
        const amount = parseInt(order.cartItems[0].price, 10);
        if (tempTotalSalesPerDay[date]) {
          tempTotalSalesPerDay[date] += amount;
        } else {
          tempTotalSalesPerDay[date] = amount;
        }
      });
      setTotalSalesPerDay(tempTotalSalesPerDay);
    };
    calculateTotalSalesPerDay();
  }, [getAllOrder]);

  useEffect(() => {
    if (totalSalesPerDayChartRef.current && totalSalesPerDayChartRef.current.chart) {
      totalSalesPerDayChartRef.current.chart.destroy();
    }
    const ctx = totalSalesPerDayChartRef.current.getContext("2d");
    totalSalesPerDayChartRef.current.chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: Object.keys(totalSalesPerDay),
        datasets: [
          {
            label: "Total Sales Per Day",
            data: Object.values(totalSalesPerDay),
            fill: false,
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, [totalSalesPerDay]);

  return <canvas ref={totalSalesPerDayChartRef} width="400" height="200"></canvas>;
};

export default TotalSalesPerDayChart;
