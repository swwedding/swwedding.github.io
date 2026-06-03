import TimelineEventCard from './TimelineEventCard'

export default function TimelineDay({ day, dayIndex, activeEvent, onEventSelect }) {
  return (
    <div className="timeline-day">
      <div className="timeline-day__heading">
        <div className="timeline-day__name">
          {day.label}, {day.date}
        </div>
        {day.subtitle && (
          <div className="timeline-day__badge">{day.subtitle}</div>
        )}
      </div>

      <div className="timeline-day__events">
        {day.events.map(event => (
          <TimelineEventCard
            key={event.id}
            event={event}
            dayIndex={dayIndex}
            isActive={activeEvent?.id === event.id}
            onSelect={onEventSelect}
          />
        ))}
      </div>
    </div>
  )
}
