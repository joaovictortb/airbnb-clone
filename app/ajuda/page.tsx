import { ChevronRight, Search } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AjudaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-gray-50 py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">Como podemos ajudar?</h1>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Busque por tópicos, perguntas ou palavras-chave..."
                className="pl-10 h-12 w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Reservas</CardTitle>
                <CardDescription>Gerenciar, alterar ou cancelar</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-coral-500 hover:underline flex items-center">
                      Como fazer uma reserva
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-coral-500 hover:underline flex items-center">
                      Cancelar uma reserva
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-coral-500 hover:underline flex items-center">
                      Alterar datas
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Conta</CardTitle>
                <CardDescription>Perfil, pagamentos e segurança</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-coral-500 hover:underline flex items-center">
                      Editar perfil
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-coral-500 hover:underline flex items-center">
                      Métodos de pagamento
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-coral-500 hover:underline flex items-center">
                      Segurança da conta
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Hospedagem</CardTitle>
                <CardDescription>Anunciar e gerenciar imóveis</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-coral-500 hover:underline flex items-center">
                      Criar um anúncio
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-coral-500 hover:underline flex items-center">
                      Definir preços
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-coral-500 hover:underline flex items-center">
                      Receber pagamentos
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Suporte</CardTitle>
                <CardDescription>Contato e resolução de problemas</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-coral-500 hover:underline flex items-center">
                      Falar com atendente
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-coral-500 hover:underline flex items-center">
                      Relatar problema
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-coral-500 hover:underline flex items-center">
                      Reembolsos
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Perguntas Frequentes</h2>

            <Tabs defaultValue="hospedes">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="hospedes">Para Hóspedes</TabsTrigger>
                <TabsTrigger value="anfitrioes">Para Anfitriões</TabsTrigger>
              </TabsList>
              <TabsContent value="hospedes">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Como faço uma reserva?</AccordionTrigger>
                    <AccordionContent>
                      Para fazer uma reserva, basta pesquisar o destino desejado, selecionar as datas e número de
                      hóspedes, e escolher uma acomodação. Você pode filtrar os resultados por preço, tipo de acomodação
                      e comodidades. Após selecionar uma propriedade, revise os detalhes e clique em "Reservar" para
                      finalizar o processo.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Como posso cancelar uma reserva?</AccordionTrigger>
                    <AccordionContent>
                      Para cancelar uma reserva, acesse sua conta, vá para "Minhas Viagens", selecione a reserva que
                      deseja cancelar e clique em "Cancelar Reserva". As políticas de cancelamento variam de acordo com
                      cada anfitrião, então verifique as condições antes de fazer a reserva.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Quais são as formas de pagamento aceitas?</AccordionTrigger>
                    <AccordionContent>
                      Aceitamos cartões de crédito e débito das principais bandeiras (Visa, Mastercard, American
                      Express), PayPal, PIX e boleto bancário. Todas as transações são processadas em ambiente seguro
                      para garantir a proteção dos seus dados.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>O que fazer se tiver problemas durante a estadia?</AccordionTrigger>
                    <AccordionContent>
                      Se você encontrar qualquer problema durante sua estadia, entre em contato com o anfitrião primeiro
                      através da plataforma. Se o problema persistir, nossa equipe de suporte está disponível 24/7 para
                      ajudar. Acesse a seção "Ajuda" em sua conta ou entre em contato pelo telefone de emergência
                      fornecido na confirmação da reserva.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger>Como funciona o sistema de avaliações?</AccordionTrigger>
                    <AccordionContent>
                      Após cada estadia, tanto hóspedes quanto anfitriões podem deixar avaliações. Você terá 14 dias
                      após o check-out para avaliar sua experiência. As avaliações são publicadas somente quando ambas
                      as partes completam o processo ou após o período de 14 dias.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>
              <TabsContent value="anfitrioes">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Como começar a anunciar meu imóvel?</AccordionTrigger>
                    <AccordionContent>
                      Para começar a anunciar, clique em "Torne-se um anfitrião" no menu principal. Nosso processo
                      guiado ajudará você a criar seu anúncio em etapas simples: adicionar fotos e descrições, definir
                      preços e disponibilidade, e estabelecer regras da casa. O anúncio pode ser publicado em
                      aproximadamente 30 minutos.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Quanto custa anunciar na plataforma?</AccordionTrigger>
                    <AccordionContent>
                      Criar um anúncio é gratuito. Cobramos uma taxa de serviço apenas quando você recebe uma reserva. A
                      taxa padrão é de 3% do valor da reserva para o plano Básico e 5% para o plano Premium, que oferece
                      benefícios adicionais como destaque nas buscas e suporte prioritário.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Como recebo os pagamentos?</AccordionTrigger>
                    <AccordionContent>
                      Os pagamentos são processados automaticamente 24 horas após o check-in do hóspede. O valor é
                      transferido para sua conta bancária cadastrada em até 3 dias úteis. Você pode acompanhar todos os
                      pagamentos e extratos na seção "Finanças" do seu painel de anfitrião.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>Como gerenciar meu calendário de disponibilidade?</AccordionTrigger>
                    <AccordionContent>
                      No seu painel de anfitrião, acesse a seção "Calendário" para gerenciar a disponibilidade do seu
                      imóvel. Você pode bloquear datas, definir preços personalizados para temporadas específicas e
                      configurar reservas mínimas. Também oferecemos a opção de sincronização com outros calendários
                      como Google Calendar e iCal.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger>O que é a verificação de identidade para anfitriões?</AccordionTrigger>
                    <AccordionContent>
                      A verificação de identidade é um processo de segurança que ajuda a construir confiança na
                      plataforma. Anfitriões verificados recebem um selo especial em seus anúncios, o que aumenta a
                      confiança dos hóspedes. O processo inclui a verificação de documentos oficiais e pode ser
                      concluído em até 24 horas.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Ainda precisa de ajuda?</h2>
            <p className="text-muted-foreground mb-8">
              Nossa equipe de suporte está disponível 24 horas por dia, 7 dias por semana.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center space-y-4">
                    <div className="mx-auto w-12 h-12 rounded-full bg-coral-100 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-coral-500"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold">Telefone</h3>
                    <p className="text-sm text-muted-foreground">Fale diretamente com um atendente</p>
                    <Button className="w-full bg-coral-500 hover:bg-coral-600">0800 123 4567</Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center space-y-4">
                    <div className="mx-auto w-12 h-12 rounded-full bg-coral-100 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-coral-500"
                      >
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold">Chat</h3>
                    <p className="text-sm text-muted-foreground">Converse em tempo real</p>
                    <Button className="w-full bg-coral-500 hover:bg-coral-600">Iniciar chat</Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center space-y-4">
                    <div className="mx-auto w-12 h-12 rounded-full bg-coral-100 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-coral-500"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>
                    <h3 className="font-semibold">E-mail</h3>
                    <p className="text-sm text-muted-foreground">Envie sua mensagem</p>
                    <Button className="w-full bg-coral-500 hover:bg-coral-600">contato@estadiafacil.com</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
