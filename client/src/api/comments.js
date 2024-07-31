import { api } from "./requester";
const BASE_URL = 'http://localhost:3030/data/comments'



export async function createComment(gameId, text) {

  const result = await api.post(BASE_URL, { gameId, text })

  return result
}

export  function getAllComments(gameId) {
  const params = new URLSearchParams({
    where: `gameId="${gameId}"`
  })
  let result =  api.get(`${BASE_URL}?${params.toString()}`)

  return result
}

