import { Filter, MapPin } from "lucide-react";
import Image from "next/image";
import { properties } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { PropertyCard } from "@/components/property-card";
import { SearchBar } from "@/components/search-bar";
import { CategoryFilter } from "@/components/category-filter";

export default function ExplorarPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header with search */}
      <div className="bg-white border-b sticky top-0 z-40 w-full">
        <div className="container px-4 py-4 md:px-6">
          <SearchBar />
        </div>
      </div>

      {/* Categories */}
      <div className="border-b sticky top-[73px] bg-white z-30">
        <div className="container px-4 md:px-6">
          <CategoryFilter />
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 py-8">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Map Preview (on larger screens) */}
            <div className="hidden lg:block lg:w-1/2 xl:w-3/5 sticky top-[150px] h-[calc(100vh-150px)]">
              <div className="relative h-full w-full rounded-lg overflow-hidden border">
                <Image
                  src="/placeholder.svg?height=800&width=800"
                  alt="Mapa"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button className="bg-coral-500 hover:bg-coral-600">
                    Ver no mapa
                  </Button>
                </div>
              </div>
            </div>

            {/* Properties List */}
            <div className="w-full lg:w-1/2 xl:w-2/5">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold">Explorar acomodações</h1>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-1 lg:hidden"
                  >
                    <MapPin className="h-4 w-4" />
                    <span>Mapa</span>
                  </Button>
                  <Button variant="outline" size="sm" className="gap-1">
                    <Filter className="h-4 w-4" />
                    <span className="hidden sm:inline">Filtros</span>
                  </Button>
                </div>
              </div>

              <div className="text-sm text-muted-foreground mb-6">
                Mais de 1.000 acomodações encontradas
              </div>

              <div className="grid gap-6">
                {properties.slice(0, 6).map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>

              <div className="mt-8 flex justify-center">
                <Button variant="outline" className="gap-2">
                  Carregar mais
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
