export default function Impressum() {
  return (
    <main className="bg-sand text-ink min-h-screen px-5 md:px-8 py-24 max-w-3xl mx-auto">
      <a href="/" className="mono text-[10px] tracking-[0.14em] uppercase link-u mb-12 inline-block">← Zurück</a>
      <span className="pill mb-5"><span className="dot" />Pflichtangabe</span>
      <h1 className="display text-6xl md:text-7xl leading-[0.9] mb-12">Impressum</h1>
      <div className="space-y-6 text-ink-soft leading-relaxed text-base">
        <div className="card p-6">
          <div className="mono text-[10px] tracking-[0.14em] uppercase text-ink-mute mb-2">Anbieter</div>
          <div className="display text-2xl text-ink">Steiner Architektur GmbH</div>
          <div>Musterstraße 1 · 80333 München · Deutschland</div>
        </div>
        <div className="card p-6">
          <div className="mono text-[10px] tracking-[0.14em] uppercase text-ink-mute mb-2">Kontakt</div>
          <div>E-Mail: <a href="mailto:next@steiner-architektur.de" className="link-u text-ink">next@steiner-architektur.de</a></div>
          <div>Telefon: +49 89 000 000 00</div>
        </div>
        <div className="card p-6">
          <div className="mono text-[10px] tracking-[0.14em] uppercase text-ink-mute mb-2">Vertretungsberechtigt</div>
          <div className="text-ink">Geschäftsführer: Max Steiner</div>
        </div>
        <div className="card p-6">
          <div className="mono text-[10px] tracking-[0.14em] uppercase text-ink-mute mb-2">Register</div>
          <div>Handelsregister Amtsgericht München · HRB XXXXX</div>
          <div>USt-IdNr.: DE XXXXXXXXX</div>
        </div>
      </div>
    </main>
  );
}
