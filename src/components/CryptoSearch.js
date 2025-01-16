'use client'
import { useState } from 'react'
import { Line } from 'react-chartjs-2'
import { Search } from 'lucide-react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export default function CryptoSearch() {
  const [searchTerm, setSearchTerm] = useState('')
  const [chartData, setChartData] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSearch = async (e) => {
    e.preventDefault()
    setLoading(true)
    // Simulating API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setChartData({
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          label: searchTerm,
          data: Array.from({length: 6}, () => Math.floor(Math.random() * 1000)),
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }
      ]
    })
    setLoading(false)
  }

  return (
    <section id="analysis" className="py-20 bg-gradient-to-b from-background to-bg-card">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
          AI-Powered Crypto Analysis
        </h2>
        <form onSubmit={handleSearch} className="mb-8 max-w-md mx-auto">
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Enter cryptocurrency name"
              className="w-full p-4 rounded-full bg-white text-text-dark placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button type="submit" className="absolute right-2 top-2 bg-primary p-2 rounded-full hover:bg-primary/80 transition-colors">
              <Search className="w-6 h-6 text-white" />
            </button>
          </div>
        </form>
        {loading && <p className="text-center text-text-light">Loading...</p>}
        {chartData && (
          <div className="bg-bg-card p-4 rounded-lg shadow-lg">
            <Line 
              data={chartData}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: 'top',
                    labels: {
                      color: 'white'
                    }
                  },
                  title: {
                    display: true,
                    text: `${searchTerm} Price History`,
                    color: 'white'
                  },
                },
                scales: {
                  y: {
                    ticks: { color: 'white' },
                    grid: { color: 'rgba(255, 255, 255, 0.1)' }
                  },
                  x: {
                    ticks: { color: 'white' },
                    grid: { color: 'rgba(255, 255, 255, 0.1)' }
                  }
                }
              }}
            />
          </div>
        )}
      </div>
    </section>
  )
}

