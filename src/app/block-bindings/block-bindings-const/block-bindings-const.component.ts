import { ES6Section } from './../../util/code-snippet/code-snippet.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-block-bindings-const',
  templateUrl: './block-bindings-const.component.html',
  styleUrls: ['./block-bindings-const.component.css']
})
export class BlockBindingsConstComponent extends ES6Section implements OnInit {

  constructor() { super(); }

  ngOnInit() {
  }

   ES6_const_declarations(){
    const maxItems = 5;

    //maxItems = 6;  it would throw an error  
  }

}
