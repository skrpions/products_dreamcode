import { Component, OnInit } from '@angular/core';
import { ProductModel } from './../../Models/product-model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../Services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  // Declaro una instancia para controlar todo el formulario
  public formulario: FormGroup;

  idProduct : number;
  accion    : string  = 'Guardar';
  iconbutton: string  = 'save';
  product : ProductModel;

  constructor( 
    private _fb: FormBuilder, 
    private _productSvc: ProductService, 
    private _router: Router,
    private _activedRoute: ActivatedRoute) { 
    // Inicializa y Controla todo el formulario del html
    this.construir_formulario();
  }

  /* ------------------( ngOnInit )--------------- */
  ngOnInit(): void { 
    /* Este método muestra en los input del html los valores que le corresponden al Id seleccionado  */
     // Obtengo el parametro que viene en la url y la desetructuro con ({id})    
    this._activedRoute.params
      .pipe(
        tap( ({id}) => this.idProduct = id),
        switchMap( ({id}) => this._productSvc.getProductxId(id))
      )
      .subscribe( product => {
        console.log('IdProducto Update>',this.idProduct);
        console.log('Producto Recuperado Update>',product);
        this.product = product;

        /* Cargo los valores del id en el formulario */
        this.CargarValoresDelId();
      })
  }

  /* ------------------( Construir Formulario )--------------- */
  private construir_formulario(): void {
    
    // Declaro una instancia para definir, enlazar y controlar todo el formulario del html
    this.formulario = this._fb.group
    ({
        Producto : ['', [Validators.required]],
        Precio   : ['', [Validators.required]]
      });
  }

  /* ------------------( Cargar Valores )--------------- */
  CargarValoresDelId(): void {

      // Colocaré los valores recuperados en el input del formulario html
      this.formulario.patchValue({ Producto : this.product.nombre});
      this.formulario.patchValue({ Precio   : this.product.precio});
  }

  /* ------------------( Guardar Formulario )--------------- */
  guardarFormulario(): void {
    // Pregunto si el formulario es válido
    if (this.formulario.valid) {

      // 1. Creo un objeto Producto de tipo ProductoModel
      // 2. Recupero los valores del formulario y los almacenó dentro del objeto Producto para poderlos enviar al backend
      const Producto: ProductModel = {
        nombre : this.formulario.get('Producto')?.value,
        precio : this.formulario.get('Precio')?.value,
      }
      
      // Actualizo datos 
      this.ActualizarProducto(Producto);     
    }
    else{
      // Envio el status : 600 > Formulario No Válido 
      console.log('Formulario Nó Válido');
    }
  }

  /* ------------------( Actualizar )--------------- */
  ActualizarProducto(Producto: ProductModel): void {

    // Agrego todos los datos que tenga en el objeto para enviarlos al backend
    this._productSvc.update(this.idProduct, Producto).subscribe((result: any) => {
      console.log('Result>', result);
      
      console.log('Actualizado Exitosamente');

      this._router.navigate(['/panel-administrativo/listado']);
    });
  }

}
