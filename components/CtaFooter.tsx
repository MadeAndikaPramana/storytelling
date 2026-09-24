import { BRAND, CITATION, buildWhatsAppLink } from "@/constants/config";

function Candle() {
  return (
    <svg viewBox="0 0 120 180" className="h-36 w-auto sm:h-44" aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id="halo" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#F2A25C" stopOpacity=".55" />
          <stop offset=".5" stopColor="#C6491B" stopOpacity=".18" />
          <stop offset="1" stopColor="#C6491B" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="flame" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#C6491B" />
          <stop offset=".45" stopColor="#F2A25C" />
          <stop offset="1" stopColor="#F2E6D5" />
        </linearGradient>
        <linearGradient id="jar" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#2E1F17" />
          <stop offset=".5" stopColor="#4A3223" />
          <stop offset="1" stopColor="#241811" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="52" r="52" fill="url(#halo)" />
      <path d="M60 22c9 14 11 22 5 30-3 4-7 4-10 0-6-8-4-17 5-30Z" fill="url(#flame)" />
      <path d="M60 54v12" stroke="#17100D" strokeWidth="2" strokeLinecap="round" />
      <rect x="22" y="66" width="76" height="104" rx="10" fill="url(#jar)" stroke="#C89B5C" strokeOpacity=".4" />
      <ellipse cx="60" cy="70" rx="34" ry="5" fill="#6B4128" />
      <rect x="34" y="104" width="52" height="30" rx="3" fill="none" stroke="#C89B5C" strokeOpacity=".5" />
      <text x="60" y="124" textAnchor="middle" fontSize="11" letterSpacing="3" fill="#C89B5C" fontFamily="Georgia, serif">
        SISA
      </text>
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2l-.4-.2Z" />
    </svg>
  );
}

export default function CtaFooter({ kafe }: { kafe?: string }) {
  return (
    <footer className="grain relative isolate overflow-hidden border-t border-gold/15 bg-panel">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 -z-10 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/3 rounded-full bg-ember/25 blur-[120px]"
      />
      <div className="gutter mx-auto flex max-w-3xl flex-col items-center pb-[calc(var(--safe-bottom)+2.5rem)] pt-20 text-center sm:pt-24">
        <Candle />
        <p className="font-display mt-6 text-5xl font-medium tracking-[0.2em] text-cream sm:text-6xl">{BRAND.name}</p>
        <p className="font-display mt-3 text-xl italic text-gold">{BRAND.tagline}</p>

        <a
          href={buildWhatsAppLink(kafe)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex min-h-[3.5rem] w-full max-w-sm items-center justify-center gap-3 rounded-full bg-ember px-8 text-base font-semibold text-cream shadow-[0_10px_40px_-10px_rgba(198,73,27,.8)] transition-colors hover:bg-[#d4572a] focus-visible:outline-offset-4"
        >
          <WhatsAppIcon />
          Pesan ulang lewat WhatsApp
        </a>

        <p className="mt-14 max-w-md text-xs leading-relaxed text-cream-dim/80">
          {CITATION.credit}
        </p>
      </div>
    </footer>
  );
}
