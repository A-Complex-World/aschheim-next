export default function Impressum() {
  return (
    <main className="bg-bg text-ink min-h-screen px-6 md:px-10 py-32 max-w-3xl mx-auto">
      <a href="/" className="font-mono text-[11px] tracking-[0.18em] uppercase link-u mb-12 inline-block">← Zurück</a>
      <h1 className="display text-5xl md:text-6xl mb-10">Impressum</h1>
      <div className="space-y-6 text-ink-soft leading-relaxed">
        <div>
          <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-ink-muted mb-2">Anbieter</div>
          <div className="text-ink">Steiner Architektur GmbH</div>
          <div>Musterstraße 1 · 80333 München · Deutschland</div>
        </div>
        <div>
          <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-ink-muted mb-2">Kontakt</div>
          <div>E-Mail: <a href="mailto:next@steiner-architektur.de" className="link-u text-ink">next@steiner-architektur.de</a></div>
          <div>Telefon: +49 89 000 000 00</div>
        </div>
        <div>
          <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-ink-muted mb-2">Vertretungsberechtigt</div>
          <div className="text-ink">Geschäftsführer: Max Steiner</div>
        </div>
        <div>
          <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-ink-muted mb-2">Register</div>
          <div>Handelsregister Amtsgericht München · HRB XXXXX</div>
          <div>USt-IdNr.: DE XXXXXXXXX</div>
        </div>
        <div>
          <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-ink-muted mb-2">Verantwortlich i.S.d. § 18 MStV</div>
          <div className="text-ink">Max Steiner (Anschrift wie oben)</div>
        </div>
      </div>
    </main>
  );
}
