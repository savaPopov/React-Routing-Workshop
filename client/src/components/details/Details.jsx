import { useEffect, useState } from "react"
import { getById } from "../../api/api"
import { useParams } from "react-router-dom"

export default function Details() {
  const [game, setGame] = useState({})
  const { gameId } = useParams()
  // console.log(gameId)

  useEffect(() => {
    async function fetchData() {
      const data = await getById(gameId)
      // console.log(data)
      setGame(data)
      // console.log(games)
    }
    fetchData()

  }, [])
  console.log(game)
  return (
    <section id="game-details">
      <h1>Game Details</h1>
      <div className="info-section">
        <div className="game-header">
          <img className="game-img" src={game.imageUrl} />
          <h1>{game.title}</h1>
          <span className="levels">MaxLevel: {game.maxLevel}</span>
          <p className="type">{game.category}</p>
        </div>
        <p className="text">
         {game.summary}
        </p>
      </div>
    </section>
  )
}