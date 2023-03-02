# Services

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.0.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

-------------Angular tutorial from Udemy with Maximilian-----------------
-------------Angular 8 The Complete Guide-----------------

1. Created a new Angular project with command ng new services.
2. Copied and pasted the "src" folder from Exercise files.
3. Created an logging service with command "ng g s logging"
4. Instead of using console.log in "account.component.ts" and "new-account.component.ts" we are using console.log in only logging.service.ts
5. We are injecting LoggingService in "account.component.ts" and "new-account.component.ts" via a constructor.
6. This way the app works and there is no code duplication.
7. Created an "account" service with command ng g s account.
8. Copied and pasted an array named "accounts[]" and two methods from "app.component.ts" to "account.service.ts".
9. In "app.component.html" we do not have to catch any events as we are not emitting. So commented out the following code:
    1.  <app-new-account (accountAdded)="onAccountAdded($event)"></app-new-account>
    2. (statusChanged)="onStatusChanged($event)"></app-account>
10. This way we are not adding account or changing account status via @Output but via a service.

# Injecting services into services.

11. Injecting LoggingService into AccountService by creating a constructor
12. Now we are using the LoggingService to concole.log in AccountService

# Cross component communication

13. "account.component.ts" and "new-account.component.ts"  are two components
14. We are trying to communicate between these two components.
15. If anything happens in "account.component.ts", "new-account.component.ts" should get notified
16. We can achieve this with services by declaring an EventEmitter in the service (For instance: AccountService.) 
    1.   statusUpdated = new EventEmitter<string>();
17. Now we can emit an event from "account.component.ts" using the accountService.
18. Now how to isten to this event in "new-account.component.ts"?
19. We subscribe to this event in the following way:
    1. accountService.statusUpdated.subscribe(
        (status: string) => alert('New Status: ' + status)
      );