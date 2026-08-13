import { useState } from "react"
import { AnimatePresence, motion } from 'motion/react'
import { NavBar } from "./components/NavBar.jsx"
import { VIEWS } from "./views/index.js"
import { Card } from "./components/Card.jsx"

export function Portfolio() {
  const [currentView, setCurrentView] = useState('landing')
  const ActiveView = VIEWS[currentView]

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Card>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ActiveView />
          </motion.div>
        </AnimatePresence>
        <NavBar currentView={currentView} setCurrentView={setCurrentView} />
      </Card>
    </div>
  )
}