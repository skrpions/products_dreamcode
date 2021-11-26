import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeProductComponent } from './Components/home-product/home-product.component';
import { ListProductsComponent } from './Components/list-products/list-products.component';

const routes: Routes = [
  {
    path: '',
    /* component: HomeProductComponent, */
    children: 
    [
      { path: 'listado' , component: ListProductsComponent} ,
      { path: '**' , redirectTo: 'listado'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationProductsRoutingModule { }
