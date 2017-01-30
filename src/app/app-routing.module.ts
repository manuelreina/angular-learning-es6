import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlockBindingsComponent } from './block-bindings/block-bindings.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/block-bindings',
    pathMatch: 'full'
  },
  {
    path: 'block-bindings',
    component: BlockBindingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [BlockBindingsComponent];