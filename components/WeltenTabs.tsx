"use client";
import { useState } from "react";
import Image from "next/image";

const welten = [
  {
    id: "wohnen",
    label: "Wohnen",
    num: "01",
    color: "#1f6b3d",
    headline: "Holz, Licht, Ruhe.",
    body:
      "Drei Wohncluster mit ca. 220 Einheiten in mehrgeschossiger Holzhybridbauweise. Vom Pendler-Apartment bis zur Maisonette für Familien — einheitlicher Materialkanon, hohe Decken, große Fenster, gemeinschaftliche Höfe.",
    img: "/site/atmosphere-wohnen.jpg",
    facts: [
      ["WE gesamt", "≈ 220"],
      ["BGF", "≈ 22.000 m²"],
      ["Konstruktion", "Holz-Hybrid"],
      ["Energie", "KfW 40"],
    ],
  },
  {
    id: "padel",
    label: "Padel",
    num: "02",
    color: "#1f6b3d",
    headline: "Der Sport der Stadt.",
    body:
      "Sechs Indoor- und vier Outdoor-Plätze, Vereinsbetrieb plus Walk-In. Akustisch und stadtbildverträglich gefasste Hallen erlauben Nachtbetrieb bis 23 Uhr. Café-Lounge, Pro-Shop, Eventfläche.",
    img: "/site/atmosphere-padel.jpg",
    facts: [
      ["Plätze", "10"],
      ["Mitglieder Ziel", "≈ 1.200"],
      ["Betriebszeit", "07:00–23:00"],
      ["Slot Walk-In", "60 Min · 9 €"],
    ],
  },
  {
    id: "topgolf",
    label: "Topgolf",
    num: "03",
    color: "#1f6b3d",
    headline: "Driving Range als Bühne.",
    body:
      "Mehrgeschossige Range mit 60 Bays auf drei Ebenen, Trackman-Targets, Gastronomie-Galerie. Ganzjahresbetrieb, Familien, Firmen-Events, After-Work — sichtbar von der A99.",
    img: "/site/atmosphere-topgolf.jpg",
    facts: [
      ["Bays", "60 / 3 Ebenen"],
      ["Tracking", "Trackman"],
      ["Bewirtschaftung", "Ganzjahr"],
      ["Gastro", "≈ 600 m²"],
    ],
  },
  {
    id: "plaetze",
    label: "Plätze & Gastro",
    num: "04",
    color: "#1f6b3d",
    headline: "Die Mitte hält das Quartier.",
    body:
      "Zwei Plätze, drei Gastro-Konzepte, ein Hofladen, eine Kita. Hier wird das Quartier zur Adresse — auch für Aschheim selbst, nicht nur für Bewohner. Wochenmarkt, Open-Air-Kino, Mini-Turniere.",
    img: "/site/atmosphere-quarter.jpg",
    facts: [
      ["Plätze", "2"],
      ["Gastro-Slots", "3 + Bäcker"],
      ["Sitzplätze außen", "≈ 300"],
      ["Kita-Plätze", "≈ 80"],
    ],
  },
];

export default function WeltenTabs() {
  const [active, setActive] = useState("wohnen");
  const current = welten.find(w => w.id === active)!;

  return (
    <div>
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 md:gap-3 mb-10 md:mb-14 fade-up">
        {welten.map((w) => (
          <button
            key={w.id}
            onClick={() => setActive(w.id)}
            aria-selected={active === w.id}
            className="tab-btn"
          >
            <span className="num">{w.num}</span>
            <span>{w.label}</span>
          </button>
        ))}
      </div>

      {/* Active panel */}
      <div className="card grid md:grid-cols-2 gap-0 overflow-hidden">
        <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[520px] overflow-hidden photo-warm">
          <Image
            key={current.img}
            src={current.img}
            alt={current.label}
            fill sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover card-img"
          />
          <div className="absolute top-5 left-5 pill" style={{ background: "rgba(244,237,224,0.92)" }}>
            <span className="dot" /> Cluster {current.num} / {current.label}
          </div>
        </div>

        <div className="p-7 md:p-12 flex flex-col justify-between gap-10">
          <div>
            <h3 className="display text-4xl md:text-[3.6vw] mb-6 leading-[0.92]">{current.headline}</h3>
            <p className="text-ink-soft leading-relaxed text-base md:text-lg max-w-md">
              {current.body}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-5">
            {current.facts.map(([k, v], i) => (
              <div key={i} className="border-t border-line pt-3">
                <div className="mono text-[10px] tracking-[0.16em] uppercase text-ink-mute mb-1">{k}</div>
                <div className="display text-xl md:text-2xl">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
