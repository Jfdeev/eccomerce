import React from "react";
import { useCart } from "../../constants/cartContext";
import { Link } from "react-router-dom";

const Cart = ()  =>{
    const { cart, getTotal, removeFromCart } = useCart();

    return (
        <div className="p-6">
            <Link to="/">Voltar</Link>
            <h2 className="font-bold text-center">Meus Pedidos</h2>
            {cart.length === 0 ? (
                <p className="font-bold text-center">Seu carrinho está vazio.</p>
            ) : (
                <ul>
                    {cart.map((product, index) => (
                        console.log(product),
                        <li className="flex justify-between p-2 border-b" key={index}>
                            <span>{product.title}</span>
                            <span>{product.description}</span>
                            <span>{product.price}</span>
                            <button 
                                className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600" 
                                onClick={() => removeFromCart(product.id)}
                                >
                                Remover
                            </button>

                        </li>
                    ))}
                </ul>
            )}
            <h3>Total: {getTotal()}</h3>
        </div>
    )
}

export default Cart;