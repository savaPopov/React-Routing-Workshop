import { api } from "./requester";
const BASE_URL = 'http://localhost:3030/jsonstore/games'
export async function createComment(gameId, username, text) {

  const result = await api.post(`${BASE_URL}/${gameId}/comments`, { username, text })


}

export async function getAllComments(gameId) {
  let result = await api.get(`${BASE_URL}/${gameId}/comments`)

  const comments = Object.values(result)
  return comments
}

