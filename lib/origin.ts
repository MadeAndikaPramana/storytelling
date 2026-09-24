import { FALLBACK } from "@/constants/config";

export type SearchParams = Record<string, string | string[] | undefined>;

export type Origin = {
  kafe: string;
  lokasi: string;
  isFallbackKafe: boolean;
  tanggal: string | null; // sudah diformat, null = sembunyikan
  tanggalIso: string | null;
};

const MAX_LEN = 60;

function read(params: SearchParams, key: string) {
  const raw = params[key];
  const value = Array.isArray(raw) ? raw[0] : raw;
  // Trim, rapikan spasi ganda, dan batasi panjang supaya layout tidak jebol oleh URL iseng.
  return (value ?? "").replace(/\s+/g, " ").trim().slice(0, MAX_LEN);
}

// Hanya terima format YYYY-MM-DD yang benar-benar valid (tolak 2026-02-31 dsb).
function formatTanggal(value: string) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!match) return null;
  const [, y, m, d] = match.map(Number);
  const date = new Date(Date.UTC(y, m - 1, d));
  if (date.getUTCFullYear() !== y || date.getUTCMonth() !== m - 1 || date.getUTCDate() !== d) return null;

  // timeZone UTC mencegah tanggal bergeser sehari di server/browser dengan zona waktu berbeda.
  return new Intl.DateTimeFormat("id-ID", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(date);
}

export function parseOrigin(params: SearchParams): Origin {
  const kafe = read(params, "kafe");
  const lokasi = read(params, "lokasi");
  const tanggalRaw = read(params, "tanggal");
  const tanggal = tanggalRaw ? formatTanggal(tanggalRaw) : null;

  return {
    kafe: kafe || FALLBACK.kafe,
    isFallbackKafe: !kafe,
    lokasi: lokasi || FALLBACK.lokasi,
    tanggal,
    tanggalIso: tanggal ? tanggalRaw : null,
  };
}
