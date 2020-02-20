import React from "react";

function Item(props) {
  console.log(props.match.params);
  const paramItemId = props.match.params.id;

  const item = props.items.find(item => {
    return item.id === Number(paramItemId);
  });
  return (
    <div className="item-wrapper">
      <div className="item-header">
        <div className="image-wrapper">
          <img src={item.imageUrl} alt={item.name} />
        </div>
        <div className="item-title-wrapper">
          Tester
          <h2>{item.name}</h2>
          <h4>${item.price}</h4>
        </div>
      </div>
      <div>
        <p className="item-description">{item.description}</p>
      </div>
    </div>
  );
}

export default Item;
