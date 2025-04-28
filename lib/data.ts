export const properties = [
  {
    id: 1,
    title: "Apartamento com vista para o mar",
    type: "Apartamento",
    location: "Rio de Janeiro, Brasil",
    price: 350,
    rating: 4.9,
    reviews: 128,
    images: [
      "/ap.webp",
      "/ap2.webp",
      "/ap3.webp",
      "/ap4.webp",
      "/ap5.webp",
      "/ap6.webp",
    ],
    description:
      "Lindo apartamento com vista panorâmica para o mar de Copacabana. Totalmente reformado, com decoração moderna e aconchegante. A poucos passos da praia, restaurantes e comércio local.\n\nO espaço conta com um quarto com cama queen size, sala de estar com sofá-cama, cozinha completa e banheiro com chuveiro a gás. A varanda proporciona uma vista deslumbrante do mar e do pôr do sol.",
    guests: 4,
    bedrooms: 1,
    beds: 2,
    bathrooms: 1,
    amenities: [
      "Wi-Fi",
      "Ar-condicionado",
      "TV",
      "Cozinha",
      "Máquina de lavar",
      "Varanda",
      "Elevador",
      "Secador de cabelo",
      "Ferro de passar",
      "Itens essenciais",
      "Estacionamento",
    ],
    host: {
      name: "Ana",
      avatar: "/placeholder.svg?height=40&width=40",
      isSuperhost: true,
    },
    isFeatured: true,
    reviewsList: [
      {
        user: {
          name: "Carlos",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        rating: 5,
        date: "Março de 2023",
        comment:
          "Localização perfeita e vista incrível! O apartamento é exatamente como nas fotos. Ana foi muito atenciosa e nos deu ótimas dicas sobre a região.",
      },
      {
        user: {
          name: "Mariana",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        rating: 5,
        date: "Fevereiro de 2023",
        comment:
          "Apartamento impecável, limpo e bem localizado. A vista é de tirar o fôlego! Recomendo fortemente.",
      },
      {
        user: {
          name: "Pedro",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        rating: 4,
        date: "Janeiro de 2023",
        comment:
          "Ótima estadia! O único ponto negativo foi o barulho da rua durante a noite, mas a localização compensa.",
      },
      {
        user: {
          name: "Juliana",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        rating: 5,
        date: "Dezembro de 2022",
        comment:
          "Experiência incrível! O apartamento é lindo, limpo e a vista é espetacular. Voltarei com certeza!",
      },
    ],
  },
  {
    id: 2,
    title: "Casa de campo com piscina",
    type: "Casa",
    location: "Campos do Jordão, Brasil",
    price: 420,
    rating: 4.8,
    reviews: 95,
    images: [
      "/ap6.webp",
      "/ap.webp",
      "/ap2.webp",
      "/ap3.webp",
      "/ap4.webp",
      "/ap5.webp",
      "/ap6.webp",
    ],
    description:
      "Encantadora casa de campo em meio à natureza, perfeita para relaxar e aproveitar o clima da montanha. A propriedade conta com amplo jardim, piscina aquecida e uma vista deslumbrante para as montanhas.\n\nA casa possui 3 quartos confortáveis, sala de estar com lareira, cozinha completa e 2 banheiros. Área externa com churrasqueira, deck e piscina aquecida.",
    guests: 6,
    bedrooms: 3,
    beds: 4,
    bathrooms: 2,
    amenities: [
      "Wi-Fi",
      "Piscina",
      "Churrasqueira",
      "Lareira",
      "Estacionamento",
      "Cozinha",
      "Máquina de lavar",
      "Secadora",
      "Aquecimento central",
      "TV",
      "Jardim",
    ],
    host: {
      name: "Roberto",
      avatar: "/placeholder.svg?height=40&width=40",
      isSuperhost: true,
    },
    isFeatured: true,
    reviewsList: [
      {
        user: {
          name: "Fernanda",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        rating: 5,
        date: "Abril de 2023",
        comment:
          "Casa maravilhosa! Passamos um final de semana incrível em família. A piscina aquecida foi o ponto alto da estadia.",
      },
      {
        user: {
          name: "Ricardo",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        rating: 5,
        date: "Março de 2023",
        comment:
          "Lugar perfeito para descansar. A casa é muito confortável e o Roberto é um anfitrião excepcional.",
      },
      {
        user: {
          name: "Camila",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        rating: 4,
        date: "Fevereiro de 2023",
        comment:
          "Casa linda e bem cuidada. Só achei que a limpeza poderia ser melhor, mas nada que comprometesse a estadia.",
      },
      {
        user: {
          name: "Lucas",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        rating: 5,
        date: "Janeiro de 2023",
        comment:
          "Experiência incrível! A casa é ainda mais bonita pessoalmente. Voltaremos em breve!",
      },
    ],
  },
  {
    id: 3,
    title: "Chalé na montanha",
    type: "Chalé",
    location: "Gramado, Brasil",
    price: 280,
    rating: 4.7,
    reviews: 76,
    images: [
      "/ap3.webp",
      "/ap.webp",
      "/ap2.webp",
      "/ap3.webp",
      "/ap4.webp",
      "/ap5.webp",
      "/ap6.webp",
    ],
    description:
      "Aconchegante chalé em estilo europeu, localizado em uma área tranquila de Gramado. Perfeito para casais ou pequenas famílias que buscam conforto e tranquilidade.\n\nO chalé possui um quarto com cama queen size, sala de estar com sofá-cama, lareira, cozinha americana e banheiro. Varanda com vista para o jardim e área verde.",
    guests: 3,
    bedrooms: 1,
    beds: 2,
    bathrooms: 1,
    amenities: [
      "Wi-Fi",
      "Lareira",
      "Cozinha",
      "Estacionamento",
      "TV",
      "Aquecimento central",
      "Secador de cabelo",
      "Itens essenciais",
      "Máquina de café",
    ],
    host: {
      name: "Cristina",
      avatar: "/placeholder.svg?height=40&width=40",
      isSuperhost: false,
    },
    isFeatured: false,
    reviewsList: [
      {
        user: {
          name: "André",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        rating: 5,
        date: "Maio de 2023",
        comment:
          "Chalé muito aconchegante e bem localizado. A lareira deixou o ambiente ainda mais especial.",
      },
      {
        user: {
          name: "Patrícia",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        rating: 4,
        date: "Abril de 2023",
        comment:
          "Lugar charmoso e confortável. Só senti falta de alguns utensílios na cozinha, mas nada que atrapalhasse.",
      },
      {
        user: {
          name: "Gustavo",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        rating: 5,
        date: "Março de 2023",
        comment:
          "Experiência incrível! O chalé é muito aconchegante e a Cristina foi super atenciosa.",
      },
      {
        user: {
          name: "Bianca",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        rating: 5,
        date: "Fevereiro de 2023",
        comment:
          "Lugar perfeito para um final de semana romântico. Recomendo fortemente!",
      },
    ],
  },
  {
    id: 4,
    title: "Apartamento no centro histórico",
    type: "Apartamento",
    location: "Salvador, Brasil",
    price: 190,
    rating: 4.6,
    reviews: 64,
    images: [
      "/ap.webp",
      "/ap2.webp",
      "/ap3.webp",
      "/ap4.webp",
      "/ap5.webp",
      "/ap6.webp",
    ],
    description:
      "Charmoso apartamento localizado no coração do Pelourinho, centro histórico de Salvador. Decoração que mistura o rústico com o moderno, preservando elementos originais do casarão colonial.\n\nO apartamento possui um quarto com cama de casal, sala de estar, cozinha equipada e banheiro. Varanda com vista para as coloridas ruas do Pelourinho.",
    guests: 2,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    amenities: [
      "Wi-Fi",
      "Ar-condicionado",
      "TV",
      "Cozinha",
      "Máquina de lavar",
      "Varanda",
      "Secador de cabelo",
      "Itens essenciais",
    ],
    host: {
      name: "João",
      avatar: "/placeholder.svg?height=40&width=40",
      isSuperhost: true,
    },
    isFeatured: false,
    reviewsList: [
      {
        user: {
          name: "Renata",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        rating: 5,
        date: "Junho de 2023",
        comment:
          "Localização perfeita para conhecer o centro histórico. O apartamento é muito charmoso e o João nos deu ótimas dicas de passeios e restaurantes.",
      },
      {
        user: {
          name: "Felipe",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        rating: 4,
        date: "Maio de 2023",
        comment:
          "Apartamento bem localizado e confortável. O único ponto negativo é o barulho da rua à noite, mas nada que um par de tampões de ouvido não resolva.",
      },
      {
        user: {
          name: "Daniela",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        rating: 5,
        date: "Abril de 2023",
        comment:
          "Experiência incrível! O apartamento é lindo e a localização é imbatível.",
      },
      {
        user: {
          name: "Marcelo",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        rating: 4,
        date: "Março de 2023",
        comment:
          "Ótima estadia! O João foi muito atencioso e nos ajudou com tudo o que precisamos.",
      },
    ],
  },
  {
    id: 5,
    title: "Casa na praia",
    type: "Casa",
    location: "Florianópolis, Brasil",
    price: 380,
    rating: 4.9,
    reviews: 112,
    images: [
      "/ap.webp",
      "/ap2.webp",
      "/ap3.webp",
      "/ap4.webp",
      "/ap5.webp",
      "/ap6.webp",
    ],
    description:
      "Espetacular casa de praia localizada a poucos passos da areia. Vista panorâmica para o mar e acesso direto à praia. Ideal para famílias ou grupos de amigos.\n\nA casa possui 4 quartos (2 suítes), ampla sala de estar com vista para o mar, cozinha completa, área de jantar e 3 banheiros. Área externa com deck, churrasqueira e ducha.",
    guests: 8,
    bedrooms: 4,
    beds: 5,
    bathrooms: 3,
    amenities: [
      "Wi-Fi",
      "Ar-condicionado",
      "TV",
      "Cozinha",
      "Máquina de lavar",
      "Secadora",
      "Churrasqueira",
      "Estacionamento",
      "Acesso à praia",
      "Chuveiro externo",
      "Deck",
    ],
    host: {
      name: "Luiza",
      avatar: "/placeholder.svg?height=40&width=40",
      isSuperhost: true,
    },
    isFeatured: true,
    reviewsList: [
      {
        user: {
          name: "Rafael",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        rating: 5,
        date: "Julho de 2023",
        comment:
          "Casa espetacular! Localização perfeita, com acesso direto à praia. Passamos dias incríveis em família.",
      },
      {
        user: {
          name: "Carolina",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        rating: 5,
        date: "Junho de 2023",
        comment:
          "A casa é ainda mais bonita pessoalmente. A vista para o mar é de tirar o fôlego!",
      },
      {
        user: {
          name: "Rodrigo",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        rating: 5,
        date: "Maio de 2023",
        comment:
          "Experiência incrível! A casa é muito confortável e a Luiza foi uma anfitriã excepcional.",
      },
      {
        user: {
          name: "Amanda",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        rating: 4,
        date: "Abril de 2023",
        comment:
          "Casa linda e bem equipada. Só achei que a limpeza poderia ser melhor, mas nada que comprometesse a estadia.",
      },
    ],
  },
  {
    id: 6,
    title: "Loft moderno",
    type: "Loft",
    location: "São Paulo, Brasil",
    price: 250,
    rating: 4.7,
    reviews: 89,
    images: [
      "/ap.webp",
      "/ap2.webp",
      "/ap3.webp",
      "/ap4.webp",
      "/ap5.webp",
      "/ap6.webp",
    ],
    description:
      "Loft moderno e estiloso no coração de Pinheiros, um dos bairros mais descolados de São Paulo. Decoração contemporânea com elementos industriais e mobiliário de design.\n\nO loft possui área de dormir com cama queen size, sala de estar integrada, cozinha americana e banheiro. Varanda com vista para a cidade.",
    guests: 2,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    amenities: [
      "Wi-Fi",
      "Ar-condicionado",
      "TV",
      "Cozinha",
      "Máquina de lavar",
      "Varanda",
      "Elevador",
      "Academia no prédio",
      "Secador de cabelo",
      "Itens essenciais",
    ],
    host: {
      name: "Bruno",
      avatar: "/placeholder.svg?height=40&width=40",
      isSuperhost: false,
    },
    isFeatured: false,
    reviewsList: [
      {
        user: {
          name: "Isabela",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        rating: 5,
        date: "Agosto de 2023",
        comment:
          "Loft incrível! Decoração moderna e localização perfeita. O Bruno foi muito atencioso.",
      },
      {
        user: {
          name: "Thiago",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        rating: 4,
        date: "Julho de 2023",
        comment:
          "Ótima estadia! O loft é muito estiloso e bem localizado. Só achei o banheiro um pouco pequeno.",
      },
      {
        user: {
          name: "Gabriela",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        rating: 5,
        date: "Junho de 2023",
        comment:
          "Experiência incrível! O loft é exatamente como nas fotos e a localização é imbatível.",
      },
      {
        user: {
          name: "Leonardo",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        rating: 5,
        date: "Maio de 2023",
        comment:
          "Lugar perfeito para uma estadia em São Paulo. Perto de restaurantes, bares e transporte público.",
      },
    ],
  },
  {
    id: 7,
    title: "Cabana rústica na floresta",
    type: "Cabana",
    location: "Monte Verde, Brasil",
    price: 320,
    rating: 4.8,
    reviews: 67,
    images: [
      "/ap.webp",
      "/ap2.webp",
      "/ap3.webp",
      "/ap4.webp",
      "/ap5.webp",
      "/ap6.webp",
    ],
    description:
      "Encantadora cabana de madeira cercada pela natureza. Perfeita para quem busca tranquilidade e contato com a natureza, sem abrir mão do conforto.\n\nA cabana possui um quarto com cama queen size, sala de estar com lareira, cozinha equipada e banheiro. Deck externo com ofurô e vista para a floresta.",
    guests: 2,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    amenities: [
      "Wi-Fi",
      "Lareira",
      "Ofurô",
      "Cozinha",
      "Estacionamento",
      "TV",
      "Aquecimento central",
      "Secador de cabelo",
      "Itens essenciais",
      "Aceita-pets",
    ],
    host: {
      name: "Mariana",
      avatar: "/placeholder.svg?height=40&width=40",
      isSuperhost: true,
    },
    isFeatured: false,
    reviewsList: [
      {
        user: {
          name: "Henrique",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        rating: 5,
        date: "Setembro de 2023",
        comment:
          "Cabana incrível! Lugar perfeito para relaxar e se desconectar. O ofurô com vista para a floresta é espetacular.",
      },
      {
        user: {
          name: "Beatriz",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        rating: 5,
        date: "Agosto de 2023",
        comment:
          "Experiência mágica! A cabana é muito aconchegante e a Mariana foi uma anfitriã excepcional.",
      },
      {
        user: {
          name: "Eduardo",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        rating: 4,
        date: "Julho de 2023",
        comment:
          "Lugar lindo e tranquilo. Só achei o acesso um pouco difícil, mas valeu a pena.",
      },
      {
        user: {
          name: "Natália",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        rating: 5,
        date: "Junho de 2023",
        comment:
          "Cabana perfeita para um final de semana romântico. Voltaremos com certeza!",
      },
    ],
  },
  {
    id: 8,
    title: "Pousada à beira do lago",
    type: "Pousada",
    location: "Capitólio, Brasil",
    price: 290,
    rating: 4.6,
    reviews: 53,
    images: [
      "/ap.webp",
      "/ap2.webp",
      "/ap3.webp",
      "/ap4.webp",
      "/ap5.webp",
      "/ap6.webp",
    ],
    description:
      "Charmosa pousada localizada à beira do lago de Furnas, com vista deslumbrante para os cânions. Ambiente tranquilo e acolhedor, ideal para relaxar e aproveitar as belezas naturais da região.\n\nA suíte possui cama queen size, banheiro privativo, ar-condicionado e varanda com vista para o lago. A pousada oferece café da manhã, piscina, deck e acesso ao lago.",
    guests: 2,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    amenities: [
      "Wi-Fi",
      "Ar-condicionado",
      "TV",
      "Piscina",
      "Café da manhã",
      "Estacionamento",
      "Acesso ao lago",
      "Deck",
      "Secador de cabelo",
      "Itens essenciais",
    ],
    host: {
      name: "Cláudia",
      avatar: "/placeholder.svg?height=40&width=40",
      isSuperhost: true,
    },
    isFeatured: false,
    reviewsList: [
      {
        user: {
          name: "Vinícius",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        rating: 5,
        date: "Outubro de 2023",
        comment:
          "Lugar incrível! A vista para o lago é de tirar o fôlego. A Cláudia foi muito atenciosa e nos deu ótimas dicas de passeios.",
      },
      {
        user: {
          name: "Larissa",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        rating: 4,
        date: "Setembro de 2023",
        comment:
          "Pousada charmosa com uma vista linda para o lago. Café da manhã delicioso e atendimento impecável.",
      },
      {
        user: {
          name: "Gustavo",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        rating: 5,
        date: "Agosto de 2023",
        comment:
          "Experiência maravilhosa! A pousada é muito aconchegante e a Cláudia é uma excelente anfitriã.",
      },
      {
        user: {
          name: "Fernanda",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        rating: 4,
        date: "Julho de 2023",
        comment:
          "Lugar tranquilo e relaxante. Ideal para quem busca paz e contato com a natureza.",
      },
    ],
  },
];
