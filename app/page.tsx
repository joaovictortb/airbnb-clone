import { Filter, Instagram, Facebook, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { PropertyCard } from "@/components/property-card";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { PopularDestinations } from "@/components/popular-destinations";
import { SearchBar } from "@/components/search-bar";
import { properties } from "@/lib/data";
import backgroundImage from "@/public/background.webp";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <section className="relative w-full h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt="Hero background"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Encontre o lugar perfeito para sua próxima aventura
            </h1>
            <p className="mt-4 text-lg text-white/90">
              Descubra acomodações únicas e experiências inesquecíveis em todo o
              mundo
            </p>
          </div>
          <div className="mt-8 mx-auto">
            <SearchBar />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 py-10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters Sidebar */}
            <aside className="w-full md:w-64 shrink-0">
              <div className="sticky top-24 space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold">Filtros</h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 px-2 text-xs"
                  >
                    Limpar todos
                  </Button>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="mb-2 text-sm font-medium">Faixa de preço</h3>
                    <Slider defaultValue={[150, 800]} max={1000} step={10} />
                    <div className="mt-2 flex items-center justify-between text-sm">
                      <span>R$ 150</span>
                      <span>R$ 800</span>
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <h3 className="mb-2 text-sm font-medium">
                      Tipo de acomodação
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="casa"
                          className="h-4 w-4 rounded border-gray-300"
                        />
                        <label htmlFor="casa" className="text-sm">
                          Casa
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="apartamento"
                          className="h-4 w-4 rounded border-gray-300"
                        />
                        <label htmlFor="apartamento" className="text-sm">
                          Apartamento
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="chalé"
                          className="h-4 w-4 rounded border-gray-300"
                        />
                        <label htmlFor="chalé" className="text-sm">
                          Chalé
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="pousada"
                          className="h-4 w-4 rounded border-gray-300"
                        />
                        <label htmlFor="pousada" className="text-sm">
                          Pousada
                        </label>
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <h3 className="mb-2 text-sm font-medium">Comodidades</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="wifi"
                          className="h-4 w-4 rounded border-gray-300"
                        />
                        <label htmlFor="wifi" className="text-sm">
                          Wi-Fi
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="piscina"
                          className="h-4 w-4 rounded border-gray-300"
                        />
                        <label htmlFor="piscina" className="text-sm">
                          Piscina
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="ar-condicionado"
                          className="h-4 w-4 rounded border-gray-300"
                        />
                        <label htmlFor="ar-condicionado" className="text-sm">
                          Ar-condicionado
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="cozinha"
                          className="h-4 w-4 rounded border-gray-300"
                        />
                        <label htmlFor="cozinha" className="text-sm">
                          Cozinha
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="estacionamento"
                          className="h-4 w-4 rounded border-gray-300"
                        />
                        <label htmlFor="estacionamento" className="text-sm">
                          Estacionamento
                        </label>
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <Button className="w-full bg-coral-500 hover:bg-coral-600">
                    Aplicar filtros
                  </Button>
                </div>
              </div>
            </aside>

            {/* Properties Grid */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Acomodações em destaque</h2>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="gap-1">
                    <Filter className="h-4 w-4" />
                    <span className="hidden sm:inline">Filtrar</span>
                  </Button>
                  <select className="h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm">
                    <option>Recomendados</option>
                    <option>Preço: menor para maior</option>
                    <option>Preço: maior para menor</option>
                    <option>Avaliação</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {properties.slice(0, 6).map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>

              <div className="mt-8 flex justify-center">
                <Button variant="outline" className="gap-2" asChild>
                  <Link href="/imoveis">Carregar mais</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold text-center mb-10">
            O que nossos hóspedes dizem
          </h2>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold text-center mb-10">
            Destinos populares
          </h2>
          <PopularDestinations />
        </div>
      </section>
    </div>
  );
}
