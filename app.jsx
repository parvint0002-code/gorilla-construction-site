/* =========================================================
   App entrypoint — Gorilla Construction
   ========================================================= */
const { useTweaks, TweaksPanel, TweakSection, TweakRadio, TweakToggle, TweakColor, TweakSlider } = window;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "neon",
  "displayFont": "bricolage",
  "density": "comfortable",
  "showStatsAccent": true,
  "heroLayout": "anchored"
}/*EDITMODE-END*/;

const ACCENTS = {
  neon:    { gold: "#FFFFFF", goldDeep: "#C9C9C9" },
  hazard:  { gold: "#F5C518", goldDeep: "#C99A0A" },
  safety:  { gold: "#FF5A1F", goldDeep: "#C2410C" },
  steel:   { gold: "#9CA3AF", goldDeep: "#6B7280" },
};

const DISPLAY_FONTS = {
  bricolage: '"Bricolage Grotesque", serif',
  fraunces:  '"Fraunces", serif',
  ibm:       '"IBM Plex Serif", serif',
};

const App = () => {
  const [tweaks, setTweak] = (useTweaks ? useTweaks(TWEAK_DEFAULTS) : [TWEAK_DEFAULTS, () => {}]);
  const [lang, setLang] = React.useState(() => {
    try { return localStorage.getItem("gorilla_lang") || "AZ"; } catch (e) { return "AZ"; }
  });
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    try { localStorage.setItem("gorilla_lang", lang); } catch (e) {}
    document.documentElement.lang = lang.toLowerCase();
  }, [lang]);

  const i18nValue = React.useMemo(
    () => ({ lang, t: window.I18N[lang] || window.I18N.AZ }),
    [lang]
  );

  // Apply tweaks to CSS vars
  React.useEffect(() => {
    const accent = ACCENTS[tweaks.accent] || ACCENTS.neon;
    document.documentElement.style.setProperty("--gold", accent.gold);
    document.documentElement.style.setProperty("--gold-deep", accent.goldDeep);
    document.documentElement.style.setProperty("--serif", DISPLAY_FONTS[tweaks.displayFont] || DISPLAY_FONTS.bricolage);
    if (tweaks.density === "compact") {
      document.documentElement.style.setProperty("--gutter-x", "32px");
      document.body.style.setProperty("--section-pad", "88px");
    } else {
      document.documentElement.style.removeProperty("--gutter-x");
    }
  }, [tweaks]);

  return (
    <window.LangContext.Provider value={i18nValue}>
      {window.GorillaLoader && <window.GorillaLoader minDuration={2800} />}
      <window.Nav lang={lang} setLang={setLang} onMobileOpen={() => setMenuOpen(true)} />
      <window.MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} lang={lang} setLang={setLang} />
      <main>
        <window.Hero />
        <window.Stats />
        <window.About />
        <window.Services />
        <window.Projects />
        <window.WhyUs />
        <window.Process />
        <window.Contact />
      </main>
      <window.Footer />

      {TweaksPanel && (
        <TweaksPanel title="Tweaks">
          <TweakSection title="Accent">
            <TweakRadio
              label="Color"
              value={tweaks.accent}
              onChange={v => setTweak("accent", v)}
              options={[
                { value: "neon",   label: "Neon White" },
                { value: "hazard", label: "Hazard" },
                { value: "safety", label: "Safety" },
                { value: "steel",  label: "Steel" },
              ]}
            />
          </TweakSection>
          <TweakSection title="Type">
            <TweakRadio
              label="Display font"
              value={tweaks.displayFont}
              onChange={v => setTweak("displayFont", v)}
              options={[
                { value: "bricolage", label: "Bricolage" },
                { value: "fraunces",  label: "Fraunces" },
                { value: "ibm",       label: "IBM Serif" },
              ]}
            />
          </TweakSection>
          <TweakSection title="Layout">
            <TweakRadio
              label="Density"
              value={tweaks.density}
              onChange={v => setTweak("density", v)}
              options={[
                { value: "comfortable", label: "Comfortable" },
                { value: "compact", label: "Compact" },
              ]}
            />
          </TweakSection>
        </TweaksPanel>
      )}
    </window.LangContext.Provider>
  );
};

// Inject the alternative font families lazily
const fontLink = document.createElement("link");
fontLink.rel = "stylesheet";
fontLink.href = "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300..700&family=IBM+Plex+Serif:wght@400;500;600&display=swap";
document.head.appendChild(fontLink);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
