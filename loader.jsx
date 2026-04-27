/* =========================================================
   GORILLA — Loading screen
   Black + neon white with brass signal accent.
   Construction motifs (crane, scaffold, blueprint grid) plus
   an Azerbaijani şəbəkə geometric ornament behind the logo.
   Strings flow from i18n based on user-selected language.
   ========================================================= */
const GorillaLoader = ({ minDuration = 2800 }) => {
  const [phase, setPhase] = React.useState("loading"); // loading -> exiting -> done
  const [progress, setProgress] = React.useState(0);
  const [coords, setCoords] = React.useState({ lat: 40.3777, lng: 49.8920 });

  // Resolve language from localStorage so the loader speaks the user's chosen tongue.
  const lang = React.useMemo(() => {
    try { return localStorage.getItem("gorilla_lang") || "EN"; } catch (e) { return "EN"; }
  }, []);
  const t = (window.I18N && (window.I18N[lang] || window.I18N.EN)) || {};

  React.useEffect(() => {
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const elapsed = now - start;
      const p = Math.min(1, elapsed / minDuration);
      const eased = 1 - Math.pow(1 - p, 2.4);
      setProgress(eased);
      // jitter coordinates a tiny amount so the readout feels alive
      setCoords({
        lat: 40.3777 + (Math.sin(elapsed / 240) * 0.0009),
        lng: 49.8920 + (Math.cos(elapsed / 280) * 0.0009),
      });
      if (p < 1) raf = requestAnimationFrame(tick);
      else {
        setPhase("exiting");
        setTimeout(() => setPhase("done"), 800);
      }
    };
    raf = requestAnimationFrame(tick);
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [minDuration]);

  React.useEffect(() => {
    if (phase === "done") {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
  }, [phase]);

  if (phase === "done") return null;

  const pct = Math.round(progress * 100);

  // Status string in the user's language
  const statusKey =
    pct < 20 ? "ld_status_a" :
    pct < 45 ? "ld_status_b" :
    pct < 70 ? "ld_status_c" :
    pct < 92 ? "ld_status_d" :
               "ld_status_e";

  return (
    <div className={`gorilla-loader ${phase === "exiting" ? "is-exiting" : ""}`} aria-hidden={phase === "exiting"}>
      {/* Background fx layered front-to-back */}
      <div className="gl__grid" />
      <div className="gl__grid gl__grid--minor" />
      <ShebekeOrnament />
      <div className="gl__sweep-line" />
      <div className="gl__scan" />
      <div className="gl__vignette" />

      {/* Crane silhouette right side */}
      <CraneSilhouette progress={progress} />

      {/* Scaffolding silhouette left side */}
      <ScaffoldSilhouette />

      {/* Side survey rails */}
      <div className="gl__rail gl__rail--l" aria-hidden="true">
        <span>N · 40.378°</span>
        <span className="gl__rail-tick" />
        <span>BAKI · AZ</span>
        <span className="gl__rail-tick" />
        <span>SECTOR&nbsp;014</span>
      </div>
      <div className="gl__rail gl__rail--r" aria-hidden="true">
        <span>E · 49.892°</span>
        <span className="gl__rail-tick" />
        <span>EST · 1998</span>
        <span className="gl__rail-tick" />
        <span>ISO · 45001</span>
      </div>

      {/* Top bar */}
      <div className="gl__topbar">
        <span className="gl__tag"><i className="gl__pulse" />{t.ld_site_active || "SITE // ACTIVE"}</span>
        <span className="gl__tag gl__tag--center gl__tag--brand">{t.ld_brand || "GORILLA"}</span>
        <span className="gl__tag">{t.ld_load_est || "LOAD // EST. 1998"}</span>
      </div>

      {/* Center stack */}
      <div className="gl__stack">
        <div className="gl__logoframe">
          <span className="gl__corner gl__corner--tl" />
          <span className="gl__corner gl__corner--tr" />
          <span className="gl__corner gl__corner--bl" />
          <span className="gl__corner gl__corner--br" />
          <span className="gl__stamp gl__stamp--tl">REV · 2026.01</span>
          <span className="gl__stamp gl__stamp--br">AZ&nbsp;·&nbsp;MMC</span>
          <img src="assets/gorilla-logo.png" alt="Gorilla Construction" className="gl__logo" />
          <div className="gl__sweep" style={{ "--p": progress }} />
        </div>

        <div className="gl__sub">
          <span className="gl__bar" />
          <span>{t.ld_tagline || "BUILT TO HOLD · BUILT TO LAST"}</span>
          <span className="gl__bar" />
        </div>

        {/* Progress */}
        <div className="gl__progress">
          <div className="gl__progress-meta">
            <span className="gl__progress-meta-left">{t.ld_rigging || "RIGGING SITE"}</span>
            <span className="gl__pct">
              {String(pct).padStart(3, "0")}<sup>%</sup>
            </span>
          </div>
          <div className="gl__track">
            <div className="gl__fill" style={{ width: `${pct}%` }} />
            <div className="gl__ticks">
              {Array.from({ length: 40 }).map((_, i) => <span key={i} />)}
            </div>
          </div>
          <div className="gl__status-row">
            <div className="gl__status">{t[statusKey] || "▸ loading"}</div>
            <div className="gl__coords">
              {coords.lat.toFixed(4)}° N · {coords.lng.toFixed(4)}° E
            </div>
          </div>
        </div>
      </div>

      {/* Floating info row */}
      <div className="gl__info">
        <span>VÖEN&nbsp;1300xxxxxx</span>
        <span>ISO&nbsp;9001&nbsp;·&nbsp;45001</span>
        <span>AzDTN</span>
      </div>

      {/* Bottom bar */}
      <div className="gl__bottombar">
        <span>{t.ld_safety || "SAFETY CLASS A · LICENSED ERECTORS"}</span>
        <span className="gl__cursor">▌</span>
      </div>
    </div>
  );
};

/* -------- Şəbəkə geometric ornament — Azerbaijani stained-glass motif --------
   Drawn as a single rotating ring of 8-pointed stars and lattice lines.
   Used as a quiet cultural cue behind the logo. */
const ShebekeOrnament = () => {
  const star = (cx, cy, r) => {
    const pts = [];
    for (let i = 0; i < 16; i++) {
      const ang = (i * Math.PI) / 8;
      const rad = i % 2 === 0 ? r : r * 0.45;
      pts.push(`${cx + Math.cos(ang) * rad},${cy + Math.sin(ang) * rad}`);
    }
    return pts.join(" ");
  };
  const ring = (radius, count) =>
    Array.from({ length: count }).map((_, i) => {
      const ang = (i / count) * Math.PI * 2;
      const cx = 400 + Math.cos(ang) * radius;
      const cy = 400 + Math.sin(ang) * radius;
      return <polygon key={`${radius}-${i}`} points={star(cx, cy, 22)} />;
    });

  return (
    <svg className="gl__shebeke" viewBox="0 0 800 800" aria-hidden="true">
      <g fill="none" stroke="rgba(231,181,103,0.6)" strokeWidth="0.8">
        {/* concentric rings of stars */}
        {ring(160, 8)}
        {ring(280, 12)}
        {ring(360, 16)}
        {/* Outer lattice */}
        <circle cx="400" cy="400" r="395" />
        <circle cx="400" cy="400" r="320" />
        <circle cx="400" cy="400" r="200" />
        <circle cx="400" cy="400" r="100" />
        {/* radial spokes */}
        {Array.from({ length: 16 }).map((_, i) => {
          const ang = (i / 16) * Math.PI * 2;
          const x1 = 400 + Math.cos(ang) * 100;
          const y1 = 400 + Math.sin(ang) * 100;
          const x2 = 400 + Math.cos(ang) * 395;
          const y2 = 400 + Math.sin(ang) * 395;
          return <line key={`s${i}`} x1={x1} y1={y1} x2={x2} y2={y2} />;
        })}
        {/* central 8-point star */}
        <polygon points={star(400, 400, 80)} stroke="rgba(231,181,103,0.85)" strokeWidth="1" />
      </g>
    </svg>
  );
};

/* -------- Crane silhouette (animated load on hook) -------- */
const CraneSilhouette = ({ progress }) => {
  // hook lowers as progress grows
  const hookY = 60 + progress * 240;
  return (
    <svg
      className="gl__crane"
      viewBox="0 0 480 800"
      preserveAspectRatio="xMaxYMid meet"
      aria-hidden="true"
    >
      <g stroke="rgba(255,255,255,0.55)" strokeWidth="2" fill="none" strokeLinecap="square">
        {/* Vertical mast */}
        <path d="M340 760 L340 80" />
        <path d="M360 760 L360 80" />
        {/* Mast cross-bracing */}
        {Array.from({ length: 14 }).map((_, i) => {
          const y = 80 + i * 48;
          return (
            <g key={i}>
              <path d={`M340 ${y} L360 ${y}`} />
              <path d={`M340 ${y} L360 ${y + 48}`} />
              <path d={`M360 ${y} L340 ${y + 48}`} />
            </g>
          );
        })}
        {/* Cab */}
        <rect x="320" y="60" width="60" height="40" />
        {/* Counter-jib (left) */}
        <path d="M320 70 L160 70" />
        <path d="M320 90 L180 90" />
        <path d="M180 90 L320 70" />
        <path d="M200 90 L260 70" />
        <path d="M240 90 L300 70" />
        {/* Counterweight */}
        <rect x="170" y="92" width="36" height="22" fill="rgba(255,255,255,0.18)" />
        {/* Apex pulley */}
        <path d="M350 60 L350 30" />
        <circle cx="350" cy="26" r="5" />
        {/* Jib (right) — extends off canvas */}
        <path d="M380 70 L780 70" />
        <path d="M380 90 L780 90" />
        <path d="M380 90 L420 70" />
        <path d="M420 90 L460 70" />
        <path d="M460 90 L500 70" />
        <path d="M500 90 L540 70" />
        <path d="M540 90 L580 70" />
        {/* Jib tie-cables from apex */}
        <path d="M350 30 L460 70" />
        <path d="M350 30 L540 70" />
        {/* Trolley + hook line */}
        <rect x="430" y="92" width="20" height="10" fill="rgba(231,181,103,0.35)" stroke="rgba(231,181,103,0.6)" />
        <path
          d={`M440 102 L440 ${hookY}`}
          stroke="rgba(231,181,103,0.85)"
          strokeWidth="1.5"
        />
        {/* Hook */}
        <g
          transform={`translate(440 ${hookY})`}
          stroke="rgba(231,181,103,0.95)"
          strokeWidth="2"
        >
          <rect x="-8" y="0" width="16" height="6" />
          <path d="M0 6 L0 18 M-6 18 C -6 26, 6 26, 6 18" />
        </g>
        {/* Ground line */}
        <path d="M0 760 L480 760" stroke="rgba(255,255,255,0.3)" />
        {/* Foot anchors */}
        <path d="M328 760 L340 740 L360 740 L372 760" />
      </g>
    </svg>
  );
};

/* -------- Scaffolding silhouette left side -------- */
const ScaffoldSilhouette = () => {
  const cols = 4;
  const rows = 9;
  const colW = 80;
  const rowH = 78;
  return (
    <svg
      className="gl__scaffold"
      viewBox="0 0 360 800"
      preserveAspectRatio="xMinYMid meet"
      aria-hidden="true"
    >
      <g stroke="rgba(255,255,255,0.4)" strokeWidth="1.6" fill="none">
        {/* verticals (standards) */}
        {Array.from({ length: cols + 1 }).map((_, c) => (
          <path key={`v${c}`} d={`M${20 + c * colW} 40 L${20 + c * colW} 760`} />
        ))}
        {/* horizontals (ledgers) */}
        {Array.from({ length: rows + 1 }).map((_, r) => (
          <path key={`h${r}`} d={`M20 ${40 + r * rowH} L${20 + cols * colW} ${40 + r * rowH}`} />
        ))}
        {/* diagonal braces — alternating */}
        {Array.from({ length: rows }).map((_, r) =>
          Array.from({ length: cols }).map((_, c) => {
            const x1 = 20 + c * colW;
            const x2 = x1 + colW;
            const y1 = 40 + r * rowH;
            const y2 = y1 + rowH;
            const flip = (r + c) % 2 === 0;
            return (
              <path
                key={`d${r}-${c}`}
                d={flip ? `M${x1} ${y1} L${x2} ${y2}` : `M${x2} ${y1} L${x1} ${y2}`}
                stroke="rgba(255,255,255,0.18)"
              />
            );
          })
        )}
        {/* node joints */}
        {Array.from({ length: rows + 1 }).map((_, r) =>
          Array.from({ length: cols + 1 }).map((_, c) => (
            <circle
              key={`j${r}-${c}`}
              cx={20 + c * colW}
              cy={40 + r * rowH}
              r="2"
              fill="rgba(231,181,103,0.45)"
              stroke="none"
            />
          ))
        )}
        {/* ground */}
        <path d="M0 760 L360 760" stroke="rgba(255,255,255,0.3)" />
      </g>
    </svg>
  );
};

window.GorillaLoader = GorillaLoader;
