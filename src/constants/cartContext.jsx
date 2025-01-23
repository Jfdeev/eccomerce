import React, { createContext, useState, useContext} from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter(product => product.id !== productId));
    }

    const getTotal = () => {
        return cart.reduce((acc, product) => acc + product.price, 0);
    };

    const updateQuantity = (productId, quantity) => {
        setCart((prevCart) => prevCart.map((product) => {
            product.id === productId ? { ...product, quantity } : product;
        }));
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart ,getTotal, updateQuantity }}>
            {children}
        </CartContext.Provider>
    );
};


//hook para usar o contexto
export const useCart = () => {
    return useContext(CartContext);
};

