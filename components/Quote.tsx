import { CITATION } from "@/constants/config";

export default function Quote() {
  return (
    <section aria-label="Kutipan studi" className="gutter py-20 sm:py-28">
      <figure className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-gold/20 bg-panel-2 px-6 py-10 sm:px-12 sm:py-14">
        <span
          aria-hidden="true"
          className="font-display pointer-events-none absolute -right-2 -top-10 select-none text-[11rem] leading-none text-gold/10"
        >
          &rdquo;
        </span>
        <span className="inline-block rounded-full border border-gold/40 px-3 py-1 text-[13px] text-gold">
          Ekonomi sirkular
        </span>
        <blockquote className="font-display mt-6 text-[1.45rem] font-light italic leading-snug text-cream sm:text-3xl">
          <p>
            &ldquo;Ampas kopi ... memiliki karakteristik yang memungkinkan untuk diolah menjadi produk bernilai guna dan
            ekonomis.&rdquo;
          </p>
        </blockquote>
        <figcaption className="mt-6 flex gap-3 text-sm text-cream-dim">
          <span aria-hidden="true" className="mt-[0.7em] h-px w-6 shrink-0 bg-ember" />
          <span>
            <cite className="not-italic text-cream">{CITATION.short}</cite>
            <span className="mt-1 block text-xs leading-relaxed text-cream-dim/75">{CITATION.full}</span>
          </span>
        </figcaption>
      </figure>
    </section>
  );
}
