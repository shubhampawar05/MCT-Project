import React, { useEffect, useState, useContext, useRef } from "react";
import Chart from "chart.js/auto";
import myContext from "../../context/myContext";

const OrdersByUserChart = () => {
  const context = useContext(myContext);
  const { getAllOrder } = context;
  const [ordersByUser, setOrdersByUser] = useState({});
  const ordersByUserChartRef = useRef(null);

  useEffect(() => {
    const calculateOrdersByUser = () => {
      const tempOrdersByUser = {};
      getAllOrder.forEach((order) => {
        const email = order.email;
        if (tempOrdersByUser[email]) {
          tempOrdersByUser[email]++;
        } else {
          tempOrdersByUser[email] = 1;
        }
      });
      setOrdersByUser(tempOrdersByUser);
    };
    calculateOrdersByUser();
  }, [getAllOrder]);

  useEffect(() => {
    if (ordersByUserChartRef.current && ordersByUserChartRef.current.chart) {
      ordersByUserChartRef.current.chart.destroy();
    }
    const ctx = ordersByUserChartRef.current.getContext("2d");
    ordersByUserChartRef.current.chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: Object.keys(ordersByUser),
        datasets: [
          {
            label: "Orders By User",
            data: Object.values(ordersByUser),
            backgroundColor: "rgba(255, 205, 86, 0.6)",
            borderColor: "rgba(255, 205, 86, 1)",
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
  }, [ordersByUser]);

  return <canvas ref={ordersByUserChartRef} width="400" height="200"></canvas>;
};

export default OrdersByUserChart;
