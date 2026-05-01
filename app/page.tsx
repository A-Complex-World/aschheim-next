import Image from "next/image";
import ScrollEffects from "@/components/ScrollEffects";
import { LineReveal } from "@/components/Reveal";
import WeltenTabs from "@/components/WeltenTabs";

export default function Home() {
  return (
    <main className="bg-sand text-ink">
      <ScrollEffects />

      {/* === NAV === */}
      <header className="fixed top-3 inset-x-3 md:top-4 md:inset-x-6 z-50">
        <div className="rounded-full border border-line bg-paper/85 backdrop-blur-md pl-4 md:pl-5 pr-2 md:pr-2 py-2 flex items-center justify-between gap-3">
          <a href="#top" className="flex items-center gap-2 font-medium text-[14px] tracking-tight whitespace-nowrap">
            <span className="inline-block w-2 h-2 rounded-full bg-moss" />
            <span>Aschheim<span className="opacity-60">.next</span></span>
          </a>
          <nav className="hidden md:flex items-center gap-8 mono text-[11px] tracking-[0.14em] uppercase text-ink-soft">
            <a href="#vision" className="link-u hover:text-ink">Vision</a>
            <a href="#standort" className="link-u hover:text-ink">Standort</a>
            <a href="#welten" className="link-u hover:text-ink">Welten</a>
            <a href="#plan" className="link-u hover:text-ink">Plan</a>
            <a href="#zahlen" className="link-u hover:text-ink">Zahlen</a>
          </nav>
          <a href="#kontakt" className="btn btn-moss text-[12px] md:text-[13px] py-2 px-3 md:px-4 whitespace-nowrap">
            <span className="hidden sm:inline">Pitch anfordern</span>
            <span className="sm:hidden">Pitch</span>
            <span aria-hidden>↗</span>
          </a>
        </div>
      </header>

      {/* === HERO === */}
      <section id="top" className="px-4 md:px-6 pt-28 md:pt-36 pb-16 md:pb-20">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-wrap items-center gap-3 mb-10 md:mb-14 fade-up">
            <span className="pill"><span className="dot" />Investorenpitch / Q2 2026</span>
            <span className="pill" style={{background:"transparent"}}>Bauherr: DB Development</span>
            <span className="pill" style={{background:"transparent"}}>Architektur: Steiner</span>
            <span className="pill" style={{background:"transparent"}}>Aschheim · München</span>
          </div>

          <h1 className="display text-[16vw] md:text-[10.5vw] leading-[0.88] mb-12 md:mb-16">
            <LineReveal>Wohnen, Sport,</LineReveal>
            <br />
            <LineReveal delay={150}>Begegnung —</LineReveal>
            <br />
            <LineReveal delay={300} className="text-moss">in einer Adresse.</LineReveal>
          </h1>

          <div className="grid grid-cols-12 gap-y-8 gap-x-6 md:gap-x-10 items-end mb-16">
            <div className="col-span-12 md:col-span-5">
              <p className="text-lg md:text-xl text-ink-soft leading-relaxed max-w-xl fade-up">
                Aschheim Next ist ein <span className="text-ink font-medium">Mixed-Use-Quartier</span> auf 4,8 ha am östlichen Rand der Metropolregion München.
                220 Wohneinheiten, eine Padel-Halle, eine Topgolf-Range, Plätze und Gastronomie.
                <span className="text-ink font-medium"> Eine Adresse, vier Welten.</span>
              </p>
            </div>
            <div className="col-span-12 md:col-span-3 md:col-start-7">
              <div className="eyebrow mb-2">Volumen</div>
              <div className="display text-3xl md:text-5xl mb-1">≈ 48.000 m²</div>
              <div className="mono text-[11px] text-ink-mute">Bruttogeschossfläche</div>
            </div>
            <div className="col-span-6 md:col-span-2">
              <div className="eyebrow mb-2">Investorenrunde</div>
              <div className="display text-2xl md:text-3xl">Q2 2026</div>
            </div>
            <div className="col-span-6 md:col-span-2">
              <div className="eyebrow mb-2">Fertigstellung</div>
              <div className="display text-2xl md:text-3xl">2030</div>
            </div>
          </div>

          {/* Hero visual — Axonometrie */}
          <div className="card overflow-hidden mask-reveal" style={{borderRadius: "32px"}}>
            <div className="relative aspect-[16/9] md:aspect-[16/8] bg-sand-soft overflow-hidden">
              <Image
                src="/site/hero-axo.jpg"
                alt="Aschheim Next, axonometrische Darstellung des Quartiers"
                fill priority sizes="100vw"
                className="object-contain p-6 md:p-12 float-slow"
              />
              <div className="absolute top-5 md:top-7 left-5 md:left-7 pill" style={{background:"rgba(244,237,224,0.92)"}}>
                <span className="dot" /> 3D Axonometrie · Stand 04.2026
              </div>
              <div className="absolute bottom-5 md:bottom-7 right-5 md:right-7 mono text-[10px] tracking-[0.18em] uppercase text-ink-mute">
                Fig. 01 — Gesamtanlage
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === MARQUEE === */}
      <section className="border-y border-line py-5 md:py-7 overflow-hidden bg-sand-soft">
        <div className="marquee">
          <div className="marquee-track display text-[10vw] md:text-[5vw] leading-none">
            <span>220 Wohneinheiten</span>
            <span className="text-moss">●</span>
            <span>10 Padel-Plätze</span>
            <span className="text-moss">●</span>
            <span>60 Topgolf-Bays</span>
            <span className="text-moss">●</span>
            <span>2 Plätze</span>
            <span className="text-moss">●</span>
            <span>1 Adresse</span>
            <span className="text-moss">●</span>
          </div>
          <div className="marquee-track display text-[10vw] md:text-[5vw] leading-none" aria-hidden>
            <span>220 Wohneinheiten</span>
            <span className="text-moss">●</span>
            <span>10 Padel-Plätze</span>
            <span className="text-moss">●</span>
            <span>60 Topgolf-Bays</span>
            <span className="text-moss">●</span>
            <span>2 Plätze</span>
            <span className="text-moss">●</span>
            <span>1 Adresse</span>
            <span className="text-moss">●</span>
          </div>
        </div>
      </section>

      {/* === VISION / Memo === */}
      <section id="vision" className="px-4 md:px-6 py-24 md:py-40">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-12 gap-y-12 gap-x-6 md:gap-x-10">
            <div className="col-span-12 md:col-span-3">
              <span className="pill mb-4"><span className="dot" />01 / Vision</span>
              <p className="mono text-[11px] tracking-[0.14em] uppercase text-ink-mute leading-relaxed">
                DB Development,<br/>
                Bauherr · 04.2026
              </p>
              <p className="mono text-[11px] tracking-[0.14em] uppercase text-ink-mute leading-relaxed mt-3">
                Steiner Architektur,<br/>
                Architektur · Planung
              </p>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="display text-[8vw] md:text-[4.6vw] leading-[1.04] mb-12 max-w-5xl">
                <LineReveal>Wir bauen kein</LineReveal>{" "}
                <LineReveal delay={120} className="text-ink-mute">Quartier,</LineReveal>{" "}
                <LineReveal delay={240}>das in einer</LineReveal>{" "}
                <LineReveal delay={360} className="text-ink-mute">Powerpoint</LineReveal>{" "}
                <LineReveal delay={480}>gut aussieht</LineReveal>{" "}
                <LineReveal delay={600}>und vor Ort</LineReveal>{" "}
                <LineReveal delay={720} className="text-moss">nicht hält.</LineReveal>
              </h2>

              <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                {[
                  {
                    n: "Mixed-Use ohne Lärmkonflikt",
                    b: "Wohnen, Sport und Gastro werden räumlich gestaffelt — Sport innen und im Westen, Wohnen im Süden, die Plätze als Puffer.",
                  },
                  {
                    n: "Bewegung als Standardprogramm",
                    b: "Padel und Topgolf sind keine Add-ons. Sie sind das Gravitationszentrum, das das Quartier zu mehr macht als zu einem Wohngebiet am Stadtrand.",
                  },
                  {
                    n: "Adresse für Aschheim",
                    b: "Die zentrale Platzfolge ist auch für die Aschheimer Bevölkerung gedacht. Das Quartier zieht Frequenz, statt sie nur zu konsumieren.",
                  },
                ].map((p, i) => (
                  <div key={i} className="card p-7 fade-up" style={{ transitionDelay: `${i * 80}ms` }}>
                    <div className="mono text-[11px] tracking-[0.14em] uppercase text-moss mb-4">0{i+1}</div>
                    <h3 className="display text-2xl md:text-[1.6vw] leading-[1.05] mb-4">{p.n}</h3>
                    <p className="text-ink-soft text-sm md:text-base leading-relaxed">{p.b}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === STANDORT === */}
      <section id="standort" className="px-4 md:px-6 py-24 md:py-40 bg-sand-soft">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-12 gap-y-12 gap-x-6 md:gap-x-10 items-end mb-12">
            <div className="col-span-12 md:col-span-7">
              <span className="pill mb-5"><span className="dot" />02 / Standort</span>
              <h2 className="display text-[12vw] md:text-[8vw] leading-[0.92]">
                <LineReveal>München</LineReveal>{" "}
                <LineReveal delay={120} className="text-moss">in Reichweite,</LineReveal>
                <br/>
                <LineReveal delay={240}>Aschheim als</LineReveal>{" "}
                <LineReveal delay={360} className="text-ink-mute">Heimat.</LineReveal>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-5">
              <p className="text-base md:text-lg text-ink-soft leading-relaxed fade-up">
                Zwischen München, dem Erdinger Moos und der Schotterebene. Eine S-Bahn ins Zentrum, fünf Minuten zur Autobahn, ruhig genug für Familien, schnell genug für Pendler.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6 md:gap-8 items-stretch">
            {/* Map card */}
            <div className="col-span-12 md:col-span-7 card mask-reveal">
              <div className="relative aspect-[16/10] bg-sand overflow-hidden">
                <Image
                  src="/site/map-region.jpg"
                  alt="Lagekarte München / Aschheim"
                  fill sizes="(min-width: 768px) 60vw, 100vw"
                  className="object-contain p-3 md:p-6 card-img"
                />
                <div className="absolute top-5 left-5 pill" style={{background:"rgba(244,237,224,0.92)"}}>
                  <span className="dot" /> Region · 1:80.000
                </div>
              </div>
            </div>

            {/* Stats grid */}
            <div className="col-span-12 md:col-span-5 grid grid-cols-2 gap-4 md:gap-5">
              {[
                { k: "12", u: "Min", l: "S2 → München Hbf" },
                { k: "05", u: "Min", l: "A99 / A94 Auffahrt" },
                { k: "27", u: "Min", l: "Flughafen MUC" },
                { k: "9k", u: "EW", l: "Aschheim & Dornach" },
                { k: "1,7", u: "Mio", l: "Metropolregion" },
                { k: "+3,1", u: "% p.a.", l: "Wachstum Region" },
              ].map((s, i) => (
                <div key={i} className="card p-5 md:p-6 fade-up" style={{ transitionDelay: `${i * 50}ms` }}>
                  <div className="flex items-baseline gap-2 mb-3">
                    <div className="big-num text-5xl md:text-6xl tabular-nums">{s.k}</div>
                    <div className="mono text-[10px] tracking-[0.14em] uppercase text-ink-mute">{s.u}</div>
                  </div>
                  <div className="mono text-[10px] tracking-[0.14em] uppercase text-ink-soft">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === WELTEN — Tabs === */}
      <section id="welten" className="px-4 md:px-6 py-24 md:py-40">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-12 gap-y-10 gap-x-6 md:gap-x-10 items-end mb-14 md:mb-16">
            <div className="col-span-12 md:col-span-7">
              <span className="pill mb-5"><span className="dot" />03 / Vier Welten</span>
              <h2 className="display text-[12vw] md:text-[8vw] leading-[0.92]">
                <LineReveal>Eine Adresse,</LineReveal>{" "}
                <LineReveal delay={150} className="text-moss">vier Welten.</LineReveal>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-5">
              <p className="text-base md:text-lg text-ink-soft leading-relaxed fade-up max-w-md">
                Wechseln Sie zwischen den Clustern. Jedes mit eigener Atmosphäre, eigenem Programm,
                eigenem Beitrag zur gemeinsamen Adresse.
              </p>
            </div>
          </div>

          <WeltenTabs />
        </div>
      </section>

      {/* === MASTERPLAN === */}
      <section id="plan" className="px-4 md:px-6 py-24 md:py-40 bg-sand-soft">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-12 gap-y-10 gap-x-6 md:gap-x-10 items-end mb-12">
            <div className="col-span-12 md:col-span-7">
              <span className="pill mb-5"><span className="dot" />04 / Masterplan</span>
              <h2 className="display text-[12vw] md:text-[8vw] leading-[0.92]">
                <LineReveal>Räume,</LineReveal>{" "}
                <LineReveal delay={120} className="text-ink-mute">die wissen,</LineReveal>
                <br/>
                <LineReveal delay={240} className="text-moss">wo sie hingehören.</LineReveal>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-5">
              <p className="text-base md:text-lg text-ink-soft leading-relaxed fade-up max-w-md">
                Drei Wohncluster im Süden, eine Sportspange im Norden, dazwischen zwei Plätze. Die Topgolf-Range markiert die Adresse von der A99 — sichtbar, eindeutig, einprägsam.
              </p>
            </div>
          </div>

          <div className="card mask-reveal mb-8">
            <div className="relative aspect-[16/9] md:aspect-[16/8] bg-sand overflow-hidden">
              <Image
                src="/site/gesamtareal-plan.jpg"
                alt="Lageplan Aschheim Next"
                fill sizes="100vw"
                className="object-contain p-3 md:p-8"
              />
              <div className="absolute top-5 left-5 pill" style={{background:"rgba(244,237,224,0.92)"}}>
                <span className="dot" /> Lageplan · 1:2.000 · Stand 04.2026
              </div>
            </div>
          </div>

          {/* Programm-Tabelle */}
          <div className="card overflow-hidden">
            <div className="grid grid-cols-12 gap-x-4 md:gap-x-6 mono text-[10px] tracking-[0.14em] uppercase text-ink-mute py-4 px-6 border-b border-line bg-sand-soft">
              <div className="col-span-1">№</div>
              <div className="col-span-4">Cluster</div>
              <div className="col-span-3 hidden md:block">Programm</div>
              <div className="col-span-2 hidden md:block">BGF</div>
              <div className="col-span-2 text-right">Anteil</div>
            </div>
            {[
              { n: "01", c: "Wohnen Süd I–III", p: "Holzhybrid · 220 WE", g: "≈ 22.000 m²", a: "46 %" },
              { n: "02", c: "Sport-Spange", p: "Padel · 10 Plätze", g: "≈ 7.500 m²", a: "16 %" },
              { n: "03", c: "Topgolf-Range", p: "60 Bays · 3 Ebenen", g: "≈ 11.000 m²", a: "23 %" },
              { n: "04", c: "Plätze & Gastro", p: "Brasserie · Kita · Hofladen", g: "≈ 7.500 m²", a: "15 %" },
            ].map((row, i) => (
              <div key={i} className="fade-up grid grid-cols-12 gap-x-4 md:gap-x-6 py-5 md:py-7 px-6 border-b border-line items-baseline last:border-b-0" style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="col-span-1 mono text-[11px] text-moss font-medium">{row.n}</div>
                <div className="col-span-11 md:col-span-4 display text-xl md:text-2xl">{row.c}</div>
                <div className="col-span-8 md:col-span-3 mono text-xs md:text-sm text-ink-soft mt-2 md:mt-0">{row.p}</div>
                <div className="col-span-4 md:col-span-2 mono text-xs md:text-sm text-ink-soft mt-2 md:mt-0">{row.g}</div>
                <div className="col-span-12 md:col-span-2 big-num text-3xl md:text-4xl text-right mt-2 md:mt-0">{row.a}</div>
              </div>
            ))}
          </div>

          {/* Context Axo */}
          <div className="mt-10 card mask-reveal">
            <div className="relative aspect-[16/9] md:aspect-[16/8] bg-sand overflow-hidden">
              <Image
                src="/site/context-axo.jpg"
                alt="Quartier im Kontext, axonometrische Darstellung"
                fill sizes="100vw"
                className="object-contain p-3 md:p-8"
              />
              <div className="absolute top-5 left-5 pill" style={{background:"rgba(244,237,224,0.92)"}}>
                <span className="dot" /> Kontext · Aschheim Ost
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === ZAHLEN === */}
      <section id="zahlen" className="px-4 md:px-6 py-24 md:py-40">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-20 gap-6">
            <div>
              <span className="pill mb-5"><span className="dot" />05 / Eckdaten</span>
              <h2 className="display text-[12vw] md:text-[8vw] leading-[0.92]">
                <LineReveal>Das Projekt</LineReveal>
                <br/>
                <LineReveal delay={150} className="text-moss">in Zahlen.</LineReveal>
              </h2>
            </div>
            <div className="mono text-[11px] tracking-[0.14em] uppercase text-ink-mute fade-up">
              Stand: 21. April 2026
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4 md:gap-6">
            {[
              { k: "4,8", u: "ha", l: "Grundstück" },
              { k: "48k", u: "m²", l: "BGF" },
              { k: "220", u: "WE", l: "Wohneinheiten" },
              { k: "10", u: "Plätze", l: "Padel" },
              { k: "60", u: "Bays", l: "Topgolf" },
              { k: "KfW40", u: "", l: "Energie" },
              { k: "12", u: "Min", l: "S-Bahn → MUC" },
              { k: "2027", u: "", l: "Baubeginn" },
              { k: "2030", u: "", l: "Fertigstellung" },
            ].map((s, i) => (
              <div key={i} className="col-span-6 md:col-span-4 card p-7 md:p-9 fade-up" style={{ transitionDelay: `${(i % 3) * 60}ms` }}>
                <div className="flex items-baseline gap-3 mb-4">
                  <div className="big-num text-[16vw] md:text-[6vw] tabular-nums">{s.k}</div>
                  <div className="mono text-xs md:text-sm text-ink-soft">{s.u}</div>
                </div>
                <div className="mono text-[11px] tracking-[0.14em] uppercase text-ink-soft">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === ROADMAP === */}
      <section className="px-4 md:px-6 py-24 md:py-40 bg-sand-soft">
        <div className="max-w-[1600px] mx-auto">
          <div className="mb-12 md:mb-20">
            <span className="pill mb-5"><span className="dot" />06 / Roadmap</span>
            <h2 className="display text-[12vw] md:text-[8vw] leading-[0.92] max-w-3xl">
              <LineReveal>Vom Plan</LineReveal>{" "}
              <LineReveal delay={150} className="text-moss">zur Adresse.</LineReveal>
            </h2>
          </div>

          <div className="card overflow-hidden">
            {[
              { y: "2026", q: "Q2–Q4", t: "Investorenakquise & Genehmigung", b: "Pitch-Deck, Wirtschaftlichkeit, Vorbescheid, BBauG-Verfahren mit der Gemeinde Aschheim." },
              { y: "2027", q: "Q1–Q4", t: "Phase 1 — Sport-Spange + Topgolf", b: "Padel-Halle, Outdoor-Plätze, Topgolf-Range. Eröffnung Phase 1 in Q3 2028." },
              { y: "2028", q: "Q3", t: "Phase 2 — Wohnen + Plätze", b: "Wohncluster Süd I–III, Plätze und Gastronomie. Bezug ab Q3 2030." },
              { y: "2030", q: "Q3", t: "Vollbetrieb", b: "Plätze, Gastronomie, Kita, Sport, Wohnen — gemeinsam." },
            ].map((r, i) => (
              <div key={i} className="fade-up grid grid-cols-12 gap-x-4 md:gap-x-6 py-7 md:py-10 px-6 border-b border-line items-baseline last:border-b-0" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="col-span-3 md:col-span-2 big-num text-4xl md:text-6xl tabular-nums">{r.y}</div>
                <div className="col-span-9 md:col-span-2 mono text-[10px] tracking-[0.14em] uppercase text-moss font-medium pt-2 md:pt-4">{r.q}</div>
                <div className="col-span-12 md:col-span-8 mt-3 md:mt-0">
                  <div className="display text-xl md:text-2xl mb-2">{r.t}</div>
                  <p className="text-ink-soft text-sm md:text-base leading-relaxed max-w-2xl">{r.b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === BIG STATEMENT === */}
      <section className="px-4 md:px-6 py-32 md:py-56">
        <div className="max-w-5xl mx-auto text-center">
          <p className="display text-[10vw] md:text-[5.5vw] leading-[1.05]">
            <LineReveal>„Wir bauen kein</LineReveal>{" "}
            <LineReveal delay={120} className="text-ink-mute">Bauprojekt</LineReveal>.{" "}
            <LineReveal delay={240}>Wir bauen ein</LineReveal>{" "}
            <LineReveal delay={360} className="text-moss">Stück Stadt</LineReveal>{" "}
            <LineReveal delay={480}>für die nächste</LineReveal>{" "}
            <LineReveal delay={600}>Generation."</LineReveal>
          </p>
          <div className="mono text-[11px] tracking-[0.14em] uppercase text-ink-mute mt-12 fade-up">
            DB Development · Bauherr · Aschheim Next
          </div>
        </div>
      </section>

      {/* === CTA === */}
      <section id="kontakt" className="px-4 md:px-6 pb-16">
        <div className="max-w-[1600px] mx-auto">
          <div className="card bg-ink text-sand p-8 md:p-16" style={{borderColor:"transparent"}}>
            <div className="grid grid-cols-12 gap-y-12 gap-x-6 md:gap-x-10 items-end">
              <div className="col-span-12 md:col-span-7">
                <span className="pill mb-6" style={{background:"rgba(244,237,224,0.1)", borderColor:"rgba(244,237,224,0.3)", color:"var(--sand)"}}>
                  <span className="dot" />07 / Pitch anfordern
                </span>
                <h2 className="display text-[12vw] md:text-[7vw] leading-[1] text-sand">
                  <LineReveal>Werden Sie</LineReveal>{" "}
                  <LineReveal delay={150} className="text-moss-glow">Teil davon.</LineReveal>
                </h2>
                <p className="mt-8 text-base md:text-lg leading-relaxed max-w-md fade-up" style={{color:"rgba(244,237,224,0.78)"}}>
                  Vollständiges Pitch-Deck, Wirtschaftlichkeitsrechnung und Realisierungsplan auf vertraulicher Basis. Wir freuen uns auf das Gespräch.
                </p>
              </div>
              <div className="col-span-12 md:col-span-5 space-y-5">
                <a href="mailto:next@db-development.de" className="block fade-up group">
                  <div className="mono text-[10px] tracking-[0.18em] uppercase mb-2" style={{color:"rgba(244,237,224,0.55)"}}>E-Mail · DB Development</div>
                  <div className="display text-2xl md:text-3xl link-u">next@db-development.de</div>
                </a>
                <a href="tel:+4989000000000" className="block fade-up">
                  <div className="mono text-[10px] tracking-[0.18em] uppercase mb-2" style={{color:"rgba(244,237,224,0.55)"}}>Telefon</div>
                  <div className="display text-2xl md:text-3xl link-u">+49 89 000 000 00</div>
                </a>
                <div className="fade-up pt-3">
                  <a href="mailto:next@db-development.de?subject=Aschheim Next — Pitch-Anfrage" className="btn btn-moss text-[13px]">
                    Pitch anfordern
                    <span style={{display:"inline-block", transform:"translateY(-1px)"}}>↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === FOOTER === */}
      <footer className="px-4 md:px-6 py-10">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mono text-[10px] tracking-[0.14em] uppercase text-ink-mute">
          <div>© 2026 DB Development GmbH · Architektur: Steiner Architektur</div>
          <div className="flex items-center gap-6">
            <a href="/impressum" className="link-u">Impressum</a>
            <a href="/datenschutz" className="link-u">Datenschutz</a>
          </div>
          <div>Aschheim Next · v4 · 2030 ›</div>
        </div>
      </footer>
    </main>
  );
}
