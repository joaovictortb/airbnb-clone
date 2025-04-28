"use client";

import { Search, MapPin, LucideCalendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export function SearchBar() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [guests, setGuests] = useState(2);

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="relative md:col-span-5">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <MapPin className="h-5 w-5 text-gray-400" />
          </div>
          <Input
            type="text"
            placeholder="Onde você quer ir?"
            className="pl-10 h-12 w-full"
          />
        </div>

        <div className="md:col-span-3">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal h-12"
              >
                <LucideCalendar className="mr-2 h-4 w-4" />
                {date ? (
                  <span>{date.toLocaleDateString("pt-BR")}</span>
                ) : (
                  <span className="text-muted-foreground">
                    Selecione a data
                  </span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="md:col-span-2">
          <div className="flex items-center h-12 w-full border rounded-md px-3">
            <Users className="mr-2 h-4 w-4 text-gray-400" />
            <select
              className="w-full bg-transparent focus:outline-none"
              value={guests}
              onChange={(e) => setGuests(Number.parseInt(e.target.value))}
            >
              <option value="1">1 hóspede</option>
              <option value="2">2 hóspedes</option>
              <option value="3">3 hóspedes</option>
              <option value="4">4 hóspedes</option>
              <option value="5">5+ hóspedes</option>
            </select>
          </div>
        </div>

        <div className="md:col-span-2">
          <Button className="w-full h-12 bg-coral-500 hover:bg-coral-600">
            <Search className="mr-2 h-4 w-4" />
            Buscar
          </Button>
        </div>
      </div>
    </div>
  );
}
