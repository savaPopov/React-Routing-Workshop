import { api } from "./requester";

const BASE_URL = 'http://localhost:3030/data/games'

export const getLatest = async () => {
  const urlSearchParams = new URLSearchParams({
    sortBy: `_createdOn desc`,
    pageSize: 3,
  })

  // const result = await api.get(`${BASE_URL}?${urlSearchParams.toString()}`)
  console.log(`${BASE_URL}?${urlSearchParams.toString()}`)
  console.log(`${BASE_URL}?sortBy=_createdOn%20desc`)
  const result = await api.get(`${BASE_URL}?sortBy=_createdOn%20desc`)

  const games = Object.values(result)

  return games
}

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

export const remove = (gameid) => api.del(`${BASE_URL}/${gameid}`)

export const update = (gameid, gameData) => api.put(`${BASE_URL}/${gameid}`, gameData)
