import { useEffect, useRef, useState } from "react";

export function Eye({ mouseX, mouseY }) {
  const eyeRef = useRef(null)
  const [angle, setAngle] = useState(0)

  useEffect(() => {
    if (!eyeRef.current) return

    const rect = eyeRef.current.getBoundingClientRect()
    const eyeCenterX = rect.left + rect.width / 2
    const eyeCenterY = rect.top + rect.height / 2

    setAngle(Math.atan2(mouseY - eyeCenterY, mouseX - eyeCenterX))
  }, [mouseX, mouseY])

  return (
    <div 
      ref={eyeRef}
      className="w-8 h-8 bg-black rounded-full relative" //placeholder
    >
      <div
        className="w-2 h-2 bg-white rounded-full absolute top-1/2 left-1/2" //placeholder
        style={{ 
          transform: `translate(-50%, -50%) rotate(${angle}rad) translateX(8px)` }}
      />
    </div>
  )
}