import { useState, useEffect, useCallback } from 'react'
import { schedule } from '../data/schedule'
import TimelineDay from './TimelineDay'

export default function Timeline({ activeEvent, onEventSelect }) {
  const [activeDay, setActiveDay] = useState(0)

  // Scroll-based event detection: find the event card closest to the
  // vertical centre of the viewport and make it active.
  useEffect(() => {
    const handleScroll = () => {
      const midY = window.innerHeight * 0.45
      let closest = null
      let closestDist = Infinity

      document.querySelectorAll('[data-event-id]').forEach(card => {
        const rect = card.getBoundingClientRect()
        const dist = Math.abs(rect.top + rect.height / 2 - midY)
        if (dist < closestDist) {
          closestDist = dist
          closest = card
        }
      })

      if (closest) {
        const eventId  = closest.dataset.eventId
        const dayIndex = parseInt(closest.dataset.dayIndex, 10)
        const day = schedule.days[dayIndex]
        if (day) {
          const event = day.events.find(e => e.id === eventId)
          if (event && event.id !== activeEvent?.id) {
            onEventSelect(event)
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [activeEvent, onEventSelect])

  // When the active event changes to an event from a different day,
  // switch the visible day panel automatically.
  useEffect(() => {
    if (!activeEvent) return
    const dayIndex = schedule.days.findIndex(d =>
      d.events.some(e => e.id === activeEvent.id)
    )
    if (dayIndex !== -1 && dayIndex !== activeDay) {
      setActiveDay(dayIndex)
    }
  }, [activeEvent]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="timeline">
      {/* Day tabs */}
      <div className="timeline__tabs" role="tablist">
        {schedule.days.map((day, i) => (
          <button
            key={day.id}
            role="tab"
            aria-selected={activeDay === i}
            className={`timeline__tab${activeDay === i ? ' timeline__tab--active' : ''}`}
            onClick={() => setActiveDay(i)}
          >
            <span className="timeline__tab-weekday">{day.label}</span>
            <span className="timeline__tab-date">{day.date}</span>
            {day.subtitle && (
              <span className="timeline__tab-badge">{day.subtitle}</span>
            )}
          </button>
        ))}
      </div>

      {/* Day panels — only the active one is visible */}
      {schedule.days.map((day, dayIndex) => (
        <div
          key={day.id}
          role="tabpanel"
          className={`timeline__day-panel${activeDay === dayIndex ? ' timeline__day-panel--active' : ''}`}
        >
          <TimelineDay
            day={day}
            dayIndex={dayIndex}
            activeEvent={activeEvent}
            onEventSelect={onEventSelect}
          />
        </div>
      ))}
    </div>
  )
}
