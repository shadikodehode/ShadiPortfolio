import { useView } from "../context/ViewContext.jsx"
import { NAV_LINKS } from "../data/navLinks.js"
import { MotionBox } from "./MotionBox.jsx"
import { motion } from "motion/react"

export function NavBar() {
const { currentView, setCurrentView, isLanding } = useView()

  return (
    <MotionBox
      as={motion.nav}
      layout={false}
      key={isLanding ? 'landing-nav' : 'view-nav'}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.08 } }}
      transition={{ duration: 0.15 }}
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