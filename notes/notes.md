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
- reçoit des props (en lecture seul)
- commence tjr par une majuscule
- gère son cycle de vie
- deux types de component =>  fonction (avec nouvelle version, aussi redux, ce type prend de plus en plus d'ampleur. Initialement "stateless" cad: pas de gestion d'état, ni cycle de vie. mais c'est plus de cas avec Hook) / objects Class
- un composant => un fichier