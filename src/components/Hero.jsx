export default function Hero() {
  return (
    <section className="hero container">
      <div>
        <p className="eyebrow">Data Analyst · Data Scientist</p>
        <h1 className="hero-name">
          Ahmed Reda <em>BOUACHRINE</em>
        </h1>
        <p className="hero-tagline">
          Je transforme des données brutes en analyses, dashboards et modèles permettant de prendre des décisions concrètes. À la recherche d’un poste de Data Analyst.
        </p>
        <div className="hero-links">
          <a className="btn" href="#projects">
            Voir les projets
          </a>
          <a className="btn" href="https://www.linkedin.com/in/ahmed-reda-bouachrine/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>

      <div className="hero-photo-wrap">
        <div className="hero-photo-frame">
          <img
            src="/photo.png"
            alt="Photo de profil"
            className="hero-photo"
          />
        </div>
      </div>
    </section>
  );
}