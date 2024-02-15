import Keycloak, { LoginBody } from "services/keycloak";
import { create } from "zustand";

type LoginState = {
  loading: boolean;
  login: (data: LoginBody) => Promise<void>
}

export const useLogin = create<LoginState>((_) => ({
  loading: false,
  login: async (data) => {
    const response = await Keycloak.login(data);
    console.log(response.data);
  }
}))
