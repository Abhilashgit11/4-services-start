import { Component, OnInit } from '@angular/core';
import { AccountService } from './services/account-service/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // Moving the array of accounts to account.service.ts
  /* accounts = [
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
  ]; */
  accounts: {name: string, status: string}[] = [];

  constructor(private accountService: AccountService) {

  }
  ngOnInit(): void {
     this.accounts = this.accountService.accounts;
  }

  // Moving the following code to account.service.ts
  /* onAccountAdded(newAccount: {name: string, status: string}) {
    this.accounts.push(newAccount);
  }

  onStatusChanged(updateInfo: {id: number, newStatus: string}) {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
  } */
}
