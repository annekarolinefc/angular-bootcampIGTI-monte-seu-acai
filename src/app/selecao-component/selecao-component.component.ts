import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-selecao-component',
  templateUrl: './selecao-component.component.html',
  styleUrls: ['./selecao-component.component.css']
})
export class SelecaoComponentComponent implements OnInit {
  @Input () opcoesSelecionados = [];
  //TAMANHO DO PEDIDO
  tamanhoInicial: number = 0;
  tamanhoSelecionado: string="";

  //NUMERO DE ACRESCIMOS
  numerodeAcrescimo: number = 0;
  acrescimoMaximo:number=3;


  constructor() { }

  ngOnInit(): void {
  }

  selecionarTamanho(){
    this.tamanhoInicial=1;
    //tamanhoSelecionado=this.value;
  }

  selecionarAcrescimo(){
    if(this.numerodeAcrescimo<3){
      this.numerodeAcrescimo++
    }else if(this.numerodeAcrescimo=3){
      this.numerodeAcrescimo=this.acrescimoMaximo;
    }
  }

}
