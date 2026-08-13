import { useView } from '../context/ViewContext.jsx'
import { MotionBox } from './MotionBox.jsx'

export function Card({ children }) {
  const { isLanding } = useView()

  return (
    <MotionBox
      layout
      className={`flex items-center justify-center p-8 bg-gray-100 gap-4 ${
        isLanding ? 'flex-row' : 'flex-col'
      }`}
    >
      {children}
    </MotionBox>
  )
}