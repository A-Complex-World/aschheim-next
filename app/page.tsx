import Image from "next/image";
import ScrollEffects from "@/components/ScrollEffects";
import { LineReveal } from "@/components/Reveal";

export default function Home() {
  return (
    <main className="bg-paper text-ink">
      <ScrollEffects />

      {/* === TOP BAR === */}
      <header className="sticky top-0 z-50 bg-paper/85 backdrop-blur-md border-b border-rule">
        <div className="px-5 md:px-8 py-3 flex items-center justify-between mono text-[10px] tracking-[0.18em] uppercase">
          <div className="flex items-center gap-6">
            <span className="font-medium">Steiner Architektur</span>
            <span className="hidden md:inline text-ink-mute">·</span>
            <span className="hidden md:inline text-ink-mute">Investorenmappe / 04.2026</span>
          </div>
          <span className="text-ink-soft hidden md:inline" data-clock>MUC · 00:00:00</span>
          <a href="#kontakt" className="link-u text-ink">Kontakt aufnehmen ↗</a>
        </div>
      </header>

      {/* === HERO === */}
      <section id="top" className="relative px-5 md:px-8 pt-12 md:pt-20 pb-20 md:pb-28 border-b border-rule">
        <div className="ticker mb-12 md:mb-20">
          <span>Aschheim Next / Pitch № 01</span>
          <span className="dash" />
          <span>48.176° N, 11.713° E</span>
        </div>

        <h1 className="display text-[16vw] md:text-[12.5vw] leading-[0.86] tracking-tight">
          <LineReveal>Ein Quartier,</LineReveal>
          <br />
          <LineReveal delay={150}>das nicht</LineReveal>
          <br />
          <LineReveal delay={300} className="italic-soft">verschwindet,</LineReveal>
          <br />
          <LineReveal delay={450}>wenn man es</LineReveal>
          <br />
          <LineReveal delay={600} className="italic-soft text-accent">betritt.</LineReveal>
        </h1>

        <div className="grid grid-cols-12 gap-x-4 md:gap-x-6 mt-16 md:mt-24 pt-8 md:pt-10 border-t border-rule">
          <div className="col-span-12 md:col-span-3 mb-6 md:mb-0">
            <div className="eyebrow mb-2">Vorhaben</div>
            <div className="serif text-2xl md:text-3xl leading-tight">
              Mixed-Use-Quartier <span className="italic-soft">Aschheim Ost</span>
            </div>
          </div>
          <div className="col-span-12 md:col-span-3 mb-6 md:mb-0">
            <div className="eyebrow mb-2">Status</div>
            <div className="mono text-sm leading-relaxed">
              Konzept &amp; Genehmigungs-<br/>vorbereitung. Investoren-<br/>akquise Q2 2026.
            </div>
          </div>
          <div className="col-span-12 md:col-span-3 mb-6 md:mb-0">
            <div className="eyebrow mb-2">Programm</div>
            <div className="mono text-sm leading-relaxed">
              Wohnen / Padel / Topgolf-<br/>Range / Plätze &amp; Gastronomie
            </div>
          </div>
          <div className="col-span-12 md:col-span-3">
            <div className="eyebrow mb-2">Volumen</div>
            <div className="mono text-sm leading-relaxed">
              ≈ 4,8 ha Areal<br/>
              ≈ 48.000 m² BGF<br/>
              ≈ 220 WE
            </div>
          </div>
        </div>
      </section>

      {/* === MARQUEE NUMBERS === */}
      <section className="border-b border-rule overflow-hidden py-8 md:py-12">
        <div className="marquee">
          <div className="marquee-track display text-[10vw] md:text-[6vw] leading-none">
            <span>Wohnen</span>
            <span className="text-accent">★</span>
            <span className="italic-soft">Padel</span>
            <span className="text-accent">★</span>
            <span>Topgolf</span>
            <span className="text-accent">★</span>
            <span className="italic-soft">Plätze</span>
            <span className="text-accent">★</span>
            <span>Gastro</span>
            <span className="text-accent">★</span>
          </div>
          <div className="marquee-track display text-[10vw] md:text-[6vw] leading-none" aria-hidden>
            <span>Wohnen</span>
            <span className="text-accent">★</span>
            <span className="italic-soft">Padel</span>
            <span className="text-accent">★</span>
            <span>Topgolf</span>
            <span className="text-accent">★</span>
            <span className="italic-soft">Plätze</span>
            <span className="text-accent">★</span>
            <span>Gastro</span>
            <span className="text-accent">★</span>
          </div>
        </div>
      </section>

      {/* === MEMO / Vision === */}
      <section id="memo" className="px-5 md:px-8 py-24 md:py-40 border-b border-rule">
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-6">
          <div className="col-span-12 md:col-span-3 mb-12 md:mb-0">
            <div className="sec-no mb-3">§ 01 / Memorandum</div>
            <div className="mono text-[10px] tracking-[0.18em] uppercase text-ink-mute leading-relaxed">
              An: Investorenkreis<br/>
              Von: Max Steiner<br/>
              Datum: 21. April 2026<br/>
              Re: Aschheim Next
            </div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <p className="serif text-3xl md:text-[2.4vw] leading-[1.2] mb-12 md:mb-16 max-w-4xl">
              <LineReveal>Wir bauen kein Quartier, das in einer Powerpoint gut aussieht</LineReveal>{" "}
              <LineReveal delay={150}>und vor Ort nicht hält.</LineReveal>{" "}
              <LineReveal delay={300} className="italic-soft text-accent">
                Wir bauen einen Ort, an dem Menschen morgens joggen,
              </LineReveal>{" "}
              <LineReveal delay={450}>nachmittags Padel spielen, abends in einer Bar sitzen</LineReveal>{" "}
              <LineReveal delay={600} className="italic-soft">und alles davon zu Fuß</LineReveal>{" "}
              <LineReveal delay={750}>erreichen — innerhalb desselben Areals.</LineReveal>
            </p>

            <div className="grid md:grid-cols-3 gap-x-6 gap-y-10">
              {[
                {
                  k: "01",
                  h: "Mixed-Use ohne Lärm­konflikt",
                  b: "Wohnen, Sport und Gastronomie sitzen nicht nebeneinander, sondern werden räumlich gestaffelt — der Sport innen und im Westen, das Wohnen im Süden, die Plätze als Puffer.",
                },
                {
                  k: "02",
                  h: "Bewegung als Standardprogramm",
                  b: "Padel und Topgolf sind keine Add-ons. Sie sind das Gravitationszentrum, das das Quartier zu mehr macht als zu einem weiteren Wohngebiet am Stadtrand.",
                },
                {
                  k: "03",
                  h: "Adresse für Aschheim",
                  b: "Die zentrale Platzfolge ist auch für die Aschheimer Bevölkerung gedacht. Das Quartier zieht Frequenz, statt sie nur zu konsumieren.",
                },
              ].map((p, i) => (
                <div key={i} className="fade-up border-t border-rule pt-5" style={{ transitionDelay: `${i * 80}ms` }}>
                  <div className="sec-no mb-3 text-ink-soft">{p.k}</div>
                  <div className="serif text-xl md:text-2xl leading-tight mb-3">{p.h}</div>
                  <p className="text-ink-soft text-sm leading-relaxed">{p.b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === STANDORT === */}
      <section id="standort" className="px-5 md:px-8 py-24 md:py-40 border-b border-rule">
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-6 items-end mb-12 md:mb-20">
          <div className="col-span-12 md:col-span-4">
            <div className="sec-no mb-3">§ 02 / Standort</div>
            <h2 className="display text-[12vw] md:text-[7vw] leading-[0.92]">
              <LineReveal>Aschheim,</LineReveal>{" "}
              <LineReveal delay={150} className="italic-soft text-accent">an der</LineReveal>{" "}
              <LineReveal delay={300}>Naht.</LineReveal>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-7 md:col-start-6">
            <p className="serif text-xl md:text-2xl leading-snug fade-up max-w-2xl">
              Zwischen München, dem Erdinger Moos und der Münchner Schotterebene. <span className="italic-soft text-ink-soft">12 Minuten</span> mit der S2 ins Zentrum, <span className="italic-soft text-ink-soft">5 Minuten</span> auf die A99. Der letzte ruhige Standort, der noch Stadt werden kann, statt Vorstadt zu bleiben.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-x-4 md:gap-x-6 items-stretch">
          <div className="col-span-12 md:col-span-7 mask-reveal">
            <div className="frame">
              <div className="relative aspect-[16/10] bg-paper overflow-hidden">
                <Image
                  src="/site/map-region.jpg"
                  alt="Lagekarte München / Aschheim"
                  fill sizes="(min-width: 768px) 60vw, 100vw"
                  className="object-contain"
                />
              </div>
              <div className="flex items-center justify-between mt-3 mono text-[9px] tracking-[0.2em] uppercase text-ink-mute">
                <span>Fig. 01 — Lagekarte Region</span>
                <span>1:80.000</span>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-5 grid grid-cols-2 gap-x-3 gap-y-8 md:gap-y-10 mt-10 md:mt-0">
            {[
              { k: "12", u: "Min", l: "S2 → München Hbf" },
              { k: "5", u: "Min", l: "A99 / A94 Auffahrt" },
              { k: "27", u: "Min", l: "Flughafen München" },
              { k: "≈ 9 k", u: "EW", l: "Aschheim &amp; Dornach" },
              { k: "1,7", u: "Mio", l: "Metropolregion" },
              { k: "Ø 3,1", u: "%", l: "Bevölkerungs-Wachstum p. a." },
            ].map((s, i) => (
              <div key={i} className="fade-up border-t border-rule pt-3" style={{ transitionDelay: `${i * 50}ms` }}>
                <div className="flex items-baseline gap-2">
                  <div className="num text-[14vw] md:text-[5vw]">{s.k}</div>
                  <div className="mono text-xs text-ink-soft">{s.u}</div>
                </div>
                <div className="mono text-[10px] tracking-[0.16em] uppercase text-ink-soft mt-2" dangerouslySetInnerHTML={{__html: s.l}} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === MASTER PLAN === */}
      <section id="masterplan" className="px-5 md:px-8 py-24 md:py-40 border-b border-rule">
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-6 mb-12 md:mb-20 items-end">
          <div className="col-span-12 md:col-span-7">
            <div className="sec-no mb-3">§ 03 / Masterplan</div>
            <h2 className="display text-[12vw] md:text-[8vw] leading-[0.9]">
              <LineReveal>Eine Adresse,</LineReveal>
              <br/>
              <LineReveal delay={150} className="italic-soft text-accent">vier</LineReveal>{" "}
              <LineReveal delay={300}>Welten.</LineReveal>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 mt-8 md:mt-0">
            <p className="text-ink-soft leading-relaxed text-base fade-up">
              Drei Wohncluster im Süden, eine Sport- und Freizeitspange im Norden, dazwischen zwei Plätze, die das Quartier mit Aschheim verzahnen. Die Topgolf-Range markiert die Adresse von der A99 aus — sichtbar, eindeutig, einprägsam.
            </p>
          </div>
        </div>

        <div className="mask-reveal frame">
          <div className="relative aspect-[16/10] md:aspect-[16/8] bg-paper overflow-hidden">
            <Image
              src="/site/gesamtareal-plan.jpg"
              alt="Lageplan Aschheim Next"
              fill sizes="100vw"
              className="object-contain"
              priority
            />
          </div>
          <div className="flex items-center justify-between mt-3 mono text-[9px] tracking-[0.2em] uppercase text-ink-mute">
            <span>Fig. 02 — Gesamtareal Lageplan</span>
            <span>1:2.000</span>
          </div>
        </div>

        {/* Programm-Tabelle */}
        <div className="mt-16 md:mt-24">
          <div className="hr-strong mb-8" />
          <div className="grid grid-cols-12 gap-x-4 md:gap-x-6 mono text-[10px] tracking-[0.16em] uppercase text-ink-mute pb-3 border-b border-rule">
            <div className="col-span-1">№</div>
            <div className="col-span-4">Cluster</div>
            <div className="col-span-3">Programm</div>
            <div className="col-span-2">BGF / Nutzung</div>
            <div className="col-span-2 text-right">Anteil</div>
          </div>
          {[
            { n: "01", c: "Wohnen Süd I–III", p: "Holzhybrid, Maisonette + Apartments", g: "≈ 22.000 m²", a: "46 %" },
            { n: "02", c: "Sport-Spange Nord", p: "Padel-Halle, Outdoor-Plätze, Lounge", g: "≈ 7.500 m²", a: "16 %" },
            { n: "03", c: "Topgolf-Range Ost", p: "60 Bays, drei Ebenen, Gastro-Galerie", g: "≈ 11.000 m²", a: "23 %" },
            { n: "04", c: "Plätze &amp; Gastro Mitte", p: "Bäcker, Brasserie, Hofladen, Kita", g: "≈ 7.500 m²", a: "15 %" },
          ].map((row, i) => (
            <div key={i} className="fade-up grid grid-cols-12 gap-x-4 md:gap-x-6 py-5 md:py-7 border-b border-rule items-baseline" style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="col-span-1 sec-no text-ink-soft">{row.n}</div>
              <div className="col-span-12 md:col-span-4 serif text-2xl md:text-3xl mt-1 md:mt-0" dangerouslySetInnerHTML={{__html: row.c}} />
              <div className="col-span-8 md:col-span-3 mono text-xs md:text-sm text-ink-soft leading-snug mt-2 md:mt-0" dangerouslySetInnerHTML={{__html: row.p}} />
              <div className="col-span-4 md:col-span-2 mono text-xs md:text-sm text-ink-soft leading-snug mt-2 md:mt-0">{row.g}</div>
              <div className="col-span-12 md:col-span-2 num text-[10vw] md:text-[3.5vw] text-right mt-2 md:mt-0">{row.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* === Bauteile === */}
      <Cluster
        no="§ 04"
        kicker="Cluster I"
        title="Wohnen"
        statement={<>
          <LineReveal>Holzhybrid, drei Höfe,</LineReveal>{" "}
          <LineReveal delay={150} className="italic-soft text-accent">eine ruhige Hand.</LineReveal>
        </>}
        body="Drei Wohncluster mit ca. 220 Einheiten in mehrgeschossiger Holzhybridbauweise — Pendler-Apartment bis Maisonette, einheitlicher Materialkanon, hohe Decken, große Fenster, gemeinschaftliche Höfe. KfW-40-Standard, dezentrale Wärmepumpe, Photovoltaik auf den Flachdächern."
        figures={[
          { src: "/site/atmosphere-wohnen.jpg", alt: "Atmosphäre Wohnen, Innenraum", cap: "Fig. 03 — Innenraum, Maisonette" },
          { src: "/site/wohnen-refs.jpg", alt: "Wohnen, Referenzen", cap: "Fig. 04 — Material- & Stilreferenzen" },
        ]}
        rows={[
          ["WE gesamt", "≈ 220"],
          ["BGF Wohnen", "≈ 22.000 m²"],
          ["Konstruktion", "Holz-Hybrid"],
          ["Energiestandard", "KfW 40"],
          ["Stellplätze", "Tiefgarage 1,2 / WE"],
        ]}
      />

      <Cluster
        no="§ 05"
        kicker="Cluster II"
        title="Padel"
        statement={<>
          <LineReveal>Der Sport,</LineReveal>{" "}
          <LineReveal delay={150} className="italic-soft text-accent">der lärmt</LineReveal>{" "}
          <LineReveal delay={300}>— gefasst in Glas.</LineReveal>
        </>}
        body="Sechs Indoor- plus vier Outdoor-Plätze, Vereinsbetrieb plus Walk-In. Die akustisch und stadtbildverträglich gefassten Hallen erlauben Nachtbetrieb bis 23 Uhr. Café-Lounge mit direktem Blick auf die Plätze, Pro-Shop, Eventfläche."
        figures={[
          { src: "/site/atmosphere-padel.jpg", alt: "Atmosphäre Padel-Halle", cap: "Fig. 05 — Innen, Padel-Halle" },
          { src: "/site/padel-refs.jpg", alt: "Padel Referenzen", cap: "Fig. 06 — Referenzen Padel" },
        ]}
        rows={[
          ["Plätze", "10 (6 Indoor / 4 Outdoor)"],
          ["Betriebszeit", "07:00–23:00"],
          ["Mitglieder Ziel", "≈ 1.200"],
          ["Walk-In Slot", "60 Min · 9 €/Person"],
          ["Eventfläche", "≈ 280 m²"],
        ]}
        flip
      />

      <Cluster
        no="§ 06"
        kicker="Cluster III"
        title="Topgolf-Range"
        statement={<>
          <LineReveal>Die</LineReveal>{" "}
          <LineReveal delay={150} className="italic-soft">Driving-Range</LineReveal>{" "}
          <LineReveal delay={300} className="text-accent">als Bühne.</LineReveal>
        </>}
        body="Mehrgeschossige Range mit beleuchteten Bays, Trackman-Targets und Gastronomie-Galerie. Ganzjahresbetrieb durch Beheizung und Überdachung, Familien-Bays, Firmen-Events, After-Work-Mini-Tournaments. Sichtbar von der A99 — die Adresse des Quartiers."
        figures={[
          { src: "/site/atmosphere-topgolf.jpg", alt: "Atmosphäre Topgolf-Range", cap: "Fig. 07 — Range, Innenansicht" },
          { src: "/site/topgolf-refs.jpg", alt: "Topgolf Referenzen", cap: "Fig. 08 — Referenzen Range" },
        ]}
        rows={[
          ["Bays", "60 auf 3 Ebenen"],
          ["Tracking", "Trackman Range"],
          ["Bewirtschaftung", "Ganzjahr · beheizt"],
          ["Bars / Galerie", "≈ 600 m²"],
          ["Events", "Firmen, Junggesellen, Mini-Turniere"],
        ]}
      />

      <Cluster
        no="§ 07"
        kicker="Cluster IV"
        title="Plätze & Gastro"
        statement={<>
          <LineReveal>Die Mitte hält</LineReveal>{" "}
          <LineReveal delay={150} className="italic-soft text-accent">das Quartier.</LineReveal>
        </>}
        body="Zwei Plätze, drei Gastro-Konzepte vom Bäcker bis zur Brasserie, ein Hofladen, eine Kita. Hier wird das Quartier zur Adresse — auch für Aschheim selbst, nicht nur für Bewohner. Wochenmarkt-Fläche, Open-Air-Kino im Sommer, kleine Sport-Wettkämpfe."
        figures={[
          { src: "/site/atmosphere-quarter.jpg", alt: "Atmosphäre Quartiersplatz", cap: "Fig. 09 — Quartiersplatz Mitte" },
          { src: "/site/padel-lifestyle.jpg", alt: "Lifestyle Quartier", cap: "Fig. 10 — Stimmung Tageszeit" },
        ]}
        rows={[
          ["Plätze", "2 (Markt, Innenhof)"],
          ["Gastro-Slots", "3 + 1 Bäcker"],
          ["Sitzplätze außen", "≈ 300"],
          ["Kita-Plätze", "≈ 80"],
          ["Veranstaltungen p.a.", "≈ 30"],
        ]}
        flip
      />

      {/* === KENNZAHLEN === */}
      <section id="zahlen" className="px-5 md:px-8 py-24 md:py-40 border-b border-rule">
        <div className="sec-no mb-3">§ 08 / Eckdaten</div>
        <h2 className="display text-[14vw] md:text-[10vw] leading-[0.88] mb-16 md:mb-24">
          <LineReveal>Das</LineReveal>{" "}
          <LineReveal delay={150}>Projekt</LineReveal>
          <br/>
          <LineReveal delay={300} className="italic-soft text-accent">in Zahlen.</LineReveal>
        </h2>
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-6">
          {[
            { k: "≈ 4,8", u: "ha", l: "Grundstücksfläche" },
            { k: "≈ 48.000", u: "m²", l: "Bruttogeschossfläche" },
            { k: "220", u: "WE", l: "Wohneinheiten" },
            { k: "10", u: "Plätze", l: "Padel Indoor + Outdoor" },
            { k: "60", u: "Bays", l: "Topgolf-Range" },
            { k: "KfW", u: "40", l: "Energiestandard Wohnen" },
            { k: "S2", u: "12 Min", l: "→ München Hbf" },
            { k: "2027", u: "Ziel", l: "Baubeginn" },
            { k: "2030", u: "Ziel", l: "Fertigstellung" },
          ].map((s, i) => (
            <div key={i} className="col-span-12 md:col-span-4 fade-up border-t border-rule py-8 md:py-10" style={{ transitionDelay: `${(i % 3) * 60}ms` }}>
              <div className="flex items-baseline gap-3 mb-3">
                <div className="num text-[18vw] md:text-[7vw]">{s.k}</div>
                <div className="mono text-xs md:text-sm text-ink-soft">{s.u}</div>
              </div>
              <div className="mono text-[10px] tracking-[0.18em] uppercase text-ink-soft">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* === ROADMAP === */}
      <section id="roadmap" className="px-5 md:px-8 py-24 md:py-40 border-b border-rule">
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-6 items-end mb-16">
          <div className="col-span-12 md:col-span-5">
            <div className="sec-no mb-3">§ 09 / Roadmap</div>
            <h2 className="display text-[12vw] md:text-[7vw] leading-[0.92]">
              <LineReveal>Vom Plan</LineReveal>{" "}
              <LineReveal delay={150} className="italic-soft text-accent">zur Adresse.</LineReveal>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7 mt-8 md:mt-0">
            <p className="text-ink-soft leading-relaxed text-base fade-up max-w-md">
              Das Vorhaben wird in zwei Bauabschnitten realisiert. Phase 1 öffnet die Sport-Spange und das Topgolf-Modul — sie tragen die Adresse, bevor die Wohncluster fertiggestellt werden.
            </p>
          </div>
        </div>

        <div className="hr-strong mb-0" />
        {[
          { y: "2026", q: "Q2–Q4", t: "Investorenakquise & Genehmigungsverfahren", b: "Pitch-Deck, Wirtschaftlichkeit, Vorbescheid, BBauG-Verfahren mit Gemeinde Aschheim." },
          { y: "2027", q: "Q1–Q4", t: "Baubeginn Phase 1: Sport-Spange + Topgolf", b: "Padel-Halle, Outdoor-Plätze, Topgolf-Range. Eröffnung Phase 1 Q3 2028." },
          { y: "2028", q: "Q3", t: "Baubeginn Phase 2: Wohnen + Plätze", b: "Wohncluster Süd I–III, Plätze und Gastronomie. Bezug ab Q3 2030." },
          { y: "2030", q: "Q3", t: "Quartier vollständig in Betrieb", b: "Plätze, Gastronomie, Kita, Sport, Wohnen — gemeinsam." },
        ].map((r, i) => (
          <div key={i} className="fade-up grid grid-cols-12 gap-x-4 md:gap-x-6 py-8 md:py-10 border-b border-rule items-baseline" style={{ transitionDelay: `${i * 80}ms` }}>
            <div className="col-span-3 md:col-span-2 num text-[12vw] md:text-[5vw]">{r.y}</div>
            <div className="col-span-9 md:col-span-2 mono text-[10px] tracking-[0.18em] uppercase text-ink-soft pt-3 md:pt-5">{r.q}</div>
            <div className="col-span-12 md:col-span-8 mt-3 md:mt-0">
              <div className="serif text-2xl md:text-3xl mb-2">{r.t}</div>
              <p className="text-ink-soft text-sm md:text-base leading-relaxed max-w-2xl">{r.b}</p>
            </div>
          </div>
        ))}
      </section>

      {/* === BIG STATEMENT === */}
      <section className="px-5 md:px-8 py-32 md:py-56 border-b border-rule">
        <p className="display text-[10vw] md:text-[6.5vw] leading-[1.02] max-w-[18ch] mx-auto text-center">
          <LineReveal>„Wir bauen kein</LineReveal>{" "}
          <LineReveal delay={150} className="italic-soft">Bauprojekt</LineReveal>.{" "}
          <LineReveal delay={300}>Wir bauen ein</LineReveal>{" "}
          <LineReveal delay={450} className="italic-soft text-accent">Stück Stadt</LineReveal>{" "}
          <LineReveal delay={600}>für die nächste</LineReveal>{" "}
          <LineReveal delay={750}>Generation."</LineReveal>
        </p>
        <div className="mono text-[10px] tracking-[0.18em] uppercase text-ink-soft text-center mt-12 fade-up">
          Max Steiner · Geschäftsführer · Steiner Architektur GmbH
        </div>
      </section>

      {/* === KONTAKT === */}
      <section id="kontakt" className="px-5 md:px-8 py-24 md:py-40 border-b border-rule">
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-6 items-end">
          <div className="col-span-12 md:col-span-7 mb-12 md:mb-0">
            <div className="sec-no mb-3">§ 10 / Pitch anfordern</div>
            <h2 className="display text-[14vw] md:text-[8.5vw] leading-[0.9]">
              <LineReveal>Werden Sie</LineReveal>
              <br/>
              <LineReveal delay={150} className="italic-soft text-accent">Teil der</LineReveal>{" "}
              <LineReveal delay={300}>Geschichte.</LineReveal>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5">
            <p className="text-ink-soft leading-relaxed text-base mb-10 fade-up max-w-md">
              Vollständiges Pitch-Deck, Wirtschaftlichkeitsrechnung und Realisierungsplan auf vertraulicher Basis. Wir freuen uns auf das Gespräch.
            </p>
            <div className="space-y-5 fade-up">
              <div className="border-t border-rule pt-4">
                <div className="mono text-[10px] tracking-[0.18em] uppercase text-ink-mute mb-1">E-Mail</div>
                <a href="mailto:next@steiner-architektur.de" className="serif text-2xl md:text-3xl leading-tight link-u">next@steiner-architektur.de</a>
              </div>
              <div className="border-t border-rule pt-4">
                <div className="mono text-[10px] tracking-[0.18em] uppercase text-ink-mute mb-1">Telefon</div>
                <a href="tel:+4989000000000" className="serif text-2xl md:text-3xl leading-tight link-u">+49 89 000 000 00</a>
              </div>
              <div className="border-t border-rule pt-4">
                <div className="mono text-[10px] tracking-[0.18em] uppercase text-ink-mute mb-1">Adresse</div>
                <div className="serif text-xl leading-snug">
                  Steiner Architektur GmbH<br/>
                  Musterstraße 1, 80333 München
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === FOOTER === */}
      <footer className="px-5 md:px-8 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mono text-[10px] tracking-[0.18em] uppercase text-ink-soft">
          <div>© 2026 Steiner Architektur GmbH</div>
          <div className="flex items-center gap-6">
            <a href="/impressum" className="link-u">Impressum</a>
            <a href="/datenschutz" className="link-u">Datenschutz</a>
          </div>
          <div>Aschheim Next · v3.0 · Investorenmappe</div>
        </div>
      </footer>
    </main>
  );
}

function Cluster({
  no, kicker, title, statement, body, figures, rows, flip = false,
}: {
  no: string;
  kicker: string;
  title: string;
  statement: React.ReactNode;
  body: string;
  figures: { src: string; alt: string; cap: string }[];
  rows: [string, string][];
  flip?: boolean;
}) {
  return (
    <section className="px-5 md:px-8 py-24 md:py-40 border-b border-rule">
      <div className="grid grid-cols-12 gap-x-4 md:gap-x-6 items-baseline mb-12 md:mb-16">
        <div className={`col-span-12 md:col-span-5 ${flip ? "md:order-2 md:col-start-8" : ""}`}>
          <div className="sec-no mb-3">{no} / {kicker}</div>
          <h2 className="display text-[14vw] md:text-[9vw] leading-[0.9]">{title}</h2>
        </div>
        <div className={`col-span-12 md:col-span-6 mt-6 md:mt-0 ${flip ? "md:order-1" : "md:col-start-7"}`}>
          <p className="serif text-2xl md:text-[2vw] leading-snug max-w-xl">{statement}</p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-x-4 md:gap-x-6">
        <div className={`col-span-12 md:col-span-7 grid grid-cols-12 gap-3 md:gap-4 ${flip ? "md:order-2" : ""}`}>
          <div className="col-span-12 md:col-span-7 mask-reveal">
            <div className="frame">
              <div className="relative aspect-[4/5] md:aspect-[4/5] overflow-hidden">
                <Image src={figures[0].src} alt={figures[0].alt} fill sizes="(min-width: 768px) 35vw, 100vw" className="object-cover" />
              </div>
              <div className="flex items-center justify-between mt-3 mono text-[9px] tracking-[0.2em] uppercase text-ink-mute">
                <span>{figures[0].cap}</span>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-5 mask-reveal md:mt-16">
            <div className="frame">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image src={figures[1].src} alt={figures[1].alt} fill sizes="(min-width: 768px) 25vw, 100vw" className="object-cover" />
              </div>
              <div className="flex items-center justify-between mt-3 mono text-[9px] tracking-[0.2em] uppercase text-ink-mute">
                <span>{figures[1].cap}</span>
              </div>
            </div>
          </div>
        </div>

        <div className={`col-span-12 md:col-span-4 ${flip ? "md:order-1 md:col-start-1" : "md:col-start-9"} mt-12 md:mt-0`}>
          <p className="text-ink-soft leading-relaxed text-base mb-10 fade-up max-w-md">{body}</p>
          <div className="border-t border-rule">
            {rows.map(([k, v], i) => (
              <div key={i} className="grid grid-cols-12 py-4 border-b border-rule fade-up" style={{ transitionDelay: `${i * 50}ms` }}>
                <div className="col-span-5 mono text-[10px] tracking-[0.16em] uppercase text-ink-mute self-center">{k}</div>
                <div className="col-span-7 serif text-base md:text-lg" dangerouslySetInnerHTML={{__html: v}} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
