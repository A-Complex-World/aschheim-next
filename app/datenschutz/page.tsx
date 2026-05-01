export default function Datenschutz() {
  return (
    <main className="bg-paper text-ink min-h-screen px-5 md:px-8 py-24 max-w-3xl mx-auto">
      <a href="/" className="mono text-[10px] tracking-[0.18em] uppercase link-u mb-12 inline-block">← Zurück</a>
      <div className="sec-no mb-3">Datenschutzerklärung</div>
      <h1 className="display text-6xl md:text-7xl leading-[0.9] mb-12">Datenschutz</h1>
      <div className="space-y-10 text-ink-soft leading-relaxed text-base">
        <section>
          <div className="mono text-[10px] tracking-[0.18em] uppercase text-ink-mute mb-2">§ 01</div>
          <h2 className="serif text-2xl text-ink mb-3">Verantwortlicher</h2>
          <p>Steiner Architektur GmbH · Musterstraße 1 · 80333 München · Deutschland · next@steiner-architektur.de</p>
        </section>
        <section>
          <div className="mono text-[10px] tracking-[0.18em] uppercase text-ink-mute mb-2">§ 02</div>
          <h2 className="serif text-2xl text-ink mb-3">Server-Logfiles</h2>
          <p>
            Beim Aufruf dieser Website werden technisch notwendige Daten temporär verarbeitet
            (IP-Adresse, Datum/Uhrzeit, Browser, Referrer). Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO. Speicherdauer: max. 14 Tage.
          </p>
        </section>
        <section>
          <div className="mono text-[10px] tracking-[0.18em] uppercase text-ink-mute mb-2">§ 03</div>
          <h2 className="serif text-2xl text-ink mb-3">Kontaktaufnahme</h2>
          <p>
            Bei Kontaktaufnahme per E-Mail oder Telefon werden die mitgeteilten Daten ausschließlich
            zur Bearbeitung Ihres Anliegens verwendet (Art. 6 Abs. 1 lit. b/f DSGVO).
          </p>
        </section>
        <section>
          <div className="mono text-[10px] tracking-[0.18em] uppercase text-ink-mute mb-2">§ 04</div>
          <h2 className="serif text-2xl text-ink mb-3">Hosting</h2>
          <p>Hosting durch Vercel Inc. — Datenübermittlung erfolgt unter den geltenden Standardvertragsklauseln.</p>
        </section>
        <section>
          <div className="mono text-[10px] tracking-[0.18em] uppercase text-ink-mute mb-2">§ 05</div>
          <h2 className="serif text-2xl text-ink mb-3">Ihre Rechte</h2>
          <p>
            Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung,
            Datenübertragbarkeit, Widerspruch sowie Beschwerde bei einer Aufsichtsbehörde.
          </p>
        </section>
      </div>
    </main>
  );
}
