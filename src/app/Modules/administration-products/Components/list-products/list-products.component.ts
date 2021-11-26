import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { ProductModel } from '../../Models/product-model';
import { ProductService } from '../../Services/product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  // Instancia para controlar todo el formulario
  //formulario : FormGroup;

  // Arrays
  productList : ProductModel[] = [];

  /* Ingreso el nombre de las columnas a mostrar en la tabla */
  displayedColumns: string[] = ['Nombre', 'Precio', 'Acciones'];
  dataSource = new MatTableDataSource<ProductModel>();

  /* ViewChild para el ordenamiento y la paginación */
  @ViewChild(MatSort, { static: true }) sort: MatSort;                // Ordenamiento
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator; // Paginación

  constructor(
    private _fb: FormBuilder, 
    private _productSvc: ProductService,
    private _router: RouterModule ) { this.construir_formulario(); }

  ngOnInit(): void {
    this.getProducts();
  }

  /* Construir Formulario */
  construir_formulario(): void {
    /* this.formulario = this._fb.group({
      Nombre : [''],
      Precio : ['']
    }) */
  }

  /* Obtener todos los productos */
  getProducts(): void {
    this._productSvc.getProducts().subscribe( Products => {
      console.log('Productos> ', Products);
      
      this.productList = Products;

      // La fuente de datos para llenar la tabla sera productList
      this.dataSource = new MatTableDataSource(Products);

      // Le asignaré al datasource el ordenamiento y la paginación
      // Para el ordenamiento es necesario agregar matSort en table y mat-sort-header en cada columna que desee ordenar en el archivo .html
      this.dataSource.sort = this.sort;           // Ordenamiento
      this.dataSource.paginator = this.paginator; // Paginación
    })
  }

  /* ------------------( Filtro Avanzado )--------------- */
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
