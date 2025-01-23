import React from "react";
import { Routes, Route} from "react-router-dom";
import Main from "@/components/main/Main";
import Carrinho from "../components/cart/MyClaims";
import Management from "../components/management/Manage.jsx"
import ProductDetails from "../components/productDetails/ProductDetails.jsx";
import Checkout from "../components/Checkout/Checkout.jsx";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/carrinho" element={<Carrinho />} />
            <Route path="/dono" element={<Management />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/checkout" element={<Checkout />} />
        </Routes>
    );
}

export default AppRoutes;