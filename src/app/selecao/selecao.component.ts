import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-selecao',
  templateUrl: './selecao.component.html',
  styleUrls: ['./selecao.component.css']
})
export class SelecaoComponent {

  //INFORMAR QUE É UM INPUT PARA EXIBIR
  @Input() titulo: string;
  @Input() opcoes: string[] = [];
  @Input() escolhaAte: number = 1;

  constructor() {
    this.titulo='';
  }


}
