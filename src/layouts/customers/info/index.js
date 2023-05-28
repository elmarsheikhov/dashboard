import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./Info.css";
import { ThemeContext } from "../../../App";
import { theme } from "antd";

function Info({ id, setId, customer_list }) {
  const themestyle = React.useContext(ThemeContext);
  const [customerData, setCustomerData] = React.useState([]);
  const [isClickedEdit, setIsClickedEdit] = React.useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(-1);
  const [show, setShow] = React.useState(false);
  const keys = Object.keys(customerData);
  const values = Object.values(customerData);
  const handleShow = () => setShow(true);
  const handleClose = () => (
    setShow(false), setId(0), setSelectedItemIndex(-1)
  );
  const handleChange = (index, event) => {
    const newValue = event.target.value;
    const updatedCustomerData = { ...customerData };
    updatedCustomerData[keys[index]] = newValue;
    setCustomerData(updatedCustomerData);
  };

  const handleEditClick = (index) => {
    setIsClickedEdit(true);
    setSelectedItemIndex(index);
  };
  React.useEffect(() => {
    if (id) {
      handleShow();
      setCustomerData(customer_list[id - 1]);
    }
  }, [id]);

  return customerData ? (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={`${themestyle.themeClass} ${themestyle.colorClass}  custom_modal`}
    >
      <div className="info_modal_theme modal_header ">
        <Modal.Header className="custom_header">
          <div className="d-flex justify-content-between align-items-center mb-3 w-100">
            <button
              className="btn btn-success d-flex justify-content-center align-items-center"
              onClick={handleClose}
            >
              <i class="bx bx-chevron-left fs-3"></i>
            </button>
            <div className=" fs-2">Info</div>
            <button className="btn btn-success">Save</button>
          </div>
        </Modal.Header>
      </div>
      <div className="info_modal_theme ">
        <Modal.Body>
          <div className="mb-3">
            {keys.map((item, index) => (
              <div
                key={index}
                className="px-3 py-2 d-flex align-items-center  "
              >
                <div className="keys w-25">{item}:</div>

                <textarea
                  maxLength="300"
                  className={
                    item === "description"
                      ? "form-control description_textarea"
                      : "form-control info_modal_theme"
                  }
                  value={
                    typeof values[index] === "object"
                      ? JSON.stringify(values[index])
                      : values[index]
                  }
                  onChange={
                    isClickedEdit ? (event) => handleChange(index, event) : null
                  }
                  readOnly={!isClickedEdit || selectedItemIndex !== index}
                  autoFocus={isClickedEdit && selectedItemIndex === index}
                />
                <div className="edit w-25 d-flex justify-content-end align-items-center">
                  <span onClick={() => handleEditClick(index)}>Edit</span>{" "}
                  <i class="bx bxs-edit-alt fs-3 px-3"></i>
                </div>
              </div>
            ))}
          </div>
        </Modal.Body>
      </div>
      <div className="info_modal_theme">
        <Modal.Footer className="custom_footer">
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </div>
    </Modal>
  ) : null;
}

export default Info;
