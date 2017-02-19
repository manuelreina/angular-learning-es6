import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockBindingsVarComponent } from './block-bindings-var.component';

describe('BlockBindingsVarComponent', () => {
  let component: BlockBindingsVarComponent;
  let fixture: ComponentFixture<BlockBindingsVarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockBindingsVarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockBindingsVarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
