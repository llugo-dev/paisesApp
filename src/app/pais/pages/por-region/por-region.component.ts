import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { RegionService } from '../../services/region.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      button {
        margin-right: 0.25rem;
      }
    `
  ]
})
export class PorRegionComponent {

  regiones: string[] = [
    'americas',
    'asia',
    'africa',
    'europe',
    'oceania'
  ];

  regionActiva: string = '';

  paises: Country[] = [];

  constructor(
    private regionService: RegionService
  ) { }

  getClaseCSS(region: string): string {
    return (region === this.regionActiva)
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }
    
  activarRegion(region: string): void {
    if (region === this.regionActiva) return;
    this.regionActiva = region;
    console.log(this.regionActiva);
    this.regionService
      .buscarRegion(this.regionActiva)
      .subscribe(data => { 
        this.paises = data;
      });
  }
}
