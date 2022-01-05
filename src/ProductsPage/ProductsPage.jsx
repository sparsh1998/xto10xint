import React, { useEffect, useState } from "react";
import { InputGroup } from "react-bootstrap";

const ProductsPage = () => {
  const [isloaded, setisloaded] = useState(false);
  const [items, setitems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://demo7394057.mockable.io/products")
      .then((res) => res.json())
      .then(
        (result) => {
          setisloaded(true);
          setitems(result);
        },
        (error) => {
          setisloaded(true);
          setError(error);
        }
      );
  }, []);

  console.log(items);
  var listItems = "";
  if (items.products !== undefined) {
    listItems = items.products.map((e) => (
      // <Card title={e.product} description={e.productName} />
      <div width="600" height="600">
        <h4>{e.product}</h4>
        <p>{e.productName}</p>
        <img src={e.searchImage} width="500" height="500" />
      </div>
    ));
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const filter1 = e.currentTarget[0].checked;
    const filter2 = e.currentTarget[1].checked;

    setitems(
      items.products.map((e) => {
        if (e.gender === "Men" && filter1) {
        }
      })
    );
    console.log(e);
  };

  return (
    <div>
      <div>
        <form onSubmit={onSubmit}>
          <label for="filter1">Male</label>
          <input type="checkbox" id="filter1" />
          <label for="filter2">Female</label>
          <input type="checkbox" id="filter2" />
          <input type="submit" value="Submit" />
        </form>
      </div>
      <div width="600">{listItems}</div>
    </div>
  );
};

export default ProductsPage;
