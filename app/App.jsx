// ─── MAINTENANCE MODE ────────────────────────────────────────────
// To restore the guide, delete the Maintenance component and
// uncomment the imports + original App below.
// ─────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      background: "linear-gradient(rgba(247,241,235,0.84),rgba(247,241,235,0.84)), url('./roses-background.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      fontFamily: "Georgia, 'Times New Roman', serif",
      color: '#3a312c',
    }}>
      <div style={{
        width: 'min(100%, 430px)',
        textAlign: 'center',
        padding: '3rem 2.25rem',
        background: 'rgba(255,253,249,0.94)',
        border: '1px solid #eadfd6',
        boxShadow: '0 22px 70px rgba(58,49,44,0.12)',
      }}>
        <div style={{ fontSize: '0.7rem', letterSpacing: '0.45rem', color: '#d6a83f', marginBottom: '1.4rem' }}>
          ✦ ✦ ✦
        </div>
        <h1 style={{ fontSize: 'clamp(2rem,6vw,4rem)', fontWeight: 'normal', letterSpacing: '0.15em', marginBottom: '0.5rem' }}>
          S <span style={{ color: '#d6a83f', fontStyle: 'italic' }}>&amp;</span> W
        </h1>
        <div style={{ width: 80, height: 1, background: '#d6a83f', margin: '1.5rem auto' }} />
        <p style={{ fontSize: '1.02rem', letterSpacing: '0.08em', lineHeight: 1.7, color: '#8a7a72', marginBottom: '0.35rem' }}>
          We'll be right back.
        </p>
        <p style={{ fontSize: '1.02rem', letterSpacing: '0.08em', lineHeight: 1.7, color: '#8a7a72' }}>
          This page is briefly down for maintenance.
        </p>
      </div>
    </div>
  )
}

// ─── ORIGINAL APP (restore when ready) ───────────────────────────
// import { useState, useCallback } from 'react'
// import Hero from './components/Hero'
// import TimelineScrubber from './components/TimelineScrubber'
// import Timeline from './components/Timeline'
// import VenueMap from './components/VenueMap'
// import PhotoUpload from './components/PhotoUpload'
//
// export default function App() {
//   const [activeEvent, setActiveEvent] = useState(null)
//
//   const handleEventSelect = useCallback((event) => {
//     setActiveEvent(event || null)
//   }, [])
//
//   const handleMarkerClick = useCallback((locationKey) => {
//     setActiveEvent(prev =>
//       prev?.location === locationKey
//         ? null
//         : { id: `marker-${locationKey}`, location: locationKey }
//     )
//   }, [])
//
//   return (
//     <div className="app">
//       <Hero />
//       <TimelineScrubber activeEvent={activeEvent} onEventSelect={handleEventSelect} />
//       <main className="guide-section">
//         <div className="guide-section__inner">
//           <div className="map-col">
//             <VenueMap activeLocation={activeEvent?.location ?? null} onMarkerClick={handleMarkerClick} />
//           </div>
//           <div className="timeline-col">
//             <Timeline activeEvent={activeEvent} onEventSelect={handleEventSelect} />
//           </div>
//         </div>
//       </main>
//       <PhotoUpload />
//       <footer className="footer">
//         <p>Bastide d'Astres · Provence · June 29 – July 1, 2026</p>
//       </footer>
//     </div>
//   )
// }
