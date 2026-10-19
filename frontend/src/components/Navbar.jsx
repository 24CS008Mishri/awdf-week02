import { Link, NavLink } from 'react-router-dom'

const links = [['/', 'Home'], ['/explore', 'Explore'], ['/login', 'Login']]

export default function Navbar() {
  return (
    <header className="nav">
      <Link to="/" className="logo" aria-label="AutoAdvisor home">AutoAdvisor</Link>
      <nav className="nav-pills" aria-label="Main navigation">
        {links.map(([to, label]) => <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => `pill ${isActive ? 'active' : ''}`}>{label}</NavLink>)}
      </nav>
    </header>
  )
}
