import React from 'react';

const ProductCards = ({ product, onClick }) => (
  <div className="border mt-4 p-4 rounded-md bg-white text-black hover:scale-[1.08] " onClick={() => onClick(product)}>
    <img src={product.image} alt={product.title} className="w-full h-48 " />
    <h2 className="mt-2 text-lg font-bold">{product.title}</h2>
    <p className="mt-2">${product.price}</p>
  </div>
);

export default ProductCards;
