import React from "react";
import OrdersPerDayChart from "./OrdersPerDayChart";
import OrdersByCategoryChart from "./OrdersByCategoryChart";
import TotalSalesPerDayChart from "./TotalSalesPerDayChart";
import OrdersByUserChart from "./OrdersByUserChart";

const OrdersCharts = () => {
  return (
    <div>
      <OrdersPerDayChart />
      <OrdersByCategoryChart />
      <TotalSalesPerDayChart />
      <OrdersByUserChart />
    </div>
  );
};

export default OrdersCharts;
