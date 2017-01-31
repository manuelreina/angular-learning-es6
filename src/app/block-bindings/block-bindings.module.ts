import { BlockBindingsRoutesModule } from './block-bindings-routing.module';
import { BlockBindingsLetComponent } from './block-bindings-let/block-bindings-let.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockBindingsComponent } from './block-bindings/block-bindings.component';

@NgModule({
  imports: [
    CommonModule,
    BlockBindingsRoutesModule
  ],
  declarations: [
    BlockBindingsLetComponent,
    BlockBindingsComponent
  ],
  providers: [  ]
})
export class BlockBindingsModule {}
