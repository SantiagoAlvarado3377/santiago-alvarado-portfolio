"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import { AskGeminiModal } from "./ask-gemini-modal"

export function AskGeminiButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button
        size="lg"
        onClick={() => setIsOpen(true)}
        className="group bg-gradient-to-r from-primary to-primary/80 shadow-lg transition-all hover:shadow-xl hover:shadow-primary/20"
      >
        <Sparkles className="mr-2 h-5 w-5 transition-transform group-hover:rotate-12" />
        Ask Gemini About My Portfolio
      </Button>
      <AskGeminiModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
