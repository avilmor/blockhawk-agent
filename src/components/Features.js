import { Brain, TrendingUp, Shield, Zap } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: <Brain className="w-12 h-12 text-accent" />,
      title: "AI-Powered Analysis",
      description: "Our advanced AI algorithms analyze vast amounts of market data to provide you with actionable insights."
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-accent" />,
      title: "Predictive Modeling",
      description: "Leverage the power of machine learning to forecast potential market trends and opportunities."
    },
    {
      icon: <Shield className="w-12 h-12 text-accent" />,
      title: "Risk Management",
      description: "Intelligent risk assessment tools help you make informed decisions and protect your investments."
    },
    {
      icon: <Zap className="w-12 h-12 text-accent" />,
      title: "Real-Time Alerts",
      description: "Receive instant notifications about market changes and potential high-reward opportunities."
    }
  ]

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-bg-card to-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
          BlockHawk Features
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-bg-card p-6 rounded-lg shadow-lg hover:shadow-accent/20 transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-text-light">{feature.title}</h3>
              <p className="text-text-light">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

