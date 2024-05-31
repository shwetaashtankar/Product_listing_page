"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCards from "./components/ProductCards";
import ProductModal from "./components/ProductModal";
import SearchPro from "./components/SearchPro";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center align-center text-4xl mb-8 font-semibold text-white">
        <h1>Product Listing</h1>
      </div>
      
      <div className="flex justify-center">
      <SearchPro value={searchTerm} onChange={setSearchTerm} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {filteredProducts.map((product) => (
          <ProductCards
            key={product.id}
            product={product}
            onClick={setSelectedProduct}
          />
        ))}
      </div>
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};

export default Home;
