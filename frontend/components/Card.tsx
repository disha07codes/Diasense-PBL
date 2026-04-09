'use client'

import { cn } from '@/lib/utils'

export function Card({ 
  children, 
  className,
  ...props 
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div 
      className={cn(
        'bg-card text-card-foreground rounded-2xl p-6 border border-border shadow-sm',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardTitle({ 
  children, 
  className,
  ...props 
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 
      className={cn('text-xl font-bold mb-4', className)}
      {...props}
    >
      {children}
    </h2>
  )
}

export function CardContent({ 
  children, 
  className,
  ...props 
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div 
      className={cn('', className)}
      {...props}
    >
      {children}
    </div>
  )
}
