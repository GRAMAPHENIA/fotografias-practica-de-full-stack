"use client";

import { useState } from "react";
import { supabase } from "../utils/supabaseClient";

function PhotoUploader() {
  const [uploading, setUploading] = useState(false);

  async function handleFileUpload(event) {
    try {
      setUploading(true);

      const file = event.target.files[0];
      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        throw new Error("Usuario no autenticado para subir fotos");
      }

      const filePath = `user_uploads/${user.id}/${fileName}`;
      const { error } = await supabase.storage
        .from("photographeniers") // Nombre del bucket correcto
        .upload(filePath, file);

      if (error) {
        throw error;
      }

      // TODO: Actualizar la interfaz de usuario con la nueva foto.
    } catch (err) {
      console.error(err);
    } finally {
      setUploading(false);
    }
  }

  return (
    <label
      htmlFor="photo-upload"
      className="cursor-pointer bg-gray-700 text-white font-bold py-2 px-4 rounded hover:bg-gray-600"
    >
      {uploading ? "Subiendo..." : "Subir foto"}
      <input
        type="file"
        id="photo-upload"
        onChange={handleFileUpload}
        disabled={uploading}
        className="hidden"
      />
    </label>
  );
}

export default PhotoUploader;
