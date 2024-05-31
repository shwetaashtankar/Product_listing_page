import React from "react";

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center text-black">
      <div className="bg-white p-4 rounded max-w-xl w-full flex relative">
        <div className="absolute left-2 top-2 mb-2">
          <button
            className="mb-4 px-4 py-2 rounded-md text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-red-500 hover:to-red-800 ..."
            onClick={onClose}
          >
            Close
          </button>
        </div>

        <div className="w-1/2 pr-2 mt-4">
          <img
            src={product.image}
            alt={product.title}
            className="w-1/2 h-48 object-fill mx-auto"
          />
          <h2 className="mt-4 text-2xl font-bold">{product.title}</h2>
        </div>

        <div className="w-1/2 pl-2 flex flex-col justify-betwee">
          <div>
            <p>{product.description}</p>
            <div className="flex justify-between items-center">
              <p className="mt-2 font-bold">${product.price}</p>
              {/* <p className="mt-2">{product.description}</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
