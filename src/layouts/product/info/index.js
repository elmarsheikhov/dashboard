import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./Info.css";
function Info({ id, setId, api }) {
  const [productData, setProductData] = React.useState([]);
  const [isImage, setIsImage] = React.useState(null);
  console.log(id);

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
  React.useEffect(() => {
    getProduct();
    if (id) {
      handleShow();
    }
  }, [id]);

  const [show, setShow] = React.useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => (setShow(false), setId(0));
  const keys = Object.keys(productData);
  const values = Object.values(productData);
  console.log(keys, values);
  return productData ? (
    <>
      {" "}
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          {/* <Modal.Title> */}
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
          {/* </Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <div></div>
          <div className="">
            <div className="">
              {keys.map((item, index) => (
                <div
                  key={index}
                  className="au px-3 py-2 d-flex flex-column gap-2"
                >
                  <div className="keys w-25">{item}</div>
                  {/* {item === "image"
                      ? console.log(item, index)
                      : console.log("image yoxdur")} */}
                  <textarea
                    // rows="2"
                    maxlength="300"
                    className={
                      item === "description"
                        ? "form-control description_textarea"
                        : "form-control"
                    }
                    value={
                      typeof values[index] === "object"
                        ? `rate is ${JSON.stringify(
                            values[index].rate
                          )} , count is ${JSON.stringify(values[index].count)}`
                        : values[index]
                    }
                  />
                </div>
              ))}
            </div>
            <div className="w-100"></div>
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
