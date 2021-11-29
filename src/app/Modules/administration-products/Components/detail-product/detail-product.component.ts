import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel } from '../../Models/product-model';
import { ProductService } from '../../Services/product.service';
import { switchMap } from "rxjs/operators";

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

  product: ProductModel;

  constructor( private _activateRoute: ActivatedRoute,
               private _productService: ProductService,
               private router: Router ) { }

  ngOnInit(): void {

    this._activateRoute.params
      .pipe(
        switchMap( ({id}) => this._productService.getProductxId(id) )
      )
      .subscribe( product => {
        console.log('Producto Recuperado>',product);
        
        this.product = product;
      } )
  }

  regresar() {
    this.router.navigate(['/panel-administrativo/listado'])
  }

}
