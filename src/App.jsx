import { useRef } from 'react'
import Hero from './components/Hero'
import Progress from './components/Progress'
import InvestorForm from './components/InvestorForm'
import TermsAndUseOfFunds from './components/TermsAndUseOfFunds'
import RecentInvestors from './components/RecentInvestors'

function App() {
  const formRef = useRef(null)
  const scrollToForm = () => {
    document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(59,130,246,0.15),transparent_60%)] pointer-events-none" />

      <header className="sticky top-0 z-20 backdrop-blur border-b border-white/10 bg-slate-950/50">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="text-white font-semibold">Fintech VIP</div>
          <div className="flex gap-3">
            <a href="#terms" className="text-blue-200 text-sm">Terms</a>
            <button onClick={scrollToForm} className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-sm">Become VIP</button>
          </div>
        </div>
      </header>

      <main>
        <Hero onCTAClick={scrollToForm} />
        <Progress />
        <RecentInvestors />
        <InvestorForm ref={formRef} />
        <TermsAndUseOfFunds />
      </main>

      <a href="#apply" className="fixed bottom-6 right-6 z-30 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/30">
        Join VIP • 2% for 5 yrs
      </a>

      <footer className="py-10 border-t border-white/10 mt-10">
        <div className="max-w-6xl mx-auto px-6 text-blue-200/70 text-sm">
          <p>
            This page is for informational purposes and does not constitute an offering of securities. Participation is subject to applicable laws and eligibility. By submitting the form, you consent to be contacted about VIP participation. Revenue share: 2% of audited core product revenue for up to 5 years. Crypto contributions may be non‑refundable; ensure you understand the risks.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
