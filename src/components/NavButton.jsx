import { motion } from "motion/react"

export function NavButton({ label, isActive, onClick }) {
  return(
    <motion.button
      layout
      onClick={onClick}
      aria-current={isActive ? 'page' : undefined}
      className="inline-flex items-center justify-center font-mono text-sm uppercase"
    >
      {label}
    </motion.button>
  )
}