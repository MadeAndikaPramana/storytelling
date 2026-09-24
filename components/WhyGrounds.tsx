import Photo from "./Photo";
import { PHOTOS } from "@/constants/config";

export default function WhyGrounds() {
  return (
    <section aria-labelledby="why-title" className="gutter py-20 sm:py-28">
      <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[1.1fr_1fr] md:items-center md:gap-16">
        <div>
          <h2 id="why-title" className="font-display text-h2 font-medium">
            Kenapa dari ampas kopi?
          </h2>
          <div className="mt-6 space-y-5 text-[15px] text-cream-dim sm:text-base">
            <p>
              Setelah diseduh, ampas kopi masih menyimpan aroma dan senyawa alami yang berharga. Sayangnya, hampir
              semuanya langsung dibuang begitu mesin espresso selesai bekerja.
            </p>
            <p>
              Wangi yang kamu cium saat lilin ini menyala bukan parfum sintetis. Itu kopi yang sama, melepaskan
              aromanya sekali lagi ketika dipanaskan oleh nyala api.
            </p>
          </div>
        </div>

        {/* Bingkai foto dengan offset panel, sengaja asimetris */}
        <figure className="relative mx-2 md:mx-0">
          <div aria-hidden="true" className="absolute -right-3 -top-3 h-full w-full rounded-[2px] border border-gold/30" />
          <div className="grain relative aspect-[4/5] overflow-hidden rounded-[2px] bg-panel-2">
            <Photo
              src={PHOTOS.grounds.src}
              alt={PHOTOS.grounds.alt}
              fill
              sizes="(min-width: 768px) 40vw, 90vw"
              className="photo-grade object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent" />
          </div>
          <figcaption className="font-display mt-4 text-sm italic text-cream-dim">
            Satu cangkir, dua kehidupan.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
