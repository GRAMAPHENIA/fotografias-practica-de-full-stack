"use client";

import { useState } from "react";
import Image from "next/image";
import PhotoModal from "./PhotoModal";

import { Delete } from "@mui/icons-material";

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
        <form
          action="deletePhoto"
          className="absolute bottom-2.5 right-2.5 z-10 "
        >
          <input type="hidden" name="photoPath" value={src} />
          <button
            type="submit"
            className="text-white/9i0 bg-transparent hover:text-red-400/80 focus:ring-slate-500"
          >
            <Delete
              className="w-8 h-8"
            />
          </button>
        </form>

        <Image
          src={src}
          alt={alt}
          // width={width}
          // height={height}
          fill={true}
          style={{ objectFit: "cover", objectPosition: "center" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={true}
          onClick={() => setShowModal(true)}
        />
      </div>
      {showModal && <PhotoModal src={src} alt={alt} onClose={toggleModal} />}
    </>
  );
}
