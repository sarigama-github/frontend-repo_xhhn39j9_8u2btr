import { useEffect, useState } from 'react'

const BACKEND = import.meta.env.VITE_BACKEND_URL

export default function Progress() {
  const [data, setData] = useState({ target: 125000, total: 0, percent: 0, remaining: 125000, count: 0 })
  const [loading, setLoading] = useState(true)

  const load = async () => {
    try {
      const res = await fetch(`${BACKEND}/api/progress`)
      const json = await res.json()
      setData(json)
    } catch (e) {
      console.error('Progress fetch failed', e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    load()
    const id = setInterval(load, 5000)
    return () => clearInterval(id)
  }, [])

  const pct = Math.min(100, data.percent || 0)

  return (
    <section className="py-10">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-white font-semibold">Fundraising Progress</h3>
            <p className="text-blue-200 text-sm">Target: ${data.target?.toLocaleString?.() || '125,000'}</p>
          </div>
          <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-700" style={{ width: `${pct}%` }} />
          </div>
          <div className="mt-3 flex items-center justify-between text-blue-200 text-sm">
            <span>Raised: ${data.total?.toLocaleString?.()}</span>
            <span>{pct}% funded • {data.count} contributions</span>
            <span>Remaining: ${data.remaining?.toLocaleString?.()}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
