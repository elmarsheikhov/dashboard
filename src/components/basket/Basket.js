import React from "react";
import "./Basket.css";

function Basket({ basketProducts, basketIsOpen, setBasketIsOpen }) {
  const refing = React.useRef();
  React.useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (refing.current && !refing.current.contains(e.target)) {
        setBasketIsOpen(false);
      }
    });
  }, [refing]);
  return (
    <div ref={refing} className={`elmar ${basketIsOpen ? "open" : ""}`}>
      {" "}
      <div className="product_popup">
        <h4 className="text-center p-1">Basket</h4>
        <div className="basket_products mb-2">
          {basketProducts.map((item, index) => (
            <div>
              <div
                key={index}
                className="mb-3 d-flex align-items-center justify-content-start gap-4"
              >
                <img className="basket_products_image" src={item.image} />
                {item.title}
              </div>
              <div className="role_hr mb-3"></div>
            </div>
          ))}
          <p className="text-center fs-4">Total: 2552$</p>
        </div>
        <h4 className="purchase_button text-center p-1">Purchase</h4>
      </div>
    </div>
  );
}

export default Basket;
