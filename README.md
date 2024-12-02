# Projet  Système de Login avec RTK Query, React 

## Installation
Clonez le projet git clone https://github.com/tseglele/projet-modules.git

Installez les dépendances composer install

## Présentation

Ce projet est un système de gestion d'authentification d'utilisateurs. Il inclut l'enregistrement, la connexion, et la gestion sécurisée des données à l'aide de JSON Web Tokens (JWT). Le backend est construit avec PHP et MySQL (géré par phpMyAdmin), tandis que le frontend utilise React avec TypeScript et RTK Query.

## Stacks techniques

### Frontend

- React (avec TypeScript) pour une interface utilisateur interactive.
- RTK Query pour gérer les requêtes API de manière efficace.
- Tailwind CSS pour le stylisme.

### Backend

- PHP pour le traitement des requêtes et la gestion de la logique serveur.
- MySQL pour le stockage des données, accessible via phpMyAdmin.

### Structure de la BD

User et Modules

- User : id, username, email, password
- Module : id, name, description, user_id

## Généralité de la Sécurité

### Hachage des mots de passe :

Les mots de passe sont stockés en base sous une forme cryptée grâce à la fonction PHP password_hash.

### JWT :

Les utilisateurs reçoivent un JSON Web Token après une connexion réussie.
Les tokens sont utilisés pour authentifier les requêtes ultérieures.

### Validation des entrées :

Les données sont validées côté serveur pour éviter les injections SQL et autres attaques.

### CORS :

Le serveur autorise uniquement les requêtes provenant de domaines approuvés.

## Features

### Authentification

- Enregistrement : Création d’un nouvel utilisateur.
- Connexion : Vérification des identifiants et génération d’un JWT.
- Gestion des tokens : Stockage dans localStorage et validation côté backend.

### Modules

- Les utilisateurs peuvent créer et gérer des modules personnels.

## Authencité des JWT

### Génération :

Un JWT est généré lors de la connexion, signé avec une clé secrète.

### Vérification :

Chaque requête authentifiée passe par un middleware qui valide le token.

### Expiration :

Les tokens ont une durée de vie limitée pour renforcer la sécurité.

## Récupération des données

### Frontend :

- Les données utilisateur sont récupérées avec RTK Query à partir du backend.

### Backend :

- Requêtes SQL sécurisées via PDO
