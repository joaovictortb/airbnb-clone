"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const categories = [
  {
    id: "all",
    name: "Todos",
    icon: (
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
        className="h-6 w-6"
      >
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    id: "beach",
    name: "Praia",
    icon: (
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
        className="h-6 w-6"
      >
        <path d="M5.2 6.2l1.4 1.4" />
        <path d="M2 13h2" />
        <path d="M20 13h2" />
        <path d="M17.4 7.6l1.4-1.4" />
        <path d="M22 17H2" />
        <path d="M22 21H2" />
        <path d="M16 13a4 4 0 0 0-8 0" />
        <path d="M12 5V3" />
      </svg>
    ),
  },
  {
    id: "mountain",
    name: "Montanha",
    icon: (
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
        className="h-6 w-6"
      >
        <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
      </svg>
    ),
  },
  {
    id: "city",
    name: "Cidade",
    icon: (
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
        className="h-6 w-6"
      >
        <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
        <path d="M9 22v-4h6v4" />
        <path d="M8 6h.01" />
        <path d="M16 6h.01" />
        <path d="M12 6h.01" />
        <path d="M12 10h.01" />
        <path d="M12 14h.01" />
        <path d="M16 10h.01" />
        <path d="M16 14h.01" />
        <path d="M8 10h.01" />
        <path d="M8 14h.01" />
      </svg>
    ),
  },
  {
    id: "countryside",
    name: "Campo",
    icon: (
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
        className="h-6 w-6"
      >
        <path d="M2 22v-5l5-5 5 5-5 5z" />
        <path d="M9.5 14.5 16 8" />
        <path d="M17 2v5l-5 5-5-5 5-5z" />
      </svg>
    ),
  },
  {
    id: "camping",
    name: "Camping",
    icon: (
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
        className="h-6 w-6"
      >
        <path d="M17 20V4h1a2 2 0 0 0 0-4H6a2 2 0 0 0 0 4h1v16" />
        <path d="M20 20H4a2 2 0 0 0 0 4h16a2 2 0 0 0 0-4Z" />
      </svg>
    ),
  },
  {
    id: "lake",
    name: "Lago",
    icon: (
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
        className="h-6 w-6"
      >
        <path d="M3 16.5v.5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-.5" />
        <path d="M2 16h20" />
        <path d="M7 16V3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5V16" />
      </svg>
    ),
  },
  {
    id: "winter",
    name: "Inverno",
    icon: (
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
        className="h-6 w-6"
      >
        <path d="M2 12h10" />
        <path d="M12 2v10" />
        <path d="m4.93 4.93 4.24 4.24" />
        <path d="m14.83 9.17 4.24 4.24" />
        <path d="m14.83 14.83 4.24-4.24" />
        <path d="m9.17 14.83 4.24 4.24" />
        <path d="m4.93 19.07 4.24-4.24" />
        <path d="M12 12v10" />
        <path d="M22 12H12" />
      </svg>
    ),
  },
  {
    id: "unique",
    name: "Únicos",
    icon: (
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
        className="h-6 w-6"
      >
        <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
        <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
        <line x1="6" x2="6" y1="2" y2="4" />
        <line x1="10" x2="10" y1="2" y2="4" />
        <line x1="14" x2="14" y1="2" y2="4" />
      </svg>
    ),
  },
]

export function CategoryFilter() {
  const [activeCategory, setActiveCategory] = useState("all")

  return (
    <div className="flex items-center space-x-4 py-4 overflow-x-auto hide-scrollbar">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => setActiveCategory(category.id)}
          className={cn(
            "flex flex-col items-center justify-center min-w-[80px] px-4 py-2 rounded-lg transition-colors",
            activeCategory === category.id
              ? "text-coral-500 border-b-2 border-coral-500"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {category.icon}
          <span className="text-xs font-medium mt-1">{category.name}</span>
        </button>
      ))}
    </div>
  )
}
