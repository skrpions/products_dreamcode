import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationProductsRoutingModule } from './administration-products-routing.module';
import { HomeProductComponent } from './Components/home-product/home-product.component';
import { DetailProductComponent } from './Components/detail-product/detail-product.component';
import { ListProductsComponent } from './Components/list-products/list-products.component';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { EditProductComponent } from './Components/edit-product/edit-product.component';


@NgModule({
  declarations: [
    HomeProductComponent,
    DetailProductComponent,
    ListProductsComponent,
    AddProductComponent,
    EditProductComponent
  ],
  imports: [
    CommonModule,
    AdministrationProductsRoutingModule
  ]
})
export class AdministrationProductsModule { }
