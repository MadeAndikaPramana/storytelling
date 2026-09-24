type Step = { title: string; body: string };

function getSteps(kafe?: string): Step[] {
  return [
    {
      title: "Dikumpulkan dari kafe mitra",
      body: kafe
        ? `Diambil terjadwal dari ${kafe}, selagi ampasnya masih segar.`
        : "Diambil terjadwal dari kafe mitra kami, selagi ampasnya masih segar.",
    },
    {
      title: "Dikeringkan dengan hati‑hati",
      body: "Kadar airnya diturunkan perlahan agar aromanya terjaga dan ampas bebas jamur.",
    },
    {
      title: "Dilebur bersama palm wax",
      body: "Dicampur wax nabati yang biodegradable, dicetak, lalu dipasangi sumbu kapas.",
    },
    {
      title: "Sampai di tanganmu",
      body: "Siap dinyalakan, membawa pulang aroma kafe asalnya.",
    },
  ];
}

export default function Timeline({ kafe }: { kafe?: string }) {
  const steps = getSteps(kafe);

  return (
    <section aria-labelledby="journey-title" className="gutter bg-panel py-20 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <h2 id="journey-title" className="font-display text-h2 font-medium">
          Perjalanan menuju kamarmu
        </h2>

        <ol className="mt-10">
          {steps.map((step, i) => {
            const isLast = i === steps.length - 1;
            return (
              <li key={step.title} className="relative grid grid-cols-[2.75rem_1fr] gap-x-4 sm:grid-cols-[3.25rem_1fr] sm:gap-x-6">
                {/* Garis penghubung ke nomor berikutnya */}
                {!isLast && (
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-[1.375rem] top-12 w-px bg-gradient-to-b from-gold/60 to-gold/15 sm:left-[1.625rem] sm:top-14"
                  />
                )}
                <span
                  className={`font-display grid h-11 w-11 place-items-center rounded-full border text-lg sm:h-[3.25rem] sm:w-[3.25rem] sm:text-xl ${
                    isLast ? "border-ember bg-ember text-cream" : "border-gold/50 bg-bg text-gold"
                  }`}
                >
                  <span className="sr-only">Langkah </span>
                  {i + 1}
                </span>
                <div className={`min-w-0 pt-1.5 sm:pt-2.5 ${isLast ? "" : "pb-10"}`}>
                  <h3 className="font-display text-xl leading-snug text-cream sm:text-2xl">{step.title}</h3>
                  <p className="mt-2 max-w-prose text-[15px] text-cream-dim [overflow-wrap:anywhere] sm:text-base">
                    {step.body}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
