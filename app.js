'use strict';
const projects = [
  {
    "id": "bottleneck-bi",
    "code": "P9",
    "category": "bi",
    "label": "Performance<br>commerciale",
    "symbol": "↗",
    "sector": "COMMERCE · REPORTING",
    "title": "BottleNeck - Piloter la performance",
    "summary": "Relier ventes, marges, stocks et promotions dans un tableau de bord destiné à la décision.",
    "tags": [
      "Power BI",
      "Power Query",
      "DAX",
      "SQLite"
    ],
    "question": "Comment donner à la direction une lecture cohérente de la performance commerciale, des marges et des stocks ?",
    "method": [
      "Comparer trois solutions : connexion directe à SQLite, export CSV et préparation des données avec Power Query. Retenir Power BI avec transformations centralisées dans Power Query.",
      "Conserver des tables séparées et renommer les tables métier en dimensions et faits selon leur rôle dans l’analyse.",
      "Séparer les clés composées, comme 2022-11_304, pour retrouver la période et le SKU, l’identifiant commun du produit.",
      "Créer une dimension Date et des relations depuis les dimensions Produit et Date vers les faits, afin de filtrer les mêmes produits et périodes dans les analyses.",
      "Définir les mesures DAX de chiffre d’affaires, marge, quantités vendues, commandes, prix moyens, stock, rotation et indicateurs promotionnels.",
      "Construire six pages : vue exécutive, performance commerciale, prix et marges, stocks, promotions et recommandations business."
    ],
    "delivery": "Un rapport documenté de comparaison des solutions et un fichier Power BI de six pages, accompagnés d’une présentation et d’un script. Le modèle et les transformations sont décrits pour justifier le choix de l’architecture.",
    "insight": "La synthèse du projet identifie le Vin comme segment dominant. Les recommandations portent sur les segments performants, la protection de la marge, la réduction du surstock et le ciblage des promotions.",
    "limit": "Un stock est une mesure de situation : son agrégation sur plusieurs périodes doit être interprétée selon la mesure retenue. L’évolution des ventes pendant une promotion ne prouve pas un effet causal. Les comparaisons doivent porter sur des périodes et des définitions d’indicateurs cohérentes.",
    "source": "Documents de référence : rapport de préconisation P9, pages 3 à 8, et tableau de bord Power BI BottleNeck, avec six pages métier et une page de contrôle.",
    "context": "Ce second volet BottleNeck vise le pilotage de la vente de vin en ligne. Il associe le choix d’une méthode d’exploitation de la base SQLite à un rapport Power BI destiné à la direction et aux chefs de produits.",
    "facts": [
      [
        "Base de départ",
        "Bottleneck.db, avec un dictionnaire et un schéma relationnel. Quatre tables exploitées : Web, Finance, Sales et Promo."
      ],
      [
        "Modèle analytique",
        "Dim_Produit et Dim_Date filtrent Fact_Sales, Fact_Finance et Fact_Promo dans un modèle en étoile."
      ],
      [
        "Axes de lecture",
        "Chiffre d’affaires, marges, quantités et commandes, prix moyens, stock, rotation et promotions."
      ]
    ],
    "metrics": [
      {
        "value": "≈ 2,44 M€",
        "label": "chiffre d’affaires rapporté"
      },
      {
        "value": "≈ 1,15 M€",
        "label": "marge totale rapportée"
      },
      {
        "value": "46,98 %",
        "label": "taux de marge du rapport"
      }
    ],
    "metricNote": "Repères de la synthèse du projet. Le ratio de marge correspond à la marge totale divisée par le chiffre d’affaires, selon la définition du rapport. Ce portfolio présente une synthèse statique du cas.",
    "findings": [
      [
        "Performance",
        "La lecture combine chiffre d’affaires et marge pour éviter de réduire la performance au seul volume de ventes."
      ],
      [
        "Stock et promotions",
        "Les indicateurs de rotation et les pages dédiées permettent d’examiner les produits à prioriser et les actions promotionnelles."
      ],
      [
        "Période des données",
        "Les tables Finance et Sales couvrent également octobre 2023, au-delà de la fin septembre annoncée dans le descriptif. La période de comparaison doit être vérifiée selon les tables."
      ]
    ]
  },
  {
    "id": "immobilier",
    "code": "P8",
    "category": "python",
    "label": "Analyse<br>immobilière",
    "symbol": "⌂",
    "sector": "IMMOBILIER · MODÉLISATION",
    "title": "Immobilier - Estimer et pré-classer",
    "summary": "Estimer la valeur d’un portefeuille avec une régression chronologique et pré-classer des opportunités avec K-means.",
    "tags": [
      "Python",
      "pandas",
      "scikit-learn",
      "K-means"
    ],
    "question": "Comment estimer la valeur du portefeuille au 31 décembre 2022 et proposer un premier tri des nouvelles opportunités ?",
    "method": [
      "Explorer l’évolution du prix au mètre carré et le rôle de la localisation et du type de bien.",
      "Construire des variables catégorielles pour le code postal et le type, puis des interactions avec la surface et le temps.",
      "Entraîner LinearRegression(fit_intercept=False) avec une séparation chronologique 80/20 et mesurer l’erreur absolue en pourcentage de la valeur réelle.",
      "Réappliquer au portefeuille les mêmes transformations et aligner les colonnes pour estimer chaque actif au 31/12/2022.",
      "Utiliser K-means à deux groupes sur le prix au mètre carré, puis interpréter les centroïdes plutôt que les numéros arbitraires des groupes.",
      "Contrôler les opportunités retrouvées dans l’historique sur quatre champs : valeur foncière, surface, code postal et commune."
    ],
    "delivery": "Un notebook avec préparation, régression, valorisation, K-means et vérification partielle, ainsi qu’une présentation de 16 slides. Le notebook contient également l’export des valorisations au format CSV.",
    "insight": "La démarche traduit une relation métier, valeur = surface × niveau de prix au m², en variables explicables. Le choix d’une séparation chronologique apporte un test plus proche de l’usage passé vers futur qu’un mélange aléatoire des périodes.",
    "limit": "Le modèle ne connaît ni l’état, ni l’étage, ni l’exposition, ni les transports. La valorisation 2022 extrapole un historique arrêté en 2021 et ne remplace pas une expertise immobilière. Le contrôle K-means 16/16 concerne des observations retrouvées dans l’historique, pas un test indépendant ni une précision globale sur 40 biens.",
    "source": "Documents de référence : notebook P8, analyses de régression, valorisation et contrôle K-means ; présentation, slides 3 et 8 à 14. Le contrôle partiel est décrit dans ces deux livrables.",
    "context": "Les Plus Beaux Logis de Paris doivent éclairer une valorisation de portefeuille et un besoin de tri opérationnel. L’analyse porte sur 26 196 transactions de 2017 à 2021, un portefeuille de 275 actifs et 40 opportunités à classer.",
    "facts": [
      [
        "Historique",
        "26 196 transactions de 2017 à 2021 ; comparaison des types de biens, des années et des arrondissements."
      ],
      [
        "Régression",
        "20 956 observations anciennes pour apprendre, 5 240 plus récentes pour tester ; 22 variables dans la représentation finale."
      ],
      [
        "Portefeuille et opportunités",
        "275 actifs à valoriser au 31/12/2022 et 40 biens à pré-classer selon leur prix au mètre carré."
      ]
    ],
    "metrics": [
      {
        "value": "7,51 %",
        "label": "erreur absolue relative moyenne sur le test"
      },
      {
        "value": "176,5 M€",
        "label": "valorisation estimée au 31/12/2022"
      },
      {
        "value": "16 / 40",
        "label": "biens disposant d’un contrôle de type"
      }
    ],
    "metricNote": "Valeurs enregistrées dans le notebook fourni, cohérentes avec la présentation. L’évaluation concerne un test chronologique historique ; la valorisation 2022 est une estimation issue du modèle.",
    "findings": [
      [
        "Évaluation de la régression",
        "L’erreur moyenne est de 7,51 % et la médiane de 7,54 % sur les 5 240 transactions du test. L’objectif du cas, inférieur à 10 % en moyenne, est atteint."
      ],
      [
        "Lecture du portefeuille",
        "Corporate représente environ 102,6 M€ pour 121 actifs ; Particuliers environ 74,0 M€ pour 154 actifs. La comparaison sert à prioriser une étude actif par actif."
      ],
      [
        "Pré-classement",
        "Les deux groupes contiennent 20 biens chacun. Leurs centres se situent autour de 9 807 et 7 409 €/m². La correspondance aux types nécessite une interprétation."
      ],
      [
        "Validation partielle",
        "16 opportunités sont retrouvées exactement dans l’historique : 9 appartements et 7 locaux commerciaux. Les 16 types concordent ; les 24 autres biens restent sans référence."
      ]
    ],
    "figure": {
      "src": "assets/immobilier-regression.png",
      "alt": "Nuage de points des valeurs immobilières réelles et prédites sur le test, avec diagonale de référence.",
      "caption": "Graphique enregistré dans le notebook P8 : valeurs réelles et prédites sur le test chronologique. Les axes utilisent la notation scientifique 1e7, soit dix millions."
    },
    "technical": {
      "title": "Extrait Python : mesurer l’erreur relative",
      "language": "Python · extrait du notebook P8",
      "code": "modele_regression = LinearRegression(fit_intercept=False)\nmodele_regression.fit(X_train, y_train)\ny_pred = modele_regression.predict(X_test)\n\nresultats_test[\"erreur_pourcentage\"] = (\n    resultats_test[\"erreur_absolue\"]\n    / resultats_test[\"valeur_reelle\"]\n) * 100\n\nerreur_moyenne = resultats_test[\"erreur_pourcentage\"].mean()",
      "explanation": "L’erreur absolue est divisée par la valeur réelle de chaque bien, puis moyennée. La métrique mesure une erreur de valeur et ne doit pas être présentée comme une précision de classification."
    }
  },
  {
    "id": "uoi-games",
    "code": "P10",
    "category": "python",
    "label": "Stratégie<br>jeux vidéo",
    "symbol": "✳",
    "sector": "JEUX VIDÉO · AIDE À LA DÉCISION",
    "title": "UOI Games - Choisir un segment",
    "summary": "Croiser les ventes historiques, les préférences et les notes pour étayer une orientation de marché.",
    "tags": [
      "Python",
      "pandas",
      "Analyse exploratoire",
      "Scénarios"
    ],
    "question": "Quel segment de jeux vidéo privilégier et sur quelles preuves fonder cette recommandation ?",
    "method": [
      "Organiser les traitements en huit notebooks, avec des dépendances et un ordre d’exécution documentés.",
      "Croiser les ventes historiques, les plateformes et consoles, les 62 réponses au questionnaire, les notes et l’offre récente.",
      "Comparer quatre critères de même poids. Pour un segment réunissant plusieurs catégories, moyenner leurs contributions plutôt que les additionner afin de ne pas le favoriser artificiellement.",
      "Convertir les rangs en points avec pandas, puis examiner les genres et les plateformes dans des matrices distinctes.",
      "Regrouper les ventes d’un même titre entre plateformes, sélectionner le benchmark commercial à partir d’un million d’exemplaires et utiliser Q25, médiane et Q75 comme repères historiques."
    ],
    "delivery": "Huit notebooks, un README précisant leur ordre d’exécution, une matrice de décision et le fichier classement_genres.xlsx, puis des scénarios et une recommandation stratégique.",
    "insight": "La présentation finale retient une orientation AAA action-aventure premium, solo narratif, sur PC et PlayStation. La prochaine étape proposée est un business case, un test de concept puis un prototype avant une décision d’investissement.",
    "limit": "Le seuil d’un million d’exemplaires sélectionne des succès commerciaux et crée un biais de sélection. Les scénarios ne sont pas des prévisions pour un nouveau studio. Les pondérations de la matrice sont un choix méthodologique ; un nombre de jeux récents plus élevé décrit l’offre et ne démontre pas, à lui seul, une opportunité plus rentable.",
    "source": "Documents de référence : présentation UOI Games, slides 9 à 16 ; notebooks 01 à 08 et leur README. Le notebook 07 détaille la comparaison des genres et des plateformes, avec moyenne des catégories regroupées.",
    "context": "UOI Games cherche une orientation de marché pour un jeu. La démarche rapproche plusieurs preuves : ventes historiques, plateformes et consoles, préférences exprimées dans un questionnaire, notes et offre récente.",
    "facts": [
      [
        "Organisation",
        "Huit notebooks ordonnés : exploration, nettoyage, ventes historiques, consoles, questionnaire, notes, choix du segment, recommandation."
      ],
      [
        "Questionnaire",
        "62 répondants ; un éclairage exploratoire complémentaire, sans représentativité du marché établie."
      ],
      [
        "Matrice de décision",
        "Quatre critères de même poids : ventes historiques, préférences, notes moyennes de 2022 et nombre de jeux récents."
      ]
    ],
    "metrics": [
      {
        "value": "1,40 M",
        "label": "scénario prudent · premier quartile"
      },
      {
        "value": "2,08 M",
        "label": "scénario central · médiane"
      },
      {
        "value": "3,88 M",
        "label": "scénario optimiste · troisième quartile"
      }
    ],
    "metricNote": "Repères de ventes figurant dans la présentation fournie, issus d’un benchmark de 465 titres ayant vendu au moins un million d’exemplaires. Ce sont des valeurs historiques conditionnelles, pas une prévision des ventes d’UOI Games.",
    "findings": [
      [
        "Choix du segment",
        "Le classement combine des preuves de nature différente. Il rend le raisonnement inspectable et les critères discutables."
      ],
      [
        "Organisation du travail",
        "La séparation en notebooks facilite la lecture et la maintenance, mais impose de respecter les dépendances et l’ordre d’exécution."
      ],
      [
        "Portée des scénarios",
        "Les quartiles décrivent les références sélectionnées. Budget marketing, notoriété du studio et concurrence au lancement ne sont pas intégrés dans ce benchmark."
      ]
    ],
    "technical": {
      "title": "Extrait Python : attribuer des points aux genres",
      "language": "Python · notebook 07, comparaison des genres",
      "code": "nombre_genres = len(matrice_genres)\n\nfor colonne, colonne_points in criteres_genres.items():\n    rang = matrice_genres[colonne].rank(\n        method=\"min\", ascending=False\n    )\n    matrice_genres[colonne_points] = nombre_genres + 1 - rang\n\nmatrice_genres[\"score_total\"] = matrice_genres[\n    list(criteres_genres.values())\n].sum(axis=1)\n\nmatrice_genres = matrice_genres.sort_values(\n    \"score_total\", ascending=False\n).reset_index(drop=True)",
      "explanation": "La boucle classe chaque critère séparément. Les points sont ensuite additionnés sans pondération supplémentaire. En cas d’égalité, method=\"min\" donne aux ex æquo le meilleur rang commun."
    }
  },
  {
    "id": "pilotage-projets",
    "code": "P7",
    "category": "bi",
    "label": "Pilotage<br>de projets",
    "symbol": "≋",
    "sector": "GESTION DE PROJETS · BI",
    "title": "Sanitoral - Suivre les écarts",
    "summary": "Construire un reporting des coûts, délais et livrables, du portefeuille global au détail projet-phase.",
    "tags": [
      "Power BI",
      "Power Query",
      "DAX",
      "Modélisation"
    ],
    "question": "Comment aider plusieurs niveaux de direction à repérer les écarts et à prioriser les projets à examiner ?",
    "method": [
      "Nettoyer les sept tables dans Power Query : retirer les lignes descriptives, promouvoir les vrais en-têtes, corriger les types et filtrer les valeurs nulles utiles.",
      "Supprimer les doublons repérés dans Project type et Projects_Locations, puis limiter Country_Profiles aux champs Region, Country et Type.",
      "Construire ProjectPhaseKey en combinant l’identifiant du projet et la phase dans les tables prévisionnelles et réelles. Conserver Projects_plans comme référence au niveau projet-phase.",
      "Définir les écarts DAX. Un écart relatif atteint ou dépasse 15 % pour déclencher une alerte. Pour les livrables, le calcul prévu moins réel rend un manque positif.",
      "Compter chaque phase une seule fois dans le total des phases en alerte, même lorsqu’elle déclenche plusieurs types d’alertes.",
      "Organiser une vue exécutive, une lecture région/pays et un détail projet-phase, avec filtres, info-bulle pays et rôles de sécurité par périmètre.",
      "Documenter le remplacement de l’extraction Excel, l’actualisation, le changement éventuel de chemin et le contrôle des erreurs, KPI et filtres."
    ],
    "delivery": "Un rapport Power BI interactif, un Product Strategy Canvas, une documentation du modèle et de l’actualisation. La présentation finale est organisée en 10 slides pour environ 10 minutes, complétées par une démonstration Power BI de 5 minutes.",
    "insight": "La synthèse du projet fait ressortir les coûts comme premier axe d’investigation et la phase Testing des projets IT comme point de vigilance. La recommandation est de renforcer l’estimation budgétaire et les points de contrôle de ces phases, après analyse de leurs causes.",
    "limit": "Le volume d’alertes dépend de la définition des écarts et du seuil choisi. Une alerte est un signal de pilotage, pas une preuve de mauvaise gestion ni une explication causale. La fonctionnalité Questions/Réponses a été étudiée mais n’était pas opérationnelle dans l’environnement décrit.",
    "source": "Documents de référence : rapport Power BI Sanitoral et synthèse de l’analyse. Le rapport comprend les vues exécutive, région/pays, projets/phases, mise à jour, info-bulle pays et contrôle interne.",
    "context": "Sanitoral a besoin de comparer le prévu et le réel pour trois niveaux de direction : général, régional et pays. Le rapport doit rendre les dérives repérables et rester actualisable à partir des nouvelles extractions Excel.",
    "facts": [
      [
        "Données",
        "Sept tables : coûts réels, durées réelles, livrables réels, plans de projets, types de projets, localisations et profils pays."
      ],
      [
        "Niveau de comparaison",
        "Un projet et une phase, identifiés ensemble par ProjectPhaseKey."
      ],
      [
        "Indicateurs",
        "Coûts, durées et livrables prévus/réels, écarts absolus et relatifs, phases et projets en alerte."
      ]
    ],
    "metrics": [
      {
        "value": "104",
        "label": "projets suivis"
      },
      {
        "value": "102",
        "label": "projets avec au moins une alerte"
      },
      {
        "value": "349",
        "label": "phases distinctes en alerte"
      }
    ],
    "metricNote": "Repères de la synthèse du projet, avec un seuil d’alerte de 15 %. Les totaux par indicateur peuvent recouvrir les mêmes phases et ne doivent pas être additionnés pour compter les phases distinctes.",
    "findings": [
      [
        "Alertes par indicateur",
        "214 sur les coûts, 159 sur les délais et 98 sur les livrables sont rapportées. Une même phase peut apparaître dans plusieurs catégories : ces nombres ne doivent pas être additionnés pour compter les phases distinctes."
      ],
      [
        "Zoom métier",
        "Les 52 phases D - Testing des projets IT analysées sont décrites comme étant toutes en alerte coût. Ce constat motive une investigation ciblée."
      ],
      [
        "Consultation et maintenance",
        "Les rôles France et Western Europe sont décrits comme testés avec « Voir comme ». La procédure d’actualisation répond à un besoin de mise à jour hebdomadaire."
      ]
    ],
    "technical": {
      "title": "Extrait DAX : compter les phases en alerte",
      "language": "DAX · règle de comptage des phases en alerte",
      "code": "Phases en alerte =\nSUMX(\n    VALUES(Projects_plans[ProjectPhaseKey]),\n    IF(\n        [Écart coût %] >= 0.15\n            || [Écart durée %] >= 0.15\n            || [Écart livrables %] >= 0.15,\n        1,\n        0\n    )\n)",
      "explanation": "L’itération porte sur les clés projet-phase distinctes. Le OU logique permet de compter une phase une seule fois lorsqu’au moins un indicateur atteint le seuil."
    }
  },
  {
    "id": "bottleneck-analyse",
    "code": "P6",
    "category": "python",
    "label": "Données<br>commerciales",
    "symbol": "⌘",
    "sector": "COMMERCE · ANALYSE",
    "title": "BottleNeck - Comprendre prix, marges et stocks",
    "summary": "Explorer les données ERP et e-commerce, repérer les prix atypiques et mettre en relation ventes, marges et stocks.",
    "tags": [
      "Python",
      "pandas",
      "Analyse exploratoire",
      "Statistiques"
    ],
    "question": "Comment passer des données de gestion et de vente en ligne à une lecture des prix, des marges et du stock ?",
    "method": [
      "Explorer les dimensions, les types, les valeurs manquantes et le rôle de chacune des trois sources.",
      "Isoler les fiches produit du web, harmoniser les identifiants et contrôler leur unicité avant les jointures.",
      "Consolider ERP, liaison et web en conservant la trace des références non rapprochables.",
      "Contrôler les prix de vente et d’achat, les stocks négatifs, les incohérences de statut et les marges.",
      "Calculer chiffre d’affaires, valorisation et rotation du stock, puis examiner la concentration du CA et les prix atypiques par IQR.",
      "Calculer les corrélations de Pearson et compléter les coefficients par des nuages de points."
    ],
    "delivery": "Un notebook d’analyse et une présentation PDF de 14 pages : diagnostics des sources, rapprochements, contrôles qualité, indicateurs commerciaux, graphiques et recommandations pour les systèmes sources.",
    "insight": "Les priorités proposées sont de rendre les clés de rapprochement plus fiables, de contrôler les prix et les statuts de stock à la source, puis d’associer indicateurs métier et indicateurs qualité dans le futur reporting.",
    "limit": "Une corrélation de Pearson décrit une association linéaire et ne démontre pas de causalité. Certaines variables analysées sont calculées à partir d’autres : leur association doit aussi se lire à la lumière de ces dépendances. Le caractère premium d’un produit peut expliquer un prix atypique sans justifier sa suppression.",
    "source": "Documents de référence : notebook P6, analyses et sorties enregistrées ; présentation, pages 2 à 14. Le graphique de contribution au chiffre d’affaires est extrait du notebook.",
    "context": "BottleNeck dispose d’un ERP de 825 produits, d’une table de liaison de 825 lignes et d’un export web de 1 513 lignes. L’étude porte sur les ventes d’octobre et une situation du stock au 31 octobre. Le premier enjeu est de déterminer quelles références peuvent être rapprochées de façon fiable.",
    "facts": [
      [
        "Trois sources",
        "ERP : prix, stocks et statuts ; liaison : product_id vers SKU ; web : fiches produits et ventes."
      ],
      [
        "Web nettoyé",
        "716 fiches produit identifiées, dont 2 sans SKU isolées ; 714 références exploitables avec SKU unique. Les attachments et lignes sans contenu utile sont exclus du périmètre des ventes."
      ],
      [
        "Rapprochement",
        "714 produits ERP appariés au web ; 111 sans correspondance exploitable, dont 91 sans SKU et 20 SKU de liaison absents du web nettoyé."
      ]
    ],
    "findings": [
      [
        "Qualité de l’ERP",
        "3 prix de vente nuls ou négatifs, 2 stocks négatifs, 2 incohérences quantité/statut et 7 marges unitaires négatives sont relevés."
      ],
      [
        "Concentration du CA",
        "434 produits, soit 60,78 % des références analysées, sont nécessaires pour atteindre environ 80 % du CA. La règle des « 20/80 » n’est donc pas confirmée sur ce périmètre."
      ],
      [
        "Prix atypiques",
        "La borne haute IQR est de 84,09 €. Les 31 références au-dessus de cette borne sont signalées pour examen métier, sans suppression automatique."
      ],
      [
        "Priorités de stock",
        "23 produits vendus sans stock disponible et 3 produits avec stock mais sans vente motivent un suivi ciblé des ruptures et du surstock."
      ]
    ],
    "technical": {
      "title": "Extrait Python : la matrice de corrélation",
      "language": "Python · extrait du notebook BottleNeck",
      "code": "df_correlation = df_analyse[variables_correlation].copy()\nmatrice_correlation = df_correlation.corr()\n\ncorrelation_prix = df_analyse[\"purchase_price\"].corr(\n    df_analyse[\"price\"]\n)",
      "explanation": "La sélection rassemble les variables quantitatives retenues pour l’analyse. La matrice compare ces variables deux à deux ; le dernier calcul isole la relation entre prix d’achat et prix de vente."
    },
    "metrics": [
      {
        "value": "714",
        "label": "produits rapprochés avec le web"
      },
      {
        "value": "143 680 €",
        "label": "CA web d’octobre, arrondi"
      },
      {
        "value": "31",
        "label": "prix atypiques signalés par IQR"
      }
    ],
    "metricNote": "Résultats présents dans le notebook et la présentation fournis. Le CA n’est pas celui de toute l’entreprise ; les stocks correspondent à une extraction au 31 octobre.",
    "figure": {
      "src": "assets/bottleneck-pareto.png",
      "alt": "Courbe de Pareto du CA : le seuil de 80 % est atteint vers 434 produits.",
      "caption": "Graphique enregistré dans le notebook P6. La courbe de contribution cumulée montre une activité répartie sur un assortiment assez large."
    }
  },
  {
    "id": "qualite-ia",
    "code": "P11",
    "category": "quality",
    "label": "Contrôles qualité<br>& arbitrage",
    "symbol": "◈",
    "sector": "FIABILITÉ · VEILLE",
    "title": "Qualité des données - Comparer puis simplifier",
    "summary": "Centraliser dix contrôles BottleNeck, comparer pandas et Pandera et intégrer la solution proportionnée au besoin.",
    "tags": [
      "Python",
      "pandas",
      "Pandera · POC",
      "IA assistée"
    ],
    "question": "Comment rendre les contrôles BottleNeck plus lisibles, reproductibles et maintenables avant les analyses métier ?",
    "method": [
      "Cadrer le besoin, les parties prenantes, les limites du périmètre et les critères d’acceptation.",
      "Étudier pandas, Pandera et Great Expectations, puis retenir les deux premières approches pour les prototypes. Great Expectations reste une option de veille.",
      "Comparer les dix mêmes règles sur les prix, les stocks, les marges et les SKU ; examiner la couverture, l’intégrité, la reproductibilité et la complexité.",
      "Retenir pandas pour ce notebook : la couverture observée est équivalente, sans ajouter de dépendance à l’environnement du P6.",
      "Intégrer la validation juste avant les analyses métier et produire un résumé des contrôles et des signalements.",
      "Documenter l’usage de l’IA pour la recherche et le prototypage, les risques, l’arbitrage et une procédure de prise en main."
    ],
    "delivery": "Un notebook BottleNeck amélioré, une documentation de 21 pages couvrant cadrage, veille, prototypes, arbitrage, risques, traçabilité de l’IA et mini-formation. La mission comporte aussi un portfolio PDF de synthèse.",
    "insight": "L’apport est une validation explicite et réutilisable, placée avant les calculs métier. La décision repose sur le besoin couvert et le coût de maintenance de la solution, sans prétendre que l’outil le plus complet est toujours le plus adapté.",
    "limit": "La référence contient les anomalies déjà connues du P6 et ne constitue pas un benchmark indépendant. Les temps d’environ 0,01 s et 0,03 s sont ceux d’un petit essai local, sans portée générale. La validation ne bloque pas les cellules suivantes. Aucun pipeline de production ni correction automatique n’est livré.",
    "source": "Documents de référence : notebook amélioré P11, section 3 bis et résultats enregistrés ; documentation, pages 3 à 17 et procédure de prise en main, pages 18 à 20. La comparaison pandas/Pandera et ses limites sont détaillées dans la documentation.",
    "context": "Le P6 contient déjà des contrôles, mais ils sont dispersés. L’amélioration P11 ajoute une étape centralisée avant les analyses, sans refondre les KPI ni corriger silencieusement les données. Le choix est précédé d’un cadrage, d’une veille et de deux prototypes comparables.",
    "facts": [
      [
        "Données",
        "Quatre DataFrames préparés : ERP, liaison, fiches produit web et web nettoyé."
      ],
      [
        "Protocole",
        "Les mêmes dix règles et les mêmes anomalies connues servent de référence pour pandas et Pandera."
      ],
      [
        "Solution intégrée",
        "Une fonction valider_qualite_pandas() retourne un rapport identifié, quantifié et classé en OK, ERREUR ou ALERTE."
      ]
    ],
    "findings": [
      [
        "Comparaison équitable",
        "La documentation rapporte 100 % de correspondance aux références pour les deux prototypes, sans modification des données et avec des résultats reproductibles."
      ],
      [
        "Choix technique",
        "pandas est retenu pour sa simplicité d’intégration et l’absence de dépendance supplémentaire. Pandera reste une option pertinente si le périmètre grandit."
      ],
      [
        "Fonction intégrée",
        "Les sorties enregistrées du notebook montrent 2 règles OK, 4 en ERREUR et 4 en ALERTE, ainsi qu’un contrôle de reproductibilité à True."
      ],
      [
        "Accompagnement",
        "La documentation explique comment lancer le contrôle, lire le rapport, examiner une erreur ou une alerte et faire corriger la donnée à la source. L’usage de l’IA est retracé."
      ]
    ],
    "metrics": [
      {
        "value": "10 / 10",
        "label": "règles conformes aux références · pandas"
      },
      {
        "value": "10 / 10",
        "label": "règles conformes aux références · Pandera"
      },
      {
        "value": "10 + 120",
        "label": "signalements ERREUR + ALERTE dans le notebook"
      }
    ],
    "metricNote": "Les dix règles sont conformes aux anomalies attendues ; cela ne signifie pas que les données sont sans défaut. Les signalements peuvent concerner plusieurs fois un même produit.",
    "technical": {
      "title": "Extrait Python : consulter le rapport qualité",
      "language": "Python · extrait du notebook P11",
      "code": "rapport_qualite = valider_qualite_pandas(\n    df_erp=df_erp_clean,\n    df_liaison=df_liaison_clean,\n    df_web_product=df_web_product,\n    df_web_clean=df_web_clean\n)\n\ndisplay(rapport_qualite[\n    [\"regle_id\", \"source\", \"niveau\", \"nb_anomalies\", \"statut\"]\n])",
      "explanation": "Chaque règle possède un identifiant, une source, un niveau et un nombre d’anomalies. Le rapport rend les problèmes visibles ; l’utilisateur décide ensuite de poursuivre ou de demander une correction à la source."
    }
  },
  {
    "id": "nba-excel",
    "code": "P2",
    "featured": false,
    "category": "bi",
    "label": "Performance<br>sportive",
    "symbol": "↗",
    "sector": "SPORT · EXCEL",
    "title": "NBA - Lire la performance collective",
    "summary": "Comparer équipes et joueurs avec Excel en croisant volume, efficacité et temps de jeu.",
    "tags": [
      "Excel",
      "TCD",
      "Graphiques"
    ],
    "question": "Comment aider un club à lire la performance au-delà du total de points ?",
    "context": "Pour le cas Les Pionniers, le travail s’appuie sur la saison régulière NBA 2024/2025 : 569 joueurs et 30 équipes.",
    "facts": [
      [
        "Périmètre",
        "Lecture collective, zoom équipe et classements individuels."
      ],
      [
        "Indicateurs",
        "Points, rebonds, passes, réussite au tir et indicateur d’impact PIE."
      ]
    ],
    "method": [
      "Comprendre la base et son dictionnaire.",
      "Construire des tableaux croisés dynamiques et des graphiques combinés.",
      "Produire un top 15 des scoreurs et comparer volume et efficacité.",
      "Ajouter un indicateur de points par minute avec un filtre d’au moins 50 matchs."
    ],
    "delivery": "Un classeur Excel de huit feuilles et un support de présentation de 11 slides.",
    "insight": "La recommandation est de croiser production offensive, efficacité et complémentarité des profils, plutôt que de limiter le suivi au score.",
    "limit": "Les données NBA servent de support au cas. Elles ne démontrent pas un effet réel sur le club Les Pionniers ni une validité du classement dans un autre championnat.",
    "source": "Documents de référence : classeur P2 et présentation, slides 3 à 11."
  },
  {
    "id": "assurance-sql",
    "code": "P3",
    "featured": false,
    "category": "quality",
    "label": "Base<br>relationnelle",
    "symbol": "⌘",
    "sector": "ASSURANCE · SQL",
    "title": "Assurance - Structurer et interroger",
    "summary": "Construire une base SQLite et documenter les clés, les imports et les requêtes.",
    "tags": [
      "SQL",
      "SQLiteStudio",
      "Modèle relationnel"
    ],
    "question": "Comment relier les contrats et leur référentiel géographique pour répondre aux questions métier ?",
    "context": "Deux sources CSV décrivent des contrats d’assurance habitation et un référentiel géographique.",
    "facts": [
      [
        "Import",
        "30 335 lignes de contrats et 38 916 lignes géographiques selon les contrôles documentés."
      ],
      [
        "Lien",
        "Code_dep_code_commune relie Contrat au référentiel Region."
      ]
    ],
    "method": [
      "Explorer les champs et formaliser un dictionnaire de données.",
      "Choisir les types et conserver les codes géographiques en texte.",
      "Créer les tables et leurs clés primaires dans SQLiteStudio.",
      "Importer les CSV et contrôler les volumes avant de rédiger les requêtes métier."
    ],
    "delivery": "Un document technique, une liste de requêtes/résultats, une méthodologie et une grille de vérification.",
    "insight": "Le travail montre la préparation nécessaire à des requêtes reproductibles : dictionnaire, schéma, clés et contrôles d’import.",
    "limit": "La relation géographique est modélisée mais la contrainte de clé étrangère n’a pas été activée physiquement dans le projet. L’intégrité référentielle ne doit donc pas être présentée comme garantie par le moteur.",
    "source": "Documents de référence : document technique P3, pages 1 à 7, et documents SQL/méthodologies."
  },
  {
    "id": "crm-minimisation",
    "code": "P4",
    "featured": false,
    "category": "quality",
    "label": "Extraction<br>responsable",
    "symbol": "◈",
    "sector": "DONNÉES CLIENTS · PRÉPARATION",
    "title": "CRM - Réduire et préparer les données",
    "summary": "Limiter une extraction au besoin métier et généraliser les variables trop précises.",
    "tags": [
      "SQL",
      "Power Query",
      "Minimisation"
    ],
    "question": "Comment préparer des données utiles à l’analyse commerciale en limitant l’exposition des informations clients ?",
    "context": "Le cas Dev’Immediat demande une extraction des dossiers complets de 2022, puis une préparation par suppression et généralisation des variables.",
    "facts": [
      [
        "Périmètre",
        "1 158 dossiers complets de 2022 et 13 colonnes finales."
      ],
      [
        "Contrôle",
        "Le CSV livré contient bien 1 158 lignes hors en-tête et 13 colonnes ; aucun enregistrement client n’est publié dans ce portfolio."
      ]
    ],
    "method": [
      "Définir le périmètre temporel et le statut de dossier dans SQL.",
      "Exclure les identifiants directs, les localisations précises, les données sensibles et les tarifs détaillés.",
      "Transformer les dates et les valeurs précises en tranches, classes et mois avec Power Query.",
      "Supprimer les colonnes sources utilisées pour les transformations et vérifier la conservation du nombre de lignes."
    ],
    "delivery": "Une synthèse de recommandations, un rapport de traitement et un CSV préparé.",
    "insight": "Le livrable conserve une valeur analytique tout en réduisant la précision et les informations diffusées. Les transformations et les points de qualité restent documentés.",
    "limit": "La suppression d’identifiants et la généralisation ne suffisent pas, à elles seules, à garantir une anonymisation irréversible. Le cas ne constitue pas une attestation de conformité juridique d’un traitement réel.",
    "source": "Documents de référence : rapport P4, pages 5 à 10, synthèse de recommandations et contrôle structurel du CSV."
  },
  {
    "id": "bestmarket-sql",
    "code": "P5",
    "featured": false,
    "category": "bi",
    "label": "Satisfaction<br>client",
    "symbol": "≋",
    "sector": "RETAIL · SQL",
    "title": "BestMarket - Comprendre les retours clients",
    "summary": "Traduire des questions de satisfaction en requêtes SQL et en priorités de suivi.",
    "tags": [
      "SQL",
      "SQLiteStudio",
      "KPI",
      "NPS"
    ],
    "question": "Quels magasins, produits et canaux de retour méritent une attention prioritaire ?",
    "context": "RetailInsight360 analyse 3 000 retours de 2021. Un référentiel de 84 magasins complète les tables retour_client et produit pour permettre les analyses géographiques.",
    "facts": [
      [
        "Données",
        "3 000 feedbacks, 145 produits et 84 magasins."
      ],
      [
        "Calculs",
        "Notes moyennes, volumes par canal/catégorie, comparaison temporelle, taux de recommandation et NPS."
      ]
    ],
    "method": [
      "Reformuler les questions métier et définir les règles de calcul dans une expression de besoin.",
      "Enrichir la base avec ref_magasin, puis documenter les jointures et le dictionnaire.",
      "Contrôler les clés, les notes 0 à 10, les valeurs nulles et le périmètre temporel.",
      "Croiser notes et volumes pour prioriser les magasins à examiner, plutôt que de classer sur la seule moyenne."
    ],
    "delivery": "Une expression des besoins et une présentation de 20 pages avec requêtes, résultats et recommandations.",
    "insight": "Le NPS global rapporté est de 30,97. Le taux de recommandation de 70,5 % utilise les 3 000 retours au dénominateur ; 674 réponses vides sont signalées. Ces définitions doivent accompagner les chiffres.",
    "limit": "Les feedbacks ne sont pas nécessairement représentatifs de tous les clients. Les volumes faibles et les réponses manquantes limitent la lecture des classements et des taux.",
    "source": "Documents de référence : expression des besoins P5 et présentation, notamment pages 6 à 9 et 12 à 15."
  }
];
function escapeHtml(value){return String(value).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');}
function rowsMarkup(rows){return `<dl class="fact-list">${rows.map(([name,text])=>`<div><dt>${escapeHtml(name)}</dt><dd>${escapeHtml(text)}</dd></div>`).join('')}</dl>`;}
function caseMarkup(p,headingId='case-title'){
 const esc=escapeHtml;
 return `<p class="eyebrow">${esc(p.sector)}</p><h2 id="${headingId}">${esc(p.title)}</h2><p class="lead">${esc(p.question)}</p><div class="tags">${p.tags.map(t=>`<span>${esc(t)}</span>`).join('')}</div>
 ${p.context?`<section class="case-section"><h3>Le besoin métier</h3><p>${esc(p.context)}</p></section>`:''}
 ${p.metrics?`<section class="case-section" aria-label="Repères de l’étude"><div class="case-metrics">${p.metrics.map(m=>`<div><strong>${esc(m.value)}</strong><span>${esc(m.label)}</span></div>`).join('')}</div><p class="metric-note">${esc(p.metricNote)}</p></section>`:''}
 ${p.facts?`<section class="case-section"><h3>Les données et le périmètre</h3>${rowsMarkup(p.facts)}</section>`:''}
 <section class="case-section"><h3>La démarche</h3><ol class="case-method">${p.method.map(m=>`<li>${esc(m)}</li>`).join('')}</ol></section>
 ${p.figure?`<figure class="case-figure"><a href="${esc(p.figure.src)}" target="_blank" rel="noopener" aria-label="Ouvrir le graphique en grand, nouvel onglet"><img src="${esc(p.figure.src)}" alt="${esc(p.figure.alt)}" loading="lazy"></a><figcaption>${esc(p.figure.caption)} <span>Ouvrir en grand ↗</span></figcaption></figure>`:''}
 <div class="case-columns"><section class="case-section"><h3>Les livrables</h3><p>${esc(p.delivery)}</p></section><section class="case-section"><h3>La contribution</h3><p>${esc(p.insight)}</p></section></div>
 ${p.findings?`<section class="case-section"><h3>Résultats et décisions</h3>${rowsMarkup(p.findings)}</section>`:''}
 ${p.technical?`<details class="technical"><summary>${esc(p.technical.title)}</summary><p class="eyebrow">${esc(p.technical.language)}</p><pre tabindex="0" aria-label="Extrait de code"><code>${esc(p.technical.code)}</code></pre><p>${esc(p.technical.explanation)}</p></details>`:''}
 <section class="case-section case-limit"><h3>Le recul méthodologique</h3><p>${esc(p.limit)}</p></section><p class="case-source">${esc(p.source)}</p>`;
}
const grid = document.querySelector('#project-grid');
const dialog = document.querySelector('#case-dialog');
const content = document.querySelector('#case-content');
let opener = null;
function openCase(id,trigger){
 const p=projects.find(p=>p.id===id);if(!p)return;
 if(p.featured===false)document.querySelector('#more-projects').open=true;
 opener=trigger||document.querySelector(`[data-case="${id}"]`);
 content.innerHTML=caseMarkup(p);
 if(!dialog.open)dialog.showModal();
 dialog.scrollTop=0;document.body.classList.add('modal-open');
 document.querySelector('#close-dialog').focus();
}
function closeCase(preserveHash=false){if(!preserveHash&&projects.some(p=>p.id===location.hash.slice(1)))history.replaceState(null,'',location.pathname+location.search+'#projets');dialog.close();}
function route(){const id=location.hash.slice(1);if(projects.some(p=>p.id===id))openCase(id);else if(dialog.open)closeCase(true);}
function cardMarkup(p){return `<article class="card" data-category="${p.category}"><div class="cover ${p.category}" aria-hidden="true"><span class="cover-code">ÉTUDE DE CAS / ${p.code}</span><span class="cover-label">${p.label}</span><span class="cover-symbol">${p.symbol}</span></div><div class="card-body"><p class="eyebrow">${escapeHtml(p.sector)}</p><h3>${escapeHtml(p.title)}</h3><p>${escapeHtml(p.summary)}</p><div class="tags">${p.tags.map(t=>`<span>${escapeHtml(t)}</span>`).join('')}</div><button class="open-case" data-case="${p.id}" aria-haspopup="dialog" aria-label="Lire l’étude de cas ${escapeHtml(p.title)}">Lire l’étude de cas <span aria-hidden="true">↗</span></button></div></article>`;}
if(grid){
 grid.innerHTML=projects.filter(p=>p.featured!==false).map(cardMarkup).join('');
 document.querySelector('#complementary-grid').innerHTML=projects.filter(p=>p.featured===false).map(cardMarkup).join('');
 document.addEventListener('click',e=>{const b=e.target.closest('[data-case]');if(b){history.pushState(null,'','#'+b.dataset.case);openCase(b.dataset.case,b);}});
 document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{
  document.querySelectorAll('[data-filter]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));
  let n=0;grid.querySelectorAll('.card').forEach(c=>{c.hidden=b.dataset.filter!=='all'&&c.dataset.category!==b.dataset.filter;if(!c.hidden)n++;});
  document.querySelector('#filter-status').textContent=`${n} projet${n>1?'s':''} ${n>1?'principaux':'principal'} affiché${n>1?'s':''}`;
 }));
 document.querySelector('#close-dialog').addEventListener('click',()=>closeCase());
 dialog.addEventListener('cancel',e=>{e.preventDefault();closeCase();});
 dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closeCase();}});
 dialog.addEventListener('close',()=>{if(!dialog.open){document.body.classList.remove('modal-open');opener?.focus();}});
 window.addEventListener('hashchange',route);route();
}
