import { EventEmitter, Injectable } from '@angular/core';
import { LoggingService } from '../logging-service/logging.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    } 
  ];

  statusUpdated = new EventEmitter<string>();

  constructor(private loggingService: LoggingService) { }

  onAccountAdded(newAccount: {name: string, status: string}) {
    this.accounts.push(newAccount);
    this.loggingService.logstatusChange(newAccount.status);
  }

  onStatusChanged(updateInfo: {id: number, newStatus: string}) {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
    this.loggingService.logstatusChange(updateInfo.newStatus);
  }
}
