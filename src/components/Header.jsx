import React from "react";
import logo from "../assets/logo.jpeg";
import { Link } from "react-router-dom";

function Header() {
    

    return (
        <header className="bg-zinc-900 text-zinc-50">
            <nav className="flex flex-row justify-between items-center p-4">
                <div className="w-20 rounded-full overflow-hidden">
                    <img src={logo} alt="logo" />
                </div>
                <a href="#home">Home</a>
                <a href="#produtos">Produtos</a>
                <a href="#meuPedidos">Area do Dono</a>

                <div className="cursor-pointer">
                    <Link to="/carrinho">
                        <span class="material-symbols-outlined">
                            shopping_cart
                        </span>
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Header;