interface PropertyMapProps {
  location: string
}

export function PropertyMap({ location }: PropertyMapProps) {
  return (
    <div className="h-[300px] w-full rounded-lg overflow-hidden border">
      <img
        src="/placeholder.svg?height=300&width=800"
        alt={`Mapa de ${location}`}
        className="h-full w-full object-cover"
      />
      <div className="sr-only">Mapa mostrando a localização do imóvel em {location}</div>
    </div>
  )
}
