import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http'

import { AdministrationProductsRoutingModule } from './administration-products-routing.module';
import { HomeProductComponent } from './Components/home-product/home-product.component';
import { DetailProductComponent } from './Components/detail-product/detail-product.component';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { EditProductComponent } from './Components/edit-product/edit-product.component';
import { ListProductsComponent } from './Components/list-products/list-products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../../Shared/angular-material.module';


@NgModule({
  declarations: [
    HomeProductComponent,
    DetailProductComponent,
    AddProductComponent,
    EditProductComponent,
    ListProductsComponent

  ],
  imports: [
    CommonModule,
    AdministrationProductsRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule
  ]
})
export class AdministrationProductsModule { }
