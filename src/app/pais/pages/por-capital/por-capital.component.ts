import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { CapitalService } from '../../services/capital.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html'
})
export class PorCapitalComponent {
  
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(
    private capitalService: CapitalService
  ) { }
  
  buscar(termino: string): void {
    this.hayError = false;
    this.termino = termino;
    this.capitalService.buscarCapital(this.termino)
      .subscribe(data => { 
        this.paises = data;
        console.log(data);
      }, err => { 
        this.hayError = true;
        this.paises = [];
      });
  }

  sugerencias(termino: string): void {
    this.hayError = false;
    this.buscar(termino);
  }
}
