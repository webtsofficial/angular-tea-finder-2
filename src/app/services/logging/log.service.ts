import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  error(msg: string) {
    console.error(msg);
  }
  warn(msg: string) {
    console.warn(msg);
  }
  log(msg) {
    console.log(msg);
  }
}
