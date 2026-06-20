import { useState } from 'react'
import { TEAMS, TEAMS_INTRO } from '../data/teams'

// ─────────────────────────────────────────────────────────────────
// SIGIL IMAGES
// Place the sigil PNG files in app/public/:
//   good.png · righteous.png · posh.png · wild.png · extravert.png
//
// Team Family has no sigil — a decorative ornament is shown instead.
// ─────────────────────────────────────────────────────────────────

function GiftIcon() {
  return (
    <svg
      className="team-card__bag-icon"
      width="11"
      height="11"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="20 12 20 22 4 22 4 12" />
      <rect x="2" y="7" width="20" height="5" />
      <line x1="12" y1="22" x2="12" y2="7" />
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
    </svg>
  )
}

function ChevronDown() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

function TeamCard({ team }) {
  const [expanded, setExpanded] = useState(false)

  const sigilSrc = team.sigil
    ? import.meta.env.BASE_URL + team.sigil
    : null

  return (
    <article className={`team-card${expanded ? ' team-card--expanded' : ''}`}>

      {/* ── Sigil ─────────────────────────────────────── */}
      <div className="team-card__sigil-wrap">
        {sigilSrc ? (
          <img
            className="team-card__sigil"
            src={sigilSrc}
            alt={`${team.name} crest`}
          />
        ) : (
          <span className="team-card__sigil-fallback" aria-hidden="true">
            ❦
          </span>
        )}
      </div>

      {/* ── Table badge + name + motto ─────────────────── */}
      <div className="team-card__header">
        <span className="team-card__table-badge">Table {team.table}</span>
        <h3 className="team-card__name">{team.name}</h3>
        <p className="team-card__motto">{team.motto}</p>
      </div>

      {/* ── Standing ──────────────────────────────────── */}
      <p className="team-card__standing">
        <em>{team.standing}</em>
      </p>

      <div className="team-card__rule" aria-hidden="true" />

      {/* ── Roster ────────────────────────────────────── */}
      <div className="team-card__roster-section">
        <span className="team-card__section-label">Roster</span>
        <ul className="team-card__roster">
          {team.roster.map(person => (
            <li key={person.name} className="team-card__roster-item">
              {person.name}
              {person.bag && (
                <span
                  className="team-card__bag"
                  title="Goodie bag included"
                  aria-label="(goodie bag)"
                >
                  <GiftIcon />
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* ── Expand / collapse toggle ───────────────────── */}
      <button
        className="team-card__toggle"
        onClick={() => setExpanded(e => !e)}
        aria-expanded={expanded}
        aria-controls={`team-details-${team.id}`}
      >
        {expanded ? 'Close' : 'Explore your team'}
        <span
          className={`team-card__chevron${expanded ? ' team-card__chevron--up' : ''}`}
        >
          <ChevronDown />
        </span>
      </button>

      {/* ── Expandable details ─────────────────────────── */}
      <div
        id={`team-details-${team.id}`}
        className={`team-card__details${expanded ? ' team-card__details--open' : ''}`}
        aria-hidden={!expanded}
      >
        <div className="team-card__rule" aria-hidden="true" />

        {/* Identity */}
        <p className="team-card__desc">{team.identity}</p>

        {/* Quote */}
        <blockquote className="team-card__quote">
          <p className="team-card__quote-text">"{team.quote.text}"</p>
          <cite className="team-card__quote-cite">— {team.quote.attribution}</cite>
        </blockquote>

        {/* Conversation starters */}
        <div className="team-card__starters">
          <span className="team-card__section-label">Conversation Starters</span>
          <ol className="team-card__starters-list">
            {team.starters.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ol>
        </div>

        {/* Team challenge */}
        <div className="team-card__challenge">
          <span className="team-card__section-label">Team Challenge</span>
          <p>{team.challenge}</p>
        </div>
      </div>

    </article>
  )
}

export default function Teams() {
  return (
    <section className="teams-section">
      <div className="teams-section__inner">

        {/* Section header */}
        <header className="teams-section__header">
          <span className="teams-section__ornament" aria-hidden="true">✦ ✦ ✦</span>
          <h2 className="teams-section__heading">The Teams</h2>
          <div className="teams-section__divider" aria-hidden="true" />
          <p className="teams-section__intro">{TEAMS_INTRO}</p>
        </header>

        {/* Team grid */}
        <div className="teams-grid" role="list">
          {TEAMS.map(team => (
            <div key={team.id} role="listitem">
              <TeamCard team={team} />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
