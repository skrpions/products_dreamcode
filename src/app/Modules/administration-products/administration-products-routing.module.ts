import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeProductComponent } from './Components/home-product/home-product.component';

const routes: Routes = [
  /* {
    path: '',
    component: HomeProductComponent,
    loadChildren: () => import('')
  } */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationProductsRoutingModule { }
