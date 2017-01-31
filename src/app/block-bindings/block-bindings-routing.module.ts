import { BlockBindingsComponent } from './block-bindings/block-bindings.component';
import { BlockBindingsLetComponent } from './block-bindings-let/block-bindings-let.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const blockBindingsRoutes: Routes = [
  { path: 'block-bindings',  component: BlockBindingsComponent },
  { path: 'block-bindings-let',  component: BlockBindingsLetComponent }
];
@NgModule({
  imports: [
    RouterModule.forChild(blockBindingsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class BlockBindingsRoutesModule { }
