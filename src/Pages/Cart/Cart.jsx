import React, { useEffect, useRef, useState } from "react";
import "./Cart.css";
import Product from "../../Components/Product/Product";

function Cart() {
  const [search, setSearch] = useState("");
  const [id, setId] = useState("");
  const store = useRef([]);
  const [products, setProducts] = useState([]);

  const getProds = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        store.current = json;
        setProducts(json);
      });
  };

  const descriptionShowHandler = (item) => {
    if (id !== "" && id === item) {
      setId("");
    }
    if (id === "") {
      setId(item);
    }
    if (id !== item) {
      setId(item);
    }
  };

  const getShitStore = () => {
    if (search === "") {
      return setProducts(store.current);
    }

    let filterSearch = store.current.filter((item) =>
      item.title.includes(search)
    );
    return setProducts(filterSearch);
  };

  useEffect(() => {
    getProds();
  }, []);

  // useEffect(() => {
  //   if(search === ""){
  //     getProds();
  //   }
  //
  // }, []);

  return (
    <div className="cart">
      <div>
        <h1>My Store</h1>
        <div className="cart-header">
          <button onClick={getShitStore}>Search</button>
          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
      </div>
      {products.map((item, i) => {
        return (
          <Product
            key={i}
            id={item.id}
            itemId={id}
            title={item.title}
            description={item.description}
            fn={() => {
              descriptionShowHandler(item.id);
            }}
          />
        );
      })}
    </div>
  );
}

export default Cart;
