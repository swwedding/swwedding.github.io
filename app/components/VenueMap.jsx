import { mapMarkers } from '../data/mapMarkers'

// ─────────────────────────────────────────────────────────────────
// VENUE MAP IMAGE
//
// Place your venue map image at:
//   app/public/venue-map.jpg
//
// It will be displayed with a grayscale / warm-sketch filter.
// The image attached to the original brief works great here —
// just save it as:  app/public/venue-map.jpg
// ─────────────────────────────────────────────────────────────────
// ← If you rename the map image, update the filename here too.
const MAP_SRC = import.meta.env.BASE_URL + 'venue-map.png'

export default function VenueMap({ activeLocation, onMarkerClick }) {
  const activeMarker = activeLocation ? mapMarkers[activeLocation] : null

  return (
    <div className={`venue-map${activeLocation ? ' venue-map--has-active' : ''}`}>
      {/* Header */}
      <div className="venue-map__header">
        <span className="venue-map__label">Bastide d'Astres · Venue Map</span>
        {activeMarker && (
          <span className="venue-map__active" key={activeLocation}>
            {activeMarker.label}
          </span>
        )}
      </div>

      {/* Map image + markers */}
      <div className="venue-map__wrap">
        <img
          className="venue-map__img"
          src={MAP_SRC}
          alt="Aerial view of Bastide d'Astres"
          draggable={false}
        />

        <div className="venue-map__markers" aria-label="Venue locations">
          {Object.entries(mapMarkers).map(([key, marker]) => {
            const isActive = activeLocation === key
            return (
              <div
                key={key}
                className={`map-marker${isActive ? ' map-marker--active' : ''}`}
                style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
                onClick={() => onMarkerClick(key)}
                onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onMarkerClick(key) } }}
                role="button"
                tabIndex={0}
                aria-label={marker.label}
                aria-pressed={isActive}
              >
                <div className="map-marker__ring" aria-hidden="true">
                  {marker.number}
                </div>
                <div className="map-marker__tip" role="tooltip">
                  {marker.label}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Legend */}
      <div className="venue-map__legend" aria-label="Map legend">
        {Object.values(mapMarkers).map(marker => (
          <div key={marker.number} className="venue-map__legend-item">
            <span className="venue-map__legend-num" aria-hidden="true">
              {marker.number}
            </span>
            {marker.label}
          </div>
        ))}
      </div>
    </div>
  )
}
