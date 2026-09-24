const tips = [
  "Nyalakan pertama kali cukup lama (1–2 jam) agar permukaan meleleh merata. Ini mencegah tunneling di pemakaian berikutnya.",
  "Potong sumbu ±5mm sebelum tiap kali dinyalakan.",
  "Jauhkan dari angin langsung supaya nyala tetap rata dan tidak berjelaga.",
  "Jangan dinyalakan lebih dari 4 jam sekali waktu.",
];

export default function CareTips() {
  return (
    <section aria-labelledby="care-title" className="gutter pb-20 sm:pb-28">
      <div className="mx-auto max-w-3xl">
        <h2 id="care-title" className="font-display text-h2 font-medium">
          Cara menikmatinya
        </h2>
        <ul className="mt-8 divide-y divide-cream/10 border-y border-cream/10">
          {tips.map((tip) => (
            <li key={tip} className="flex gap-4 py-5 text-[15px] text-cream-dim sm:text-base">
              <span aria-hidden="true" className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
