import { Component, OnInit, Input, ElementRef } from '@angular/core';

interface IFunctionCode {
  title: string;
  code: string;
}

@Component({
  selector: 'app-code-snippet',
  templateUrl: './code-snippet.component.html',
  styleUrls: ['./code-snippet.component.css']
})
export class CodeSnippetComponent implements OnInit {
  @Input() parentComp: any;

  functionList: IFunctionCode[] = [];

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    if (this.parentComp && this.parentComp['__proto__']) {
      for (const funct of Object.keys(this.parentComp['__proto__'])) {
        if (funct.startsWith('es6_') || funct.startsWith('es5_')) {
            const functionString = this.parentComp['__proto__'][funct];
            this.functionList.push({title: funct, code: functionString});
        }
      }
    }
  }

}
