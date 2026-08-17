export function calculateDirection(dx, dy, rect, thresholds) {
  if (Math.abs(dx) > Math.abs(dy)) {
    if (dx > rect.width / 2 + thresholds.right) return 'right'
    if (dx < -(rect.width / 2 + thresholds.left)) return 'left'
  } else {
    if (dy > rect.height / 2 + thresholds.down) return 'down'
    if ( dy < -(rect.height / 2 + thresholds.up)) return 'up'
  }
  return 'default'
}