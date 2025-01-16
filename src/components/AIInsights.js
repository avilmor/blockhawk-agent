'use client'
import { useState } from 'react'

export default function AIInsights() {
  const [insight, setInsight] = useState('')
  const [loading, setLoading] = useState(false)

  const generateInsight = async () => {
    setLoading(true)
    // Simulating AI insight generation
    await new Promise(resolve => setTimeout(resolve, 2000))
    const insights = [
      "Based on current market trends, BTC shows a 65% probability of bullish movement in the next 24 hours.",
      "ETH's recent price action suggests a potential breakout above the 200-day moving average.",
      "AI analysis indicates a strong correlation between social media sentiment and XRP price fluctuations.",
      "Machine learning models predict a possible market correction for altcoins in the coming weeks.",
      "AI-driven sentiment analysis suggests growing interest in DeFi projects, potentially leading to increased token values.",
    ]
    setInsight(insights[Math.floor(Math.random() * insights.length)])
    setLoading(false)
  }

  return (
    <section id="insights" className="py-20 bg-gradient-to-b from-bg-card to-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
          AI Market Insights
        </h2>
        <div className="max-w-2xl mx-auto bg-bg-card p-6 rounded-lg shadow-lg">
          <p className="text-lg mb-6 text-text-light">
            Unlock the power of AI-driven market analysis with BlockHawk. Click the button below to generate an AI insight about the current crypto market conditions.
          </p>
          <button 
            onClick={generateInsight} 
            className="w-full py-3 bg-gradient-to-r from-yellow-400 to-pink-500 text-text-dark rounded-full hover:from-yellow-500 hover:to-pink-600 transition-colors text-lg font-semibold mb-6 shadow-md"
            disabled={loading}
          >
            {loading ? 'Generating Insight...' : 'Generate AI Insight'}
          </button>
          {insight && (
            <div className="bg-background p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-text-light">AI Insight:</h3>
              <p className="text-text-light">{insight}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

