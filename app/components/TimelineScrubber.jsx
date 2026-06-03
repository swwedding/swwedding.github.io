import { useRef, useMemo, useState, useCallback } from 'react'
import { schedule } from '../data/schedule'

// ── Geometry helpers ─────────────────────────────────────────────
// Each of the 3 day sections occupies 1/3 of the bar.
// Within a day, ticks are padded away from the dividers.
const DAYS = schedule.days.length   // 3
const PAD  = 0.05                   // 5% padding per side within each day section

// Returns position 0–100 (% of full bar width) for a given event
function tickPos(dayIndex, eventIndex, eventCount) {
  const frac = eventCount <= 1 ? 0.5 : eventIndex / (eventCount - 1)
  const withinDay = PAD + frac * (1 - 2 * PAD)
  return ((dayIndex + withinDay) / DAYS) * 100
}

// Look up the bar position for any event object
function eventBarPos(event) {
  for (let d = 0; d < schedule.days.length; d++) {
    const ei = schedule.days[d].events.findIndex(e => e.id === event.id)
    if (ei !== -1) return tickPos(d, ei, schedule.days[d].events.length)
  }
  return null
}

// Find the event whose tick is closest to a 0–1 ratio along the bar
function nearestEvent(ratio) {
  let best = null, bestDist = Infinity
  schedule.days.forEach((day, d) => {
    day.events.forEach((ev, i) => {
      const dist = Math.abs(tickPos(d, i, day.events.length) / 100 - ratio)
      if (dist < bestDist) { bestDist = dist; best = ev }
    })
  })
  return best
}
// ─────────────────────────────────────────────────────────────────

export default function TimelineScrubber({ activeEvent, onEventSelect }) {
  const barRef  = useRef(null)
  const dragging = useRef(false)

  // cursor: the event nearest to the mouse while hovering / dragging
  const [cursor, setCursor] = useState(null)   // { event, pos }

  const activePos = useMemo(
    () => activeEvent ? eventBarPos(activeEvent) : null,
    [activeEvent]
  )

  const clientToRatio = useCallback((clientX) => {
    const r = barRef.current?.getBoundingClientRect()
    if (!r) return 0
    return Math.max(0, Math.min(1, (clientX - r.left) / r.width))
  }, [])

  const updateCursor = useCallback((clientX, commit) => {
    const ev = nearestEvent(clientToRatio(clientX))
    if (!ev) return
    setCursor({ event: ev, pos: eventBarPos(ev) })
    if (commit) onEventSelect(ev)
  }, [clientToRatio, onEventSelect])

  // The tooltip shows the cursor event while hovering/dragging,
  // otherwise falls back to the active event.
  const tooltipTarget = cursor ?? (activeEvent ? { event: activeEvent, pos: activePos } : null)

  return (
    <div className="scrubber" role="region" aria-label="Weekend timeline">
      <div
        ref={barRef}
        className="scrubber__bar"
        onPointerDown={e => {
          e.preventDefault()
          barRef.current.setPointerCapture(e.pointerId)
          dragging.current = true
          updateCursor(e.clientX, true)
        }}
        onPointerMove={e => updateCursor(e.clientX, dragging.current)}
        onPointerUp={()     => { dragging.current = false }}
        onPointerLeave={()  => { if (!dragging.current) setCursor(null) }}
        onPointerCancel={() => { dragging.current = false; setCursor(null) }}
      >
        {/* ── Horizontal track ── */}
        <div className="scrubber__track" aria-hidden="true" />

        {/* ── Day sections ── */}
        {schedule.days.map((day, d) => (
          <div key={day.id} className="scrubber__day">
            {/* Label */}
            <div className="scrubber__day-label" aria-hidden="true">
              <span className="scrubber__day-weekday">{day.label}</span>
              <span className="scrubber__day-date">{day.date}</span>
              {day.subtitle && (
                <span className="scrubber__day-sub">{day.subtitle}</span>
              )}
            </div>

            {/* Event ticks */}
            {day.events.map((ev, i) => {
              const left = (PAD + (i / Math.max(day.events.length - 1, 1)) * (1 - 2 * PAD)) * 100
              return (
                <div
                  key={ev.id}
                  className={[
                    'scrubber__tick',
                    activeEvent?.id  === ev.id ? 'scrubber__tick--active'    : '',
                    cursor?.event.id === ev.id ? 'scrubber__tick--cursor'    : '',
                    ev.highlight               ? 'scrubber__tick--highlight' : '',
                  ].filter(Boolean).join(' ')}
                  style={{ left: `${left}%` }}
                  title={`${ev.time} · ${ev.name}`}
                  aria-hidden="true"
                />
              )
            })}
          </div>
        ))}

        {/* ── Gold playhead — active event ── */}
        {activePos !== null && (
          <div
            className="scrubber__playhead"
            style={{ left: `${activePos}%` }}
            aria-hidden="true"
          />
        )}

        {/* ── Floating tooltip — follows hover / drag ── */}
        {tooltipTarget && (
          <div
            className="scrubber__tooltip"
            style={{ left: `${tooltipTarget.pos}%` }}
            aria-hidden="true"
          >
            <div className="scrubber__tooltip-box">
              <span className="scrubber__tooltip-time">{tooltipTarget.event.time}</span>
              <span className="scrubber__tooltip-name">{tooltipTarget.event.name}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
