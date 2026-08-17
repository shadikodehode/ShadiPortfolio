import { useEffect, useState } from "react"
import { useMousePosition } from "./useMousePosition.js"

const THRESHOLD = 60 

export function useBustDirection(targetRef) {
  const { x, y } = useMousePosition()
  const [direction, setDirection] = useState('default')

  useEffect(() => {
    if (!targetRef.current) return

    const rect = targetRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const dx = x - centerX
    const dy = y - centerY

    let next = 'default'

    if (Math.abs(dx) > Math.abs(dy)) {
      if (dx > rect.width / 2 + THRESHOLD) next = 'right'
      else if (dx < -(rect.width / 2 + THRESHOLD)) next = 'left'
    } else {
      if (dy > rect.height / 2 + THRESHOLD) next = 'down'
      else if (dy < -(rect.height / 2 + THRESHOLD)) next = 'up'
    }

    setDirection((prev) => (prev === next ? prev : next))
  }, [x, y, targetRef])

  return direction
}