import { useNavigate, useParams } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { useGetOneGame } from "../../hooks/useGames"
import { useEffect, useMemo } from "react"
import { update } from "../../api/data-api"




export default function Edit() {
  const navigate = useNavigate()
  const { gameId } = useParams()
  const [game] = useGetOneGame(gameId)

  const { changeHandler, submitHandler, values } = useForm(game, async (values) => {
    const isConfirmed = confirm('Are you sure you want to update this game?')

    if (isConfirmed) {
      const updatedGame = await update(gameId, values)
      navigate(`/details/${gameId}`)
    }

  }, { reinitializeForm: true })


  console.log(game)
  return (
    <section id="edit-page" className="auth">
      <form id="edit" onSubmit={submitHandler}>
        <div className="container">
          <h1>Edit Game</h1>
          <label htmlFor="leg-title">Legendary title:</label>
          <input onChange={changeHandler} value={values.title} type="text" id="title" name="title" />
          <label htmlFor="category">Category:</label>
          <input onChange={changeHandler} value={values.category} type="text" id="category" name="category" />
          <label htmlFor="levels">MaxLevel:</label>
          <input
            type="number"
            id="maxLevel"
            name="maxLevel"
            min={1}
            onChange={changeHandler}
            value={values.maxLevel}
          />
          <label htmlFor="game-img">Image:</label>
          <input onChange={changeHandler} value={values.imageUrl} type="text" id="imageUrl" name="imageUrl" />
          <label htmlFor="summary">Summary:</label>
          <textarea onChange={changeHandler} value={values.summary} name="summary" id="summary" />
          <input className="btn submit" type="submit" defaultValue="Edit Game" />
        </div>
      </form>
    </section>
  )
}