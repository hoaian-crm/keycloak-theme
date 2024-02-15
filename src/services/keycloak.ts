import axios, { AxiosResponse } from 'axios';
import { Config } from 'constants/config';

export type LoginBody = {
  username: string;
  password: string;
}

export type LoginResponse = {
  access_token: string;
  refresh_token: string;
}

namespace Keycloak {

  export const core = axios.create({
    baseURL: Config.keycloakServerUrl
  })

  export const login = async (data: LoginBody): Promise<AxiosResponse<LoginResponse>> => {
    return core.post(`/relams/${Config.realm}/protocol/openid-connect/token`, {
      ...data,
      client_id: Config.clientId,
      gran_type: 'password'
    }, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
  }
}

export default Keycloak;
