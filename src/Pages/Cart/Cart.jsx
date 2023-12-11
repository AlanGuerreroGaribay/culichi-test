import React, { useEffect, useState } from "react";
import './Cart.css';
import Product from "../../Components/Product/Product";

function Cart() {
  const [search, setSearch] = useState("");
  const [id, setId] = useState("");
  const [products, setProducts] = useState([]);

  const getProds = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
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

  useEffect(() => {
    if(search === ""){
      getProds();
    } 
    if(search !== ""){
      let filterSearch = products.filter(item => 
        item.title.includes(search)
      );
      setProducts(filterSearch);
    }
  }, [search]);


  return (
    <div className="cart">
      <div>
      <h1>My Store</h1>
        <div className="cart-header">
          <h2>Description of my store</h2>
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
        }
      )}
    </div>
  );
}

export default Cart;
