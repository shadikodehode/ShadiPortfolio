import { motion } from "motion/react"

export function MotionBox({ children, as: Component = motion.div, layout = false, ...props }) {
  return (
    <Component layout={layout} {...props}>
      {children}
    </Component>
  )
}