import { Check, Home, Star, Wallet } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function HospedagemPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                Anuncie seu imóvel e comece a ganhar
              </h1>
              <p className="text-lg text-muted-foreground">
                Junte-se a milhares de anfitriões e comece a ganhar dinheiro
                alugando seu espaço para viajantes de todo o mundo.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-coral-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Anúncio gratuito</p>
                    <p className="text-sm text-muted-foreground">
                      Crie seu anúncio sem nenhum custo inicial
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-coral-500 mt-0.5" />
                  <div>
                    <p className="font-medium">
                      Você decide quando e como alugar
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Tenha controle total sobre disponibilidade, preços e
                      regras
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-coral-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Suporte 24/7</p>
                    <p className="text-sm text-muted-foreground">
                      Nossa equipe está sempre disponível para ajudar
                    </p>
                  </div>
                </div>
              </div>
              <Button size="lg" className="bg-coral-500 hover:bg-coral-600">
                Comece a anunciar
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Hospedagem"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Como funciona</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Anunciar seu imóvel é simples e rápido. Siga estes passos e comece
              a receber hóspedes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-coral-100 rounded-full flex items-center justify-center mx-auto">
                <Home className="h-8 w-8 text-coral-500" />
              </div>
              <h3 className="text-xl font-semibold">1. Crie seu anúncio</h3>
              <p className="text-muted-foreground">
                Adicione fotos, descrição e detalhes sobre seu espaço. Nosso
                assistente te ajuda em cada etapa.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-coral-100 rounded-full flex items-center justify-center mx-auto">
                <Star className="h-8 w-8 text-coral-500" />
              </div>
              <h3 className="text-xl font-semibold">2. Receba reservas</h3>
              <p className="text-muted-foreground">
                Defina seu calendário, preços e regras. Você pode aceitar
                reservas automaticamente ou revisar cada solicitação.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-coral-100 rounded-full flex items-center justify-center mx-auto">
                <Wallet className="h-8 w-8 text-coral-500" />
              </div>
              <h3 className="text-xl font-semibold">3. Comece a ganhar</h3>
              <p className="text-muted-foreground">
                Receba pagamentos seguros diretamente em sua conta bancária após
                o check-in dos hóspedes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Planos para anfitriões</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Escolha o plano que melhor se adapta às suas necessidades.
            </p>
          </div>

          <Tabs defaultValue="individual" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="individual">Anfitrião Individual</TabsTrigger>
              <TabsTrigger value="business">Anfitrião Profissional</TabsTrigger>
            </TabsList>
            <TabsContent value="individual">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Plano Básico</CardTitle>
                    <CardDescription>Para quem está começando</CardDescription>
                    <div className="mt-4">
                      <span className="text-3xl font-bold">3%</span>
                      <span className="text-muted-foreground">
                        {" "}
                        por reserva
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-coral-500" />
                        <span>Anúncio em destaque por 7 dias</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-coral-500" />
                        <span>Suporte por e-mail</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-coral-500" />
                        <span>Calendário de disponibilidade</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-coral-500" />
                        <span>Até 5 imóveis</span>
                      </li>
                    </ul>
                    <Button className="w-full mt-6 bg-coral-500 hover:bg-coral-600">
                      Começar agora
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Plano Premium</CardTitle>
                    <CardDescription>
                      Para anfitriões experientes
                    </CardDescription>
                    <div className="mt-4">
                      <span className="text-3xl font-bold">5%</span>
                      <span className="text-muted-foreground">
                        {" "}
                        por reserva
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-coral-500" />
                        <span>Anúncio em destaque permanente</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-coral-500" />
                        <span>Suporte prioritário 24/7</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-coral-500" />
                        <span>Ferramentas avançadas de precificação</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-coral-500" />
                        <span>Imóveis ilimitados</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-coral-500" />
                        <span>Relatórios detalhados de desempenho</span>
                      </li>
                    </ul>
                    <Button className="w-full mt-6 bg-coral-500 hover:bg-coral-600">
                      Começar agora
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="business">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Plano Empresarial</CardTitle>
                    <CardDescription>Para pequenas empresas</CardDescription>
                    <div className="mt-4">
                      <span className="text-3xl font-bold">7%</span>
                      <span className="text-muted-foreground">
                        {" "}
                        por reserva
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-coral-500" />
                        <span>Painel de controle empresarial</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-coral-500" />
                        <span>Gerenciamento de equipe</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-coral-500" />
                        <span>API de integração</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-coral-500" />
                        <span>Até 50 imóveis</span>
                      </li>
                    </ul>
                    <Button className="w-full mt-6 bg-coral-500 hover:bg-coral-600">
                      Falar com vendas
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Plano Corporativo</CardTitle>
                    <CardDescription>Para grandes operações</CardDescription>
                    <div className="mt-4">
                      <span className="text-3xl font-bold">Personalizado</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-coral-500" />
                        <span>Gerente de conta dedicado</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-coral-500" />
                        <span>Soluções personalizadas</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-coral-500" />
                        <span>Integrações avançadas</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-coral-500" />
                        <span>Imóveis ilimitados</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-coral-500" />
                        <span>Suporte técnico prioritário</span>
                      </li>
                    </ul>
                    <Button className="w-full mt-6 bg-coral-500 hover:bg-coral-600">
                      Solicitar proposta
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              O que dizem nossos anfitriões
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Veja como a NomeAqui tem ajudado anfitriões a alcançar seus
              objetivos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-50">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                </div>
                <p className="italic mb-6">
                  "Comecei a alugar meu apartamento extra há 6 meses e já tive
                  mais de 20 reservas. A plataforma é intuitiva e o suporte é
                  excelente."
                </p>
                <div className="flex items-center gap-3">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Foto do anfitrião"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-medium">Roberto Almeida</div>
                    <div className="text-sm text-muted-foreground">
                      Anfitrião desde 2022
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gray-50">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                </div>
                <p className="italic mb-6">
                  "As ferramentas de gestão são fantásticas. Consigo administrar
                  meus 3 imóveis com facilidade e os pagamentos são sempre
                  pontuais."
                </p>
                <div className="flex items-center gap-3">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Foto do anfitrião"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-medium">Carla Mendes</div>
                    <div className="text-sm text-muted-foreground">
                      Anfitriã desde 2021
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gray-50">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                </div>
                <p className="italic mb-6">
                  "Minha pousada teve um aumento de 40% nas reservas desde que
                  comecei a anunciar na NomeAqui. O plano Premium vale cada
                  centavo."
                </p>
                <div className="flex items-center gap-3">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Foto do anfitrião"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-medium">Paulo Santos</div>
                    <div className="text-sm text-muted-foreground">
                      Anfitrião desde 2020
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-coral-500 text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para começar?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Junte-se a milhares de anfitriões e comece a ganhar dinheiro com seu
            imóvel hoje mesmo.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="bg-white text-coral-500 hover:bg-gray-100"
          >
            Criar meu anúncio
          </Button>
        </div>
      </section>
    </div>
  );
}
