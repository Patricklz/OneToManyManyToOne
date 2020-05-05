import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-valor1',
  templateUrl: './valor1.component.html',
  styleUrls: ['./valor1.component.scss']
})
export class Valor1Component implements OnInit {

  @Output() avancar = new EventEmitter<void>();
  @Output() voltar = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  avancarAction() {
    this.avancar.emit();
  }

  voltarAction() {
    this.voltar.emit();
  }

}
