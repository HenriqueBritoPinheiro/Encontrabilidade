import { Customer } from './../model/Customer';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../Config/api_config';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  url: String = API_CONFIG.urlApi;
  constructor(private http: HttpClient) { }

  save(customer: Customer): Observable<Customer[]> {
    return this.http.post<Customer[]>(this.url + '/customer/create', customer);
  }
}
