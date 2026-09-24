import Hero from "@/components/Hero";
import WhyGrounds from "@/components/WhyGrounds";
import Timeline from "@/components/Timeline";
import Interlude from "@/components/Interlude";
import Quote from "@/components/Quote";
import CareTips from "@/components/CareTips";
import CtaFooter from "@/components/CtaFooter";
import { parseOrigin, type SearchParams } from "@/lib/origin";

// searchParams prop membuat halaman dirender dinamis per request,
// jadi tiap QR (param berbeda) langsung mendapat HTML yang sudah terpersonalisasi.
export default function Page({ searchParams }: { searchParams: SearchParams }) {
  const origin = parseOrigin(searchParams);

  return (
    <>
      <main>
        <Hero origin={origin} />
        <WhyGrounds />
        <Timeline kafe={origin.isFallbackKafe ? undefined : origin.kafe} />
        <Interlude kafe={origin.isFallbackKafe ? undefined : origin.kafe} />
        <Quote />
        <CareTips />
      </main>
      <CtaFooter kafe={origin.isFallbackKafe ? undefined : origin.kafe} />
    </>
  );
}
