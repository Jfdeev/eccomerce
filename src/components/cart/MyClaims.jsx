import React from "react";
import { useCart } from "../../constants/cartContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import api from "../../api/api.js";

const Cart = ()  =>{
    const { cart, getTotal, removeFromCart, updateQuantity  } = useCart();

    const navigate = useNavigate();

    const createOrder = async () => {
      
      const orderData = {
        items: cart.map((product) => ({
          productId: product.id,
          quantity: product.quantity || 1,
        })),
      };

      try {
        const response = await api.post("/orders", orderData);
        console.log(response.data);
        navigate("/checkout");
      } catch (error) {
        console.log(error);
      }
    }

    const handleQuantityChange = (productId, quantity) => {
      if(quantity < 1) {
        removeFromCart(productId);
      } else {
        updateQuantity(productId, quantity);
      }
    }

    return (
      <div className="p-6">
        <Link to="/">Voltar</Link>
        <h2 className="font-bold text-center">Meus Pedidos</h2>
        {cart.length === 0 ? (
          <p className="font-bold text-center">Seu carrinho está vazio.</p>
        ) : (
          <ul>
            {cart.map(
              (product, index) => (
                console.log(product),
                (
                  <li className="flex justify-between p-2 border-b" key={index}>
                    <span>{product.title}</span>
                    <span>{product.description}</span>
                    <span>{product.price}</span>
                    <input
                      className="border p-1 w-10"
                      type="number"
                      min={1}
                      value={product.quantity || 1}
                      onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                    />
                    <Link to={"/checkout"}>
                      <button 
                      className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600"
                      onClick={createOrder}
                      >
                        Comprar
                      </button>
                    </Link>
                    <button
                      className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
                      onClick={() => removeFromCart(product.id)}
                    >
                      Remover
                    </button>
                  </li>
                )
              )
            )}
          </ul>
        )}
        <h3>Total: {getTotal()}</h3>
      </div>
    );
}

export default Cart;