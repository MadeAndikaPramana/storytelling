import Photo from "./Photo";
import { PHOTOS } from "@/constants/config";

// Jeda fotografis full-bleed di antara proses dan kutipan studi.
export default function Interlude({ kafe }: { kafe?: string }) {
  return (
    <section aria-label="Suasana kedai kopi" className="grain relative isolate flex min-h-[70svh] items-end overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_60%_40%,#3a2418_0%,#17100D_70%)]">
        <Photo src={PHOTOS.interlude.src} alt={PHOTOS.interlude.alt} fill sizes="100vw" quality={70} className="object-cover" />
        <div className="photo-tint" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-bg/60" />
        <div className="vignette" />
      </div>
      <p className="gutter font-display mx-auto w-full max-w-5xl pb-14 text-[1.7rem] font-light italic leading-snug text-cream [overflow-wrap:anywhere] sm:pb-20 sm:text-4xl">
        Setiap batch menyimpan aroma dari {kafe ?? "kafe asalnya"}.
      </p>
    </section>
  );
}
