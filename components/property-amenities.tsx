import type React from "react"
import { Button } from "@/components/ui/button"
import { Wifi, Tv, Car, Snowflake, Utensils, Waves, Dog, Coffee } from "lucide-react"

interface PropertyAmenitiesProps {
  amenities: string[]
}

export function PropertyAmenities({ amenities }: PropertyAmenitiesProps) {
  // Map de ícones para cada tipo de comodidade
  const amenityIcons: Record<string, React.ReactNode> = {
    wifi: <Wifi className="h-5 w-5" />,
    tv: <Tv className="h-5 w-5" />,
    estacionamento: <Car className="h-5 w-5" />,
    "ar-condicionado": <Snowflake className="h-5 w-5" />,
    cozinha: <Utensils className="h-5 w-5" />,
    piscina: <Waves className="h-5 w-5" />,
    "aceita-pets": <Dog className="h-5 w-5" />,
    "máquina-de-café": <Coffee className="h-5 w-5" />,
  }

  // Mostrar apenas 8 comodidades inicialmente
  const visibleAmenities = amenities.slice(0, 8)
  const hasMoreAmenities = amenities.length > 8

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {visibleAmenities.map((amenity) => (
          <div key={amenity} className="flex items-center gap-3">
            {amenityIcons[amenity.toLowerCase()] || (
              <div className="h-5 w-5 rounded-full bg-gray-100 flex items-center justify-center">
                <span className="h-2 w-2 rounded-full bg-gray-400"></span>
              </div>
            )}
            <span>{amenity}</span>
          </div>
        ))}
      </div>

      {hasMoreAmenities && <Button variant="outline">Mostrar todas as {amenities.length} comodidades</Button>}
    </div>
  )
}
