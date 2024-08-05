import { useEffect, useState } from "react"
import { create, getAll, getById } from "../api/data-api"


export function useGetAllGames() {
  const [games, setGames] = useState([])
  useEffect(() => {
    async function fetchData() {
      const data = await getAll()
      // console.log(data)
      setGames(data)
      // console.log(games)
    }
    fetchData()


    // fetchData
  }, [])

  return [games, setGames]
}

export function useGetOneGame(gameId) {
  const [game, setGame] = useState({
    title: '',
    category: '',
    maxLevel: '',
    imageUrl: '',
    summary: ''
  })
  useEffect(() => {
    async function fetchData() {
      const data = await getById(gameId)
      // console.log(data)
      setGame(data)
      // console.log(games)
    }
    fetchData()

  }, [gameId])

  return [game, setGame]
}

export function useCreate() {
  function gameCreateHandler(gameData) {
    create(gameData)

  }

  return gameCreateHandler
}

