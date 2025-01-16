'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full fixed top-0 z-50 bg-background/90 backdrop-blur-md">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link href="/" className="flex items-center space-x-2">
          <Logo className="w-8 h-8" />
          <span className="text-2xl font-bold text-text-light">BlockHawk Agent</span>
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#about" className="text-text-light hover:text-accent transition-all py-2">
            About
          </Link>
          <Link href="#features" className="text-text-light hover:text-accent transition-all py-2">
            Features
          </Link>
          <Link href="#analysis" className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-pink-500 text-text-dark rounded-full hover:from-yellow-500 hover:to-pink-600 transition-colors font-semibold flex items-center justify-center">
            Analysis
          </Link>
        </div>
        <button className="md:hidden text-text-light" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background p-4">
          <Link href="#about" className="block py-2 text-text-light hover:text-accent transition-all" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="#features" className="block py-2 text-text-light hover:text-accent transition-all" onClick={() => setIsOpen(false)}>Features</Link>
          <Link href="#analysis" className="block py-2 px-4 mt-2 bg-gradient-to-r from-yellow-400 to-pink-500 text-text-dark rounded-full hover:from-yellow-500 hover:to-pink-600 transition-colors font-semibold text-center" onClick={() => setIsOpen(false)}>Analysis</Link>
        </div>
      )}
    </header>
  )
}

