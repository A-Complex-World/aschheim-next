export default function Datenschutz() {
  return (
    <main className="bg-bg text-ink min-h-screen px-6 md:px-10 py-32 max-w-3xl mx-auto">
      <a href="/" className="font-mono text-[11px] tracking-[0.18em] uppercase link-u mb-12 inline-block">← Zurück</a>
      <h1 className="display text-5xl md:text-6xl mb-10">Datenschutz</h1>
      <div className="space-y-8 text-ink-soft leading-relaxed">
        <section>
          <h2 className="text-ink text-xl mb-3">1. Verantwortlicher</h2>
          <p>Steiner Architektur GmbH · Musterstraße 1 · 80333 München · Deutschland · next@steiner-architektur.de</p>
        </section>
        <section>
          <h2 className="text-ink text-xl mb-3">2. Server-Logfiles</h2>
          <p>
            Beim Aufruf dieser Website werden technisch notwendige Daten temporär verarbeitet
            (IP-Adresse, Datum/Uhrzeit, Browser, Referrer). Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.
            Speicherdauer: max. 14 Tage.
          </p>
        </section>
        <section>
          <h2 className="text-ink text-xl mb-3">3. Kontaktaufnahme</h2>
          <p>
            Bei Kontaktaufnahme per E-Mail oder Telefon werden die mitgeteilten Daten ausschließlich
            zur Bearbeitung Ihres Anliegens verwendet (Art. 6 Abs. 1 lit. b/f DSGVO).
          </p>
        </section>
        <section>
          <h2 className="text-ink text-xl mb-3">4. Hosting</h2>
          <p>Hosting durch Vercel Inc. — Datenübermittlung erfolgt unter den geltenden Standardvertragsklauseln.</p>
        </section>
        <section>
          <h2 className="text-ink text-xl mb-3">5. Ihre Rechte</h2>
          <p>
            Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung,
            Datenübertragbarkeit, Widerspruch sowie Beschwerde bei einer Aufsichtsbehörde.
          </p>
        </section>
      </div>
    </main>
  );
}
