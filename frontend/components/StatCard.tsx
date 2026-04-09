'use client'

import { Card, CardContent, CardTitle } from './Card'
import { cn } from '@/lib/utils'

interface StatCardProps {
  label: string
  value: string | number
  unit?: string
  icon?: React.ReactNode
  trend?: 'up' | 'down' | 'stable'
  trendValue?: string
}

export function StatCard({ 
  label, 
  value, 
  unit,
  icon,
  trend,
  trendValue 
}: StatCardProps) {
  const trendColor = {
    up: 'text-destructive',
    down: 'text-secondary',
    stable: 'text-foreground/60',
  }

  return (
    <Card className="bg-gradient-to-br from-card to-card/50">
      <CardContent>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm text-muted-foreground font-medium mb-1">{label}</p>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold text-primary">{value}</span>
              {unit && <span className="text-sm text-muted-foreground">{unit}</span>}
            </div>
            {trend && trendValue && (
              <p className={cn('text-xs mt-2 font-medium', trendColor[trend])}>
                {trend === 'up' ? '↑' : trend === 'down' ? '↓' : '→'} {trendValue}
              </p>
            )}
          </div>
          {icon && (
            <div className="text-primary/20 ml-4">
              {icon}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
