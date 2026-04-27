/* =========================================================
   Placeholder media — striped SVG fillers
   Replace these with real construction photography.
   ========================================================= */

const MediaPlaceholder = ({ caption, tone = "warm", angle = 35, captionPosition = "top-left", children }) => {
  // Tone palettes (ink-leaning, never bright)
  const tones = {
    warm: { a: "#1A1A1A", b: "#222222", c: "#0A0A0A" },
    cool: { a: "#101418", b: "#191D22", c: "#06080A" },
    sand: { a: "#1A1A1A", b: "#252525", c: "#0A0A0A" },
    deep: { a: "#000000", b: "#0E0E0E", c: "#000000" },
  };
  const t = tones[tone] || tones.warm;
  const id = React.useId();
  return (
    <div className="media-ph" style={{ background: t.c }}>
      <svg width="100%" height="100%" preserveAspectRatio="xMidYMid slice" viewBox="0 0 600 400" style={{ position: "absolute", inset: 0 }}>
        <defs>
          <linearGradient id={`g${id}`} x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor={t.b} />
            <stop offset="50%" stopColor={t.a} />
            <stop offset="100%" stopColor={t.c} />
          </linearGradient>
          <pattern id={`p${id}`} width="14" height="14" patternUnits="userSpaceOnUse" patternTransform={`rotate(${angle})`}>
            <rect width="14" height="14" fill={`url(#g${id})`} />
            <line x1="0" y1="0" x2="0" y2="14" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            <line x1="7" y1="0" x2="7" y2="14" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="600" height="400" fill={`url(#p${id})`} />
        {/* subtle architectural lines */}
        <g stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none">
          <line x1="0" y1="280" x2="600" y2="280" />
          <line x1="0" y1="320" x2="600" y2="320" />
          <line x1="180" y1="0" x2="180" y2="400" />
          <line x1="420" y1="0" x2="420" y2="400" />
        </g>
        {/* small focal block */}
        <rect x="240" y="140" width="120" height="120" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.22)" strokeWidth="1" />
      </svg>
      {caption && (
        <span className={`media-ph__caption ${captionPosition === "bottom-right" ? "bottom-right" : ""}`}>
          <span className="dot"></span>{caption}
        </span>
      )}
      {children}
    </div>
  );
};

