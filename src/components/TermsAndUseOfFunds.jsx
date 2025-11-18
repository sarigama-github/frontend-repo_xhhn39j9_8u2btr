export default function TermsAndUseOfFunds() {
  return (
    <section id="terms" className="py-16">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 className="text-white text-xl font-semibold mb-3">VIP Terms</h3>
          <ul className="text-blue-200 space-y-2 text-sm">
            <li>• 5‑year guarantee for a 2% revenue share distributed quarterly.</li>
            <li>• VIP investor cohort capped to ensure fair share and communication cadence.</li>
            <li>• Distributions based on audited revenue from core product line.</li>
            <li>• Best‑effort communication and investor updates monthly.</li>
            <li>• Refunds or make‑good credits activated if product milestones are not met.</li>
          </ul>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 className="text-white text-xl font-semibold mb-3">Use of Funds</h3>
          <ul className="text-blue-200 space-y-2 text-sm">
            <li>• 45% Engineering & Product development</li>
            <li>• 25% Compliance, security, and audits</li>
            <li>• 20% Growth, partnerships, and community</li>
            <li>• 10% Operations and runway</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
