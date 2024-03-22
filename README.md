# Desafioteiacaixa

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.0.

<pre>
Para implementar o desafio proposto, utilizei o Angular + AngularMaterial

o projeto ficou organizado da seguinte forma:

scr
 |
 -- app 
     |
     -- components - componentes globais da aplicacao
     -- modules -- modulos globais
     -- pages -- visões específicas do usuário
     -- service -- serviços diversos

decisões de implementação:

angular-cli: diminui o tempo de desenvolvimento com a geração de código através do comando ng-generate
para atender os requisitos solicitados no desafio, foi utilizado:
HttpClient: biblioteca para requisições HTTP e consumo de api disponibilizada
MatTable: component AngularMaterial com as funcionalidades de ordenação e paginação de tabelas
Routing: estratégia de navegação entre as visões
Reactive Forms: abordagem Model-Driven dos fomulários com validações e bindings embarcados 
scss: extenção do css para elaborar interfaces responsivas com aproveitamento de código
</pre>

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help


