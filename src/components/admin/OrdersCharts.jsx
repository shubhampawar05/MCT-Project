import React from "react";
import OrdersPerDayChart from "./OrdersPerDayChart";
import OrdersByCategoryChart from "./OrdersByCategoryChart";
import TotalSalesPerDayChart from "./TotalSalesPerDayChart";
import OrdersByUserChart from "./OrdersByUserChart";

const OrdersCharts = () => {
  return (
    <div className="flex  flex-col my-12 gap-12" >
     <div className=" md:w-1/2 md:flex gap-1">
     <OrdersPerDayChart />
      <OrdersByCategoryChart />
     </div>
      <div  className='md:w-1/2 md:flex gap-1'>
      <TotalSalesPerDayChart />
      <OrdersByUserChart />
      </div>
    </div>
  );
};

export default OrdersCharts;
