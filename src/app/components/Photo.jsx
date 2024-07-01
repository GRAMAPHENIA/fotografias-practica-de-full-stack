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
          className="absolute bottom-2.5 right-10 z-10"
        >
          <input type="hidden" name="photoPath" value={src} />
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-slate-600 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
          >
            <Delete />
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
