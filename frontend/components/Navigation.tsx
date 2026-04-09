'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Dashboard' },
  { href: '/tracker', label: 'Tracker' },
  { href: '/awareness', label: 'Awareness' },
  { href: '/diet', label: 'Diet Plan' },
  { href: '/exercise', label: 'Exercise' },
  { href: '/symptoms', label: 'Symptoms' },
  { href: '/help', label: 'Help' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/' && pathname === '/') return true
    if (href !== '/' && pathname.startsWith(href)) return true
    return false
  }

  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="hidden md:flex flex-col w-64 bg-sidebar text-sidebar-foreground p-6 min-h-screen border-r border-sidebar-border fixed left-0 top-0">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-sidebar-primary">Diasense</h1>
          <p className="text-xs text-sidebar-foreground/60 mt-1">Health Management</p>
        </div>
        
        <ul className="space-y-2 flex-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  'block px-4 py-3 rounded-lg transition-colors',
                  isActive(link.href)
                    ? 'bg-sidebar-primary text-sidebar-primary-foreground font-semibold'
                    : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="border-t border-sidebar-border pt-4">
          <Link
            href="/login"
            className="block px-4 py-2 text-sm text-sidebar-foreground hover:text-sidebar-primary transition-colors text-center"
          >
            Logout
          </Link>
        </div>
      </nav>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-sidebar text-sidebar-foreground p-4 border-b border-sidebar-border flex items-center justify-between z-50">
        <h1 className="text-xl font-bold text-sidebar-primary">Diasense</h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 hover:bg-sidebar-accent rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden fixed top-16 left-0 right-0 bg-sidebar text-sidebar-foreground p-4 border-b border-sidebar-border z-40 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'block px-4 py-3 rounded-lg transition-colors',
                    isActive(link.href)
                      ? 'bg-sidebar-primary text-sidebar-primary-foreground font-semibold'
                      : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  )
}
