// ─────────────────────────────────────────────────────────────────
// WEDDING SCHEDULE DATA
// Edit event times, names, descriptions, and locationLabels here.
// The `location` key must match a key in mapMarkers.js.
// ─────────────────────────────────────────────────────────────────

export const schedule = {
  days: [
    {
      id: 'sunday',
      label: 'Sunday',
      date: 'June 28',
      subtitle: null,
      events: [
        {
          id: 'sun-1',
          time: '6:00 PM',
          name: 'Check-in',
          description: null,
          location: 'parking',
          locationLabel: 'Arrival Area',
          highlight: false,
        },
      ],
    },

    {
      id: 'monday',
      label: 'Monday',
      date: 'June 29',
      subtitle: null,
      events: [
        {
          id: 'mon-1',
          time: '12:00 – 4:00 PM',
          name: 'Pool Party',
          description: null,
          location: 'pool',
          locationLabel: 'Pool Area',
          highlight: false,
        },
        {
          id: 'mon-2',
          time: '7:00 – 8:00 PM',
          name: 'Welcome Drinks',
          description: 'Apéritif on the terrace',
          location: 'cocktail',
          locationLabel: 'Cocktail Terrace',
          highlight: false,
        },
        {
          id: 'mon-3',
          time: '8:00 – 10:00 PM',
          name: 'Dinner',
          description: 'Off site',
          location: 'offsite',
          locationLabel: 'Off Site',
          highlight: false,
        },
      ],
    },

    {
      id: 'tuesday',
      label: 'Tuesday',
      date: 'June 30',
      subtitle: 'Wedding Day',
      events: [
        {
          id: 'tue-1',
          time: '5:30 – 7:00 PM',
          name: 'Wedding Ceremony',
          description: null,
          location: 'lawn',
          locationLabel: 'Ceremony Lawn',
          highlight: true,
        },
        {
          id: 'tue-2',
          time: '7:00 PM – 2:00 AM',
          name: 'Reception',
          description: null,
          location: 'dinner',
          locationLabel: 'Orangerie',
          highlight: false,
        },
      ],
    },

    {
      id: 'wednesday',
      label: 'Wednesday',
      date: 'July 1',
      subtitle: null,
      events: [
        {
          id: 'wed-1',
          time: '12:00 PM',
          name: 'Check Out',
          description: null,
          location: 'parking',
          locationLabel: 'Departure',
          highlight: false,
        },
      ],
    },
  ],
}
