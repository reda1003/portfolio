export const projects = [
  {
    kind: "Analyst",
    title: "Dashboard de ventes retail",
    description:
      "Segmentation client (RFM) et detection de saisonnalite sur des donnees de vente e-commerce, avec dashboard interactif et recommandations business.",
    tags: ["Power BI", "SQL", "RFM"],
    link: "#",
    context:
      "Une entreprise e-commerce veut mieux comprendre quels segments de clients generent le plus de valeur, pour prioriser les actions marketing.",
    approach:
      "Nettoyage des donnees de transactions, calcul des scores RFM (Recence, Frequence, Montant), segmentation en 5 groupes clients, et construction d'un dashboard Power BI interactif.",
    results:
      "Identification de 3 segments cles representant 70% du chiffre d'affaires, avec des recommandations d'actions ciblees par segment (reactivation, fidelisation, VIP).",
  },
  {
    kind: "Analyst",
    title: "Analyse de churn client",
    description:
      "Exploration approfondie des causes de depart client dans le secteur telecom, avec recommandations actionnables plutot qu'une simple prediction.",
    tags: ["Python", "Pandas", "Tableau"],
    link: "#",
    context:
      "Un operateur telecom perd des clients chaque mois sans comprendre precisement pourquoi, au-dela des chiffres bruts de churn.",
    approach:
      "Analyse exploratoire approfondie croisant type de contrat, anciennete, moyen de paiement et services souscrits, pour identifier les profils a risque plutot que de se limiter a un score de prediction.",
    results:
      "Mise en evidence que les clients en contrat mensuel de plus de 12 mois ont un taux de churn 3x superieur a la moyenne - une cible prioritaire pour une action de retention.",
  },
  {
    kind: "Scientist",
    title: "Classification du risque diabete",
    description:
      "Pipeline complet de classification (cleaning, feature engineering, comparaison de modeles) avec attention portee aux metriques adaptees au desequilibre des classes.",
    tags: ["Scikit-learn", "Logistic Regression", "Random Forest"],
    link: "https://github.com/reda1003/diabetes-risk-classification",
    context:
      "Predire le risque de diabete a partir d'indicateurs cliniques (glucose, IMC, age...), en evitant les pieges methodologiques courants sur ce type de dataset.",
    approach:
      "Detection des valeurs manquantes deguisees en zeros, split train-test avant imputation pour eviter toute fuite de donnees, comparaison regression logistique vs Random Forest, interpretation des features.",
    results:
      "Random Forest a 74% d'accuracy et 0.825 de ROC-AUC, avec Glucose et IMC comme facteurs les plus predictifs - coherent avec la litterature medicale. Une fuite de donnees detectee et corrigee en cours de route a evite des resultats trompeurs.",
  },
  {
    kind: "Scientist",
    title: "Prevision de demande temporelle",
    description:
      "Prevision de la demande de velos en libre-service, du modele naif jusqu'a des approches ML avec features temporelles.",
    tags: ["Statsmodels", "SARIMA", "Random Forest"],
    link: "https://github.com/reda1003/bike-demand-forecast",
    context:
      "Prevoir la demande quotidienne de velos en libre-service pour optimiser la disponibilite des stations, en comparant plusieurs niveaux de complexite de modeles.",
    approach:
      "Split temporel strict (jamais aleatoire), comparaison progressive : modele naif, moyenne mobile, Holt-Winters, SARIMA, puis Random Forest avec lags et variables meteo.",
    results:
      "Le Random Forest reduit l'erreur de prevision (MAPE) de 84.8% a 32.8% par rapport au modele naif, en combinant tendance recente et contexte meteo.",
  },
];