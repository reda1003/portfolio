export default function Hero() {
  return (
    <section className="hero container">
      <div>
        <p className="eyebrow">Data Analyst · Data Scientist junior</p>
        <h1 className="hero-name">
          Ahmed Reda <em>BOUACHRINE</em>
        </h1>
        <p className="hero-tagline">
          Je transforme la donnée brute en décisions concrètes — de l'analyse
          exploratoire au modèle prédictif. À la recherche d'un CDI.
        </p>
        <div className="hero-links">
          <a className="btn btn-primary" href="/cv.pdf" download>
            Télécharger le CV
          </a>
          <a className="btn" href="#projects">
            Voir les projets
          </a>
          <a className="btn" href="https://github.com/reda1003" target="_blank" rel="noreferrer">
            GitHub
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