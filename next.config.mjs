/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Foto stok dimuat dari Unsplash; ganti/tambah host di sini kalau pakai foto sendiri dari CDN lain.
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};

export default nextConfig;
