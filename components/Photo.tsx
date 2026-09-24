"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

// next/image yang menghilang dengan tenang kalau foto gagal dimuat;
// container di belakangnya sudah bergradien gelap, jadi layout tetap utuh.
export default function Photo({ className = "", alt, ...props }: ImageProps) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  return <Image {...props} alt={alt} className={className} onError={() => setFailed(true)} />;
}
