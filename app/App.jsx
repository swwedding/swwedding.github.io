import { useState, useCallback } from 'react'
import Hero from './components/Hero'
import TimelineScrubber from './components/TimelineScrubber'
import Timeline from './components/Timeline'
import VenueMap from './components/VenueMap'
import PhotoUpload from './components/PhotoUpload'

export default function App() {
  const [activeEvent, setActiveEvent] = useState(null)

  const handleEventSelect = useCallback((event) => {
    setActiveEvent(event || null)
  }, [])

  const handleMarkerClick = useCallback((locationKey) => {
    // Clicking a map marker highlights it; clicking the same one again deselects
    setActiveEvent(prev =>
      prev?.location === locationKey
        ? null
        : { id: `marker-${locationKey}`, location: locationKey }
    )
  }, [])

  return (
    <div className="app">
      <Hero />

      <TimelineScrubber
        activeEvent={activeEvent}
        onEventSelect={handleEventSelect}
      />

      <main className="guide-section">
        <div className="guide-section__inner">
          {/* Ordering: map-col appears first in DOM for mobile (stacks on top) */}
          <div className="map-col">
            <VenueMap
              activeLocation={activeEvent?.location ?? null}
              onMarkerClick={handleMarkerClick}
            />
          </div>
          <div className="timeline-col">
            <Timeline
              activeEvent={activeEvent}
              onEventSelect={handleEventSelect}
            />
          </div>
        </div>
      </main>

      <PhotoUpload />

      <footer className="footer">
        <p>Bastide d'Astres · Provence · June 29 – July 1, 2026</p>
      </footer>
    </div>
  )
}
