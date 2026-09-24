import type { Origin } from "@/lib/origin";

export default function OriginCard({ origin }: { origin: Origin }) {
  return (
    <section
      aria-label="Asal ampas kopi"
      className="relative flex gap-4 rounded-2xl border border-gold/25 bg-panel/85 p-5 backdrop-blur-md sm:p-6"
    >
      <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-gold/40 text-gold">
        {/* Ikon cangkir */}
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <path d="M4 9h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V9Z" />
          <path d="M17 11h1.5a2.5 2.5 0 0 1 0 5H17" />
          <path d="M8 3.5c0 1 1 1.5 1 2.5M12 3.5c0 1 1 1.5 1 2.5" strokeLinecap="round" />
        </svg>
      </span>

      <div className="min-w-0 flex-1">
        <p className="text-sm text-cream-dim">Ampas ini berasal dari</p>
        <p className="font-display mt-1 text-[1.6rem] leading-tight text-cream [overflow-wrap:anywhere] sm:text-3xl">
          {origin.kafe}
        </p>
        <p className="mt-2 text-[15px] text-cream-dim">{origin.lokasi}</p>
        {origin.tanggal && (
          <p className="mt-1 text-sm text-gold/90">
            Dikumpulkan <time dateTime={origin.tanggalIso ?? undefined}>{origin.tanggal}</time>
          </p>
        )}
      </div>
    </section>
  );
}
