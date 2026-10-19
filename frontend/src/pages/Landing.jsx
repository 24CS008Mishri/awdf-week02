import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'

export default function Landing() {
  return (
    <div className="shell land">
      <Navbar />
      <main>
        <h1>Find the right car at the right price.</h1>
        <p className="lead">Explore cars, practice navigation, and learn controlled forms in React.</p>
        <Link to="/explore" className="pill dark">Explore Cars</Link>
      </main>
    </div>
  )
}
