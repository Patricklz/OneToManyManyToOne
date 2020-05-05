import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit {

  telaSelecionada: number;

  constructor() { }

  ngOnInit(): void {
    this.telaSelecionada = 0;
  }

  voltarAction() {
    this.telaSelecionada = this.telaSelecionada === 0 ? this.telaSelecionada : this.telaSelecionada - 1;
  }

  avancarAction() {
    this.telaSelecionada = this.telaSelecionada === 4 ? this.telaSelecionada : this.telaSelecionada + 1;
  }

}
