import { Component, ElementRef, EventEmitter, Output, ViewChild, OnInit } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html'
})
export class PaisInputComponent implements OnInit {
  
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  
  debouncer: Subject<string> = new Subject();
  
  @ViewChild('txtTermino') txtTermino!: ElementRef<HTMLInputElement>;
  
  termino: string = '';
  
  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe(valor => { 
        this.onDebounce.emit(valor);
    });
  }

  buscar() {
    this.txtTermino.nativeElement.value = '';
    this.onEnter.emit(this.termino);
  }

  teclaPresionada(event: any) {
    this.debouncer.next(this.termino);
  }

}
