// Screens
let inputNameDiv = document.getElementsByClassName("name-input-div")[0];
let gameOptionsDiv = document.getElementById("game-options-div");
let introScreenDiv = document.getElementById("intro-screen-div");
let playGameDiv = document.getElementById("play-game-screen");


// Buttons
let introScreenBtn = document.getElementById("intro-screen-btn");
let nameInputScreenBtn = document.getElementById("name-input-btn");
let playBtn = document.getElementById("play-btn");
let homeBtn = document.getElementsByClassName("home-btn");
let nextQBtn = document.getElementById("next-question-btn");
let skipQBtn = document.getElementById("skip-question-btn");

// Global variables
let gameDifficulty;
let gameLength;
let questionsAnswered = 0;


// Define language arrays
const options = {
    "French": {
        "easy": ["le peuple", "le temps", "l'année", "la chose", "le chemin", "le jour", "l'homme", "l'état", "le lot", "la femme", "le pays", "la vie", "la question", "le président", "l'enfant", "la semaine", "monde ", "le genre", "le cas", "le problème", "le fait", "la famille", "l'histoire", "le point", "le gouvernement", "l'argent", "la question", "la partie", "Le matin", "le gars", "le nombre", "le travail", "la nuit", "le droit", "l'école", "le lieu", "la guerre", "l'enfant", "le mois", "le livre", "l'heure", "le spectacle", "la police", "le programme", "la partie", "la loi", "le mot", "la personne", "la maison", "l'entreprise", "l'ami", "l'entreprise", "le côté", "la taxe", "le démocrate", "le groupe", "Actuellement ", "la pause", "l'idée", "le membre", "le système", "la minute", "la raison", "la campagne", "l'oeuvre", "la nation", "le congrès", "la mère", "la force", "la santé", "l'arrière", "la zone", "le nom", "le rapport", "la main", "la ligne", "la fin", "le tribunal", "les soins", "le couple", "la maison", "l'américain", "le père", "la situation", "la voiture", "le parent", "l'administration", "le médicament", "la ville", "le sens", "la politique", "le bureau", "la décision", "la puissance", "le plan", "le leader", "les informations", "l'élection", "le film", "la mort", "l'air", "l'appel", "la communauté", "le look", "la preuve", "la jeune", "le médecin", "le vote", "la vidéo", "l'image", "la chambre", "le bit", "l'économie", "le téléphone", "l'histoire", "le genre", "le garçon", "le crime", "le processus", "l'épouse", "la musique", "l'eau", "le service", "le dossier", "la sécurité", "le discours", "l'esprit", "la tête", "le candidat", "le fonctionnaire", "l'appareil", "l'étudiant", "l'attaque", "la chance", "le jeu", "le bébé", "sud ", "le changement", "le procès", "le corps", "le marché", "l'étoffe", "l'intérêt", "l'arme", "cœur ", "le fils", "l'équipe", "la ville", "la télévision", "la volonté", "la troupe", "le juge", "l'action", "la réponse", "la position", "la vue", "la différence", "la nourriture", "la fille", "la course", "l'accord", "la rue", "le prix", "le message", "le contrôle", "le débat", "l'agent", "le film", "le niveau", "l'effort", "la relation", "le correspondant", "le sol", "la pièce", "le mari", "le budget", "le jury", "le journaliste", "le week-end", "la matière", "l'âge", "le pistolet", "la paix", "l'assassiner", "le rôle", "l'enquête", "l'expérience", "l'hôpital", "l'oeil", "le directeur", "l'avenir", "le visage", "l'huile", "le résultat", "le public", "l'avocat", "le scrutin", "la seconde", "la possibilité", "l'industrie", "le frère", "la déclaration", "le feu", "l'amour", "le taux", "l'effet", "la chanson", "l'événement", "la charge", "le support", "la radio", "bâtiment ", "la banque", "la victime", "la porte", "l'interview", "la scène", "le reste", "la presse", "l'attention", "le choix", "le discours", "le patient", "la vérité", "la route", "le terme", "le site", "le travailleur", "le professeur", "la lettre", "la réforme", "la préoccupation", "les gens", "sexe ", "l'étude", "le collège", "l'électeur", "le mur", "le soir", "la réunion", "la voix", "l'auditoire", "la violence", "la règle", "l'étoile", "le test", "l'éducation", "la peine", "le risque", "la prison", "l'invité", "la classe", "de la", "le soldat", "le plan", "la quantité", "l'aide", "le coût", "l'autorité", "le pied", "la période", "le sentiment", "l'étape", "la cause", "la bande", "la menace", "l'opinion", "l'organisation", "le type", "la conversation", "la maladie", "l'opération", "le cancer", "le magazine", "le gouverneur", "la pression", "la majorité", "la recherche", "le caractère", "la station", "la crise", "l'expert", "le sang", "le président", "l'argument", "la liste", "le chien", "l'ordinateur", "début ", "l'assurance", "le domaine", "la sœur", "l'erreur", "le joueur", "l'énergie", "le papier", "l'espace", "la boutique", "l'accord", "la responsabilité", "la dame", "l'ordre", "l'été", "le produit", "la valeur", "le stock", "l'intelligence", "l'enseignant", "l'agence", "le commerce", "la conférence", "la cellule", "l'église", "le commentaire", "la source", "le passé", "la coupe", "la pensée", "le crédit", "l'espoir", "le signe", "de la", "le mariage", "la condition", "le témoin", "la technologie", "la scène", "le personnel", "le bras", "la mission", "l'art", "l'acteur", "la bataille", "le haut", "le citoyen", "l'auteur", "la réaction", "le monsieur", "la direction", "la peur", "l'exemple", "la langue", "la nécessité", "la justice", "la discussion", "la frontière", "l'animal", "détail ", "la réaction", "le réseau", "le mouvement", "l'utilisation", "le mâle", "la capitale", "l'audience", "la norme", "l'avantage", "la table", "le traitement", "l'agent", "la carte", "le tir", "le conseil", "la réalité", "le monsieur", "la terre", "le projet", "la lumière", "l'image", "siècle ", "la page", "le succès", "le son", "l'impact", "la douleur", "la saison", "l'individu", "le sport", "le studio", "la décennie", "le défi", "le rêve", "le journal", "le plancher", "la lutte", "la sécurité", "l'acte", "le voyage", "cours ", "la possibilité", "la liberté", "le fonds", "le siège", "la bombe", "la forme", "l'exécutif", "le ministre", "le déficit", "le développement", "le vol", "le secrétaire", "le comité", "le consommateur", "la roche", "la figure", "l'objet", "la culture", "les cheveux", "la couverture", "la perte", "le papa", "la note", "l'activité", "l'objectif", "l'option", "le gaz", "la région", "la population", "la capacité", "la résolution", "l'employé", "le cerveau", "le politicien", "le milieu", "la tempête", "la génération", "le critique", "le ventilateur", "le scientifique", "la cible", "le camp", "L'après-midi", "la direction", "science ", "le journaliste", "le degré", "l'affaire", "les dommages", "la stratégie", "le facteur", "l'usine", "la démocratie", "du doute", "la solution", "les dépenses", "la formation", "l'abus", "le danger", "l'environnement", "la mémoire", "la nature", "le matériau", "le document", "le revenu", "l'analyste", "le jeu", "la garde", "l'hôtel", "l'éditeur", "le missile", "l'accident", "le but", "l'écrivain", "la situation", "la croissance", "le lit", "le bien-être", "l'adulte", "la foi", "la proposition", "le modèle", "l'armée", "l'incident", "la boîte", "la foule", "le respect", "le département", "l'accès", "la date", "le chef", "le temps", "l'aéroport", "la machine", "la fenêtre", "l'ordre", "les conseils", "la poursuite", "le conflit", "la chute", "le pilote", "la pratique", "la piste", "le propriétaire", "l'augmentation", "la législation", "l'arbre", "la dette", "l'ennemi", "le camion", "la tête", "la convention", "l'aide", "le suicide", "la qualité", "le conservateur", "la taille", "le compte", "le plaisir", "l'institution", "la compagnie", "le poids", "l'approche", "la chirurgie", "la fête", "le début", "la victoire", "le quartier", "la relation", "la recherche", "l'équipage", "le panneau", "la coalition", "le déménagement", "l'emballage", "le chèque", "la minorité", "l'unité", "le sac", "la surprise", "la mise", "la circonstance", "le producteur", "l'investissement", "la balle", "collègue ", "la ressource", "le jugement", "l'arrière-plan", "l'union", "l'adresse", "le conducteur", "le héros", "la médecine", "le représentant", "le véhicule", "le commandant", "l'artiste", "le maire", "la course", "le navire", "la théorie", "l'écran", "la leçon", "le résident", "le partenaire", "la barre", "le billet", "la catastrophe", "la performance", "Supporter ", "le tueur", "la négociation", "la mer", "le vent", "la chaussure", "le secret", "la tragédie", "le don", "la tournée", "le gestionnaire", "la bande", "la naissance", "l'hôte", "le prêt", "l'allégation", "le gagnant", "la religion", "l'article", "la session", "l'être", "la mesure", "le contrat", "la phrase", "la mesure", "le vice-", "la confiance", "l'enfer", "le relief", "la perspective", "l'avantage", "le scandale", "la jambe", "le restaurant", "dîner ", "le client", "l'échec", "le trimestre", "l'élément", "la demande", "la propriété", "la version", "la tentative", "le bus", "le client", "l'appel", "la livre", "la protection", "le gène", "la pierre", "l'opposition", "l'appartement", "l'avant", "la femelle", "le prisonnier", "noir ", "le gang", "le principe", "l'allié", "le conseiller", "la visite", "l'oiseau", "le support", "la communication", "le bateau", "la connexion", "la clé", "la grève", "la peine", "l'avertissement", "La chance", "l'ADN", "l'esprit", "le tour", "l'installation", "l'adolescent", "l'engagement", "l'article", "la procédure", "la moitié", "le réservoir", "le téléphone", "l'offre", "l'attitude", "le bloc", "le lien", "le style", "le foot", "le carburant", "les données", "le verre", "le costume", "la force", "la critique", "la glace", "l'équipement", "la promesse", "le retour", "l'album", "la production", "le coin", "la conséquence", "les vivants", "la blessure", "le couvercle", "place ", "la poitrine", "printemps ", "la controverse", "la destruction", "l'aspect", "le club", "l'avion", "l'entreprise", "le régime", "la compétition", "le bénéfice", "la connaissance", "le porte-parole", "l'examen", "la compréhension", "la récession", "le chanteur", "le village", "l'arrestation", "la neige", "la blague", "l'or", "le contact", "la demande", "la tâche", "le trou", "le grand", "la peau", "le décompte", "l'adversaire", "la conclusion", "la priorité", "viol ", "le réfugié", "la montagne", "la commission", "le code", "la limite", "le train", "la zone", "le passager", "le trafic", "la tradition", "l'inspecteur", "la difficulté", "le crash", "l'influence", "l'analyse", "le virus", "la notion", "le contexte", "l'apparence", "l'investisseur", "le mystère", "la vision", "l'explosion", "la structure", "l'amendement", "l'assaut", "le titre", "l'employeur", "la personnalité", "l'indication", "le secteur", "la contribution", "l'annonce", "la cigarette", "le territoire", "la commande", "la protestation", "l'impression", "la faute", "la variété", "l'alcool", "la section", "le signal", "le volontaire", "le gain", "la planète", "la rivière", "l'identité", "la clinique", "le divorce", "la phrase", "la collection", "l'occasion", "la surface", "le musicien", "le concept", "la tension", "l'approbation", "la beauté", "la copie", "la mine", "la fraude", "la catégorie", "l'exercice", "la conviction", "l'initiative", "la technique", "la passion", "les funérailles", "l'instrument", "la distance", "l'anniversaire", "l'invasion", "le compromis", "la forêt", "l'expérience", "le talent", "le poste", "la division", "le score", "la colonne", "la transition", "la capacité", "la poche", "le concert", "le climat", "le satellite", "l'humain", "la combinaison", "l'explication", "la chaîne", "la capacité", "le stimulus", "la construction", "l'intention", "la danse", "l'offre", "l'obligation", "le touriste", "la punition", "les tests", "l'instance", "l'inflation", "le drame", "le salaire", "la bible", "le dialogue", "la substance", "le personnel", "la tactique", "l'objectif", "la température", "le symbole", "le musée", "le profil", "la suggestion", "le consultant", "le motif", "le port", "le potentiel", "le parlement", "le concours", "l'atmosphère", "la branche", "l'estimation", "le symptôme", "la discrimination", "la recommandation", "le rebelle", "la remarque", "le ton", "l'importance", "l'exception", "la plate-forme", "la perception", "la manière", "le jet", "la plaque", "le privilège", "le contenu", "l'inspection", "l'incitation", "l'erreur", "la phase", "la philosophie", "la conduite", "le cycle", "le boom", "l'historien", "la paire", "l'excuse", "le chocolat", "la fortune", "l'univers", "la routine", "la marge", "l'objet", "la guitare", "le silence", "le miroir", "l'expression", "le muscle", "le chapitre", "le guide", "le volume", "le match", "le fantasme", "le composé", "l'infection", "la masse", "la discipline", "le fruit", "le visiteur", "l'application", "la recette", "la survie", "le champion", "l'uniforme", "l'arrangement", "la stabilité", "la restriction", "le total", "la barrière", "le cousin", "l'occupation", "l'observateur", "la description", "la chambre", "l'horreur", "l'implication", "l'essence", "le raid", "la distinction", "le coup", "le policier", "l'habitude", "l'entreprise", "la pop", "la liberté", "la fiction", "l'intervention", "le chrétien", "le pot", "le tube", "l'organe", "la comparaison", "l'emploi", "la passe", "la confusion", "le commissaire", "la flamme", "l'entrée", "l'exposition", "le nerf", "le pack", "l'instruction", "l'assistant", "l'objection", "la province", "le passage", "l'existence", "l'alliance", "la profession", "la sympathie", "le composant", "la pension", "le garage", "l'indice", "le partenariat", "la reconnaissance", "le statut", "le tissu", "le capitaine", "le rang", "le prix", "le rat", "le ministère", "le diamant", "la finition", "l'admission", "le laboratoire", "le professionnel", "le texte", "la dose", "la panique", "le net", "le mineur", "l'imagination", "l'unité", "l'ingrédient", "la batterie", "le tunnel", "l'excitation", "l'alarme", "le championnat", "le portrait", "le mythe", "l'essai", "le contraste", "l'observation", "l'ange", "le bonus", "la possession", "la littérature", "l'engagement", "la motivation", "l'instinct", "le complexe", "la subvention", "l'interprétation", "le tournoi", "le diagnostic", "l'exportation", "la croix", "l'examen", "l'empire", "la formule", "la limitation", "la compensation", "l'invitation", "l'ambulance", "le temple", "le constituant", "la concession", "le consentement", "le carbone", "le forum", "le transfert", "la distribution", "l'expansion", "le blanchet", "l'arrivée", "l'enveloppe", "le geste", "l'ambition", "le spectre", "l'enthousiasme", "l'absence", "l'oxygène", "la pollution", "l'extension", "le participant", "l'architecte", "l'angle", "la charte", "la représentation", "l'identification", "la concentration", "la norme", "le rival", "le tribunal", "le grain", "la proportion", "la loyauté", "la publication", "la participation", "la toilette", "l'attraction", "le lion", "le palais", "la protéine", "l'acceptation", "l'accent", "les membres", "l'expertise", "l'Assemblée", "la logique", "la dimension", "le rail", "la transaction", "le festival", "l'horizon", "le sandwich", "la paroisse", "la pile", "l'origine", "le circuit", "l'introduction", "le mode", "l'entité", "le kit", "la psychologie", "la flexibilité", "le continent", "la brique", "l'indicateur", "la promotion", "l'assurance", "la proposition", "le minimum", "le collecteur", "le capitalisme", "la conscience", "le coton", "le patch", "l'importation", "l'isolement", "l'entrée", "l'agriculture", "la transformation", "le menu", "le triomphe", "la consommation", "la satisfaction", "le calcul", "le remède", "le certificat", "l'efficacité", "l'interaction", "la cabine", "la gloire", "la productivité", "l'acide", "le serviteur", "le sergent", "le stockage", "la fraction", "l'innovation", "le moteur", "le format", "la particule", "la trace", "le fluide", "la doctrine", "la pause", "la sensation", "le dividende", "le monopole", "la galerie", "le taxi", "la discrétion", "la quantité", "la justification", "le successeur", "la consultation", "la qualification", "l'automne", "le compagnon", "la formation", "l'intégration", "la complexité", "l'insecte", "le transport", "la mortalité", "la restauration", "la variation", "la composition", "la probabilité", "la libération", "l'organisme", "la conservation", "la sculpture", "le champagne", "l'architecture", "l'université", "la fibre", "le connétable", "le programme", "le mile", "la figue", "la photographie", "l'interface", "la photo", "la colonie", "l'humour", "la rose", "la faveur", "la terrasse", "l'association", "le colonel", "l'mrs", "la constitution", "l'honneur", "le parc", "le magistrat", "les ms", "le favori", "le pensionné", "la rumeur", "les aides", "l'cm", "l'illustration", "l'avenue", "la miss", "la classification", "la redondance", "le chap", "l'école", "le centre", "l'organisation", "le critère", "l'enquête", "le tuteur", "la princesse", "la co", "la licence", "la procédure", "la tonne", "l'millions", "la marque", "la vallée", "la villa", "l'abbaye", "la sociologie", "le prince", "le dollar", "le bureau", "l'institut", "le corp", "le catalogue", "le mm", "l'archevêque", "l'intérieur", "le verset", "le pc", "l'installation", "le portefeuille", "la clause", "le discours", "le disque", "le minéral", "l'addition", "la machine", "le canal", "la disposition", "le refus", "le domaine", "le registre", "l'audit", "l'acquisition", "l'autonomie", "la modification", "le fragment", "la conversion", "le vendeur", "le praticien", "le filtre", "l'incidence", "la contrainte", "le disque", "le dictionnaire", "la conception", "la molécule", "la succession", "la chapelle", "la durée", "la corrélation", "l'exclusion", "l'hypothèse", "la lampe", "la sphère", "le chancelier", "l'empereur", "la directive", "l'allocation", "l'auditeur", "le serveur", "la cathédrale", "la pitié", "la variable", "le cinéma", "la densité", "le processeur", "la grammaire", "le module", "la pupille", "l'intervalle", "le diagramme"],
        "medium": ["le sommet", "le fond", "la gestion", "la gamme", "l'argent", "la bouche", "la présence", "la part", "la mode", "la forme", "Le président", "le doigt", "le poisson", "l'édition", "le bord", "la croyance", "l'équilibre", "l'échange", "la ferme", "le mensonge", "le devoir", "le cheval", "la récupération", "le fichier", "l'anniversaire", "de la", "la réglementation", "la lutte", "la chaleur", "la robe", "la libération", "l'hiver", "le thème", "le dispositif", "la colère", "les Anglais", "le drapeau", "l'aile", "les combats", "le motif", "l'animation", "l'économie", "le pont", "le règlement", "la pluie", "le bois", "l'e-mail", "l'agriculteur", "la prière", "la dépression", "le défendeur", "la réflexion", "la thérapie", "l'infirmière", "le trajet", "le financement", "l'outil", "le boîtier", "la boutique", "la plainte", "la vague", "le chat", "la carte", "la preuve", "l'émotion", "la compétence", "la confiance", "le sujet", "la salle", "l'armoire", "l'os", "l'âme", "le poulet", "l'emplacement", "le haut-parleur", "le salaire", "l'ère", "la demande", "le patron", "l'entraîneur", "la succession", "l'œuf", "l'enjeu", "la butée", "l'anneau", "le choc", "la cuisine", "l'île", "la côte", "de la", "les recettes", "la cloche", "le café", "déjeuner ", "l'attente", "la note", "l'alimentation", "l'oreille", "le ciel", "l'aide", "la contrainte", "Subsidiairement ", "le chercheur", "le câble", "l'ouverture", "la plage", "la charge", "le détective", "jouet ", "l'actif", "la piscine", "la tendance", "l'enquête", "l'océan", "la joie", "le retard", "la cour", "la pointe", "le soleil", "la ligne", "la valeur", "la cravate", "le résultat", "le boursier", "la victime", "la montre", "sommeil ", "la moyenne", "le Voyage", "l'enregistrement", "la vue", "la réduction", "l'ensemble", "la société", "les jeunes", "le désert", "l'écriture", "la maladie", "la déchirure", "la porte", "le parcours", "l'écart", "le prêtre", "le roman", "le désir", "le chapeau", "l'hypothèque", "la réputation", "l'épaule", "le parent", "le paiement", "le prix", "la définition", "la vitesse", "l'indice", "la bière", "le nez", "le vert", "le jardin", "la cérémonie", "la découverte", "le trajet", "la racine", "le thé", "le mouvement", "le pourcentage", "l'échelle", "le jumeau", "le concessionnaire", "toucher ", "le voyage", "le délégué", "le lien", "la matière", "le bouchon", "le rouleau", "le différend", "l'humeur", "la conception", "l'enfance", "le moteur", "la durée", "le cauchemar", "le repas", "l'avance", "l'organisme", "l'usine", "la graisse", "le sel", "le cou", "la chambre", "l'épisode", "l'ingénieur", "la perspective", "les courses", "la fumée", "la viande", "la cale", "départ à", "le bureau", "la subvention", "la démonstration", "le noyau", "le traité", "l'échantillon", "le procédé", "le bruit", "la fleur", "la tasse", "la révolution", "le goût", "l'itinéraire", "la dent", "le lecteur", "le trouble", "le sucre", "la hausse", "la puce", "la chemise", "le calendrier", "la participation", "ciel ", "la promenade", "l'opérateur", "la ronde", "le fabricant", "le vin", "le désordre", "la résistance", "le couteau", "la taxe", "le maître", "le cercle", "la signification", "l'évaluation", "dépens ", "l'intrigue", "la salle", "la marque", "la peinture", "le toit", "la boisson", "l'interdiction", "le produit", "le français", "piano ", "la bouteille", "les déchets", "l'étiquette", "l'horloge", "la crème", "les bons", "l'électricité", "l'évêque", "le lecteur", "la grossesse", "la ligue", "l'animal", "la fondation", "la tour", "la fonction", "le retrait", "le souffle", "la fissure", "le fabricant", "le spécialiste", "la référence", "l'histoire", "la fourniture", "le fil", "la spéculation", "la célébration", "le fromage", "la salle", "la fonction", "le canal", "le sourire", "le lait", "l'exigence", "le soupçon", "le ménage", "la constatation", "la poitrine", "l'examen", "la bibliothèque", "le préjudice", "le bouton", "l'amélioration", "la baisse", "la nomination", "l'homme", "le flux", "le métal", "le présent", "le support", "le sort", "le nuage", "la bande", "la chaîne", "la négociation", "l'astuce", "le genou", "l'estomac", "la hauteur", "le projet", "l'étranger", "le poème", "le phénomène", "la clôture", "les vêtements", "la culpabilité", "l'impression", "la pomme", "la lune", "l'ours", "la plaie", "la fierté", "l'argent", "le gâteau", "poumon ", "la roue", "l'air", "la mise", "le secteur", "la pomme", "l'acier", "la gorge", "l'allemand", "la lèvre", "le calendrier", "la perspicacité", "le passage", "la feuille", "le délinquant", "minuit ", "l'exécution", "l'angoisse", "la bande"],
        "hard": ["l'émerveillement", "l'ombre", "la création", "la commercialisation", "la pêche", "le petit", "la détermination", "le sable", "l'autorisation", "la ligne", "la honte", "l'émeute", "l'utilisateur", "la station", "le concepteur", "le pain", "le souhait", "l'amant", "la veste", "la loi", "le rythme", "le cadre", "la garantie", "l'hypothèse", "le diplômé", "la salle", "la victoire", "l'opéra", "l'amitié", "le cochon", "le second", "la longueur", "la vache", "l'effondrement", "l'agenda", "le savant", "le confort", "la préparation", "le cristal", "l'engrenage", "la course", "la baisse", "la réalisation", "la fourniture", "l'éditeur", "le plat", "l'inquiétude", "l'aventure", "la culture", "le coup", "l'amour", "le péché", "le rayonnement", "le jus", "le réglage", "le légume", "la poésie", "le moi", "la coquille", "la tombe", "sexe ", "la pénurie", "le manteau", "la graine", "le sol", "la rive", "la défaite", "l'avis", "la chaussure", "le tableau", "l'obscurité", "la récompense", "le nourrisson", "la douche", "le greffier", "la délégation", "l'oncle", "l'affectation", "la monnaie", "la démission", "l'acheteur", "le vélo", "la souris", "le poète", "le paysage", "la sélection", "le cri", "la séparation", "l'affichage", "l'invalidité", "le compteur", "le beurre", "le bâton", "l'ingénierie", "le froid", "charbon ", "la queue", "le mécanisme", "le régime", "la présentation", "l'apprentissage", "l'enseignement", "le pont", "la créature", "le fonctionnement", "la faiblesse", "le bleu", "l'incertitude", "l'enquête", "la poussière", "pic ", "l'aiguille", "la feuille", "le lancement", "le rire", "le congé", "l'herbe", "le fer", "le concurrent", "la fève", "le pôle", "le récipient", "l'offre", "l'atterrissage", "le tuyau", "la hanche", "le terrain", "la revue", "le plafond", "la prise", "le baiser", "le remplacement", "le canard", "le diable", "la déclaration", "l'importance", "finale ", "la prime", "le tapis", "la prémisse", "le patrimoine", "l'étagère", "l'astuce", "le rythme", "le passif", "le talon", "la couche", "la souche", "le mérite", "le jeune", "la profondeur", "le royaume", "la boue", "la réflexion", "la réserve", "la chasse", "les meubles", "la résidence", "le clou", "le dessin", "le stylo", "la préférence", "l'équipe", "la serrure", "le banc", "la corde", "l'objectif", "le flux", "l'évolution", "la compétence", "l'idéologie", "la marée", "la propagation", "la déception", "le fou", "la fusion", "l'échappement", "l'actionnaire", "la circonscription", "la peinture", "le fantôme", "le métier", "la coutume", "la falaise", "la poignée", "l'exactitude", "le vol", "la veuve", "l'odeur", "le départ", "la réparation", "le résumé", "la limite", "l'équivalent", "le titulaire", "la gauche", "la séquence", "la fosse", "le bol", "l'achat", "le demandeur", "la tante", "l'équité", "la charge", "la portée", "l'obscurité", "la fermeture", "la propriété", "le défenseur", "la décote", "l'équation", "la vertu", "le formateur", "le commerçant", "le bain", "le vendeur", "le choc", "la caractéristique", "la pièce", "la langue", "le panier", "le cadre", "l'interrupteur", "le loyer", "la courbe", "la nécessité", "la place", "l'entreprise", "la vapeur", "le mouton", "la brosse", "la base", "le dépôt", "l'ajustement", "le gardien", "le rideau", "la flotte", "la voie", "la piscine", "l'émission", "le tissu", "le moyen", "Pâques ", "la réception", "l'évaluation", "le moulin", "l'exposition", "la somme", "la contrepartie", "la position", "le programme", "le développeur", "l'élimination", "la conférence", "la chair", "le commerçant", "le chouchou", "le peintre", "le mélange", "la violation", "l'ascenseur", "l'étang", "la joue", "l'enregistrement", "le fournisseur", "le matériel", "le cuir", "le lapin", "paragraphe ", "l'essentiel", "le couloir", "l'atelier", "l'ombre", "le comptable", "l'épée", "la dépense", "l'entrée", "la tige", "la jupe", "la pente", "le nid", "la couronne", "la participation", "le conseil", "le milliard", "le feu", "la merde", "la terre", "la durée", "la cuve", "l'acheteur", "la marine", "l'auberge", "l'aigle", "la main-", "le prochain", "le rouge", "les ordures", "l'île", "la brousse", "le lac", "le jeune", "le jugement", "la maman", "la baie", "l'arrondissement", "la république", "la colline", "le Juif", "le dieu", "le trésor", "le blanc", "le placard", "l'appartement", "la douzaine", "le chèque", "la jonction", "la centaine", "le conseiller", "le pouce", "le papa", "toire ", "l'autre", "unix ", "le comté", "le pour", "le voyageur", "acre ", "le regard", "le pape", "le constructeur", "l'appareil", "la momie", "la fourgonnette", "le roi", "le comportement", "le projet", "l'avocat", "l'annexe", "la télé", "l'attribution", "le port", "whisky ", "le mille", "la défense", "la reine", "la république", "le duc", "la spécification", "le camion", "le pas", "l'infraction", "la fédération", "la couleur", "théâtre ", "mp ", "l'arbitre", "le seigneur", "l'escalier", "le comte", "l'essence", "le répertoire", "la fréquence", "le séminaire", "la réception", "la race", "la mesure", "la paume", "le quai", "l'inconvénient", "la publicité", "la mise", "le bois", "la lame", "le rapport", "le contour", "local ", "la disponibilité", "la soie", "la poutre", "l'hébergement", "le demandeur", "l'étain", "le locataire", "le plus", "la médaille", "la porte", "le bail", "le tissu", "la pépinière", "le créancier", "l'imposition", "le syndic", "la tenue", "le chalet", "le propriétaire", "la chaleur", "le sort", "le loisir", "le règne", "la réponse", "le château", "la hiérarchie", "pub ", "le paysan", "la sortie", "le regard", "l'échantillon", "la thèse", "le travail", "le chêne", "le chiffre", "le bac", "l'argile", "le chariot", "la notice", "cuivre ", "la filiale", "le licenciement", "l'achèvement", "le paquet", "la laine", "l'en-tête", "le trottoir", "le récepteur", "la voie", "le grillon", "l'imprimante", "le bâtard"]
    },
    "English": {
        "easy": ["people", "time", "year", "thing", "way", "day", "man", "state", "lot", "woman", "country", "life", "question", "president", "child", "week", "world", "kind", "case", "problem", "fact", "family", "story", "point", "government", "money", "issue", "part", "morning", "guy", "number", "job", "night", "right", "school", "place", "war", "kid", "month", "book", "hour", "show", "police", "program", "party", "law", "word", "person", "home", "business", "friend", "company", "side", "tax", "democrat", "group", "moment", "break", "idea", "member", "system", "minute", "reason", "campaign", "work", "nation", "congress", "mother", "force", "health", "back", "area", "name", "report", "hand", "line", "end", "court", "care", "couple", "house", "american", "father", "situation", "car", "parent", "administration", "drug", "city", "sense", "policy", "office", "decision", "power", "plan", "leader", "information", "election", "movie", "death", "air", "call", "community", "look", "evidence", "girl", "doctor", "vote", "video", "picture", "room", "bit", "economy", "phone", "history", "sort", "boy", "crime", "process", "wife", "music", "water", "service", "record", "security", "talk", "mind", "head", "candidate", "official", "camera", "student", "attack", "chance", "game", "baby", "south", "change", "trial", "body", "market", "stuff", "interest", "weapon", "heart", "son", "team", "town", "television", "will", "troop", "judge", "action", "answer", "position", "view", "difference", "food", "daughter", "race", "deal", "street", "price", "message", "control", "debate", "officer", "film", "level", "effort", "relationship", "correspondent", "ground", "piece", "husband", "budget", "jury", "reporter", "weekend", "matter", "age", "gun", "peace", "murder", "role", "investigation", "experience", "hospital", "eye", "director", "future", "face", "oil", "result", "public", "lawyer", "poll", "second", "opportunity", "industry", "brother", "statement", "fire", "love", "rate", "effect", "song", "event", "charge", "support", "radio", "building", "bank", "victim", "door", "interview", "scene", "rest", "press", "attention", "choice", "speech", "patient", "truth", "road", "term", "site", "worker", "professor", "letter", "reform", "concern", "folk", "sex", "study", "college", "voter", "wall", "evening", "meeting", "voice", "audience", "violence", "rule", "star", "test", "education", "trouble", "risk", "prison", "guest", "class", "society", "soldier", "plane", "amount", "help", "cost", "authority", "foot", "period", "feeling", "step", "cause", "tape", "threat", "opinion", "organization", "type", "conversation", "disease", "operation", "cancer", "magazine", "governor", "pressure", "majority", "research", "character", "station", "crisis", "expert", "blood", "chairman", "argument", "list", "dog", "computer", "beginning", "insurance", "field", "sister", "mistake", "player", "energy", "paper", "space", "store", "agreement", "responsibility", "lady", "order", "summer", "product", "value", "stock", "intelligence", "teacher", "agency", "trade", "conference", "cell", "church", "comment", "source", "past", "cut", "thought", "credit", "hope", "sign", "career", "marriage", "condition", "witness", "technology", "stage", "staff", "arm", "mission", "art", "actor", "battle", "top", "citizen", "author", "reaction", "gentleman", "leadership", "fear", "example", "language", "need", "justice", "discussion", "border", "animal", "detail", "response", "network", "movement", "use", "male", "capital", "hearing", "standard", "benefit", "table", "treatment", "agent", "card", "shot", "board", "reality", "sir", "land", "project", "light", "image", "century", "page", "success", "sound", "impact", "pain", "season", "individual", "sport", "studio", "decade", "challenge", "dream", "newspaper", "floor", "fight", "safety", "act", "trip", "course", "possibility", "freedom", "fund", "seat", "bomb", "form", "executive", "minister", "deficit", "development", "flight", "secretary", "committee", "consumer", "rock", "figure", "subject", "culture", "hair", "coverage", "loss", "dad", "note", "activity", "goal", "option", "gas", "region", "population", "ability", "resolution", "employee", "brain", "politician", "middle", "storm", "generation", "critic", "fan", "scientist", "target", "camp", "afternoon", "direction", "science", "journalist", "degree", "affair", "damage", "strategy", "factor", "plant", "democracy", "doubt", "solution", "spending", "training", "abuse", "danger", "environment", "memory", "nature", "material", "document", "income", "analyst", "play", "guard", "hotel", "editor", "missile", "accident", "purpose", "writer", "emergency", "growth", "bed", "welfare", "adult", "faith", "proposal", "model", "army", "incident", "box", "crowd", "respect", "department", "access", "date", "chief", "weather", "airport", "machine", "window", "agenda", "advice", "prosecution", "conflict", "fall", "pilot", "practice", "track", "owner", "increase", "legislation", "tree", "debt", "enemy", "truck", "lead", "convention", "aid", "suicide", "quality", "conservative", "size", "account", "pleasure", "institution", "airline", "weight", "approach", "surgery", "holiday", "start", "victory", "district", "relation", "search", "crew", "panel", "coalition", "move", "package", "check", "minority", "unit", "bag", "surprise", "focus", "circumstance", "producer", "investment", "ball", "colleague", "resource", "judgment", "background", "union", "address", "driver", "hero", "medicine", "representative", "vehicle", "commander", "artist", "mayor", "run", "ship", "theory", "screen", "lesson", "resident", "partner", "bar", "ticket", "disaster", "performance", "supporter", "killer", "negotiation", "sea", "wind", "shoe", "secret", "tragedy", "gift", "tour", "manager", "band", "birth", "host", "loan", "allegation", "winner", "religion", "article", "session", "being", "extent", "contract", "sentence", "measure", "deputy", "confidence", "hell", "relief", "perspective", "advantage", "scandal", "leg", "restaurant", "dinner", "client", "failure", "quarter", "element", "claim", "property", "version", "attempt", "bus", "customer", "appeal", "pound", "protection", "gene", "stone", "opposition", "apartment", "front", "female", "prisoner", "black", "gang", "principle", "ally", "adviser", "visit", "bird", "stand", "communication", "boat", "connection", "key", "strike", "penalty", "warning", "luck", "dna", "spirit", "turn", "facility", "teenager", "commitment", "item", "procedure", "half", "tank", "telephone", "supply", "attitude", "block", "bond", "style", "football", "fuel", "data", "glass", "suit", "strength", "criticism", "ice", "equipment", "promise", "return", "album", "production", "corner", "consequence", "living", "injury", "cover", "spot", "breast", "spring", "controversy", "destruction", "aspect", "club", "aircraft", "firm", "regime", "competition", "profit", "knowledge", "spokesman", "review", "understanding", "recession", "singer", "village", "arrest", "snow", "joke", "gold", "contact", "demand", "task", "hole", "general", "skin", "count", "opponent", "conclusion", "priority", "rape", "refugee", "mountain", "commission", "code", "limit", "train", "zone", "passenger", "traffic", "tradition", "inspector", "difficulty", "crash", "influence", "analysis", "virus", "notion", "context", "appearance", "investor", "mystery", "vision", "explosion", "structure", "amendment", "assault", "title", "employer", "personality", "indication", "sector", "contribution", "announcement", "cigarette", "territory", "command", "protest", "impression", "fault", "variety", "alcohol", "section", "signal", "volunteer", "gain", "planet", "river", "identity", "clinic", "divorce", "phrase", "collection", "occasion", "surface", "musician", "concept", "tension", "approval", "beauty", "copy", "mine", "fraud", "category", "exercise", "conviction", "initiative", "technique", "passion", "funeral", "instrument", "distance", "anniversary", "invasion", "compromise", "forest", "experiment", "talent", "post", "division", "score", "column", "transition", "capability", "pocket", "concert", "climate", "satellite", "human", "combination", "explanation", "chain", "capacity", "stimulus", "construction", "intention", "dance", "offer", "obligation", "tourist", "punishment", "testing", "instance", "inflation", "drama", "salary", "bible", "dialogue", "substance", "personnel", "tactic", "objective", "temperature", "symbol", "museum", "profile", "suggestion", "consultant", "motive", "port", "potential", "parliament", "contest", "atmosphere", "branch", "estimate", "symptom", "discrimination", "recommendation", "rebel", "remark", "tone", "importance", "exception", "platform", "perception", "manner", "jet", "plate", "privilege", "content", "inspection", "incentive", "error", "phase", "philosophy", "conduct", "cycle", "boom", "historian", "pair", "excuse", "chocolate", "fortune", "universe", "routine", "margin", "object", "guitar", "silence", "mirror", "expression", "muscle", "chapter", "guide", "volume", "match", "fantasy", "compound", "infection", "mass", "discipline", "fruit", "visitor", "application", "recipe", "survival", "champion", "uniform", "arrangement", "stability", "restriction", "total", "barrier", "cousin", "occupation", "observer", "description", "chamber", "horror", "implication", "essence", "raid", "distinction", "coup", "policeman", "habit", "enterprise", "pop", "liberty", "fiction", "intervention", "christian", "pot", "tube", "organ", "comparison", "employment", "pass", "confusion", "commissioner", "flame", "entry", "exposure", "nerve", "pack", "instruction", "assistant", "objection", "province", "passage", "existence", "alliance", "profession", "sympathy", "component", "pension", "garage", "index", "partnership", "recognition", "standing", "tissue", "captain", "rank", "prize", "rat", "ministry", "diamond", "finish", "admission", "laboratory", "professional", "text", "dose", "panic", "net", "miner", "imagination", "unity", "ingredient", "battery", "tunnel", "excitement", "alarm", "championship", "portrait", "myth", "essay", "contrast", "observation", "angel", "bonus", "possession", "literature", "engagement", "motivation", "instinct", "complex", "subsidy", "interpretation", "tournament", "diagnosis", "export", "cross", "examination", "empire", "formula", "limitation", "compensation", "invitation", "ambulance", "temple", "constituent", "concession", "consent", "carbon", "forum", "transfer", "distribution", "expansion", "blanket", "arrival", "envelope", "gesture", "ambition", "spectrum", "enthusiasm", "absence", "oxygen", "pollution", "extension", "participant", "architect", "angle", "charter", "representation", "identification", "concentration", "norm", "rival", "tribunal", "grain", "proportion", "loyalty", "publication", "participation", "toilet", "attraction", "lion", "palace", "protein", "acceptance", "accent", "membership", "expertise", "assembly", "logic", "dimension", "rail", "transaction", "festival", "horizon", "sandwich", "parish", "pile", "origin", "circuit", "introduction", "mode", "entity", "kit", "psychology", "flexibility", "continent", "brick", "indicator", "promotion", "assurance", "proposition", "minimum", "collector", "capitalism", "consciousness", "cotton", "patch", "import", "isolation", "entrance", "agriculture", "transformation", "menu", "triumph", "consumption", "satisfaction", "calculation", "remedy", "certificate", "efficiency", "interaction", "cab", "glory", "productivity", "acid", "servant", "sergeant", "storage", "fraction", "innovation", "motor", "format", "particle", "trace", "fluid", "doctrine", "pause", "sensation", "dividend", "monopoly", "gallery", "taxi", "discretion", "quantity", "justification", "successor", "consultation", "qualification", "autumn", "companion", "formation", "integration", "complexity", "insect", "transport", "mortality", "restoration", "variation", "composition", "probability", "liberation", "organism", "conservation", "sculpture", "champagne", "architecture", "university", "fibre", "constable", "programme", "mile", "fig", "photograph", "interface", "photo", "colony", "humour", "rose", "favour", "terrace", "association", "colonel", "mrs", "constitution", "honour", "park", "magistrate", "ms", "favourite", "pensioner", "rumour", "aids", "cm", "illustration", "avenue", "miss", "classification", "redundancy", "chap", "polytechnic", "centre", "organisation", "criterion", "enquiry", "tutor", "princess", "co", "licence", "proceeding", "tonne", "million", "mark", "valley", "villa", "abbey", "sociology", "prince", "dollar", "bureau", "institute", "corp", "catalogue", "mm", "archbishop", "interior", "verse", "pc", "installation", "portfolio", "clause", "discourse", "disc", "mineral", "addition", "machinery", "canal", "disposal", "refusal", "domain", "register", "audit", "acquisition", "autonomy", "modification", "fragment", "conversion", "vendor", "practitioner", "filter", "incidence", "constraint", "disk", "dictionary", "conception", "molecule", "succession", "chapel", "duration", "correlation", "exclusion", "hypothesis", "lamp", "sphere", "chancellor", "emperor", "directive", "allowance", "auditor", "server", "cathedral", "pity", "variable", "cinema", "density", "processor", "grammar", "module", "pupil", "interval", "diagram"],
        "medium": ["summit", "bottom", "management", "range", "cash", "mouth", "presence", "share", "fashion", "shape", "chair", "finger", "fish", "edition", "edge", "belief", "balance", "exchange", "farm", "lie", "duty", "horse", "recovery", "file", "birthday", "finance", "regulation", "struggle", "heat", "dress", "release", "winter", "theme", "device", "anger", "english", "flag", "wing", "fighting", "pattern", "entertainment", "saving", "bridge", "settlement", "rain", "wood", "mail", "farmer", "prayer", "depression", "defendant", "thinking", "therapy", "nurse", "path", "funding", "tool", "housing", "shop", "complaint", "wave", "cat", "map", "proof", "emotion", "skill", "trust", "topic", "hall", "cabinet", "bone", "soul", "chicken", "location", "speaker", "wage", "era", "request", "boss", "coach", "estate", "egg", "stake", "stop", "ring", "shock", "kitchen", "island", "coast", "reading", "revenue", "bell", "coffee", "lunch", "expectation", "grade", "diet", "ear", "sky", "assistance", "stress", "alternative", "researcher", "cable", "opening", "beach", "burden", "detective", "toy", "asset", "pool", "trend", "survey", "ocean", "joy", "delay", "yard", "tip", "sun", "row", "worth", "tie", "outcome", "fellow", "casualty", "watch", "sleep", "average", "travel", "recording", "sight", "reduction", "whole", "corporation", "youth", "desert", "writing", "illness", "tear", "gate", "golf", "gap", "priest", "novel", "desire", "hat", "mortgage", "reputation", "shoulder", "relative", "payment", "award", "definition", "speed", "clue", "beer", "nose", "green", "garden", "ceremony", "discovery", "ride", "root", "tea", "motion", "percentage", "scale", "twin", "dealer", "touch", "journey", "delegate", "link", "plastic", "cap", "roll", "dispute", "mood", "design", "childhood", "engine", "lifetime", "nightmare", "meal", "advance", "charity", "factory", "fat", "salt", "neck", "bedroom", "episode", "engineer", "prospect", "shopping", "smoke", "meat", "hold", "retirement", "desk", "grant", "demonstration", "core", "treaty", "sample", "method", "noise", "flower", "cup", "revolution", "taste", "route", "tooth", "drive", "disorder", "sugar", "rise", "chip", "shirt", "schedule", "involvement", "heaven", "walk", "operator", "round", "maker", "wine", "mess", "resistance", "knife", "fee", "master", "circle", "meaning", "assessment", "expense", "plot", "classroom", "brand", "painting", "roof", "drink", "ban", "chemical", "french", "piano", "bottle", "waste", "label", "clock", "cream", "good", "electricity", "bishop", "reader", "pregnancy", "league", "pet", "foundation", "tower", "feature", "withdrawal", "breath", "crack", "manufacturer", "specialist", "reference", "tale", "provision", "wire", "speculation", "celebration", "cheese", "bathroom", "function", "channel", "smile", "milk", "requirement", "suspicion", "household", "finding", "chest", "consideration", "library", "harm", "button", "improvement", "drop", "appointment", "businessman", "flow", "metal", "present", "carrier", "fate", "cloud", "belt", "string", "trading", "trick", "knee", "stomach", "height", "draft", "stranger", "poem", "phenomenon", "fence", "clothing", "guilt", "print", "potato", "moon", "bear", "wound", "pride", "silver", "cake", "lung", "wheel", "tune", "establishment", "banking", "apple", "steel", "throat", "german", "lip", "timing", "insight", "shift", "sheet", "offender", "midnight", "execution", "anxiety", "strip"],
        "hard": ["wonder", "shadow", "creation", "marketing", "fishing", "breakfast", "determination", "sand", "permission", "guideline", "shame", "riot", "user", "resort", "designer", "bread", "wish", "lover", "jacket", "statute", "pace", "frame", "guarantee", "assumption", "graduate", "ward", "win", "opera", "friendship", "pig", "mate", "length", "cow", "collapse", "diary", "scholar", "comfort", "preparation", "crystal", "gear", "stroke", "decline", "achievement", "delivery", "publisher", "dish", "worry", "adventure", "crop", "blow", "sake", "sin", "radiation", "juice", "setting", "vegetable", "poetry", "self", "shell", "grave", "gender", "shortage", "coat", "seed", "soil", "shore", "defeat", "notice", "boot", "chart", "dark", "reward", "infant", "shower", "clerk", "delegation", "uncle", "assignment", "currency", "resignation", "buyer", "bike", "mouse", "poet", "landscape", "selection", "cry", "separation", "display", "disability", "counter", "butter", "stick", "engineering", "cold", "coal", "tail", "mechanism", "scheme", "presentation", "learning", "teaching", "deck", "creature", "running", "weakness", "blue", "uncertainty", "inquiry", "dust", "peak", "needle", "leaf", "launch", "laugh", "leave", "grass", "iron", "competitor", "bean", "pole", "vessel", "bid", "landing", "pipe", "hip", "pitch", "journal", "ceiling", "awareness", "kiss", "replacement", "duck", "devil", "declaration", "significance", "final", "premium", "carpet", "premise", "heritage", "shelf", "hint", "rhythm", "liability", "heel", "layer", "strain", "merit", "youngster", "depth", "kingdom", "mud", "reflection", "reserve", "hunting", "furniture", "residence", "nail", "drawing", "pen", "preference", "squad", "lock", "bench", "rope", "aim", "stream", "evolution", "jurisdiction", "ideology", "tide", "spread", "disappointment", "fool", "merger", "escape", "shareholder", "constituency", "paint", "ghost", "craft", "custom", "cliff", "grip", "accuracy", "theft", "widow", "smell", "departure", "repair", "summary", "boundary", "equivalent", "holder", "left", "sequence", "pit", "bowl", "purchase", "plaintiff", "aunt", "equity", "load", "scope", "darkness", "closure", "ownership", "defender", "discount", "equation", "virtue", "trainer", "trader", "bath", "seller", "clash", "characteristic", "coin", "tongue", "basket", "framework", "switch", "rent", "curve", "necessity", "square", "venture", "steam", "sheep", "brush", "database", "deposit", "adjustment", "guardian", "curtain", "fleet", "lane", "swimming", "emission", "fabric", "medium", "easter", "reception", "evaluation", "mill", "exhibition", "sum", "counterpart", "stance", "curriculum", "developer", "removal", "lecture", "flesh", "merchant", "darling", "painter", "mixture", "breach", "lift", "pond", "cheek", "registration", "supplier", "hardware", "leather", "rabbit", "paragraph", "bulk", "corridor", "workshop", "shade", "accountant", "sword", "expenditure", "input", "rod", "skirt", "slope", "nest", "crown", "attendance", "council", "billion", "go", "shit", "earth", "lifespan", "vat", "purchaser", "navy", "inn", "eagle", "labour", "neighbour", "red", "rubbish", "isle", "bush", "lake", "lad", "judgement", "mum", "bay", "borough", "commonwealth", "hill", "jew", "god", "treasury", "white", "cupboard", "flat", "dozen", "cheque", "junction", "hundred", "councillor", "inch", "daddy", "tory", "other", "unix", "county", "percent", "traveller", "acre", "gaze", "pope", "builder", "metre", "mummy", "van", "king", "behaviour", "bill", "solicitor", "appendix", "tv", "allocation", "harbour", "whisky", "thousand", "defence", "queen", "republic", "duke", "specification", "lorry", "no", "offence", "federation", "colour", "theatre", "mp", "ref", "lord", "stairs", "earl", "petrol", "directory", "frequency", "seminar", "receipt", "breed", "measurement", "palm", "dock", "disadvantage", "advertisement", "implementation", "timber", "blade", "ratio", "outline", "local", "availability", "silk", "beam", "accommodation", "applicant", "tin", "tenant", "delight", "bronze", "doorway", "lease", "cloth", "nursery", "creditor", "taxation", "trustee", "holding", "cottage", "landlord", "warmth", "spell", "leisure", "reign", "reply", "castle", "hierarchy", "pub", "peasant", "output", "glance", "specimen", "thesis", "working", "oak", "turnover", "tray", "clay", "carriage", "leaflet", "copper", "subsidiary", "dismissal", "completion", "packet", "wool", "heading", "pavement", "receiver", "railway", "cricket", "printer", "bastard"],
    }

};

