import React, { createContext, useState, useContext} from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [order, setOrder] = useState(null);

    const addToCart = (product) => {
        const productWithQuantity = { ...product, quantity: 1 };
        setCart((prevCart) => [...prevCart, productWithQuantity]);
    };

    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter(product => product.id !== productId));
    }

    const getTotal = () => {
        return cart.reduce((acc, product) => acc + product.price, 0);
    };

    const updateQuantity = (productId, quantity) => {
        setCart((prevCart) => prevCart.map((product) => {
            return product.id === productId ? { ...product, quantity } : product;
        }));
    }

    const setOrderData = (orderData) => {
        setOrder(orderData);
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart ,getTotal, updateQuantity, setOrderData, order }}>
            {children}
        </CartContext.Provider>
    );
};


//hook para usar o contexto
export const useCart = () => {
    return useContext(CartContext);
};

