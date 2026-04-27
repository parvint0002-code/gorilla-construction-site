/* =========================================================
   Sections — Gorilla Construction homepage (i18n-aware)
   ========================================================= */

const { MediaPlaceholder, Icon, useT } = window;

/* -------------------- NAV -------------------- */
const Nav = ({ lang, setLang, onMobileOpen }) => {
  const { t } = useT();
  return (
    <nav className="nav" data-screen-label="Top Navigation">
      <div className="nav__inner">
        <a href="#top" className="brand">
          <div className="brand__mark"><img src="assets/gorilla-logo.png" alt="Gorilla" /></div>
          <div>
            <div className="brand__name">GORILLA</div>
            <div className="brand__sub">{t.brand_sub}</div>
          </div>
        </a>
        <div className="nav__links">
          {window.NAV_LINK_KEYS.map(l => (
            <a key={l.href} href={l.href} className="nav__link">{t[l.labelKey]}</a>
          ))}
        </div>
        <div className="nav__right">
          <div className="lang-switch" role="group" aria-label="Language">
            {["AZ","RU","EN"].map(code => (
              <button key={code} className={lang === code ? "active" : ""} onClick={() => setLang(code)}>{code}</button>
            ))}
          </div>
          <a href="#contact" className="btn btn--primary">
            {t.nav_cta}
            <span className="btn__arrow"><Icon name="arrow" size={14} /></span>
          </a>
          <button className="nav__mobile-toggle" onClick={onMobileOpen} aria-label="Open menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

/* -------------------- HERO -------------------- */
const Hero = () => {
  const { t } = useT();
  return (
    <header className="hero" id="top" data-screen-label="01 Hero">
      <div className="hero__media">
        <MediaPlaceholder caption="Hero — site photo · tower crane at dusk over Baku" tone="deep" angle={28} />
      </div>
      <div className="hero__meta">
        <div><span className="hero__meta-tick" />NİZAMİ BLV · BAKI</div>
        <div>40.3777° N · 49.8920° E</div>
        <div><strong>{t.hero_meta_site}</strong></div>
      </div>
      <div className="hero__inner container">
        <div className="hero__eyebrow">
          <span className="bar"></span>
          {t.hero_eyebrow}
        </div>
        <h1 className="hero__title">
          {t.hero_title_a}<br/>
          <em>{t.hero_title_em}</em> {t.hero_title_b}
        </h1>
        <p className="hero__sub">{t.hero_sub}</p>
        <div className="hero__ctas">
          <a href="#contact" className="btn btn--gold">
            {t.hero_cta_primary}
            <span className="btn__arrow"><Icon name="arrow" size={14} /></span>
          </a>
          <a href="#projects" className="btn btn--ghost-light">{t.hero_cta_secondary}</a>
        </div>
      </div>
      <div className="hero__scroll">{t.hero_scroll}</div>
    </header>
  );
};

/* -------------------- STATS -------------------- */
const Stats = () => {
  const { t } = useT();
  return (
    <section className="stats" data-screen-label="02 Stats">
      <div className="stats__row">
        {window.STAT_KEYS.map(s => (
          <div className="stat" key={s.labelKey}>
            <div className="stat__num">{s.num}<span className="unit">{s.unit}</span></div>
            <div className="stat__label">{t[s.labelKey]}</div>
            <div className="stat__detail">{t[s.detailKey]}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

/* -------------------- ABOUT -------------------- */
const About = () => {
  const { t } = useT();
  return (
    <section className="section" id="about" data-screen-label="03 About">
      <div className="container">
        <div className="about__grid">
          <div>
            <div className="eyebrow"><span className="dot"></span>{t.about_eyebrow}</div>
            <h2 className="h-1" style={{ marginTop: 18, fontSize: "clamp(40px, 4.4vw, 60px)" }}>
              {t.about_title_a} <em style={{color: "var(--gold-deep)", fontStyle: "italic"}}>{t.about_title_em}</em> {t.about_title_b}
            </h2>
          </div>
          <div>
            <p className="lead">{t.about_p1}</p>
            <p className="body" style={{ marginTop: 20 }}>{t.about_p2}</p>
            <div className="about__pillars">
              {window.PILLAR_KEYS.map(p => (
                <div className="pillar" key={p.n}>
                  <div className="pillar__num">{p.n}</div>
                  <div className="pillar__title">{t[p.titleKey]}</div>
                  <div className="pillar__body">{t[p.bodyKey]}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* -------------------- SERVICES -------------------- */
const Services = () => {
  const { t } = useT();
  const [active, setActive] = React.useState(0);
  return (
    <section className="section section--ink services" id="services" data-screen-label="04 Services">
      <div className="container">
        <div className="sec-head">
          <div>
            <div className="eyebrow"><span className="dot"></span>{t.serv_eyebrow}</div>
            <h2 className="sec-head__title" style={{marginTop: 18}}>
              {t.serv_title_a} <em>{t.serv_title_em}</em> {t.serv_title_b}
            </h2>
          </div>
          <div className="sec-head__intro">
            <p className="sec-head__small">{t.serv_intro}</p>
            <a href="#contact" className="btn btn--ghost-light" style={{alignSelf: "flex-start"}}>
              {t.serv_cta}
              <span className="btn__arrow"><Icon name="arrow" size={14} /></span>
            </a>
          </div>
        </div>
        <div className="services__grid">
          {window.SERVICE_KEYS.map((s, i) => (
            <article
              className={`service ${active === i ? "service--active" : ""}`}
              key={s.n}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              tabIndex={0}
            >
              <div className="service__topline">
                <div className="service__index">{s.n}</div>
                <div className="service__arrow"><Icon name="arrow-up" size={14} /></div>
              </div>
              <div className="service__icon"><Icon name={s.icon} size={28} /></div>
              <h3 className="service__title">{t[s.titleKey]}</h3>
              <p className="service__desc">{t[s.descKey]}</p>
              <div className="service__divider" aria-hidden="true"></div>
              <div className="service__tags">
                {s.tagKeys.map(k => <span className="service__tag" key={k}>{t[k]}</span>)}
              </div>
              <div className="service__stat">
                <span className="service__stat-bar" aria-hidden="true"></span>
                <span>{t[s.statKey]}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

/* -------------------- PROJECTS -------------------- */
const Projects = () => {
  const { t } = useT();
  const [filter, setFilter] = React.useState("All");
  const list = filter === "All" ? window.PROJECT_KEYS : window.PROJECT_KEYS.filter(p => p.typeName === filter);
  return (
    <section className="section" id="projects" data-screen-label="05 Projects">
      <div className="container">
        <div className="projects__head">
          <div>
            <div className="eyebrow"><span className="dot"></span>{t.proj_eyebrow}</div>
            <h2 className="sec-head__title" style={{marginTop: 18}}>
              {t.proj_title_a} <em>{t.proj_title_em}</em> {t.proj_title_b}
            </h2>
          </div>
          <div className="filters" role="tablist">
            {window.FILTER_KEYS.map(f => (
              <button key={f.id} className={`filter ${filter === f.id ? "active" : ""}`} onClick={() => setFilter(f.id)}>
                {t[f.labelKey]}
              </button>
            ))}
          </div>
        </div>
        <div className="projects__grid">
          {list.map((p, i) => (
            <article key={p.id} className={`project project--${p.size}`}>
              <div className="project__media">
                <MediaPlaceholder
                  caption={`${t[p.typeKey]} · ${t[p.locKey]}`}
                  tone={p.tone}
                  angle={20 + i * 12}
                />
              </div>
              <div className="project__num">№ {String(p.id).padStart(3, "0")}</div>
              <div className="project__year">{p.year}</div>
              <div className="project__overlay">
                <div className="project__tag">
                  <span>{t[p.typeKey]}</span>
                  <span className="sep"></span>
                  <span className="loc">{t[p.locKey]}</span>
                </div>
                <h3 className="project__title">{t[p.titleKey]}</h3>
                <p className="project__summary">{t[p.summaryKey]}</p>
              </div>
            </article>
          ))}
        </div>
        <div style={{ marginTop: 56, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24 }}>
          <p className="small">{t.proj_count(list.length, window.PROJECT_KEYS.length)}</p>
          <a href="#contact" className="btn btn--ghost">
            {t.proj_cta}
            <span className="btn__arrow"><Icon name="arrow" size={14} /></span>
          </a>
        </div>
      </div>
    </section>
  );
};

/* -------------------- WHY US -------------------- */
const WhyUs = () => {
  const { t } = useT();
  return (
    <section className="section section--paper-2" data-screen-label="06 Why Us">
      <div className="container">
        <div className="sec-head">
          <div>
            <div className="eyebrow"><span className="dot"></span>{t.why_eyebrow}</div>
            <h2 className="sec-head__title" style={{marginTop: 18}}>
              {t.why_title_a} <em>{t.why_title_em}</em> {t.why_title_b}
            </h2>
          </div>
          <p className="sec-head__small">{t.why_intro}</p>
        </div>
        <div className="why__grid">
          {window.WHY_KEYS.map(w => (
            <div className="why__item" key={w.n}>
              <div className="why__num">{w.n}</div>
              <div>
                <div className="eyebrow" style={{display: "inline-flex", alignItems: "center", gap: 8, color: "var(--gold-deep)"}}>
                  <Icon name="check" size={14} />
                </div>
              </div>
              <div className="why__title">{t[w.titleKey]}</div>
              <div className="why__body">{t[w.bodyKey]}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* -------------------- PROCESS -------------------- */
const Process = () => {
  const { t } = useT();
  const [active, setActive] = React.useState(0);
  const steps = window.PROCESS_KEYS;
  const current = steps[active];
  return (
    <section className="section process" id="process" data-screen-label="07 Process">
      <div className="container">
        <div className="sec-head">
          <div>
            <div className="eyebrow"><span className="dot"></span>{t.proc_eyebrow}</div>
            <h2 className="sec-head__title" style={{marginTop: 18}}>
              {t.proc_title_a} <em>{t.proc_title_em}</em> {t.proc_title_b}
            </h2>
          </div>
          <p className="sec-head__small">{t.proc_intro}</p>
        </div>

        <div className="process__rail" role="tablist" aria-label="process stages">
          <div className="process__rail-line" aria-hidden="true">
            <div
              className="process__rail-progress"
              style={{ width: `${(active / (steps.length - 1)) * 100}%` }}
            ></div>
          </div>
          {steps.map((p, i) => (
            <button
              key={p.n}
              role="tab"
              aria-selected={active === i}
              className={`process__node ${active === i ? "active" : ""} ${i < active ? "done" : ""}`}
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
            >
              <span className="process__node-dot">
                <Icon name={p.icon} size={20} />
              </span>
              <span className="process__node-meta">
                <span className="process__node-stage">{t.proc_stage} {p.n}</span>
                <span className="process__node-title">{t[p.titleKey]}</span>
              </span>
            </button>
          ))}
        </div>

        <div className="process__panel" key={current.n}>
          <div className="process__panel-left">
            <div className="process__panel-stage">{t.proc_stage} {current.n} / {String(steps.length).padStart(2,"0")}</div>
            <h3 className="process__panel-title">{t[current.titleKey]}</h3>
            <p className="process__panel-desc">{t[current.descKey]}</p>
            <div className="process__panel-meta">
              <div className="process__meta-block">
                <div className="process__meta-label">{t.proc_dur_label}</div>
                <div className="process__meta-value">{t[current.durationKey]}</div>
              </div>
            </div>
          </div>
          <div className="process__panel-right">
            <div className="process__meta-label">{t.proc_dl_label}</div>
            <ul className="process__deliverables">
              {current.deliverableKeys.map(k => (
                <li key={k} className="process__deliverable">
                  <span className="process__deliverable-mark" aria-hidden="true"></span>
                  <span>{t[k]}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

/* -------------------- TESTIMONIALS -------------------- */
const Testimonials = () => {
  const { t } = useT();
  const [i, setI] = React.useState(0);
  const item = window.TESTIMONIAL_KEYS[i];
  const next = () => setI((i + 1) % window.TESTIMONIAL_KEYS.length);
  const prev = () => setI((i - 1 + window.TESTIMONIAL_KEYS.length) % window.TESTIMONIAL_KEYS.length);
  return (
    <section className="section" data-screen-label="08 Testimonials">
      <div className="container">
        <div className="eyebrow"><span className="dot"></span>{t.test_eyebrow}</div>
        <div className="testimonial">
          <div>
            <MediaPlaceholder caption="Client portrait — site walkthrough" tone="warm" angle={45} />
            <div style={{ height: 320 }}></div>
          </div>
          <div>
            <p className="testimonial__quote">{t[item.quoteKey]}</p>
            <div className="testimonial__attr">
              <span className="testimonial__name">{t[item.nameKey]}</span>
              <span className="testimonial__role">{t[item.roleKey]}</span>
            </div>
            <div className="testimonial__nav">
              <button onClick={prev} aria-label="Previous"><Icon name="chevron-l" size={16} /></button>
              <button onClick={next} aria-label="Next"><Icon name="chevron-r" size={16} /></button>
              <span className="small" style={{marginLeft: 16, alignSelf: "center", fontFamily: "var(--mono)"}}>
                {String(i+1).padStart(2,"0")} / {String(window.TESTIMONIAL_KEYS.length).padStart(2,"0")}
              </span>
            </div>
          </div>
        </div>

        <div className="logos">
          <div className="eyebrow"><span className="dot"></span>{t.test_logos}</div>
          <div className="logos__row">
            {window.PARTNERS.map(name => (
              <div className="logo-slot" key={name}>{name}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* -------------------- CONTACT -------------------- */
const Contact = () => {
  const { t } = useT();
  const [submitted, setSubmitted] = React.useState(false);
  const [form, setForm] = React.useState({ name: "", company: "", email: "", phone: "", scope: "Residential", region: "Baku", message: "" });
  const handle = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));
  const submit = (e) => { e.preventDefault(); setSubmitted(true); };
  return (
    <section className="section contact" id="contact" data-screen-label="09 Contact">
      <div className="container">
        <div className="sec-head">
          <div>
            <div className="eyebrow"><span className="dot"></span>{t.ct_eyebrow}</div>
            <h2 className="sec-head__title" style={{marginTop: 18}}>
              {t.ct_title_a} <em>{t.ct_title_em}</em>{t.ct_title_b ? " " + t.ct_title_b : ""}
            </h2>
          </div>
          <p className="sec-head__small">{t.ct_intro}</p>
        </div>
        <div className="contact__grid">
          <div>
            <div className="contact__methods">
              {window.CONTACT_KEYS.map(c => (
                <div className="contact__method" key={c.labelKey}>
                  <span className="label" style={{display: "inline-flex", alignItems: "center", gap: 8}}>
                    <Icon name={c.icon} size={13} />
                    {t[c.labelKey]}
                  </span>
                  <span className="value">{c.valueKey ? t[c.valueKey] : c.value}</span>
                  <span className="detail">{t[c.detailKey]}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 40, paddingTop: 24, borderTop: "1px solid rgba(244,239,230,0.18)" }}>
              <p className="small" style={{color: "rgba(244,239,230,0.55)", fontFamily: "var(--mono)", letterSpacing: "0.12em", textTransform: "uppercase"}}>{t.sub_label}</p>
              <p style={{marginTop: 10, fontSize: 15, color: "rgba(244,239,230,0.78)", maxWidth: "44ch", lineHeight: 1.6}}>
                {t.sub_body_a}<strong style={{color: "var(--signal)"}}>tender@gorilla.az</strong>{t.sub_body_b}
              </p>
            </div>
          </div>
          <div>
            {submitted ? (
              <div className="form__success">
                <div className="check"><Icon name="check" size={18} /></div>
                <h3 className="h-3" style={{color: "var(--paper)"}}>{t.form_thanks(form.name)}</h3>
                <p style={{color: "rgba(244,239,230,0.7)", fontSize: 14, maxWidth: "36ch"}}>{t.form_thanks_b}</p>
                <button onClick={() => setSubmitted(false)} className="btn btn--ghost-light" style={{marginTop: 8}}>{t.form_again}</button>
              </div>
            ) : (
              <form className="form" onSubmit={submit}>
                <div className="form__row">
                  <div className="field">
                    <label>{t.fld_name}</label>
                    <input value={form.name} onChange={handle("name")} required placeholder={t.ph_name} />
                  </div>
                  <div className="field">
                    <label>{t.fld_company}</label>
                    <input value={form.company} onChange={handle("company")} placeholder={t.ph_company} />
                  </div>
                </div>
                <div className="form__row">
                  <div className="field">
                    <label>{t.fld_email}</label>
                    <input type="email" value={form.email} onChange={handle("email")} required placeholder={t.ph_email} />
                  </div>
                  <div className="field">
                    <label>{t.fld_phone}</label>
                    <input value={form.phone} onChange={handle("phone")} placeholder={t.ph_phone} />
                  </div>
                </div>
                <div className="form__row">
                  <div className="field">
                    <label>{t.fld_scope}</label>
                    <select value={form.scope} onChange={handle("scope")}>
                      <option value="Residential">{t.sc_residential}</option>
                      <option value="Commercial">{t.sc_commercial}</option>
                      <option value="Industrial">{t.sc_industrial}</option>
                      <option value="Renovation">{t.sc_renovation}</option>
                      <option value="Infrastructure">{t.sc_infra}</option>
                      <option value="PM">{t.sc_pm}</option>
                    </select>
                  </div>
                  <div className="field">
                    <label>{t.fld_region}</label>
                    <select value={form.region} onChange={handle("region")}>
                      <option value="Baku">{t.rg_baku}</option>
                      <option value="Absheron">{t.rg_absheron}</option>
                      <option value="Ganja">{t.rg_ganja}</option>
                      <option value="Sheki">{t.rg_sheki}</option>
                      <option value="Lankaran">{t.rg_lankaran}</option>
                      <option value="Other">{t.rg_other}</option>
                    </select>
                  </div>
                </div>
                <div className="field">
                  <label>{t.fld_brief}</label>
                  <textarea value={form.message} onChange={handle("message")} placeholder={t.ph_brief} />
                </div>
                <button type="submit" className="btn btn--gold form__submit">
                  {t.form_submit}
                  <span className="btn__arrow"><Icon name="arrow" size={14} /></span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

/* -------------------- FOOTER -------------------- */
const Footer = () => {
  const { t } = useT();
  return (
    <footer className="footer" data-screen-label="10 Footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="brand">
              <div className="brand__mark brand__mark--lg"><img src="assets/gorilla-logo.png" alt="Gorilla" /></div>
              <div>
                <div className="brand__name">GORILLA</div>
                <div className="brand__sub">{t.brand_sub}</div>
              </div>
            </div>
            <p className="footer__about" style={{marginTop: 24}}>{t.ft_about}</p>
          </div>
          <div className="footer__col">
            <h4>{t.ft_capabilities}</h4>
            <ul>
              <li><a href="#services">{t.s1_t}</a></li>
              <li><a href="#services">{t.s2_t}</a></li>
              <li><a href="#services">{t.s3_t}</a></li>
              <li><a href="#services">{t.s4_t}</a></li>
              <li><a href="#services">{t.s5_t}</a></li>
              <li><a href="#services">{t.ft_pm}</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>{t.ft_company}</h4>
            <ul>
              <li><a href="#about">{t.ft_about_link}</a></li>
              <li><a href="#projects">{t.ft_projects}</a></li>
              <li><a href="#process">{t.ft_process}</a></li>
              <li><a href="#contact">{t.ft_careers}</a></li>
              <li><a href="#contact">{t.ft_tenders}</a></li>
              <li><a href="#contact">{t.ft_press}</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>{t.ft_contact}</h4>
            <ul>
              <li>+994 12 404 18 00</li>
              <li>build@gorilla.az</li>
              <li style={{whiteSpace: "pre-line"}}>{t.ft_address}</li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <div>{t.ft_copyright}</div>
          <div className="footer__socials">
            <a href="#" className="footer__social" aria-label="Instagram"><Icon name="ig" size={16} /></a>
            <a href="#" className="footer__social" aria-label="LinkedIn"><Icon name="li" size={16} /></a>
            <a href="#" className="footer__social" aria-label="Facebook"><Icon name="fb" size={16} /></a>
          </div>
          <div>{t.ft_certs}</div>
        </div>
      </div>
    </footer>
  );
};

/* -------------------- MOBILE MENU -------------------- */
const MobileMenu = ({ open, onClose }) => {
  const { t } = useT();
  return (
    <div className={`mobile-menu ${open ? "open" : ""}`}>
      <button className="close" onClick={onClose} aria-label="Close menu"><Icon name="close" size={18} /></button>
      {window.NAV_LINK_KEYS.map(l => (
        <a key={l.href} href={l.href} onClick={onClose}>{t[l.labelKey]}</a>
      ))}
      <a href="#contact" onClick={onClose} className="btn btn--gold" style={{marginTop: 20, alignSelf: "flex-start"}}>
        {t.nav_cta}
        <span className="btn__arrow"><Icon name="arrow" size={14} /></span>
      </a>
    </div>
  );
};

Object.assign(window, { Nav, Hero, Stats, About, Services, Projects, WhyUs, Process, Testimonials, Contact, Footer, MobileMenu });
