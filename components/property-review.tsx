import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

interface PropertyReviewProps {
  review: {
    user: {
      name: string
      avatar?: string
    }
    rating: number
    date: string
    comment: string
  }
}

export function PropertyReview({ review }: PropertyReviewProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarImage src={review.user.avatar || "/placeholder.svg?height=40&width=40"} alt={review.user.name} />
          <AvatarFallback>{review.user.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <div className="font-medium">{review.user.name}</div>
          <div className="text-sm text-muted-foreground">{review.date}</div>
        </div>
      </div>
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < review.rating ? "fill-amber-400 text-amber-400" : "text-gray-300"}`}
          />
        ))}
      </div>
      <p className="text-sm">{review.comment}</p>
    </div>
  )
}
