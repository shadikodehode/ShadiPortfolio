import { useMousePosition } from "../hooks/useMousePosition";
import { Eye } from "./Eye.jsx"

export function Bust() {
  const { x, y } = useMousePosition()

  return (
    <div className="flex w-40 h-40 bg-gray-300 items-center justify-center gap-8 rounded-full">
      <Eye mouseX={x} mouseY={y} />
      <Eye mouseX={x} mouseY={y} />
    </div>
  )
}