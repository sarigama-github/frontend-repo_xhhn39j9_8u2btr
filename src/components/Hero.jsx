import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero({ onCTAClick }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <Spline scene="https://prod.spline.design/5qg1m3kBvUOHV1eA/scene.splinecode" />
      </div>
      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
            Crypto‑Friendly Fintech VIP Fundraiser
          </h1>
          <p className="mt-4 text-lg md:text-xl text-blue-200 max-w-3xl mx-auto">
            Become a founding VIP investor. 5‑year guarantee for a 2% revenue share across our core product line.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <button onClick={onCTAClick} className="px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-medium shadow-lg shadow-blue-500/30">
              Join as VIP Investor
            </button>
            <a href="#terms" className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium border border-white/20">
              View VIP Terms
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
