import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";

const destinations = [
  {
    id: 1,
    name: "Rio de Janeiro",
    properties: 1245,
    image: "/destino.jpg",
  },
  {
    id: 2,
    name: "São Paulo",
    properties: 1876,
    image: "/destino2.jpg",
  },
  {
    id: 3,
    name: "Florianópolis",
    properties: 856,
    image: "/destino3.jpg",
  },
  {
    id: 4,
    name: "Salvador",
    properties: 723,
    image: "/destino4.jpg",
  },
  {
    id: 5,
    name: "Gramado",
    properties: 512,
    image: "/destino5.jpg",
  },
  {
    id: 6,
    name: "Fortaleza",
    properties: 689,
    image: "/destino6.jpeg",
  },
];

export function PopularDestinations() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {destinations.map((destination) => (
        <Link
          key={destination.id}
          href="#"
          className="group relative overflow-hidden rounded-lg aspect-[4/3] block"
        >
          <Image
            src={destination.image || "/placeholder.svg"}
            alt={destination.name}
            width={400}
            height={300}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 p-4 text-white">
            <h3 className="text-xl font-bold">{destination.name}</h3>
            <div className="flex items-center gap-1 mt-1">
              <MapPin className="h-4 w-4" />
              <span>{destination.properties} propriedades</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
