import React from 'react';

const ItemCard = ({ item }) => (
  <div className="item-card">
    {item.image && <img src={item.image} alt={item.name} />}
    <h3>{item.name}</h3>
    <p>{item.description}</p>
  </div>
);

export default ItemCard;
