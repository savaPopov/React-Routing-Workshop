import { useEffect, useState } from "react"
// import {  } from "../../api/requester"
import { getAll } from "../../api/api"
import CatalogItem from "./catalogItem/CatalogItem"

export default function Catalog() {
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
  // console.log(games)
  return (
    <section id="catalog-page">
      <h1>All Games</h1>
      {/* Display div: with information about every game (if any) */}
      {/* {games.map(()=>)} */}
      {games.map(game => <CatalogItem key={game._id} {...game} />)}
      {/* Display paragraph: If there is no games  */}
      <h3 className="no-articles">No articles yet</h3>
    </section>

  )
}