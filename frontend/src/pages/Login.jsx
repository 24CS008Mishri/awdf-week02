import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function submit(event) {
    event.preventDefault()
    setSubmitted(true)
    navigate('/')
  }

  return (
    <div className="shell">
      <Navbar />
      <main>
        <h1>Login</h1>
        <form className="card" onSubmit={submit}>
          <label>Email<input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required /></label>
          <label>Password<input type="password" value={password} onChange={(event) => setPassword(event.target.value)} required /></label>
          <button className="pill dark" type="submit">Login</button>
          {submitted && <p className="muted">Form submitted for {email}.</p>}
        </form>
      </main>
    </div>
  )
}