document.addEventListener("DOMContentLoaded", introScreen);


/**
 * This function pulls up the main introduction screen, welcoming the user to the game,
 * a brief summary as to what the game is
 * and the user can input their name
 */
function introScreen() {

    // Add event listener to button in this page to link to next screen (nameInput)
    introScreenBtn.addEventListener("click", function (event) {
        event.preventDefault();
        nameInput();
    });

}

function nameInput() {

    // let Name Input screen be visible
    inputNameDiv.classList.add("active-div");

    // let Intro screen be NOT visible
    introScreenDiv.classList.remove("active-div");

    // Add event listener to button in this page to link to next screen (gameOptions)
    nameInputScreenBtn.addEventListener("click", function (event) {
        event.preventDefault();
        gameOptions();
    });


}


/**
 * This screen gives the user some game options
 * Easy, Medium, Hard - the difference between these should be obvious so add this detail
 * Game length ie number of questions
 */
function gameOptions() {

    // Let Game Options screen be visible
    gameOptionsDiv.classList.add("active-div");

    // Let Input Name screen NOT be visible
    inputNameDiv.classList.remove("active-div");

    playBtn.addEventListener("click", function (event) {
        event.preventDefault();
        playGame();



    });

}

function playGame() {

    // Let Play Game screen be visible
    playGameDiv.classList.add("active-div");

    // Let Input Name screen NOT be visible
    gameOptionsDiv.classList.remove("active-div");

    generateQuestion();

}


