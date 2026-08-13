import { NAV_LINKS } from "./navLinks.js"

export function NavBar({ currentView, setCurrentView }) {
const isLanding = currentView === 'landing'

  return (
    <nav className={`flex gap-4 ${isLanding ? 'flex-col' : 'flex-row tiems-start'}`}>
      {NAV_LINKS.map(({ key, label }) => (
        <button
          key={key}
          onClick={() => setCurrentView(key)}
          aria-current={currentView === key ? 'page' : undefined}
        >
          {label}
        </button>
      ))}
    </nav>
  )
}