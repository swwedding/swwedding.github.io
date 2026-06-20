// ─────────────────────────────────────────────────────────────────
// TEAMS DATA
// Copy, rosters, and metadata for the guest team pages.
// Sigil image files (e.g. good.png) should be placed in app/public/.
// ─────────────────────────────────────────────────────────────────

export const TEAMS_INTRO =
  'Consider these teams a gentle nudge from us. There\'s no scoreboard, ' +
  'no pressure — just a fun way to meet a few more people across the tables. ' +
  'Find your teammates, then venture out to meet the rest.'

export const TEAMS = [
  {
    id: 'family',
    name: 'Team Family',
    table: 1,
    sigil: null, // no sigil file provided — fallback ornament used
    motto: 'Roots run deep, love runs deeper.',
    standing: 'Tied for first — because family always wins.',
    roster: [
      { name: 'Iraida',  bag: true  },
      { name: 'Willie',  bag: false },
      { name: 'Gulya',   bag: true  },
      { name: 'Alisher', bag: false },
      { name: 'Muslima', bag: false },
      { name: 'Aisha',   bag: true  },
      { name: 'Albert',  bag: false },
    ],
    identity:
      'Every great love story has a family behind it. Team Family carries ' +
      'the warmth, wisdom, and shared history that made this couple who they are. ' +
      'They\'ve watched the journey from the beginning — and they\'re here to ' +
      'celebrate it in full.',
    quote: {
      text: 'The family is one of nature\'s masterpieces.',
      attribution: 'George Santayana',
    },
    starters: [
      'What\'s your favourite memory with the couple?',
      'What\'s the best piece of relationship advice you\'d offer the newlyweds?',
      'Who in the family is most likely to steal the dance floor tonight?',
      'If your family had a motto, what would it be?',
    ],
    challenge:
      'Share a story about one of the newlyweds that nobody else at your table has heard before.',
  },

  {
    id: 'righteous',
    name: 'Team Righteous',
    table: 2,
    sigil: 'righteous.png',
    motto: 'Do right. Be loyal. Show up.',
    standing: 'Honourably positioned — exactly where they deserve to be.',
    roster: [
      { name: 'Alex',   bag: true  },
      { name: 'Sydney', bag: false },
      { name: 'Meera',  bag: true  },
      { name: 'Kelly',  bag: false },
      { name: 'Zaida',  bag: true  },
      { name: 'Madina', bag: true  },
    ],
    identity:
      'Team Righteous lives by a simple code: integrity, loyalty, and showing up ' +
      'for the people who matter. This is the crew you call at midnight — and ' +
      'they actually pick up. Principled and warm in equal measure, and fiercely ' +
      'in the couple\'s corner.',
    quote: {
      text: 'The time is always right to do what is right.',
      attribution: 'Martin Luther King Jr.',
    },
    starters: [
      'What\'s something you deeply believe in?',
      'Who would you most want in your corner in a tough situation?',
      'What does loyalty actually look like to you, day to day?',
      'What\'s something you\'ve stood up for that you\'re quietly proud of?',
    ],
    challenge:
      'Introduce yourself to someone from a different table and find one ' +
      'unexpected thing you have in common.',
  },

  {
    id: 'posh',
    name: 'Team Posh',
    table: 3,
    sigil: 'posh.png',
    motto: 'Arrive elegantly. Leave memorably.',
    standing: 'Effortlessly ahead — as expected.',
    roster: [
      { name: 'Austin', bag: true  },
      { name: 'Will',   bag: true  },
      { name: 'Hannah', bag: false },
      { name: 'Arnav',  bag: true  },
      { name: 'Mahika', bag: true  },
      { name: 'Joe',    bag: true  },
    ],
    identity:
      'Team Posh knows how to dress, how to order, and how to make any room ' +
      'feel like it was built around them. Refined without being stiff, ' +
      'charming without trying too hard — this table has taste and it shows. ' +
      'Provence was practically made for them.',
    quote: {
      text: 'Elegance is not about being noticed, it\'s about being remembered.',
      attribution: 'Giorgio Armani',
    },
    starters: [
      'What\'s the most beautiful place you\'ve ever visited?',
      'If you could plan a dinner party anywhere in the world, where would it be?',
      'What\'s the most indulgent thing you\'ve done that you\'d happily do again?',
      'What\'s one experience you think everyone should have at least once?',
    ],
    challenge:
      'Give someone at a different table a genuinely specific, thoughtful compliment ' +
      'before dessert is served.',
  },

  {
    id: 'good',
    name: 'Team Good',
    table: 4,
    sigil: 'good.png',
    motto: 'Kindness is always the right answer.',
    standing: 'Good by name, good by nature — naturally at the top.',
    roster: [
      { name: 'Defne',   bag: true  },
      { name: 'Filip',   bag: false },
      { name: 'Jim',     bag: true  },
      { name: 'Tina',    bag: false },
      { name: 'Wyo',     bag: true  },
      { name: 'Sadhana', bag: true  },
    ],
    identity:
      'Team Good radiates the kind of quiet warmth that makes everyone feel ' +
      'welcome. First to offer help, last to leave, and the ones you remember ' +
      'long after the music stops. True goodness looks effortless when you\'re ' +
      'just built that way.',
    quote: {
      text: 'No act of kindness, no matter how small, is ever wasted.',
      attribution: 'Aesop',
    },
    starters: [
      'What\'s the kindest thing someone has ever done for you?',
      'Who in your life has quietly made you a better person?',
      'What does a truly good life look like to you?',
      'What\'s a small act of generosity you\'ve witnessed recently that stuck with you?',
    ],
    challenge:
      'Find out something genuinely wonderful about someone you just met tonight.',
  },

  {
    id: 'wild',
    name: 'Team Wild',
    table: 5,
    sigil: 'wild.png',
    motto: 'Say yes first. Figure it out later.',
    standing: 'Currently unstoppable — final results pending.',
    roster: [
      { name: 'Irvin',    bag: false },
      { name: 'Lysa',     bag: false },
      { name: 'Ava',      bag: true  },
      { name: 'Jonathan', bag: false },
      { name: 'Ben',      bag: true  },
      { name: 'Max',      bag: false },
    ],
    identity:
      'Team Wild doesn\'t need a plan — they are the plan. These are the people ' +
      'who suggest the midnight swim, book the last-minute flight, and somehow ' +
      'always make it look easy. If tonight has a highlight reel, they\'re in it.',
    quote: {
      text: 'Not all those who wander are lost.',
      attribution: 'J.R.R. Tolkien',
    },
    starters: [
      'What\'s the most spontaneous thing you\'ve ever done?',
      'Where\'s the next place you\'re absolutely desperate to travel?',
      'What\'s the wildest situation you\'ve managed to talk your way out of?',
      'If you could do anything tomorrow — zero restrictions — what would it be?',
    ],
    challenge:
      'Start a dance with someone at the party you haven\'t spoken to yet.',
  },

  {
    id: 'extravert',
    name: 'Team Extravert',
    table: 6,
    sigil: 'extravert.png',
    motto: 'Every stranger is a friend you haven\'t met yet.',
    standing: 'First in the room — and first in everyone\'s hearts.',
    roster: [
      { name: 'Aonkon',   bag: true  },
      { name: 'Isabella', bag: true  },
      { name: 'Martino',  bag: false },
      { name: 'Axhens',   bag: true  },
      { name: 'Paula',    bag: false },
      { name: 'Tim',      bag: true  },
    ],
    identity:
      'Team Extravert arrived early, already know everyone\'s name, and have ' +
      'somehow been invited to at least two after-parties. These are the ' +
      'connectors — the people who fill a room, start conversations, and keep ' +
      'the energy alive long after midnight. Tonight is their natural habitat.',
    quote: {
      text: 'You can make more friends in two months by being genuinely interested ' +
            'in others than in two years of trying to get others interested in you.',
      attribution: 'Dale Carnegie',
    },
    starters: [
      'How do you know the couple? (A classic opener — they\'ll make it interesting.)',
      'What\'s your superpower in a room full of strangers?',
      'If you had to give an impromptu toast right now, what would you say?',
      'Who\'s the most interesting person you\'ve spoken to tonight, and why?',
    ],
    challenge:
      'Collect at least one new contact from outside your table before the night ends.',
  },
]
