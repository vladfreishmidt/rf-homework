import React from 'react';
import s from './Product.module.css';

const Product = ({ title, image, shop }) => {
  return (
    <div className={s.card}>
      <img className={s.img} src={image} alt={title} />
      <h3 className={s.title}>{title}</h3>
      <div className={s.shop}>{shop}</div>
    </div>
  );
}

export default Product;