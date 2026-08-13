import { motion } from 'motion/react'

export function Card({ children }) {
  return (
    <motion.div
      layout
      className="flex flex-row items-center justify-center p-8 bg-gray-100 gap-4"
    >
      {children}
    </motion.div>
  )
}