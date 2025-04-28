"use client"

import { Badge } from "@/components/ui/badge"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { PropertyCard } from "@/components/property-card"
import { properties } from "@/lib/data"
import { useToast } from "@/components/ui/use-toast"
import { Edit, LogOut, Settings, User } from "lucide-react"

export default function ProfilePage() {
  const { toast } = useToast()
  const [isEditing, setIsEditing] = useState(false)

  const handleSaveProfile = () => {
    setIsEditing(false)
    toast({
      title: "Perfil atualizado",
      description: "Suas informações foram atualizadas com sucesso",
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4">
            <div className="sticky top-24 space-y-6">
              <div className="flex flex-col items-center text-center">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src="/placeholder.svg?height=96&width=96" alt="@user" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <h2 className="text-xl font-bold">João da Silva</h2>
                <p className="text-muted-foreground">Membro desde 2023</p>
              </div>

              <Separator />

              <nav className="space-y-1">
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link href="/perfil">
                    <User className="mr-2 h-4 w-4" />
                    <span>Perfil</span>
                  </Link>
                </Button>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link href="/perfil/reservas">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4"
                    >
                      <path d="M8 2v4" />
                      <path d="M16 2v4" />
                      <rect width="18" height="18" x="3" y="4" rx="2" />
                      <path d="M3 10h18" />
                    </svg>
                    <span>Reservas</span>
                  </Link>
                </Button>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link href="/perfil/favoritos">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4"
                    >
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                    <span>Favoritos</span>
                  </Link>
                </Button>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link href="/perfil/configuracoes">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Configurações</span>
                  </Link>
                </Button>
              </nav>

              <Separator />

              <Button
                variant="outline"
                className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50"
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Sair</span>
              </Button>
            </div>
          </div>

          <div className="md:w-3/4">
            <Tabs defaultValue="profile">
              <TabsList className="mb-6">
                <TabsTrigger value="profile">Perfil</TabsTrigger>
                <TabsTrigger value="reservations">Reservas</TabsTrigger>
                <TabsTrigger value="favorites">Favoritos</TabsTrigger>
              </TabsList>

              <TabsContent value="profile" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Informações pessoais</h2>
                  <Button variant="outline" size="sm" onClick={() => setIsEditing(!isEditing)}>
                    {isEditing ? (
                      "Cancelar"
                    ) : (
                      <>
                        <Edit className="mr-2 h-4 w-4" />
                        <span>Editar</span>
                      </>
                    )}
                  </Button>
                </div>

                {isEditing ? (
                  <div className="space-y-4 border rounded-lg p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Nome</Label>
                        <Input id="firstName" defaultValue="João" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Sobrenome</Label>
                        <Input id="lastName" defaultValue="da Silva" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue="joao.silva@example.com" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone</Label>
                      <Input id="phone" defaultValue="(11) 98765-4321" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Endereço</Label>
                      <Input id="address" defaultValue="Rua das Flores, 123" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">Cidade</Label>
                        <Input id="city" defaultValue="São Paulo" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state">Estado</Label>
                        <Input id="state" defaultValue="SP" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="zipCode">CEP</Label>
                        <Input id="zipCode" defaultValue="01234-567" />
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Button className="bg-coral-500 hover:bg-coral-600" onClick={handleSaveProfile}>
                        Salvar alterações
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4 border rounded-lg p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground">Nome completo</h3>
                        <p>João da Silva</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground">Email</h3>
                        <p>joao.silva@example.com</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground">Telefone</h3>
                        <p>(11) 98765-4321</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground">Endereço</h3>
                        <p>Rua das Flores, 123</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground">Cidade/Estado</h3>
                        <p>São Paulo, SP</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground">CEP</h3>
                        <p>01234-567</p>
                      </div>
                    </div>
                  </div>
                )}

                <Separator />

                <div>
                  <h2 className="text-2xl font-bold mb-4">Preferências</h2>
                  <div className="space-y-4 border rounded-lg p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Notificações por email</h3>
                        <p className="text-sm text-muted-foreground">Receba atualizações sobre reservas e promoções</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="emailNotifications"
                          className="h-4 w-4 rounded border-gray-300"
                          defaultChecked
                        />
                        <Label htmlFor="emailNotifications" className="text-sm">
                          Ativado
                        </Label>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Notificações por SMS</h3>
                        <p className="text-sm text-muted-foreground">Receba lembretes sobre suas reservas</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="smsNotifications" className="h-4 w-4 rounded border-gray-300" />
                        <Label htmlFor="smsNotifications" className="text-sm">
                          Desativado
                        </Label>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Moeda</h3>
                        <p className="text-sm text-muted-foreground">Moeda padrão para exibição de preços</p>
                      </div>
                      <select className="h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm">
                        <option>BRL (R$)</option>
                        <option>USD ($)</option>
                        <option>EUR (€)</option>
                      </select>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Idioma</h3>
                        <p className="text-sm text-muted-foreground">Idioma padrão do site</p>
                      </div>
                      <select className="h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm">
                        <option>Português (Brasil)</option>
                        <option>English</option>
                        <option>Español</option>
                      </select>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="reservations" className="space-y-6">
                <h2 className="text-2xl font-bold">Suas reservas</h2>

                <div className="space-y-4">
                  <div className="border rounded-lg p-6">
                    <div className="flex flex-col md:flex-row gap-4">
                      <img
                        src="/placeholder.svg?height=150&width=150"
                        alt="Imóvel"
                        className="h-32 w-32 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                          <h3 className="text-lg font-semibold">Apartamento com vista para o mar</h3>
                          <Badge variant="outline" className="w-fit">
                            Confirmada
                          </Badge>
                        </div>
                        <p className="text-muted-foreground">Rio de Janeiro, Brasil</p>
                        <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-2">
                          <div>
                            <p className="text-sm font-medium">Check-in</p>
                            <p className="text-sm">15 de Junho, 2023</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium">Check-out</p>
                            <p className="text-sm">20 de Junho, 2023</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium">Hóspedes</p>
                            <p className="text-sm">2 hóspedes</p>
                          </div>
                        </div>
                        <div className="mt-4 flex flex-wrap gap-2">
                          <Button variant="outline" size="sm">
                            Ver detalhes
                          </Button>
                          <Button variant="outline" size="sm">
                            Cancelar reserva
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-lg p-6">
                    <div className="flex flex-col md:flex-row gap-4">
                      <img
                        src="/placeholder.svg?height=150&width=150"
                        alt="Imóvel"
                        className="h-32 w-32 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                          <h3 className="text-lg font-semibold">Chalé na montanha</h3>
                          <Badge variant="outline" className="w-fit bg-gray-100">
                            Concluída
                          </Badge>
                        </div>
                        <p className="text-muted-foreground">Gramado, Brasil</p>
                        <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-2">
                          <div>
                            <p className="text-sm font-medium">Check-in</p>
                            <p className="text-sm">10 de Janeiro, 2023</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium">Check-out</p>
                            <p className="text-sm">15 de Janeiro, 2023</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium">Hóspedes</p>
                            <p className="text-sm">4 hóspedes</p>
                          </div>
                        </div>
                        <div className="mt-4 flex flex-wrap gap-2">
                          <Button variant="outline" size="sm">
                            Ver detalhes
                          </Button>
                          <Button variant="outline" size="sm">
                            Avaliar estadia
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="favorites" className="space-y-6">
                <h2 className="text-2xl font-bold mb-4">Seus favoritos</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {properties.slice(0, 3).map((property) => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
