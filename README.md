# Hyrule Castle 🏰

Un jeu textuel basé sur l'univers de *The Legend of Zelda*, développé en **Bash**. Ce projet est conçu pour fonctionner de manière simple en local ou en environnement conteneurisé grâce à Docker.

## 🎮 Fonctionnalités principales

- Exploration du château et de ses environnements mystérieux.
- Système de combat contre des ennemis dynamiques.
- Gestion des personnages et de leurs statistiques.

## 🛠️ Structure du projet

Voici les principaux fichiers et scripts du projet :

- **`launcher.sh`** : Le script principal pour lancer le jeu.
- **`modifier.sh`** : envoi les nouvelles données dans le jeu.
- **`build.sh`** : Création de contener pour chaques instructions du Dockerfile.
- **`Dockerfile`** : Fichier de configuration pour exécuter le jeu dans un conteneur Docker.

## 🚀 Comment démarrer ?

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/Elimo-FS/HYRULE-CASTLE.git
   cd HYRULE-CASTLE
   ```

2. Assurez-vous que Bash est installé sur votre système.

3. Lancez le jeu avec :
   ```bash
   ./launcher.sh
   ```

## 📂 Pré-requis

- Environnement Linux.
- Bash v4.0 ou supérieur.

## 📜 A propos

Ce projet est un hommage à l'univers de *The Legend of Zelda* et un exercice pour maîtriser les scripts Bash. Il illustre la gestion des entrées utilisateur, le traitement d'erreurs et la création d'une logique algorithmique pour des systèmes de jeu.

---

Vous pouvez consulter le dépôt original ici : [Hyrule Castle sur GitHub](https://github.com/Elimo-FS/HYRULE-CASTLE).

## Structure du Projet

Le projet est divisé en deux sections principales :

1. **Base Game** : Contient la logique de base du jeu, sans mods. Ce code est placé dans le dossier `hyrule/`.
2. **Base Game+** : Contient des fonctionnalités supplémentaires ajoutées au jeu de base. Chaque mod est placé dans un fichier séparé dans le dossier `jsonModifier/`.
