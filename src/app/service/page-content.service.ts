import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PageContentService {

  apiUrl: string = "http://localhost:8080/";

  constructor(private httpClient: HttpClient) { }

  findAll():Observable<any> {
    return this.httpClient.get(this.apiUrl.concat("v1/pedidos"));
  }
}
