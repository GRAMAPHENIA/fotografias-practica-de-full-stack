"use client";

import Image from "next/image";

export default function PhotoModal({ src, alt, onClose }) {
  if (!src) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur flex items-center justify-center z-50">
      <div className="bg-gray-800 p-4 rounded-lg relative border border-gray-600 overflow-hidden mx-auto ">
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-gray-700 text-white font-bold py-2 px-4 rounded hover:bg-gray-600 mb-4 flex justify-end"
          >
            Cerrar
          </button>
        </div>

        <div className="relative w-[600px] h-[600px] rounded-xl overflow-hidden border-2 border-gray-600">
          <Image
            src={src}
            alt={alt}
            fill={true}
            style={{ objectFit: "cover", objectPosition: "center" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            // className="rounded-xl object-cover shadow-lg overflow-hidden"
          />
        </div>
      </div>
    </div>
  );
}
