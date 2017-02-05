import { BlockBindingsComponent } from './../block-bindings/block-bindings.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-block-bindings-let',
  templateUrl: './block-bindings-let.component.html',
  styleUrls: ['./block-bindings-let.component.css']
})
export class BlockBindingsLetComponent implements OnInit {
  appComp: any = this;
  constructor() {
  }

  ngOnInit() {
  }

  es6_let(condition) {
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

  es6_const(){
    const maxItems = 5;

    //maxItems = 6;  it would throw an error  
  }

  es5_for(){
    for (var i = 0; i < 10; i++) {
        //process(items[i]);
    }

    // i is still accessible here
    console.log(i);                     // 10
  }

  es6_for(){
    for (let i = 0; i < 10; i++) {
        //process(items[i]);
    }

    // i is not accessible here - throws an error
    //console.log(i);                   // 10
  }
}
