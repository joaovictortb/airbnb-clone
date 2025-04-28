"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { properties } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PropertyReview } from "@/components/property-review"
import { PropertyAmenities } from "@/components/property-amenities"
import { PropertyGallery } from "@/components/property-gallery"
import { PropertyMap } from "@/components/property-map"
import { PropertyReservation } from "@/components/property-reservation"
import { Heart, Share, Star } from "lucide-react"

export default function PropertyDetailsPage() {
  const { id } = useParams()
  const property = properties.find((p) => p.id === Number(id)) || properties[0]
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">{property.title}</h1>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex items-center">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <span className="ml-1 font-medium">{property.rating}</span>
                <span className="text-muted-foreground">({property.reviews} avaliações)</span>
              </div>
              <span>•</span>
              <span className="text-muted-foreground">{property.location}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-1">
              <Share className="h-4 w-4" />
              <span>Compartilhar</span>
            </Button>
            <Button variant="outline" size="sm" className="gap-1">
              <Heart className="h-4 w-4" />
              <span>Salvar</span>
            </Button>
          </div>
        </div>
      </div>

      <PropertyGallery images={property.images} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <div className="md:col-span-2 space-y-8">
          <div className="flex items-center justify-between pb-4 border-b">
            <div>
              <h2 className="text-xl font-semibold">
                {property.type} hospedado por {property.host.name}
              </h2>
              <p className="text-muted-foreground">
                {property.guests} hóspedes • {property.bedrooms} quartos • {property.beds} camas • {property.bathrooms}{" "}
                banheiros
              </p>
            </div>
            <Avatar className="h-12 w-12">
              <AvatarImage src={property.host.avatar || "/placeholder.svg"} alt={property.host.name} />
              <AvatarFallback>{property.host.name.charAt(0)}</AvatarFallback>
            </Avatar>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M20 7h-9" />
                  <path d="M14 17H5" />
                  <circle cx="17" cy="17" r="3" />
                  <circle cx="7" cy="7" r="3" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Self check-in</h3>
                <p className="text-muted-foreground">Faça check-in sozinho com o porteiro.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M3 6a9 9 0 0 1 9 9" />
                  <path d="M3 6h4l2 -4" />
                  <path d="M3 6v4l-4 2" />
                  <circle cx="12" cy="15" r="9" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Ótima localização</h3>
                <p className="text-muted-foreground">95% dos hóspedes recentes deram 5 estrelas à localização.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Cancelamento gratuito por 48 horas</h3>
                <p className="text-muted-foreground">
                  Cancele até 48 horas antes do check-in e receba um reembolso total.
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-gray-700 whitespace-pre-line">{property.description}</p>
            <Button variant="link" className="px-0 mt-2 text-coral-500">
              Mostrar mais
            </Button>
          </div>

          <Separator />

          <div>
            <h2 className="text-xl font-semibold mb-4">O que este lugar oferece</h2>
            <PropertyAmenities amenities={property.amenities} />
          </div>

          <Separator />

          <div>
            <h2 className="text-xl font-semibold mb-4">Disponibilidade</h2>
            <p className="text-muted-foreground mb-4">Adicione suas datas de viagem para ver preços exatos</p>
            <div className="border rounded-lg p-4">
              <Calendar
                mode="range"
                selected={date ? { from: date, to: new Date(date.getTime() + 7 * 24 * 60 * 60 * 1000) } : undefined}
                onSelect={(range) => setDate(range?.from)}
                className="rounded-md border"
              />
            </div>
          </div>

          <Separator />

          <div>
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-xl font-semibold">Localização</h2>
              <Badge variant="outline">{property.location}</Badge>
            </div>
            <PropertyMap location={property.location} />
          </div>

          <Separator />

          <div>
            <div className="flex items-center gap-2 mb-4">
              <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
              <h2 className="text-xl font-semibold">
                {property.rating} · {property.reviews} avaliações
              </h2>
            </div>

            <Tabs defaultValue="all">
              <TabsList className="mb-4">
                <TabsTrigger value="all">Todas</TabsTrigger>
                <TabsTrigger value="positive">Positivas</TabsTrigger>
                <TabsTrigger value="negative">Negativas</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {property.reviewsList?.slice(0, 4).map((review, index) => (
                    <PropertyReview key={index} review={review} />
                  ))}
                </div>
                <Button variant="outline" className="w-full">
                  Mostrar todas as {property.reviews} avaliações
                </Button>
              </TabsContent>
              <TabsContent value="positive" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {property.reviewsList
                    ?.filter((r) => r.rating >= 4)
                    .slice(0, 4)
                    .map((review, index) => (
                      <PropertyReview key={index} review={review} />
                    ))}
                </div>
              </TabsContent>
              <TabsContent value="negative" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {property.reviewsList
                    ?.filter((r) => r.rating < 4)
                    .slice(0, 4)
                    .map((review, index) => (
                      <PropertyReview key={index} review={review} />
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        <div className="md:col-span-1">
          <div className="sticky top-24">
            <PropertyReservation property={property} />
          </div>
        </div>
      </div>
    </div>
  )
}
