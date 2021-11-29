import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeProductComponent } from './Components/home-product/home-product.component';
import { ListProductsComponent } from './Components/list-products/list-products.component';
import { DetailProductComponent } from './Components/detail-product/detail-product.component';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { EditProductComponent } from './Components/edit-product/edit-product.component';

const routes: Routes = [
  {
    path: '',
    component: HomeProductComponent,
    children: 
    [
      { path: 'listado',
        component: ListProductsComponent
      },
      {
        path: 'detail/:id',
        component: DetailProductComponent
      },
      {
        path: 'add',
        component: AddProductComponent
      },
      {
        path: 'update/:id',
        component: EditProductComponent
      },
      { 
        path: '**',
        redirectTo: 'listado'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationProductsRoutingModule { }
