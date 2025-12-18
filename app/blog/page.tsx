import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/" className="gap-2">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </Button>

        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Blog</h1>
        <p className="text-muted-foreground mb-12">Security research, writeups, and insights.</p>

        <div className="text-center py-16 text-muted-foreground">
          <p>Coming soon...</p>
        </div>
      </div>
    </main>
  )
}
