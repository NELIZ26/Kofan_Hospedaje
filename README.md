# Proyecto: Vue + Vite (Mejorado con Bootstrap y Tailwind)

## Resumen
Proyecto frontend con Vue 3 + Vite, incluyendo:
- Bootstrap 5 para estructura y componentes.
- Tailwind CSS para utilidades rápidas (config incluida).
- FontAwesome para iconos.
- Pinia para estado (auth simple).
- Axios para consumo de APIs (Reqres + JSONPlaceholder).
- CRUD simulado: listar, crear, editar, eliminar usuarios.

## Ejecutar en desarrollo
1. `npm install`
2. (opcional) `npm run tailwind:build` -> genera `src/styles/tailwind.output.css`
3. `npm run dev`
4. Abrir `http://localhost:5173`

## Credenciales de prueba
- Registro temporal: puedes crear un usuario en /register
- Ejemplo Reqres: eve.holt@reqres.in / cityslicka (si integras reqres)

## Estructura importante
- `src/components/TheNavbar.vue`
- `src/stores/auth.js`
- `src/router/index.js`
- `src/views/Login.vue`, `Register.vue`
- `src/views/users` -> CRUD

