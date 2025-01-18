import React from "react";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import ProductCard from "./productsCard/productCard.jsx";
import { clothingStoreDatabase } from "../constants/data.js";

function Prod() {
  const products = clothingStoreDatabase.products;

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
     <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto p-6 cursor-pointer">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.name}
          description={product.description}
          price={product.price}
          id={product.id}
        />
      ))}
     </div>
    </section>
  );
}

export default Prod;
