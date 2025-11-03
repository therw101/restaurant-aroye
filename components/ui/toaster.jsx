"use client"

import { Toaster as SonnerToaster } from "sonner"

export function Toaster() {
  return (
    <SonnerToaster
      position="top-center"
      richColors
      closeButton
      toastOptions={{
        duration: 3000,
        classNames: {
          toast: "rounded-none border border-border bg-card text-card-foreground shadow-lg",
          title: "font-medium",
          description: "text-sm text-muted-foreground",
          success: "border-green-500/50 bg-green-50 dark:bg-green-950/50",
          error: "border-red-500/50 bg-red-50 dark:bg-red-950/50",
          info: "border-blue-500/50 bg-blue-50 dark:bg-blue-950/50",
          warning: "border-yellow-500/50 bg-yellow-50 dark:bg-yellow-950/50",
        },
      }}
    />
  )
}


