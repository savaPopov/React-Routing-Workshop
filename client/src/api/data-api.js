import { api } from "./requester";

const BASE_URL = 'http://localhost:3030/jsonstore/games'

export async function getAll() {
  const result = await api.get(BASE_URL)

  const games = Object.values(result)

  return games

}

export async function getById(gameid) {
  const result = await api.get(`${BASE_URL}/${gameid}`)

  return result
}


export async function create(gameData) {
  api.post(`http://localhost:3030/data/games`, gameData)
}
