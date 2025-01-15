import React from "react";
import { Routes, Route} from "react-router-dom";
import Main from "@/components/main/Main";
import Carrinho from "../components/cart/MyClaims";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/carrinho" element={<Carrinho />} />
        </Routes>
    );
}

export default AppRoutes;