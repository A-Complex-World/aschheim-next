import Image from "next/image";
import ScrollEffects from "@/components/ScrollEffects";
import { WordReveal, LineReveal } from "@/components/Reveal";

export default function Home() {
  return (
    <main className="bg-bg text-ink">
      <ScrollEffects />

      {/* === NAV === */}
      <nav className="site-nav fixed top-0 inset-x-0 z-50 px-6 md:px-10 py-5 flex items-center justify-between">
        <a href="#top" className="font-mono text-[11px] tracking-[0.18em] uppercase text-ink magnetic relative z-10">
          Aschheim<span className="text-accent">.</span>Next
        </a>
        <div className="hidden md:flex items-center gap-10 font-mono text-[11px] tracking-[0.18em] uppercase relative z-10">
          <a href="#vision" className="link-u">Vision</a>
          <a href="#areal" className="link-u">Areal</a>
          <a href="#welten" className="link-u">Welten</a>
          <a href="#daten" className="link-u">Daten</a>
          <a href="#kontakt" className="link-u">Kontakt</a>
        </div>
        <a href="#kontakt" className="hidden md:inline-flex font-mono text-[11px] tracking-[0.18em] uppercase border border-rule px-4 py-2 rounded-full hover:bg-ink hover:text-bg transition-colors relative z-10">
          Pitch anfordern <span aria-hidden>→</span>
        </a>
        <div className="site-nav-bg" aria-hidden />
      </nav>

      {/* === HERO === */}
      <section id="top" className="relative h-[100svh] w-full overflow-hidden">
        <div className="absolute inset-0 hero-img">
          <Image
            src="/cinema/hero.jpg"
            alt="Aschheim Next, atmosphärische Luftaufnahme bei Dämmerung"
            fill priority sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(10,9,7,0.55) 0%, rgba(10,9,7,0.25) 35%, rgba(10,9,7,0.85) 75%, var(--bg) 100%)" }} />
        </div>

        <div className="relative h-full flex flex-col justify-end px-6 md:px-10 pb-12 md:pb-20">
          <div className="flex items-end justify-between gap-8 mb-12 md:mb-20">
            <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-ink-soft fade-up">
              <div>48.176° N · 11.713° E</div>
              <div>Aschheim · München · DE</div>
            </div>
            <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-ink-soft fade-up text-right">
              <div>Investorenpitch</div>
              <div>Steiner Architektur · 2026</div>
            </div>
          </div>

          <h1 className="display text-[14vw] md:text-[10.5vw] leading-[0.88] max-w-[14ch]">
            <LineReveal delay={200}>Ein Stück</LineReveal>
            <br />
            <LineReveal delay={350} className="text-accent"><span className="display-i">Stadt,</span></LineReveal>
            <br />
            <LineReveal delay={500}>das atmet.</LineReveal>
          </h1>

          <div className="mt-10 flex items-end justify-between gap-8">
            <p className="max-w-md text-ink-soft text-base md:text-lg leading-relaxed fade-up">
              Wohnen, Sport und Begegnung — verzahnt zu einem Quartier, das nicht nur funktioniert,
              sondern eine Stimmung erzeugt.
            </p>
            <a href="#vision" className="hidden md:flex items-center gap-3 font-mono text-[11px] tracking-[0.18em] uppercase magnetic">
              <span className="w-12 h-px bg-ink" />
              Scroll
            </a>
          </div>
        </div>
      </section>

      {/* === MARQUEE === */}
      <section className="border-y border-rule py-6 overflow-hidden bg-bg-soft">
        <div className="marquee">
          <div className="marquee-track display text-[14vw] md:text-[7vw] leading-none whitespace-nowrap">
            <span>Wohnen</span>
            <span className="text-accent">·</span>
            <span className="display-i">Padel</span>
            <span className="text-accent">·</span>
            <span>Topgolf</span>
            <span className="text-accent">·</span>
            <span className="display-i">Begegnung</span>
            <span className="text-accent">·</span>
          </div>
          <div className="marquee-track display text-[14vw] md:text-[7vw] leading-none whitespace-nowrap" aria-hidden>
            <span>Wohnen</span>
            <span className="text-accent">·</span>
            <span className="display-i">Padel</span>
            <span className="text-accent">·</span>
            <span>Topgolf</span>
            <span className="text-accent">·</span>
            <span className="display-i">Begegnung</span>
            <span className="text-accent">·</span>
          </div>
        </div>
      </section>

      {/* === MANIFEST / VISION === */}
      <section id="vision" className="px-6 md:px-10 py-32 md:py-48 max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-x-6 md:gap-x-10">
          <div className="col-span-12 md:col-span-3 mb-10 md:mb-0">
            <div className="eyebrow fade-up mb-2">01 — Manifest</div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="display text-[8vw] md:text-[5vw] leading-[0.95] mb-12 md:mb-16">
              <LineReveal>Das Quartier</LineReveal>{" "}
              <LineReveal delay={150} className="text-ink-muted"><span className="display-i">der nächsten</span></LineReveal>{" "}
              <LineReveal delay={300}>Dekade</LineReveal>
              <LineReveal delay={450} className="text-accent"> beginnt nicht mit dem</LineReveal>{" "}
              <LineReveal delay={600}><span className="display-i">Was</span>,</LineReveal>{" "}
              <LineReveal delay={750}>sondern mit dem</LineReveal>{" "}
              <LineReveal delay={900} className="text-accent"><span className="display-i">Wie es sich anfühlt</span>.</LineReveal>
            </h2>
            <div className="grid md:grid-cols-2 gap-10 md:gap-14 max-w-3xl">
              <p className="text-ink-soft leading-relaxed text-base fade-up">
                Aschheim Next verbindet hochwertiges Wohnen mit Indoor- und Outdoor-Sport,
                Gastronomie und öffentlichen Plätzen — auf einem zusammenhängenden Areal
                am östlichen Rand der Metropolregion München.
              </p>
              <p className="text-ink-soft leading-relaxed text-base fade-up">
                Das Konzept ist eine Antwort auf die Frage, wo Menschen morgen leben wollen:
                in Strukturen, die Bewegung, Begegnung und Rückzug nicht trennen,
                sondern in einem Tagesablauf orchestrieren.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === AREAL — Sticky Cinema === */}
      <section id="areal" className="relative">
        <div className="px-6 md:px-10 py-16 md:py-24 max-w-7xl mx-auto">
          <div className="flex items-baseline justify-between mb-8">
            <div className="eyebrow fade-up">02 — Areal</div>
            <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-ink-muted fade-up">~ 4,8 ha</div>
          </div>
          <h2 className="display text-[10vw] md:text-[7vw] leading-[0.92] mb-14 max-w-[14ch]">
            <LineReveal>Eine</LineReveal>{" "}
            <LineReveal delay={150} className="text-accent"><span className="display-i">Adresse</span></LineReveal>,{" "}
            <br className="hidden md:block" />
            <LineReveal delay={300}>vier Welten.</LineReveal>
          </h2>
        </div>

        <div className="relative w-full h-[100svh] mask-reveal overflow-hidden">
          <Image
            src="/cinema/quartier.jpg"
            alt="Atmosphärische Aufnahme des Quartiers bei Dämmerung"
            fill sizes="100vw" className="object-cover"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(10,9,7,0.5) 0%, transparent 30%, transparent 70%, rgba(10,9,7,0.85) 100%)" }} />
          <div className="absolute inset-0 flex items-end p-6 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 w-full">
              {[
                { kpi: "≈ 4,8 ha", label: "Gesamtfläche" },
                { kpi: "4 Cluster", label: "Wohnen · Sport · Plätze · Gastro" },
                { kpi: "S-Bahn", label: "S2 Aschheim · 12 Min Zentrum" },
                { kpi: "Auto", label: "A99 / A94 in 5 Min" },
              ].map((c, i) => (
                <div key={i} className="fade-up" style={{ transitionDelay: `${i * 80}ms` }}>
                  <div className="num text-[12vw] md:text-[3.4vw] mb-2">{c.kpi}</div>
                  <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-ink-soft">{c.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Plan strip */}
        <div className="px-6 md:px-10 py-20 md:py-32 max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-x-6 md:gap-x-10 items-start">
            <div className="col-span-12 md:col-span-4 mb-8 md:mb-0">
              <div className="eyebrow mb-4 fade-up">Lageplan</div>
              <p className="text-ink-soft leading-relaxed text-base fade-up max-w-sm">
                Der Masterplan verzahnt sich mit dem bestehenden Ortsbild Aschheims und öffnet sich nach
                Süden zur Landschaft. Drei Wohncluster gruppieren sich um eine zentrale Sport- und
                Begegnungsspange.
              </p>
            </div>
            <div className="col-span-12 md:col-span-8 mask-reveal">
              <div className="relative bg-[#efece4] ring-1 ring-rule p-4 md:p-6">
                <Image
                  src="/site/gesamtareal-plan.jpg"
                  alt="Lageplan Aschheim Next"
                  width={1600} height={1000}
                  className="w-full h-auto object-contain"
                />
                <div className="absolute top-2 right-3 font-mono text-[9px] tracking-[0.2em] uppercase text-[#6b6354]">Plan · Steiner Architektur</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === WELTEN === */}
      <section id="welten" className="border-t border-rule">
        <div className="px-6 md:px-10 pt-24 md:pt-40 pb-16 max-w-7xl mx-auto">
          <div className="eyebrow fade-up mb-4">03 — Vier Welten</div>
          <h2 className="display text-[10vw] md:text-[6.5vw] leading-[0.92] max-w-[18ch]">
            <LineReveal>Jedes Cluster ein</LineReveal>{" "}
            <LineReveal delay={150} className="text-accent"><span className="display-i">eigener Zustand</span></LineReveal>{" "}
            <LineReveal delay={300}>—</LineReveal>{" "}
            <LineReveal delay={450}>zusammen ein</LineReveal>{" "}
            <LineReveal delay={600} className="display-i">Quartier</LineReveal>.
          </h2>
        </div>

        {/* World 1 — Wohnen */}
        <World
          number="01"
          title="Wohnen"
          headline="Holz, Licht, Ruhe."
          body="Drei Cluster mit ca. 220 Einheiten in mehrgeschossiger Holzhybridbauweise. Vom Kompakt-Apartment für Pendler bis zur Maisonette für Familien — durchgehender Materialkanon, hohe Decken, große Fenster, gemeinschaftliche Höfe."
          imgs={[
            { src: "/cinema/wohnen.jpg", w: 7, alt: "Atmosphäre Wohneinheit" },
            { src: "/cinema/lifestyle.jpg", w: 5, alt: "Lifestyle Cafe" },
          ]}
          stats={[
            { k: "~ 220", l: "Wohneinheiten" },
            { k: "Holzhybrid", l: "Konstruktion" },
            { k: "KfW 40", l: "Energiestandard" },
          ]}
        />

        <World
          number="02"
          title="Padel"
          headline="Der Sport, der lärmt — gefasst in Glas."
          body="Sechs Indoor- und vier Outdoor-Plätze, Vereinsbetrieb plus Walk-In. Nachtbetrieb bis 23 Uhr durch akustisch und stadtbildverträglich gefasste Hallen. Café-Lounge mit Blick auf die Plätze."
          imgs={[
            { src: "/cinema/padel.jpg", w: 12, alt: "Padel-Plätze bei Nacht" },
          ]}
          stats={[
            { k: "10 Plätze", l: "Indoor & Outdoor" },
            { k: "23:00", l: "Nachtbetrieb" },
            { k: "Walk-In", l: "Buchung & Liga" },
          ]}
          dark
        />

        <World
          number="03"
          title="Topgolf-Range"
          headline="Driving Range als Bühne."
          body="Mehrgeschossige Range mit beleuchteten Bays, Trackman-Targets und Gastro-Galerie. Das Konzept funktioniert ganzjährig — Familien, Firmen-Events, After-Work."
          imgs={[
            { src: "/cinema/topgolf.jpg", w: 7, alt: "Topgolf-Range" },
            { src: "/site/atmosphere-topgolf.jpg", w: 5, alt: "Topgolf Atmosphäre" },
          ]}
          stats={[
            { k: "60 Bays", l: "auf 3 Ebenen" },
            { k: "Trackman", l: "Echtzeit-Tracking" },
            { k: "Ganzjahr", l: "beheizt & überdacht" },
          ]}
        />

        <World
          number="04"
          title="Plätze & Gastro"
          headline="Die Mitte hält das Quartier."
          body="Zwei Plätze, drei Gastro-Konzepte vom Bäcker bis zur Brasserie, ein kleiner Hofladen. Hier wird das Quartier zur Adresse — auch für Aschheim selbst, nicht nur für Bewohner."
          imgs={[
            { src: "/site/atmosphere-quarter.jpg", w: 12, alt: "Quartiersplatz" },
          ]}
          stats={[
            { k: "2 Plätze", l: "öffentlicher Raum" },
            { k: "3 Konzepte", l: "Gastro & Handel" },
            { k: "300+", l: "Sitzplätze außen" },
          ]}
          dark
        />
      </section>

      {/* === DATEN === */}
      <section id="daten" className="px-6 md:px-10 py-32 md:py-44 max-w-7xl mx-auto border-t border-rule">
        <div className="grid grid-cols-12 gap-x-6 md:gap-x-10">
          <div className="col-span-12 md:col-span-4 mb-12 md:mb-0">
            <div className="eyebrow fade-up mb-4">04 — Eckdaten</div>
            <h2 className="display text-[10vw] md:text-[5vw] leading-[0.95]">
              <LineReveal>Das Projekt</LineReveal>{" "}
              <LineReveal delay={150} className="text-accent display-i">in Zahlen.</LineReveal>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12">
            {[
              { k: "≈ 48.000 m²", l: "Bruttogeschossfläche" },
              { k: "≈ 4,8 ha", l: "Grundstücksfläche" },
              { k: "220", l: "Wohneinheiten" },
              { k: "10", l: "Padel-Plätze" },
              { k: "60", l: "Topgolf-Bays" },
              { k: "5 Min", l: "S-Bahn → München" },
              { k: "KfW 40", l: "Energiestandard" },
              { k: "2027", l: "Baubeginn (geplant)" },
              { k: "2030", l: "Fertigstellung (geplant)" },
            ].map((c, i) => (
              <div key={i} className="fade-up border-t border-rule pt-4" style={{ transitionDelay: `${(i % 6) * 60}ms` }}>
                <div className="num text-[10vw] md:text-[3.2vw] mb-2">{c.k}</div>
                <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-ink-muted">{c.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === BIG QUOTE === */}
      <section className="relative h-[80svh] w-full overflow-hidden border-t border-rule">
        <Image
          src="/cinema/context.jpg"
          alt="Bayerische Landschaft im Morgennebel"
          fill sizes="100vw" className="object-cover hero-img"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(10,9,7,0.7) 0%, rgba(10,9,7,0.4) 50%, rgba(10,9,7,0.85) 100%)" }} />
        <div className="absolute inset-0 flex items-center justify-center px-6 md:px-10">
          <p className="display text-[8vw] md:text-[4vw] leading-[1.05] max-w-[20ch] text-center">
            <LineReveal>„Wir bauen kein</LineReveal>{" "}
            <LineReveal delay={150} className="text-accent display-i">Bauprojekt</LineReveal>.{" "}
            <LineReveal delay={300}>Wir bauen ein</LineReveal>{" "}
            <LineReveal delay={450} className="display-i">Stück Stadt</LineReveal>{" "}
            <LineReveal delay={600}>für die nächste Generation."</LineReveal>
          </p>
        </div>
        <div className="absolute bottom-8 left-0 right-0 text-center font-mono text-[11px] tracking-[0.18em] uppercase text-ink-soft fade-up">
          Steiner Architektur · Aschheim Next · 2026
        </div>
      </section>

      {/* === KONTAKT === */}
      <section id="kontakt" className="px-6 md:px-10 py-32 md:py-48 max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-x-6 md:gap-x-10 items-end">
          <div className="col-span-12 md:col-span-7 mb-12 md:mb-0">
            <div className="eyebrow fade-up mb-6">05 — Investorenpitch</div>
            <h2 className="display text-[12vw] md:text-[7vw] leading-[0.92]">
              <LineReveal>Werden Sie</LineReveal>
              <br />
              <LineReveal delay={200} className="text-accent display-i">Teil der</LineReveal>
              <br />
              <LineReveal delay={400}>Geschichte.</LineReveal>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5">
            <p className="text-ink-soft leading-relaxed text-base mb-10 fade-up max-w-md">
              Vollständige Pitch-Unterlagen, Wirtschaftlichkeitsrechnung und Realisierungsplan
              auf vertraulicher Basis. Sprechen Sie uns an.
            </p>
            <div className="space-y-6 fade-up">
              <a href="mailto:next@steiner-architektur.de" className="block group">
                <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-ink-muted mb-1">E-Mail</div>
                <div className="display text-[7vw] md:text-[2.4vw] link-u">next@steiner-architektur.de</div>
              </a>
              <a href="tel:+4989000000000" className="block group">
                <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-ink-muted mb-1">Telefon</div>
                <div className="display text-[7vw] md:text-[2.4vw] link-u">+49 89 000 000 00</div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* === FOOTER === */}
      <footer className="border-t border-rule px-6 md:px-10 py-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 font-mono text-[11px] tracking-[0.18em] uppercase text-ink-muted">
          <div>© 2026 Steiner Architektur</div>
          <div className="flex items-center gap-6">
            <a href="/impressum" className="link-u">Impressum</a>
            <a href="/datenschutz" className="link-u">Datenschutz</a>
          </div>
          <div>Aschheim Next · v2.0</div>
        </div>
      </footer>
    </main>
  );
}

function spanClass(n: number) {
  // tailwind safelist: keep these literal so JIT picks them up
  const map: Record<number, string> = {
    4: "md:col-span-4",
    5: "md:col-span-5",
    6: "md:col-span-6",
    7: "md:col-span-7",
    8: "md:col-span-8",
    12: "md:col-span-12",
  };
  return map[n] ?? "md:col-span-12";
}

function World({
  number, title, headline, body, imgs, stats, dark = false,
}: {
  number: string;
  title: string;
  headline: string;
  body: string;
  imgs: { src: string; w: number; alt: string }[];
  stats: { k: string; l: string }[];
  dark?: boolean;
}) {
  return (
    <div className={`relative ${dark ? "bg-bg-soft" : ""} border-t border-rule`}>
      <div className="px-6 md:px-10 py-24 md:py-40 max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-x-6 md:gap-x-10 mb-16">
          <div className="col-span-12 md:col-span-4 mb-8 md:mb-0">
            <div className="eyebrow mb-4 fade-up">{number} — {title}</div>
            <h3 className="display text-[10vw] md:text-[4vw] leading-[0.95]">
              <LineReveal>{headline.split(" ").slice(0, Math.ceil(headline.split(" ").length / 2)).join(" ")}</LineReveal>
              <br />
              <LineReveal delay={200} className="text-accent display-i">
                {headline.split(" ").slice(Math.ceil(headline.split(" ").length / 2)).join(" ")}
              </LineReveal>
            </h3>
          </div>
          <div className="col-span-12 md:col-span-7 md:col-start-6">
            <p className="text-ink-soft leading-relaxed text-base md:text-lg fade-up max-w-2xl">
              {body}
            </p>
            <div className="grid grid-cols-3 gap-6 mt-12">
              {stats.map((s, i) => (
                <div key={i} className="fade-up border-t border-rule pt-4" style={{ transitionDelay: `${i * 80}ms` }}>
                  <div className="num text-[7vw] md:text-[2.2vw] mb-1">{s.k}</div>
                  <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-ink-muted">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-x-6 md:gap-x-10">
          {imgs.map((img, i) => (
            <div key={i} className={`col-span-12 mask-reveal ${spanClass(img.w)}`}>
              <div className="relative aspect-[16/10] md:aspect-[16/11] overflow-hidden">
                <Image src={img.src} alt={img.alt} fill sizes={`(min-width: 768px) ${(img.w / 12) * 100}vw, 100vw`} className="object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
