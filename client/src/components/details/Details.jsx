import { useEffect, useState } from "react"
import { getById } from "../../api/api"
import { useParams } from "react-router-dom"
import { createComment } from "../../api/comments"

export default function Details() {
  const [game, setGame] = useState({})
  const { gameId } = useParams()
  const [comment, setComment] = useState('')
  const [username, setUsername] = useState('')
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
  async function submitCommentHandler(e) {
    e.preventDefault()
    console.log('Submitted form')
    console.log(username)
    console.log(comment)
    await createComment(gameId, username, comment)
  }
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


        <div className="details-comments">
          <h2>Comments:</h2>

          <ul>
            {game.comments && Object.values(game.comments).map(comment => (
              <li key={comment._id} className="comment">
                <p>{comment.username}: {comment.text}</p>
              </li>
            ))}
            {/* list all comments for current game (If any) */}

          </ul>
          {/* Display paragraph: If there are no games in the database */}
          <p className="no-comment">No comments.</p>
        </div>

      </div>

      <article className="create-comment">
        <label>Add new comment:</label>
        <form className="form" onSubmit={submitCommentHandler}>

          <input
            type="text"
            placeholder="Pesho"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />

          <textarea
            name="comment"
            placeholder="Comment......"

            onChange={(e) => setComment(e.target.value)}
            value={comment}
          />

          <input
            className="btn submit"
            type="submit"
            defaultValue="Add Comment"
          />

        </form>
      </article>





    </section>
  )
}