"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { CalendarIcon, Star } from "lucide-react"

interface PropertyReservationProps {
  property: {
    id: number
    price: number
    rating: number
    reviews: number
  }
}

export function PropertyReservation({ property }: PropertyReservationProps) {
  const router = useRouter()
  const [date, setDate] = useState<{
    from: Date
    to: Date
  }>({
    from: new Date(),
    to: new Date(new Date().setDate(new Date().getDate() + 5)),
  })

  // Calculate total price
  const nights = Math.ceil((date.to.getTime() - date.from.getTime()) / (1000 * 60 * 60 * 24))
  const subtotal = property.price * nights
  const serviceFee = Math.round(subtotal * 0.12)
  const cleaningFee = 100
  const total = subtotal + serviceFee + cleaningFee

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div>
            <span className="text-xl">R$ {property.price}</span>
            <span className="text-muted-foreground"> / noite</span>
          </div>
          <div className="flex items-center text-sm">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            <span className="ml-1">{property.rating}</span>
            <span className="text-muted-foreground">({property.reviews} avaliações)</span>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-2">
          <div className="space-y-2">
            <label className="text-sm font-medium">Check-in</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start text-left font-normal">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date?.from ? format(date.from, "dd/MM/yyyy", { locale: ptBR }) : <span>Selecione</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="range"
                  selected={date}
                  onSelect={(range) => {
                    if (range?.from && range?.to) {
                      setDate(range as { from: Date; to: Date })
                    }
                  }}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Check-out</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start text-left font-normal">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date?.to ? format(date.to, "dd/MM/yyyy", { locale: ptBR }) : <span>Selecione</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="range"
                  selected={date}
                  onSelect={(range) => {
                    if (range?.from && range?.to) {
                      setDate(range as { from: Date; to: Date })
                    }
                  }}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Hóspedes</label>
          <Select defaultValue="2">
            <SelectTrigger>
              <SelectValue placeholder="Selecione o número de hóspedes" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 hóspede</SelectItem>
              <SelectItem value="2">2 hóspedes</SelectItem>
              <SelectItem value="3">3 hóspedes</SelectItem>
              <SelectItem value="4">4 hóspedes</SelectItem>
              <SelectItem value="5">5 hóspedes</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Separator />

        <div className="space-y-2">
          <div className="flex justify-between">
            <span>
              R$ {property.price} x {nights} noites
            </span>
            <span>R$ {subtotal}</span>
          </div>
          <div className="flex justify-between">
            <span>Taxa de limpeza</span>
            <span>R$ {cleaningFee}</span>
          </div>
          <div className="flex justify-between">
            <span>Taxa de serviço</span>
            <span>R$ {serviceFee}</span>
          </div>
        </div>

        <Separator />

        <div className="flex justify-between font-semibold">
          <span>Total</span>
          <span>R$ {total}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full bg-coral-500 hover:bg-coral-600"
          onClick={() => router.push(`/reserva/${property.id}`)}
        >
          Reservar
        </Button>
      </CardFooter>
    </Card>
  )
}
