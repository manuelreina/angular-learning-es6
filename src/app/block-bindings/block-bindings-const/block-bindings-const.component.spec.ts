import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockBindingsConstComponent } from './block-bindings-const.component';

describe('BlockBindingsConstComponent', () => {
  let component: BlockBindingsConstComponent;
  let fixture: ComponentFixture<BlockBindingsConstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockBindingsConstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockBindingsConstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
