import { useEffect, useState } from 'react'

const BACKEND = import.meta.env.VITE_BACKEND_URL

function maskEmail(email) {
  if (!email || !email.includes('@')) return email
  const [u, d] = email.split('@')
  return `${u.slice(0,2)}***@${d}`
}

export default function RecentInvestors() {
  const [items, setItems] = useState([])

  const load = async () => {
    try {
      const res = await fetch(`${BACKEND}/api/investors?limit=6`)
      const json = await res.json()
      setItems(json)
    } catch (e) {
      console.error('investors fetch failed', e)
    }
  }

  useEffect(() => {
    load()
    const id = setInterval(load, 8000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="py-12">
      <div className="max-w-5xl mx-auto px-6">
        <h3 className="text-white text-xl font-semibold mb-4">Recent VIP Sign‑ups</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-4 text-blue-200 text-sm">
              <div className="font-medium text-white">{it.full_name || 'VIP Investor'}</div>
              <div className="opacity-80">{maskEmail(it.email)}</div>
              {it.country && <div className="opacity-60 text-xs mt-1">{it.country}</div>}
            </div>
          ))}
          {items.length === 0 && (
            <div className="text-blue-200/70">No investors yet — be the first.</div>
          )}
        </div>
      </div>
    </section>
  )
}
