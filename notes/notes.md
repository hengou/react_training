### Scafolding d'une appli avec cli
npx create-react-app app --template=typescript

### type de composant
- UI
- Fonctional
- Layout

### structure de projet
- componant principal (même nom que le nom du composant principal dont le nom commence par MAJUSCULE. e.g: App)
- subdirectory "components/"

### Web component notion depuis HTML5 => react composant

### Scope 
ES5 => local, global
ES6 => ++ component scope/file : pour pouvoir être utilisé ailleur, il faut "export" (principal,un par fichier; secondaire, multi par ficher possible)

### react composant
* reçoit des props (en lecture seul)
* commence tjr par une majuscule
* gère son cycle de vie
* deux types de component =>  
    * fonction: avec nouvelle version, aussi redux etc., ce type prend de plus en plus d'ampleur, comme c'est plus facile à tester et aussi moins de besoins de partager les états. Initialement "stateless" cad: pas de gestion d'état, ni cycle de vie. mais c'est plus de cas avec Hook - <return>
    * objects Class: héritage, partage d'états - <render>
* Best Practice: un composant => un fichier


### console.trace => to show call stack trace