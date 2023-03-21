import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `
  ]
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;

  constructor(private paisService: PaisService) {

  }

  buscar(termino: string): void {
    this.mostrarSugerencias = true;
    this.hayError = false;
    this.termino = termino;
    console.log(this.termino);
    this.paisService.buscarPais(this.termino)
      .subscribe((response) => {
        this.paises = response;
        console.log(this.paises);
      }, (err) => { 
        this.paises = [];
        this.hayError = true;
      });
  }

  sugerencias(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;
    this.paisService.buscarPais(termino)
      .subscribe(paises => { 
        this.paisesSugeridos = paises.splice(0, 5);
      }, (err) => { 
        this.paisesSugeridos = [];
      });
  }

  buscarSugerido(termino: string): void {
    this.buscar(termino);
    
  }

}
