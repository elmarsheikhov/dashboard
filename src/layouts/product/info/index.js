import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./Info.css";
import { ThemeContext } from "../../../App";
import { json } from "react-router-dom";

function Info({ id, setId, api }) {
  const themestyle = React.useContext(ThemeContext);
  const [productData, setProductData] = React.useState([]);
  const [show, setShow] = React.useState(false);
  const keys = Object.keys(productData);
  const values = Object.values(productData);
  const getProduct = async () => {
    try {
      const response = await fetch(`${api}/${id}`);
      if (!response.ok) {
        const msg = `There was an error ${response.status} ${response.statusText}`;
        throw new Error(msg);
      }
      const product = await response.json();
      setProductData(product);
    } catch (error) {
      console.log(error);
    }
  };
  const handleShow = () => setShow(true);
  const handleClose = () => (setShow(false), setId(0));
  React.useEffect(() => {
    getProduct();
    if (id) {
      handleShow();
    }
  }, [id]);

  return productData ? (
    <>
      {" "}
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className={`${themestyle.themeClass} ${themestyle.colorClass}`}
      >
        <div className="info_modal_theme">
          <Modal.Header className="custom_header">
            {/* <Modal.Title> */}
            <div className="d-flex justify-content-between align-items-center mb-3 w-100">
              <button
                className="btn btn-primary d-flex justify-content-center align-items-center"
                onClick={handleClose}
              >
                <i class="bx bx-chevron-left fs-3"></i>
              </button>
              <div className="fs-2">Info</div>
              <div className="close_icon fs-2" onClick={handleClose}>
                <i class="bx bx-x"></i>
              </div>
            </div>
            {/* </Modal.Title> */}
          </Modal.Header>
        </div>
        <div className="info_modal_theme">
          <Modal.Body>
            <div className="">
              <div className="">
                {keys.map((item, index) => (
                  <div
                    key={index}
                    className="product_info px-3 py-2 d-flex flex-row gap-2 align-items-center"
                  >
                    <div className="keys w-25">{item}:</div>
                    <div className=" w-50">
                      {item === "image" ? (
                        <img
                          src={values[index]}
                          className="modal_image"
                          alt="Image"
                        />
                      ) : typeof values[index] === "object" ? (
                        `rate is ${JSON.stringify(
                          values[index].rate
                        )}, count is ${JSON.stringify(values[index].count)}`
                      ) : (
                        values[index]
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="w-100"></div>
            </div>
          </Modal.Body>
        </div>
        <div className="info_modal_theme">
          <Modal.Footer className="custom_footer">
            <Button variant="success" onClick={handleClose}>
              Ok
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  ) : null;
}

export default Info;