function generateQuestion() {

    // Get user's choice for game difficulty
    for (i = 0; i < 3; i++) {
        if (document.getElementById("game-options-form")[i].checked) {
            gameDifficulty = (document.getElementsByTagName("label")[i].innerText);
            console.log(gameDifficulty)
            break;
        }
    }

    // Get user's choice for game length
    for (i = 3; i < 7; i++) {
        if (document.getElementById("game-options-form")[i].checked) {
            gameLength = document.getElementsByTagName("label")[i].innerText;
            console.log(gameLength)
            break;
        }
    }

    gameDiff = gameDifficulty.toLowerCase();
    
    if (gameDiff === "easy") {
        numOfChoices = 4;
        timeLimit = 1500;
        questionLanguage = "French";
        answerLanguage = "English";

        if (questionsAnswered === 0) {
        document.getElementsByClassName("radios")[0].remove();
        document.getElementsByClassName("radios-labels")[0].remove();
        document.getElementsByClassName("radios")[1].remove();
        document.getElementsByClassName("radios-labels")[1].remove();
        } else {
            
        }

    } else if (gameDiff === "medium") {
        numOfChoices = 5;
        timeLimit = 1000;
        questionLanguage = "French";
        answerLanguage = "English";

        if (questionsAnswered === 0) {
        document.getElementsByClassName("radios")[0].remove();
        document.getElementsByClassName("radios-labels")[0].remove();
        }

    } else {
        numOfChoices = 6;
        timeLimit = 500;
        questionLanguage = "English";
        answerLanguage = "French";
    }

    let mcRandNumbers = [];
    let mcQuestionWords = [];
    let mcAnswerWords = [];

    for (i = 0; i < numOfChoices; i++) {

        // Create random numbers
        mcRandNumbers[i] = Math.floor(Math.random() * options[questionLanguage][gameDiff].length);

        // Index words from question and answer arrays 
        mcQuestionWords[i] = options[questionLanguage][gameDiff][mcRandNumbers[i]];
        mcAnswerWords[i] = options[answerLanguage][gameDiff][mcRandNumbers[i]];

        // Remove these words from array so they cannot be chosen again in same game
        options[questionLanguage][gameDiff].splice(mcRandNumbers[i], 1);
        options[answerLanguage][gameDiff].splice(mcRandNumbers[i], 1);

    }

    // Pick a positive number between 1 and number of choices (4, 5, or 6) 
    // this is the "chosen" number ie to be the question and answer out of the random words
    numPositive = numOfChoices - 1;
    let answerNum = Math.floor(Math.random() * numPositive) + 1;

    // Index what will be the question and the respective answer
    mcQuestion = mcQuestionWords[answerNum];
    mcAnswer = mcAnswerWords[answerNum];
    
    // Append question to HTML
    document.getElementById("question").innerHTML = (`What is ${mcQuestion} in ${answerLanguage}`);

    console.log(mcAnswerWords);

    // Append answers to radio buttons in HTML
    let mcForm = document.getElementsByClassName("radios-labels");
    for (i = 0; i < mcForm.length; i++) {
        mcForm[i].innerHTML = mcAnswerWords[i];
    }

    nextQBtn.addEventListener("click",checkAnswer);
    skipQBtn.addEventListener("click",skipQuestion);

}


