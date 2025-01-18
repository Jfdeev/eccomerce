
import React from "react";
import { useCart } from "../../constants/cartContext";
import { Link } from "react-router-dom";

const ProductCard = ({ title, description, price, id }) => {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart({ title, description, price, id});
    };

  return (
    <div className="bg-zinc-100 p-4 rounded-lg cursor-pointer">
      <Link to={`/product/${id}`}>
      <h3 className="font-bold">{title}</h3>
      <p className="text-zinc-700">Descrição: {description}</p>
      <p className="text-zinc-900">{price}</p>
      </Link>
      <button className="bg-zinc-900 text-zinc-50 p-2 rounded-md hover:bg-zinc-800"
        onClick={handleAddToCart}
        >
        Comprar
      </button>
    </div>
  );
};

export default ProductCard;