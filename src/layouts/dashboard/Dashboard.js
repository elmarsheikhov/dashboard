import React from "react";
import status_card from "../../assets/json/status-card-data.json";
import Chart from "react-apexcharts";
import "./Dashboard.css";

function Dashboard() {
  const [options, setOptions] = React.useState({
    series: [
      {
        name: "Online Customer",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "Story Customer",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    chart: {
      height: 350,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  });
  // React.useEffect(() => {
  //   setOptions({
  //     ...options,
  //     theme: {
  //       mode: darkTheme ? "dark" : "light",
  //     },
  //     colors: [],
  //   });
  // }, []);

  return (
    <div className="dashboard">
      <h1 className="mb-5">Dashboard</h1>
      <div class="row g-5 mb-5 px-3">
        <div class="col-xl-6 col-lg-12">
          <div class="row g-4">
            {status_card.map((item, index) => (
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div className="box_in_Dashboard">
                  <div className="p-2 d-flex align-items-center ">
                    <i className={`${item.icon} fs-1`}></i>
                  </div>
                  <div className="">
                    <h1 className="item_count">{item.count}</h1>
                    <div>{item.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div class="chart col-xl-6 col-lg-9 col-md-9 col-sm-10 col-10 ">
          <Chart
            options={{
              ...options,
            }}
            series={options.series}
            width="120%"
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
