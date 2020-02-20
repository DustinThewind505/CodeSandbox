import React from "react";
import { Link } from "react-router-dom";

function Shop(props) {
  return (
    <div className="items-list-wrapper">
      <Link to="/">
        <button className="md-button shop-button">GO HOME</button>
      </Link>
      {props.items.map(item => (
        <Link to={`/shop/${item.id}`}>
          <div className="item-card" key={item.id}>
            <img
              className="item-list-image"
              src={item.imageUrl}
              alt={item.name}
            />
            <p>{item.name}</p>
            <p>${item.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Shop;
