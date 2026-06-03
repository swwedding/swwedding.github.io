import { useState, useEffect } from 'react'
import { schedule } from '../data/schedule'
import TimelineDay from './TimelineDay'

export default function Timeline({ activeEvent, onEventSelect }) {
  const [activeDay, setActiveDay] = useState(0)

  // When the active event changes to an event from a different day
  // (e.g. via the scrubber), switch the visible day panel.
  useEffect(() => {
    if (!activeEvent) return
    const dayIndex = schedule.days.findIndex(d =>
      d.events.some(e => e.id === activeEvent.id)
    )
    if (dayIndex !== -1) setActiveDay(dayIndex)
  }, [activeEvent])

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
