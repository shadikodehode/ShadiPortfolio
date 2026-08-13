import { AnimatePresence } from "motion/react"
import { NavBar } from "./NavBar.jsx"
import { MotionBox } from "./MotionBox.jsx"
import { useView } from "../context/ViewContext.jsx"

export function CardLayout({ ActiveView }) {
  const { currentView, isLanding } = useView()

  return (
    <>
      <AnimatePresence mode="wait">
        {!isLanding && <NavBar key="nav" />}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <MotionBox
          key={currentView}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.08 } }}
          transition={{ duration: 0.1 }}
        >
          <ActiveView />
        </MotionBox>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {isLanding && <NavBar key="nav" />}
      </AnimatePresence>
    </>
  )
}