// Icon set — minimal, mono-line, drawn as simple primitives only
const Icon = ({ name, size = 22 }) => {
  const stroke = "currentColor";
  const sw = 1.4;
  switch (name) {
    case "residential":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw}>
          <path d="M3 11l9-7 9 7" /><path d="M5 10v10h14V10" /><path d="M10 20v-6h4v6" />
        </svg>
      );
    case "commercial":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw}>
          <rect x="4" y="3" width="16" height="18" /><line x1="8" y1="7" x2="8" y2="7.01" /><line x1="12" y1="7" x2="12" y2="7.01" /><line x1="16" y1="7" x2="16" y2="7.01" /><line x1="8" y1="11" x2="8" y2="11.01" /><line x1="12" y1="11" x2="12" y2="11.01" /><line x1="16" y1="11" x2="16" y2="11.01" /><line x1="8" y1="15" x2="8" y2="15.01" /><line x1="12" y1="15" x2="12" y2="15.01" /><line x1="16" y1="15" x2="16" y2="15.01" />
        </svg>
      );
    case "industrial":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw}>
          <path d="M3 21V10l6 4V10l6 4V6l6 0v15z" /><line x1="3" y1="21" x2="21" y2="21" />
        </svg>
      );
    case "renovation":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw}>
          <path d="M14.7 6.3l3 3L8 19l-4 1 1-4z" /><line x1="13" y1="8" x2="16" y2="11" />
        </svg>
      );
    case "infrastructure":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw}>
          <line x1="3" y1="14" x2="21" y2="14" /><line x1="3" y1="18" x2="21" y2="18" /><path d="M6 14V8h12v6" /><line x1="9" y1="14" x2="9" y2="8" /><line x1="15" y1="14" x2="15" y2="8" />
        </svg>
      );
    case "management":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw}>
          <rect x="4" y="5" width="16" height="14" /><line x1="4" y1="9" x2="20" y2="9" /><line x1="9" y1="13" x2="15" y2="13" /><line x1="9" y1="16" x2="13" y2="16" />
        </svg>
      );
    case "arrow":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw}>
          <line x1="4" y1="12" x2="20" y2="12" /><polyline points="14 6 20 12 14 18" />
        </svg>
      );
    case "arrow-up":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw}>
          <line x1="6" y1="18" x2="18" y2="6" /><polyline points="9 6 18 6 18 15" />
        </svg>
      );
    case "phone":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw}>
          <path d="M5 4h4l2 5-3 2a12 12 0 005 5l2-3 5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw}>
          <circle cx="12" cy="12" r="9" /><path d="M8 11c0 3 2 5 5 5l2-1-2-2-1 1c-1 0-2-1-2-2l1-1-2-2z" />
        </svg>
      );
    case "mail":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw}>
          <rect x="3" y="6" width="18" height="12" /><polyline points="3 7 12 13 21 7" />
        </svg>
      );
    case "pin":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw}>
          <path d="M12 21s7-7 7-12a7 7 0 10-14 0c0 5 7 12 7 12z" /><circle cx="12" cy="9" r="2.5" />
        </svg>
      );
    case "check":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw + 0.4}>
          <polyline points="5 13 10 18 19 7" />
        </svg>
      );
    case "chevron-l":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw}>
          <polyline points="14 6 8 12 14 18" />
        </svg>
      );
    case "chevron-r":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw}>
          <polyline points="10 6 16 12 10 18" />
        </svg>
      );
    case "menu":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw}>
          <line x1="4" y1="8" x2="20" y2="8" /><line x1="4" y1="16" x2="20" y2="16" />
        </svg>
      );
    case "close":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw}>
          <line x1="6" y1="6" x2="18" y2="18" /><line x1="18" y1="6" x2="6" y2="18" />
        </svg>
      );
    case "ig":
      return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw}><rect x="4" y="4" width="16" height="16" rx="3" /><circle cx="12" cy="12" r="3.5" /><circle cx="17" cy="7" r="0.6" fill={stroke} /></svg>);
    case "li":
      return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw}><rect x="4" y="4" width="16" height="16" /><line x1="8" y1="11" x2="8" y2="16" /><circle cx="8" cy="8" r="0.7" fill={stroke} /><path d="M12 16v-4a2 2 0 014 0v4" /><line x1="12" y1="11" x2="12" y2="16" /></svg>);
    case "fb":
      return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw}><rect x="4" y="4" width="16" height="16" /><path d="M14 9h-2v9M10 13h5" /></svg>);
    case "consultation":
      return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw}><path d="M4 5h11v9H8l-4 4z" /><path d="M9 9h4M9 11h2" /><circle cx="18" cy="16" r="3" /><path d="M16.5 18.5l-1.2 1.2" /></svg>);
    case "planning":
      return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw}><rect x="4" y="4" width="16" height="16" /><line x1="4" y1="9" x2="20" y2="9" /><line x1="9" y1="9" x2="9" y2="20" /><path d="M12 13h5M12 16h3" /></svg>);
    case "design":
      return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw}><path d="M4 6l16 0M4 6v12l8 2 8-2V6" /><path d="M12 8v12" /><path d="M7 11l3 1M14 11l3-1" /></svg>);
    case "construction":
      return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw}><path d="M4 21V11l8-5 8 5v10" /><rect x="9" y="13" width="6" height="8" /><path d="M2 11h20" /><path d="M5 6l3-2 2 1" /></svg>);
    case "handover":
      return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw}><path d="M3 12l4-4v3h7l-2-2 2-2 6 6-6 6-2-2 2-2H7v3z" /></svg>);
    default:
      return null;
  }
};

window.MediaPlaceholder = MediaPlaceholder;
window.Icon = Icon;
