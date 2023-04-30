import React from "react";
import status_card from "../../assets/json/status-card-data.json";
import Chart from "react-apexcharts";
import "./Dashboard.css";
import { ThemeContext } from "../../App";

function Dashboard() {
  const darkTheme = React.useContext(ThemeContext);
  const themeStyles = {
    backgroundColor: darkTheme ? "#424242" : "#fafafa",
    color: darkTheme ? "#fafafa" : "#424242",
  };
  const [options, setOptions] = React.useState({
    chart: {
      height: 280,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    series: [
      {
        name: "Series 1",
        data: [45, 52, 38, 45, 19, 23, 2],
      },
    ],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100],
      },
    },
    xaxis: {
      categories: [
        "01 Jan",
        "02 Jan",
        "03 Jan",
        "04 Jan",
        "05 Jan",
        "06 Jan",
        "07 Jan",
      ],
    },
  });
  React.useEffect(() => {
    setOptions({
      ...options,
      theme: {
        mode: darkTheme ? "dark" : "light",
      },
      colors: [themeStyles.color],
    });
  }, [darkTheme, themeStyles.color]);

  return (
    <div>
      <h1 className="mb-5">Dashboard</h1>
      <div class="row g-5 mb-5 px-3">
        <div class="col-xl-6 col-lg-12">
          <div class="row g-4">
            {status_card.map((item, index) => (
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div className="box_in_Dashboard" style={themeStyles}>
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
        <div class="chart col-xl-6 col-lg-12" style={themeStyles}>
          <Chart
            options={options}
            series={options.series}
            height="90%"
            width="200%"
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
