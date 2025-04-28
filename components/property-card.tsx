import Link from "next/link";
import { Heart, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface PropertyType {
  id: number;
  title: string;
  location: string;
  price: number;
  rating: number;
  reviews: number;
  images: string[];
  type: string;
  isFeatured?: boolean;
}

interface PropertyCardProps {
  property?: PropertyType;
  title?: string;
  location?: string;
  price?: number;
  rating?: number;
  reviews?: number;
  image?: string;
  isFeatured?: boolean;
}

export function PropertyCard(props: PropertyCardProps) {
  // Handle both usage patterns
  const property = props.property || {
    id: props.property?.id || 0,
    title: props.title || "",
    location: props.location || "",
    price: props.price || 0,
    rating: props.rating || 0,
    reviews: props.reviews || 0,
    images: props.image ? [props.image] : [],
    type: props.property?.type || "Imóvel",
    isFeatured: props.isFeatured || false,
  };

  const image =
    property.images?.[0] ||
    props.image ||
    "/placeholder.svg?height=300&width=400";
  const id = property.id || 0;

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="relative">
        <Link
          href={`/imoveis/${id}`}
          className="block aspect-[4/3] overflow-hidden"
        >
          <img
            src={image || "/placeholder.svg"}
            alt={property.title}
            className="h-full w-full object-cover transition-transform hover:scale-105"
          />
        </Link>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 h-8 w-8 rounded-full bg-white/80 text-gray-700 backdrop-blur-sm hover:bg-white/90 hover:text-coral-500"
        >
          <Heart className="h-5 w-5" />
          <span className="sr-only">Adicionar aos favoritos</span>
        </Button>
        {property.isFeatured && (
          <Badge className="absolute left-2 top-2 bg-coral-500 hover:bg-coral-600">
            Destaque
          </Badge>
        )}
      </div>
      <CardContent className="p-4">
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <MapPin className="h-3.5 w-3.5" />
          <span>{property.location}</span>
        </div>
        <h3 className="mt-2 font-semibold leading-tight">
          <Link href={`/imoveis/${id}`} className="hover:underline">
            {property.title}
          </Link>
        </h3>
        <div className="mt-2 flex items-center gap-1">
          <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
          <span className="font-medium">{property.rating}</span>
          <span className="text-muted-foreground">
            ({property.reviews} avaliações)
          </span>
        </div>
        <div className="mt-3">
          <span className="font-semibold">R$ {property.price}</span>
          <span className="text-muted-foreground"> / noite</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex gap-2">
        <Link href={`/imoveis/${id}`}>
          <Button className="w-full">Ver detalhes</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
