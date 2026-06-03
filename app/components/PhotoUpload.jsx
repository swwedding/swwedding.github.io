// ─────────────────────────────────────────────────────────────────
// GOOGLE DRIVE UPLOAD LINK
// Replace the placeholder below with your actual Google Drive
// folder link. To get an upload link:
//   1. Create a folder in Google Drive.
//   2. Right-click → Share → change access to "Anyone with the link".
//   3. Set role to "Editor" (so guests can upload files).
//   4. Copy the link and paste it below.
// ─────────────────────────────────────────────────────────────────
const UPLOAD_LINK = 'GOOGLE_DRIVE_UPLOAD_LINK_HERE'

// Upload icon (inline SVG — no extra dependency needed)
function UploadIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" y1="3" x2="12" y2="15" />
    </svg>
  )
}

export default function PhotoUpload() {
  return (
    <section className="photo-upload">
      <div className="photo-upload__inner">
        <span className="photo-upload__ornament">✦ ✦ ✦</span>
        <h2 className="photo-upload__heading">Share Your Photos</h2>
        <p className="photo-upload__text">
          Share your favourite moments from the weekend with us.
        </p>
        <a
          href={UPLOAD_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="photo-upload__btn"
        >
          <UploadIcon />
          Upload Your Photos
        </a>
      </div>
    </section>
  )
}
