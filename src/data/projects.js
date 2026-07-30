export const projects = [
{
  slug: "dashboard-ventes-retail",
  kind: "Analyst",
  title: "Analyse des ventes & segmentation RFM",
  image: "/projects/retail-illustration.png",

  description:
    "Dashboard Power BI interactif pour analyser 861 K€ de ventes, suivre les performances commerciales et segmenter 1 000 clients selon leur comportement d'achat.",

  tags: ["Power BI", "Power Query", "DAX", "RFM"],

  link: "https://github.com/reda1003/retail-sales-rfm-analysis",

  context:
    "Une entreprise retail souhaite comprendre ses performances commerciales en 2023, identifier ses marchés et produits clés, et mieux connaître la valeur de ses clients.",

  approach:
    "Nettoyage et validation des transactions avec Power Query, modélisation des données, création de KPI en DAX, puis segmentation de 1 000 clients selon leur récence, fréquence et valeur monétaire.",

  results:
    "L'analyse couvre 5 326 commandes et 1 000 clients pour 861 K€ de chiffre d'affaires. La France représente 55% des ventes et les 237 clients Champions génèrent à eux seuls 48,2% du chiffre d'affaires.",

  gallery: [
    {
      src: "/projects/retail-overview.png",
      caption:
        "Vue d'ensemble des performances : 861 K€ de chiffre d'affaires, 5 326 commandes et suivi des ventes par mois, produit et marché.",
    },
    {
      src: "/projects/retail-rfm.png",
      caption:
        "Segmentation RFM de 1 000 clients : 237 Champions génèrent 48,2% du chiffre d'affaires et 87,2% des clients sont récurrents.",
    },
    {
      src: "/projects/retail-model.png",
      caption:
        "Modèle Power BI structuré autour des transactions, de la dimension client RFM et d'une table calendrier.",
    },
  ],
},
  {
  slug: "analyse-churn-client",
  kind: "Analyst",
  title: "Analyse de churn client",
  image: "/projects/telecom-illustration.png",

  description:
    "Analyse exploratoire des facteurs de churn dans le secteur télécom afin d'identifier les profils à risque et proposer des actions de rétention ciblées.",

  tags: ["Python", "Pandas", "Tableau"],

  link: "https://github.com/reda1003/telco-churn-analysis",

  context:
    "Un opérateur télécom souhaite comprendre pourquoi certains clients résilient leur abonnement afin d'identifier les profils les plus exposés au churn et mieux cibler ses actions de rétention.",

  approach:
    "Analyse exploratoire croisant le type de contrat, l'ancienneté, le moyen de paiement et les services souscrits afin d'identifier les facteurs associés au départ des clients, sans se limiter à un modèle prédictif.",

  results:
    "Le type de contrat ressort comme le principal facteur de risque : le churn atteint 47% pour les contrats mensuels contre 6% pour les contrats de deux ans. Même après plus de quatre ans d'ancienneté, les clients en contrat mensuel conservent un churn proche de 40%, contre environ 3% pour les contrats de deux ans.",

  gallery: [
    {
      src: "/projects/churnglobal.png",
      caption:
        "Répartition globale : 31% des clients ont résilié leur abonnement.",
    },
    {
      src: "/projects/churnparcontract.png",
      caption:
        "Le type de contrat est le principal facteur de risque : 47% de churn en contrat mensuel contre 6% en engagement de deux ans.",
    },
    {
      src: "/projects/ancetcontract.png",
      caption:
        "Même après plus de quatre ans d'ancienneté, le churn reste proche de 40% en contrat mensuel contre environ 3% avec un engagement de deux ans.",
    },
  ],
},
  {
    slug: "classification-risque-diabete",
    kind: "Scientist",
    title: "Classification du risque diabète",
    image: "/projects/diabetes-illustration.png",
    description:
      "Pipeline complet de classification (cleaning, feature engineering, comparaison de modeles) avec attention portee aux metriques adaptees au desequilibre des classes.",
    tags: ["Scikit-learn", "Logistic Regression", "Random Forest"],
    link: "https://github.com/reda1003/diabetes-risk-classification",
    context:
      "Predire le risque de diabete a partir d'indicateurs cliniques (glucose, IMC, age...), en evitant les pieges methodologiques courants sur ce type de dataset.",
    approach:
      "Detection des valeurs manquantes deguisees en zeros, split train-test avant imputation pour eviter toute fuite de donnees, comparaison regression logistique vs Random Forest, interpretation des features.",
    results:
  "Le Random Forest atteint 74% d'accuracy et 0,825 de ROC-AUC. Le glucose et l'IMC ressortent comme les variables les plus prédictives, et une fuite de données identifiée pendant l'analyse a été corrigée afin d'obtenir une évaluation plus fiable.",
    gallery: [
  {
    src: "/projects/diabetes-model-comparison.png",
    caption:
      "Comparaison des modèles de classification selon plusieurs métriques, au-delà de la seule accuracy.",
  },
  {
    src: "/projects/diabetes-roc.png",
    caption:
      "Comparaison des courbes ROC de la régression logistique et du Random Forest.",
  },
  {
    src: "/projects/diabetes-feature-importance.png",
    caption:
      "Interprétation du Random Forest à travers l'importance des variables utilisées pour la prédiction.",
  },
],
  },
{
  slug: "Prévision de la demande de vélos",
  kind: "Scientist",
  title: "Prévision de demande temporelle",
  image: "/projects/bike-illustration.png",

  description:
    "Prévision de la demande quotidienne de vélos en libre-service en comparant plusieurs approches, des baselines aux modèles de séries temporelles et au machine learning.",

  tags: ["Statsmodels", "SARIMA", "Random Forest"],

  link: "https://github.com/reda1003/bike-demand-forecast",

  context:
    "L'objectif est de prévoir la demande quotidienne de vélos afin d'anticiper les variations d'usage, tout en comparant progressivement plusieurs niveaux de complexité de modèles.",

  approach:
    "Split temporel strict sur les 60 derniers jours, création de baselines, comparaison de Holt-Winters et SARIMA, puis entraînement d'un Random Forest enrichi de lags, moyenne mobile, variables calendaires et météo.",

  results:
    "Le Random Forest obtient les meilleures performances avec une MAPE de 32,8%, contre 84,8% pour le modèle naïf. La moyenne mobile sur 7 jours ressort comme la variable la plus prédictive du modèle final.",

  gallery: [
    {
      src: "/projects/bike-model-comparison.png",
      caption:
        "Comparaison des modèles : le Random Forest réduit la MAPE à 32,8%, contre 84,8% pour la baseline naïve.",
    },
    {
      src: "/projects/bike-forecast.png",
      caption:
        "Comparaison des prédictions de Holt-Winters, SARIMA et Random Forest avec la demande réelle sur les 60 jours de test.",
    },
    {
      src: "/projects/bike-feature-importance.png",
      caption:
        "Importance des variables du Random Forest : la moyenne mobile sur 7 jours constitue le signal prédictif principal.",
    },
  ],
},
];