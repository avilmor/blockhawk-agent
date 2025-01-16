import Link from 'next/link'
import { Twitter, GitlabIcon as GitHub, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full py-12 bg-bg-card">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-text-light">BlockHawk Agent</h3>
            <p className="text-text-light">Empowering crypto investors with AI-driven insights.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-text-light">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#about" className="text-text-light hover:text-accent transition-colors">About</Link></li>
              <li><Link href="#features" className="text-text-light hover:text-accent transition-colors">Features</Link></li>
              <li><Link href="#analysis" className="text-text-light hover:text-accent transition-colors">Crypto Search</Link></li>
              <li><Link href="#insights" className="text-text-light hover:text-accent transition-colors">AI Insights</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-text-light">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/terms" className="text-text-light hover:text-accent transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-text-light hover:text-accent transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-text-light">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-text-light hover:text-accent transition-colors"><Twitter /></a>
              <a href="#" className="text-text-light hover:text-accent transition-colors"><GitHub /></a>
              <a href="#" className="text-text-light hover:text-accent transition-colors"><Linkedin /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-text-light">&copy; 2023 BlockHawk Agent. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

