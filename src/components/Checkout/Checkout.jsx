import React from "react";
import { useCart } from "../../constants/cartContext.jsx";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from 'lucide-react';
import { Link } from "react-router-dom";



const Checkout = () => {
  const { order } = useCart();
  const navigate = useNavigate();

  if (!order) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Seu pedido nao foi encontrado, volte para o Carrinho</p>
        <button onClick={() => navigate("/carrinho")} className="ml-2">
          <ArrowLeft size={24} />
        </button>
      </div>
    );
  }

  return (

    
    <div class="max-w-lg mx-auto p-6 border border-gray-300 rounded-lg shadow-lg bg-gray-50">
        <Link to="/carrinho">
            <ArrowLeft size={24} />
        </Link>
      <h1 class="text-2xl font-bold text-center text-gray-800">Pagamento</h1>

      <div class="mt-4 p-4 border border-gray-200 rounded bg-white">
        <h2 className="text-xl font-semibold">Detalhes do produto</h2>
        <p>Numero do Pedido: {order.id}</p>
        <p>Valor do Pedido: {order.total}</p>
        <p>Status do Pedido: {order.status}</p>
      </div>

      <div class="mt-4 p-4 border border-gray-200 rounded bg-white">
        <h2 class="text-xl font-semibold">Informações do Usuario</h2>
        <input
          type="text"
          placeholder="Nome"
          class="mt-2 p-2 border border-gray-300 rounded w-full"
          required
        />
        <input
          type="email"
          placeholder="Email"
          class="mt-2 p-2 border border-gray-300 rounded w-full"
          required
        />
        <input
          type="text"
          placeholder="Endereço"
          class="mt-2 p-2 border border-gray-300 rounded w-full"
          required
        />
      </div>

      <div class="mt-4 p-4 border border-gray-200 rounded bg-white">
        <h2 class="text-xl font-semibold">Informações de Pagamento</h2>
        <input
          type="text"
          placeholder="Numero do Cartão"
          class="mt-2 p-2 border border-gray-300 rounded w-full"
          required
        />
        <input
          type="text"
          placeholder="Nome no Cartão"
          class="mt-2 p-2 border border-gray-300 rounded w-full"
          required
        />
        <input
          type="text"
          placeholder="Data de Expiração"
          class="mt-2 p-2 border border-gray-300 rounded w-full"
          required
        />
        <input
          type="text"
          placeholder="CVV"
          class="mt-2 p-2 border border-gray-300 rounded w-full"
          required
        />
      </div>

      <div class="mt-4 p-4 border border-gray-200 rounded bg-white">
        <h2 class="text-xl font-semibold">Sumario do Pedido</h2>
        <div class="flex items-center mt-2">
          <input type="checkbox" id="saveCard" class="mr-2" />
          <label for="saveCard" class="text-gray-700">
            Salvar esse Cartão para usar no futuro?
          </label>
        </div>
        <div class="flex items-center mt-2">
          <input type="checkbox" id="newsletter" class="mr-2" />
          <label for="newsletter" class="text-gray-700">
            Se inscrever na Newsletter
          </label>
        </div>
      </div>

      <button class="mt-6 w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 rounded">
        Finalizar Pedido
      </button>
    </div>
  );
}

export default Checkout;