function checkAnswer() {

    questionsAnswered++;

    for (i = 0; i < document.getElementsByClassName("radios-labels").length; i++) {
        if (document.getElementsByClassName("radios")[i].checked) {
            let userAnswer = document.getElementsByClassName("radios-labels")[i].innerHTML;
            
            if (userAnswer === mcAnswer) {
                let correctTally = (parseInt(document.getElementsByClassName("tallies")[0].innerText));
                let newCorrectTally = correctTally += 1;
                console.log(newCorrectTally);
                correctTally.innerHTML = newCorrectTally; 
            } else {
                let incorrectTally = (parseInt(document.getElementsByClassName("tallies")[1].innerText));
                let newIncorrectTally = incorrectTally += 1;
                console.log(newIncorrectTally);
                incorrectTally.innerHTML = newIncorrectTally;
            }

            generateQuestion();

        }
    }

}

function skipQuestion() {

}

// /**
//  * This screen gives the user instructions as to how the game will work
//  */
// function instructionsScreen() {

// }

// /**
//  * This screen shows the actual questions and multiple choice answers,
//  * score tallies, countdown clock
//  */
// function playGameScreen() {
//     // Title
//     // Question - ie What is "jouer" in English? or What is "bread" in French? dependent on difficulty
//     // Question 1 out of 20
//     // Radio buttons to display answer 4 - 6 depending on difficulty
//     // Next question - button
//     // Skip question - button
//     // Return to homepage button
//     // Correct answers tally
//     // Timer countdown
//     // -> generateQuestion()
// }


