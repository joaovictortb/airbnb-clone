"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { properties } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Calendar } from "@/components/ui/calendar";
import { useToast } from "@/components/ui/use-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CalendarIcon, CreditCard, Star } from "lucide-react";

const reservationSchema = z.object({
  checkIn: z.date({
    required_error: "A data de check-in é obrigatória",
  }),
  checkOut: z.date({
    required_error: "A data de check-out é obrigatória",
  }),
  guests: z.string().min(1, {
    message: "O número de hóspedes é obrigatório",
  }),
  cardName: z.string().min(3, {
    message: "O nome no cartão deve ter pelo menos 3 caracteres",
  }),
  cardNumber: z.string().min(16, {
    message: "O número do cartão deve ter 16 dígitos",
  }),
  cardExpiry: z.string().min(5, {
    message: "A data de validade deve estar no formato MM/AA",
  }),
  cardCvc: z.string().min(3, {
    message: "O código de segurança deve ter 3 dígitos",
  }),
});

type ReservationFormValues = z.infer<typeof reservationSchema>;

export default function ReservationPage() {
  const { id } = useParams();
  const router = useRouter();
  const { toast } = useToast();
  const property = properties.find((p) => p.id === Number(id)) || properties[0];

  const [isLoading, setIsLoading] = useState(false);
  const [dateRange, setDateRange] = useState<{
    from: Date;
    to: Date;
  }>({
    from: new Date(),
    to: new Date(new Date().setDate(new Date().getDate() + 5)),
  });

  // Calculate total price
  const nights = Math.ceil(
    (dateRange.to.getTime() - dateRange.from.getTime()) / (1000 * 60 * 60 * 24)
  );
  const subtotal = property.price * nights;
  const serviceFee = Math.round(subtotal * 0.12);
  const cleaningFee = 100;
  const total = subtotal + serviceFee + cleaningFee;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ReservationFormValues>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      checkIn: dateRange.from,
      checkOut: dateRange.to,
      guests: "2",
    },
  });

  const onSubmit = async (data: ReservationFormValues) => {
    setIsLoading(true);

    // Simulando uma chamada de API
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Reserva realizada com sucesso",
        description: "Você será redirecionado para a página de confirmação",
      });
      router.push("/perfil");
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Confirmar e pagar</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Sua viagem</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Datas</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {dateRange?.from ? (
                            dateRange.to ? (
                              <>
                                {format(dateRange.from, "dd/MM/yyyy", {
                                  locale: ptBR,
                                })}{" "}
                                -{" "}
                                {format(dateRange.to, "dd/MM/yyyy", {
                                  locale: ptBR,
                                })}
                              </>
                            ) : (
                              format(dateRange.from, "dd/MM/yyyy", {
                                locale: ptBR,
                              })
                            )
                          ) : (
                            <span>Selecione as datas</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="range"
                          selected={dateRange}
                          onSelect={(range) => {
                            if (range?.from && range?.to) {
                              setDateRange(range as { from: Date; to: Date });
                              setValue("checkIn", range.from);
                              setValue("checkOut", range.to);
                            }
                          }}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    {errors.checkIn && (
                      <p className="text-sm text-red-500">
                        {errors.checkIn.message}
                      </p>
                    )}
                    {errors.checkOut && (
                      <p className="text-sm text-red-500">
                        {errors.checkOut.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="guests">Hóspedes</Label>
                    <Select
                      defaultValue="2"
                      onValueChange={(value) => setValue("guests", value)}
                    >
                      <SelectTrigger id="guests">
                        <SelectValue placeholder="Selecione o número de hóspedes" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 hóspede</SelectItem>
                        <SelectItem value="2">2 hóspedes</SelectItem>
                        <SelectItem value="3">3 hóspedes</SelectItem>
                        <SelectItem value="4">4 hóspedes</SelectItem>
                        <SelectItem value="5">5 hóspedes</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.guests && (
                      <p className="text-sm text-red-500">
                        {errors.guests.message}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Pagamento</CardTitle>
                  <CardDescription>
                    Todas as transações são seguras e criptografadas
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="cardName">Nome no cartão</Label>
                    <Input
                      id="cardName"
                      placeholder="Nome como está no cartão"
                      {...register("cardName")}
                    />
                    {errors.cardName && (
                      <p className="text-sm text-red-500">
                        {errors.cardName.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">Número do cartão</Label>
                    <div className="relative">
                      <Input
                        id="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        {...register("cardNumber")}
                      />
                      <CreditCard className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                    </div>
                    {errors.cardNumber && (
                      <p className="text-sm text-red-500">
                        {errors.cardNumber.message}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="cardExpiry">Validade</Label>
                      <Input
                        id="cardExpiry"
                        placeholder="MM/AA"
                        {...register("cardExpiry")}
                      />
                      {errors.cardExpiry && (
                        <p className="text-sm text-red-500">
                          {errors.cardExpiry.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cardCvc">Código de segurança</Label>
                      <Input
                        id="cardCvc"
                        placeholder="123"
                        {...register("cardCvc")}
                      />
                      {errors.cardCvc && (
                        <p className="text-sm text-red-500">
                          {errors.cardCvc.message}
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Política de cancelamento</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Cancelamento gratuito por 48 horas. Após esse período, se
                    você cancelar até 5 dias antes do check-in, receberá um
                    reembolso parcial.
                  </p>
                </CardContent>
              </Card>

              <Button
                type="submit"
                className="w-full bg-coral-500 hover:bg-coral-600"
                disabled={isLoading}
              >
                {isLoading ? "Processando..." : "Confirmar e pagar"}
              </Button>
            </form>
          </div>

          <div className="md:col-span-1">
            <div className="sticky top-24 border rounded-lg p-6 space-y-4">
              <div className="flex items-center gap-4">
                <img
                  src={property.images[0] || "/placeholder.svg"}
                  alt={property.title}
                  className="h-20 w-20 rounded-lg object-cover"
                />
                <div>
                  <p className="text-sm text-muted-foreground">
                    {property.type}
                  </p>
                  <h3 className="font-medium">{property.title}</h3>
                  <div className="flex items-center text-sm">
                    <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                    <span className="ml-1">{property.rating}</span>
                    <span className="text-muted-foreground">
                      ({property.reviews})
                    </span>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold mb-2">Detalhes do preço</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>
                      R$ {property.price} x {nights} noites
                    </span>
                    <span>R$ {subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Taxa de limpeza</span>
                    <span>R$ {cleaningFee}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Taxa de serviço</span>
                    <span>R$ {serviceFee}</span>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>R$ {total}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
