import { DIRECTION_FRAMES, FRAME_WIDTH, FRAME_HEIGHT, DISPLAY_SIZE } from "../data/bustDirection.js"
import bustSheet from "../assets/Bust_sheet.webp"

const SCALE = DISPLAY_SIZE / FRAME_WIDTH
const SHEET_WIDTH = FRAME_WIDTH * Object.keys(DIRECTION_FRAMES).length

export function BustSprite({ direction }) {
  const frameIndex = DIRECTION_FRAMES[direction] ?? 0

  return (
    <div 
      style={{
        width: DISPLAY_SIZE,
        height: DISPLAY_SIZE,
        backgroundImage: `url(${bustSheet})`,
        backgroundSize: `${SHEET_WIDTH * SCALE}px ${FRAME_HEIGHT * SCALE}px`,
        backgroundPosition: `-${frameIndex * DISPLAY_SIZE}px 0px`,
        backgroundRepeat: 'no-repeat',
        imageRendering: 'pixelated',
      }}
    />
  )
}