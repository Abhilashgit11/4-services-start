import { Injectable } from '@angular/core';


// We do not need @Injectable here
// We need @Injectable on the service where we are injecting a service not on the service that is being injected.
// Since the LoggingService is being injected in AccountService we need @Injectable on AccountService.
/* @Injectable({
  providedIn: 'root'
}) */
export class LoggingService {

  constructor() { }

  logstatusChange(status: string) {
    console.log('A server status changed, new status: ' + status);
  }
}
