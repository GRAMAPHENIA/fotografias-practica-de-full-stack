# PHOTOGRAPHENIERS

## Descripción

_PHOTOGRAPHENIERS_ es una aplicación web desarrollada con Next.js, Tailwind CSS y Supabase que permite a los usuarios agregar y eliminar fotos después de iniciar sesión.

### Características

- **Autenticación de Usuarios:** Los usuarios pueden registrarse e iniciar sesión en la aplicación para gestionar sus fotos.

### Gestión de Fotos

- **Agregar Fotos:** Los usuarios pueden subir fotos a través de un formulario.

- **Eliminar Fotos:** Los usuarios pueden eliminar fotos seleccionadas.

### Interfaz de Usuario

La interfaz está diseñada utilizando Tailwind CSS para una experiencia de usuario moderna y responsiva.

Instalación y Configuración
Para comenzar a utilizar la aplicación, sigue estos pasos:

# Crear un nuevo proyecto de Next.js

```bash
npx create-next-app@latest tu-foto-ptoyecto
```

# Instala Supabase y sus dependencias

```bash
npm i @supabase/supabase-js
```

# Configurar variables de entorno

Crea un archivo `.env.local` en el directorio raíz del proyecto y agrega las siguientes variables de entorno con tus credenciales de **Supabase**:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_KEY=your_supabase_key
```

- _Reemplaza **your_supabase_url** y **your_supabase_key** con las URL y claves de acceso de tu proyecto en Supabase._

# Iniciar la aplicación

Una vez configuradas las variables de entorno, puedes iniciar el servidor de desarrollo:

```bash
npm run dev
```

Abre tu navegador y visita http://localhost:3000 para ver la aplicación en funcionamiento.

# Agregar `Middleware.js`

Crea un archivo llamado middleware.js en el directorio raíz del proyecto y agrega la configuración necesaria para manejar la autenticación y las rutas protegidas.

# Rutas protegidas

Configura las rutas protegidas en tu aplicación Next.js para asegurar que solo los usuarios autenticados puedan acceder a ciertas páginas.

# Supabase: creacion de New Bucket dentro del Storage

- Dentro del `New Bucket` crear un New folder.

# Seleccionar

- En `configuracion/politicas`, creamos nueva politica seleccionamos `For full customization`
  en `Policy name` Colocar nombre. En este caso `Permitir al usuario seleccionar` y clickar en la casilla `select` de `Allowed operation`

  - en `Target roles` seleccionar autenticated
  - pasamos a `Policy definition` donde vamos a colocar lo siguiente:

```bash
((bucket_id = 'photographeniers'::text) AND (auth.uid() IS NOT NULL) AND (name ~~ (('user_uploads/'::text || auth.uid()) || '/%'::text)))
```

# Cargar recurso

- click en `review` y luego en `save policy`

- En `policies/gramapheniers`, creamos nueva politica seleccionamos `For full customization`
  en `Policy name` Colocar nombre. En este caso `Permitir carga de usuario` y clickar en la casilla `select` de `Allowed operation`

- en `Target roles` seleccionar autenticated
- pasamos a `Policy definition` donde vamos a colocar lo siguiente:

```bash
((bucket_id = 'photographeniers'::text) AND (auth.uid() IS NOT NULL) AND (name ~~ (('user_uploads/'::text || auth.uid()) || '/%'::text)))
```

# Borrar recurso

- En `policies/gramapheniers`, creamos nueva politica seleccionamos `For full customization`
  en `Policy name` Colocar nombre. En este caso `Permitir borrar al usuario` y clickar en la casilla `select` de `Allowed operation`

- en `Target roles` seleccionar autenticated
- pasamos a `Policy definition` donde vamos a colocar lo siguiente:

```bash
((bucket_id = 'photographeniers'::text) AND ((name ~~ (('user_uploads/'::text || auth.uid ()) || '/%'::text )) OR (name ~~ (('user_uploads/'::text || auth.uid())  || '/%/%'::text))))
```

# De vuelta en VsCode

- Dentro de la carpeta `components` creamos el archivo `PhotoUploader.jsx` y luego `PhotoGrid.jsx`
- Dentro de la carpeta `utils` creamos `supabaseServerClient.js`
- Dentro de la carpeta `components` creamos `Photo.jsx`
- Dentro de la carpeta `components` creamos `PhotoModal.jsx`

# Material Icons

- Instalación del paquete con `npm install @mui/icons-material`.

# Emotion

- Instalación del paquete con `npm install @emotion/react`
- Instalación del paquete con `npm install @emotion/react`

# Capturas de Pantalla

A continuación se muestran algunas capturas de pantalla de la aplicación:

- **Pantalla de inicio**

  <!-- ![Captura 1](./public/foto-uno.png) -->~

- **Subir Foto**

  <!-- ![Captura 2](./public/foto-dos.png) -->

- **Eliminar Foto**

  <!-- ![Captura 3](./public/foto-tres.png) -->

- **Galería de Fotos**

  <!-- ![Captura 4](./public/foto-cuatro.png) -->

- **Vista Detallada de una Foto**

  <!-- ![Captura 5](./public/foto-cinco.png) -->

# Créditos

- Next.js: [Sitio web oficial](https://nextjs.org/)
- Tailwind CSS: [Sitio web oficial](https://tailwindcss.com/)
- Supabase: [Sitio web oficial](https://supabase.io/)

# Estado del Proyecto

_Este proyecto está actualmente en desarrollo._

# Contacto

Dudas o comentarios, puedes contactarme atravez de mi [Sitio web oficial](https://hexagono.xyz/).
