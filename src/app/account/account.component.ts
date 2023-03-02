import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountService } from '../services/account-service/account.service';
import { LoggingService } from '../services/logging-service/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account!: {name: string, status: string};
  @Input() id!: number;
  // We do not have to emit as we are using a service; AccountService.
  // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private loggingService: LoggingService,
              private accountService: AccountService) {

  }

  onSetTo(status: string) {
    // We do not have to emit as we are using a service; AccountService.
    // this.statusChanged.emit({id: this.id, newStatus: status});

    this.accountService.onStatusChanged({id: this.id, newStatus: status});

    // console.log('A server status changed, new status: ' + status);
    // we are using a service to console.log
    // this.loggingService.logstatusChange(status);
    // Instead of calling LoggingService here and printing console.log, we can call this LoggingService in AccountService.
    // This approach is called Injecting services into services.  

    // For cross component communication
    // We have declared an EventEmitter in our account service and we are emitting an event here.
    // If we want to listen to this event in "new-account.component.ts" we need to subscribe to this event in "new-account.component.ts"
    this.accountService.statusUpdated.emit(status);
  }
}
