import React from 'react';
import { Link } from 'react-router-dom';

const ItemList = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <Link to={`/item/${item.id}`}>
            <div>
              <img src={item.imgSrc} alt={`Post ${item.id}`} />
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
