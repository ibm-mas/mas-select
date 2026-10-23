![Maximo Application Suite Select](images/MAS_Select_homepage_image.jpeg){ style="width: 100%; max-width: 1400px; height: 200px; object-fit: cover; object-position: center; border-radius: 8px; margin-bottom: 16px; display: block;" }

<h1 style="margin-bottom: 4px;">Maximo Application Suite Select</h1>

<span class="subtitle-help-center" style="display: block; margin-top: 0; margin-bottom: 4px;">Centre d'aide</span>

<p style="margin-top: 8px; margin-bottom: 16px;">Bienvenue dans Maximo Application Suite Select, un système de gestion de la maintenance simplifié pour suivre les équipements, gérer le travail et assurer le bon fonctionnement des opérations.</p>

<div class="home-search-container" style="margin-top: 16px;">
    <div class="home-search-wrapper">
        <input type="text" id="home-search-input" class="home-search-input" placeholder="Essayez : pourquoi ne puis-je pas terminer un ordre de travail" aria-label="Rechercher dans la documentation">
        <button id="home-search-button" class="home-search-button" aria-label="Rechercher">Rechercher</button>
    </div>
</div>

<script>
(function() {
    var searchInput = document.getElementById('home-search-input');
    var searchButton = document.getElementById('home-search-button');
    
    function performSearch() {
        var query = searchInput.value.trim();
        if (query) {
            window.location.href = search_url + '?q=' + encodeURIComponent(query);
        }
    }
    
    searchButton.addEventListener('click', performSearch);
    
    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
})();
</script>

## Questions fréquentes { #frequently-asked }

