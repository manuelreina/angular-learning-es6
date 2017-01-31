import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-block-bindings-let',
  templateUrl: './block-bindings-let.component.html',
  styleUrls: ['./block-bindings-let.component.css']
})
export class BlockBindingsLetComponent implements OnInit {

  code1 = `function getValue(condition) {

      if (condition) {
          let value = 'blue';

          // other code

          return value;
      } else {

          // value doesn't exist here

          return null;
      }

      // value doesn't exist here
  }`;
  constructor() { }

  ngOnInit() {
  }

}
