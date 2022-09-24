import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

//json-server --watch db.json
//npm install -g json-server
@Injectable({
  providedIn: 'root'
})
export class ProductapiService {
  constructor(private http: HttpClient) { }

  postProducts(data: any) {
    return this.http.post<any>("http://localhost:3000/posts", data).pipe(map((res: any) => {
      return res;
    }))
  }

  getProductDetails() {
    return this.http.get<any>("http://localhost:3000/posts").pipe(map((res: any) => {
      return res;
    }))
  }

  updateProducts(data: any, id: number) {
    return this.http.put<any>("http://localhost:3000/posts/" + id, data).pipe(map((res: any) => {
      return res;
    }))
  }

  deleteProducts(id: number) {
    return this.http.delete<any>("http://localhost:3000/posts/" + id).pipe(map((res: any) => {
      return res;
    }))
  }

}