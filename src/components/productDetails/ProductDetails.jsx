import React from "react";
import { useParams } from "react-router-dom";
import { clothingStoreDatabase } from "../../constants/data.js";

const ProductDetails = () => {
  const { id } = useParams();
    const product = clothingStoreDatabase.products.find(
        (product) => product.id === id
    );

  if (!product) {
    return <div>Produto não encontrado.</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="font-bold text-2xl mb-4">{product.name}</h1>
      <p className="text-gray-600 mb-2">{product.description}</p>
      <p className="font-semibold text-xl">R$ {product.price.toFixed(2)}</p>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        Adicionar ao Carrinho
      </button>
    </div>
  );
};

export default ProductDetails;