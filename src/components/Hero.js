'use client'
import DiditSphere from './DiditSphere'

export default function Hero() {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-r from-background via-primary/20 to-background animate-gradient-x relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <DiditSphere />
      </div>
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
          BlockHawk Agent
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-center max-w-2xl font-semibold text-text-light">
          Unleash the power of AI in cryptocurrency analysis
        </p>
        <button className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-pink-500 text-text-dark rounded-full hover:from-yellow-500 hover:to-pink-600 transition-colors text-lg font-semibold shadow-lg">
          Explore $BHK
        </button>
      </div>
    </section>
  )
}

