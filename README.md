# Hyrule Castle RPG - Jeu Conteneurisé en TypeScript

## Description

Le projet consiste à créer un jeu RPG de type **tour par tour** dans lequel le joueur incarne **Link** et doit franchir 10 étages du **Hyrule Castle**, affrontant différents ennemis et le Boss final, **Ganon**. Le jeu repose sur des concepts algorithmiques et mathématiques, et l'objectif est de créer un gameplay autour de la gestion des attaques, des soins, et des points de vie des personnages.

Une fois la base du jeu développée, il est possible d'ajouter des **mods** pour enrichir le gameplay et gagner des points supplémentaires en fonction de la difficulté des mods choisis.

Le jeu est conteneurisé dans une image Docker, permettant une exécution facile et reproductible, avec la possibilité de modifier des fichiers de données JSON sans avoir à reconstruire l'image.

## Objectifs du Projet

1. **Base du jeu** : Développer un RPG avec des combats à tour de rôle entre Link et des ennemis dans un château.
2. **Ajout de mods** : Enrichir le jeu avec des fonctionnalités supplémentaires (statistiques, options de combat, etc.).
3. **Conteneurisation** : Utiliser Docker pour créer une image qui exécute le jeu.
4. **Gestion des données dynamiques** : Permettre la modification des fichiers JSON (personnages, ennemis, bosses) sans avoir à reconstruire l'image Docker.

## Fonctionnalités du Jeu

- **Combats à tour de rôle** : Link affronte des ennemis et des bosses, chaque combattant peut choisir entre attaquer ou se soigner.
- **Statistiques** : Le joueur et les ennemis ont des points de vie (HP) et des points de force (STR).
- **Éléments de jeu** :
  - **Link** : 60 HP et 15 STR
  - **Bokoblin** : 30 HP et 5 STR
  - **Ganon (Boss)** : 150 HP et 20 STR
- **Mode dynamique** : Les personnages (joueurs et ennemis) sont sélectionnés au hasard à partir de fichiers JSON.
- **Options de combat** : Le joueur peut choisir entre attaquer ou se soigner pendant chaque tour.

## Structure du Projet

Le projet est divisé en deux sections principales :

1. **Base Game** : Contient la logique de base du jeu, sans mods. Ce code est placé dans le dossier `base_game/`.
2. **Mods** : Contient des fonctionnalités supplémentaires ajoutées au jeu de base. Chaque mod est placé dans un fichier séparé dans le dossier `mods/`.
