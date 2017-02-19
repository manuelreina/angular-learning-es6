import { Component, OnInit, Input, ElementRef } from '@angular/core';

interface IFunctionCode {
  title: string;
  code: string;
}

export class ES6Section {
  es6SectionComp: any = this;
  constructor() {
    Object.keys(this['__proto__']).forEach(property => {
        if (typeof this['__proto__'][property] === 'function') {
            console.log('Executing method : ' + property);
            this['__proto__'][property]();
        }
    });
  }
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
        if (funct.toLowerCase().startsWith('es6_') || funct.toLowerCase().startsWith('es5_')) {
            const functionString = this.parentComp['__proto__'][funct];
            let title = funct.split('_').join(' ');
            this.functionList.push({title: title, code: functionString});
        }
      }
    }
  }

}
