import React from "react";
import "./Statistics.css";
import { ThemeContext } from "../../App";

function Settings() {
  const darkTheme = React.useContext(ThemeContext);
  const themeStyles = {
    backgroundColor: darkTheme ? "#424242" : "#fafafa",
    color: darkTheme ? "#fafafa" : "#424242",
  };
  const [isHovering, setIsHovering] = React.useState(false);
  const [limits, setLimits] = React.useState([]);
  const [obj, setObj] = React.useState({
    1: { count: 40 },
    2: { count: 200 },
    3: { count: 29 },
    4: { count: 20 },
    5: { count: 30 },
    6: { count: 0 },
    7: { count: 80 },
  });
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();

  const keys = Object.keys(obj);
  const values = Object.values(obj);
  const max = values.reduce(
    (max, obj) => (obj.count > max ? obj.count : max),
    0
  );
  function handleIncrement(index) {
    setObj((prevState) => {
      const newObj = { ...prevState };
      newObj[keys[index]].count += 4;
      return newObj;
    });
  }
  function handleDecrement(index) {
    setObj((prevState) => {
      const newObj = { ...prevState };
      if (newObj[keys[index]].count > 4) {
        newObj[keys[index]].count -= 4;
      }
      return newObj;
    });
  }
  function renderColumns() {
    return limits
      .slice(0, limits.length - 1)
      .map((limit, index) => <div key={index}></div>);
  }
  function renderLimits() {
    return limits.map((item, index) => <div className=" ">{item}</div>);
  }
  React.useEffect(() => {
    const newLimits = [
      (max / 4) * 4,
      (max / 4) * 3,
      (max / 4) * 2,
      (max / 4) * 1,
      (max / 4) * 0,
    ];
    setLimits(newLimits);
  }, [max]);

  return (
    <div>
      <h2 className="mb-4 border-bottom text-center py-4"> Weekly Chart</h2>
      <div className="d-flex justify-content-center">
        {keys.map((item, index) => (
          <div>
            <div className="d-flex flex-column justify-content-between align-items-center mb-5 gap-2 p-1">
              <button
                className="button btn btn-primary w-75 d-flex justify-content-center align-items-center"
                onClick={() => handleIncrement(index)}
              >
                <i class="bx bx-chevron-up"></i>{" "}
              </button>
              <button
                className="button btn btn-primary w-50 d-flex justify-content-center align-items-center"
                onClick={() => handleDecrement(index)}
              >
                <i class="bx bx-chevron-down"></i>{" "}
              </button>
            </div>
            <div className="total" style={themeStyles}>
              <div className="element border">
                {renderColumns()}
                <div
                  onMouseOver={() => setIsHovering(true)}
                  onMouseOut={() => setIsHovering(false)}
                  className="column"
                  style={{
                    ...themeStyles,
                    height: `${
                      values[index].count <= max
                        ? (values[index].count / max) * 100
                        : null
                    }%`,

                    backgroundColor:
                      values[index].count < 30
                        ? "yellow"
                        : values[index].count < 60
                        ? "green"
                        : "red",
                  }}
                >
                  {isHovering && (
                    <div className="hover_bar">
                      <p>count:{values[index].count}</p>
                    </div>
                  )}
                </div>
              </div>
              <div className="limit_column">
                {" "}
                {index === keys.length - 1 ? renderLimits() : null}
              </div>
            </div>
            <div className="text-center p-2">
              {day}/{month}/{year}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Settings;
