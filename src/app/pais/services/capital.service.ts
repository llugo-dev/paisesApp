import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class CapitalService {

  private apiUrl: string = 'https://restcountries.com/v2/capital';

  constructor(
    private httpClient: HttpClient
  ) { }

  buscarCapital(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/${termino}`;
    return this.httpClient.get<Country[]>(url);
  }
}
