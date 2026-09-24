import CoffeeBeans from "./CoffeeBeans";
import OriginCard from "./OriginCard";
import Photo from "./Photo";
import { BRAND, PHOTOS } from "@/constants/config";
import type { Origin } from "@/lib/origin";

export default function Hero({ origin }: { origin: Origin }) {
  return (
    <header className="grain relative isolate flex min-h-[100svh] flex-col overflow-hidden">
      {/* Lapisan foto + grading gelap */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_70%_20%,#3a2418_0%,#17100D_65%)]">
        <Photo
          src={PHOTOS.hero.src}
          alt={PHOTOS.hero.alt}
          fill
          priority
          sizes="100vw"
          className="hero-photo object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/80 to-bg/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg/70 to-transparent" />
        <div className="hero-glow absolute -bottom-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-ember/30 blur-[110px]" />
      </div>

      <CoffeeBeans className="reveal pointer-events-none absolute right-[-1rem] top-[calc(var(--safe-top)+3.75rem)] w-40 opacity-90 drop-shadow-[0_20px_30px_rgba(0,0,0,.6)] sm:right-4 sm:w-56 lg:right-[8%] lg:w-72" />

      <div className="gutter mx-auto w-full max-w-5xl pt-[calc(var(--safe-top)+1.25rem)]">
        <p className="font-display reveal text-xl tracking-[0.3em] text-cream" style={{ ["--i" as string]: 0 }}>
          {BRAND.name}
        </p>
      </div>

      <div className="gutter mx-auto mt-auto w-full max-w-5xl pb-[calc(var(--safe-bottom)+2.5rem)] pt-40 sm:pb-16">
        <p className="font-display reveal text-lg italic text-gold" style={{ ["--i" as string]: 1 }}>
          Kisah di balik nyala ini
        </p>
        <h1
          className="font-display reveal mt-3 max-w-[14ch] text-display font-medium text-cream"
          style={{ ["--i" as string]: 2 }}
        >
          Dari sisa kopi, jadi cahaya.
        </h1>
        <p className="reveal mt-5 max-w-prose text-[15px] text-cream-dim sm:text-base" style={{ ["--i" as string]: 3 }}>
          Lilin di tanganmu dulunya ampas kopi, sisa seduhan yang biasanya berakhir di tempat sampah sebuah kafe.
        </p>

        <div className="reveal mt-8 max-w-md" style={{ ["--i" as string]: 4 }}>
          <OriginCard origin={origin} />
        </div>
      </div>
    </header>
  );
}
