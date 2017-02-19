import { Component, OnInit } from '@angular/core';
import { ES6Section } from './../../util/code-snippet/code-snippet.component';

@Component({
  selector: 'app-block-bindings-var',
  templateUrl: './block-bindings-var.component.html',
  styleUrls: ['./block-bindings-var.component.css']
})
export class BlockBindingsVarComponent extends ES6Section implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

  ES5_var_declarations_and_hoisting(condition) {
    if (condition) {
        var value = "blue";

        // other code

        return value;
    } else {

        // value exists here with a value of undefined

        return null;
    }

    // value exists here with a value of undefined
  }

  ES5_var_in_loops(){
    for (var i = 0; i < 10; i++) {
        //process(items[i]);
    }

    // i is still accessible here
    console.log(i);                     // 10
  }

}
