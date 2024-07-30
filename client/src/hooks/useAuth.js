import { login } from "../api/user-api";

export function useLogin() {

  async function loginHandler(email, password) {
    try {
      const result = await login(email, password)


      console.log(result)
      //TODO update state
    } catch (err) {

    }

  }

  return loginHandler
} 