### Ajouter un utilisateur { #add-a-user }

1. Ouvrez l'application Users.
2. Cliquez sur **Create user**.
3. Indiquez une **adresse e-mail de connexion**.
4. Indiquez un **ID utilisateur**.
5. Si vous le souhaitez, ajoutez une note dans le champ **mémo**. Exemple : accès temporaire pour un sous-traitant de l'usine de crèmes glacées A
6. Indiquez un **nom d'affichage**. Il s'agit du nom complet de l'utilisateur ou d'un nom d'usage facilement reconnaissable.
7. Cliquez sur **Select groups** et ajoutez l'utilisateur à au moins un groupe de sécurité. Un e-mail est envoyé à l'adresse e-mail de connexion.

### Tableau 1. Groupes de sécurité { #table-1-security-groups }

Un groupe de sécurité est un ensemble d'utilisateurs qui disposent des mêmes accès. Les droits d'un groupe de sécurité déterminent les applications, les actions et les données auxquelles ses membres peuvent accéder.

Un rôle détermine ce qu'une personne peut voir et faire dans Maximo Application Suite Select. Affectez chaque utilisateur au groupe de sécurité qui correspond à son rôle :

| Groupe de sécurité | Ce qu'ils peuvent faire |
|----------------|------------------|
| **System admin** | Gère la configuration du système et les accès des utilisateurs. Les administrateurs système peuvent configurer les domaines, les modèles de communication et les paramètres d'IA, créer des utilisateurs et définir des groupes de sécurité, mais ils n'effectuent généralement pas de travail opérationnel au quotidien.<br><br>**Exemples de tâches :** configurer des modèles de notification, gérer les rôles des utilisateurs, définir des groupes de sécurité, configurer les paramètres système et gérer les structures de données. |
| **Supervisor** | Supervise les opérations et les activités de l'équipe. Les superviseurs peuvent planifier et approuver le travail, examiner le travail des techniciens, surveiller les actifs et les performances, et accéder aux analyses pour suivre l'avancement.<br><br>**Exemples de tâches :** affecter et approuver des ordres de travail, examiner les indicateurs clés de performance, examiner les résultats d'inspection, gérer les plans de travail, et surveiller l'état des actifs et les calendriers de maintenance. |
| **Technician** | Effectue le travail de maintenance et le travail opérationnel. Les techniciens peuvent consulter et mettre à jour le travail qui leur est affecté, effectuer des inspections, enregistrer les heures de main-d'œuvre, déclarer les matériaux utilisés et enregistrer des données sur les actifs, comme les relevés de compteur et les détails sur l'état.<br><br>**Exemples de tâches :** terminer des ordres de travail, saisir les résultats d'inspection, mettre à jour l'état des actifs, enregistrer les heures de main-d'œuvre, déclarer les matériaux utilisés et saisir les relevés de compteur. |
| **Requester** | Soumet et suit des demandes de service. Les demandeurs disposent d'un accès limité et ne peuvent pas effectuer de tâches opérationnelles ou administratives. Ce rôle consiste à lancer et à suivre des demandes de travail.<br><br>**Exemples de tâches :** créer une demande de service pour un actif en panne et suivre son statut jusqu'à sa résolution. |
| **Inventory clerk** | Gère l'inventaire et les opérations du magasin. Les magasiniers peuvent tenir à jour les stocks, traiter les mouvements d'articles, ajuster les soldes d'inventaire et garantir l'exactitude des enregistrements d'inventaire.<br><br>**Exemples de tâches :** réceptionner des articles en stock, sortir des matériaux pour des ordres de travail, effectuer des comptages d'inventaire, ajuster les soldes d'inventaire et gérer les magasins. |

!!! note
    Vous devez affecter au moins un groupe de sécurité. L'utilisateur ne peut pas accéder aux applications tant qu'aucun groupe de sécurité n'est affecté.
