export default function StatusBar() {
  return (
    <div className="statusbar">
      <span>9:41</span>
      <div className="statusbar__icons" aria-hidden>
        {/* signal */}
        <svg width="18" height="12" viewBox="0 0 18 12" fill="currentColor">
          <rect x="0" y="8" width="3" height="4" rx="1" />
          <rect x="5" y="5" width="3" height="7" rx="1" />
          <rect x="10" y="2.5" width="3" height="9.5" rx="1" />
          <rect x="15" y="0" width="3" height="12" rx="1" />
        </svg>
        {/* wifi */}
        <svg width="17" height="12" viewBox="0 0 17 12" fill="currentColor">
          <path d="M8.5 1.5C11.6 1.5 14.4 2.7 16.4 4.7L15 6.1C13.3 4.5 11 3.5 8.5 3.5S3.7 4.5 2 6.1L0.6 4.7C2.6 2.7 5.4 1.5 8.5 1.5Z" />
          <path d="M8.5 5.2C10.2 5.2 11.8 5.9 13 7.1L11.6 8.5C10.8 7.7 9.7 7.2 8.5 7.2S6.2 7.7 5.4 8.5L4 7.1C5.2 5.9 6.8 5.2 8.5 5.2Z" />
          <path d="M8.5 8.8C9.2 8.8 9.8 9.1 10.3 9.6L8.5 11.4L6.7 9.6C7.2 9.1 7.8 8.8 8.5 8.8Z" />
        </svg>
        {/* battery */}
        <svg width="26" height="13" viewBox="0 0 26 13" fill="none">
          <rect x="0.5" y="0.5" width="22" height="12" rx="3.5" stroke="currentColor" opacity="0.5" />
          <rect x="2" y="2" width="18" height="9" rx="2" fill="currentColor" />
          <rect x="24" y="4" width="2" height="5" rx="1" fill="currentColor" opacity="0.5" />
        </svg>
      </div>
    </div>
  )
}
