const DEFAULT_API_URL = '/api';

const configuredApiUrl = import.meta.env.VITE_API_URL?.trim();

if (import.meta.env.DEV && !configuredApiUrl) {
  console.warn(
    '[config] No se encontró VITE_API_URL; se usará el valor por defecto "/api". ' +
      'Copia .env.example a .env.local para personalizarlo.',
  );
}

export const API_URL = (configuredApiUrl || DEFAULT_API_URL).replace(/\/$/, '');
