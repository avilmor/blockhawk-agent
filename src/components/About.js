export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-bg-card">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
          About BlockHawk Agent
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xl mb-6 text-text-light font-medium">
              BlockHawk Agent is at the forefront of the AI-powered cryptocurrency revolution. Our advanced artificial intelligence analyzes market trends, predicts potential opportunities, and provides unparalleled insights into the crypto world.
            </p>
            <p className="text-xl mb-6 text-text-light font-medium">
              With BlockHawk, you're not just investing - you're partnering with cutting-edge AI to navigate the complex and volatile cryptocurrency market.
            </p>
          </div>
          <div className="bg-bg-card p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-text-light">Why Choose BlockHawk?</h3>
            <ul className="list-disc list-inside space-y-2 text-text-light">
              <li>AI-powered market analysis</li>
              <li>Real-time risk-reward assessments</li>
              <li>Predictive modeling for market trends</li>
              <li>Secure and transparent blockchain technology</li>
              <li>Access to exclusive AI-generated insights with $BHK token</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

