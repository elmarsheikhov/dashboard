import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./MyModal.css";
import { ThemeContext } from "../../App";
function MyModal({ tableModal, setTableModal, headData, bodyData, itemIndex }) {
  const darkTheme = React.useContext(ThemeContext);
  const themeStyles = {
    backgroundColor: darkTheme ? "#555" : "#fafafa",
    color: darkTheme ? "#fafafa" : "#555",
  };
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => (setTableModal(false), setShow(false));
  if (tableModal) {
    if (!show) {
      handleShow();
    }
  }

  const exactKey = Object.values(bodyData[itemIndex]);
  const exactKey2 = Object.keys(bodyData[itemIndex]);

  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton style={themeStyles}>
          <Modal.Title>Information</Modal.Title>
        </Modal.Header>
        <Modal.Body style={themeStyles}>
          <div>
            <div className="d-flex justify-content-between mb-3">
              <button className="btn btn-primary d-flex justify-content-center align-items-center">
                <i class="bx bx-chevron-left fs-3"></i>
              </button>
              <button className="btn btn-success">Save</button>
            </div>
          </div>
          <div className="d-flex">
            <div className="border">
              {exactKey2.map((item, index) => (
                <div
                  style={themeStyles}
                  key={index}
                  className="au border px-3 py-2 d-flex align-items-center"
                >
                  <div className="w-25">{item}:</div>
                  {/* <input className="form-control w-50 border" /> */}
                </div>
              ))}
            </div>
            <div className="w-100">
              {exactKey.map((item, index) => {
                return (
                  // <div style={themeStyles} key={index}>
                  //   {headData.map((key) => {
                  //     {
                  //       console.log(key);
                  //     }
                  //     if (key === "image") {
                  //       return (
                  //         <td key={key} className="border p-2">
                  //           <img
                  //             src={item}
                  //             alt={item["title"]}
                  //             width="50"
                  //             height="50"
                  //           />
                  //         </td>
                  //       );
                  //     } else {
                  //       return null;
                  //     }
                  //   })}
                  //   <td key={index} className="border p-2">
                  //     {typeof item === "object" ? JSON.stringify(item) : item}
                  //   </td>
                  // </div>
                  <div key={index} className="border p-2">
                    {typeof item === "object" ? (
                      <input
                        value={JSON.stringify(item)}
                        className="form-control"
                      ></input>
                    ) : (
                      <input value={item} className="form-control"></input>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer style={themeStyles}>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default MyModal;
