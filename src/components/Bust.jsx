import { useRef } from "react"
import { motion } from "motion/react"
import { useMousePosition } from "../hooks/useMousePosition.js"
import { useBustDirection } from "../hooks/useBustDirection.js"
import { BustSprite } from "./BustSprite.jsx"
import { Eye } from "./Eye.jsx"
import { MotionBox } from "./MotionBox.jsx"
import { DISPLAY_SIZE, EYE_OFFSETS } from "../data/bustDirection.js"

export function Bust() {
  const { x, y } = useMousePosition()
  const bustRef = useRef(null)
  const direction = useBustDirection(bustRef, x, y)
  const offset = EYE_OFFSETS[direction] ?? EYE_OFFSETS.default

  return (
    <MotionBox 
      layout
      transition={{ ease: "easeInOut" }}
      ref={bustRef}
      data-direction={direction}
      style={{ width: DISPLAY_SIZE, height: DISPLAY_SIZE }}
      className="relative flex"
    >
      <BustSprite direction={direction} />
      
      <motion.div 
        animate={{ x: offset.x, y: offset.y }}
        transition={{ duration: 0 }}
        className="absolute inset-0 flex items-center justify-center gap-8"
        >

        <Eye mouseX={x} mouseY={y} />
        <Eye mouseX={x} mouseY={y} />
      </motion.div>
    </MotionBox>
  )
}