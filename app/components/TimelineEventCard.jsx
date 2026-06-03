import { useRef } from 'react'

export default function TimelineEventCard({ event, dayIndex, isActive, onSelect }) {
  const cardRef = useRef(null)

  const handleKey = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onSelect(event)
    }
  }

  return (
    <div
      ref={cardRef}
      className={[
        'event-card',
        isActive      ? 'event-card--active'    : '',
        event.highlight ? 'event-card--highlight' : '',
      ].join(' ').trim()}
      data-event-id={event.id}
      data-day-index={dayIndex}
      onClick={() => onSelect(event)}
      onKeyDown={handleKey}
      role="button"
      tabIndex={0}
      aria-pressed={isActive}
    >
      <div className="event-card__time">{event.time}</div>
      <div className="event-card__body">
        <div className="event-card__name">{event.name}</div>
        {event.description && (
          <div className="event-card__desc">{event.description}</div>
        )}
        <div className="event-card__loc">
          <span className="event-card__loc-dot" aria-hidden="true" />
          {event.locationLabel}
        </div>
      </div>
    </div>
  )
}
