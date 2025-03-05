# Task-Vue

Une application de gestion de tâches moderne construite avec Vue.js 3 et Tailwind CSS.

![Capture d'écran de Task-Vue](screenshot.png)

## 🌐 Démo

Consultez la démo en ligne : [Task-Vue Demo](https://votre-username.github.io/Task-Vue/)

## 📋 Caractéristiques

- ✅ Ajouter, modifier et supprimer des tâches
- ✅ Marquer les tâches comme complétées
- ✅ Filtrer les tâches (tâches terminées à la fin)
- ✅ Effacer toutes les tâches ou seulement les tâches complétées
- ✅ Sauvegarde automatique dans le localStorage
- ✅ Interface utilisateur responsive et moderne
- ✅ Design épuré avec une palette de couleurs violet

## 🚀 Technologies utilisées

- **Vue.js 3** - Framework JavaScript progressif
- **Composition API** - Organisation du code et réutilisation de la logique
- **Tailwind CSS** - Framework CSS utilitaire
- **Vite** - Outil de build rapide pour le développement moderne
- **LocalStorage API** - Persistance des données côté client

## 🛠️ Installation et démarrage

```bash
# Cloner le dépôt
git clone https://github.com/votre-username/Task-Vue.git
cd Task-Vue

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev

# Construire pour la production
npm run build

# Déployer sur GitHub Pages
npm run deploy
```

## 📁 Structure du projet

```
Task-Vue/
├── public/
├── src/
│   ├── assets/
│   │   └── main.css
│   ├── components/
│   │   ├── TodoApp.vue       # Composant principal
│   │   ├── TodoHeader.vue    # En-tête avec titre et options
│   │   ├── TodoInput.vue     # Formulaire d'ajout de tâches
│   │   ├── TodoItem.vue      # Élément de tâche individuelle
│   │   └── TodoList.vue      # Liste des tâches
│   ├── App.vue
│   └── main.js
├── index.html
├── package.json
├── tailwind.config.js        # Configuration Tailwind
└── vite.config.js            # Configuration Vite
```

## 📝 Approche technique

- **Composition API** : Utilisée pour une meilleure organisation du code et une séparation des préoccupations
- **Props & Events** : Communication entre composants suivant le flux de données Vue.js
- **Computed Properties** : Pour le filtrage et le tri des tâches
- **localStorage** : Persistance des données entre les sessions
- **Tailwind CSS** : Approche utility-first pour le style
- **Responsive Design** : S'adapte à toutes les tailles d'écran

## 🤝 Contribution

Les contributions, problèmes et demandes de fonctionnalités sont les bienvenus !

## 📄 Licence

Ce projet est sous licence MIT.