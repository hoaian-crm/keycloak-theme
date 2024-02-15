/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly KEYCLOAK_SERVER_URL: string;
  readonly KEYCLOAK_CLIENT_ID: string;
  readonly KEYCLOAK_REALM: string;
  readonly KEYCLOAK_CLIENT_SECRET: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
