import React, { useEffect, useState, useContext, useRef } from "react";
import Chart from "chart.js/auto";
import myContext from "../../context/myContext";

const OrdersPerDayChart = () => {
  const context = useContext(myContext);
  const { getAllOrder } = context;
  const [ordersPerDay, setOrdersPerDay] = useState({});
  const ordersPerDayChartRef = useRef(null);

  useEffect(() => {
    const calculateOrdersPerDay = () => {
      const tempOrdersPerDay = {};
      getAllOrder.forEach((order) => {
        const date = order.date.split(" ")[0];
        if (tempOrdersPerDay[date]) {
          tempOrdersPerDay[date]++;
        } else {
          tempOrdersPerDay[date] = 1;
        }
      });
      setOrdersPerDay(tempOrdersPerDay);
    };
    calculateOrdersPerDay();
  }, [getAllOrder]);

  useEffect(() => {
    if (ordersPerDayChartRef.current && ordersPerDayChartRef.current.chart) {
      ordersPerDayChartRef.current.chart.destroy();
    }
    const ctx = ordersPerDayChartRef.current.getContext("2d");
    ordersPerDayChartRef.current.chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: Object.keys(ordersPerDay),
        datasets: [
          {
            label: "Orders Per Day",
            data: Object.values(ordersPerDay),
            backgroundColor: "rgba(75, 192, 192, 0.6)",
            borderColor: "rgba(75, 192, 192, 1)",
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
  }, [ordersPerDay]);

  return <canvas ref={ordersPerDayChartRef} width="200" height="100"></canvas>;
};

export default OrdersPerDayChart;
