# SISA — Lilin Aromaterapi dari Ampas Kopi

Halaman storytelling untuk QR code di kemasan lilin SISA. Next.js 14 (App Router), TypeScript, Tailwind CSS.

## Jalan lokal

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # cek build produksi
```

Deploy: `vercel deploy` dari root repo (tanpa config tambahan).

## Personalisasi per kafe (query params)

| Param     | Contoh       | Kalau kosong                                         |
|-----------|--------------|------------------------------------------------------|
| `kafe`    | `Kopi Tuku`  | "Kafe mitra lokal"                                   |
| `lokasi`  | `Ubud, Bali` | "Denpasar, Bali"                                     |
| `tanggal` | `2026-09-20` | baris tanggal disembunyikan (juga jika format salah) |

Contoh URL untuk QR (ganti DOMAIN dengan domain Vercel kamu):

```
https://DOMAIN/?kafe=Kopi%20Kenangan%20Senja%20Renon&lokasi=Renon%2C%20Denpasar&tanggal=2026-09-20
https://DOMAIN/?kafe=Ruang%20Seduh&lokasi=Ubud%2C%20Bali&tanggal=2026-08-03
https://DOMAIN/?kafe=Warung%20Kopi%20Pojok
```

## Yang biasa diubah

- Nomor & pesan WhatsApp, teks sitasi, foto: `constants/config.ts`
- Warna (design tokens): `app/globals.css` (`:root`)
- Foto sendiri: taruh di `public/images/` lalu ubah `PHOTOS` di config jadi `"/images/nama.jpg"`
