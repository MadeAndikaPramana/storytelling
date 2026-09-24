// Satu-satunya tempat untuk mengganti nomor & teks WhatsApp.
// Format nomor: kode negara tanpa "+" / "0" di depan, contoh 6281234567890.
export const WHATSAPP_NUMBER = "6281234567890";
export const WHATSAPP_MESSAGE = "Halo SISA, saya ingin pesan ulang lilin aromaterapi ampas kopi.";

export const BRAND = {
  name: "SISA",
  tagline: "Dari Sisa, Jadi Cahaya.",
};

export const FALLBACK = {
  kafe: "Kafe mitra lokal",
  lokasi: "Denpasar, Bali",
};

export const CITATION = {
  short: "Ramadhan dkk. (2025), Bima Abdi: Jurnal Pengabdian Masyarakat",
  credit:
    "Metode produksi terinspirasi dari riset ecopreneurship ampas kopi, Ramadhan dkk. (2025), Bima Abdi: Jurnal Pengabdian Masyarakat, 5(3), 994\u20131004.",
  full:
    "Ramadhan dkk. (2025), “Implementasi Ecopreneurship melalui Pemanfaatan Limbah Ampas Kopi sebagai Produk Aromaterapi Ramah Lingkungan”, Bima Abdi: Jurnal Pengabdian Masyarakat, 5(3), 994–1004.",
};

// Foto stok (Unsplash). Mau pakai foto sendiri? Taruh di /public/images lalu ganti src jadi "/images/nama.jpg".
export const PHOTOS = {
  hero: {
    src: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1600&q=80",
    alt: "Close-up biji kopi sangrai berwarna coklat gelap yang bertumpuk rapat",
  },
  grounds: {
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
    alt: "Secangkir kopi hitam di atas meja kayu dengan cahaya temaram",
  },
  interlude: {
    src: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1600&q=80",
    alt: "Cangkir kopi di kedai yang redup, uapnya tertangkap cahaya hangat",
  },
};

export function buildWhatsAppLink(kafe?: string) {
  const text = kafe ? `${WHATSAPP_MESSAGE} (Batch dari ${kafe})` : WHATSAPP_MESSAGE;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
