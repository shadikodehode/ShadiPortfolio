import { useEffect, useState } from "react"
import { calculateDirection } from "../utils/directionMath.js"
import { DIRECTION_THRESHOLDS } from "../data/bustDirection.js"

export function useBustDirection(targetRef, mouseX, mouseY) {
  const [direction, setDirection] = useState('default')

  useEffect(() => {
    if (!targetRef.current) return

    const rect = targetRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const dx = mouseX - centerX
    const dy = mouseY - centerY

    const next = calculateDirection(dx, dy, rect, DIRECTION_THRESHOLDS)
    setDirection((prev) => (prev === next ? prev : next))
  }, [mouseX, mouseY, targetRef])

  return direction
}