import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

function Prod() {
  return (
    <section className="" id="produtos">
      <Carousel>
        <CarouselContent>
          <CarouselItem>...</CarouselItem>
          <CarouselItem>...</CarouselItem>
          <CarouselItem>...</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <h2 className="font-bold text-center">Produtos</h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        <div className="bg-zinc-100 p-4 rounded-lg">
          <h3>Produto 1</h3>
          <p>Descrição do produto 1</p>
          <button className="bg-zinc-900 text-zinc-50 p-2 rounded-md">
            Comprar
          </button>
        </div>
        <div className="bg-zinc-100 p-4 rounded-lg">
          <h3>Produto 2</h3>
          <p>Descrição do produto 2</p>
          <button className="bg-zinc-900 text-zinc-50 p-2 rounded-md">
            Comprar
          </button>
        </div>
        <div className="bg-zinc-100 p-4 rounded-lg">
          <h3>Produto 3</h3>
          <p>Descrição do produto 3</p>
          <button className="bg-zinc-900 text-zinc-50 p-2 rounded-md">
            Comprar
          </button>
        </div>
        <div className="bg-zinc-100 p-4 rounded-lg">
          <h3>Produto 4</h3>
          <p>Descrição do produto 4</p>
          <button className="bg-zinc-900 text-zinc-50 p-2 rounded-md">
            Comprar
          </button>
        </div>
        <div className="bg-zinc-100 p-4 rounded-lg">
          <h3>Produto 5</h3>
          <p>Descrição do produto 5</p>
          <button className="bg-zinc-900 text-zinc-50 p-2 rounded-md">
            Comprar
          </button>
        </div>
        <div className="bg-zinc-100 p-4 rounded-lg">
          <h3>Produto 6</h3>
          <p>Descrição do produto 6</p>
          <button className="bg-zinc-900 text-zinc-50 p-2 rounded-md">
            Comprar
          </button>
        </div>
      </div>
    </section>
  );
}

export default Prod;
