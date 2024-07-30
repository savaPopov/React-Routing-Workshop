import { useNavigate } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { useCreate } from "../../hooks/useGames"
let initialValues = {
  title: '',
  category: '',
  maxLevel: '',
  imageUrl: '',
  summary: ''
}
export default function Create() {

  const navigate = useNavigate()
  const createGame = useCreate()

  async function createHandler(values) {
    console.log(values)

    try {
      const result =  await createGame(values)
      navigate('/catalog')
    } catch (err) {
      console.err(err.message)
    }
  }

  const { changeHandler, values, submitHandler } = useForm(initialValues, createHandler)

  return (
    <section id="create-page" className="auth">
      <form id="create" onSubmit={submitHandler}>
        <div className="container">
          <h1>Create Game</h1>
          <label htmlFor="leg-title">Legendary title:</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter game title..."
            value={values.title}
            onChange={changeHandler}
          />
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            placeholder="Enter game category..."
            value={values.category}
            onChange={changeHandler}
          />
          <label htmlFor="levels">MaxLevel:</label>
          <input
            type="number"
            id="maxLevel"
            name="maxLevel"
            min={1}
            placeholder={1}
            value={values.maxLevel}
            onChange={changeHandler}
          />
          <label htmlFor="game-img">Image:</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            placeholder="Upload a photo..."
            value={values.imageUrl}
            onChange={changeHandler}
          />
          <label htmlFor="summary">Summary:</label>
          <textarea name="summary" value={values.summary} onChange={changeHandler} id="summary" />
          <input
            className="btn submit"
            type="submit"
            defaultValue="Create Game"
          />
        </div>
      </form>
    </section>
  )
}