import { Component, EventEmitter, Output } from '@angular/core';
import { AccountComponent } from '../account/account.component';
import { AccountService } from '../services/account-service/account.service';
import { LoggingService } from '../services/logging-service/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {
  // We do not have to emit as we are using a service; AccountService.
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private loggingService: LoggingService,
    private accountService: AccountService) {

      // The following code is written for cross component communication
      // the "account.component.ts" emitted an event and we are listening(by subscribing) to that event in "new-account.component.ts"
      accountService.statusUpdated.subscribe(
        (status: string) => alert('New Status: ' + status)
      );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    // We do not have to emit as we are using a service: AccountService.
    /* this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    }); */

    this.accountService.onAccountAdded({name: accountName, status: accountStatus});

    // console.log('A server status changed, new status: ' + accountStatus);
    // we are using a service to console.log
    // this.loggingService.logstatusChange(accountStatus);
    // Instead of calling LoggingService here and printing console.log, we can call this LoggingService in AccountService.
    // This approach is called Injecting services into services.  
  }
}
