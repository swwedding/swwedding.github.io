// ─────────────────────────────────────────────────────────────────
// VENUE MAP MARKERS
//
// Each key matches a `location` value used in schedule.js.
//
// x / y are percentage offsets from the top-left corner of the
// map image (0–100).  Adjust them to position markers correctly
// on YOUR map image.
//
// To find the right coordinates:
//   1. Run `npm run dev` and open the guide in your browser.
//   2. Open DevTools, inspect the .venue-map__wrap element.
//   3. Note its pixel dimensions.
//   4. Click on the map where you want a marker and read the
//      cursor position in DevTools or the browser's status bar.
//   5. Divide: x% = (clickX / imgWidth) × 100
//              y% = (clickY / imgHeight) × 100
// ─────────────────────────────────────────────────────────────────

export const mapMarkers = {
  bastide: {
    number: 1,
    label: 'Main Bastide',
    x: 54,
    y: 28,
  },
  pool: {
    number: 2,
    label: 'Pool Area',
    x: 51,
    y: 55,
  },
  lawn: {
    number: 3,
    label: 'Ceremony Lawn',
    x: 22,
    y: 46,
  },
  cocktail: {
    number: 4,
    label: 'Cocktail Terrace',
    x: 60,
    y: 37,
  },
  dinner: {
    number: 5,
    label: 'Dinner & Reception',
    x: 69,
    y: 32,
  },
  parking: {
    number: 6,
    label: 'Parking & Arrival',
    x: 68,
    y: 10,
  },
  offsite: {
    number: 7,
    label: 'Road to Aix-en-Provence',
    x: 82,
    y: 68,
  },
  rooms: {
    number: 8,
    label: 'Guest Rooms',
    x: 71,
    y: 26,
  },
  dance: {
    number: 9,
    label: 'Dance Floor',
    x: 38,
    y: 52,
  },
}
