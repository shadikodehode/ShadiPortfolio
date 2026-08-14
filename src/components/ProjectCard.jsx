import { motion } from "motion/react"
import { useState } from "react"

export function ProjectCard({ title, description }) {
  const [isFlipped, setIsFlipped]  = useState(false)

  return (
    <motion.div
      layout
      onClick={() => setIsFlipped(!isFlipped)}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      animate={{ rotateY: isFlipped ? 180 : 0 }}
      transition={{ ease: 'easeInOut', duration: 0.4 }}
      style={{ transformStyle:'preserve-3d' }}
      className="w-32 h-32 bg-gray-300 flex items-center justify-center cursor-pointer"
    >
      <div style={{ backfaceVisibility: 'hidden' }}>
        <h3 className="font-mono text-sm uppercase">{title}</h3>
      </div>
    </motion.div>
  )
}