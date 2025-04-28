"use client"

import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const testimonials = [
  {
    id: 1,
    name: "Ana Silva",
    location: "São Paulo, Brasil",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    text: "Experiência incrível! O apartamento era exatamente como nas fotos, super limpo e bem localizado. O anfitrião foi muito atencioso e nos deu ótimas dicas sobre a cidade.",
  },
  {
    id: 2,
    name: "Carlos Oliveira",
    location: "Rio de Janeiro, Brasil",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    text: "Ficamos hospedados por uma semana e foi perfeito. A casa é espaçosa, confortável e tem uma vista maravilhosa. Certamente voltaremos!",
  },
  {
    id: 3,
    name: "Mariana Costa",
    location: "Florianópolis, Brasil",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4,
    text: "Ótima localização, perto de restaurantes e da praia. O apartamento é aconchegante e tem tudo o que precisamos. Recomendo!",
  },
  {
    id: 4,
    name: "Pedro Santos",
    location: "Salvador, Brasil",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    text: "Uma das melhores experiências que já tive! O chalé é lindo, bem equipado e o anfitrião nos recebeu super bem. Voltarei com certeza!",
  },
  {
    id: 5,
    name: "Juliana Mendes",
    location: "Gramado, Brasil",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    text: "Lugar incrível, superou todas as expectativas! Muito limpo, organizado e com uma decoração de bom gosto. Recomendo a todos!",
  },
  {
    id: 6,
    name: "Rafael Almeida",
    location: "Belo Horizonte, Brasil",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4,
    text: "Apartamento muito bem localizado, com ótima estrutura e conforto. O anfitrião foi super atencioso e nos ajudou com tudo o que precisamos.",
  },
]

export function TestimonialCarousel() {
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 3
  const totalPages = Math.ceil(testimonials.length / itemsPerPage)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const currentTestimonials = testimonials.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {currentTestimonials.map((testimonial) => (
          <Card key={testimonial.id} className="h-full">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < testimonial.rating ? "fill-amber-400 text-amber-400" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6">"{testimonial.text}"</p>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex justify-center mt-8 gap-2">
        <Button variant="outline" size="icon" className="rounded-full" onClick={prevPage} aria-label="Página anterior">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        {Array.from({ length: totalPages }).map((_, i) => (
          <Button
            key={i}
            variant={i === currentPage ? "default" : "outline"}
            size="icon"
            className={`w-8 h-8 rounded-full ${i === currentPage ? "bg-coral-500 hover:bg-coral-600" : ""}`}
            onClick={() => setCurrentPage(i)}
            aria-label={`Página ${i + 1}`}
          >
            {i + 1}
          </Button>
        ))}
        <Button variant="outline" size="icon" className="rounded-full" onClick={nextPage} aria-label="Próxima página">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
