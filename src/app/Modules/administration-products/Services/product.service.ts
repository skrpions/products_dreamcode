import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../Models/product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _urlBase : string = 'http://crud-env.eba-bkhd7abg.us-east-1.elasticbeanstalk.com/producto/'

  constructor(private _http: HttpClient) { }

  /* Get All Products */
  getProducts(): Observable<ProductModel[]>
  {
    return this._http.get<ProductModel[]>(this._urlBase + 'lista' );
  } 

  /* Get Product X Name */
  getProductxName(Name: string): Observable<ProductModel>
  {
    return this._http.get<ProductModel>(this._urlBase + 'detailname/' + Name);
  } 

  /* Get Product X Id */
  getProductxId(id: number): Observable<ProductModel>
  {
    // return this._http.get<ProductModel>(this._urlBase + 'detail' + Id);
    return this._http.get<ProductModel>(`${this._urlBase}/detail/${id}`);
  }

  /* Add Product */
  add(Product: ProductModel): Observable<ProductModel>
  {
    return this._http.post<ProductModel>(this._urlBase + 'create', Product);
  } 

  /* Update Product */
  update(Id: number, Product: ProductModel): Observable<ProductModel>
  {
    return this._http.put<ProductModel>(this._urlBase + 'update/' + Id, Product);
  } 

  /* Delete Product */
  delete(Id: number): Observable<any>
  {
    return this._http.delete<any>(this._urlBase + 'delete/' + Id);
  } 
  
}
