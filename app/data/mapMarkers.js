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
    label: 'Main Bastide / House',
    description: 'Dining, kitchen, indoor spaces',
    x: 53,
    y: 25,
  },
  pool: {
    number: 2,
    label: 'Pool Area',
    description: 'Pool party and relaxation',
    x: 47,
    y: 43,
  },
  lawn: {
    number: 3,
    label: 'Wedding Ceremony Area',
    description: 'Lakeside ceremony area',
    x: 31,
    y: 58,
  },
  cocktail: {
    number: 4,
    label: 'Cocktail / Apéritif Area',
    description: 'Terrace and outdoor lounge',
    x: 50,
    y: 36,
  },
  dinner: {
    number: 5,
    label: 'Orangerie',
    description: 'Dinner and dance party',
    x: 56,
    y: 22,
  },
  parking: {
    number: 6,
    label: 'Parking / Arrival Area',
    description: 'Guest arrival and parking',
    x: 24,
    y: 41,
  },
  offsite: {
    number: 7,
    label: 'Road to Aix-en-Provence',
    description: 'Departure route for offsite dinner',
    x: 88,
    y: 22,
  },
  rooms: {
    number: 8,
    label: 'Gîte & Chalet',
    description: 'Guest rooms and check-out area',
    x: 69,
    y: 42,
  },
  dance: {
    number: 9,
    label: 'Dance Floor',
    description: 'Evening dancing',
    x: 56,
    y: 22,
  },
}
