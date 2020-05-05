import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nome-desafio',
  templateUrl: './nome-desafio.component.html',
  styleUrls: ['./nome-desafio.component.scss']
})
export class NomeDesafioComponent implements OnInit {

  @Output() avancar = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  avancarAction() {
    this.avancar.emit();
  }

}
