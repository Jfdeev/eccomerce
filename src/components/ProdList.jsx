import React from "react";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Routes, Route } from 'react-router-dom';

function Prod() {
  return (
    <section className="" id="produtos">
      <h2 className="font-bold text-center">Produtos</h2>
      <Carousel className="w-full max-w-lg mx-auto lg:max-w-4xl max-sm:overflow-hidden" opts={{
        slidesToScroll: 1,
        slidesToShow: 2,
        infinite: false,
        responsive: [
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      }}>
      <CarouselContent>
        {Array.from({ length: 6 }).map((_, index) => (
          <CarouselItem key={index} className="basis-1/2">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 p-6 cursor-pointer">
        <div className="bg-zinc-100 p-4 rounded-lg">
          <h3>Produto 1</h3>
          <p>Descrição do produto 1</p>
          <button className="bg-zinc-900 text-zinc-50 p-2 rounded-md hover:bg-zinc-800">
            Comprar
          </button>
        </div>
        <div className="bg-zinc-100 p-4 rounded-lg cursor-pointer">
          <h3>Produto 2</h3>
          <p>Descrição do produto 2</p>
          <button className="bg-zinc-900 text-zinc-50 p-2 rounded-md hover:bg-zinc-800">
            Comprar
          </button>
        </div>
        <div className="bg-zinc-100 p-4 rounded-lg cursor-pointer">
          <h3>Produto 3</h3>
          <p>Descrição do produto 3</p>
          <button className="bg-zinc-900 text-zinc-50 p-2 rounded-md hover:bg-zinc-800">
            Comprar
          </button>
        </div>
        <div className="bg-zinc-100 p-4 rounded-lg cursor-pointer">
          <h3>Produto 4</h3>
          <p>Descrição do produto 4</p>
          <button className="bg-zinc-900 text-zinc-50 p-2 rounded-md hover:bg-zinc-800">
            Comprar
          </button>
        </div>
        <div className="bg-zinc-100 p-4 rounded-lg cursor-pointer ">
          <h3>Produto 5</h3>
          <p>Descrição do produto 5</p>
          <button className="bg-zinc-900 text-zinc-50 p-2 rounded-md hover:bg-zinc-800">
            Comprar
          </button>
        </div>
        <div className="bg-zinc-100 p-4 rounded-lg cursor-pointer">
          <h3>Produto 6</h3>
          <p>Descrição do produto 6</p>
          <button className="bg-zinc-900 text-zinc-50 p-2 rounded-md hover:bg-zinc-800">
            Comprar
          </button>
        </div>
      </div>
    </section>
  );
}

export default Prod;
