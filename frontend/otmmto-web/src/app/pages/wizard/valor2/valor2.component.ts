import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-valor2',
  templateUrl: './valor2.component.html',
  styleUrls: ['./valor2.component.scss']
})
export class Valor2Component implements OnInit {

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
