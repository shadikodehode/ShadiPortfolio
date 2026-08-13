import { AnimatePresence } from "motion/react"
import { NavBar } from "./NavBar.jsx"
import { useView } from "../context/ViewContext.jsx"
import { MotionBox } from "./MotionBox.jsx"

export function CardLayout({ ActiveView }) {
  const { currentView, isLanding } = useView()

  return (
    <>
      {!isLanding && <NavBar />}

      <AnimatePresence mode="wait">
        <MotionBox
          layout
          key={currentView}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.03 } }}
          transition={{ duration: 0.1 }}
        >
          <ActiveView />
        </MotionBox>
      </AnimatePresence>

      {isLanding && <NavBar />}
    </>
  )
}