import { Injectable } from '@angular/core';

@Injectable()
export class UtilService {

  constructor() { }

  printFunction(func) {
    return func.toString().replace(/\n/g, '<br/>').replace(/\s/g, '&nbsp;');
  }

}
