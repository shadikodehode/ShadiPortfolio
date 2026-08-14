import { useView } from "../context/ViewContext.jsx"
import { NAV_LINKS } from "../data/navLinks.js"
import { NavButton } from "./NavButton.jsx"

export function NavBar() {
const { currentView, setCurrentView, isLanding } = useView()

  return (
    <nav className={`flex gap-4 ${isLanding ? 'flex-col' :'flex-row items-start'}`}>
      {NAV_LINKS.map(({ key, label }) => (
        <NavButton
          key={key}
          label={label}
          isActive={currentView === key}
          onClick={() => setCurrentView(key)}
        />
      ))}
    </nav>
  )
}