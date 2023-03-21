import { Component, Output, EventEmitter, ViewChild, ElementRef, OnInit } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-capital-input',
  templateUrl: './capital-input.component.html'
})
export class CapitalInputComponent implements OnInit {
  
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  
  @ViewChild('txtTermino') txtTermino!: ElementRef<HTMLInputElement>; 
  
  debouncer: Subject<string> = new Subject();
  
  termino: string = '';
  
  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe(valor => { 
        this.onDebounce.emit(valor);
      });
  }

  buscar(): void {
    this.txtTermino.nativeElement.value = '';
    this.onEnter.emit(this.termino);
  }

  teclaPresionada(): void {
    this.debouncer.next(this.termino);
  }
}
