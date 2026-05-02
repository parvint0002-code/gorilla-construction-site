/* =========================================================
   GORILLA — minimal logo loading screen
   ========================================================= */

const GorillaLoader = ({ minDuration = 2800 }) => {
  const [phase, setPhase] = React.useState("loading");

  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const exitTimer = window.setTimeout(() => {
      setPhase("exiting");
    }, minDuration);
    const doneTimer = window.setTimeout(() => {
      setPhase("done");
    }, minDuration + 760);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(doneTimer);
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

  return (
    <div className={`gorilla-loader ${phase === "exiting" ? "is-exiting" : ""}`} aria-hidden={phase === "exiting"}>
      <div className="gl__logo-halo">
        <img src="assets/gorilla-logo.png" alt="Gorilla" className="gl__logo" />
      </div>
    </div>
  );
};

window.GorillaLoader = GorillaLoader;
