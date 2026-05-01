export default function Datenschutz() {
  return (
    <main className="bg-sand text-ink min-h-screen px-5 md:px-8 py-24 max-w-3xl mx-auto">
      <a href="/" className="mono text-[10px] tracking-[0.14em] uppercase link-u mb-12 inline-block">← Zurück</a>
      <span className="pill mb-5"><span className="dot" />Pflichtangabe</span>
      <h1 className="display text-6xl md:text-7xl leading-[0.9] mb-12">Datenschutz</h1>
      <div className="space-y-6 text-ink-soft leading-relaxed text-base">
        {[
          { n: "01", t: "Verantwortlicher", b: "Steiner Architektur GmbH · Musterstraße 1 · 80333 München · Deutschland · next@steiner-architektur.de" },
          { n: "02", t: "Server-Logfiles", b: "Beim Aufruf dieser Website werden technisch notwendige Daten temporär verarbeitet (IP-Adresse, Datum/Uhrzeit, Browser, Referrer). Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO. Speicherdauer: max. 14 Tage." },
          { n: "03", t: "Kontaktaufnahme", b: "Bei Kontaktaufnahme per E-Mail oder Telefon werden die mitgeteilten Daten ausschließlich zur Bearbeitung Ihres Anliegens verwendet (Art. 6 Abs. 1 lit. b/f DSGVO)." },
          { n: "04", t: "Hosting", b: "Hosting durch Vercel Inc. — Datenübermittlung erfolgt unter den geltenden Standardvertragsklauseln." },
          { n: "05", t: "Ihre Rechte", b: "Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerspruch sowie Beschwerde bei einer Aufsichtsbehörde." },
        ].map(s => (
          <div key={s.n} className="card p-6">
            <div className="mono text-[10px] tracking-[0.14em] uppercase text-moss mb-3">§ {s.n}</div>
            <h2 className="display text-2xl text-ink mb-3">{s.t}</h2>
            <p>{s.b}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
