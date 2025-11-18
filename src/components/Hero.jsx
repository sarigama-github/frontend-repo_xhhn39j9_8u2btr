import { useEffect, useState, Suspense, lazy } from 'react'
import { motion } from 'framer-motion'

// Lazy-load Spline to avoid breaking the preview if the 3D runtime fails
const LazySpline = lazy(() => import('@splinetool/react-spline'))

export default function Hero({ onCTAClick }) {
  const [mounted, setMounted] = useState(false)
  const [allow3D, setAllow3D] = useState(true)

  useEffect(() => {
    setMounted(true)

    // Respect prefers-reduced-motion and provide a quick toggle to disable 3D if it errors
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (media.matches) setAllow3D(false)
  }, [])

  return (
    <section className="relative overflow-hidden">
      {/* Background 3D (fault-tolerant) */}
      {mounted && allow3D ? (
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <Suspense fallback={<div className="w-full h-full bg-gradient-to-b from-blue-500/10 to-cyan-400/10" />}> 
            <ErrorBoundary onError={() => setAllow3D(false)}>
              <LazySpline scene="https://prod.spline.design/5qg1m3kBvUOHV1eA/scene.splinecode" />
            </ErrorBoundary>
          </Suspense>
        </div>
      ) : (
        <div className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(59,130,246,0.15),transparent_60%)]" />
      )}

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
          {!allow3D && (
            <p className="mt-6 text-blue-200/70 text-sm">Interactive 3D disabled for performance. Everything else is live.</p>
          )}
        </motion.div>
      </div>
    </section>
  )
}

// Simple error boundary to gracefully disable Spline if it fails to mount
function ErrorBoundary({ children, onError }) {
  const [hasError, setHasError] = useState(false)
  useEffect(() => {
    if (hasError && onError) onError()
  }, [hasError, onError])

  return (
    <ErrorCatcher onCatch={() => setHasError(true)}>
      {hasError ? null : children}
    </ErrorCatcher>
  )
}

class ErrorCatcher extends React.Component {
  componentDidCatch() {
    this.props.onCatch?.()
  }
  render() {
    return this.props.children
  }
}
