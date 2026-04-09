'use client'

import { Navigation } from './Navigation'
import { cn } from '@/lib/utils'

interface PageWrapperProps {
  children: React.ReactNode
  title?: string
  className?: string
}

export function PageWrapper({ children, title, className }: PageWrapperProps) {
  return (
    <div className="flex min-h-screen bg-background">
      <Navigation />
      
      <main className="flex-1 md:ml-64 pt-16 md:pt-0">
        <div className={cn('p-6 max-w-7xl mx-auto', className)}>
          {title && (
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-foreground">{title}</h1>
              <p className="text-muted-foreground mt-2">Manage your diabetes with ease</p>
            </div>
          )}
          {children}
        </div>
      </main>
    </div>
  )
}
