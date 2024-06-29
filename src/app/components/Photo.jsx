"use client";

import Image from "next/image";

export default function Photo({
  src,
  alt,
  width,
  height,
  photoName,
  isFavorited = false,
}) {
  return (
    <div
      style={{ width, height }}
      className="relative w-auto h-auto border-2 border-white/30 border-opacity-80 rounded-lg overflow-hidden cursor-pointer "
    >
      <Image
        src={src}
        alt={alt}
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority
      />
    </div>
  );
}
