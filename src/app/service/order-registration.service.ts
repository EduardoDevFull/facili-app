import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderRegistrationService {

  apiUrl: string = "http://localhost:8080/";

  constructor(private httpClient: HttpClient) { }


  create(pedidoRequest: any):Observable<any> {
    return this.httpClient.post(this.apiUrl.concat("v1/pedidos"), pedidoRequest);
  }

}
