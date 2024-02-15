import Keycloak, { KeycloakConfig } from 'keycloak-js';

const config: KeycloakConfig = {
  url: 'https://oauth.relationc.com',
  realm: 'development',
  clientId: 'development',
}

const keycloack = new Keycloak(config);

export default keycloack;

