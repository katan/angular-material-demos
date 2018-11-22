# Angular Material demos

This project provides a functionality demos using Material Design.\
Still working to provide a beta release.

## Dependencies
#### Mandatory
- [@angular/core](https://www.npmjs.com/package/@angular/core) ^7.x
- [@angular/cdk](https://www.npmjs.com/package/@angular/cdk) ^7.x
- [@angular/material](https://www.npmjs.com/package/@angular/material) ^7.x
#### Optional
- [@material/layout-grid](https://www.npmjs.com/package/@angular/layout-grid) ^0.x _(Adds responsive styles)_
- [material-design-icons-iconfont](https://www.npmjs.com/package/material-design-icons-iconfont) ^4.x _(Material icons font)_
- [@kolkov/angular-editor](https://www.npmjs.com/package/@kolkov/angular-editor) ^0.x _(A WYSWYG html editor)_
- [crypto-js](https://www.npmjs.com/package/crypto-js) ^3.x _(Use for encryption & encoding data on browser storage)_
- [file-saver](https://www.npmjs.com/package/file-saver) ^2.x _(Use for generate file to download)_
- [xlsx](https://www.npmjs.com/package/xlsx) ^0.x _(Use to convert Arrays on Excel format)_
- [ngx-perfect-scrollbar](https://www.npmjs.com/package/ngx-perfect-scrollbar) _(A beautify scroll bar)_

## Features
- Uses theming Angular material
- Simple folder structure
- Uses last packages released
- Is Focus on minor initial bundles sizes and best performance
- Demos provideds:
    - Data tables
    - Tabs
    - Forms _(Working on)_
    - Espansion panels _(AKA Accordion)_
    - More demos on next releases ...

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
Use `npm run build:prod` on the root path for a production build.

## Bundles analyzer

Run `npm run analyze` on the root path to analyze the bundles project.

## Running unit tests _(not yet)_

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests _(not yet)_

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
