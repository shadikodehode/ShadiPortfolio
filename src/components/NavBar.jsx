import { NAV_LINKS } from "./navLinks.js"

export function NavBar({ currentView, setCurrentView }) {
  return (
    <nav>
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