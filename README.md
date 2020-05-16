# Checklist

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.26.

![Node.js CI](https://github.com/ronlawrence3/checklist/workflows/Node.js%20CI/badge.svg)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via Jest.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via Cypress.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# How this was started
```
ng n checklist --routing=true --style=scss  
cd checklist
ng add @angular/material --defaults
ng add @ngrx/store --minimal false 
ng add @ngrx/effects --minimal false
ng add @ngrx/router-store
ng add @ngrx/entity
ng add @ngrx/data
ng add @ngrx/schematics --defaults
ng add @angular/pwa
npm i --save ag-grid-community ag-grid-angular

# testing
ng add @briebug/jest-schematic
ng add @briebug/cypress-schematic --removeProtractor=true
```
