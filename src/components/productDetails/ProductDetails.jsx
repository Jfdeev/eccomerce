import React from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../../constants/cartContext";
import { Link } from "react-router-dom";
import api from "../../api/api.js";
import { useEffect, useState } from "react";

const ProductDetails = ({title, description, price, id_product}) => {
    const { addToCart } = useCart();
    const { id } = useParams();
    
    const [product, setProduct] = useState([]);

    const loadProduct = async () => {
        try {
            const response = await api.get(`/products/${id}`);
            setProduct(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        loadProduct();
    }, [id]);

    const handleAddToCart = () => {
      addToCart({ title, description, price, id_product});
    };

  if (!product) {
    return <div>Produto não encontrado.</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
        <div className="mb-4">
            <Link to="/"  className="">Voltar</Link>
        </div>
      <h1 className="font-bold text-2xl mb-4">{product.name}</h1>
        <img src={product.image} alt={product.name} className="mb-6" />
      <p className="text-gray-600 mb-2">{product.description}</p>
      <p className="font-semibold text-xl">R$ {product.price}</p>
      <button 
      className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      onClick={handleAddToCart}
      >
        Adicionar ao Carrinho
      </button>
    </div>
  );
};

export default ProductDetails;