import { useEffect, useState } from "react"
import { getAll } from "../../api/data-api"
import HomeItem from "./homeItem/HomeItem"

export default function Home() {
  const [games, setGames] = useState([])
  useEffect(() => {
    async function fetchData() {
      const data = await getAll()
      // console.log(data)
      setGames(data.reverse().slice(0,3))
      // setGames(data)
      // console.log(games)
    }
    fetchData()

    // console.log(data)
    // fetchData
  }, [])
  console.log(games)
  return (
    <section id="welcome-world">
      <div className="welcome-message">
        <h2>ALL new games are</h2>
        <h3>Only in GamesPlay</h3>
      </div>
      <img src="./images/four_slider_img01.png" alt="hero" />
      <div id="home-page">
        <h1>Latest Games</h1>
        {/* Display div: with information about every game (if any) */}
        {games.length > 0 ? games.map(game => <HomeItem key={game._id} {...game} />) : <p className="no-articles">No games yet</p>}

        {/* Display paragraph: If there is no games  */}

      </div>
    </section>
  )
}
