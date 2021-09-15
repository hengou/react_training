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
* Best Practice: un composant => un fichier / 30-40 lines 
* redux: create a central repo for the need of spreading the info (props, state) to many components

### console.trace => to show call stack trace

### generation tool
npx generate-react-cli / generate-react-cli.json

### CSS Module & CSS Preprocessor (scss, less etc.) & story file with each component you generate (story book)
https://storybook.js.org/docs/react/get-started/introduction

### react-proto: userful to design during pre-process (define components and statefull/stateless, props) 

### bookys-ebooks

### props to pass information go down / function callback to go up

### flux / dedux /

### todo 
story book
hook + function


### Redux
like a store, not bind to react.
reducer (pure function) => return always a new state

### devdocs.io