// /**
//  * This function will feed into the playGameScreen
//  * 4 - 6 multiple choice answers will be randomly generated
//  * and the correct question and answer will be calculated here
//  */
// function generateQuestion() {
//     // Words arrays in French and English 
//     // Randomly select between 4 and 6 numbers (4 - easy, 5 - medium, 6 - hard)
//     // Numbers between 0 and length of selected words arrays
//     // Index the words of these numbers from arrays, and put them into the HTMl radio buttons
//     // Randomly select 1 number between 4 and 6 to be the chosen question/answer of indexed words
//     // Index this number from the 4-6 words to get the question word and answer word
//     // -> checkAnswer()
// }


// /**
//  * This function will get the user answer from the radio buttons
//  * and check it against the correct answer 
//  * it will also increase the score tallies as required
//  */
// function checkAnswer() {
//     // Get the user answers from radio buttons
//     // Compare to the actual answer
//     // If correct, increment the correct tally and progress tally
//     // If incorrect - ? decide what to do
//     // If progress tally/number of questions answered = chosen game length - > endGameScreen
//     // -> generateQuestion() or endGameScreen()
// }


// /** This function will allow the user to press the Skip Question button
//  * which will move on and regenerate the question
//  * it will increment a 'skipped' tally - decide whether this will be displayed or not
//  */
// function skipQuestion() {
//     // If skip question button is clicked, increase skip tally (hidden?)
//     // and regenerate question
//     // If progress tally/number of questions answered = chosen game length - > endGameScreen
//     // -> generateQuestion()
// }


// /**
//  * This screen shows the end score, congrats message,
//  * perhaps input email address to send answers to
//  */
// function endGameScreen() {
//     // Congratulations message
//     // You scored 8 out of 10 message
//     // Return to home button
//     // If good score  - ?
//     // If bad score - here are some suggested resources
//     // -> introScreen()
// }


// /**
//  * This function will reset the whole game and take 
//  * the user back to the home screen
//  * pop-up message to warn about loss of progress
//  */
// function resetGame() {
//     // Reset button calls this function
//     // Alert message - loss of progress
//     // Back to intro screen
//     // -> introScreen()
// }