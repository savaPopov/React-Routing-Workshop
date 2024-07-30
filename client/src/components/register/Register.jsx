import { useRegister } from "../../hooks/useAuth"
import { useNavigate } from 'react-router-dom'
import { useForm } from "../../hooks/useForm"
import { useState } from "react"
const initalValues = { email: '', password: '', repass: '' }

export default function Register() {
  const [err, setErr] = useState('')
  const register = useRegister()
  const navigate = useNavigate()

  async function registerHandler({ email, password, repass }) {
    if (password != repass) {
      console.log('err')
      console.log(repass)
      setErr('Password must match Repass')
      return
    }
    try {
      await register(email, password)
      navigate('/ ')
    } catch (err) {
      setErr(err.message)
      console.log(err.message)
    }
  }

  const { values, changeHandler, submitHandler } = useForm(initalValues, registerHandler)

  return (
    <section id="register-page" className="content auth">
      <form id="register" onSubmit={submitHandler}>
        <div className="container">
          <div className="brand-logo" />
          <h1>Register</h1>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="maria@email.com"
            value={values.email}
            onChange={changeHandler}
          />
          <label htmlFor="pass">Password:</label>
          <input
            type="password"
            name="password"
            id="register-password"
            value={values.password}
            onChange={changeHandler}
          />
          <label htmlFor="con-pass">Confirm Password:</label>
          <input
            type="password"
            name="repass"
            id="confirm-password"
            value={values.repass}
            onChange={changeHandler}
          />
          <input className="btn submit" type="submit" defaultValue="Register" />

          {err && (<p>
            <span>{err}</span></p>)}
          <p className="field">
            <span>
              If you already have profile click <a href="#">here</a>
            </span>
          </p>
        </div>
      </form>
    </section>
  )
}