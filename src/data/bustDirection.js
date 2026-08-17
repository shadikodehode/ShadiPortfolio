export const DIRECTION_FRAMES = {
  default: 0,
  up: 1,
  left: 2,
  right: 3,
  down: 4, 
}

export const FRAME_WIDTH = 400
export const FRAME_HEIGHT = 400
export const DISPLAY_SIZE = 160

export const DIRECTION_THRESHOLDS = {
  up: 60,
  down: 100,
  left: 120,
  right: 120,
}

export const EYE_OFFSETS = {
  default: { x: 0, y: 0 },
  up: { x: 0, y: -12 },
  down: { x: 0, y: 12 },
  left: { x: -12, y: 0 },
  right: { x: 12, y: 0 },
}