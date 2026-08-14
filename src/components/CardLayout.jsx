import { AnimatePresence, motion } from "motion/react"
import { NavBar } from "./NavBar.jsx"
import { useView } from "../context/ViewContext.jsx"

export function CardLayout({ ActiveView }) {
  const { currentView, isLanding } = useView()

  return (
    <>
      <div className={isLanding ? 'order-2' : 'oder-1'}>
        <NavBar />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
           key={currentView}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.08 } }}
          transition={{ ease: "easeInOut", duration: 0.1 }}
          className={isLanding ? 'order-1' : 'order-2'}
        >
          <ActiveView />
        </motion.div>
      </AnimatePresence>
    </>
  )
}