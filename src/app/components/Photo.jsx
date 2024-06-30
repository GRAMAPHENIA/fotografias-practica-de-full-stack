"use client";

import { useState } from "react";
import Image from "next/image";
import PhotoModal from "./PhotoModal";

export default function Photo({
  src,
  alt,
  width,
  height,
  photoName,
  isFavorited = false,
}) {
  const [showModal, setShowModal] = useState(false);

  function toggleModal() {
    setShowModal(!showModal);
  }

  return (
    <>
      <div
        style={{ width, height }}
        className="relative w-auto h-auto border-2 border-white/30 border-opacity-80 rounded-lg overflow-hidden cursor-pointer"
        onClick={toggleModal}
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
      {showModal && <PhotoModal src={src} alt={alt} onClose={toggleModal} />}
    </>
  );
}
