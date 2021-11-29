import { ProductModel } from './../../Models/product-model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../Services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  // Declaro una instancia para controlar todo el formulario
  public formulario: FormGroup;

  hide = true;
  accion     : string  = 'Agregar';
  iconbutton : string  = 'add';

  constructor( private _fb: FormBuilder, private _ProductSvc: ProductService, private _router: Router) { 
    // Inicializa y Controla todo el formulario del html
    this.construir_formulario();
  }

  /* ------------------( ngOnInit )--------------- */
  ngOnInit(): void { }

  /* ------------------( Construir Formulario )--------------- */
  private construir_formulario(): void {
    
    // Declaro una instancia para definir, enlazar y controlar todo el formulario del html
    this.formulario = this._fb.group
    ({
        Producto : ['', [Validators.required]],
        Precio   : ['', [Validators.required]]
      });
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
      
      // Agrego datos 
      this.agregarProducto(Producto);     
    }
    else{
      // Envio el status : 600 > Formulario No Válido 
      console.log('Formulario Nó Válido');
    }
  }

  /* ------------------( Agregar )--------------- */
  agregarProducto(Producto: ProductModel): void {

    // Agrego todos los datos que tenga en el objeto para enviarlos al backend
    this._ProductSvc.add(Producto).subscribe((result: any) => {
      console.log('Result>', result);
      
      console.log('Registrado Exitosamente');

      this._router.navigate(['/panel-administrativo/listado']);
    });
  }

}
