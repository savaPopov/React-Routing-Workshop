import { useContext } from "react";
import { login, register } from "../api/user-api";
import { AuthContext } from "../contexts/AuthContext";

export function useLogin() {
  const { changeAuthState } = useContext(AuthContext)

  async function loginHandler(email, password) {
    const result = await login(email, password)

    changeAuthState(result)
    console.log('authState -> ' + result)
    console.log(result)
    //TODO update state
    return result
  }

  return loginHandler
}

export function useRegister() {
  const { changeAuthState } = useContext(AuthContext)

  async function registerHandler(email, password) {
    const result = await register(email, password)
    
    changeAuthState(result)
    console.log('authState -> ' + result)
    console.log(result)
    return result
  }

  return registerHandler
}