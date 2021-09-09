import React from 'react';
import s from './Products.module.css';
import Product from './Product/Product'

const Products = ({ products }) => {

  const productEls = products.map((product, index) => (
    <Product
      key={index} // I would rather use a product id 
      {...product}
    />
  ));

  return (
    <div className={s.products}>
      {productEls}
    </div>
  );
}

export default Products;