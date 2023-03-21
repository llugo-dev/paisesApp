import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  private apiUrl = 'https://restcountries.com/v2/region';

  constructor(
    private httpClient: HttpClient
  ) { }

  buscarRegion(termino: string): Observable<Country[]> {
    const params = new HttpParams()
      .set('fields', 'name,capital,alpha2Code,flag,population');

    const url = `${this.apiUrl}/${termino}??fields=name,capital,alpha2Code,flag`;
    return this.httpClient.get<Country[]>(url, { params })
      .pipe(tap(console.log));
  }

}
