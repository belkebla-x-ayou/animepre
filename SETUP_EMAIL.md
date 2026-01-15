# Setup Email Notifications pour Anime Prestige

## Configuration Gmail

1. **Créer un mot de passe d'application Gmail:**
   - Allez sur https://myaccount.google.com/apppasswords
   - Sélectionnez "Mail" et "Windows Computer" (ou votre appareil)
   - Générez un mot de passe d'application
   - Copiez le mot de passe généré

2. **Configurer le fichier .env:**
   - Copiez `.env.example` en `.env`
   - Remplissez les valeurs:
     ```
     GMAIL_USER=ayoubbelkebla1@gmail.com
     GMAIL_PASSWORD=votre-mot-de-passe-d-application
     PORT=3000
     ```

## Installation et démarrage du serveur

1. **Installer les dépendances:**
   ```bash
   cd backend
   npm install
   ```

2. **Démarrer le serveur:**
   ```bash
   npm start
   # ou pour le développement avec nodemon:
   npm run dev
   ```

3. **Le serveur sera accessible à:** `http://localhost:3000`

## Fonctionnalités

- Après une connexion réussie, un email est envoyé à `ayoubbelkebla1@gmail.com`
- L'email contient une notification de connexion sécurisée

## Fichiers créés/modifiés

- `backend/server.js` - Serveur Node.js avec route d'envoi d'emails
- `backend/package.json` - Dépendances Node.js
- `.env.example` - Modèle de configuration
- `web/login/login.js` - Logique pour envoyer l'email après connexion

## Flux d'envoi de message