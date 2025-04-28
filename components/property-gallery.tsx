"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Grid } from "lucide-react"

interface PropertyGalleryProps {
  images: string[]
}

export function PropertyGallery({ images }: PropertyGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0)

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-2 h-[400px] md:h-[500px]">
        <div className="md:col-span-2 md:row-span-2 relative rounded-tl-xl rounded-bl-xl overflow-hidden">
          <img
            src={images[0] || "/placeholder.svg?height=500&width=500"}
            alt="Imóvel"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="hidden md:block relative rounded-tr-xl overflow-hidden">
          <img
            src={images[1] || "/placeholder.svg?height=250&width=250"}
            alt="Imóvel"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="hidden md:block relative overflow-hidden">
          <img
            src={images[2] || "/placeholder.svg?height=250&width=250"}
            alt="Imóvel"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="hidden md:block relative overflow-hidden">
          <img
            src={images[3] || "/placeholder.svg?height=250&width=250"}
            alt="Imóvel"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="hidden md:block relative rounded-br-xl overflow-hidden">
          <img
            src={images[4] || "/placeholder.svg?height=250&width=250"}
            alt="Imóvel"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="secondary" size="sm" className="absolute bottom-4 right-4 gap-1">
            <Grid className="h-4 w-4" />
            <span>Ver todas as fotos</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Galeria de fotos</DialogTitle>
          </DialogHeader>
          <div className="relative mt-4 h-[500px] overflow-hidden rounded-lg">
            <img
              src={images[currentImage] || "/placeholder.svg?height=500&width=800"}
              alt="Imóvel"
              className="h-full w-full object-contain"
            />
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full"
              onClick={() => setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Anterior</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full"
              onClick={() => setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Próxima</span>
            </Button>
          </div>
          <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
            {images.map((image, index) => (
              <button
                key={index}
                className={`relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md ${
                  currentImage === index ? "ring-2 ring-coral-500" : ""
                }`}
                onClick={() => setCurrentImage(index)}
              >
                <img
                  src={image || "/placeholder.svg?height=80&width=80"}
                  alt={`Imóvel ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

// Adicionar os componentes que faltam
import { ChevronLeft, ChevronRight } from "lucide-react"
