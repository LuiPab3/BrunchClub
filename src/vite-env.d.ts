/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GH_PAGES_BASE?: string
  // Aquí puedes agregar más variables personalizadas
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
