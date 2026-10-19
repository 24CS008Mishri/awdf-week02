import { Route, Routes } from 'react-router-dom'
import Explore from './pages/Explore.jsx'
import Landing from './pages/Landing.jsx'
import Login from './pages/Login.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<p className="empty">Page not found.</p>} />
    </Routes>
  )
}
