# Shopping Site

This is a basic angular application that works as a simple ecommerce plattform.
We are using this app to practice different features of Angular

Para agregar al blog,
Reactividad con rxjs

environment
por defecto angular entrega 2 ambientes

para crear un nuevo ambiente
paso cero, correr ng build --prod para confirmar que todo esté correctamente armado. (nota, angular.json es el archivo que guía el proceso de build y allí podremos ajustar la forma en que el proceso se realizará. No es recomendable modificar el ambiente de production en angular.json)

paso 1, crear un archivo environment nuevo en la carpeta environments del proyecto
paso 2, vamos al archivo angular.json y creamos una key en el objeto configurations, esta key será el nombre de nuestro nuevo environment y contendrá como valor el objeto con las configuraciones del ambiente nuevo.
paso 3, en el key serve del angular.json, en el atributo configurations, agregamos un key con el nombre de nuestro ambiente nuevo.
paso 4 ng serve -c=nuevoAmbiente y ng build -c=nuevoAmbiente

crear autenticacion de angular con firebase para
crear servicio ng g s core/services/auth

deploy in firebase
firebase init and choose type of project
choose dist folder
ng build --prod
firebase deploy

firebase.json

hosting.rewrites: {
source:'asterisco asteriscto',
destination:"index.html"
}
