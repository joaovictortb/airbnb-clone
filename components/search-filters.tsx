"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { CalendarIcon, Search } from "lucide-react"

interface SearchFiltersProps {
  className?: string
}

export function SearchFilters({ className }: SearchFiltersProps) {
  const [date, setDate] = useState<{
    from: Date
    to: Date
  }>({
    from: new Date(),
    to: new Date(new Date().setDate(new Date().getDate() + 7)),
  })

  return (
    <div className={className}>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Destino</label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input className="pl-9" placeholder="Para onde você vai?" />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Check-in / Check-out</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-start text-left font-normal">
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date?.from ? (
                  date.to ? (
                    <>
                      {format(date.from, "dd/MM/yyyy", { locale: ptBR })} -{" "}
                      {format(date.to, "dd/MM/yyyy", { locale: ptBR })}
                    </>
                  ) : (
                    format(date.from, "dd/MM/yyyy", { locale: ptBR })
                  )
                ) : (
                  <span>Selecione as datas</span>
                )}
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
              <SelectItem value="5">5+ hóspedes</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-end">
          <Button className="w-full bg-coral-500 hover:bg-coral-600">
            <Search className="mr-2 h-4 w-4" />
            Buscar
          </Button>
        </div>
      </div>
    </div>
  )
}
