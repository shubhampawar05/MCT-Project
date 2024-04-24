import React, { useEffect, useState, useContext, useRef } from "react";
import Chart from "chart.js/auto";
import myContext from "../../context/myContext";

const OrdersByCategoryChart = () => {
  const context = useContext(myContext);
  const { getAllOrder } = context;
  const [ordersByCategory, setOrdersByCategory] = useState({});
  const ordersByCategoryChartRef = useRef(null);

  useEffect(() => {
    const calculateOrdersByCategory = () => {
      const tempOrdersByCategory = {};
      getAllOrder.forEach((order) => {
        const category = order.cartItems[0].category;
        if (tempOrdersByCategory[category]) {
          tempOrdersByCategory[category]++;
        } else {
          tempOrdersByCategory[category] = 1;
        }
      });
      setOrdersByCategory(tempOrdersByCategory);
    };
    calculateOrdersByCategory();
  }, [getAllOrder]);

  useEffect(() => {
    if (ordersByCategoryChartRef.current && ordersByCategoryChartRef.current.chart) {
      ordersByCategoryChartRef.current.chart.destroy();
    }
    const ctx = ordersByCategoryChartRef.current.getContext("2d");
    ordersByCategoryChartRef.current.chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: Object.keys(ordersByCategory),
        datasets: [
          {
            label: "Orders By Category",
            data: Object.values(ordersByCategory),
            backgroundColor: "rgba(54, 162, 235, 0.6)",
            borderColor: "rgba(54, 162, 235, 1)",
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
  }, [ordersByCategory]);

  return <canvas ref={ordersByCategoryChartRef} width="200" height="100"></canvas>;
};

export default OrdersByCategoryChart;
