import React, { useState, useContext } from "react";
import "../assets/css/general.css";
import status_card from "../assets/json/status-card-data.json";
import Chart from "react-apexcharts";
import "../assets/css/general.css";
import { ThemeContext } from "../App";

function Dashboard() {
  const darkTheme = useContext(ThemeContext);
  const themeStyles = {
    backgroundColor: darkTheme ? "#444" : "#fafafa",
    color: darkTheme ? "#fafafa" : "#444",
  };
  const [options, setOptions] = useState({
    series: [
      {
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
    ],
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    title: {
      text: "Product Trends by Month",
      align: "left",
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
  });

  return (
    <div>
      <h1 className="mb-5">Dashboard</h1>
      <div class="row g-5 mb-5">
        <div class="col-xl-6 col-lg-12 ">
          <div class="row g-4">
            {status_card.map((item, index) => (
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 ">
                <div
                  className="box-in-Dashboard hover-item d-flex px-3 py-4"
                  style={themeStyles}
                >
                  <div className="p-2 d-flex align-items-center ">
                    <i className={`${item.icon} fs-1`}></i>
                  </div>
                  <div className="">
                    <h1>{item.count}</h1>
                    <div>{item.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          class="box-in-Dashboard col-xl-6 col-lg-12 d-flex align-items-center justify-content-center"
          style={themeStyles}
        >
          <Chart
            options={{
              ...options,
              theme: {
                mode: darkTheme ? "dark" : "light",
              },
              colors: [themeStyles.color],
            }}
            series={options.series}
            // style={{ width: "100%" }}
            // height={230}
            // width={520}
            height="90%"
            width="180%"
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
