import React from "react";
import Table from "../../components/table/Table";
import "./Products.css";
import TableSkeleton from "../../components/skeleton/TableSkeleton";
import Info from "./info";
import Basket from "../../components/basket/Basket";

function Products() {
  const [productsData, setProductsData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [id, setId] = React.useState(null);
  const [productCount, setProductCount] = React.useState(0);
  const [basketProducts, setBasketProducts] = React.useState([]);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [showTooltip, setShowTooltip] = React.useState(false);
  const [basketIsOpen, setBasketIsOpen] = React.useState(false);
  const [basket, setBasket] = React.useState([]);

  const API_LINK = "https://fakestoreapi.com/products";
  const getProducts = async () => {
    try {
      // const response = await fetch(`${API_LINK}?limit=5`); //limitli sayda data cixarmaq
      const response = await fetch(API_LINK);

      if (!response.ok) {
        const msg = `There was an error ${response.status} ${response.statusText}`;
        throw new Error(msg);
      }
      const product = await response.json();
      setProductsData(product);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(true);
    }
  };
  React.useEffect(() => {
    getProducts();
  }, []);

  const headData =
    productsData.length > 0
      ? Object.keys(productsData[0]).filter((key) => key !== "description")
      : [];
  const bodyData = productsData;

  const numberOfRows = 8;
  const renderedRows = [...Array(numberOfRows)].map((e, i) => (
    <div>
      <TableSkeleton />
    </div>
  ));
  const filteredData = bodyData.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const tooltipStyle = {
    display: showTooltip ? "block" : "none",
  };
  const string = "Add";
  return (
    <div className="product">
      <Basket
        basketProducts={basketProducts}
        basketIsOpen={basketIsOpen}
        setBasketIsOpen={setBasketIsOpen}
      />

      <h1 className="mb-5">Top Products</h1>
      <div className="mb-5 d-flex justify-content-between">
        <div className="search_box">
          <input
            className="search_input py-2 px-3 "
            placeholder="Search by title..."
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />
          <i class="search_icon bx bx-search-alt"></i>

          <i
            className="info_icon bx bx-info-circle"
            onMouseEnter={() => {
              setShowTooltip(true);
            }}
            onMouseLeave={() => {
              setShowTooltip(false);
            }}
          ></i>
          <div className="input_info_tooltip" style={tooltipStyle}>
            Search with simple words. Example: jacket, steel, SSD...
          </div>
        </div>

        <div
          className="parent mx-3"
          onClick={() => {
            setBasketIsOpen(!basketIsOpen);
          }}
        >
          <i class="basket_icon bx bx-basket fs-1"></i>
          <div className="child">{productCount} </div>
        </div>
      </div>

      {isLoading ? (
        <div> {renderedRows}</div>
      ) : (
        <div>
          <Table
            headData={headData}
            bodyData={filteredData}
            setId={setId}
            productCount={productCount}
            setProductCount={setProductCount}
            basketProducts={basketProducts}
            setBasketProducts={setBasketProducts}
            basket={basket}
            setBasket={setBasket}
            string={string}
          />
          <Info id={id} setId={setId} api={API_LINK} />
        </div>
      )}
    </div>
  );
}

export default Products;
