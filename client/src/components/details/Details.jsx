
import { useParams } from "react-router-dom"
import { useGetOneGame } from "../../hooks/useGames"
import { useForm } from "../../hooks/useForm"
import { useAuthContext } from "../../contexts/AuthContext"
import { useCreateComment, useGetAllComments } from "../../hooks/useComments"

const initialValues = {
  comment: ''
}

export default function Details() {

  const { gameId } = useParams()
  const [comments, setComments] = useGetAllComments(gameId)
  const createComment = useCreateComment()
  const [game] = useGetOneGame(gameId)
  const { isAuthenticated } = useAuthContext()



  const { changeHandler, submitHandler, values } = useForm(initialValues, async ({ comment }) => {
    console.log(values)
    // console.log(email)
    try {
      const newComment = await createComment(gameId, comment)
      // console.log('NEW COMMENT')
      // console.log(newComment)
      setComments(oldComments => [...oldComments, newComment])


    } catch (err) {
      //TODO Error handling
      console.log(err.message)
    }

  })

  // console.log(game)
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
            {/* {console.log(comments.map(comment => comment.text))} */}
            {comments.map(comment => (
              <li key={comment._id} className="comment">
                <p>{comment.author.email}: {comment.text}</p>
              </li>
            ))}
            {/* list all comments for current game (If any) */}

          </ul>
          {/* Display paragraph: If there are no games in the database */}
          {comments.length == 0 && <p className="no-comment">No comments.</p>}
        </div>

      </div>

      {isAuthenticated && (<article className="create-comment">
        <label>Add new comment:</label>
        <form className="form" onSubmit={submitHandler}>

          <textarea
            name="comment"
            placeholder="Comment......"
            onChange={changeHandler}
            value={values.comment}
          />

          <input
            className="btn submit"
            type="submit"
            defaultValue="Add Comment"
          />

        </form>
      </article>
      )}





    </section>
  )
}