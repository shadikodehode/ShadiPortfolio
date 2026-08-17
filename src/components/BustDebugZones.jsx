import { DIRECTION_THRESHOLDS } from "../data/bustDirection.js"

export function BustDebugZones({ targetRef }) {
  if (!targetRef.current) return null

  const rect = targetRef.current.getBoundingClientRect()
  const { up, down, left, right } = DIRECTION_THRESHOLDS

  const lineStyle = {
    position: 'fixed',
    background: 'red',
    pointerEvents: 'none',
    zIndex: 9999,
  }

  return (
    <>
    {/* UP */}
      <div style={{ ...lineStyle, left: rect.left, top: rect.top- up, width: rect.width, height:2 }}/>

    {/* DOWN */}
      <div style={{ ...lineStyle, left: rect.left, top: rect.bottom + down, width: rect.width, height: 2 }} />

    {/* LEFT */}
    <div style={{ ...lineStyle, left: rect.left - left, top: rect.top, width: 2, height: rect.height }} />

    {/* RIGHT */}
    <div style={{ ...lineStyle, left: rect.right + right, top: rect.top, width: 2, height: rect.height }} />
    </>
  )
}