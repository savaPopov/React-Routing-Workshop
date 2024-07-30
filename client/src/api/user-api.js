import requester, { api } from "./requester";

const BASE_URL = 'http://localhost:3030/users/'

export async function login(email, password) {
  const result = await api.post(`${BASE_URL}/login`, { email, password })

  return result
}