"use client";
import { useMemo, useState } from "react";

type Zone = "idf" | "paris";

export default function LiteMap({
  height = 260,
  zone = "idf", // "idf" = Île-de-France, "paris" = zoom sur Paris
}: {
  height?: number;
  zone?: Zone;
}) {
  const [live, setLive] = useState(false);

  // On construit l'URL selon la zone choisie
  const src = useMemo(() => {
    if (zone === "paris") {
      // Vue centrée sur Paris intra-muros
      return `https://www.google.com/maps?q=${encodeURIComponent(
        "Paris, France"
      )}&z=11&output=embed`;
    }

    // Vue large couvrant toute l’Île-de-France
    return `https://www.google.com/maps?q=${encodeURIComponent(
      "Île-de-France, France"
    )}&z=9&output=embed`;
  }, [zone]);

  return (
    <div className="relative rounded-xl overflow-hidden" style={{ height }}>
      {!live && (
        <button
          type="button"
          aria-label="Afficher la carte"
          onClick={() => setLive(true)}
          className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-2 bg-[rgba(255,255,255,0.9)] hover:bg-[rgba(255,255,255,0.95)] transition text-center"
        >
          <span className="text-sky-700 font-semibold">Afficher la carte</span>
          <span className="text-xs text-sky-600">
            Cliquez pour charger Google Maps
          </span>
        </button>
      )}

      {live ? (
        <iframe
          title={zone === "idf" ? "Carte Île-de-France" : "Carte Paris"}
          src={src}
          width="100%"
          height={height}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full border-0 rounded-xl"
        />
      ) : (
        <img
          src="/map-placeholder.jpg"
          alt={
            zone === "idf"
              ? "Carte Île-de-France (aperçu)"
              : "Carte Paris (aperçu)"
          }
          className="w-full h-full object-cover rounded-xl"
        />
      )}
    </div>
  );
}
