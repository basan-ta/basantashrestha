"use client"

import { useEffect, useState } from "react"
import { Code2, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function ProfileModeToggle() {
  const [mode, setMode] = useState<"developer" | "academic">("developer")
  const [mounted, setMounted] = useState(false)

  // Initialize on mount
  useEffect(() => {
    setMounted(true)
    const savedMode = localStorage.getItem("profileMode") as "developer" | "academic"
    if (savedMode) {
      setMode(savedMode)
      updateProfileVisibility(savedMode)
    }
  }, [])

  const updateProfileVisibility = (newMode: "developer" | "academic") => {
    const devProfile = document.querySelector(".developer-profile")
    const acadProfile = document.querySelector(".author-profile")

    if (devProfile && acadProfile) {
      if (newMode === "developer") {
        devProfile.classList.remove("hidden")
        acadProfile.classList.add("hidden")
      } else {
        devProfile.classList.add("hidden")
        acadProfile.classList.remove("hidden")
      }
    }
  }

  const handleModeChange = () => {
    const newMode = mode === "developer" ? "academic" : "developer"
    setMode(newMode)
    localStorage.setItem("profileMode", newMode)
    updateProfileVisibility(newMode)
  }

  if (!mounted) {
    return <Button variant="outline" size="lg" disabled className="w-64 h-16 text-lg" />
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="lg"
            className="w-64 h-16 text-lg shadow-md hover:shadow-lg transition-all duration-300 font-medium"
            onClick={handleModeChange}
          >
            {mode === "developer" ? (
              <>
                <Code2 className="mr-2 h-5 w-5" />
                Developer Mode
              </>
            ) : (
              <>
                <GraduationCap className="mr-2 h-5 w-5" />
                Author Mode
              </>
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Switch to {mode === "developer" ? "Author" : "Developer"} Mode</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}