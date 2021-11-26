import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'panel-administrativo',
    loadChildren: () => import('./Modules/administration-products/administration-products.module').then(m => m.AdministrationProductsModule)
  },
  {
    path: '**',
    redirectTo: 'panel-administrativo'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
