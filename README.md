# NgShop

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Henry's Notes

los schematic son comandos disponibles en algunos modulos que permiten a partir de ellos generar código automáticamente y que cumpla con ciertas reglas, por ejemplo mediante un schematic del modulo angular material, se pueden generar formularios preconstruidos y que cumplen con las reglas de diseño de material design.

Al utilizar http client module se debe tener presente que devuelve un observable, por lo tanto el resultado del request se debe procesar mediante el method subscribe

mediante la instrucción return this.http.get<Product[]> le decimos a angular que el request de tipo get, debe ser mapeado a un array de Product, este mismo principio se puede aplicar para cualquier escenario

el type Partial<T> permite hacer un wrapper para que todos los campos de T sean opcionales, es muy util al realizar request del tipo put o patch

un FormModule es un modulo para generar formularios que pueden ser enlazados mediante una directiva ngModel
por otro lado un ReactiveFormModule utiliza un objeto FormControl para poder suscribirnos a un evento de cambio de valor y de esa manera reaccionar antes cambios en el valor de un input,
agrega funcionalidades adicionales tales como validaciones y observables para extender el comportamiento del flujo de datos desde la vista hacia el controlador.

new FormControl('valor inicial',[validaciones usando objeto Validators] );
this.emailField.valueChanges.subscribe(); para escuchar cambios en el valor de un formControl
