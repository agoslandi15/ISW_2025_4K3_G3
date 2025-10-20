"use client"

import Image from "next/image"
import { use_auth } from "@/lib/auth-context"
import { Button } from "@/components/ui/button"
import { LogOut, User } from "lucide-react"

export function Header() {
  const { user, logout } = use_auth()

  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-24 w-24 items-center justify-center overflow-hidden">
              <Image
                src="/logoEcoHarmonyPark.jpg"
                alt="EcoHarmony Park logo"
                width={96}
                height={96}
                className="h-24 w-24 object-contain"
                priority
              />
            </div>
            <div>
              <h1 className="font-display text-xl font-bold text-primary">EcoHarmony Park</h1>
              <p className="text-xs text-muted-foreground">Naturaleza y Diversión</p>
            </div>
          </div>

          {user && (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm">
                <User className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">{user.name}</span>
              </div>
              <Button variant="outline" size="sm" onClick={logout} className="gap-2 bg-transparent">
                <LogOut className="h-4 w-4" />
                Cerrar Sesión
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
