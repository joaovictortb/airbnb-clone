"use client"

import { useState } from "react"
import { PropertyCard } from "@/components/property-card"
import { SearchFilters } from "@/components/search-filters"
import { CategoryFilter } from "@/components/category-filter"
import { Button } from "@/components/ui/button"
import { Pagination } from "@/components/pagination"
import { properties } from "@/lib/data"
import { Filter, MapPin } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export default function ImoveisPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 12
  const totalPages = Math.ceil(properties.length / itemsPerPage)

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentProperties = properties.slice(startIndex, endIndex)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <SearchFilters className="bg-white rounded-lg p-4 shadow border" />
      </div>

      <div className="mb-8">
        <CategoryFilter />
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Filtros para desktop */}
        <div className="hidden md:block w-64 shrink-0">
          <div className="sticky top-24 space-y-6 border rounded-lg p-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Filtros</h2>
              <Button variant="ghost" size="sm" className="h-8 px-2 text-xs">
                Limpar todos
              </Button>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="mb-2 text-sm font-medium">Faixa de preço</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-xs text-muted-foreground">Mínimo</label>
                    <input
                      type="number"
                      placeholder="R$ 0"
                      className="w-full rounded-md border border-input px-3 py-1 text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground">Máximo</label>
                    <input
                      type="number"
                      placeholder="R$ 1000"
                      className="w-full rounded-md border border-input px-3 py-1 text-sm"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-2 text-sm font-medium">Tipo de acomodação</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="casa" className="h-4 w-4 rounded border-gray-300" />
                    <label htmlFor="casa" className="text-sm">
                      Casa
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="apartamento" className="h-4 w-4 rounded border-gray-300" />
                    <label htmlFor="apartamento" className="text-sm">
                      Apartamento
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="chalé" className="h-4 w-4 rounded border-gray-300" />
                    <label htmlFor="chalé" className="text-sm">
                      Chalé
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="pousada" className="h-4 w-4 rounded border-gray-300" />
                    <label htmlFor="pousada" className="text-sm">
                      Pousada
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-2 text-sm font-medium">Comodidades</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="wifi" className="h-4 w-4 rounded border-gray-300" />
                    <label htmlFor="wifi" className="text-sm">
                      Wi-Fi
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="piscina" className="h-4 w-4 rounded border-gray-300" />
                    <label htmlFor="piscina" className="text-sm">
                      Piscina
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="ar-condicionado" className="h-4 w-4 rounded border-gray-300" />
                    <label htmlFor="ar-condicionado" className="text-sm">
                      Ar-condicionado
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="cozinha" className="h-4 w-4 rounded border-gray-300" />
                    <label htmlFor="cozinha" className="text-sm">
                      Cozinha
                    </label>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-coral-500 hover:bg-coral-600">Aplicar filtros</Button>
            </div>
          </div>
        </div>

        {/* Lista de imóveis */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold">Imóveis disponíveis</h1>
              <p className="text-muted-foreground">
                Mostrando {currentProperties.length} de {properties.length} imóveis
              </p>
            </div>

            <div className="flex items-center gap-2">
              {/* Botão de filtro para mobile */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm" className="gap-1 md:hidden">
                    <Filter className="h-4 w-4" />
                    <span>Filtros</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <SheetHeader>
                    <SheetTitle>Filtros</SheetTitle>
                    <SheetDescription>Refine sua busca com os filtros abaixo</SheetDescription>
                  </SheetHeader>
                  <div className="py-4 space-y-4">
                    <div>
                      <h3 className="mb-2 text-sm font-medium">Faixa de preço</h3>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="text-xs text-muted-foreground">Mínimo</label>
                          <input
                            type="number"
                            placeholder="R$ 0"
                            className="w-full rounded-md border border-input px-3 py-1 text-sm"
                          />
                        </div>
                        <div>
                          <label className="text-xs text-muted-foreground">Máximo</label>
                          <input
                            type="number"
                            placeholder="R$ 1000"
                            className="w-full rounded-md border border-input px-3 py-1 text-sm"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="mb-2 text-sm font-medium">Tipo de acomodação</h3>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="casa-mobile" className="h-4 w-4 rounded border-gray-300" />
                          <label htmlFor="casa-mobile" className="text-sm">
                            Casa
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="apartamento-mobile" className="h-4 w-4 rounded border-gray-300" />
                          <label htmlFor="apartamento-mobile" className="text-sm">
                            Apartamento
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="chalé-mobile" className="h-4 w-4 rounded border-gray-300" />
                          <label htmlFor="chalé-mobile" className="text-sm">
                            Chalé
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="pousada-mobile" className="h-4 w-4 rounded border-gray-300" />
                          <label htmlFor="pousada-mobile" className="text-sm">
                            Pousada
                          </label>
                        </div>
                      </div>
                    </div>

                    <Button className="w-full bg-coral-500 hover:bg-coral-600">Aplicar filtros</Button>
                  </div>
                </SheetContent>
              </Sheet>

              <Button variant="outline" size="sm" className="gap-1 hidden md:flex">
                <MapPin className="h-4 w-4" />
                <span>Mapa</span>
              </Button>

              <Select defaultValue="relevancia">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevancia">Relevância</SelectItem>
                  <SelectItem value="preco-asc">Preço: menor para maior</SelectItem>
                  <SelectItem value="preco-desc">Preço: maior para menor</SelectItem>
                  <SelectItem value="avaliacao">Avaliação</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {currentProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
          </div>
        </div>
      </div>
    </div>
  )
}
