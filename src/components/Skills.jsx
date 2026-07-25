const skillGroups = [
  {
    title: "Analyse & Visualisation",
    skills: ["SQL", "Power BI", "Excel avancé", "Tableau"],
  },
  {
    title: "Data Science & ML",
    skills: ["Python", "Scikit-learn", "Pandas", "R"],
  },
  {
    title: "Data Engineering",
    skills: ["ETL", "Git", "Azure", "Automatisation"],
  },
];

export default function Skills() {
  return (
    <section className="section container" id="skills">
      <p className="eyebrow">Compétences</p>
      <h2 className="section-title">Ma boîte à outils</h2>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <p className="skill-group-title">{group.title}</p>
            <ul className="skill-list">
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}