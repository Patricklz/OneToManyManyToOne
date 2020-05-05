import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-participantes',
  templateUrl: './participantes.component.html',
  styleUrls: ['./participantes.component.scss']
})
export class ParticipantesComponent implements OnInit {

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
