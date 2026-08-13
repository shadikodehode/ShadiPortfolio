import { AnimatePresence, motion } from "motion/react"
import { NavBar } from "./NavBar.jsx"

export function CardLayout({ currentView, setCurrentView, ActiveView }) {
  const isLanding = currentView === 'landing'

  return (
    <>
      {!isLanding && <NavBar currentView={currentView} setCurrentView={setCurrentView} />}

      <AnimatePresence mode="wait">
        <motion.div
          key={currentView}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
        >
          <AvitveView />
        </motion.div>
      </AnimatePresence>

      {isLanding && <NavBar currentView={currentView} setCurrentView={setCurrentView} />}
    </>
  )
}