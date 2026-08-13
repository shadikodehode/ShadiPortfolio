import { useView } from "../context/ViewContext.jsx"
import { NAV_LINKS } from "../data/navLinks.js"
import { MotionBox } from "./MotionBox.jsx"
import { motion } from "motion/react"

export function NavBar() {
const { currentView, setCurrentView, isLanding } = useView()

  return (
    <MotionBox
      as={motion.nav}
      className={`flex gap-4 ${isLanding ? 'flex-col' : 'flex-row items-start'}`}
    >
      {NAV_LINKS.map(({ key, label }) => (
        <button
          key={key}
          onClick={() => setCurrentView(key)}
          aria-current={currentView === key ? 'page' : undefined}
        >
          {label}
        </button>
      ))}
    </MotionBox>
  )
}