- [Pourquoi ne puis-je pas terminer un ordre de travail ?](get-work-done/complete-work/why-cant-complete-work-order.md)
- [Pourquoi ne puis-je pas sortir des matériaux ?](get-work-done/manage-inventory/why-cant-issue-materials.md)
- [Pourquoi certains termes diffèrent-ils de ceux que j'utilise habituellement ?](start-fast/basics/why-do-terms-differ.md)
- [Pourquoi les techniciens n'utilisent-ils pas le système ?](improve-results/improve-adoption/technicians-not-using.md)
- [Pourquoi mes données semblent-elles incorrectes ?](improve-results/improve-data/data-looks-wrong.md)

## Quels sont les concepts de base ? { #what-are-the-basic-concepts }

Découvrez les éléments de base que vous utiliserez chaque jour :

- [Qu'est-ce qu'un <abbr title="Lieux physiques où le travail est effectué">emplacement</abbr> ?](start-fast/basics/what-is-location.md) - Lieux physiques où le travail est effectué
- [Qu'est-ce qu'un <abbr title="Équipements, machines et infrastructures que vous entretenez">actif</abbr> ?](start-fast/basics/what-is-asset.md) - Équipements, machines et infrastructures que vous entretenez
- [Qu'est-ce qu'un <abbr title="Instructions pour effectuer un travail de maintenance">ordre de travail</abbr> ?](start-fast/basics/what-is-work-order.md) - Instructions pour effectuer un travail de maintenance
- [Comment les <abbr title="Lieux physiques où le travail est effectué">emplacements</abbr>, les <abbr title="Équipements, machines et infrastructures que vous entretenez">actifs</abbr> et les <abbr title="Instructions pour effectuer un travail de maintenance">ordres de travail</abbr> fonctionnent-ils ensemble ?](start-fast/basics/how-concepts-work-together.md) - Découvrez comment ces concepts s'articulent dans des scénarios réels

## Qu'est-ce que Maximo Application Suite Select ? { #what-is-maximo-application-suite-select }

Maximo Application Suite Select est une solution SaaS (Software as a Service) prête à l'emploi.

Aucune installation. Aucune configuration. Aucune personnalisation nécessaire. Il vous suffit de vous connecter et de commencer à travailler :

- Suivre les actifs
- Créer et terminer des ordres de travail
- Planifier la maintenance préventive
- Gérer l'inventaire des pièces
- Surveiller les performances

## À qui s'adresse-t-il ? { #who-is-this-for }

- Les **techniciens** peuvent rechercher et terminer des ordres de travail, par exemple terminer le travail sur Filler FL-02.
- Les **superviseurs** peuvent planifier, affecter et suivre le travail de maintenance, par exemple affecter la maintenance préventive de Spiral freezer SF-01.
- Les **magasiniers** peuvent gérer les pièces et les fournitures, par exemple sortir des pièces de Main storeroom.
- Les **administrateurs** peuvent charger des données et configurer des utilisateurs, par exemple charger des utilisateurs pour Ice cream plant A.

### À propos de ces exemples { #about-these-examples }

Pour faciliter la prise en main, les exemples de ce centre d'aide reposent sur un même scénario : une usine de fabrication de crèmes glacées. Vous retrouvez le même site, les mêmes emplacements, les mêmes actifs et le même travail, ce qui vous permet de vous concentrer sur l'enchaînement du flux de travail.

## Quels problèmes résout-il ? { #what-problems-does-it-solve }

Maximo Application Suite Select vous aide à passer d'une maintenance réactive de type « fonctionnement jusqu'à la panne » à une maintenance préventive et organisée :

- **Ne perdez plus le fil du travail :** tous les ordres de travail dans un seul système, et non dispersés dans des feuilles de calcul ou sur papier
- **Évitez les pannes d'équipement :** planifiez la maintenance avant que les problèmes ne surviennent
- **Sachez ce que vous avez :** suivez tous vos actifs et leur historique de maintenance
- **Maîtrisez l'inventaire des pièces :** voyez ce qui est en stock et ce qui a été utilisé
- **Prenez de meilleures décisions :** utilisez les données pour comprendre ce qui fonctionne et ce qui demande de l'attention

## Emportez votre travail avec vous { #take-your-work-mobile }

IBM Maximo Mobile permet aux techniciens de consulter les actifs, de gérer les ordres de travail et de mettre à jour le travail depuis leur téléphone ou leur tablette, où que le travail soit effectué.

<div style="display: flex; align-items: flex-start; gap: 24px; margin: 16px 0;">
  <img src="../images/mobile card.png" alt="Application IBM Maximo Mobile : téléchargez-la et gérez le travail en déplacement" style="width: 160px; flex-shrink: 0; border-radius: 8px;">
  <div>
    <p style="margin-top: 0;">Téléchargez IBM Maximo Mobile depuis l'App Store ou Google Play, puis connectez-vous avec vos identifiants Maximo Application Suite Select.</p>
    <ul>
      <li><strong>Techniciens :</strong> consultez votre file de travail affecté, terminez des ordres de travail et enregistrez les données réelles en déplacement.</li>
      <li><strong>Superviseurs :</strong> affectez et approuvez le travail depuis le terrain.</li>
      <li><strong>Magasiniers :</strong> sortez des pièces, réceptionnez des stocks et transférez des articles entre magasins.</li>
      <li><strong>Administrateurs :</strong> <a href="get-work-done/setup-control/configure-maximo-mobile.html">configurez IBM Maximo Mobile</a> pour votre équipe avant que quiconque ne se connecte.</li>
    </ul>
  </div>
</div>

## Prenez en main le produit en quelques minutes { #get-started-in-minutes }

Vous découvrez Maximo Application Suite Select ? Commencez ici :

1. [Que puis-je faire dans mon rôle ?](start-fast/what-can-i-do/overview.md)
2. [Découvrir les notions de base](start-fast/basics/what-are-basic-concepts.md)
3. [Effectuer votre première tâche](start-fast/what-can-i-do/overview.md)

## Trouvez ce dont vous avez besoin { #find-what-you-need }

### Démarrer rapidement { #start-fast }
Obtenez de la valeur dès les premières minutes.

[Explorer « Démarrer rapidement » →](start-fast/what-can-i-do/overview.md)

### Accomplir le travail { #get-work-done }
Effectuez les tâches de maintenance courantes.

[Explorer « Accomplir le travail » →](get-work-done/plan-work/plan-recurring-maintenance.md)

### Améliorer les résultats { #improve-results }
Rendez votre programme de maintenance plus efficace.

[Explorer « Améliorer les résultats » →](improve-results/improve-work/reduce-downtime.md)

### Travailler plus intelligemment { #work-smarter }
Utilisez l'intelligence artificielle (IA), l'automatisation et les analyses pour passer à l'échelle.

[Explorer « Travailler plus intelligemment » →](work-smarter/ai-automation/ai-improve-maintenance.md)

### Obtenir des réponses { #get-answers }
Trouvez rapidement des réponses aux questions courantes.

[Parcourir toutes les questions →](get-answers/index.md)

## Besoin d'aide ? { #need-help }

- **Dans le produit** : cliquez sur l'icône d'aide (?) en haut à droite
- **Pour une zone précise** : cliquez sur le nom de la zone ou appuyez sur Alt+F1
- **Vous ne trouvez pas de réponse ?** : consultez la section [Obtenir des réponses](get-answers/index.md)

---

**Prêt à commencer ?** Consultez [Que puis-je faire dans mon rôle ?](start-fast/what-can-i-do/overview.md)
