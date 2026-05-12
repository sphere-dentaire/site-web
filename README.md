# site-web
Création d'un site web pour un cabinet dentaire.
=======
# site-web

Ce projet a été crée en utilisant [Angular CLI](https://github.com/angular/angular-cli) version 20.0.5.


Pour installer les "node packages" :
```bash
npm install
```

## Serveur local

Pour tester le site en local : 

```bash
ng serve
```

Il faudra ensuite ouvrir le navigateur et aller sur le site `http://localhost:4200/`. 


## Hébergement 
Le site est automatiquement déployé via GitHub Actions lors d'un push sur la branche `main`.

Pour un build manuel : 

```bash
ng build --configuration production --base-href /site-web/
```



