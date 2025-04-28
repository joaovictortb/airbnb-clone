"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, Search } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="/"
                className="flex items-center gap-2 text-lg font-semibold"
              >
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
                  <path d="M12 2a8 8 0 0 0-8 8c0 5 8 12 8 12s8-7 8-12a8 8 0 0 0-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                </svg>
                <span>NomeAqui</span>
              </Link>
              <Link
                href="/"
                className={`transition-colors hover:text-foreground/80 ${
                  pathname === "/" ? "text-foreground" : "text-foreground/60"
                }`}
              >
                Início
              </Link>
              <Link
                href="/imoveis"
                className={`transition-colors hover:text-foreground/80 ${
                  pathname?.startsWith("/imoveis")
                    ? "text-foreground"
                    : "text-foreground/60"
                }`}
              >
                Imóveis
              </Link>
              <Link
                href="/hospedagem"
                className={`transition-colors hover:text-foreground/80 ${
                  pathname === "/hospedagem"
                    ? "text-foreground"
                    : "text-foreground/60"
                }`}
              >
                Seja um anfitrião
              </Link>

              <Link
                href="/explorar"
                className={`transition-colors hover:text-foreground/80 ${
                  pathname === "/explorar"
                    ? "text-foreground"
                    : "text-foreground/60"
                }`}
              >
                Explorar
              </Link>
              <Link
                href="/ajuda"
                className={`transition-colors hover:text-foreground/80 ${
                  pathname === "/ajuda"
                    ? "text-foreground"
                    : "text-foreground/60"
                }`}
              >
                Ajuda
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <Link href="/" className="ml-4 md:ml-0 flex items-center gap-2">
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
            <path d="M12 2a8 8 0 0 0-8 8c0 5 8 12 8 12s8-7 8-12a8 8 0 0 0-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
          </svg>
          <span className="hidden font-bold sm:inline-block">NomeAqui</span>
        </Link>
        <nav className="mx-6 hidden items-center space-x-4 md:flex md:flex-1">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors hover:text-foreground/80 ${
              pathname === "/" ? "text-foreground" : "text-foreground/60"
            }`}
          >
            Início
          </Link>
          <Link
            href="/imoveis"
            className={`text-sm font-medium transition-colors hover:text-foreground/80 ${
              pathname?.startsWith("/imoveis")
                ? "text-foreground"
                : "text-foreground/60"
            }`}
          >
            Imóveis
          </Link>
          <Link
            href="/hospedagem"
            className={`text-sm font-medium transition-colors hover:text-foreground/80 ${
              pathname === "/hospedagem"
                ? "text-foreground"
                : "text-foreground/60"
            }`}
          >
            Seja um anfitrião
          </Link>

          <Link
            href="/explorar"
            className={`text-sm font-medium transition-colors hover:text-foreground/80 ${
              pathname === "/explorar"
                ? "text-foreground"
                : "text-foreground/60"
            }`}
          >
            Explorar
          </Link>
          <Link
            href="/ajuda"
            className={`text-sm font-medium transition-colors hover:text-foreground/80 ${
              pathname === "/ajuda" ? "text-foreground" : "text-foreground/60"
            }`}
          >
            Ajuda
          </Link>
        </nav>
        <div className="hidden md:flex md:flex-1 md:items-center md:justify-end md:space-x-2">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar imóveis..."
              className="w-full rounded-full bg-background pl-8 md:w-[240px] lg:w-[280px]"
            />
          </div>
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src="/placeholder.svg?height=32&width=32"
                      alt="@user"
                    />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/perfil">Perfil</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/perfil/reservas">Reservas</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/perfil/favoritos">Favoritos</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="text-red-500 focus:text-red-500"
                  onClick={() => setIsLoggedIn(false)}
                >
                  Sair
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/login">Entrar</Link>
              </Button>
              <Button
                className="bg-coral-500 hover:bg-coral-600"
                size="sm"
                asChild
              >
                <Link href="/cadastro">Cadastrar</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
