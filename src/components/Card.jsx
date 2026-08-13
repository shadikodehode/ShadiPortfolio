import { motion } from 'motion/react'

export function Card({ children }) {
  return (
    <motion.div
      layout
      className="flex flex-col items-center justify-center p-8 bg-gray-100"
    >
      {children}
    </motion.div>
  )
}