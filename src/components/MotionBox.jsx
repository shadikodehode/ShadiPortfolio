import { motion } from "motion/react"

export function MotionBox({ children, as: Component = motion.div, ...props }) {
  return (
    <Component layout {...props}>
      {children}
    </Component>
  )
}