const educationItems = [
  {
    period: "2021 — 2024",
    title: "Cycle ingénieur",
    place: "ENSAM Casablanca",
    detail: "Formation d'ingénieur généraliste, bases en analyse de données et statistiques.",
    type: "formation",
  },
  {
    period: "2024 — 2026",
    title: "Double diplôme d'ingénieur, Data Science",
    place: "EILCO (École d'Ingénieurs du Littoral - Côte d'Opale)",
    detail: "Spécialisation en science des données, BI et machine learning.",
    type: "formation",
  },
  {
    period: "Mars 2026",
    title: "Data Analyst — Stage",
    place: "Monoprix, Marketing CRM (Clichy)",
    detail: "MicroStrategy, Snowflake, SQL — reporting et analyse client CRM.",
    type: "stage",
    current: true,
  },
];

function IconCap() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M12 3L2 8l10 5 8-4.2V16h1.5V8L12 3z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M6 10.5v4c0 1.7 2.7 3 6 3s6-1.3 6-3v-4" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  );
}

function IconBriefcase() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="7.5" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M8 7.5V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M3 12h18" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export default function Education() {
  return (
    <section className="section container" id="education">
      <p className="eyebrow">Formation</p>
      <h2 className="section-title">Mon parcours académique</h2>
      <div className="timeline-h">
        <div className="timeline-h-track" />
        <div className="timeline-h-progress" />
        <div className="timeline-h-items">
          {educationItems.map((item) => (
            <div className="timeline-h-item" key={item.title}>
              <span className={`timeline-h-dot ${item.current ? "timeline-h-dot-current" : ""}`} />
              <span className="timeline-h-stem" />
              <span className="timeline-h-period">
                {item.period}
                {item.current && <span className="timeline-h-badge">en cours</span>}
              </span>
              <div className="timeline-h-card">
                <span className="timeline-h-icon">
                  {item.type === "formation" ? <IconCap /> : <IconBriefcase />}
                </span>
                <h3 className="timeline-h-title">{item.title}</h3>
                <p className="timeline-h-place">{item.place}</p>
                <p className="timeline-h-detail">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}