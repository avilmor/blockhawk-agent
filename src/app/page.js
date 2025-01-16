import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Features from '../components/Features'
import CryptoSearch from '../components/CryptoSearch'
import AIInsights from '../components/AIInsights'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-background text-text-light">
      <Header />
      <Hero />
      <About />
      <Features />
      <CryptoSearch />
      <AIInsights />
      <Footer />
    </main>
  )
}

