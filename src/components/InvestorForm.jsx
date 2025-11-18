import { useState } from 'react'

const BACKEND = import.meta.env.VITE_BACKEND_URL

export default function InvestorForm() {
  const [form, setForm] = useState({ full_name: '', email: '', wallet_address: '', country: '', consent: false, referral_source: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
  }

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Submitting...')
    try {
      const res = await fetch(`${BACKEND}/api/investors`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Submission failed')
      setStatus('✅ Thanks! We will be in touch shortly.')
      setForm({ full_name: '', email: '', wallet_address: '', country: '', consent: false, referral_source: '' })
    } catch (e) {
      setStatus(`❌ ${e.message}`)
    }
  }

  return (
    <section id="apply" className="py-14">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur">
          <h3 className="text-white text-xl font-semibold mb-4">Join as VIP Investor</h3>
          <form onSubmit={submit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-blue-200 text-sm mb-1">Full Name</label>
              <input required name="full_name" value={form.full_name} onChange={handleChange} className="w-full bg-white/10 text-white rounded-lg px-3 py-2 outline-none border border-white/10" placeholder="Satoshi Nakamoto" />
            </div>
            <div>
              <label className="block text-blue-200 text-sm mb-1">Email</label>
              <input required type="email" name="email" value={form.email} onChange={handleChange} className="w-full bg-white/10 text-white rounded-lg px-3 py-2 outline-none border border-white/10" placeholder="you@domain.com" />
            </div>
            <div>
              <label className="block text-blue-200 text-sm mb-1">Wallet Address (optional)</label>
              <input name="wallet_address" value={form.wallet_address} onChange={handleChange} className="w-full bg-white/10 text-white rounded-lg px-3 py-2 outline-none border border-white/10" placeholder="0x..." />
            </div>
            <div>
              <label className="block text-blue-200 text-sm mb-1">Country</label>
              <input name="country" value={form.country} onChange={handleChange} className="w-full bg-white/10 text-white rounded-lg px-3 py-2 outline-none border border-white/10" placeholder="United States" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-blue-200 text-sm mb-1">How did you hear about us?</label>
              <input name="referral_source" value={form.referral_source} onChange={handleChange} className="w-full bg-white/10 text-white rounded-lg px-3 py-2 outline-none border border-white/10" placeholder="Twitter, friend, conference, etc." />
            </div>
            <div className="md:col-span-2 flex items-center gap-3">
              <input id="consent" type="checkbox" name="consent" checked={form.consent} onChange={handleChange} className="size-4" required />
              <label htmlFor="consent" className="text-blue-200 text-sm">I agree to the VIP terms including the 5‑year 2% revenue share guarantee.</label>
            </div>
            <div className="md:col-span-2 flex gap-3">
              <button className="px-5 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium">Submit</button>
              {status && <p className="text-blue-200 text-sm self-center">{status}</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
