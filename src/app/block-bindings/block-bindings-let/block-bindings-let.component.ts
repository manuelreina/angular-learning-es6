import { ES6Section } from './../../util/code-snippet/code-snippet.component';
import { BlockBindingsComponent } from './../block-bindings/block-bindings.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-block-bindings-let',
  templateUrl: './block-bindings-let.component.html',
  styleUrls: ['./block-bindings-let.component.css']
})
export class BlockBindingsLetComponent extends ES6Section {

  constructor() {
    super();
  }

  ES6_let_declarations(condition) {
      if (condition) {
          let value = 'blue';

          // other code

          return value;
      } else {

          // value doesn't exist here

          return null;
      }
      // value doesn't exist here
  }

  es6_let_in_loops(){
    for (let i = 0; i < 10; i++) {
        //process(items[i]);
    }

    // i is not accessible here - throws an error
    //console.log(i);                   // 10
  }
}
