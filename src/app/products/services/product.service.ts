import { Inject, Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { productsAPI } from '../products.config';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient,
              @Inject(productsAPI) private baseUrl: string) {
  }

  private static handleError(err: HttpErrorResponse) {
    if (err.error instanceof Error) {
      console.error('An error occurred:', err.error.message);
    } else {
      console.error(`Backend returned code ${err.status}, body was: ${err.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  }

  getProducts(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(this.baseUrl).pipe(
      catchError(ProductService.handleError)
    );
  }

  getProductById(id: number): Observable<ProductModel> {
    const url = this.baseUrl + '/' + id;
    return this.http.get<ProductModel>(url).pipe(
      catchError(ProductService.handleError)
    );
  }

  createProduct(product: ProductModel): Observable<ProductModel> {
    const url = `${this.baseUrl}`;
    const body = JSON.stringify(product);
    const options = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http.post<ProductModel>(url, body, options);
  }

  updateProduct(product: ProductModel): Observable<ProductModel> {
    const url = `${this.baseUrl}/${product.id}`;
    const body = JSON.stringify(product);
    const options = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http.put<ProductModel>(url, body, options);
  }
}
