# IPL social

## 1. Informations personnelles
- **Nom** : [Ton Nom]
- **Prénom** : [Ton Prénom]
- **Email Vinci** : [ton.email@vinci.be]

## 2. URL du Projet
[Lien GitHub du projet](https://github.com/VotrePseudoGitHub/IPL-social)
  
## 3. Explication du code
Dans ce projet, nous avons mis en place une **pipeline d’intégration continue (CI)** à l’aide de **GitHub Actions**.  
- Le fichier `.github/workflows/ci.yml` définit les étapes pour récupérer le code, installer les dépendances et lancer les tests.  
- L’objectif est de valider automatiquement le bon fonctionnement du code à chaque push ou pull request sur la branche `main`.

## 4. Commande pour exécuter les tests
```bash
npm test
