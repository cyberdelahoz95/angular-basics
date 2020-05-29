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

To create a component we must first create a folder with the name of the component. Then we create three files, one for template, one for styles and one for typescript. Finally we have to modify the file app.module.ts and import the component and add declarations attribute.

To add a module to our angular app we must import the module in the file app.module.ts
later on the attribute import (which is an array) inside that same file (app.module.ts) we add the imported module. (for an example check the module FormsModule)

@Input is the way Angular makes data flows from parents components to its children components.
@Output is the way Angular makes data flows from children components to their parents. Also Output fires events from the childre components that can be handle by the parent

COMPONENT Lifecycle
constructor
ngOnChange
ngOnInit it is executed just once, when the component is rendered, here we can add rest api calls
ngOnCheck
ngOnDestroy, it cna be used to kill listeners

ng g c <component_name> Creates a new component

ng lint 