# Pruebas de API REST - EC3 F2 A10

## Entorno

- Rama: `act-10`
- Dirección pública usada por el Frontend: `/api`
- Resultado de `pnpm lint`: aprobado (0 errores, 0 warnings).
- Resultado de `pnpm build`: aprobado (build de Vite exitoso).
- API local en `localhost:3000`: conectada a MongoDB Atlas y escuchando en puerto 3000.

## Casos ejecutados

| Caso | Método y ruta | Esperado | Obtenido | Resultado |
|---|---|---:|---|---|
| Listar | GET /api/tasks | 200 | 200 con `data` y `meta` paginados | Aprobado |
| Crear | POST /api/tasks | 201 | 201 con la tarea creada | Aprobado |
| Actualizar | PATCH /api/tasks/:id | 200 | 200 con campos actualizados | Aprobado |
| Eliminar | DELETE /api/tasks/:id | 204 | 204 sin cuerpo | Aprobado |
| Inexistente | GET /api/tasks/:id | 404 | 404 `TASK_NOT_FOUND` | Aprobado |
| API detenida | GET /api/tasks | Error de red | Error de conexión y botón Reintentar funcional | Aprobado |

## Evidencias

- Captura de la lista: comprobado con el Backend en ejecución mediante el proxy `/api`.
- Captura de Network: solicitudes Fetch/XHR responden 200 y 201 hacia `http://localhost:3000`.
- Captura del error y reintento: verificación visual completada en `http://127.0.0.1:5173/tasks`; consola sin errores.
- Observaciones: CRUD remoto conectado a MongoDB Atlas y funcionando con Vite dev proxy.
