import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./Info.css";
function Info({ id, setId, customer_list }) {
  const [customerData, setCustomerData] = React.useState([]);
  const [show, setShow] = React.useState(false);
  const keys = Object.keys(customerData);
  const values = Object.values(customerData);
  const handleShow = () => setShow(true);
  const handleClose = () => (setShow(false), setId(0));
  React.useEffect(() => {
    if (id) {
      handleShow();
      setCustomerData(customer_list[id - 1]);
    }
  }, [id]);
  return customerData ? (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <div className="d-flex justify-content-between align-items-center mb-3 w-100">
            <button
              className="btn btn-primary d-flex justify-content-center align-items-center"
              onClick={handleClose}
            >
              <i class="bx bx-chevron-left fs-3"></i>
            </button>
            <div className=" fs-2">Info</div>
            <button className="btn btn-success ">Save</button>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div>
            {keys.map((item, index) => (
              <div key={index} className="px-3 py-2 d-flex flex-column gap-2">
                <div className="keys w-25">{item}</div>

                <textarea
                  maxlength="300"
                  className={
                    item === "description"
                      ? "form-control description_textarea"
                      : "form-control"
                  }
                  value={
                    typeof values[index] === "object"
                      ? JSON.stringify(values[index])
                      : values[index]
                  }
                />
              </div>
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  ) : null;
}

export default Info;
